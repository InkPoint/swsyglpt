var call = $.post, $innerbar, $designer, $desview, $form, $info, $basepath, $realname;
var runtime = {};
var types = ['正常', '分类', '图表', '计算'];
var graph;
var _project = {
        assign_user:function (projectId) {
            var me = this;
            projectId = projectId || runtime.projectId;
            if (projectId) {
                // row的类型
                rpc.qform.project.getUsers({projectId:projectId}, function (data) {
                    var users = [];
                    $.each(data, function (i, a) {
                        users.push(a.user);
                    });
                    $("#selected-users").val(users.join(' '));
                    var dlg = getDialog();
                    $("#user-editor").appendTo('#editor-dialog-content').show();
                    dlg.dialog({title:'编辑人员', resizable:true,
                        onClose:function () {
                        },
                        buttons:[
                            {text:'确认', iconCls:'icon-ok', id:'edit-rows-ok'}
                        ]});
                    $("#edit-rows-ok").click(function () {
                        rpc.qform.project.setUsers({projectId:projectId, user:$("#selected-users").val()});
                        dlg.dialog('close');
                    });
                });
            } else {
                $.TS.messager.showMsg('错误', '未保存项目，请先完成项目初始化定义', 'error');
            }
        },

        load_project:function (projectId, callback) {
//        $innerbar.hide();
            $("#project-list").hide();
            $designer.find("div").remove();
            rpc.qform.project.info({projectId:projectId}, function (r) {
                if (r) {
                    runtime.projectId = projectId;
                    $("#project-name").val(r.name);
                    $("#project-description").val(r.description);
                    $("#project-status").val(r.status);
                    runtime.projectInfo = r;
                    rpc.qform.project.load({projectId:projectId}, function (pdata) {
                        if (pdata) {
                            runtime.projectData = pdata;
                            $form.hide();
                            $.each(pdata, function (i, a) {
                                _form.draw_form(a, $designer, i);
                                i++;
                            });
                            $designer.show();
                            if (callback) {
                                var status = runtime.projectInfo.status;
                                callback(status);
                            }
                        }
                    });
                }
            });
        },

        show_project_status:function (status) {
            if (status == 0) {
                $("#status-b").linkbutton('enable');
                $("#status-m").linkbutton('disable');
                $("#status-e").linkbutton('disable');
            }
            else if (status == 1) {
                $("#status-b").linkbutton('disable');
                $("#status-m").linkbutton('enable');
                $("#status-e").linkbutton('disable');
            }
            else if (status == 2) {
                $("#status-b").linkbutton('disable');
                $("#status-m").linkbutton('disable');
                $("#status-e").linkbutton('enable');
            }
            else {
                $("#status-b").linkbutton('disable');
                $("#status-m").linkbutton('disable');
                $("#status-e").linkbutton('disable');
            }
        },

        set_project_status:function (status) {
            if (status == 0) {
                $("#status-b").linkbutton('disable');
                $("#status-m").linkbutton('enable');
                $("#status-e").linkbutton('disable');
                $("#mans").linkbutton('enable');
            }
            else if (status == 1) {
                $("#status-b").linkbutton('enable');
                $("#status-m").linkbutton('disable');
                $("#status-e").linkbutton('enable');
                $("#mans").linkbutton('enable');
            }
            else if (status == 2) {
                $("#status-b").linkbutton('enable');
                $("#status-m").linkbutton('enable');
                $("#status-e").linkbutton('disable');
                $("#mans").linkbutton('enable');
            }
            else {
                $("#status-b").linkbutton('disable');
                $("#status-m").linkbutton('disable');
                $("#status-e").linkbutton('disable');
            }
        },

        load_info:function (callback, type) {
            if (runtime.projectId) {
                rpc.qform.project.info({projectId:runtime.projectId}, function (data) {
                    runtime.projectInfo = data;
                    callback();
                });
            }
            else {
                callback(0, type);
            }
        },

        show_project_pre:function (prjid) {
            previewFlow(prjid);
            $desview.show();
        },


        show_project_th:function (projectId) {
            projectId = projectId || '3';
            $desview.find("div").remove();
            rpc.qform.project.load({projectId:projectId}, function (pdata) {
                runtime.projectId = projectId;
                runtime.projectData = pdata;
                rpc.qform.project.info({projectId:projectId}, function (data) {
                    $("#project-name").val(data.name);
                    $("#project-status").val(data.status);
                    runtime.projectInfo = data;
                    $.each(pdata, function (i, a) {
                        _form.draw_form_th(a, $desview);
                    });
                    $desview.show();
                });
            });
        },

        search_project_cons:function (cons) {
            rpc.qform.project.listAll(function (projects) {
                $("#project_list").html("" +
                    "<div class='sheetpanel'>" +
                    "<div id='sch_tabs'>" +
                    "<div title='搜索项目结果' class='mytab'>" +
                    "<span class='tha'><img src='${pageContext.request.contextPath}/static/images/list_num_icon16.png' class='img'></span><span class='thb'>项目名称</span>" +
                    "<span class='thc'>创建者</span><span class='thd'>创建时间</span><span class='the'>类似创建</span>" +
                    "<div class='clearfix'></div>" +
                    "<ul id='prjlist' class='ullist'>" +
                    " </ul" +
                    "</div></div>" +
                    "<div id='preflowview'>" +
                    "<div id='preflag'></div>" +
                    "</div>" +
                    "</div>");
                $designer.hide();
                $form.hide();
                $("#project-list").show();
                _project.render_prj_list(projects, 1);
            });
        },

        search_project:function (name) {
            if (!name) {
                return;
            }
            else {
                rpc.qform.project.search({name:"%" + name + "%"}, function (projects) {
                    $("#project-list").html("" +
                        "<div class='sheetpanel'>" +
                        "<div id='sch_tabs'>" +
                        "<div title='搜索项目结果' class='mytab'>" +
                        "<span class='tha'><img src='/static/images/list_num_icon16.png' class='img'></span><span class='thb'>项目名称</span>" +
                        "<span class='thc'>创建者</span><span class='thd'>创建时间</span><span class='the'>类似创建</span>" +
                        "<div class='clearfix'></div>" +
                        "<ul id='prjlist' class='ullist'>" +
                        " </ul>" +
                        "</div></div>" +
                        "<div id='preflowview'>" +
                        "<div id='preflag'></div>" +
                        "</div>" +
                        "</div>");
                    _project.toggle_list_prj_tabs();
                    _project.render_prj_list(projects, 1);
                });
            }
        },

        close_project:function (callback) {
            runtime.projectId = null;
            $designer.find("div").remove();
            $designer.hide();
            if (callback) {
                callback()
            }
        },

        set_project_name:function () {
            var pvo = {projectId:runtime.projectId, name:$("#project-name").val(), description:$("#project-description").val()};
            var items = $('.hiddenFileId');
            if (items) {
                var fileIds = [];
                items.each(function (item) {
                    fileIds += $(this).html() + ",";
                });
            }
            pvo.fileIds = fileIds;

            rpc.qform.project.setProjectNameByAtt(pvo, function (data) {
                $.TS.messager.showMsg("信息", "项目【" + $("#project-name").val() + "】保存成功!");
            });
        },
        delete_project:function (callback) {
            var me = this;
            $.messager.confirm('确认', '真的要删除吗？', function (r) {
                if (r) {
                    rpc.qform.project.setStatus({projectId:runtime.projectId, status:-1}, function () {
                        me.close_project(callback);
                    });
                }
            });
        },

        init_tm_designer:function () {
            var w = $("#tmp_tabs").parent().width() || 1020;
            var tmcreate = $('#tmp_tabs').tabs({
                tools:[
                    {
                        iconCls:'icon-save',
                        text:'保存模板',
                        handler:function () {
                            location.href = 'templdesigner?pid=new';
                        }
                    }
                ],
                onSelect:function (title) {
                    _project.get_temp_list();
                },
                width:w
            });
            tmcreate.tabs('resize');
        },

        init_prj_analysis:function (callback) {
            var w = $("#prj_tabs").parent().width() || 1020;
            var h = $("#prj_tabs").parent().height() - 2;
            var pcreate = $('#prj_tabs').tabs({
                tools:[
                    {
                        iconCls:'icon-close',
                        text:'关闭',
                        handler:function () {
                            _project.close_project(callback);
                        }
                    }
                ],
                onSelect:function (title) {
                    if (title == '分析模板流程') {
                        if (runtime.projectId) {
                            graph.refresh();
                            graph.fit();
                        } else {
                            $.TS.messager.showMsg("信息", "模板未保存，无法进行流程设计工作!", "error");
                            $('#prj_tabs').tabs('select', '分析模板信息');
                        }
                    }
                    if (title == '分析项目流程') {
                        if (runtime.projectId) {
                            graph.refresh();
                            graph.fit();
                        } else {
                            $.TS.messager.showMsg("信息", "项目未保存，无法进行流程设计工作!", "error");
                            $('#prj_tabs').tabs('select', '分析项目信息');
                        }
                    }
                    if (title == '项目附件') {
                        if (runtime.projectId) {
                            rpc.qform.project.loadPrjAttachs({parent:runtime.projectId}, function (data) {
                                var resultd = {"rows":[]};
                                var v = 0
                                $.each(data, function (i, a) {
                                    var rs = {id:a.id, type:a.ext, name:a.filename, progress:a.type};
                                    resultd.rows.push(rs);
                                    v++;
                                });
                                resultd.total = v;
                                $('#attachs-container').datagrid("loadData", resultd);
                            })
                        }
                    }
                },
                width:w,
                height:h
            });
            pcreate.tabs('resize');
        },

        init_prj_designer:function (callback) {
            var w = $("#prj_tabs").parent().width() || 1020;
            var h = $("#prj_tabs").parent().height() - 2;
            var pcreate = $('#prj_tabs').tabs({
                tools:[
                    {
                        iconCls:'icon-save',
                        text:'保存',
                        handler:function () {
                            if ($("#project-new").val() == "new" || $("#project-new").val() == "") {
                                _project.create_project();
                            }
                            else {
                                _project.set_project_name();
                            }
                        }
                    },
                    {
                        iconCls:'icon-template',
                        text:'设为模板',
                        handler:function () {
                            _project.as_template();
                        }
                    },
                    {
                        iconCls:'icon-cancel',
                        text:'删除',
                        handler:function () {
                            _project.delete_project(callback);
                        }
                    },
                    {
                        iconCls:'icon-close',
                        text:'关闭',
                        handler:function () {
                            _project.close_project(callback);
                        }
                    }
                ],
                onSelect:function (title) {
                    if (title == '分析模板流程') {
                        if (runtime.projectId) {
                            graph.refresh();
                            graph.fit();
                        } else {
                            $.TS.messager.showMsg("信息", "模板未保存，无法进行流程设计工作!", "error");
                            $('#prj_tabs').tabs('select', '分析模板信息');
                        }
                    }
                    if (title == '分析项目流程') {
                        if (runtime.projectId) {
                            graph.refresh();
                            graph.fit();
                        } else {
                            $.TS.messager.showMsg("信息", "项目未保存，无法进行流程设计工作!", "error");
                            $('#prj_tabs').tabs('select', '分析项目信息');
                        }
                    }
                    if (title == '项目附件') {
                        if (runtime.projectId) {
                            rpc.qform.project.loadPrjAttachs({parent:runtime.projectId}, function (data) {
                                var resultd = {"rows":[]};
                                var v = 0
                                $.each(data, function (i, a) {
                                    var rs = {id:a.id, type:a.ext, name:a.filename, progress:a.type};
                                    resultd.rows.push(rs);
                                    v++;
                                });
                                resultd.total = v;
                                $('#attachs-container').datagrid("loadData", resultd);
                            })
                        }
                    }
                },
                width:w,
                height:h
            });
            pcreate.tabs('resize');
        },

        as_template:function () {
            rpc.qform.project.asTemplate({projectId:runtime.projectId});
        },

        show_def_projects:function () {
            $innerbar.show();
            var me = this;
            me.toggle_list_all();
        },

        show_project_all:function () {
            $innerbar.show();
            var me = this;
            me.toggle_list_prj('all', 1);
        },

        show_project_list:function (status, state) {
            $innerbar.show();
            var me = this;
            if (state) {
                me.toggle_list_prj(status, state);
            }
            else {
                me.toggle_list_prj(status, 1);
            }
        },

        show_template_list:function () {
            $innerbar.show();
            var me = this;
            me.toggle_list_tm();
        },

        show_forms_list:function () {
            $innerbar.show();
            var me = this;
            me.toggle_list_fm();
        },

        show_input_projects:function () {
            this.toggle_list_prj(null, 1);
            // todo 换显示方式
            rpc.qform.project.list({type:1}, this.show_list);
        },

        toggle_list_tm:function () {
            var $uls = $("#project-list ul[class='ullist']");
            $uls.each(function (a) {
                $(this).children().remove();
            });
            $designer.hide();
            $form.hide();
            $("#project-list").show();
            var listtabs = $('#sch_tabs').tabs({
                tools:[
                    {
                        iconCls:'icon-add12',
                        text:'新建模板',
                        handler:function () {
                            location.href = 'templdesigner?pid=new';
                        }
                    },
                    {
                        iconCls:'icon-ls',
                        handler:function () {
                            alert('add');
                        }
                    },
                    {
                        iconCls:'icon-bk',
                        handler:function () {
                            alert('save');
                        }
                    }
                ],
                onSelect:function (title) {
                    _project.get_temp_list();
                },
                width:560
            });
            listtabs.tabs('resize');
            return $uls;
        },

        toggle_list_fm:function () {
            var $uls = $("#project-list ul[class='ullist']");
            $uls.each(function (a) {
                $(this).children().remove();
            });
            $designer.hide();
            $form.hide();
            $("#project-list").show();
            var listtabs = $('#sch_tabs').tabs({
                tools:[
                    {
                        iconCls:'icon-add12',
                        text:'新分析表',
                        handler:function () {
                            location.href = 'formdesigner?type=0;fid=new';
                        }
                    },
//                {
//                    iconCls:'icon-add12',
//                    text:'新质量屋',
//                    handler:function () {
//                        location.href = 'formdesigner?type=1;fid=new';
//                    }
//                },
                    {
                        iconCls:'icon-ls',
                        handler:function () {
                            alert('add');
                        }
                    },
                    {
                        iconCls:'icon-bk',
                        handler:function () {
                            alert('save');
                        }
                    }
                ],
                onSelect:function (title) {
                    _project.get_forms_list();
                },
                width:560
            });
            listtabs.tabs('resize');
            return $uls;
        },

        toggle_list_all:function () {
            var $uls = $("#project-list ul[class='ullist']");
            $uls.each(function (a) {
                $(this).children().remove();
            });
            $("#project-list").show();
            var listtabs = $('#sch_tabs').tabs({
                tools:[
                    {
                        iconCls:'icon-ls',
                        handler:function () {
                            alert('add');
                        }
                    },
                    {
                        iconCls:'icon-bk',
                        handler:function () {
                            alert('save');
                        }
                    }
                ],
                onSelect:function (title) {
                    if (title == "QFD分析项目") {
                        _project.get_proj_list(null, 1);


                    }
                    else if (title == "QFD分析模板") {
                        _project.get_temp_list();
                    }
                },
                width:560
            });
            listtabs.tabs('resize');
            return $uls;
        },

        toggle_list_prj:function (type, state) {
            var $uls = $("#project-list ul[class='ullist']");
            $uls.each(function (a) {
                $(this).children().remove();
            });
            $("#project-list").show();
            var listtabs = $('#sch_tabs').tabs({
                tools:[
                    {
                        iconCls:'icon-add12',
                        text:'新建项目',
                        handler:function () {
                            location.href = $basepath + 'qfd/prjcreate?pid=new';
                        }
                    },
                    {
                        iconCls:'icon-ls',
                        handler:function () {
                            alert('add');
                        }
                    },
                    {
                        iconCls:'icon-bk',
                        handler:function () {
                            alert('save');
                        }
                    }
                ],
                onSelect:function (title) {
                    _project.get_proj_list(type, state);
                },
                width:560
            });
            listtabs.tabs('resize');
            return $uls;
        },

        toggle_list_prj_tabs:function () {
            var $uls = $("#project-list ul[class='ullist']");
            $uls.each(function (a) {
                $(this).children().remove();
            });
            $("#project-list").show();
            var listtabs = $('#sch_tabs').tabs({
                tools:[
                    {
                        iconCls:'icon-add12',
                        text:'新建项目',
                        handler:function () {
                            location.href = $basepath + 'qfd/prjcreate?pid=new';
                        }
                    },
                    {
                        iconCls:'icon-ls',
                        handler:function () {
                            alert('add');
                        }
                    },
                    {
                        iconCls:'icon-bk',
                        handler:function () {
                            alert('save');
                        }
                    }
                ],
                width:560
            });
            listtabs.tabs('resize');
            return $uls;
        },

        goto_project:function (state, id) {
            if (id) {
                if (state == 2) {
                    window.location = $basepath + "templ/templdesigner?pid=" + id;
                }
                if (state == 1) {
                    window.location = $basepath + "qfd/prjcreate?pid=" + id;
                }
                if (state == 3) {
                    window.location = $basepath + "analysis/formtreeshow?pid=" + id;
                }
                if (state == 4) {
                    window.location = $basepath + "analysis/formrelation?pid=" + id;
                }
                if (state == 5) {
                    window.location = $basepath + "analysis/houseformcut?pid=" + id;
                }
                if (state == 6) {
                    window.location = $basepath + "tools/prjgantt?pid=" + id;
                }
                if (state == 7) {
                    window.location = $basepath + "analysis/issuestrace?pid=" + id;
                }
                else {
                    window.location = $basepath + "qfd/prjcreate?pid=" + id;
                }
            }

        },


        goto_form:function (id) {
            if (id) {
                window.location = $basepath + "templ/formdesigner?fid=" + id;
            }

        },

        get_temp_list:function () {
            var $ul = $("#temlist");
            $ul.children().remove();
            rpc.qform.project.templates({status:0}, function (projects) {
                var cnt = 1;
                $.each(projects, function (i, a) {
                    var li = $("<li>" +
                        "<span class='tha'>" + cnt + "</span>" +
                        "<span  id='showflow-" + a.projectId + "' class='showflow'></span>" +
                        "<span class='thb'><a href='#' onclick='_project.goto_project(2," + a.projectId + ");'>" + a.name + "</a></span>" +
                        "<span class='thc'>" + a.createman + "</span>" +
                        "<span class='thd'>" + new Date(a.createTime).toLocaleDateString() + "</span>" +
                        "<span class='the'><a href='#' class='linkbutton' onclick='_project.clone_project(" + a.projectId + ")'>类似创建</a></span>" +
//                        "<span class='tha'>简介</span>" +
                        "<span class='thf'>" + (a.description || '无描述信息') + " </span>" +
                        "</li>");
                    li.appendTo($ul);
                    $("#showflow-" + a.projectId).click(function () {
                        _project.show_preflow_view(a.projectId);
                    });
                    $("#showflow-" + a.projectId).mouseleave(function (event) {
                        var mx = event.pageX;
                        var my = event.pageY;
                        var px = $("#preflowview").offset().left;
                        var py = $("#preflowview").offset().top;
                        if ((mx < px && my > py) || (mx > py && my < py)) {
                            $desview.hide("fast");
                        }
                    });
                    $("#preflowview").mouseleave(function (event) {
                        var mx = event.pageX;
                        var my = event.pageY;
                        var px = $("#preflowview").offset().left;
                        var py = $("#preflowview").offset().top;
                        if ((mx < px && my > py) || (mx > py && my < py)) {
                            $desview.hide("fast");
                        }
                    });
                    cnt++;
                });
            });
            return $ul;
        },

        get_forms_list:function () {
            var $ul = $("#fmlist");
            $ul.children().remove();
            rpc.qform.form.list(function (forms) {
                var cnt = 1;
                $.each(forms, function (i, a) {
                    var li = $("<li>" +
                        "<span class='tha'>" + cnt + "</span>" +
                        "<span  id='showflow-" + a.formId + "' class='showflow'></span>" +
                        "<span class='thb'><a href='#' onclick='_project.goto_form(" + a.formId + ");'>" + a.formName + "</a></span>" +
                        "<span class='thc'>位于" + a.level + "级</span>" +
                        "<span class='thd'>" + new Date(a.createTime).toLocaleDateString() + "</span>" +
                        "<span class='the'><a href='#' class='linkbutton' onclick='_project.clone_form(" + a.formId + ")'>类似创建</a></span>" +
//                        "<span class='tha'>简介</span>" +
                        "<span class='thf'>" + (a.refName || '无相关关系表') + " </span>" +
                        "</li>");
                    li.appendTo($ul);
                    $("#showflow-" + a.formId).click(function () {
                        _project.show_form_view(a.formId);
                    });
                    $("#showflow-" + a.formId).mouseleave(function (event) {
                        var mx = event.pageX;
                        var my = event.pageY;
                        var px = $("#preflowview").offset().left;
                        var py = $("#preflowview").offset().top;
                        if ((mx < px && my > py) || (mx > py && my < py)) {
                            $desview.hide("fast");
                        }
                    });
                    $("#preflowview").mouseleave(function (event) {
                        var mx = event.pageX;
                        var my = event.pageY;
                        var px = $("#preflowview").offset().left;
                        var py = $("#preflowview").offset().top;
                        if ((mx < px && my > py) || (mx > py && my < py)) {
                            $desview.hide("fast");
                        }
                    });
                    cnt++;
                });
            });
            return $ul;
        },

        show_form_view:function (fid) {
            _form.show_form(fid);
        },

        show_preflow_view:function (prjid) {
            _project.show_project_pre(prjid);
        },

        get_proj_list:function (type, state) {
            if (type == "all") {
                rpc.qform.project.listAll(function (projects) {
                    _project.render_prj_list(projects, state);
                });
            } else {
                rpc.qform.project.list({type:type}, function (projects) {
                    _project.render_prj_list(projects, state);
                });
            }

        },

        render_prj_list:function (projects, state) {
            var $ul = $("#prjlist");
            $ul.children().remove();
            var cnt = 1;
            $.each(projects, function (i, a) {
                var li = $("<li><span class='tha'>" + cnt + "</span>" +
                    "<span id='showflow-" + a.projectId + "' class='showflow'></span>" +
                    "<span class='thb'><a href='#' onclick='_project.goto_project(" + state + "," + a.projectId + ");'>" + a.name + "</a></span>" +
                    "<span class='thc'>" + a.createman + "</span>" +
                    "<span class='thd'>" + new Date(a.createTime).toLocaleDateString() + "</span>" +
                    "<span class='the'><a href='#' class='linkbutton' onclick='_project.clone_project(" + a.projectId + ")'>类似创建</a></span>" +
//                        "<span class='tha'>简介</span>" +
                    "<span class='thf'>" + (a.description || '无描述信息') + " </span>" +
                    "</li>");
                li.appendTo($ul);
                $("#showflow-" + a.projectId).click(function () {
                    _project.show_preflow_view(a.projectId);
                });
                $("#showflow-" + a.projectId).mouseleave(function (event) {
                    var mx = event.pageX;
                    var my = event.pageY;
                    var px = $("#preflowview").offset().left;
                    var py = $("#preflowview").offset().top;
                    if ((mx < px && my > py) || (mx > py && my < py)) {
                        $desview.hide("fast");
                    }
                });
                $("#preflowview").mouseleave(function (event) {
                    var mx = event.pageX;
                    var my = event.pageY;
                    var px = $("#preflowview").offset().left;
                    var py = $("#preflowview").offset().top;
                    if ((mx < px && my > py) || (mx > py && my < py)) {
                        $desview.hide("fast");
                    }
                });
                cnt++;
            });
        },

        show_templates:function () {
            $innerbar.show();
            var me = this;
            me.toggle_list_tm();
        },

        create_project:function () {
            var title = $("#project-name").val() || '新项目';
            var templ = $("#project-mode").val() || 0;
            var me = this;
            var pvo = {name:title, createman:$realname, description:$("#project-description").val(), template:templ};
            var items = $('.hiddenFileId');
            if (items) {
                var fileIds = [];
                items.each(function (item) {
                    fileIds += $(this).html() + ",";
                });
            }
            pvo.fileIds = fileIds;
            rpc.qform.project.createByAtt(pvo, function (data) {
                me.load_project(data.projectId);
                $("#project-new").val(data.projectId);
                $("#status-b").linkbutton('disable');
                $("#status-m").linkbutton('enable');
                $("#status-e").linkbutton('disable');
                $.TS.messager.showMsg("信息", "项目【" + title + "】保存成功!", "info");
            });
        },

        update_project_status:function (value) {
            rpc.qform.project.setStatus({projectId:runtime.projectId, status:value});
        },

        clone_project:function (projectId) {
            var me = this;

            rpc.qform.project.cloneProject({projectId:projectId}, function (data) {
                me.load_project(data.projectId);
            });
        },

        show_list:function (projects) {
            var $ul = $("#prjlist");
            $ul.children().remove();
            var cnt = 1;
            $.each(projects, function (i, a) {
                var li = $("<li><span class='tha'>" + cnt + "</span>" +
                    "<span class='showflow'></span>" +
                    "<span class='thb'><a href='#' onclick='_project.load_project(" + a.projectId + ");'>" + a.name + "</a></span>" +
                    "<span class='thc'>" + a.createman + "</span>" +
                    "<span class='thd'>" + new Date(a.createTime).toLocaleDateString() + "</span>" +
                    "<span class='tha'>简介:</span>" +
                    "<span class='thf'>" + (a.description || '无描述信息') + " </span>" +
                    "</li>");
                li.appendTo($ul);
                $('.showflow').click(function () {
                    _project.show_preflow_view(a.projectId);
                });
                cnt++;
            });
        }
    }
    ;

var _form = {

    close_form:function (callback, where) {
        $("#form-container").qform().close();
        if (callback) {
            callback(where);
        }
//        $form.hide();
//        $designer.show();
    },

    create_related_form:function () {
        var formId = runtime.formId;
        var projectId = runtime.projectId;
        var me = this;
        rpc.qform.project.createRelatedForm({projectId:projectId, formId:formId}, function (data) {
            if (data.formId) {
                runtime.formId = data.formId;
                me.edit_form();
                rpc.qform.project.load({projectId:projectId}, function (data) {
                    runtime.projectId = projectId;
                    $designer.find("div").remove();
                    $.each(data, function (i, a) {
                        me.draw_form(a, $designer);
                    });
                });
            } else {
                $.TS.messager.showMsg("错误", "创建失败");
            }
        });
    },

    save_form_name:function (value) {
        var formId = runtime.formId;
        var formName = $("#form-name").val() || value;
        var projectId = runtime.projectId;
        rpc.qform.form.setFormName({projectId:projectId, formId:formId, formName:formName});
    },

    form_setName:function (projectId, formId, value, cell, callback) {
        rpc.qform.form.setFormName({projectId:projectId, formId:formId, formName:value}, function () {
            if (callback) {
                callback(cell, formId, value);
            }
        });
    },

    show_toolbar:function () {
        $("#status-1").hide();
        $("#status-0").show();
    },

    show_form:function (fid) {
        if (fid) {
            rpc.qform.form.load({formId:fid}, function (data) {
                $form.show();
                $("#form-container").qform(data).show();
            });
        }
        $desview.show();
    },

    show_form_view:function (fid, view) {
        if (fid) {
            rpc.qform.form.load({formId:fid}, function (data) {
                if (data) {
                    if(data.form.formType==1){
                        $('#form-editor-toolbar').show();
                    } else{
                        $('#form-editor-toolbar').hide();
                    }
                    view.qform(data).show();
                }
            });
        }
    },

    edit_form:function (sta, type) {
        if (runtime.formId && runtime.formId != 'new') {
            var formId = runtime.formId;
            $designer.hide();
            rpc.qform.form.load({formId:formId}, function (data) {
//                dump_obj(data.form);
                data.projectId = runtime.projectId;
                data.formId = formId;
                runtime.formData = data;

                var status;
                if (runtime.projectInfo) {
                    status = runtime.projectInfo.status;
                }
                $form.show();
                $("#status-0, #status-1").hide();
                $("#form-name").val(data.form.formName);
                $("#form-commands").find('a').each(function (i, a) {
                    a = $(a);
                    if (a.attr("type") == data.form.formType) {
                        a.show();
                    } else {
                        a.hide();
                    }
                });
                if (status) {
                    if (status == 0) {
                        $("#status-0").show();
                        $("#form-container").qform(data).show();
                    } else {
                        $("#status-1").show();
                        $("#form-container").qform(data).show().input();
                    }
                } else {
                    $("#status-0").show();
                    $("#form-container").qform(data).show();
                }

                $.each(data.operators, function (j, o) {
                    $("#chk-" + o.userId).attr("checked", "checked");
                });
            });
            if (runtime.projectInfo) {
                var split = runtime.projectInfo.users.split(' ');
                $.each(split, function (i, a) {
                    $("<span><input type='checkbox' id='chk-" + a + "' class='user-checkbox' value='" + a + "'>" + a + "</span> ").appendTo("#form-users");
                });
            }
            if (runtime.formData) {
                $.each(runtime.formData.operators, function (j, o) {
                    $("#chk-" + o.userId).attr("checked", "checked");
                });
            }
        } else {
            var status;
            $form.show();
            $("#status-0, #status-1").hide();
            if (runtime.projectInfo) {
                status = runtime.projectInfo.status;
            } else if (sta != null) {
                status = sta;
            }
            if (status == 0) {
                $("#status-0").show();
                $("#form-role").hide();
                $("#form-commands").find('a').each(function (i, a) {
                    a = $(a);
                    if (a.attr("type") == type) {
                        a.show();
                    } else {
                        a.hide();
                    }
                });
                $("#form-container").qform(data).show();
            }
        }
    },

    draw_form:function (a, container, i) {
        var n = i || 0;
        var f = $("<div id='" + a.formId + "' class='form-type-" + a.formType + "'>"
            + a.formName + "</div>").appendTo(container);
        var left = a.posLeft;
//            if (left < 110 * n) {
//                left = 110 * n;
//            }
        f.draggable({
            edge:5,
            onStopDrag:function () {
                var pos = $(this).position();
                rpc.qform.project.position({
                    projectId:runtime.projectId,
                    formId:this.id,
                    posLeft:pos.left,
                    posTop:pos.top});
            }
        }).css({left:left, top:a.posTop});
    },

    draw_form_th:function (a, container) {
        var f = $("<div id='" + a.formId + "' class='form-type-th-" + a.formType + "'>"
            + "...." + "</div>").appendTo(container);
        f.css({left:a.posLeft / 2, top:a.posTop / 2});
    },

    delete_form:function (callback) {
        rpc.qform.project.deleteForm({formId:runtime.formId}, function (data) {
            if (callback) {
                callback();
            } else {
                _project.load_project(runtime.projectId);
            }
        });
    },


    remove_form:function (callback, formId) {
        rpc.qform.project.deleteForm({formId:formId}, function (data) {
            if (callback) {
                callback();
            } else {
                _project.load_project(runtime.projectId);
            }
        });
    },

    create_form:function (form, cell, attrName, callback) {
        var projectId = runtime.projectId;
        if (projectId) {
            form.projectId = projectId;
            rpc.qform.project.createForm(form, function (data) {
                if (callback) {
                    callback(cell, attrName, data.formId);
                }
                _project.load_project(projectId);
            });
        } else {
            $.TS.messager.showMsg('错误', '未保存项目，请先完成项目初始化定义', 'error');
        }
    },

    create_matrix_form:function (form, cell, attrName, callback) {
        var projectId = runtime.projectId;
        if (projectId) {
            form.projectId = projectId;
            rpc.qform.project.createMatrixForm(form, function (data) {
                if (callback) {
                    callback(cell, attrName, data.formId);
                }
                _project.load_project(projectId);
            })
        } else {
            $.TS.messager.showMsg('错误', '未保存项目，请先完成项目初始化定义', 'error');
        }
    },

    expose:function () {
        var projectId = runtime.projectId;
        if (projectId) {
            rpc.qform.project.createRelatedForm({projectId:projectId, parentId:runtime.formId, formId:runtime.formId}, function (data) {
//                _project.load_project(projectId);
                location = "/qfd/formdesigner?pid=" + projectId + "&fid=" + data.formId;
            })
        }
    },


    edit_matrix_propes:function () {
        var me = this;
        var dlg = getDialog();
        $("#editor-dialog-content").children().hide();
        $("#house-editor").appendTo("#editor-dialog-content").show();
        rpc.qform.project.listFormsByType({projectId:runtime.projectId, formType:0}, function (data) {
            me.add_options(data, "#house-left");
            me.add_options(data, "#house-top");
            $("#house-left").val(runtime.formData.matrix.leftId);
            $("#house-top").val(runtime.formData.matrix.topId);
            if (runtime.formData.matrix.hasRoof) {
                $("#house-editor-top").addClass("selected");
            } else {
                $("#house-editor-top").removeClass("selected");
            }
            if (runtime.formData.matrix.hasLeft) {
                $("#house-editor-left").addClass("selected");
            } else {
                $("#house-editor-left").removeClass("selected");
            }
            dlg.dialog({title:'编辑质量屋属性', resizable:true,
                buttons:[
                    {text:'确认', iconCls:'icon-ok', id:'edit-rows-ok'}
                ]});
            $("#edit-rows-ok").click(function () {
                dlg.dialog('close');
                var leftId = $("#house-left").val();
                var topId = $("#house-top").val();
                var hasRoof = $("#house-editor-top").hasClass('selected');
                var hasLeft = $("#house-editor-left").hasClass('selected');
                rpc.qform.form.editMatrix({formId:runtime.formId, leftId:leftId, topId:topId, hasRoof:hasRoof, hasLeft:hasLeft}, function () {
                    me.edit_form();
                });
                //...
            });
        });
    },

    edit_matrix_info:function () {
        var me = this;
        var dlg = getDialog();
        $("#editor-dialog-content").children().hide();
        $("#house-editor").appendTo("#editor-dialog-content").show();
        rpc.qform.project.listFormsByType({projectId:runtime.projectId, formType:0}, function (data) {
            me.add_options(data, "#house-left");
            me.add_options(data, "#house-top");
            $("#house-left").val(runtime.formData.matrix.leftId);
            $("#house-top").val(runtime.formData.matrix.topId);
            if (runtime.formData.matrix.hasRoof) {
                $("#house-editor-top").addClass("selected");
            } else {
                $("#house-editor-top").removeClass("selected");
            }
            if (runtime.formData.matrix.hasLeft) {
                $("#house-editor-left").addClass("selected");
            } else {
                $("#house-editor-left").removeClass("selected");
            }
            dlg.dialog({title:'编辑质量屋属性', resizable:true,
                buttons:[
                    {text:'确认', iconCls:'icon-ok', id:'edit-rows-ok'}
                ]});
            $("#edit-rows-ok").click(function () {
                dlg.dialog('close');
                var leftId = $("#house-left").val();
                var topId = $("#house-top").val();
                var hasRoof = $("#house-editor-top").hasClass('selected');
                var hasLeft = $("#house-editor-left").hasClass('selected');
                rpc.qform.form.editMatrix({formId:runtime.formId, leftId:leftId, topId:topId, hasRoof:hasRoof, hasLeft:hasLeft}, function () {
                    me.edit_form();
                });
                //...
            });
        });
    },

    edit_rows:function () {
        this.do_edit(function (formId, callback) {
            runtime.editing = 'row';
            rpc.qform.form.getRows({formId:formId}, callback);
        });
    },

    edit_operator:function () {
        var dlg = getDialog();
        $("#editor-dialog-content").children().hide();
        $("#user-editor").appendTo('#editor-dialog-content').show();
        dlg.dialog({title:'编辑人员', resizable:true,
            onClose:function () {
            },
            buttons:[
                {text:'确认', iconCls:'icon-ok', id:'edit-rows-ok'}
            ]});
        $("#edit-rows-ok").click(function () {
            var cs = [];
            $(".user-checkbox").each(function (i, a) {
                if (a.checked) {
                    cs.push($(a).val());
                }
            });
            rpc.qform.project.setFormUsers({projectId:runtime.projectId,
                formId:runtime.formId,
                userId:cs.join(' ')});
            dlg.dialog('close');
        });
    },

    edit_cols:function () {
        this.do_edit(function (formId, callback) {
            runtime.editing = 'col';
            rpc.qform.form.getCols({formId:formId}, callback);
        });
    },

    row_up:function (e) {
        var $tr = $(e).parents('tr');
        var rowId = $tr.attr("rowid");
        var prev = $tr.prev();
        if (prev.hasClass('header')) return false;

        rpc.qform.form.swapRow({rowId1:rowId, rowId2:prev.attr("rowId")}, function () {
            $tr.detach().insertBefore(prev);
        });
        return false;
    },

    row_down:function (e) {
        var $tr = $(e).parents('tr');
        var rowId = $tr.attr("rowid");
        var next = $tr.next();
        if (!next.get(0)) return false;
        rpc.qform.form.swapRow({rowId1:rowId, rowId2:next.attr("rowId")}, function () {
            $tr.detach().insertAfter(next);
        });
        return false;
    },

    del_row:function (e) {
        var $tr = $(e).parents('tr');
        var rowId = $tr.attr("rowid");
        rpc.qform.form.deleteRow({rowId:rowId}, function () {
            $tr.remove()
        });
        return false;
    },

    edit_row_title:function (e) {
        var $e = $(e);
        var rowId = $e.parent().attr("rowid");
        var oldTitle = $e.text();
        $e.text('');
        var htm = $('<input value="' + oldTitle + '" class="loinput" style="width:180px">');
        var done = function () {
            var t = htm.val();
            rpc.qform.form.setRowTitle({rowId:rowId, title:t}, function () {
                $e.text(t);
            });
        };
        htm.keydown(
            function (e) {
                if (e.keyCode == 13) {
                    done();
                    return false;
                } else if (e.keyCode == 27) {
                    $e.text(oldTitle);
                    return false;
                }
            }).appendTo(e).focus().blur(done);
    },

    edit_row_type:function (e) {
        var $e = $(e);
        var rowId = $e.parent().attr("rowid");
        var oldType = $e.attr("type");
        $e.text('');
        var opts = [];
        $.each(types, function (i, a) {
            opts.push('<option value="' + i + '">' + a + '</option>');
        });
        var htm = $("<select>" + opts.join('') + "</select>");
        var f = function () {
            var t = htm.val();
            if (oldType == t) {
                $e.text(types[t]);
            } else {
                rpc.qform.form.setRowType({rowId:rowId, type:t}, function () {
                    $e.text(types[t]);
                    $e.attr('type', t);
                })
            }
        };
        var $elem = htm.appendTo($e).val(oldType);
        $elem.change(f);
        $elem.blur(f).focus();
    },

    edit_row_ref:function (e) {
        var $e = $(e);
        var rowId = $e.parent().attr("rowid");
        var oldLevel = $e.text();
        $e.text('');
        var htm = $('<input value="' + oldLevel + '" class="loinput" style="width:180px">');
        var done = function () {
            var t = htm.val();
            rpc.qform.form.setRowRef({rowId:rowId, ref:t}, function () {
                $e.text(t);
            });
        };
        htm.keydown(
            function (e) {
                if (e.keyCode == 13) {
                    done();
                    return false;
                } else if (e.keyCode == 27) {
                    $e.text(oldLevel);
                    return false;
                }
            }).appendTo(e).focus().blur(done);
    },
    edit_row_level:function (e) {
        var $e = $(e);
        var rowId = $e.parent().attr("rowid");
        var oldLevel = $e.text();
        $e.text('');
        var htm = $('<input value="' + oldLevel + '" class="loinput" style="width:20px">');
        var done = function () {
            var t = htm.val();
            rpc.qform.form.setRowLevel({rowId:rowId, level:t}, function () {
                $e.text(t);
            });
        };
        htm.keydown(
            function (e) {
                if (e.keyCode == 13) {
                    done();
                    return false;
                } else if (e.keyCode == 27) {
                    $e.text(oldLevel);
                    return false;
                }
            }).appendTo(e).focus().blur(done);
    },


    draw_row:function (data, $tbl) {
        $.each(data, function (i, r) {
            var tr = [];
            tr.push("<tr class='row'rowid='" + r.rowId + "'><td class='thbg'>" + (i + 1) + "</td>");
            tr.push("<td class='title' ondblclick='_form.edit_row_title(this);'>" + r.title + "</td>");
            tr.push("<td class='type' ondblclick='_form.edit_row_type(this);' type='" + r.type + "'>" + types[r.type] + "</td>");
            tr.push("<td class='level' ondblclick='_form.edit_row_level(this);'>" + r.level + "</td>");
            tr.push("<td class='ref' ondblclick='_form.edit_row_ref(this);'>" + (r.ref ? r.ref : '&nbsp;') + "</td>");
            tr.push("<td class='action'>" +
                "<a href='#' onclick='_form.del_row(this);'>删除</a> " +
                "<a href='#' onclick='_form.row_up(this);'>上移</a> " +
                "<a href='#' onclick='_form.row_down(this);'>下移</a></td>");
            tr.push("</tr>");
            $(tr.join('')).appendTo($tbl);
        });
    },

    do_edit:function (loadFunc) {
        var me = this;
        // row的类型
        var dlg = getDialog(0);
        var formId = runtime.formId;
        $("#editor-dialog-content").children().hide();
        $("#edit-rows").appendTo('#editor-dialog-content').show();
        loadFunc(formId, function (data) {
            var $tbl = $("#edit-rows table");
            $tbl.find("tr.row").remove();
            me.draw_row(data, $tbl);
        });
        dlg.dialog({title:'编辑属性', resizable:true,
            buttons:[
                {text:'确认', iconCls:'icon-ok', id:'edit-rows-ok'}
            ]});
        $("#edit-rows-ok").click(function () {
            dlg.dialog('close');
//        edit_form();
        });
    },
    toggle_selection:function (e) {
        $(e).toggleClass('selected');
    },
    add_options:function (data, e) {
        $(e).children().remove();
        $.each(data, function (i, a) {
            $("<option value='" + a.formId + "'>" + a.formName + "</option>").appendTo(e);
        });
    },
    add_rows:function () {
        var me = this;
        var callback = function (data) {
            me.draw_row(data, $("#edit-rows table"));
        };
        __readText('添加行', '输入行数', function (cnt) {
            if (runtime.editing == 'row') {
                rpc.qform.form.addRows({formId:runtime.formId, count:cnt}, callback);
            } else {
                rpc.qform.form.addCols({formId:runtime.formId, count:cnt}, callback);
            }
        });
    }

};

function open_tab(title, href) {
    /*
     $("#tt").tabs('add', {
     title: title,
     href: href,
     closable:true
     });
     */
}
function getDialog(cat) {
    if (!document.getElementById("editor-dialog")) {
        var div = $("<div id='editor-dialog'><div id='editor-dialog-content'" +
            " style='padding: 10px;'></div></div>");
        div.appendTo("body");
        if (cat == 0) {
            div.width(800).height(480);
        }
        else {
            div.width(700).height(500);
        }
        div.dialog({
            modal:true,
            onClose:function () {
                _form.edit_form();
            }
        });
    }
    return $("#editor-dialog");
}

function getCalDialog(cat) {
    if (!document.getElementById("editor-dialog")) {
        var div = $("<div id='editor-dialog'><div id='editor-dialog-content'" +
            " style='padding: 10px;'></div></div>");
        div.appendTo("body");
        if (cat == 0) {
            div.width(800).height(480);
        }
        else {
            div.width(700).height(500);
        }
        div.dialog({
            modal:true,
            onClose:function () {
            }
        });
    }
    return $("#editor-dialog");
}
/*

 $(function() {
 //    $formMenu = $("#form-menu");
 $designer = $("#designer-container");
 $form = $("#form-editor");
 $info = $("#project-info");

 $("#menu li a").click(function(e) {
 var $t = $(this);
 open_tab($t.attr("title"), $t.attr("href"));
 e.preventDefault();
 return false;
 });

 $designer.delegate("div", "dblclick", function(e) {
 runtime.formId = this.id;
 _form.edit_form();
 return false;
 });
 });
 */

function __readText(title, prompt, callback) {
    if (!document.getElementById("_input_dlg_")) {
        $("body").append("<div id='_input_dlg_' style='width:300px;height:200px; padding: 40px 20px 10px 40px;'><div class='content'></div></div>");
    }


    var $dlg = $("#_input_dlg_");
    $dlg.find(".content").html(prompt + ": <input type='text'>");
    $dlg.dialog({
        modal:true,
        title:title,
        resizable:true,
        buttons:[
            {text:'确认', iconCls:'icon-ok', id:'btn-ok'}
        ]
    });
    $dlg.find('input').focus();
    $("#btn-ok").click(function () {
        var val = $dlg.find('input').val();
        callback(val);
        $dlg.dialog("close");
    });
}

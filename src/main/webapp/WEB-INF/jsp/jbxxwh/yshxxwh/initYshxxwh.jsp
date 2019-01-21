<%--
  Created by IntelliJ IDEA.
  User: PengWen Wang
  Date: 2018/12/13
  Time: 11:20
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@include file="../../common/taglibs.jsp" %>
<html>
<head>
    <title>用水户信息维护</title>
    <%@include file="../../common/include-head.jsp" %>
    <style type="text/css">
        .select2-container .select2-selection--single{
            height:32px;
            line-height: 32px;
        }
    </style>
</head>
<body>
<div class="page-body">
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-8 col-lg-12">
            <div class="widget">
                <div class="widget-header bg-blue">
                    <span class="widget-caption">查询条件</span>
                </div>
                <div class="widget-body">
                   <table class="table">
                        <div class="form-group">
                            <div class="group col-sm-2">
                                <div class="col-sm-10">
                                    <label class="control-label">纳税人名称</label>
                                    <div class="controls">
                                        <input id="nsrmcs" type="text" placeholder="请输入名称" class="form-control">
                                    </div>
                                </div>
                            </div>
                            <div class="group col-sm-2">
                                <div class="col-sm-10">
                                    <label class="control-label">行政区划</label>
                                    <select id="xzqhcode" class="form-control select_xzqh select-xzqhcode">
                                        <option></option>
                                    </select>
                                </div>
                            </div>
                            <div class="group col-sm-2">
                                <br class="col-sm-10">
                                    <div class="controls">
                                    <button type="button" class="btn btn-info" onclick="namedQuery()">执行查询</button>
                                    </div>
                                </div>
                            </div>
                   </table>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12 col-sm-12 col-xs-12 col-md-12">
            <div class="widget-header ">
                <span class="widget-caption">用水户信息</span>
            </div>
            <div class="widget-body">
                <div id="toolbar">
                    <button id="add_mota" type="button" class="btn btn-success btn-sm" data-toggle="modal"
                            data-target="#myModal">
                        <i class="glyphicon glyphicon-plus"></i>添加
                    </button> &nbsp;

                    <button type="button" class="btn btn-warning btn-sm" onclick="editData()">
                        <i class="glyphicon glyphicon-pencil"></i>编辑
                    </button>&nbsp;

                    <button type="button" class="btn btn-danger btn-sm" onclick="del()">
                        <i class="glyphicon glyphicon-remove"></i>删除
                    </button>
                </div>
                <table id="table" style="white-space: nowrap" data-height="543"
                       class="table table-striped table-bordered table-hover"></table>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="myModal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div style="width:700px ;" class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel">新增</h4>
            </div>
            <div class="modal-body">
                <div class="ibox-content">
                    <form id="validationForm" method="post" class="form-horizontal">
                        <div class="form-group">
                            <label class="col-sm-3 control-label">纳税人名称</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="nsrmc" name="nsrmcjy"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-3 control-label">纳税人识别号</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="nsrsbh" name="nsrsbhjy"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-3 control-label">社会信用代码</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="shxydm" name="shxydmjy"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-3 control-label">法定代表人姓名</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="fddbrxm" name="fddbrxmjy"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-3 control-label">法定代表人联系电话</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="fddbrlxdh" name="fddbrlxdhjy"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-3 control-label">办税员姓名</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="bsyxm" name="bsyxmjy"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-3 control-label">办税员联系电话</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="bsylxdh" name="bsylxdhjy"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-3 control-label">单位地址</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="dwdz" name="dwdzjy"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-3 control-label">行政区划</label>
                            <div class="col-sm-8">
                                <select style="width: 100%;" class="select_xzqh" id="xgry_dm" name="xgry_dmjy">
                                </select>
                            </div>
                        </div>

                        <div class="text-right">
                            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                            <button type="button" class="btn btn-primary" onclick="addData()">确定</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="editModal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div style="width:700px ;" class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">编辑</h4>
            </div>
            <div class="modal-body">
                <div class="ibox-content">
                    <form id="validationEditForm" method="post" class="form-horizontal">
                        <div class="form-group">
                            <label class="col-sm-3 control-label">纳税人名称</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="editnsrmc" name="editnsrmcjy"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-3 control-label">纳税人识别号</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="editnsrsbh" name="editnsrsbhjy"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-3 control-label">社会信用代码</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="editshxydm" name="editshxydmjy"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-3 control-label">法定代表人姓名</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="editfddbrxm" name="editfddbrxmjy"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-3 control-label">法定代表人联系电话</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="editfddbrlxdh" name="editfddbrlxdhjy"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-3 control-label">办税员姓名</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="editbsyxm" name="editbsyxmjy"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-3 control-label">办税员联系电话</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="editbsylxdh" name="editbsylxdhjy"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-3 control-label">单位地址</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="editdwdz" name="editdwdzjy"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-3 control-label">行政区划</label>
                            <div class="col-sm-8">
                                <select style="width: 100%;" class="editselect_xzqh" id="editxgry_dm"
                                        name="editxgry_dmjy">
                                </select>
                            </div>
                        </div>

                        <div class="text-right">
                            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                            <button type="button" class="btn btn-primary" onclick="saveEditData()">确定</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>
<script>
    var djxh;

    $(function () {
        initTable();
        formValidator();
        formEditValidator();
        $("#nsrmcs").focus();
        $(document).keydown(function (event) {
            if (event.keyCode == 13) {
                namedQuery();
            }
        });

        // 水源地点
        $.post("${ctx}/jbxxwh/yshxxwh/syddcd", null, function (result) {
            $(".select_sydd").select2({
                data: result,
                placeholder: '请选择',
                allowClear: true
            });
        });

        // 行政区划
        $.post("${ctx}/jbxxwh/yshxxwh/xzqhcd", null, function (result) {
            $(".select_xzqh,.editselect_xzqh").select2({
                data: result,
                placeholder: '请选择',
                allowClear: true
            });
        });

    });

    function initTable(nsrmc, xzqhs) {
        $('#table').bootstrapTable('destroy');
        $('#table').bootstrapTable({
            url: "${ctx}/jbxxwh/yshxxwh/initQuery", // 获取数据的Select地址
            sidePagination: "server", 				// 表示服务端请求(分页方式：client客户端分页，server服务端分页)
            queryParams: function (params) {
                return {
                    'svo.nsrmc': nsrmc,
                    'svo.xzqhmc': xzqhs,
                    offset: (params.offset / params.limit) + 1,
                    limit: params.limit
                }
            },
            pagination: true, 						// 是否分页
            singleSelect: true, 					// 设置为true禁止多选
            pageNumber: 1, 							// 初始化加载第一页，默认第一页
            buttonsAlign: 'right', 					// 按钮对齐方式
            pageSize: 10, 							// 每页的记录行数
            pageList: [10, 20, 30, 50], 			// 可供选择的每页行数
            onlyInfoPagination: false, 				// 设置为true只显示总数据数，而不显示分页按钮
            toolbar: '#toolbar',					// 是否包含工具栏
            paginationLoop: true, 					// 设置为true启用分页条无线循环的功能
            clickToSelect: true, 					// 是否启用点击选中行
            uniqueIS: "ck", 						// 每一行的唯一标识，一般为主键列
            ueryParamsType: 'limit',
            columns: [{
                field: 'ck',
                checkbox: true,
                align: 'center'
            }, {
                field: 'yshzh',
                align: 'left',
                halign: 'center',
                title: '用水户账号'
            }, {
                field: 'nsrmc',
                align: 'left',
                halign: 'center',
                title: '纳税人名称'
            }, {
                field: 'shxydm',
                align: 'left',
                halign: 'center',
                title: '纳税人识别号'
            }, {
                field: 'shxydm',
                align: 'left',
                halign: 'center',
                title: '社会信用代码'
            }, {
                field: 'fddbrxm',
                align: 'left',
                halign: 'center',
                title: '法定代表人姓名'
            }, {
                field: 'fddbrlxdh',
                align: 'left',
                halign: 'center',
                title: '法定代表人联系电话'
            }
                // ,{
                //     field: 'bsyxm',
                //     align: 'left',
                //     halign: 'center',
                //     title: '办税员姓名'
                // }, {
                //     field: 'bsylxdh',
                //     align: 'left',
                //     halign: 'center',
                //     title: '办税员联系电话'
                // }
                , {
                    field: 'dwdz',
                    align: 'left',
                    halign: 'center',
                    title: '单位地址',
                    formatter: function (value, row, index) {
                        var shorthandTheme;
                        if (value == undefined)value="";
                        if (value != null){
                            if (value.length > 10) {shorthandTheme = value.substring(0, 10) + "...";}
                            else {shorthandTheme = value;}
                        }
                        return [
                            '<span  data-toggle="tooltip" data_placement="bottom" title=' + value + '>' + shorthandTheme + '</span>'
                        ].join('');
                    }
                }, {
                    field: 'xzqhmc',
                    align: 'left',
                    halign: 'center',
                    title: '行政区划'
                }, {
                    field: 'csmm',
                    align: 'center',
                    halign: 'center',
                    title: '初始密码'
                }]
        });
    }

    function addData() {
        // Start Validator
        $("#validationForm").data('bootstrapValidator').validate();
        if (!$("#validationForm").data('bootstrapValidator').isValid()) {
            return;
        };
        // 纳税人名称
        var nsrmc = $("#nsrmc").val();
        // 纳税人识别号
        var nsrsbh = $("#nsrsbh").val();
        // 社会信用代码
        var shxydm = $("#shxydm").val();
        // 法定代表人姓名
        var fddbrxm = $("#fddbrxm").val();
        // 法定代表人联系电话
        var fddbrlxdh = $("#fddbrlxdh").val();
        // 办税员姓名
        var bsyxm = $("#bsyxm").val();
        // 办税员联系电话
        var bsylxdh = $("#bsylxdh").val();
        // 单位地址
        var dwdz = $("#dwdz").val();
        // 行政区划
        var xzqh_dm = $(".select_xzqh").select2("data");
        var xzqh_dms = "";
        if (xzqh_dm != null && JSON.stringify(xzqh_dm) != "{}" && typeof(xzqh_dm) != "undefined" && xzqh_dm.length > 0) {
            xzqh_dms = $("#xgry_dm option:checked").val();
        }

        $.post("${ctx}/jbxxwh/yshxxwh/addData", {
            'svo.nsrmc': nsrmc,
            'svo.nsrsbh': nsrsbh,
            'svo.shxydm': shxydm,
            'svo.fddbrxm': fddbrxm,
            'svo.fddbrlxdh': fddbrlxdh,
            'svo.bsyxm': bsyxm,
            'svo.bsylxdh': bsylxdh,
            'svo.dwdz': dwdz,
            'svo.xzqh_dm': xzqh_dms
        }, function (result) {
            $("#myModal").modal("hide");
            $("#table").bootstrapTable('destroy');
            initTable();
            // layer.msg("新增成功", {icon: 1});
            layer.alert('新增成功',{title:'提示',icon: 1,time:3000});
        });
    }

    function editData() {
        var rows = $('#table').bootstrapTable('getSelections');
        if (rows.length == 0) {
            layer.alert("请选择要编辑的记录！", {title: '提示', icon: 0, time: 3000});
            return;
        }
        djxh = rows[0].yshdjxh;
        $.ajax({
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            url: '${ctx}/jbxxwh/yshxxwh/backfillData',
            type: 'post',
            data: {
                'svo.yshdjxh': rows[0].yshdjxh
            }, success: function (results) {
                // 纳税人名称
                $("#editnsrmc").val(results[0].NSRMC);
                // 纳税人识别号
                $("#editnsrsbh").val(results[0].NSRSBH);
                // 社会信用代码
                $("#editshxydm").val(results[0].SHXYDM);
                // 法定代表人姓名
                $("#editfddbrxm").val(results[0].FDDBRXM);
                // 法定代表人联系电话
                $("#editfddbrlxdh").val(results[0].FDDBRLXDH);
                // 办税员姓名
                $("#editbsyxm").val(results[0].BSYXM);
                // 办税员联系电话
                $("#editbsylxdh").val(results[0].BSYLXDH);
                // 单位地址
                $("#editdwdz").val(results[0].DWDZ);
                // 行政区划
                $("#editxgry_dm").val(results[0].XZQH_DM).select2();
            }
        });
        $("#editModal").modal('show');
    }

    function saveEditData() {
        // Start Validator
        $("#validationEditForm").data('bootstrapValidator').validate();
        if (!$("#validationEditForm").data('bootstrapValidator').isValid()) {
            return;
        };
        // 纳税人名称
        var nsrmc = $("#editnsrmc").val();
        // 纳税人识别号
        var nsrsbh = $("#editnsrsbh").val();
        // 社会信用代码
        var shxydm = $("#editshxydm").val();
        // 法定代表人姓名
        var fddbrxm = $("#editfddbrxm").val();
        // 法定代表人联系电话
        var fddbrlxdh = $("#editfddbrlxdh").val();
        // 办税员姓名
        var bsyxm = $("#editbsyxm").val();
        // 办税员联系电话
        var bsylxdh = $("#editbsylxdh").val();
        // 单位地址
        var dwdz = $("#editdwdz").val();
        // 行政区划
        var xzqh_dm = $(".editselect_xzqh").select2("data");
        var xzqh_dms = "";
        if (xzqh_dm != null && JSON.stringify(xzqh_dm) != "{}" && typeof(xzqh_dm) != "undefined" && xzqh_dm.length > 0) {
            xzqh_dms = $("#editxgry_dm option:checked").val();
        }
        if (djxh) {
            $.post("${ctx}/jbxxwh/yshxxwh/saveEditData", {
                'svo.yshdjxh': djxh.trim(),
                'svo.nsrmc': nsrmc,
                'svo.nsrsbh': nsrsbh,
                'svo.shxydm': shxydm,
                'svo.fddbrxm': fddbrxm,
                'svo.fddbrlxdh': fddbrlxdh,
                'svo.bsyxm': bsyxm,
                'svo.bsylxdh': bsylxdh,
                'svo.dwdz': dwdz,
                'svo.xzqh_dm': xzqh_dms
            }, function (result) {
                if (result == "ModifySuccessfully") {
                    $("#editModal").modal('hide');
                    $("#table").bootstrapTable('destroy');
                    initTable();
                    layer.msg("修改成功",{icon:1});
                }
            });
        }
    }

    function namedQuery() {
        var nsrmc = $("#nsrmcs").val().trim();
        var xzqh = $("#xzqhcode").select2("data");
        var xzqhs = "";
        if (xzqh != null && JSON.stringify(xzqh) != "{}" && typeof(xzqh) != "undefined" && xzqh.length > 0) {
            xzqhs = $("#xzqhcode option:checked").text().trim();
        }
        initTable(nsrmc, xzqhs);
    }

    function del() {
        var getRows = $('#table').bootstrapTable('getSelections');
        if (getRows.length == 0) {
            layer.alert("请选择要删除的记录！", {title: '提示', icon: 0, time: 3000});
            return;
        }
        layer.confirm("删除后无法恢复，确定删除吗？", {title: "提示", icon: 3}, function (index) {
            $.post("${ctx}/jbxxwh/yshxxwh/del", {'svo.yshdjxh': getRows[0].yshdjxh,'svo.yshzh': getRows[0].yshzh}, function (results) {
                layer.close(index);
                if (results == "0"){
                    layer.msg("无法删除，该用水户已在另一程序中使用",{icon:0});
                }else{
                    $('#table').bootstrapTable("destroy");
                    initTable();
                    layer.msg("删除成功",{icon:1});
                }
            });
        });
    }

    function formValidator() {
        $('#validationForm').bootstrapValidator({
            message: '这个值无效',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                nsrmcjy: {
                    validators: {
                        notEmpty: {
                            message: '纳税人名称是必须的，不能是空的'
                        }, stringLength: {
                            min: 2,
                            max: 80,
                            message: '纳税人名称必须大于2且小于80的字符组成'
                        }
                    }
                },
                nsrsbhjy: {
                    validators: {
                        message: '纳税人识别号无效',
                        threshold: 1,
                        notEmpty: {
                            message: '纳税人识别号是必须的，不能是空的'
                        }, stringLength: {
                            min: 2,
                            max: 50,
                            message: '纳税人识别号必须大于2且小于50的字符组成'
                        }, remote: {
                            url: "${ctx}/jbxxwh/yshxxwh/certifiedCheck",
                            message: '该纳税人识别号已被占用，请使用其他',
                            delay: 1000,
                            type: 'POST'
                        }, regexp: {
                            regexp: /^[1-9A-Z][A-Za-z0-9]+$/,
                            message: '纳税人识别号只能以英文、数字1-9开头，只能包含英文、数字'
                        }
                    }
                },
                shxydmjy: {
                    validators: {
                        notEmpty: {
                            message: '社会信用代码是必须的，不能是空的'
                        }, stringLength: {
                            min: 2,
                            max: 50,
                            message: '社会信用代码必须大于2且小于50的字符组成'
                        }
                    }
                },
                fddbrxmjy: {
                    validators: {
                        notEmpty: {
                            message: '法定代表人姓名是必须的，不能是空的'
                        }, stringLength: {
                            min: 2,
                            max: 50,
                            message: '法定代表人姓名必须大于2且小于50的字符组成'
                        }
                    }
                },
                fddbrlxdhjy: {
                    validators: {
                        notEmpty: {
                            message: '法定代表人联系电话是必须的，不能是空的'
                        }
                    }
                },
                bsyxmjy: {
                    validators: {
                        notEmpty: {
                            message: '办税员姓名是必须的，不能是空的'
                        }, stringLength: {
                            min: 2,
                            max: 50,
                            message: '办税员姓名必须大于2且小于50的字符组成'
                        }
                    }
                },
                bsylxdhjy: {
                    validators: {
                        notEmpty: {
                            message: '办税员联系电话是必须的，不能是空的'
                        }
                    }
                },
                dwdzjy: {
                    validators: {
                        notEmpty: {
                            message: '单位地址是必须的，不能是空的'
                        }, stringLength: {
                            min: 2,
                            max: 300,
                            message: '单位地址必须大于2且小于300的字符组成'
                        }
                    }
                },
                sybhjy: {
                    validators: {
                        notEmpty: {
                            message: '水源地点是必须的，不能是空的'
                        }
                    }
                },
                xgry_dmjy: {
                    validators: {
                        notEmpty: {
                            message: '行政区划是必须的，不能是空的'
                        }
                    }
                }
            }
        });
    }

    function formEditValidator() {
        $('#validationEditForm').bootstrapValidator({
            message: '这个值无效',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                editnsrmcjy: {
                    validators: {
                        notEmpty: {
                            message: '纳税人名称是必须的，不能是空的'
                        }, stringLength: {
                            min: 2,
                            max: 80,
                            message: '纳税人名称必须大于2且小于80的字符组成'
                        }
                    }
                },
                editnsrsbhjy: {
                    message: '纳税人识别号无效',
                    threshold: 1,
                    validators: {
                        notEmpty: {
                            message: '纳税人识别号是必须的，不能是空的'
                        }, stringLength: {
                            min: 2,
                            max: 50,
                            message: '纳税人识别号必须大于2且小于50的字符组成'
                        }, regexp: {
                            regexp: /^[1-9A-Z][A-Za-z0-9]+$/,
                            message: '纳税人识别号只能以英文、数字1-9开头，只能包含英文、数字'
                        }
                    }
                },
                editshxydmjy: {
                    validators: {
                        notEmpty: {
                            message: '社会信用代码是必须的，不能是空的'
                        }, stringLength: {
                            min: 2,
                            max: 50,
                            message: '社会信用代码必须大于2且小于50的字符组成'
                        }
                    }
                },
                editfddbrxmjy: {
                    validators: {
                        notEmpty: {
                            message: '法定代表人姓名是必须的，不能是空的'
                        }, stringLength: {
                            min: 2,
                            max: 50,
                            message: '法定代表人姓名必须大于2且小于50的字符组成'
                        }
                    }
                },
                editfddbrlxdhjy: {
                    validators: {
                        notEmpty: {
                            message: '法定代表人联系电话是必须的，不能是空的'
                        }
                    }
                },
                editbsyxmjy: {
                    validators: {
                        notEmpty: {
                            message: '办税员姓名是必须的，不能是空的'
                        }, stringLength: {
                            min: 2,
                            max: 50,
                            message: '办税员姓名必须大于2且小于50的字符组成'
                        }
                    }
                },
                editbsylxdhjy: {
                    validators: {
                        notEmpty: {
                            message: '办税员联系电话是必须的，不能是空的'
                        }
                    }
                },
                editdwdzjy: {
                    validators: {
                        notEmpty: {
                            message: '单位地址是必须的，不能是空的'
                        }, stringLength: {
                            min: 2,
                            max: 300,
                            message: '单位地址必须大于2且小于300的字符组成'
                        }
                    }
                },
                editxgry_dmjy: {
                    validators: {
                        notEmpty: {
                            message: '行政区划是必须的，不能是空的'
                        }
                    }
                }
            }
        });
    }

    $("#myModal").on('hidden.bs.modal', function () {
        $("#validationForm").data('bootstrapValidator').destroy();
        $("#validationForm").data('bootstrapValidator', null);
        formValidator();
    });

    $("#editModal").on('hidden.bs.modal', function () {
        $("#validationEditForm").data('bootstrapValidator').destroy();
        $("#validationEditForm").data('bootstrapValidator', null);
        formEditValidator();
    });

    $("#editModal,#myModal").on('hidden.bs.modal', function () {
        $("#nsrmc").val("");
        $("#editnsrmc").val("");
        $("#nsrsbh").val("");
        $("#editnsrsbh").val("");
        $("#shxydm").val("");
        $("#editshxydm").val("");
        $("#fddbrxm").val("");
        $("#editfddbrxm").val("");
        $("#fddbrlxdh").val("");
        $("#editfddbrlxdh").val("");
        $("#bsyxm").val("");
        $("#editbsyxm").val("");
        $("#bsylxdh").val("");
        $("#editbsylxdh").val("");
        $("#dwdz").val("");
        $("#editdwdz").val("");
    });
</script>

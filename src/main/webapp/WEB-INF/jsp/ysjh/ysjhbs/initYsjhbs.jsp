<%--
  Created by IntelliJ IDEA.
  User: PengWen Wang
  Date: 2018/12/13
  Time: 11:20
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<html>
<head>
    <title>水源信息维护</title>
    <meta name="description" content="simple and responsive tables"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link rel="shortcut icon" href="${ctx}/assets/img/favicon.png" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="${ctx}/assets/assets/css/bootstrap.css"/>
    <style>
        *{
            font-family: "Arial", "Microsoft YaHei";
            font-size: 14px;
        }
        .th-inner{
            font-size: 12px;
        }
        .txinput{
            width: 100px;
        }
        select{
            width: 100px;
            height: 24px;
            border: 1px solid #ccc;
        }
    </style>
</head>

<body>
<div>
    <table class="table table-bordered table-striped" style="width: 98%; margin: 0 auto;">
        <thead>
            <tr>
                <td>
                    <span class="widget-caption">水源信息</span>
                </td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <button id="add_mota" type="button" class="btn btn-success" data-toggle="modal" data-target="#myModal">
                        <i class="glyphicon glyphicon-plus"></i>添加
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" class="btn btn-danger" onclick="del()">
                        <i class="glyphicon glyphicon-remove"></i>删除
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
    <div  style="overflow-x: auto; width: 98%; margin: 0 auto; font-size: 14px;">
        <table id="table" style="width: 100%; white-space: nowrap; word-break: keep-all;"  class="table table2 table-striped table-bordered table-hover"></table>
    </div>
</div>


<div class="modal fade" id="myModal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div style="width:1100px;" class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel">新增</h4>
            </div>
            <div class="modal-body">
                <table class="table table-bordered table-striped">
                    <tbody>
                    <tr>
                        <td>水源区域</td>
                        <td><input type="text" class="txinput"    name="" /></td>
                        <td>水源状态</td>
                        <td><input type="text" class="txinput"   name="" /></td>
                        <td>取水许可证号</td>
                        <td><input type="text" class="txinput"   name="" /></td>
                        <td>取水许可证编号</td>
                        <td><input type="text"  class="txinput"   name="" /></td>
                    </tr>
                    <tr>
                        <td>取水许可审批机关</td>
                        <td><input type="text" style="border: 0; text-align: center; color: #ccc"  class="txinput"  value="西安市水务局" readonly /></td>
                        <td>取水用途</td>
                        <td>
                            <select>
                                <option>用途一</option>
                                <option>用途二</option>
                                <option>用途三</option>
                            </select>
                        </td>
                        <td>取水口数量</td>
                        <td><input type="text"  class="txinput"   name="" /></td>
                        <td>取水地点</td>
                        <td><input type="text"  class="txinput"   name="" /></td>
                    </tr>
                    <tr>
                        <td>总计量个数</td>
                        <td><input type="text"  class="txinput"   name="" /></td>
                        <td>是否在线监测</td>
                        <td>
                            <select>
                                <option>是</option>
                                <option>否</option>
                            </select>
                        </td>
                        <td>水源类型</td>
                        <td>
                            <select>
                                <option>地表水</option>
                                <option>地下水</option>
                                <option>其他用水</option>
                            </select>
                        </td>
                        <td>取用水行业</td>
                        <td>
                            <select>
                                <option>农业</option>
                                <option>特种行业</option>
                                <option>其他</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td style="white-space: nowrap;">特殊用水类别</td>
                        <td>
                            <select>
                                <option>疏干排水</option>
                                <option>地源热泵</option>
                                <option>水力发电</option>
                            </select>
                        </td>
                        <td style="white-space: nowrap;">取水许可证有效期限起</td>
                        <td><input type="text"  class="txinput"   name="" /></td>
                        <td style="white-space: nowrap;">取水许可证有效期限止</td>
                        <td><input type="text"  class="txinput"   name="" /></td>
                        <td style="white-space: nowrap;">取水量核定机关</td>
                        <td><input type="text" style="border: 0; text-align: center; color: #ccc"  class="txinput"  value="西安市水务局" readonly /></td>
                    </tr>
                    <tr>
                        <td>年取用水计划</td>
                        <td><input type="text"  class="txinput"   name="" /></td>
                        <td>地下水取水地点供水管网是否覆盖</td>
                        <td>
                            <select>
                                <option>是</option>
                                <option>否</option>
                            </select>
                        </td>
                        <td>地下水超采区类型</td>
                        <td>
                            <select>
                                <option>非超采区</option>
                                <option>一般超采区</option>
                                <option>严重超采区</option>
                            </select>
                        </td>
                        <td>水资源费额标准(元/立方米)</td>
                        <td><input type="text"  class="txinput"   name="" /></td>
                    </tr>
                    <tr>
                        <td>取水方式</td>
                        <td>
                            <select>
                                <option>方式一</option>
                                <option>方式二</option>
                                <option>方式三</option>
                            </select>
                        </td>
                        <td>行政区划</td>
                        <td>
                            <select>
                                <option>区划一</option>
                                <option>区划二</option>
                                <option>区划三</option>
                            </select>
                        </td>
                        <td>经度</td>
                        <td><input type="text"  class="txinput"   name="" /></td>
                        <td>维度</td>
                        <td><input type="text"  class="txinput"   name="" /></td>
                    </tr>
                    <tr>
                        <td>退水地点</td>
                        <td><input type="text"  class="txinput"   name="" /></td>
                        <td>退水方式</td>
                        <td><input type="text"  class="txinput"   name="" /></td>
                        <td>退水量</td>
                        <td><input type="text"  class="txinput"   name="" /></td>
                        <td>退水水质要求</td>
                        <td><input type="text"  class="txinput"   name="" /></td>
                    </tr>
                    <tr>
                        <td>附件</td>
                        <td colspan="7">
                            <%--<input id="fileinput" type="file"/>--%>
                            <input type="file" multiple class="file-loading">
                        </td>
                    </tr>
                    <tr align="center">
                        <td colspan="8"><button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                            <button type="submit" name="submit" class="btn btn-primary" data-dismiss="modal" onclick="saves()">确定</button></td>
                    </tr>
                </table>
                </tbody>
            </div>
        </div>
    </div>
</div>

</body>
<script src="${ctx}/assets/assets/js/jquery-1.11.1.min.js"></script>
<script src="${ctx}/assets/assets/js/bootstrap.min.js"></script>
<script src="${ctx}/assets/js/bootstrap-table.min.js"></script>
<script src="${ctx}/assets/js/bootstrap-table-zh-CN.js"></script>
<script src="${ctx}/assets/js/newselect2/select2.min.js"></script>
<script src="${ctx}/assets/js/fileinput/fileinput.js"></script>
<script src="${ctx}/assets/js/fileinput/zh.js"></script>
<script src="${ctx}/assets/js/bootstrapValidator/bootstrapValidator.min.js"></script>
</html>
<script>
    var filename = "";
    var filepath = "";
    var filenamearray;

    $(function() {
        initTable();

        // 水源类型
        //$.post("${ctx}/...",null,function(result){
        $(".select-sylx").select2({
            // data: result,
            // placeholder: '请选择',
            // allowClear: true
        });
        //});

        // 取用水行业
        $(".select-qyshy").select2({
            // data: result,
            // placeholder: '请选择',
            // allowClear: true
        });

        // 取水用途
        $(".select-qsyt").select2({});

        // 特殊用水类别
        $(".select-tsyslb").select2({});

        // 地下水取水地点供水管网是否覆盖
        $(".select-dxsqsddgsgwsffg").select2({});

        // 是否在线监测
        $(".select-sfzxjc").select2({});

        // 地下水超采区类型
        $(".select-dxsccqlx").select2({});

        // 取水方式
        $(".select-qsfs").select2({});

        // 行政区划
        $(".select-xzqh").select2({});


    });

    function initTable() {
        $('#table').bootstrapTable('destroy');
        $('#table').bootstrapTable({
            url: "${ctx}/sjzd/sjjbgl/sjjblist", 	// 获取数据的Select地址
            sidePagination: "server", 				// 表示服务端请求(分页方式：client客户端分页，server服务端分页)
            queryParams: function(params) {
                return {
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
            uniqueIS: "jbid", 						// 每一行的唯一标识，一般为主键列
            ueryParamsType: 'limit',
            columns: [{
                field: 'ck',
                checkbox: true,
                align: 'center'
            }, {
                field: 'jbid',
                align: 'center',
                title: '水源区域'

            }, {
                field: 'jbmc',
                align: 'center',
                title: '水源状态'
            }, {
                field: 'jbmc',
                align: 'center',
                title: '取水许可证号'
            }, {
                field: 'cjsj',
                align: 'center',
                title: '取水许可审批机关'
            }, {
                field: 'jbms',
                align: 'center',
                title: '许可证状态'
            }, {
                field: 'bz',
                align: 'center',
                title: '取水用途'
            }, {
                field: 'bz',
                align: 'center',
                title: '取水口数量'
            }, {
                field: 'bz',
                align: 'center',
                title: '取水口所在地'
            }, {
                field: 'bz',
                align: 'center',
                title: '总计量个数'
            }, {
                field: 'bz',
                align: 'center',
                title: '水源类型'
            }, {
                field: 'bz',
                align: 'center',
                title: '取用水行业'
            }, {
                field: 'bz',
                align: 'center',
                title: '取水许可证有效期起'
            }, {
                field: 'bz',
                align: 'center',
                title: '取水许可证有效期止'
            }, {
                field: 'bz',
                align: 'center',
                title: '取水量核定机关'
            }, {
                field: 'bz',
                align: 'center',
                title: '地下水取水地点供水管网是否覆盖'
            }, {
                field: '',
                align: '',
                title: '地下水超采区类型'
            }, {
                field: '',
                align: '',
                title: '行政区划'
            }, {
                field: '',
                align: '',
                title: '经度'
            }, {
                field: '',
                align: '',
                title: '维度'
            }]
        });
    }

    //保存(新增)
    function saves() {
        //开启验证
        $("#validationForm").data('bootstrapValidator').validate();
        if(!$("#validationForm").data('bootstrapValidator').isValid()) {
            return;
        }
        //数据级别名称
        var jbmc = $("#jbmc").val();
        //获取级别描述
        var jbms = $("#jbms").val();
        //获取备注信息
        var bz = $("#bz").val();
        //提交参数
        var sub = {
            'svo.jbmc': jbmc,
            'svo.jbms': jbms,
            'svo.bz': bz
        };
        //提交url
        var myurl = "${ctx}/sjzd/sjjbgl/adddata";
        //成功方法
        var myfunctions = function(msg) {
            alert("Data Saved: " + msg);
            //刷新当前页面
            window.location.reload();
        }
        //提交数据
        $.myajax.common("post",
            sub,
            myurl,
            myfunctions
        );
        //隐藏模态框
        $("#myModal").modal('hide');
    }
    //初始化表单验证
    $(document).ready(function() {
        formValidator();
    });
    //Modal验证销毁重构(添加)
    $("#myModal").on('hidden.bs.modal', function() {
        $("#validationForm").data('bootstrapValidator').destroy();
        $("#validationForm").data('bootstrapValidator', null);
        formValidator();
    });

    function del() {
        //获取被选中的记录
        var rows = $('#table').bootstrapTable('getSelections');
        if(rows.length == 0) {
            alert("请选择要删除的记录！");
            return;
        }
        var ids = rows[0].jbid;
        var msg = "您真的确定要删除么？";
        //confirm显示一个带有指定消息的对话框
        if(confirm(msg) == true) {
            $.ajax({
                url: "${ctx}/sjzd/sjjbgl/deleteList",
                type: "post",
                data: {
                    'svo.jbid': ids
                },
                success: function(data) {
                    if(data == 0) {
                        alert("该级别正在被使用，不能删除！");
                    } else {
                        //刷新当前页面
                        window.location.reload();
                    }

                }
            });
        }
    }

    $(document).on('ready', function () {
        var filenames =[];
        $("#fileinput").fileinput({
            showUpload: true,                        //是否显示上传按钮
            showPreview: true,                      //是否显示预览
            dropZoneEnabled: false,                  //是否显示拖拽区域
            maxFileCount: 1,                         //最大文件数量
            mainClass: "input-group-lg",
            uploadAsync: true,                       //默认异步上传
            language: "zh",                          //语言
            allowedFileExtensions: ['jpg', 'png', 'jpeg'], //允许接受的文件后缀
            maxFileSize: 51200,                      //单位kb  最大文件大小   0 为不限制文件大小
            enctype: 'multipart/form-data',          //模拟form数据类型
            uploadUrl: '${ctx}/sjsplc/log/baseUuidUpload'//上传请求地址
        });

        // 异步上传结果处理
        $("#fileinput").on('fileerror', function (event, data, msg) {
        });
        // 异步上传返回结果处理
        $("#fileinput").on('filepreupload', function (event, data, previewId, index) {
            $.post("${ctx}/sjsplc/log/theFilePath", null, function (data) {
                var name;
                filepath = data;
                name = $("#fileinput").val();
                filename = name.substring(12);
                filenamearray = filenames;
            });
        });
        //选择文件后处理事件
        $("#fileinput").on('filebatchselected', function (event, files) {
            filenames = [];
            if (files[0] != undefined) {
                for(var i=0;i<files.length;i++){
                    filenames.push(files[i].name);
                }
            }
        });
    });
</script>
<script type="text/javascript">
    //(添加)表单验证
    function formValidator() {
        $('#validationForm').bootstrapValidator({
            //为每个字段指定通用提示语
            message: '这个值无效',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                levelnames: {
                    message: '级别名称无效',
                    threshold: 1, //只有一个字符以上才触发ajax请求
                    //验证器
                    validators: {
                        //值不为空
                        notEmpty: {
                            message: '级别名称是必须的，不能是空的'
                        },
                        remote: {
                            url: "${ctx}/sjzd/sjjbgl/nameValidation",
                            message: '该级别名称已被占用，请使用其他名称',
                            delay: 1000, //延迟
                            type: 'POST'
                        }
                    }
                },
                levelofdescription: {
                    validators: {
                        notEmpty: {
                            message: '级别描述是必须的，不能是空的'
                        }
                    }
                }
            }
        });
    }
</script>

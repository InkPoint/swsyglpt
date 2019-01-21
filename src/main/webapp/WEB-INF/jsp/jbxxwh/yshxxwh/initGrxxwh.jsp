<%--
  Created by IntelliJ IDEA.
  User: PengWen Wang
  Date: 2019/1/10
  Time: 11:20
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@include file="../../common/taglibs.jsp" %>
<html>
<head>
    <title>个人信息维护</title>
    <%@include file="../../common/include-head.jsp" %>
</head>
<body>
<div class="page-body">
    <div class="row">
        <div class="col-lg-12 col-sm-12 col-xs-12 col-md-12">
            <div class="widget-header ">
                <span class="widget-caption">个人信息</span>
            </div>
            <div class="widget-body">
                <div id="toolbar">
                    <button type="button" class="btn btn-warning btn-sm" onclick="editData()">
                        <i class="glyphicon glyphicon-pencil"></i>编辑
                    </button>
                </div>
                <table id="table" style="white-space: nowrap" data-height="543"
                       class="table table-striped table-bordered table-hover"></table>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="editModal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">编辑</h4>
            </div>
            <div class="modal-body">
                <div class="ibox-content">
                    <form id="validationEditForm" method="post" class="form-horizontal">
                        <div class="form-group">
                            <label class="col-sm-3 col-md-offset-2 control-label">法定代表人联系电话</label>
                            <div class="col-sm-5">
                                <input type="text" class="form-control" id="editfddbrlxdh" name="editfddbrlxdhjy"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-3 col-md-offset-2 control-label">办税员姓名</label>
                            <div class="col-sm-5">
                                <input type="text" class="form-control" id="editbsyxm" name="editbsyxmjy"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-3 col-md-offset-2 control-label">办税员联系电话</label>
                            <div class="col-sm-5">
                                <input type="text" class="form-control" id="editbsylxdh" name="editbsylxdhjy"/>
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
        formEditValidator();
    });

    function initTable() {
        $('#table').bootstrapTable('destroy');
        $('#table').bootstrapTable({
            url: "${ctx}/jbxxwh/yshxxwh/userQuery", // 获取数据的Select地址
            sidePagination: "server", 				// 表示服务端请求(分页方式：client客户端分页，server服务端分页)
            queryParams: function (params) {
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
            },{
                field: 'bsyxm',
                align: 'left',
                halign: 'center',
                title: '办税员姓名'
            }, {
                field: 'bsylxdh',
                align: 'left',
                halign: 'center',
                title: '办税员联系电话'
            }, {
                field: 'dwdz',
                align: 'left',
                halign: 'center',
                title: '单位地址'
            }, {
                field: 'xzqhmc',
                align: 'left',
                halign: 'center',
                title: '行政区划'
            }]
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
                // 法定代表人联系电话
                $("#editfddbrlxdh").val(results[0].FDDBRLXDH);
                // 办税员姓名
                $("#editbsyxm").val(results[0].BSYXM);
                // 办税员联系电话
                $("#editbsylxdh").val(results[0].BSYLXDH);
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
        // 法定代表人联系电话
        var fddbrlxdh = $("#editfddbrlxdh").val();
        // 办税员姓名
        var bsyxm = $("#editbsyxm").val();
        // 办税员联系电话
        var bsylxdh = $("#editbsylxdh").val();
        if (djxh) {
            $.post("${ctx}/jbxxwh/yshxxwh/saveUserEdits", {
                'svo.yshdjxh': djxh.trim(),
                'svo.fddbrlxdh': fddbrlxdh,
                'svo.bsyxm': bsyxm,
                'svo.bsylxdh': bsylxdh
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

    function formEditValidator() {
        $('#validationEditForm').bootstrapValidator({
            message: '这个值无效',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
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
                }
            }
        });
    }

    $("#editModal").on('hidden.bs.modal', function () {
        $("#validationEditForm").data('bootstrapValidator').destroy();
        $("#validationEditForm").data('bootstrapValidator', null);
        formEditValidator();
    });
</script>

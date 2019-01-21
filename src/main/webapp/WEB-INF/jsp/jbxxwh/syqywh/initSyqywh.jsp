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
    <title>水源信息维护</title>
    <%@include file="../../common/include-head.jsp" %>
</head>

<body>
<table class="table table-bordered table-striped" style="width: 98%; margin:60px auto;">
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
            <button type='button' class='btn btn-warning editBtn'><i class='glyphicon glyphicon-pencil'></i>编辑</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" class="btn btn-danger" onclick="del()">
                <i class="glyphicon glyphicon-remove"></i>删除
            </button>
        </td>
    </tr>
    </tbody>
</table>
<div style=" width: 98%; margin: 0 auto; font-size: 14px;">
    <table id="table" style="width: 100%; white-space: nowrap; word-break: keep-all;"
           class="table table2 table-striped table-bordered table-hover"></table>
</div>


<div class="modal" id="myModal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div style="width:1100px;" class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel">新增</h4>
            </div>
            <div class="modal-body">
                <div class="ibox-content">
                    <form id="validationForm" method="post" class="form-horizontal">
                        <input type="hidden" name="syqydm"/>
                        <input type="hidden" name="optType"/>

                        <div class="form-group">
                            <label class="col-sm-3 control-label">水源区域名称</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" name="syqymc"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-3 control-label">状态</label>
                            <div class="col-sm-8">
                                <select class="form-control" style="width: 100%" name="syztdm"></select>
                            </div>
                        </div>


                        <div class="form-group">
                            <label class="col-sm-3 control-label">负责人</label>
                            <div class="col-sm-8">
                                <select class="form-control" style="width: 100%" name="fzrdm"></select>
                            </div>
                        </div>
                        <div class="text-right">
                            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                            <button type="button" class="btn btn-primary syqywhSave">确定</button>
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
    function initData() {
        // 负责人
        $.post("${ctx}/jbxxwh/syqywh/fzrQuery", null, function (result) {
            $("select[name=fzrdm]").select2({
                data: result,
                placeholder: '请选择',
                allowClear: true
            });
        });
        // 水源状态
        $.post("${ctx}/jbxxwh/syqywh/syztQuery", null, function (result) {
            $("select[name=syztdm]").select2({
                data: result,
                placeholder: '请选择',
                allowClear: true
            });
        });
    }

    //初始化表格
    function initTable() {
        $('#table').bootstrapTable('destroy');
        $('#table').bootstrapTable({
            url: "${ctx}/jbxxwh/syqywh/initQuery", 	// 获取数据的Select地址
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
            uniqueIS: "jbid", 						// 每一行的唯一标识，一般为主键列
            ueryParamsType: 'limit',
            height: $(window).height() - 300,
            onLoadSuccess: function (data) {
            },
            columns: [{
                field: 'ck',
                checkbox: true,
                align: 'center'
            }, {
                field: 'SYQY_DM',
                align: 'center',
                title: '水源区域序号'

            }, {
                field: 'SYQYSMC',
                align: 'center',
                title: '水域区域名称'
            }, {
                field: 'SYZTMC',
                align: 'center',
                title: '状态'
            }, {
                field: 'FZRMC',
                align: 'center',
                title: '负责人'
            }]
        });
    }

    $(function () {
        //绑定保存
        $(".syqywhSave").click(function () {
            //开启验证
            $("#validationForm").data('bootstrapValidator').validate();
            if (!$("#validationForm").data('bootstrapValidator').isValid()) {
                return;
            }
            var syqydm = $("input[name=syqydm]").val();

            //数据级别名称
            var syqymc = $("input[name=syqymc]").val();
            //获取备注信息
            var syztdm = $("select[name=syztdm]").val();
            //获取备注信息
            var fzrdm = $("select[name=fzrdm]").val();
            var optType= $("input[name=optType]").val();
            //提交参数
            var sub = {
                'svo.syqydm':syqydm,
                'svo.syqymc': syqymc,
                'svo.syztdm': syztdm,
                'svo.fzrdm': fzrdm
            };
            var url="${ctx}/jbxxwh/syqywh/addData";
            if(optType=="edit"){
                url="${ctx}/jbxxwh/syqywh/modifyData";
            }
            //提交url
            $.post(url, sub, function (msg) {
                htlui.msg("操作成功！");
                window.location.reload();
            });
            //隐藏模态框
            $("#myModal").modal('hide');
        });
        initData();
        initTable();
        formValidator();
        $("#myModal").on('hidden.bs.modal', function () {
            $("#validationForm")[0].reset();
            $("#validationForm").data('bootstrapValidator').destroy();
            $("#validationForm").data('bootstrapValidator', null);
            formValidator();
        });
        $(".editBtn").click(function () {
            //获取被选中的记录
            var rows = $('#table').bootstrapTable('getSelections');
            if (rows.length == 0) {
                layer.alert("请选择要编辑的内容！");
                return;
            }
            $("input[name=syqydm]").val(rows[0].SYQY_DM);
            $("input[name=syqymc]").val(rows[0].SYQYSMC);
            $("select[name=fzrdm]").val( rows[0].FZR_DM).select2();
            $("select[name=syztdm]").val( rows[0].SYZT_DM).select2();
            $("input[name=optType]").val("edit");


            $("#myModal").modal("show");
        });
    });

    function formValidator() {
        $('#validationForm').bootstrapValidator({
            message: '这个值无效',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                syqymc: {
                    validators: {
                        notEmpty: {
                            message: '水源区域不能为空'
                        }
                    }
                }, syztdm: {
                    validators: {
                        notEmpty: {
                            message: '状态代码不能为空'
                        }
                    }
                }, sysl: {
                    validators: {
                        notEmpty: {
                            message: '水源区域不能为空'
                        }
                    }
                }, fzrdm: {
                    validators: {
                        notEmpty: {
                            message: '负责人不能为空'
                        }
                    }
                },
            }
        });
    }

    //Modal验证销毁重构(添加)

    function del() {
        //获取被选中的记录
        var rows = $('#table').bootstrapTable('getSelections');
        if (rows.length == 0) {
            layer.alert("请选择要删除的记录！");
            return;
        }
        var ids = new Array();
        for (var i = 0; i < rows.length; i++) {
            ids.push(rows[i].SYQY_DM);
        }
        //confirm显示一个带有指定消息的对话框
        layer.confirm("您真的确定要删除么？", {title: "确认删除"}, function (index) {
            $.ajax({
                url: "${ctx}/jbxxwh/syqywh/deleteList",
                type: "post",
                data: {
                    'svo.syqydmArray': ids
                },
                success: function (data) {
                    htlui.msg("删除成功！");
                    window.location.reload();
                    layer.close(index);
                }
            });

        });
    }
</script>
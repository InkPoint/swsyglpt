<%--
  Created by IntelliJ IDEA.
  User: PengWen Wang
  Date: 2019/1/14
  Time: 10:14
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<html>
<head>
    <title>初始化表底数查询</title>
    <meta name="description" content="simple and responsive tables"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link rel="shortcut icon" href="${ctx}/assets/img/favicon.png" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="${ctx}/bootstrap/bootstrap-3.3.7/css/bootstrap.css"/>
    <link rel="stylesheet" type="text/css" href="${ctx}/bootstrap/bootstrap-table/dist/bootstrap-table.css">
    <link rel="stylesheet" type="text/css" href="${ctx}/bootstrap/css/beyond.min.css"/>
    <link rel="stylesheet" type="text/css" href="${ctx}/bootstrap/viewer/css/viewer.css"/>
    <link rel="stylesheet" type="text/css" href="${ctx}/bootstrap/viewer/css/main.css"/>
</head>
<body>
<div class="page-body">
    <div class="row">
        <div class="col-lg-12 col-sm-6 col-xs-12 col-md-12">
            <div class="widget">
                <div class="widget-header bg-blue">
                    <span class="widget-caption">查询条件</span>
                </div>
                <div class="widget-body">
                    <table class="table">
                        <tr>
                            <td style="vertical-align:middle; width:3cm;font-size: 15px">取水口地点:</td>
                            <td>
                                <div class="col-sm-2" style="width: 190px;">
                                    <input id="qskdd" align="left" type="text" class="form-control" placeholder="请输入">
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td colspan="12" align="center">
                                <button type="submit" class="btn btn-info" style="width: 2cm;" onclick="namedQuery()">执行查询</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12 col-sm-12 col-xs-12 col-md-12">
            <div class="widget-header ">
                <span class="widget-caption">初始化表底数报送</span>
            </div>
            <div class="widget-body">
                <table id="table" data-height="490" class="table table-striped table-bordered table-hover"></table>
            </div>
        </div>
    </div>
</div>
</body>
<script src="${ctx}/bootstrap/js/jquery-3.3.1.js"></script>
<script src="${ctx}/bootstrap/bootstrap-3.3.7/js/bootstrap.js"></script>
<script src="${ctx}/bootstrap/bootstrap-table/dist/bootstrap-table.js"></script>
<script src="${ctx}/bootstrap/bootstrap-table/dist/locale/bootstrap-table-zh-CN.js"></script>
<script src="${ctx}/bootstrap/viewer/js/viewer.common.js"></script>
<script src="${ctx}/bootstrap/viewer/js/viewer.js"></script>
<script src="${ctx}/bootstrap/viewer/js/main.js"></script>
</html>
<script>

    $(function() {
        initTable();
        $("#qskdd").focus();
        $(document).keydown(function (event) {
            if (event.keyCode == 13) {
                namedQuery();
            }
        });
    });

    function namedQuery() {
        var qskdd = $("#qskdd").val().trim();
        initTable(qskdd);
    }

    function initTable(qskdd) {
        $('#table').bootstrapTable('destroy');
        $('#table').bootstrapTable({
            url: "${ctx}/jbxxwh/csbdssh/initQuery", // 获取数据的Select地址
            sidePagination: "server", 				// 表示服务端请求(分页方式：client客户端分页，server服务端分页)
            queryParams: function(params) {
                return {
                    'svo.qskszd': qskdd,
                    offset: (params.offset / params.limit) + 1,
                    limit: params.limit
                }
            },
            pagination: true, 						// 是否分页
            singleSelect: true, 					// 设置为true禁止多选
            pageNumber: 1, 							// 初始化加载第一页，默认第一页
            pageSize: 10, 							// 每页的记录行数
            pageList: [10, 20, 30, 50], 			// 可供选择的每页行数
            onlyInfoPagination: false, 				// 设置为true只显示总数据数，而不显示分页按钮
            paginationLoop: true, 					// 设置为true启用分页条无线循环的功能
            clickToSelect: true, 					// 是否启用点击选中行
            uniqueIS: "jbid", 						// 每一行的唯一标识，一般为主键列
            ueryParamsType: 'limit',
            columns: [{
                field: 'ck',
                checkbox: true,
                align: 'center'
            }, {
                field: 'QSKSZD',
                align: 'center',
                title: '取水口地点'
            }, {
                field: 'SBWZBH',
                align: 'center',
                title: '水表位置编号'
            }, {
                field: 'SBBH',
                align: 'center',
                title: '水表编号'
            }, {
                field: 'YBDS',
                align: 'center',
                title: '原表底数'
            }, {
                field: 'SBRQ',
                align: 'center',
                title: '上报日期'
            }, {
                field: 'SHZT_DM',
                align: 'center',
                title: '审核状态',
                sortatable: true,
                formatter: function (value, row, index) {
                    if (value == "01"){return '<span class="label label-warning">未审核</span>';}
                    else if(value == "02"){return '<span class="label label-danger">审核未通过</span>';}
                    else if(value == "03"){return '<span class="label label-success">审核已通过</span>';}
                }
            },{
                field: 'SBZT_DM',
                align: 'center',
                title: '水表状态',
                sortatable: true,
                formatter: function (value, row, index) {
                    if (value == "01"){
                        return '<span class="label label-success">正常</span>';
                    }else if (value == "02"){
                        return '<span class="label label-danger">故障</span>';
                    }else if (value == "03"){
                        return '<span class="label label-success">已更换</span>';
                    }
                }
            }]
        });
    }
</script>
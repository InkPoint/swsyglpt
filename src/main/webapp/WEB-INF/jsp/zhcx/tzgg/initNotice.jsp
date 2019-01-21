<%--
  Created by IntelliJ IDEA.
  User: PengWen Wang
  Date: 2019/1/8
  Time: 9:02
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<html>
<head>
    <title>公告</title>
    <meta name="description" content="simple and responsive tables"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link rel="shortcut icon" href="${ctx}/assets/img/favicon.png" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="${ctx}/bootstrap/bootstrap-3.3.7/css/bootstrap.css"/>
    <link rel="stylesheet" type="text/css" href="${ctx}/bootstrap/bootstrap-table/dist/bootstrap-table.css">
    <link rel="stylesheet" type="text/css" href="${ctx}/bootstrap/css/beyond.min.css"/>
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
                        <tr><td style="vertical-align:middle;width: 3cm;">文章标题</td>
                            <td><input id="articleTitle" type="text" style="width: 180px;" class="form-control" placeholder="请输入标题"></td>
                        </tr>
                        <tr><td colspan="12" align="center">
                            <button type="button" class="btn btn-info" style="width: 2cm;" onclick="namedQuery()">执行查询</button>
                        </td></tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12 col-sm-12 col-xs-12 col-md-12">
            <div class="widget">
                <div class="widget-body">
                    <table id="table" data-height="560" data-classes="table table-no-bordered" class="table-hover"></table>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
<script src="${ctx}/bootstrap/js/jquery-3.3.1.js"></script>
<script src="${ctx}/bootstrap/bootstrap-3.3.7/js/bootstrap.js"></script>
<script src="${ctx}/bootstrap/bootstrap-table/dist/bootstrap-table.js"></script>
<script src="${ctx}/bootstrap/bootstrap-table/dist/locale/bootstrap-table-zh-CN.js"></script>
</html>
<script>
    $(function () {
        initTable();
        $("#articleTitle").focus();
        $(document).keydown(function (event) {
            if (event.keyCode == 13) {namedQuery();return false;}
        });
    });

    function namedQuery() {
        var articleTitle = $("#articleTitle").val().trim();
        initTable(articleTitle);
    }

    function initTable(articleTitle) {
        $('#table').bootstrapTable('destroy');
        $('#table').bootstrapTable({
            url: "${ctx}/zhcx/tzgg/viewNotice",         // 获取数据的Select地址
            sidePagination: "server",                   // 表示服务端请求(分页方式：client客户端分页，server服务端分页)
            queryParams: function (params) {
                return {
                    'svo.wzbt': articleTitle,
                    offset: (params.offset / params.limit) + 1,
                    limit: params.limit
                }
            },
            striped: true,                              // 隔行换色
            pagination: true,                           // 是否分页
            singleSelect: true,                         // 设置为true将禁止多选
            pageNumber: 1,                              // 初始化加载第一页，默认第一页
            buttonsAlign: 'left',                       // 按钮对齐方式
            pageSize: 10,                               // 每页的记录行数
            onlyInfoPagination: false,                 // 设置为true只显示总数据数，而不是显示分页按钮
            cache: false,                              // 是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性
            pageList: [10, 20, 30, 50],                 // 可供选择的每页行数
            paginationLoop: true,                       // 设置为true启用分页条无线循环的功能
            clickToSelect: true,                        // 是否启用点击选中行
            queryParamsType: 'limit',                   // 设置为“limit”则会发送符合RESTFui格式的参数
            columns: [{
                field: 'CK',
                checkbox: true,
                align: 'center'
            }, {
                field: 'WZBT',
                align: 'left',
                halign: 'left',
                title: '文章标题',
                formatter: function (value, row, index) {
                    var shorthandTheme;
                    if (value == undefined)value="";
                    if (value != null){
                        if (value.length > 25) {shorthandTheme = value.substring(0, 25) + "...";}
                        else {shorthandTheme = value;}
                    }
                    return [
                        '<span  data-toggle="tooltip" data_placement="bottom" title=' + value + '>' + shorthandTheme + '</span>'
                    ].join('');
                }

            }, {
                field: 'AUTHOR',
                align: 'left',
                halign: 'left',
                title: '作者'
            }, {
                field: 'FBSJ',
                align: 'center',
                halign: 'center',
                title: '发布时间'
            }, {
                field: 'OPERATION',
                align: 'center',
                title: '操作 ',
                sortatable: true,
                formatter: function (value, row, index) {
                    return '<button type="button" class="btn btn-link btn-xs" onclick="viewNotice(\'' + row.TZGGXH + '\')">查看</button>';
                }
            }]
        });
    }

    function viewNotice(TZGGXH){window.location.href = "${ctx}/zhcx/tzgg/initView?xh=" + TZGGXH;}
</script>

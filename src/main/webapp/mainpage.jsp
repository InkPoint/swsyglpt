<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<c:set var="principal" value="${sessionScope.aclSessionInfo}"/>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>菜单选项</title>
    <meta name="description" content="mobile first, app, web app, responsive, admin dashboard, flat, flat ui">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="stylesheet" href="${ctx}/bootstrap/css/BreakingNews.css">
    <style>
        body {
            background: #fff;
            overflow: hidden;
        }

        .demo {
            width: 60%;
            margin: 20px auto;
        }

        .demo2 {
            margin-top: 80px;
        }

        .wlbj {
            width: 672px;
            height: 450px;
            background: url(${ctx}/bootstrap/images/welcome.jpg);
            margin: 70px auto;
        }
    </style>
</head>
<body>
<div class="demo demo2">
    <div class="BreakingNewsController easing" id="breakingnews">
        <div class="bn-title"></div>
        <ul id="announceList">
        </ul>
        <div class="bn-arrows"><span class="bn-arrows-left"></span><span class="bn-arrows-right"></span></div>
    </div>
</div>
<div class="wlbj"></div>
</body>
</html>
<script src="${ctx}/bootstrap/js/jquery-1.11.1.min.js"></script>
<script src="${ctx}/bootstrap/js/BreakingNews.js"></script>
<script>
    $(function () {
        // 公告列表(初始化查询 5 条)
        $.post("${ctx}/zhcx/tzgg/announceList", null, function (results) {
            for (var i = 0; i < results.length; i++) {
                var row = '<li><a href="${ctx}/zhcx/tzgg/initView?xh='+ results[i].tzggxh +'">'+ results[i].wzbt +'</a></li>';
                $('#announceList').append(row);
            }
            $('#breakingnews').BreakingNews({
                title: '通知公告',
                titlebgcolor: '#099',
                linkhovercolor: '#099',
                border: '1px solid #099',
                timer: 3000,
                effect: 'slide',
                fonttextsize: '20px'
            });
        });
    });
</script>

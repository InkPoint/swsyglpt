<%--
  Created by IntelliJ IDEA.
  User: PengWen Wang
  Date: 2019/1/2
  Time: 16:58
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<html>
<head>
    <title>文章预览</title>
    <meta name="description" content="simple and responsive tables"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link rel="shortcut icon" href="${ctx}/assets/img/favicon.png" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="${ctx}/bootstrap/bootstrap-3.3.7/css/bootstrap.css"/>
    <link rel="stylesheet" type="text/css" href="${ctx}/bootstrap/font-awesome-4.7.0/css/font-awesome.css">
    <style>
        body{ padding-top: 10px; }
        .index{
            width:60%;
            margin: 0 auto;
            border-radius: 10px;
            border: 1px solid #cccccc;
            padding:35px;
            -moz-box-shadow: 5px 5px 7px #f3f3f3;
            -webkit-box-shadow: 5px 5px 7px #f3f3f3;
            box-shadow: 5px 5px 7px #f3f3f3;
        }
        h3{ font-size: 22px; text-align: center; margin-top: 20px; font-weight: bold; color: #e74c3c; line-height: 35px;}
        h4{ font-size: 16px; color: #262626; text-align: center; margin-top: 10px;}
        .dzbody{ font-size: 15px; line-height: 30px; padding: 20px; margin: 0 auto;}
        .line{ background: #ccc; width: 100%; height: 1px; margin-top: 30px;}
    </style>
</head>
<body>
<div class="index">
    <button style="float: right" class="btn btn-default" onclick="window.history.go(-1);"><i class="fa fa-mail-reply-all"></i>返回</button>
    <h3 id="titleContent"></h3>
    <br>
    <h4 id="releaseTime"></h4>
    <div class="line"></div>
    <div id="article" class="dzbody">
    </div>
</div>
</body>
<script src="${ctx}/bootstrap/js/jquery-3.3.1.js"></script>
</html>
<script>
    var xh = "${param.xh}";

    $(function () {
        if (xh){
            $.post("${ctx}/zhcx/tzgg/theArticlePreview", {'svo.tzggxh': xh},function (results) {
                $("#titleContent").text(results[0].wzbt);
                // $("#releaseTime").text("发布时间："+ results[0].fbsj.substring(0,10) + '\xa0\xa0\xa0\xa0\xa0\xa0' + "作者：" + results[0].username);
                $("#releaseTime").text("发布时间："+ results[0].fbsj.substring(0,10));
                $("#article").html(results[0].wznr);
            });
        }
    });
</script>
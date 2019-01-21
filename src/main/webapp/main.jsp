<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<c:set var="principal" value="${sessionScope.aclSessionInfo}"/>
<!--[if IE 8]>
<script type="text/javascript" src="${ctx}/static/js/html5shiv.js"></script>
<style>
body{ background: #fff;}
</style>
<![endif]-->
<!--[if IE 9]>
<![endif]-->

<html>
<head>
    <meta charset="utf-8">
    <title>西安市自备水源井信息管理平台</title>
    <meta name="description" content="mobile first, app, web app, responsive, admin dashboard, flat, flat ui">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="stylesheet" href="${ctx}/v20/new1/css/bootstrap.min.css">
    <link rel="stylesheet" href="${ctx}/v20/new1/css/font-awesome.min.css">
    <link href="${ctx}/v20/new1/css/style.css" rel="stylesheet">
    <link rel="stylesheet" href="${ctx}/v20/new1/css/plugin.css">
    <link rel="stylesheet" href="${ctx}/v20/new1/css/landing.css">
    <script src="${ctx}/v20/js/echarts.min.js"></script>
    <script src="${ctx}/v20/js/echarts-liquidfill.min.js"></script>
    <!-- / footer -->
    <script src="${ctx}/v20/new1/js/jquery.min.js"></script>
    <!-- Bootstrap -->
    <script src="${ctx}/v20/new1/js/bootstrap.js"></script>
    <!-- app -->
    <script src="${ctx}/v20/new1/js/app.js"></script>
    <script src="${ctx}/v20/new1/js/app.plugin.js"></script>
    <script src="${ctx}/v20/new1/js/app.data.js"></script>
    <script src="${ctx}/static/layer/v3.1.1/layer.js"></script>


</head>
<body>
<!-- 系统头部 -->
<header id="header" class="navbar navbar-fixed-top">
    <ul class="nav navbar-nav navbar-avatar pull-right">
        <li >
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <font color="#1e90ff">当前机关：</font><span id="theUserOrgName" class="hidden-sm-only"></span> &nbsp;&nbsp;&nbsp;&nbsp;
                <span id="theUserName" class="hidden-sm-only"></span>
                <span class="thumb-small avatar inline"><img src="${ctx}/v20/new1/images/avatar.jpg" alt="Mika Sokeil"
                                                             class="img-circle"></span>
                <b class="caret hidden-sm-only"></b>
            </a>
            <ul class="dropdown-menu" style="margin-left: 50%;text-align: center;">
                <li><a href="#" onclick="herfsrcs('/acl/user/modifyPassword')">密码修改</a></li>
                <li><a href="${ctx}/logout">退出系统</a></li>
            </ul>
        </li>
    </ul>
    <a class="navbar-brand" href="#" style="padding-left: 10px;">
       <img  src="${ctx}/assets/images/login/main_logo.png" width="50" height="35">
        <h4>西安市自备水源井信息管理平台</h4>
    </a>
    <ul class="nav navbar-nav">
        <li id="curpath">
            <div style="width: 300px;height: 45px;">
                <div style='height: 45px;width:80px;vertical-align: middle;text-align: right;padding-top:20px;float:left;'>当前位置：</div>
                <div id="contentss" style='height: 45px;width:300px;vertical-align: middle;text-align: left;padding-top: 20px;'>系统首页</div>
            </div>

        </li>
    </ul>
</header>
<!-- / header -->
<!-- nav -->
<nav id="nav" class="nav-primary  nav-vertical">
    <ul id="nav1" class="nav" data-spy="affix" data-offset-top="50">
        <li class="active"><a target="mainifrme" href="${ctx}/mainpage.jsp"><i class="icon-calendar"></i>系统首页</a></li>
    </ul>
</nav>
<!-- / nav -->

<div style="padding-left: 100px;padding-top: 60px;">
    <iframe id="mainifrme" name="mainifrme" frameborder="0" src="mainpage.jsp" height="85%" width="100%"></iframe>
</div>

<!-- .modal -->

<!-- / .modal -->
<!-- footer -->
<footer id="footer">
    <div class="text-center padder clearfix">
        <p>
            <small><a style="width: 45px; display: block;"></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &copy;2019 西安市自备水源井信息管理平台 版权所有</small>
        </p>
    </div>
</footer>
<a href="#" class="hide slide-nav-block" data-toggle="class:slide-nav slide-nav-left" data-target="body"></a>

</body>
</html>
<script>
    $(function () {
        $.post("${ctx}/main/homepage/currentUserName", null, function (data) {
            $("#theUserOrgName").text(data.orgname);
            $("#theUserName").text(data.username);
        });

        //系统主菜单设置
        $.post("${ctx}/main/mains/querymodels", null, function (data) {
            for(var i=0;i<data.length;i++){
                var row ="<li id=\"menu1\"><a href=\"javascript:void(0);\" onclick=\"initModelPath('"+data[i].RESOURCE_NAME+"');herfsrcs('"+data[i].RESOURCE_URL+"?mkid="+data[i].MENU_RESOURCE_ID+"&mkname="+data[i].RESOURCE_NAME+"')\"><i class=\"icon-book\"></i>"+data[i].RESOURCE_NAME+"</a></li>";
                $('#nav1').append(row);
            }
        });

    });

    function herfsrcs(urls) {
        $("#mainifrme").attr("src", "${ctx}"+urls);
    }

    //主菜单初始化访问路径
    function initModelPath(pathname){
        $("#contentss").html(pathname);
    }

    //    给当前地址添加子页面功能内容
    function addUrlsContent(chilecontent){
        $("#contentss").append("/"+chilecontent);
    }
</script>



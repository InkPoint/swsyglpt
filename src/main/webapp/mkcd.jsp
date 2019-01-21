<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<c:set var="principal" value="${sessionScope.aclSessionInfo}"/>

<script type="text/javascript" src="${ctx}/static/js/html5shiv.js"></script>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>系统功能</title>
    <meta name="description" content="mobile first, app, web app, responsive, admin dashboard, flat, flat ui">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="stylesheet" href="${ctx}/bootstrap/css/menuxz.css">
    <link rel="stylesheet" type="text/css" href="${ctx}/bootstrap/bootstrap-3.3.7/css/bootstrap.css">
    <!--字体 css-->
    <link href="${ctx}/bootstrap/font-awesome-4.7.0/css/font-awesome.css" rel="stylesheet" />
    <script src="${ctx}/bootstrap/js/jquery-3.3.1.js"></script>

</head>
<body>
<div class=" bnav" style="text-align: center; width:100%; margin: 0 auto;">
                   <ul class="ca-menu" id="menu1">
                       <%--<li>--%>
                           <%--<a href="#">--%>
                               <%--<span class="ca-icon" id="heart"><i class=" fa fa-globe bsico" style="color: #047aef;"></i></span>--%>
                               <%--<div class="ca-content">--%>
                                   <%--<h2 class="ca-main">用水核定书导出</h2>--%>
                               <%--</div>--%>
                           <%--</a>--%>
                       <%--</li>--%>

                   </ul>
</div>


<script src="${ctx}/v20/new1/js/app.data.js"></script>
<!--  select css3菜单选项-->
<script type="text/javascript" src="${ctx}/bootstrap/js/jquery-3.3.1.js"></script>
<script type="text/javascript">
    $(document).ready(function(){
        var c=1;
        $(".cloud-product-ul>li").mouseenter(function(){
            var e=$(this);
            c=e.data("index");
            var e=$(this);
            setTimeout(function(){
                if(c==e.data("index")){
                    $(".cloud-product-ul>li").removeClass("active");
                    e.addClass("active");
                }
            },120)
        });

    });


</script>
</body>
</html>
<script>
    $(function(){
        //设置当前访问路径
        $.post("${ctx}/main/mains/permissionInfo?mkid=<%=request.getParameter("mkid")%>",null, function (data) {
            for(var i=0;i<data.length;i++){
                var row1=//"<p class=\"introduce-list-small\"><input type=\"button\" class=\"btnlist\"  onclick=\"gotoUrl('"+(data[i].RESOURCE_URL==null?"":data[i].RESOURCE_URL)+"','"+data[i].RESOURCE_NAME+"')\" name=\"menus\"  value=\""+data[i].RESOURCE_NAME+"\"/></p>";
                "<li>"+
               " <a href=\"#\" onclick=\"gotoUrl('"+(data[i].RESOURCE_URL==null?"":data[i].RESOURCE_URL)+"','"+data[i].RESOURCE_NAME+"')\">"+
                "<span class=\"ca-icon\" id=\"heart\"><i class=\"fa fa-globe bsico\" style=\"color: #047aef;\"></i></span>"+
               " <div class=\"ca-content\">"+
                "<h2 class=\"ca-main\">"+data[i].RESOURCE_NAME+"</h2>"+
                " </div>"+
                "</a>"+
                "</li>";
                $('#menu1').append(row1);
            }
        });
    });

    function gotoUrl(url,name){
        if(url!=null&&url!=""){
            parent.initModelPath("<%=request.getParameter("mkname")%>/"+name);
            window.location.href="${ctx}"+url;
        }
    }

</script>

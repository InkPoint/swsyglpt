<%@page contentType="text/html;charset=utf-8" pageEncoding="utf-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
${menus}
<%--<div id="menubars" style="position: absolute;top:60px;bottom: 0px;left: 0px;right: 0px">--%>
    <%--<div id="bars" style="padding:0 0 0 0;position: relative;top:0px;bottom: 10px;">--%>
        <%--<c:forEach items="${menus}" var="item" varStatus="idx">--%>
            <%--<div title="${item.resourceName}" iconCls="icon-num${idx.index}" style="overflow:auto;padding:0">--%>
                <%--<div class="accordion-listed">--%>
                    <%--<ul>--%>
                        <%--<c:forEach items="${item.children}" var="resource">--%>
                            <%--<li class="listpanel">--%>
                                <%--<a href="#" onclick="menuClick('${resource.menuResourceId}','${resource.resourceName}','${pageContext.request.contextPath}${resource.resourceModule}${resource.resourceUrl}',true)">--%>
                                <%--<img src="${pageContext.request.contextPath}/static/js/themes/icons/${idx.index%10}.png">--%>
                                <%--<span>${resource.resourceName}</span></a>--%>
                            <%--</li>--%>
                        <%--</c:forEach>--%>
                    <%--</ul>--%>
                <%--</div>--%>
            <%--</div>--%>
        <%--</c:forEach>--%>
    <%--</div>--%>
<%--</div>--%>
<%--<script type="text/javascript">--%>
    <%--$(function () {--%>
        <%--var het = $(".sidebar").height();--%>
        <%--$("#bars").accordion({--%>
            <%--//select: '型号管理',--%>
            <%--height: het - 21,--%>
            <%--width: 560--%>
        <%--});--%>

        <%--$("#menubars").mCustomScrollbar({--%>
            <%--scrollButtons: {--%>
                <%--enable: true--%>
            <%--},--%>
            <%--advanced: {--%>
                <%--updateOnContentResize: true--%>
            <%--},--%>
            <%--theme: "dark"--%>
        <%--});--%>
        <%--$('#workspaces').tabs({--%>
            <%--width: $('#spacecons').width(),--%>
            <%--height: $('#spacecons').height()--%>
        <%--});--%>
        <%--menuClick('menu01', '设计工具访问', '${pageContext.servletContext.contextPath}/gen/commonTool/portaLets', false);--%>
    <%--});--%>
<%--</script>--%>


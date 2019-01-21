<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<link rel="stylesheet" href="${pageContext.servletContext.contextPath}/static/cssmenu/styles.css">
<script src="${pageContext.servletContext.contextPath}/static/cssmenu/script.js"></script>
<script type="text/javascript">
  $(function () {
    $("#menubars").mCustomScrollbar({
      scrollButtons: {
        enable: true
      },
      advanced: {
        updateOnContentResize: true
      },
      theme: "dark"
    });
    $('#workspaces').tabs({
      width: $('#spacecons').width(),
      height: $('#spacecons').height()
    });
    //menuClick('menu01', '设计工具访问', '${pageContext.servletContext.contextPath}/gen/commonTool/portaLets', false);
  });
</script>

<div id="menubars" style="position: absolute;top:5px;bottom: 0px;left: 0px;right: 0px">
  <div id='cssmenu' style="padding-top: 5px;">
    <ul>
      <li class='active'><a href='#'><span>Home</span></a></li>
      <c:forEach items="${menus}" var="item" varStatus="idx">
        <li class='has-sub'><a href='#'><span>${item.resourceName}</span></a>
          <ul>
            <c:forEach items="${item.children}" var="resource">
              <li class='last'>
                <a href='#' onclick="menuClick('${resource.menuResourceId}','${resource.resourceName}','${pageContext.request.contextPath}${resource.resourceModule}${resource.resourceUrl}',true)">
                  <span>${resource.resourceName}</span>
                </a>
              </li>
            </c:forEach>
          </ul>
        </li>
      </c:forEach>
    </ul>
  </div>
</div>
<%@page contentType="text/html" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var='ctx' value="${pageContext.request.contextPath}"/>
<c:set var='principal' value='${sessionScope.aclSessionInfo}'/>

<div class="easyui-layout" style="width:100%;height:100%;">
    <form id="viewForm" method="post" >
        <div region="center" border="false" style="padding:10px;">
            <table border="0" style="width:100%;line-height: 30px;font-size: 14px;font-family: Verdana,微软雅黑,黑体">
                <tr>
                    <td width="40%" align="center">用户代码:</td>
                    <td align="left">${principal.userCode}
                        <input type="hidden" id="j_password" value="${user.userPassword}">
                        <input type="hidden" id="j_usercode" value="${principal.userCode}"></td>
                </tr>
                <tr>
                    <td align="center">用户名称:</td>
                    <td align="left">${principal.userName}</td>
                </tr>
                <tr>
                    <td align="center">用户机构:</td>
                    <td align="left"><input id="j_organize" class="easyui-combobox"
                                            data-options="valueField:'orgId',textField:'orgName',url:'${ctx}/acl/menu/chooseGroup1',
                               onLoadSuccess:function(data){
                                              var val = $('#j_organize').combobox('getData');
                                              for (var item in val[0]) {
                                                if (item == 'orgId') {
                                                    $('#j_organize').combobox('select', val[0][item]);
                                                }
                                              }
                               }"
                                            style="width:200px;"/></td>
                </tr>
            </table>
            <br/>
            <br/>
            <div align="center">
                <a id="saveBtn" class="easyui-linkbutton" icon="icon-ok">确定</a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a id="cancelBtn" class="easyui-linkbutton" icon="icon-redo">取消</a>
            </div>
        </div>
    </form>
</div>
<script>
    $(function () {
        if (window.top !== window.self) {
            window.top.location = window.location;
        }
        $("#saveBtn").click(login);
        $("#cancelBtn").click(function () {
            $('.easyui-window').window('destroy');
        });
        $("body").bind('keyup', keyEvent);
    });


    function keyEvent(event) {
        if (event.keyCode == 13) {
            login();
        }
    }

    function login() {
        var ParamData = {
            userCode: $('#j_usercode').val(),
            password: $('#j_password').val(),
            orgId: $('#j_organize').combobox('getValue')
        };
        $.ajax({
            url: '${ctx}/acl/user/validate',
            type: 'post',
            data: ParamData,
            success: function (responseJson) {
                if (responseJson.code == -1) {
                    $('#message').html(responseJson.msg);
                } else if (responseJson.code == 0) {
                    window.location.href = "${ctx}/index.jsp";
                }
            }
        });
    }
</script>
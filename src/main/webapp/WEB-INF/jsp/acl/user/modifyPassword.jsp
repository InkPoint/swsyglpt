<%@page contentType="text/html" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var='ctx' value="${pageContext.request.contextPath}"/>
<c:set var='principal' value='${sessionScope.aclSessionInfo}'/>

<html>
<head>
    <meta charset="utf-8">
    <title>西安市水务局水资源管理系统登录</title>
    <meta name="description" content="mobile first, app, web app, responsive, admin dashboard, flat, flat ui">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="stylesheet" href="${ctx}/v20/new1/css/bootstrap.min.css">
    <link rel="stylesheet" href="${ctx}/v20/new1/css/font-awesome.min.css">
    <script type="text/javascript" src="${ctx}/static/jquery-easyui-1.4/jquery.min.js"></script>
    <script src="${ctx}/static/layer/v3.1.1/layer.js"></script>
    <script src="${ctx}/static/js/htlui.js"></script>
    <style scoped="scoped">
        .textbox {
            height: 25px;
            width: 240px;
            margin: 0;
            padding: 0 2px;
            box-sizing: content-box;
        }
    </style>

</head>
<script>
    $(function(){
        $('input[name="dvo.userCode"]').attr('readOnly', true);
        $('input[name="dvo.userName"]').attr('readOnly', true);
        $("#saveBtn").click(saveData);
    });


    //保存
    function saveData() {
        var selectdata=$("#j_organize").find("option:selected").val();

        if ($("#oldPassword").val() == '') {
            htlui.msg("请输入原密码！");
            $("#oldPassword").focus();
            return;
        }
        if ($("#userPassword").val() == '') {
            htlui.msg("请输入新密码！");
            $("#userPassword").focus();
            return;
        }

        var testPass=/^[a-zA-Z0-9]{6,12}$/;
        if(!testPass.test($("#userPassword").val())){
            htlui.msg("新密码必须为6~12位字母或数字！");
            $("#userPassword").focus();
            return;
        }

        if ($("#confirmPassword").val() == '') {
            htlui.msg("请输入确认密码！");
            $("#confirmPassword").focus();
            return;
        }

        if ($("#confirmPassword").val() != $("#userPassword").val()) {
            htlui.msg("新密码与确认密码不一致！");
            $("#confirmPassword").focus();
            return;
        }

        var ParamData = {
            oldPassword: $('#oldPassword').val(),
            userPassword: $('#userPassword').val()
        };
        $.ajax({
            url: '${pageContext.request.contextPath}/acl/user/savePassword',
            type: 'post',
            data: ParamData,
            success: function (responseJson) {
                htlui.msg(responseJson.msg);
            }
        });
    }
</script>
<body>
<div class="easyui-layout" style="width:100%;height:100%;">
    <form id="viewForm" method="post" >
        <div region="center" border="false" style="padding:10px;">
            <table class="table table-bordered table-striped"  style="width: 40%; margin:50px auto">
                <%--style="width:20%;line-height: 30px;font-size: 14px;font-family: Verdana,微软雅黑,黑体"--%>
                <thead>
                    <tr>
                        <td colspan="2">
                            密码修改
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td width="40%" align="center">用户代码:</td>
                        <td align="left">${dvo.userCode}</td>
                    </tr>
                    <tr>
                        <td align="center">用户名称:</td>
                        <td align="left">${dvo.userName}</td>
                    </tr>
                    <tr>
                        <td align="center">原密码:</td>
                        <td align="left"><input class="input" id="oldPassword" type="password"></td>
                    </tr>
                    <tr>
                        <td align="center">新密码:</td>
                        <td align="left"><input class="input" id="userPassword" type="password"></td>
                    </tr>
                    <tr>
                        <td align="center">确认密码:</td>
                        <td align="left"><input class="input" id="confirmPassword" type="password"></td>
                    </tr>
                    <tr>
                        <td colspan="2" align="center"><a id="saveBtn" class="btn btn-info" icon="icon-ok">确定</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </form>
</div>
</body>
</html>

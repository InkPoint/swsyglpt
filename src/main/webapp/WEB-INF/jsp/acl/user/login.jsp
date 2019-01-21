<%@page contentType="text/html;charset=utf-8" pageEncoding="utf-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<!DOCTYPE html>
<html lang="en" class="no-js">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>西安市自备水源井信息管理平台 - 用户登录</title>
    <link rel="stylesheet" type="text/css" href="${ctx}/assets/assets/login/normalize.css" />
    <link rel="stylesheet" type="text/css" href="${ctx}/assets/assets/login/demo.css" />
    <%--<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/assets/css/select2/select2.min.css" />--%>
    <!--必要样式-->
    <link rel="stylesheet" type="text/css" href="${ctx}/assets/assets/css/login/login.css" />
    <script src="${ctx}/assets/assets/js/login/html5.js"></script>
    <script type="text/javascript" src="${ctx}/static/jquery-easyui-1.4/jquery.min.js"></script>
    <script src="${pageContext.request.contextPath}/assets/js/newselect2/select2.min.js"></script>
    <script src="${ctx}/static/layer/v3.1.1/layer.js"></script>
    <script src="${ctx}/static/js/htlui.js"></script>
    <style>
        input:-webkit-autofill{
            -webkit-box-shadow: 0 0 0px 1000px rgba(252,252,252,0) inset;
            transition: background-color 5000s ease-in-out 0s;
        }
    </style>
    <script>try{Typekit.load({ async: true });}catch(e){}</script>
    <!--[if IE]>

    <![endif]-->
    <script>
        $(function () {
            $('#j_username').val('');
            $("#j_username").focus();
            $("#loginBtn").click(login);
            $("body").bind('keyup', keyEvent);
        });


        function login() {

            var selectdata=$("#j_organize").find("option:selected").val();

            if ($("#j_username").val() == '') {
                htlui.msg("请输入用户名！");
                $("#j_username").focus();
                return;
            }
            if ($("#j_password").val() == '') {
                htlui.msg("请输入密码！");
                $("#j_password").focus();
                return;
            }

            if ($("#j_checkcode").val() == '') {
                htlui.msg("请输入验证码！");
                $("#j_checkcode").focus();
                return;
            }


            if ($("#j_username").val() != '' && $("#j_password").val() != ''&& $("#j_checkcode").val() != '') {
                userLogin();
            }else{
                htlui.msg("请输入验证码！");
                $("#j_checkcode").focus();
            }
        }

        function keyEvent(event) {
            if (event.keyCode == 13) {
                login();
            }
        }

        function userLogin() {
            var selectdata=$("#j_organize").find("option:selected").val();
            var ParamData = {
                userCode: $('#j_username').val(),
                password: $('#j_password').val(),
                orgId:selectdata,
                checkcode:$('#j_checkcode').val()
            };
            $.ajax({
                url: '${pageContext.request.contextPath}/acl/user/validate',
                type: 'post',
                data: ParamData,
                success: function (responseJson) {
                    console.log("responseJson:",responseJson);
                    if (responseJson.code == -1) {
                        $('#message').html(responseJson.msg);
                        htlui.msg(responseJson.msg);
                        refreshCheckCode();
                    } else if (responseJson.code == 0) {
                        window.location.href = "${ctx}/index.jsp";
                    } else {
                        var myseledata=[];
                        $("#div_orgname").css("display","");
                        $(responseJson).each(function(i){
                            var x=responseJson[i];
                            var a={id: eval("x.orgId"),text:eval("x.orgName")};
                            console.log("myseledata:",a);
                            myseledata[i]=a;
                            $("#j_organize").append("<option value='"+ eval("x.orgId")+"'>"+ eval("x.orgName")+"</option>");
                        });
                        $("#j_organize").blur();
                    }
                }
            });
        }
        function custom_close(){
            window.opener=null;
            window.open('','_self');
            window.close();
        }
        function refreshCheckCode(){
            $('#checkimg').attr("src","${pageContext.request.contextPath}/acl/user/checkcode?ts="+new Date().getTime());
        }

    </script>
</head>
<body>
<div class="container demo-1">
    <div class="content">
        <div id="large-header" class="large-header">
            <canvas id="demo-canvas"></canvas>
            <div class="logo_box">
                <div class="logo" >
                    <img src="${ctx}/assets/images/login/login_logo.png" width="180" height="155">
                    <h3>西安市自备水源井</h3>
                    <h3>信息管理平台</h3>
                </div>
                <form action="#" name="f" method="post">
                    <div class="input_outer">
                        <span class="u_user"></span>
                        <input id="j_username" name="logname" class="text"  style="color: #FFFFFF !important" type="text" placeholder="请输入您的账号">
                    </div>
                    <div class="input_outer">
                        <span class="us_uer"></span>
                        <input id="j_password" name="logpass" class="text"   style="color: #FFFFFF !important; position:absolute; z-index:100;"value="" type="password" placeholder="请输入密码">
                    </div>
                    <div id="div_checkcode" class="input_outer">
                        <div id="div_checkcode2" class="yzm">
                            <img id = "checkimg" src="${ctx}/acl/user/checkcode" style="border:1px solid rgb(173,177,182);"/>
                            <a href="#" onFocus="this.blur();" id="tocheckimg" onClick="refreshCheckCode()">
                                <img src="${ctx}/static/images/login/refresh.png" style="margin-top:1px" border="0px" width="22px" height="22px" alt="刷新"/>
                            </a>
                        </div>
                        <span class="us_yzm"></span>
                        <input id="j_checkcode" name="checkcode" class="text1"  style="color: #FFFFFF !important; position:absolute; z-index:100;"value="" type="text" placeholder="请输入验证码">
                        </a>
                    </div>
                    <div id="div_orgname" class="input_outer" style="display:none">
                        <span class="us_yzm"></span>
                        <select id="j_organize" class="loginselect"  name="orgId"    onchange="this.blur();"></select>
                    </div>
                    <div class="mb2"><a id="loginBtn" class="act-but submit" href="javascript:;" style="color: #FFFFFF">登录</a></div>
                </form>
            </div>
        </div>
    </div>
</div>

<script src="${ctx}/assets/assets/js/login/bideo.js"></script>
<script src="${ctx}/assets/assets/js/login/main.js"></script>
<script src="${ctx}/assets/assets/js/login/TweenLite.min.js"></script>
<script src="${ctx}/assets/assets/js/login/EasePack.min.js"></script>
<script src="${ctx}/assets/assets/js/login/rAF.js"></script>
<script src="${ctx}/assets/assets/js/login/demo-1.js"></script>
</body>
</html>
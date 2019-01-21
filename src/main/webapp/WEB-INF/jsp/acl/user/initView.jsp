<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<div class="easyui-layout" style="width:100%;height:100%;">
    <form id="viewForm" method="post" enctype="multipart/form-data">
        <input type="hidden" name="dvo.userId" value="${dvo.userId}">
        <div region="north" style="padding:5px;padding-left:30px;background:#47A0CC;height:40px;border:1px solid #ccc">
            <a href="#" class="easyui-linkbutton" iconCls="icon-save" onClick="saveData();">保存</a>
        </div>
        <div region="center" border="false" style="padding:30px;">
            <table>
                <tr>
                    <td><div style="height:20px;">用户代码:</div></td>
                    <td><input class="easyui-validatebox textbox" name="dvo.userCode" data-options="required:true" value="${dvo.userCode}"></td>
                    <%--<td><input type="file" name="uploadify" id="file_upload_1" /></td>--%>
                </tr>
                <tr>
                    <td>用户名称:</td>
                    <td><input class="easyui-validatebox textbox" name="dvo.userName" data-options="required:true" value="${dvo.userName}"></td>
                    <%--<td rowspan="6">--%>
                        <%--<img id="img_id" src="${ctx}/acl/user/downloadImage?userId=${dvo.userId}"  BORDER="1" style="width:180px;height:150px;">--%>
                        <%--<div id="fileQueueId"></div>--%>
                    <%--</td>--%>
                </tr>
                <tr>
                    <td>密码:</td>
                    <%--<td><input class="easyui-validatebox textbox" name="dvo.userPassword" id="userPassword" type="password" data-options="required:true" value="${dvo.userPassword}"></td>--%>
                    <td><input class="easyui-validatebox textbox" name="dvo.userPassword" id="userPassword" type="password" data-options="required:true" value=""></td>
                </tr>
                <tr>
                    <td>确认密码:</td>
                    <%--<td><input class="easyui-validatebox textbox" name="confirmPassword" id="confirmPassword" type="password" data-options="required:true"  validType="equals['#userPassword']" value="${dvo.userPassword}"></td>--%>
                    <td><input class="easyui-validatebox textbox" name="confirmPassword" id="confirmPassword" type="password" data-options="required:true"  validType="equals['#userPassword']" value=""></td>
                </tr>
                <%--<tr>--%>
                    <%--<td>备注:</td>--%>
                    <%--<td><input class="easyui-validatebox textbox" name="dvo.userDesc" value="${dvo.userDesc}"></td>--%>
                <%--</tr>--%>
                <%--<tr>--%>
                    <%--<td>用户邮箱:</td>--%>
                    <%--<td><input class="easyui-validatebox textbox" name="dvo.userEmail" data-option="validType:'email'" value="${dvo.userEmail}"></td>--%>
                <%--</tr>--%>
                <%--<tr>--%>
                    <%--<td>手机号码:</td>--%>
                    <%--<td><input class="easyui-validatebox textbox" name="dvo.userMobile" value="${dvo.userMobile}"></td>--%>
                <%--</tr>--%>
                <%--<tr>--%>
                    <%--<td>允许登陆IP:</td>--%>
                    <%--<td><input class="easyui-validatebox textbox" name="dvo.userAllowIp" value="${dvo.userAllowIp}"></td>--%>
                    <%--<td></td>--%>
                <%--</tr>--%>
                <%--<tr>--%>
                    <%--<td>有效期:</td>--%>
                    <%--<td>--%>
                        <%--<input type="text" name="dvo.userValid" class="easyui-datebox textbox" validType="date"--%>
                               <%--value="<fmt:formatDate value='${dvo.userValid}' type='date' pattern='yyyy-MM-dd'/>"/>--%>
                    <%--</td>--%>
                    <%--<td></td>--%>
                <%--</tr>--%>
                <tr>
                    <td>用户类型:</td>
                    <td>
                        <select name="dvo.userType" class="easyui-combobox textbox">
                            <option value="general">普通用户</option>
                            <%--<option value="admin">系统管理员</option>--%>
                        </select>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>用户状态:</td>
                    <td>
                        <select name="dvo.statusFlag" class="easyui-combobox textbox">
                            <option value="normal">正常</option>
                            <option value="suspend">挂起</option>
                        </select>
                    </td>
                    <td></td>
                </tr>
            </table>
        </div>
    </form>
</div>
<style scoped="scoped">
    .textbox{
        height:20px;
        width: 400px;
        margin:0;
        padding:0 2px;
        box-sizing:content-box;
    }
</style>
<script>
    $.extend($.fn.validatebox.defaults.rules, {
        equals: {
            validator: function(value,param){
                return value == $(param[0]).val();
            },
            message: '与密码不一致'
        }
    });
    $(function() {
        var action = "${param.action}";
        if(action == 'modify'){
            $('input[name="dvo.userCode"]').attr('readOnly', true);
            $('select[name="dvo.userType"]').val('${dvo.userType}');
            $('select[name="dvo.statusFlag"]').val('${dvo.statusFlag}');
        }

        $("#file_upload_1").uploadify({
            height      : 20,
            width       : 80,
            swf         : '${ctx}/static/uploadify/uploadify.swf',
            uploader    : '${ctx}/acl/user/uploadImage',
            buttonText  : '上传头像',
            formData    : {'userId': '${dvo.userId}'},
            fileObjName : 'uploadedFile',
            'queueID'   : 'fileQueueId',
            'onUploadSuccess' : function(file, data, response) {
                //alert('The file ' + file.name + ' was successfully uploaded with a response of ' + response + ':' + data);
                //appendDataList(data,file.name);
            }
        });
    });

    //保存
    function saveData() {
        var aflag = $('#viewForm').form('validate');
        if(!aflag){
            return;
        }
        var testPass=/^[a-zA-Z0-9]{6,12}$/;
        if(!testPass.test($("#userPassword").val())){
            alert("新密码必须为6~12位字母或数字！");
            $("#userPassword").focus();
            return;
        }
        var dataPara = $.TS.getFormJson('#viewForm');
        var action = '${param.action}';
        $.ajax({
            url: '${pageContext.request.contextPath}/acl/user/'+action,
            type: 'post',
            data: dataPara,
            success: function(responseJson){
                $.TS.messager.showMsg('提示',responseJson.msg,'info');
                if(responseJson.code == 0){
                    var action = "${param.action}";
                    var $dg = $('#userGrid');
                    if(action == 'modify'){
                        var row = $dg.datagrid('getSelected');
                        var rowIdx = $dg.datagrid('getRowIndex', row);
                        $dg.datagrid('updateRow', {index: rowIdx, row: responseJson.data});
                    }else{
                        $dg.datagrid('appendRow',responseJson.data);
                    }
                    $('.easyui-window').window('destroy');
                }
            }
        });
    }
</script>
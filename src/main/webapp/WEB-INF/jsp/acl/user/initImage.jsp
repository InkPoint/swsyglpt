<%@page contentType="text/html" pageEncoding="UTF-8"%>

<div class="easyui-layout" style="width:100%;height:100%;">
    <form id="viewForm" method="post" >
        <input type="hidden" name="dvo.userId" value="${dvo.userId}">
        <div region="north" style="padding:5px;padding-left:30px;background:#47A0CC;height:40px;border:1px solid #ccc">
            <a href="#" class="easyui-linkbutton" iconCls="icon-save" onClick="saveData();">保存</a>
        </div>
        <div region="center" border="false" style="padding:30px;">
            <table>
                <tr>
                    <td><div style="height:20px;">用户代码:</div></td>
                    <td><input class="easyui-validatebox textbox" name="dvo.userCode" data-options="required:true" value="${dvo.userCode}"></td>
                </tr>
                <tr>
                    <td>用户名称:</td>
                    <td><input class="easyui-validatebox textbox" name="dvo.userName" data-options="required:true" value="${dvo.userName}"></td>
                </tr>
            </table>
            <div id="fileQueueId"></div>
            <div>
                <input type="file" name="uploadify" id="file_upload_1" />
            </div>
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
    $(function() {
        $('input[name="dvo.userCode"]').attr('readOnly', true);
        $('input[name="dvo.userName"]').attr('readOnly', true);

//        $("#file_upload_1").uploadify({
//            'debug' : true,
//            height        : 30,
//            swf           : '/aclManager/js/uploadify/uploadify.swf',
//            uploader      : '/aclManager/acl/user/uploadImage',
//            width         : 120
//        });
    });

</script>
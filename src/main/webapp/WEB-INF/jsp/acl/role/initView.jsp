<%@page contentType="text/html" pageEncoding="UTF-8"%>

<div class="easyui-layout" style="width:100%;height:100%;">
    <form id="viewForm" method="post" >
        <input type="hidden" name="dvo.roleId" value="${dvo.roleId}">
        <input type="hidden" name="dvo.rolePid" value="${param.pid}">
        <div region="north" style="padding:5px;padding-left:30px;background:#47A0CC;height:40px;border:1px solid #ccc">
            <a href="#" id="saveDataBtn"></a>
        </div>
        <div region="center" border="false" style="padding:30px;">
            <table>
                <tr>
                    <td>角色名称:</td>
                    <td><input class="easyui-validatebox textbox" name="dvo.roleName" data-options="required:true" value="${dvo.roleName}"></td>
                </tr>
                <tr>
                    <td>序号:</td>
                    <td><input class="easyui-numberbox numberbox" name="dvo.roleIndex" data-options="required:true" value="${dvo.roleIndex}"></td>
                </tr>
                <tr>
                    <td>角色类型:</td>
                    <td>
                        <select name="dvo.roleType" id="roleType"></select>
                    </td>
                </tr>
                <tr>
                    <td>角色状态:</td>
                    <td>
                        <select name="dvo.statusFlag" class="easyui-combobox combobox">
                            <option value="normal">正常</option>
                            <option value="suspend">挂起</option>
                        </select>
                    </td>
                </tr>
            </table>
        </div>
    </form>
</div>
<style scoped="scoped">
    .textbox{
        height:20px;
        width: 403px;
        margin:0;
        padding:0 2px;
        box-sizing:content-box;
    }
    .numberbox{
        height:20px;
        width: 400px;
        margin:0;
        padding:0 2px;
        box-sizing:content-box;
    }
    .combobox{
        height:20px;
        width: 402px;
        margin:0;
        padding:0 2px;
        box-sizing:content-box;
    }
</style>
<script>
    $(function() {
        var action = "${param.action}";
        if(action == 'modify'){
            $('select[name="dvo.statusFlag"]').val('${dvo.statusFlag}');
        }
        var metaArr = [{'id': 'menuDomain', 'text': '角色组'}, {'id': 'menu', 'text': '角色'}];
        /*var arr = [];
        $.each(metaArr,function(idx,item){
            if(item.id === '${dvo.roleType}'){
                arr.push(item);
            }
        });*/
        $('#roleType').combobox({
            valueField: 'id',
            textField: 'text',
            width: 406,
            //disabled: true,
            data: metaArr,
            onLoadSuccess: function(){
                $(this).combobox('setValue','${dvo.roleType}');
            }
        });
        var node = $('#roleTree').tree('getSelected');
        $('#saveDataBtn').linkbutton({
            disabled: isRootNode(node), // 如果是根则不能保存
            text: '保存',
            iconCls: 'icon-save',
            onClick: saveData
        });
    });

    //保存
    function saveData() {
        var aflag = $('#viewForm').form('validate');
        if(!aflag){
            return;
        }
        var dataPara = $.TS.getFormJson('#viewForm');
        var action = '${param.action}';
        $.ajax({
            url: '${pageContext.request.contextPath}/acl/role/'+action,
            type: 'post',
            data: dataPara,
            success: function(responseJson){
                $.TS.messager.showMsg('提示',responseJson.msg,'info');
                if(responseJson.code == 0){
                    var $tree = $('#dataTree');
                    var node = $tree.tree('getSelected');
                    if('${param.action}' == 'modify'){
                        $tree.tree('update', {
                            target: node.target,
                            text: responseJson.data.roleName
                        });
                    }else{
                        var newNode = {
                            parent: node.target,
                            data: [
                                {
                                    id: responseJson.data.roleId,
                                    text: responseJson.data.roleName,
                                    attributes: responseJson.data
                                }
                            ]
                        };
                        $tree.tree('append', newNode);
                    }
                    $('.easyui-window').window('destroy');
                }
            }
        });
    }
</script>
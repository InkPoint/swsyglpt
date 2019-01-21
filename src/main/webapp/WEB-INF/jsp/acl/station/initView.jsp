<%@page contentType="text/html" pageEncoding="UTF-8"%>

<div class="easyui-layout" style="width:100%;height:100%;">
    <form id="viewForm" method="post" >
        <input type="hidden" name="dvo.stationId" value="${dvo.stationId}">
        <div region="north" style="padding:5px;padding-left:30px;background:#47A0CC;height:40px;border:1px solid #ccc">
            <a href="#" id="saveDataBtn"></a>
        </div>
        <div region="center" border="false" style="padding:30px;">
            <table>
                <tr>
                    <td>岗位名称:</td>
                    <td><input class="easyui-validatebox textbox" name="dvo.stationName" data-options="required:true" value="${dvo.stationName}"></td>
                </tr>
                <tr>
                    <td>岗位状态:</td>
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
        $('#saveDataBtn').linkbutton({
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
            url: '${pageContext.request.contextPath}/acl/station/'+action,
            type: 'post',
            data: dataPara,
            success: function(responseJson){
                $.TS.messager.showMsg('提示',responseJson.msg,'info');
                if(responseJson.code == 0){
                    var $dg = $('#stationGrid');
                    if('${param.action}' == 'modify'){
                        var row = $dg.datagrid('getSelected');
                        var rowIdx = $dg.datagrid('getRowIndex', row);
                        $dg.datagrid('updateRow', {index: rowIdx, row: responseJson.data});
                    }else{
                        $dg.datagrid('appendRow',responseJson.data);
                    }
                }
            }
        });
    }
</script>
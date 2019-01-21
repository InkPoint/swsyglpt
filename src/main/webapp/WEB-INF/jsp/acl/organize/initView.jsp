<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<div class="easyui-layout" style="width:100%;height:100%;">
    <form id="viewForm" method="post" >
        <input type="hidden" name="dvo.orgId" value="${dvo.orgId}">
        <input type="hidden" name="dvo.orgPid" value="${param.pid}">
        <div region="north" style="padding:5px;padding-left:30px;background:#F2F2F2;height:35px;border:1px solid #ccc">
            <a href="#" class="easyui-linkbutton" iconCls="icon-save" onClick="saveData();">保存</a>
        </div>
        <div region="center" border="false" style="padding:30px;">
            <table id="menuTab">
                <tr>
                    <td class="thead">机构名称:</td>
                    <td><input class="easyui-validatebox textbox" name="dvo.orgName" data-options="required:true" value="${dvo.orgName}"></td>
                </tr>
                <tr>
                    <td class="thead">机构代码:</td>
                    <td><input class="easyui-validatebox textbox" name="dvo.orgCode" data-options="required:true" value="${dvo.orgCode}"></td>
                </tr>
                <tr>
                    <td class="thead">机构描述:</td>
                    <td><input class="easyui-validatebox textbox" name="dvo.orgDesc" value="${dvo.orgDesc}"></td>
                </tr>
                <tr>
                    <td class="thead">序号:</td>
                    <td><input class="easyui-validatebox textbox" name="dvo.orgIndex" data-options="required:true" value="${dvo.orgIndex}"></td>
                </tr>
                <tr>
                    <td class="thead">状态:</td>
                    <td>
                        <select name="dvo.statusFlag" class="easyui-combobox textbox">
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
    #menuTab tr {
        height: 40px;
    }
    #menuTab td {
        padding: 4px;
        border-bottom: 1px dotted #666;
    }
    .thead {
        color: #FFF;
        font-size: 10pt;
        background: #803324;
        width: 140px;
    }
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
        var action = "${param.action}";
        if(action == 'modify'){
            $('select[name="dvo.statusFlag"]').val('${dvo.statusFlag}');
        }
    });

    //保存
    function saveData() {
        var aflag = $('#viewForm').form('validate');
        if(!aflag){
            return;
        }
        var dataPara = $.TS.getFormJson('#viewForm');
        $.ajax({
            url: '${pageContext.request.contextPath}/acl/organize/${param.action}',
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
                            text: responseJson.data.orgName
                        });
                    }else{
                        var newNode = {
                            parent: node.target,
                            data: [
                                {
                                    id: responseJson.data.orgId,
                                    text: responseJson.data.orgName,
                                    attributes: responseJson.data
                                }
                            ]
                        };
                        $tree.tree('append', newNode);
                    }
                }
            }
        });
    }
</script>
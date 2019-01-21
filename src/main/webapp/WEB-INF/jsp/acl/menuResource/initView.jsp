<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var='ctx' value="${pageContext.request.contextPath}"/>
<link href="${ctx}/theme/assets/global/plugins/simple-line-icons/simple-line-icons.min.css" rel="stylesheet" type="text/css"/>
<link href="${ctx}/theme/assets/global/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>

<div class="easyui-layout" style="width:100%;height:100%;">
    <form id="viewForm" method="post" >
        <input type="hidden" name="dvo.menuResourceId" value="${dvo.menuResourceId}">
        <input type="hidden" name="dvo.resourcePid" value="${param.pid}">
        <div region="north" style="padding:5px;padding-left:30px;background:#47A0CC;height:40px;border:1px solid #ccc">
            <a href="#" class="easyui-linkbutton" iconCls="icon-save" onClick="saveData();">保存</a>
        </div>
        <div region="center" border="false" style="padding:30px;">
            <table id="menuTab">
                <tr>
                    <td class="thead">资源名称:</td>
                    <td><input class="easyui-validatebox textbox" name="dvo.resourceName" data-options="required:true" value="${dvo.resourceName}"></td>
                </tr>
                <tr>
                    <td class="thead">资源描述:</td>
                    <td><input class="easyui-validatebox textbox" name="dvo.resourceDesc" value="${dvo.resourceDesc}"></td>
                </tr>
                <tr>
                    <td class="thead">序号:</td>
                    <td><input class="easyui-numberbox numberbox" name="dvo.resourceIndex" data-options="required:true" value="${dvo.resourceIndex}"></td>
                </tr>
                <tr>
                    <td class="thead">资源路径:</td>
                    <td><input class="easyui-validatebox textbox" name="dvo.resourceUrl" value="${dvo.resourceUrl}"></td>
                </tr>
                <tr>
                    <td class="thead">域级次:</td>
                    <td><input class="easyui-numberbox numberbox" name="dvo.domainLevel" readonly="true" value="${dvo.domainLevel}"></td>
                </tr>
                <tr>
                    <td class="thead">图标:</td>
                    <td>
                        <a href="#" class="easyui-linkbutton" iconCls="icon-edit" onClick="changeIcon();">选择图标</a>
                        <i id="finalIcon" class=""></i>
                        <input type="hidden" id="resourceIcon" name="dvo.resourceIcon" value="${dvo.resourceIcon}">
                    </td>
                </tr>
                <tr>
                    <td class="thead">状态:</td>
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
        $('#finalIcon').attr('class','${dvo.resourceIcon}');
    });

    //保存
    function saveData() {
        var aflag = $('#viewForm').form('validate');
        if(!aflag){
            return;
        }
        var dataPara = $.TS.getFormJson('#viewForm');
        $.ajax({
            url: '${pageContext.request.contextPath}/acl/menuResource/${param.action}',
            type: 'post',
            data: dataPara,
            success: function(responseJson){
                $.TS.messager.showMsg('提示',responseJson.msg,'info');
                if(responseJson.code == 0){
                    var $tree = $('#menuTree');
                    var node = $tree.tree('getSelected');
                    if('${param.action}' == 'modify'){
                        $tree.tree('update', {
                            target: node.target,
                            text: responseJson.data.resourceName
                        });
                    }else{
                        var newNode = {
                            parent: node.target,
                            data: [
                                {
                                    id: responseJson.data.menuResourceId,
                                    text: responseJson.data.resourceName,
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

    // 新建,编辑
    function changeIcon() {
        var title = "选择图标";
        $.TS.window.getWindow({
            'title':title,
            'href':'${pageContext.request.contextPath}/acl/menuResource/initIcon'
        });
    }
</script>
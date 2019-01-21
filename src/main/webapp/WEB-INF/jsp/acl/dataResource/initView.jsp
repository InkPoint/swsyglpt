<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<div class="easyui-layout" style="width:100%;height:100%;">
    <div region="south" style="padding:5px;background:#F2F2F2;height:35px;border:1px solid #ccc" align="center">
        <a href="#" id="addBtn" class="easyui-linkbutton" plain="true" iconCls="icon-add" onClick="saveData()">保存</a>
    </div>
    <div id="dataTree" region="center"></div>
</div>

<script>

    $(function() {
        $("#dataTree").tree({
            url: '${pageContext.request.contextPath}/acl/organize/getSubNodes?rootNodeId=00000000000000000000000000000000',
            animate: true,
            lines: true,
            fit: true,
            onLoadSuccess: function() {
                var root = $(this).tree('getRoot');
                $(this).tree('expand', root.target);
            }
        });
    });

    //保存
    function saveData() {
        var node = $('#dataTree').tree('getSelected');
        if(node) {
            $.ajax({
                url: '${pageContext.request.contextPath}/acl/dataResource/${param.action}',
                type: 'post',
                data: {resourceTable: 'acl_organize',resourceKey: node.id},
                success: function (responseJson) {
                    $.TS.messager.showMsg('提示', responseJson.msg, 'info');
                    if (responseJson.code == 0) {
                        $('#dataGrid').datagrid('appendRow', responseJson.data);
                        $('.easyui-window').window('destroy');
                    }
                }
            });
        }else{
            $.TS.messager.showMsg('提示', '请选择数据', 'info');
        }
    }
</script>
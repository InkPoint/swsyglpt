<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <%@ include file="/common/global.jsp"%>
    <title>菜单管理</title>
    <%@ include file="/common/meta.jsp" %>
    <%@ include file="/common/include-easyui.jsp" %>
    <%@ include file="/common/include-custom.jsp" %>
</head>
<body class="easyui-layout">
<div region="north" title="${request_menu_title}" collapsible=false border="false"></div>
    <div class="easyui-layout" region="west" style="width:350px;" border="false">
        <div region="north" style="padding:5px;height:35px;border:1px " align="right">
            <a href="#" id="addBtn" class="easyui-linkbutton" plain="true" iconCls="icon-add" onClick="addMenu()">增加</a>
            <a href="#" id="delBtn" class="easyui-linkbutton" plain="true" iconCls="icon-remove" onClick="removeMenu()">删除</a>
        </div>
        <div id="menuTree" region="center" title=" "></div>
    </div>

    <div id="mgr_tabs" class="easyui-tabs" region="center">
        <div id="viewPanel" title="菜单定义"></div>
        <%--<div id="defaultPanel" title="菜单包含的角色"></div>--%>
    </div>

</body>
</html>

<script>
    $(function() {
//        $('#mgr_tabs').tabs({
//            onSelect: function(title, index){
//                var node = $('#menuTree').tree('getSelected');
//                if(title == '默认值' && node != null){
//                    showDefaultValueInfo(node.id);
//                }
//            }
//        });
        initTree();
        buttonCtl(null);
    });

    function initTree(){
        $("#menuTree").tree({
            url: '${pageContext.request.contextPath}/acl/menuResource/getSubNodes?rootNodeId=00000000000000000000000000000002',
            animate: true,
            lines: true,
            fit: true,
            onSelect: function(node){
                //var node = $(this).tree('getSelected');
                buttonCtl(node);
                var rootNode = $(this).tree('getRoot');
                if(node && rootNode.id != node.id){
                    var parentNode = $(this).tree('getParent', node.target);
                    showInfo(node.id, parentNode.id, 'modify');
                }
            },
            onLoadSuccess: function() {
                var root = $(this).tree('getRoot');
                $(this).tree('expand', root.target);
            }
        });
    }

    function buttonCtl(treeNode){
        var rootNode = $('#menuTree').tree('getRoot');
        if(rootNode.id == treeNode.id){
            $('#addBtn').linkbutton('enable');
            $('#delBtn').linkbutton('disable');
            return;
        }else{
            $('#addBtn').linkbutton('enable');
            $('#delBtn').linkbutton('enable');
        }
    }

    function showInfo(id, pid, action){
        $('#viewPanel').panel({
            href: '${pageContext.request.contextPath}/acl/menuResource/initView?id='+id + '&pid=' + pid + '&action='+action,
            fit: true
        });
    }

    function addMenu(){
        var node = $('#menuTree').tree('getSelected');
        if(node == null){
            $.TS.messager.showMsg('提示','请选择父节点');
            return;
        }
        showInfo('',node.id,'add');
    }

    function removeMenu(){
        var node = $('#menuTree').tree('getSelected');
        if(node){
            $.TS.messager.confirm('删除确认','是否删除菜单['+node.text+']',function(data){
                if(data){
                    $.ajax({
                        url: '${pageContext.request.contextPath}/acl/menuResource/delete',
                        type: 'post',
                        dataType: "json",
                        data: {'id' : node.id},
                        success: function(responseJson){
                            $.TS.messager.showMsg('提示',responseJson.msg,'info');
                            if(responseJson.code == 0){
                                $('#menuTree').tree('remove',node.target);
                            }
                        }
                    });
                }
            });
        }else{
            $.TS.messager.showMsg('提示','请选择节点');
            return;
        }
    }

</script>

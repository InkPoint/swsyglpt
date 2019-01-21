<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<!DOCTYPE html>
<html>
<head>
    <%@ include file="/common/global.jsp" %>
    <title>角色管理</title>
    <%@ include file="/common/meta.jsp" %>
    <%@ include file="/common/include-easyui.jsp" %>
    <%@ include file="/common/include-custom.jsp" %>
</head>
<body class="easyui-layout">
<div region="north" title="${request_menu_title}" collapsible=false border="false"></div>
<div class="easyui-layout" region="west" style="width:350px;" border="false">
    <div region="north" style="padding:5px;height:35px;border:1px" align="right">
        <a href="#" id="addBtn" class="easyui-linkbutton" plain="true" iconCls="icon-add" onClick="addRole()">增加</a>
        <a href="#" id="delBtn" class="easyui-linkbutton" plain="true" iconCls="icon-remove"
           onClick="removeRole()">删除</a>
    </div>
    <div id="dataTree" region="center" title=" "></div>
</div>

<div id="mgr_tabs" class="easyui-tabs" region="center">
    <div id="viewPanel" title="角色定义"></div>
    <%--<div id="menuPanel" title="角色包含的菜单"></div>--%>
</div>

</body>
</html>

<script>
    $(function () {
        initTree();
        buttonCtl(null);
    });

    function initTree() {
        $("#dataTree").tree({
            url: '${pageContext.request.contextPath}/acl/role/getSubNodes?rootNodeId=00000000000000000000000000000000',
            animate: true,
            lines: true,
            fit: true,
            onSelect: function (node) {
                buttonCtl(node);
//                var rootNode = $(this).tree('getRoot');
                var pid = '';
                if (!isRootNode(node)) {
                    parentNode = $(this).tree('getParent', node.target);
                    pid = parentNode.id;
                }
                showInfo(node.id, pid, 'modify', node.attributes.roleType);
            }/*,
             onLoadSuccess: function() {
             var root = $(this).tree('getRoot');
             $(this).tree('expand', root.target);
             }*/
        });
    }

    function buttonCtl(treeNode) {
        if (isRootNode(treeNode)) {
            $('#addBtn').linkbutton('enable');
            $('#delBtn').linkbutton('disable');
            return;
        } else {
            $('#addBtn').linkbutton('enable');
            $('#delBtn').linkbutton('enable');
        }
    }

    function isRootNode(node) {
        var flag = false;
        if (node == null) return flag;
        $.each($('#dataTree').tree('getRoots'), function (index, item) {
            if (item.id == node.id) {
                flag = true;
                return false;
            }
        });
        return flag;
    }

    function showInfo(id, pid, action, roleType) {
        var url = '${pageContext.request.contextPath}/acl/role/initView?id=' + id + '&pid=' + pid + '&action=' + action;
        $('#viewPanel').panel({
            href: url,
            fit: true
        });
        var $tabs = $('#mgr_tabs');
        var panel = $tabs.tabs('getSelected');
        var index = $tabs.tabs('getTabIndex', panel);
        var mgrTabs = $tabs.tabs('tabs');
        if (mgrTabs.length > 2) {
            $tabs.tabs('close', 2);
        }
        if (mgrTabs.length > 1) {
            $tabs.tabs('close', 1);
        }
        if ('menu' === roleType) {
            $tabs.tabs('add', {
                title: '角色包含的菜单',
                selected: index == 1,
                href: '${pageContext.request.contextPath}/acl/role/menuList?roleId=' + id
            });
        }
        /*else{
         $tabs.tabs('add',{
         title: '角色包含的数据',
         selected: index == 1,
         href: '
        ${pageContext.request.contextPath}/acl/role/dataList?roleId='+id
         });
         $tabs.tabs('add',{
         title: '角色包含的用户',
         selected: index == 2,
         href: '
        ${pageContext.request.contextPath}/acl/role/userList?roleId='+id
         });
         }*/

        $('#menuPanel').panel({
            href: '${pageContext.request.contextPath}/acl/role/menuList?roleId=' + id,
            fit: true
        });
    }

    function addRole() {
        var node = $('#dataTree').tree('getSelected');
        if (node == null) {
            $.TS.messager.showMsg('提示', '请选择父节点');
            return;
        } else if (node.attributes.roleType === 'menu') {
            $.TS.messager.showMsg('提示', '请选择角色组节点');
            return;
        }
        showInfo('', node.id, 'add', node.attributes.roleType);
    }

    function removeRole() {
        var node = $('#dataTree').tree('getSelected');
        if (node) {
            $.TS.messager.confirm('删除确认', '是否删除角色[' + node.text + ']', function (data) {
                if (data) {
                    $.ajax({
                        url: '${pageContext.request.contextPath}/acl/role/delete',
                        type: 'post',
                        dataType: "json",
                        data: {'uuid': node.id},
                        success: function (responseJson) {
                            $.TS.messager.showMsg('提示', responseJson.msg, 'info');
                            if (responseJson.code == 0) {
                                $('#dataTree').tree('remove', node.target);
                            }
                        }
                    });
                }
            });
        }
    }

</script>
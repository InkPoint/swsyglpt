<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <%@ include file="/common/global.jsp" %>
    <title>机构管理</title>
    <%@ include file="/common/meta.jsp" %>
    <%@ include file="/common/include-easyui.jsp" %>
    <%@ include file="/common/include-custom.jsp" %>
</head>
<body class="easyui-layout">
<div region="north" title="${request_menu_title}" collapsible=false border="false"></div>
<div class="easyui-layout" region="west" style="width:350px;" border="false">
    <div region="north" style="padding:5px;height:30px;border:1px;overflow: hidden" align="right">
        <a href="#" id="addBtn" class="easyui-linkbutton" plain="true" iconCls="icon-add" onClick="addData()">增加</a>
        <a href="#" id="delBtn" class="easyui-linkbutton" plain="true" iconCls="icon-remove"
           onClick="removeData()">删除</a>
    </div>
    <div id="dataTree" region="center" title=" "></div>
</div>
<div id="mgr_tabs" class="easyui-tabs" region="center">
    <div id="viewPanel" title="机构定义"></div>
    <div id="stationUserPanel" title="机构包含的岗位,用户"></div>
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
            url: '${pageContext.request.contextPath}/acl/organize/getSubNodes?rootNodeId=00000000000000000000000000000000',
            animate: true,
            lines: true,
            fit: true,
            onSelect: function (node) {
                //var node = $(this).tree('getSelected');
                buttonCtl(node);
                var rootNode = $(this).tree('getRoot');
                if (node && rootNode.id != node.id) {
                    var parentNode = $(this).tree('getParent', node.target);
                    showInfo(node.id, parentNode.id, 'modify');
                }
            },
            onLoadSuccess: function () {
                var root = $(this).tree('getRoot');
                $(this).tree('expand', root.target);
            }
        });
    }

    function buttonCtl(treeNode) {
        var rootNode = $('#dataTree').tree('getRoot');
        if (rootNode.id == treeNode.id) {
            $('#addBtn').linkbutton('enable');
            $('#delBtn').linkbutton('disable');
            return;
        } else {
            $('#addBtn').linkbutton('enable');
            $('#delBtn').linkbutton('enable');
        }
    }

    function showInfo(id, pid, action) {
        $('#viewPanel').panel({
            href: '${pageContext.request.contextPath}/acl/organize/initView?id=' + id + '&pid=' + pid + '&action=' + action,
            fit: true
        });
        $('#stationUserPanel').panel({
            href: '${pageContext.request.contextPath}/acl/organize/stationUser?orgId=' + id,
            fit: true
        });
    }

    function addData() {
        var node = $('#dataTree').tree('getSelected');
        if (node == null) {
            $.TS.messager.showMsg('提示', '请选择父节点');
            return;
        }
        showInfo('', node.id, 'add');
    }

    function removeData() {
        var node = $('#dataTree').tree('getSelected');
        if (node) {
            $.TS.messager.confirm('删除确认', '是否删除机构[' + node.text + ']', function (data) {
                if (data) {
                    $.ajax({
                        url: '${pageContext.request.contextPath}/acl/organize/delete',
                        type: 'post',
                        dataType: "json",
                        data: {'id': node.id},
                        success: function (responseJson) {
                            $.TS.messager.showMsg('提示', responseJson.msg, 'info');
                            if (responseJson.code == 0) {
                                $('#dataTree').tree('remove', node.target);
                            }
                        }
                    });
                }
            });
        } else {
            $.TS.messager.showMsg('提示', '请选择节点');
            return;
        }
    }

</script>

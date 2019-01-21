<%@page contentType="text/html" pageEncoding="UTF-8" %>

<div class="easyui-layout" style="width:100%;height:100%;">
    <div id="roleTree" title="角色树" data-options="region:'west',collapsible:false" style="padding:0px;width:350px;">
    </div>
    <div region="center" border="false" style="padding:0px;">
        <div id="roleGrid" fit="true"></div>
    </div>

    <div id="roleGridTb" style="padding:0px">
        <input id="roleName" style="width:200px">
        <a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-add" onClick="saveStationOwnRole()">保存</a>
    </div>
</div>


<script>
    $('#roleName').textbox({
        buttonText: '查询',
        prompt: '角色名称',
        onClickButton: searchRole
    });
    $("#roleTree").tree({
        url: '${pageContext.request.contextPath}/acl/role/getSubNodes?rootNodeId=00000000000000000000000000000000',
        animate: true,
        lines: true,
        onSelect: function (node) {
            var node = $(this).tree('getSelected');
            if (node) {
                showRole(node.id);
            }
        },
        onLoadSuccess: function () {
            var root = $(this).tree('getRoot');
            $(this).tree('expand', root.target);
        }
    });

    $('#roleGrid').datagrid({
        idField: 'roleId',
        fitColumns: true,
        //title: '资源域包含的菜单',
        striped: true,
        singleSelect: false,
        toolbar: '#roleGridTb',
        columns: [
            [
                {field: 'ck', checkbox: true},
                {
                    field: 'roleName',
                    title: '角色名称',
                    align: 'left',
                    width: 120,
                    sortable: true,
                    sorter: function (a, b) {
                        return (a > b ? 1 : -1);
                    }
                },
                {
                    field: 'statusFlag',
                    title: '状态',
                    align: 'left',
                    width: 120,
                    formatter: function (value, rec) {
                        var status = '';
                        if (value == 'normal') {
                            status = '正常';
                        } else if (value == 'suspend') {
                            status = '挂起';
                        } else {  // 2
                            status = '删除';
                        }
                        return status;
                    }
                }
            ]
        ],
        remoteSort: false,
        pagination: true,
        pageSize: 10,
        border: true,
        url: '${pageContext.request.contextPath}/acl/station/getNotOwnRoles?stationId=${param.stationId}'
    });

    function showRole(domainId) {
        var dataPara = {'svo.rolePid': domainId};
        $('#roleGrid').datagrid('load', dataPara);
    }

    function searchRole() {
        var dataPara = {'svo.roleName': $('#roleName').val()};
        $('#roleGrid').datagrid('load', dataPara);
    }

    // 添加岗位拥有的角色
    function saveStationOwnRole() {
        var rows = $('#roleGrid').datagrid('getSelections');
        if (!rows) {
            $.messager.alert('提示', '请选择角色');
            return;
        }
        var paramData = {'stationId': '${param.stationId}'};
        var gridData = $.TS.genDataGridParam('#roleGrid', 'list', 'selected');
        $.extend(paramData, gridData);   // 将grid数据添加到paramData数据参数中
        $.ajax({
            url: '${pageContext.request.contextPath}/acl/station/addOwnRole',
            type: 'post',
            data: paramData,
            success: function (responseData) {
                $.messager.alert("提示", responseData.msg);
                if (responseData.code == 0) {
                    for (var i = rows.length; i > 0; i--) {
                        $('#ownRoleGrid').datagrid('appendRow', rows[i - 1]);
                        var idx = $('#roleGrid').datagrid('getRowIndex', rows[i - 1]);
                        $('#roleGrid').datagrid('deleteRow', idx);
                    }
                }
            }
        });
    }

</script>
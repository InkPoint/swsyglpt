<%@page contentType="text/html" pageEncoding="UTF-8" %>

<div class="easyui-layout" style="width:100%;height:100%;">
    <div region="north" style="padding:5px;background:#F2F2F2;height:35px;border:1px solid #ccc">
        <form id="userForm">
            <label for="userCode">用户代码</label>
            <input class="easyui-validatebox" type="text" id="userCode" name="svo.userCode">
            <label for="userName">用户名称</label>
            <input class="easyui-validatebox" type="text" id="userName" name="svo.userName">
            <a href="#" class="easyui-linkbutton" iconCls="icon-search" onClick="searchList();">查询</a>
            <a href="#" class="easyui-linkbutton" iconCls="icon-save" onClick="saveOwnUser()">保存</a>
        </form>
    </div>
    <div region="center" border="false" style="padding:0;">
        <div id="userGrid" fit="true"></div>
    </div>
</div>


<script>
    $('#userGrid').datagrid({
        idField: 'userId',
        fitColumns: true,
        striped: true,
        singleSelect: false,
        columns: [
            [
                {field: 'ck', checkbox: true},
                {
                    field: 'userCode',
                    title: '用户代码',
                    align: 'left',
                    width: 120,
                    sortable: true,
                    sorter: function (a, b) {
                        return (a > b ? 1 : -1);
                    }
                },
                {
                    field: 'userName',
                    title: '用户名称',
                    align: 'left',
                    width: 120,
                    sortable: true,
                    sorter: function (a, b) {
                        return (a > b ? 1 : -1);
                    }
                },
                {
                    field: 'userType',
                    title: '用户类型',
                    align: 'left',
                    width: 120,
                    formatter: function (value, rec) {
                        var utype = '';
                        if (value == 'general') {
                            utype = '普通用户';
                        } else {
                            utype = '系统管理员';
                        }
                        return utype;
                    }
                },
                {
                    field: 'statusFlag',
                    title: '用户状态',
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
        url: '${pageContext.request.contextPath}/acl/organize/getNotOwnUsers?orgId=${param.orgId}&stationId=${param.stationId}'
    });

    //查找
    function searchList() {
        var dataPara = $.TS.getFormJson('#userForm');
        $('#userGrid').datagrid('load', dataPara);
    }

    // 添加机构拥有的用户
    function saveOwnUser() {
        var $dg = $('#userGrid');
        var rows = $dg.datagrid('getSelections');
        if (!rows) {
            $.messager.alert('提示', '请选择用户');
            return;
        }
        var paramData = {'orgId': '${param.orgId}', 'stationId': '${param.stationId}'};
        var gridData = $.TS.genDataGridParam('#userGrid', 'list', 'selected');
        $.extend(paramData, gridData);   // 将grid数据添加到paramData数据参数中
        $.ajax({
            url: '${pageContext.request.contextPath}/acl/organize/addOwnUser',
            type: 'post',
            data: paramData,
            success: function (responseData) {
                $.messager.alert("提示", responseData.msg);
                if (responseData.code == 0) {
                    for (var i = rows.length; i > 0; i--) {
                        $('#ownUserGrid').datagrid('appendRow', rows[i - 1]);
                        var idx = $dg.datagrid('getRowIndex', rows[i - 1]);
                        $dg.datagrid('deleteRow', idx);
                    }
                }
            }
        });
    }

</script>
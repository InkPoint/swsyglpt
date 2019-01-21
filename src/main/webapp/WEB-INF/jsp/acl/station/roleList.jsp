<%@page contentType="text/html" pageEncoding="UTF-8"%>

<div class="easyui-layout" style="width:100%;height:100%;">
    <div region="north" style="padding:5px;background:#F2F2F2;height:35px;border:1px solid #ccc">
        <a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-add" onClick="addOwnRole()">添加</a>
        <a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-remove" onClick="removeOwnRole()">删除</a>
    </div>
    <div region="center" border="false" style="padding:0;">
        <div id="ownRoleGrid" fit="true"></div>
    </div>
</div>


<script>
    $(function() {
        $('#ownRoleGrid').datagrid({
            idField : 'roleId',
            //fitColumns : true,
            striped : true,
            singleSelect : false,
            //toolbar: '#ownRoleGridTb',
            columns : [
                [
                    {field: 'ck', checkbox: true},
                    {
                        field : 'roleName',
                        title : '角色名称',
                        align : 'left',
                        width : 120,
                        sortable : true,
                        sorter : function(a, b) {
                            return (a > b ? 1 : -1);
                        }
                    },
                    {
                        field : 'roleType',
                        title : '角色类型',
                        align : 'left',
                        width : 120,
                        formatter: function (value, rec) {
                            var status = '';
                            if(value == 'menu'){
                                status = '菜单角色';
                            }else if (value == 'data'){
                                status = '数据角色';
                            }else{  // object
                                status = '对象角色';
                            }
                            return status;
                        }
                    },
                    {
                        field : 'statusFlag',
                        title : '状态',
                        align : 'left',
                        width : 120,
                        formatter: function (value, rec) {
                            var status = '';
                            if(value == 'normal'){
                                status = '正常';
                            }else if (value == 'suspend'){
                                status = '挂起';
                            }else{  // 2
                                status = '删除';
                            }
                            return status;
                        }
                    }
                ]
            ],
            remoteSort:false,
            //pagination : true,
            //pageSize : 10,
            border : true,
            url : '${pageContext.request.contextPath}/acl/station/getOwnRoles?stationId=${param.stationId}'
        });
    });

    function addOwnRole(){
        var row = $('#stationGrid').datagrid('getSelected');
        if(!row){
            $.messager.alert('Warning','请选择岗位');
            return;
        }
        var $win = $.TS.window.getWindow({
            'title': '添加岗位拥有的角色',
            'width': 800,
            'height': 400,
            'href':'${pageContext.request.contextPath}/acl/station/roleAdd?stationId=${param.stationId}'
        });
    }

    // 删除机构拥有的岗位
    function removeOwnRole() {
        var $dg = $('#ownRoleGrid');
        var rows = $dg.datagrid('getSelections');
        if(!rows){
            $.messager.alert('提示','请选择用户');
            return;
        }
        $.TS.messager.confirm('删除确认','是否删除岗位包含的角色?',function(data){
            if(data) {
                var paramData = {'stationId': '${param.stationId}'};
                var gridData = $.TS.genDataGridParam('#ownRoleGrid', 'list', 'selected');
                $.extend(paramData, gridData);   // 将grid数据添加到paramData数据参数中
                $.ajax({
                    url: '${pageContext.request.contextPath}/acl/station/removeOwnRoles',
                    type: 'post',
                    data: paramData,
                    success: function (responseData) {
                        $.messager.alert("提示", responseData.msg);
                        if (responseData.code == 0) {
                            for (var i = rows.length; i > 0; i--) {
                                var idx = $dg.datagrid('getRowIndex', rows[i - 1]);
                                $dg.datagrid('deleteRow', idx);
                            }
                        }
                    }
                });
            }
        });
    }

</script>
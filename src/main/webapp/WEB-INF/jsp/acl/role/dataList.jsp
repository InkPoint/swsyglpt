<%@page contentType="text/html" pageEncoding="UTF-8"%>

<div class="easyui-layout" style="width:100%;height:100%;">
    <div region="north" style="padding:5px;background:#F2F2F2;height:35px;border:1px solid #ccc">
        <a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-add" onClick="addOwnData()">添加</a>
        <a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-remove" onClick="removeOwnData()">删除</a>
    </div>
    <div region="center" border="false" style="padding:0;">
        <div id="ownDataGrid" fit="true"></div>
    </div>
</div>


<script>
    $(function() {
        $('#ownDataGrid').datagrid({
            idField : 'dataResourceId',
            //fitColumns : true,
            striped : true,
            singleSelect : false,
            //toolbar: '#ownDataGridTb',
            columns : [
                [
                    {field: 'ck', checkbox: true},
                    {
                        field : 'resourceName',
                        title : '资源名称',
                        align : 'left',
                        width : 200,
                        sortable : true,
                        sorter : function(a, b) {
                            return (a > b ? 1 : -1);
                        }
                    },
                    {
                        field : 'resourceTable',
                        title : '数据表',
                        align : 'left',
                        width : 200,
                        sortable : true,
                        sorter : function(a, b) {
                            return (a > b ? 1 : -1);
                        }
                    },
                    {
                        field : 'resourceKey',
                        title : '数据ID',
                        align : 'left',
                        width : 200
                    },
                    {
                        field : 'resourceValue',
                        title : '数据值',
                        align : 'left',
                        width : 200
                    }
                ]
            ],
            remoteSort:false,
            //pagination : true,
            //pageSize : 10,
            border : true,
            url : '${pageContext.request.contextPath}/acl/role/getOwnData?roleId=${param.roleId}'
        });
    });

    function addOwnData(){
        var node = $('#dataTree').tree('getSelected');
        if(!node){
            $.messager.alert('Warning','请选择角色');
            return;
        }
        var $win = $.TS.window.getWindow({
            'title': '添加角色拥有的数据',
            'width': 800,
            'height': 400,
            'href':'${pageContext.request.contextPath}/acl/role/dataAdd?roleId='+node.id
        });
    }

    // 删除机构拥有的岗位
    function removeOwnData() {
        var $dg = $('#ownDataGrid');
        var rows = $dg.datagrid('getSelections');
        if(!rows){
            $.messager.alert('提示','请选择用户');
            return;
        }
        $.TS.messager.confirm('删除确认','是否删除用户包含的数据?',function(data){
            if(data) {
                var paramData = {'roleId': '${param.roleId}'};
                var gridData = $.TS.genDataGridParam('#ownDataGrid', 'list', 'selected');
                $.extend(paramData, gridData);   // 将grid数据添加到paramData数据参数中
                $.ajax({
                    url: '${pageContext.request.contextPath}/acl/role/removeOwnData',
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
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<div class="easyui-layout" style="width:100%;height:100%;">
    <div region="north" style="padding:5px;background:#F2F2F2;height:35px;border:1px solid #ccc">
        <a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-add" onClick="addOwnMenu()">添加</a>
        <a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-remove" onClick="removeOwnMenu()">删除</a>
    </div>
    <div region="center" border="false" style="padding:0;">
        <div id="ownMenuGrid" fit="true"></div>
    </div>
</div>


<script>
    $(function() {
        $('#ownMenuGrid').datagrid({
            idField : 'menuResourceId',
            //fitColumns : true,
            striped : true,
            singleSelect : false,
            //toolbar: '#ownMenuGridTb',
            columns : [
                [
                    {field: 'ck', checkbox: true},
                    {
                        field : 'resourceName',
                        title : '菜单名称',
                        align : 'left',
                        width : 120,
                        sortable : true,
                        sorter : function(a, b) {
                            return (a > b ? 1 : -1);
                        }
                    },
                    {
                        field : 'resourceDesc',
                        title : '菜单描述',
                        align : 'left',
                        width : 120
                    },
                    {
                        field : 'resourceUrl',
                        title : '资源路径',
                        align : 'left',
                        width : 120
                    },
                    {
                        field : 'resourceModule',
                        title : '所属模块',
                        align : 'left',
                        width : 120
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
            url : '${pageContext.request.contextPath}/acl/role/getOwnMenu?roleId=${param.roleId}'
        });
    });

    function addOwnMenu(){
        var node = $('#dataTree').tree('getSelected');
        if(!node){
            $.messager.alert('Warning','请选择角色');
            return;
        }
        var $win = $.TS.window.getWindow({
            'title': '添加角色拥有的菜单',
            'width': 800,
            'height': 400,
            'href':'${pageContext.request.contextPath}/acl/role/menuAdd?roleId='+node.id
        });
    }

    // 删除机构拥有的岗位
    function removeOwnMenu() {
        var $dg = $('#ownMenuGrid');
        var rows = $dg.datagrid('getSelections');
        if(!rows){
            $.messager.alert('提示','请选择用户');
            return;
        }
        $.TS.messager.confirm('删除确认','是否删除用户包含的菜单?',function(data){
            if(data) {
                var paramData = {'roleId': '${param.roleId}'};
                var gridData = $.TS.genDataGridParam('#ownMenuGrid', 'menuList', 'selected');
                $.extend(paramData, gridData);   // 将grid数据添加到paramData数据参数中
                $.ajax({
                    url: '${pageContext.request.contextPath}/acl/role/removeOwnMenu',
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
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<div class="easyui-layout" style="width:100%;height:100%;">
    <div region="north" style="padding:5px;background:#F2F2F2;height:35px;border:1px solid #ccc">
        <a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-add" onClick="addOwnUser()">添加</a>
        <a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-remove" onClick="removeOwnUser()">删除</a>
    </div>
    <div region="center" border="false" style="padding:0;">
        <div id="ownUserGrid" fit="true"></div>
    </div>
</div>


<script>
    $(function() {
        $('#ownUserGrid').datagrid({
            idField : 'userId',
            //fitColumns : true,
            striped : true,
            singleSelect : false,
            toolbar: '#ownUserGridTb',
            columns : [
                [
                    {field: 'ck', checkbox: true},
                    {
                        field : 'userCode',
                        title : '用户代码',
                        align : 'left',
                        width : 120,
                        sortable : true,
                        sorter : function(a, b) {
                            return (a > b ? 1 : -1);
                        }
                    },
                    {
                        field : 'userName',
                        title : '用户名称',
                        align : 'left',
                        width : 120,
                        sortable : true,
                        sorter : function(a, b) {
                            return (a > b ? 1 : -1);
                        }
                    },
                    {
                        field : 'userType',
                        title : '用户类型',
                        align : 'left',
                        width : 120,
                        formatter: function (value, rec) {
                            var utype = '';
                            if(value == 'general'){
                                utype = '普通用户';
                            }else {
                                utype = '系统管理员';
                            }
                            return utype;
                        }
                    },
                    {
                        field : 'statusFlag',
                        title : '用户状态',
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
            url : '${pageContext.request.contextPath}/acl/role/getOwnUsers?roleId=${param.roleId}'
        });
    });

    function addOwnUser(){
        var node = $('#dataTree').tree('getSelected');
        if(!node){
            $.messager.alert('Warning','请选择机构');
            return;
        }
        var $win = $.TS.window.getWindow({
            'title': '添加机构拥有的用户',
            'width': 800,
            'height': 400,
            'href':'${pageContext.request.contextPath}/acl/role/userAdd?roleId='+node.id
        });
    }

    // 删除机构拥有的岗位
    function removeOwnUser() {
        var $dg = $('#ownUserGrid');
        var rows = $dg.datagrid('getSelections');
        if(!rows){
            $.messager.alert('提示','请选择用户');
            return;
        }
        $.TS.messager.confirm('删除确认','是否删除机构包含的用户?',function(data){
            if(data) {
                var paramData = {'roleId': '${param.roleId}'};
                var gridData = $.TS.genDataGridParam('#ownUserGrid', 'userList', 'selected');
                $.extend(paramData, gridData);   // 将grid数据添加到paramData数据参数中
                $.ajax({
                    url: '${pageContext.request.contextPath}/acl/role/removeOwnUsers',
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
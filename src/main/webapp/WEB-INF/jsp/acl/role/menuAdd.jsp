<%@page contentType="text/html" pageEncoding="UTF-8"%>

<div class="easyui-layout" style="width:100%;height:100%;">
    <div id="menuTree" title="菜单树"  data-options="region:'west',collapsible:false" style="padding:0px;width:350px;">
    </div>
    <div region="center" border="false" style="padding:0px;">
        <div id="menuGrid" fit="true"></div>
    </div>

    <div id="menuGridTb" style="padding:0px">
        <input id="resourceName" style="width:200px">
        <a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-add" onClick="saveRoleOwnMenu()">保存</a>
    </div>
</div>


<script>
    $(function() {
        $('#resourceName').textbox({
            buttonText: '查询',
            prompt: '资源名称',
            onClickButton: searchResource
        });
        $("#menuTree").tree({
            url: '${pageContext.request.contextPath}/acl/menuResource/getSubNodes?resourceType=folder&rootNodeId=00000000000000000000000000000002',
            animate: true,
            lines: true,
            onSelect: function(node){
                var node = $(this).tree('getSelected');
                if(node){
                    showResource(node.id);
                }
            },
            onLoadSuccess: function(){
                var root = $(this).tree('getRoot');
                $(this).tree('expand',root.target);
            }
        });

        $('#menuGrid').datagrid({
            idField : 'menuResourceId',
            fitColumns : true,
            //title: '资源域包含的菜单',
            striped : true,
            singleSelect : false,
            toolbar: '#menuGridTb',
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
            pagination : true,
            pageSize : 10,
            border : true,
            url : '${pageContext.request.contextPath}/acl/role/getNotOwnMenu?roleId=${param.roleId}'
        });
    });

    function showResource(domainId){
        var dataPara = {'svo.resourcePid': domainId };
        $('#menuGrid').datagrid('load',dataPara);
    }

    function searchResource(){
        var dataPara = {'svo.resourceName': $('#resourceName').val()};
        $('#menuGrid').datagrid('load',dataPara);
    }

    // 添加角色拥有的资源
    function saveRoleOwnMenu() {
        var rows = $('#menuGrid').datagrid('getSelections');
        if(!rows){
            $.messager.alert('提示','请选择资源');
            return;
        }
        var paramData = {'roleId': '${param.roleId}'};
        var gridData = $.TS.genDataGridParam('#menuGrid','list','selected');
        $.extend(paramData,gridData);   // 将grid数据添加到paramData数据参数中
        $.ajax({
            url: '${pageContext.request.contextPath}/acl/role/addOwnMenu',
            type: 'post',
            data: paramData,
            success: function(responseData){
                $.messager.alert("提示", responseData.msg);
                if(responseData.code == 0){
                    for(var i=rows.length; i>0; i--){
                        $('#ownMenuGrid').datagrid('appendRow',rows[i-1]);
                        var idx = $('#menuGrid').datagrid('getRowIndex', rows[i-1]);
                        $('#menuGrid').datagrid('deleteRow', idx);
                    }
                }
            }
        });
    }

</script>
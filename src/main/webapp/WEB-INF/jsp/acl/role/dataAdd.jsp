<%@page contentType="text/html" pageEncoding="UTF-8"%>

<div class="easyui-layout" style="width:100%;height:100%;">
    <div region="north" style="padding:5px;background:#F2F2F2;height:35px;border:1px solid #ccc">
        <form id="dataForm">
            <label for="resourceName">资源名称</label>
            <input class="easyui-validatebox" type="text" id="resourceName" name="svo.resourceName" >
            <label for="resourceTable">数据表</label>
            <input class="easyui-validatebox" type="text" id="resourceTable" name="svo.resourceTable" >
            <a href="#" class="easyui-linkbutton" iconCls="icon-search" onClick="searchList();">查询</a>
            <a href="#" class="easyui-linkbutton" iconCls="icon-save" onClick="saveOwnData()">保存</a>
        </form>
    </div>
    <div region="center" border="false" style="padding:0;">
        <div id="dataGrid" fit="true"></div>
    </div>
</div>


<script>
    $(function() {
        $('#dataGrid').datagrid({
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
            url : '${pageContext.request.contextPath}/acl/role/getNotOwnData?roleId=${param.roleId}'
        });
    });

    //查找
    function searchList() {
        var dataPara = $.TS.getFormJson('#dataForm');
        $('#dataGrid').datagrid('load',dataPara);
    }

    // 添加机构拥有的用户
    function saveOwnData() {
        var $dg = $('#dataGrid');
        var rows = $dg.datagrid('getSelections');
        if(!rows){
            $.messager.alert('提示','请选择数据');
            return;
        }
        var paramData = {'roleId': '${param.roleId}'};
        var gridData = $.TS.genDataGridParam('#dataGrid','list','selected');
        $.extend(paramData,gridData);   // 将grid数据添加到paramData数据参数中
        $.ajax({
            url: '${pageContext.request.contextPath}/acl/role/addOwnData',
            type: 'post',
            data: paramData,
            success: function(responseData){
                $.messager.alert("提示", responseData.msg);
                if(responseData.code == 0){
                    for(var i=rows.length; i>0; i--){
                        $('#ownDataGrid').datagrid('appendRow',rows[i-1]);
                        var idx = $dg.datagrid('getRowIndex', rows[i-1]);
                        $dg.datagrid('deleteRow', idx);
                    }
                }
            }
        });
    }

</script>
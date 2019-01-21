<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<!DOCTYPE html>
<html>
<head>
    <%@ include file="/common/global.jsp"%>
    <title>数据资源管理</title>
    <%@ include file="/common/meta.jsp" %>
    <%@ include file="/common/include-easyui.jsp" %>
    <%@ include file="/common/include-custom.jsp" %>
</head>
<body class="easyui-layout">
<form id="mgrForm" method="post" >
    <div region="north" style="padding:5px;height:70px;border:1px" title="${request_menu_title}" collapsible=false border="false">
        <table>
            <tr>
                <td>数据表</td>
                <td><input class="easyui-validatebox" type="text" name="svo.resourceTable" ></td>
                <td>数据ID</td>
                <td><input class="easyui-validatebox" type="text" name="svo.resourceKey"></td>
                <td>数据名称</td>
                <td><input class="easyui-validatebox" type="text" name="svo.resourceName"></td>
                <td>
                    &nbsp;<a href="#" class="easyui-linkbutton" iconCls="icon-search" onClick="searchList();">查询</a>
                </td>
            </tr>
        </table>
    </div>
    <div region="center" border="false" style="padding:0;">
        <div id="dataGrid" fit="true"></div>
    </div>

    <div id="dataGridTb" style="padding:0px">
        <a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-add" onClick="addOrEditData()">添加</a>
        <a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-remove" onClick="removeData()">删除</a>
    </div>
</form>
</body>
</html>

<script>
    $(function() {
        $('#dataGrid').datagrid({
            idField : 'dataResourceId',
            //fitColumns : true,
            striped : true,
            singleSelect : true,
            toolbar: '#dataGridTb',
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
            pagination : true,
            pageSize : 10,
            border : true,
            url : '${pageContext.request.contextPath}/acl/dataResource/list'
        });
    });

    //查找
    function searchList() {
        var dataPara = $.TS.getFormJson('#mgrForm');
        $('#dataGrid').datagrid('load',dataPara);
    }

    // 新建,编辑
    function addOrEditData() {
        var title = "添加数据";
        var $win = $.TS.window.getWindow({
            'title':title,
            'href':'${pageContext.request.contextPath}/acl/dataResource/initView?action=add'
        });
    }

    // 删除
    function removeData(){
        var $dg = $('#dataGrid');
        var row = $dg.datagrid('getSelected');
        if(row){
            $.TS.messager.confirm('删除确认','是否删除数据['+row.resourceName+']',function(data){
                if(data){
                    $.ajax({
                        url: '${pageContext.request.contextPath}/acl/dataResource/delete',
                        type: 'post',
                        data: {'uuid' : row.dataResourceId},
                        success: function(responseJson){
                            $.TS.messager.showMsg('提示',responseJson.msg,'info');
                            if(responseJson.code == 0){
                                var rowIdx = $dg.datagrid('getRowIndex', row);
                                $dg.datagrid('deleteRow',rowIdx);
                            }
                        }
                    });
                }
            });
        }
    }


</script>
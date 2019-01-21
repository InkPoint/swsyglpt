<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<!DOCTYPE html>
<html>
<head>
    <%@ include file="/common/global.jsp"%>
    <title>岗位管理</title>
    <%@ include file="/common/meta.jsp" %>
    <%@ include file="/common/include-easyui.jsp" %>
    <%@ include file="/common/include-custom.jsp" %>
</head>
<body class="easyui-layout">
<div region="north" title="${request_menu_title}" collapsible=false border="false"></div>
<div class="easyui-layout" region="west" style="width:350px;" border="false">
    <div region="north" style="padding:5px;height:35px;border:1px" align="right">
        <input id="stationName" style="width:200px">
        <a href="#" id="addBtn" class="easyui-linkbutton" plain="true" iconCls="icon-add" onClick="addStation()">增加</a>
        <%--<a href="#" id="delBtn" class="easyui-linkbutton" plain="true" iconCls="icon-remove" onClick="removeStation()">删除</a>--%>
    </div>
    <div id="stationGrid" region="center" title=" "></div>
</div>

<div id="mgr_tabs" class="easyui-tabs" region="center">
    <div id="viewPanel" title="岗位定义"></div>
    <div id="rolePanel" title="岗位包含的角色"></div>
</div>

</body>
</html>

<script>
    $(function() {
        $('#stationName').textbox({
            buttonText: '查询',
            prompt: '岗位名称',
            onClickButton: searchStation
        });
        initGrid();
    });

    function initGrid(){
        $('#stationGrid').datagrid({
            idField : 'stationId',
            //fitColumns : true,
            striped : true,
            singleSelect : true,
            //toolbar: '#ownUserGridTb',
            columns : [
                [
                    {field: 'ck', checkbox: true},
                    {
                        field : 'stationName',
                        title : '岗位名称',
                        align : 'left',
                        width : 120,
                        sortable : true,
                        sorter : function(a, b) {
                            return (a > b ? 1 : -1);
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
            pagination : true,
            pageSize : 10,
            border : true,
            url : '${pageContext.request.contextPath}/acl/station/list',
            onSelect : rowSelect
        });
    }

    function rowSelect(index,row){
        showInfo(row.stationId,'modify');
    }
    function showInfo(id, action){
        var url = '${pageContext.request.contextPath}/acl/station/initView?id=' + id + '&action=' + action;
        $('#viewPanel').panel({
            href: url,
            fit: true
        });
        $('#rolePanel').panel({
            href: '${pageContext.request.contextPath}/acl/station/roleList?stationId='+id,
            fit: true
        });
    }

    function addStation(){
        showInfo('','add');
    }

    function searchStation(){
        var dataPara = {'svo.stationName': $('#stationName').val()};
        $('#stationGrid').datagrid('load',dataPara);
    }

    function removeStation(){
        var row = $('#stationGrid').datagrid('getSelected');
        if(row){
            $.TS.messager.confirm('删除确认','是否删除岗位['+row.stationName+']',function(data){
                if(data){
                    $.ajax({
                        url: '${pageContext.request.contextPath}/acl/station/delete',
                        type: 'post',
                        dataType: "json",
                        data: {'uuid' : row.stationId},
                        success: function(responseJson){
                            $.TS.messager.showMsg('提示',responseJson.msg,'info');
                            if(responseJson.code == 0){
                                var rowIdx = $('#stationGrid').datagrid('getRowIndex', row);
                                $('#stationGrid').datagrid('deleteRow',rowIdx);
                            }
                        }
                    });
                }
            });
        }
    }

</script>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<div class="easyui-layout" style="width:100%;height:100%;">
    <%--<div region="north" border="false" style="padding:0;height:300px;">--%>
        <%--<div id="ownStationGrid" fit="true"></div>--%>
    <%--</div>--%>
    <div region="center" border="false" style="padding:0;">
        <div id="ownUserGrid" fit="true"></div>
    </div>
</div>
<%--<div id="ownStationGridTb">--%>
    <%--<a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-add" onClick="addStation()">增加岗位</a>--%>
    <%--<a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-remove" onClick="removeStation()">删除岗位</a>--%>
<%--</div>--%>
<div id="ownUserGridTb">
    <a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-add" onClick="addUser()">增加用户</a>
    <a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-remove" onClick="removeUser()">删除用户</a>
</div>

<script>
    $(function() {
//        initStationGrid();
        initUserGrid();
    });

    <%--function initStationGrid() {--%>
        <%--$('#ownStationGrid').datagrid({--%>
            <%--idField: 'stationId',--%>
            <%--//fitColumns : true,--%>
            <%--striped: true,--%>
            <%--singleSelect: true,--%>
            <%--toolbar: '#ownStationGridTb',--%>
            <%--columns: [--%>
                <%--[--%>
                    <%--{field: 'ck', checkbox: true},--%>
                    <%--{--%>
                        <%--field: 'stationName',--%>
                        <%--title: '岗位名称',--%>
                        <%--align: 'left',--%>
                        <%--width: 240,--%>
                        <%--sortable: true,--%>
                        <%--sorter: function (a, b) {--%>
                            <%--return (a > b ? 1 : -1);--%>
                        <%--}--%>
                    <%--},--%>
                    <%--{--%>
                        <%--field: 'statusFlag',--%>
                        <%--title: '状态',--%>
                        <%--align: 'left',--%>
                        <%--width: 120,--%>
                        <%--formatter: function (value, rec) {--%>
                            <%--var status = '';--%>
                            <%--if (value == 'normal') {--%>
                                <%--status = '正常';--%>
                            <%--} else if (value == 'suspend') {--%>
                                <%--status = '挂起';--%>
                            <%--} else {  // 2--%>
                                <%--status = '删除';--%>
                            <%--}--%>
                            <%--return status;--%>
                        <%--}--%>
                    <%--}--%>
                <%--]--%>
            <%--],--%>
            <%--remoteSort: false,--%>
            <%--//pagination: true,--%>
            <%--//pageSize: 10,--%>
            <%--border: true,--%>
            <%--url: '${pageContext.request.contextPath}/acl/organize/getOwnStations?orgId=${param.orgId}',--%>
            <%--onSelect: rowSelect--%>
        <%--})--%>
    <%--}--%>

    function rowSelect(index,row){
        var dataPara = {stationId: row.stationId};
        $('#ownUserGrid').datagrid('load',dataPara);
    }

    function initUserGrid() {
        $('#ownUserGrid').datagrid({
            idField: 'userId',
            //fitColumns : true,
            striped: true,
            singleSelect: false,
            toolbar: '#ownUserGridTb',
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
            //pagination : true,
            //pageSize : 10,
            border: true,
            url: '${pageContext.request.contextPath}/acl/organize/getOwnUsers?orgId=${param.orgId}'
        })
    }

    <%--function addStation(){--%>
        <%--var node = $('#dataTree').tree('getSelected');--%>
        <%--if(!node){--%>
            <%--$.messager.alert('Warning','请选择机构');--%>
            <%--return;--%>
        <%--}--%>
        <%--var $win = $.TS.window.getWindow({--%>
            <%--'title': '添加机构拥有的岗位',--%>
            <%--'width': 800,--%>
            <%--'height': 400,--%>
            <%--'href':'${pageContext.request.contextPath}/acl/organize/stationAdd?orgId=${param.orgId}'--%>
        <%--});--%>
    <%--}--%>

    // 删除机构拥有的岗位
    <%--function removeStation(){--%>
        <%--var $dg = $('#ownStationGrid');--%>
        <%--var rows = $dg.datagrid('getSelections');--%>
        <%--if(!rows){--%>
            <%--$.messager.alert('提示','请选择岗位');--%>
            <%--return;--%>
        <%--}--%>
        <%--$.TS.messager.confirm('删除确认','是否删除机构包含的岗位?',function(data){--%>
            <%--if(data) {--%>
                <%--var paramData = {'orgId': '${param.orgId}'};--%>
                <%--var gridData = $.TS.genDataGridParam('#ownStationGrid', 'list', 'selected');--%>
                <%--$.extend(paramData, gridData);   // 将grid数据添加到paramData数据参数中--%>
                <%--$.ajax({--%>
                    <%--url: '${pageContext.request.contextPath}/acl/organize/removeOwnStation',--%>
                    <%--type: 'post',--%>
                    <%--data: paramData,--%>
                    <%--success: function (responseData) {--%>
                        <%--$.messager.alert("提示", responseData.msg);--%>
                        <%--if (responseData.code == 0) {--%>
                            <%--for (var i = rows.length; i > 0; i--) {--%>
                                <%--var idx = $dg.datagrid('getRowIndex', rows[i - 1]);--%>
                                <%--$dg.datagrid('deleteRow', idx);--%>
                            <%--}--%>
                            <%--rowSelect(0,{stationId:''});--%>
                        <%--}--%>
                    <%--}--%>
                <%--});--%>
            <%--}--%>
        <%--});--%>
    <%--}--%>

    function addUser(){
//        var row = $('#ownStationGrid').datagrid('getSelected');
//        if(!row){
//            $.messager.alert('Warning','请选择岗位');
//            return;
//        }
        var node = $('#dataTree').tree('getSelected');
        if(!node){
            $.messager.alert('Warning','请选择机构');
            return;
        }
        var $win = $.TS.window.getWindow({
            'title': '添加机构拥有的用户',
            'width': 800,
            'height': 400,
            'href':'${pageContext.request.contextPath}/acl/organize/userAdd?orgId=${param.orgId}'
        });
    }

    function removeUser(){
        //var row = $('#ownStationGrid').datagrid('getSelected');
        var $dg = $('#ownUserGrid');
        var rows = $dg.datagrid('getSelections');
        if(!rows){
            $.messager.alert('提示','请选择用户');
            return;
        }
        $.TS.messager.confirm('删除确认','是否删除机构拥有的用户?',function(data){
            if(data) {
                var paramData = {'orgId': '${param.orgId}'};
                var gridData = $.TS.genDataGridParam('#ownUserGrid', 'list', 'selected');
                $.extend(paramData, gridData);   // 将grid数据添加到paramData数据参数中
                $.ajax({
                    url: '${pageContext.request.contextPath}/acl/organize/removeOwnUsers',
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

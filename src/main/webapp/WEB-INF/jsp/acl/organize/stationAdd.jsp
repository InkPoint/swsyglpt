<%@page contentType="text/html" pageEncoding="UTF-8"%>

<div class="easyui-layout" style="width:100%;height:100%;">
    <div region="north" style="padding:5px;background:#F2F2F2;height:35px;border:1px solid #ccc">
        <form id="stationForm">
            <label for="stationName">岗位名称</label>
            <input class="easyui-validatebox" type="text" id="stationName" name="svo.stationName" >
            <a href="#" class="easyui-linkbutton" iconCls="icon-search" onClick="searchList();">查询</a>
            <a href="#" class="easyui-linkbutton" iconCls="icon-save" onClick="saveOwnStation()">保存</a>
        </form>
    </div>
    <div region="center" border="false" style="padding:0;">
        <div id="stationGrid" fit="true"></div>
    </div>
</div>


<script>
        $('#stationGrid').datagrid({
            idField : 'stationId',
            fitColumns : true,
            striped : true,
            singleSelect : false,
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
                        title : '岗位状态',
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
            url : '${pageContext.request.contextPath}/acl/organize/getNotOwnStations?orgId=${param.orgId}'
        });

    //查找
    function searchList() {
        var dataPara = $.TS.getFormJson('#stationForm');
        $('#stationGrid').datagrid('load',dataPara);
    }

    // 添加机构拥有的岗位
    function saveOwnStation() {
        var $dg = $('#stationGrid');
        var rows = $dg.datagrid('getSelections');
        if(!rows){
            $.messager.alert('提示','请选择岗位');
            return;
        }
        var paramData = {'orgId': '${param.orgId}'};
        var gridData = $.TS.genDataGridParam('#stationGrid','list','selected');
        $.extend(paramData,gridData);   // 将grid数据添加到paramData数据参数中
        $.ajax({
            url: '${pageContext.request.contextPath}/acl/organize/addOwnStation',
            type: 'post',
            data: paramData,
            success: function(responseData){
                $.messager.alert("提示", responseData.msg);
                if(responseData.code == 0){
                    for(var i=rows.length; i>0; i--){
                        $('#ownStationGrid').datagrid('appendRow',rows[i-1]);
                        var idx = $dg.datagrid('getRowIndex', rows[i-1]);
                        $dg.datagrid('deleteRow', idx);
                    }
                }
            }
        });
    }

</script>
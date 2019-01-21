<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<!DOCTYPE html>
<html>
<head>
    <%@ include file="/common/global.jsp"%>
    <title>用户管理</title>
    <%@ include file="/common/meta.jsp" %>
    <%@ include file="/common/include-easyui.jsp" %>
    <%@ include file="/common/include-custom.jsp" %>
</head>
<body class="easyui-layout">
<form id="mgrForm" method="post" >
    <div region="north" title="${request_menu_title}" collapsible=false style="padding:5px;height:70px;border:1px">
        <table>
            <tr>
                <td>用户代码</td>
                <td><input class="easyui-validatebox" type="text" name="svo.userCode" ></td>
                <td>用户名称</td>
                <td><input class="easyui-validatebox" type="text" name="svo.userName"></td>
                <td>
                    &nbsp;<a href="#" class="easyui-linkbutton" iconCls="icon-search" onClick="searchList();">查询</a>
                </td>
            </tr>
        </table>
    </div>
    <div region="center" border="false" style="padding:0;">
        <div id="userGrid" fit="true"></div>
    </div>

    <div id="userGridTb" style="padding:0px">
        <a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-add" onClick="addOrEditData('',1)">新建</a>
        <a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-remove" onClick="removeData()">删除</a>
    </div>
</form>
</body>
</html>

<script>
    $(function() {
        $('#userGrid').datagrid({
            idField : 'userId',
            //fitColumns : true,
            striped : true,
            singleSelect : true,
            toolbar: '#userGridTb',
            columns : [
                [
                    {field: 'ck', checkbox: true},
                    {
                        field : 'userCode',
                        title : '用户工号',
                        align : 'left',
                        width : 120,
                        sortable : true,
                        sorter : function(a, b) {
                            return (a > b ? 1 : -1);
                        },
                        formatter: function (value, rec) {
                            var content = '&nbsp;&nbsp;<a href="#" onclick="addOrEditData(\''
                                    + rec.userId
                                    + '\',2)">'
                                    + rec.userCode + '</a>';
                            return content;
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
//                    {
//                        field : 'userEmail',
//                        title : '用户邮箱',
//                        align : 'left',
//                        width : 120
//                    },
//                    {
//                        field : 'userMobile',
//                        title : '手机号码',
//                        align : 'left',
//                        width : 120
//                    },
//                    {
//                        field : 'userAllowIp',
//                        title : '允许登陆IP',
//                        align : 'left',
//                        width : 120
//                    },
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
//                    ,{
//                        field : 'userValid',
//                        title : '有效期',
//                        align : 'left',
//                        width : 120,
//                        formatter: function(value, rec){
//                            return $.TS.time.formatDate(value);
//                        }
//                    }
                ]
            ],
            remoteSort:false,
            pagination : true,
            pageSize : 10,
            border : true,
            url : '${pageContext.request.contextPath}/acl/user/list'
        });
    });

    //查找
    function searchList() {
        var dataPara = $.TS.getFormJson('#mgrForm');
        $('#userGrid').datagrid('load',dataPara);
    }

    // 新建,编辑
    function addOrEditData(code, opt) {
        var title = "添加用户";
        var action = 'add';
        if(opt == 2){
            title = "修改用户";
            action = 'modify';
        }
        $.TS.window.getWindow({
            'title':title,
            'width' : 550,
            'height' : 320,
            'href':'${pageContext.request.contextPath}/acl/user/initView?action='+action+'&uuid=' + code
        });
    }

    // 删除
    function removeData(){
        var row = $('#userGrid').datagrid('getSelected');
        if(row){
            $.TS.messager.confirm('删除确认','是否删除用户['+row.userName+']',function(data){
                if(data){
                    $.ajax({
                        url: '${pageContext.request.contextPath}/acl/user/delete',
                        type: 'post',
                        data: {'uuid' : row.userId},
                        success: function(responseJson){
                            $.TS.messager.showMsg('提示',responseJson.msg,'info');
                            if(responseJson.code == 0){
                                var rowIdx = $('#userGrid').datagrid('getRowIndex', row);
                                $('#userGrid').datagrid('deleteRow',rowIdx);
                                //$('#dataList').datagrid('reload');
                            }
                        }
                    });
                }
            });
        }
    }


</script>
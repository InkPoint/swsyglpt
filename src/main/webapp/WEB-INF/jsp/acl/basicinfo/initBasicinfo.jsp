<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
      <%@ include file="/common/global.jsp"%>
      <title>纳税人基本信息查询</title>
      <%@ include file="/common/meta.jsp" %>
      <%@ include file="/common/include-easyui.jsp" %>
      <%@ include file="/common/include-custom.jsp" %>
  </head>
  <body class="easyui-layout">
      <form id="mgrForm" method="post" >
          <div region="north" style="padding:1px;background:#47A0CC;height:40px;border:1px solid #ccc">
              <table>
              <tr>
                  <td>
                      <td><span style="font-size:12pt;">纳税人名称：</span></td>
                      <td><input  class="easyui-textbox" name="taxpayername" style="width:200px;height:25px"  id="taxpayername"   value=""/></td>
                      <td><span style="font-size:12pt;">成立日期：</span></td>
                      <td><input  class="easyui-datebox" name="eadate" style="width:200px;height:25px"  id="eadate"   value=""/></td>
                      <td>&nbsp;&nbsp;&nbsp;<a href="#" class="easyui-linkbutton" iconCls="icon-search" onClick="query();">查询</a></td>
                  </td>
              </tr>
          </table>
          </div>
          <div region="center" border="false" style="padding:0;">
              <div id="basicInfoGrid" fit="true"></div>
          </div>
      </form>
  </body>
</html>
<script>
    $(function(){
        //alert(pageContext);
        querys();
    });
    //查询数据
    function querys(){

        $('#basicInfoGrid').datagrid({
            idField : '',
            striped : true,
            singleSelect : true,
            rownumbers: true,
            fit:true,
            fitColumns:true,
            columns : [
                [
                    {
                        field : 'taxregcode',
                        width : 150,
                        align : 'center',
                        title : '管理代码'
                    },
                    {
                        field : 'taxpayername',
                        title : '纳税人名称',
                        align : 'center',
                        width : 150,
                        sortable : true
                    },
                    {
                        field : 'shortname',
                        title : '纳税人简称',
                        align : 'center',
                        width : 150,
                        sortable : true
                    },
                    {
                        field : 'jurpname',
                        title : '法人',
                        align : 'center',
                        width : 150,
                        sortable : true
                    },
                    {
                        field : 'eadate',
                        title : '成立日期',
                        align : 'center',
                        width : 150,
                        sortable : true
                    }

                ]
            ],
            remoteSort:false,
            pagination : true,
            border : true,
            url : '${pageContext.request.contextPath}/acl/basicinfo/list'
        });

    }
    //查询按钮查询数据
    function query(){
        var taxpayername=$.trim($("#taxpayername").val());
        var eadate=$.trim($("#eadate").val());
        $('#basicInfoGrid').datagrid('load',{'svo.taxpayername':taxpayername,'svo.eadate':eadate});
    }
</script>

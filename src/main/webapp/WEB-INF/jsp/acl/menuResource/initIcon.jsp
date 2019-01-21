<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var='ctx' value="${pageContext.request.contextPath}"/>

<link href="${ctx}/theme/assets/global/plugins/simple-line-icons/simple-line-icons.min.css" rel="stylesheet" type="text/css"/>
<link href="${ctx}/theme/assets/global/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>

<div class="easyui-layout" style="width:100%;height:100%;">
  <div region="north" style="padding:5px;background:#F2F2F2;height:35px;border:1px solid #ccc">
    <a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-edit" onClick="saveIcon()">确定</a>
    <a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-remove" onClick="cancelIcon()">取消</a>
    <%--<a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-add" onClick="genIcon()">导入Simple-Icon</a>--%>
    <%--<a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-add" onClick="genFontAwesome()">导入Font-awesome</a>--%>
    &nbsp;
    <select id="iconTypeCmb" style="width: 144px;"></select>
    所选图标：<i id="selectedIcon" class=""></i>
  </div>
  <div region="center" border="false" style="padding:0;">
    <div id="iconGrid" fit="true"></div>
  </div>
</div>
<script>
    $('#iconTypeCmb').combobox({
      valueField: 'id',
      textField: 'text',
      url: '${ctx }/acl/menuResource/getIconTypeList',
      required: true,
      onLoadSuccess: function(){
        var data = $(this).combobox('getData')
        if (data.length > 0){
          $(this).combobox('setValue',data[0].id);
        }
      },
      onChange : function(newValue, oldValue){
        //var dataPara = {iconType: newValue};
        //$('#iconGrid').datagrid('load',dataPara);
        initGrid(newValue);
      }
    });

  function initGrid(iconType){
    $('#iconGrid').datagrid({
      idField : 'iconId',
      fitColumns : true,
      //striped : true,
      singleSelect : true,
      //toolBar : '#iconGridTb',
      columns : [
        [
          {
            field : 'iconClass1',
            title : '',
            align : 'center',
            width : 120,
            height: 120,
            formatter: iconFormatter
          },
          {
            field : 'iconClass2',
            title : '',
            align : 'center',
            width : 120,
            height: 120,
            formatter: iconFormatter
          },
          {
            field : 'iconClass3',
            title : '',
            align : 'center',
            width : 120,
            height: 120,
            formatter: iconFormatter
          },
          {
            field : 'iconClass4',
            title : '',
            align : 'center',
            width : 120,
            height: 120,
            formatter: iconFormatter
          },
          {
            field : 'iconClass5',
            title : '',
            align : 'center',
            width : 120,
            height: 120,
            formatter: iconFormatter
          },
          {
            field : 'iconClass6',
            title : '',
            align : 'center',
            width : 120,
            height: 120,
            formatter: iconFormatter
          },
          {
            field : 'iconClass7',
            title : '',
            align : 'center',
            width : 120,
            height: 120,
            formatter: iconFormatter
          },
          {
            field : 'iconClass8',
            title : '',
            align : 'center',
            width : 120,
            height: 120,
            formatter: iconFormatter
          },
          {
            field : 'iconClass9',
            title : '',
            align : 'center',
            width : 120,
            height: 120,
            formatter: iconFormatter
          },
          {
            field : 'iconClass10',
            title : '',
            align : 'center',
            width : 120,
            height: 120,
            formatter: iconFormatter
          }
        ]
      ],
      remoteSort:false,
      pagination : true,
      pageSize : 10,
      border : false,
      url : '${pageContext.request.contextPath}/acl/menuResource/getMenuIcons?iconType='+iconType,
      onClickCell : function(rowIndex, field, value){
        $('#selectedIcon').attr('class',value);
      }
    });
  }

  function iconFormatter(value, rec){
    return  '<i class="'+ value + '"></i>';;
  }

  function saveIcon(){
    var iconClass = $('#selectedIcon').attr('class');
    $('#finalIcon').attr('class',iconClass);
    $('#resourceIcon').attr('value',iconClass);
    $('.easyui-window').window('destroy');
  }

  function cancelIcon(){
    $('.easyui-window').window('destroy');
  }

  function genIcon(){
    $.ajax({
      url: '${pageContext.request.contextPath}/acl/menuResource/genSimpleIcon',
      type: 'post',
      //data: dataPara,
      success: function(responseJson){
        $.TS.messager.showMsg('提示',responseJson.msg,'info');
        if(responseJson.code == 0){
        }
      }
    });
  }

  function genFontAwesome(){
    $.ajax({
      url: '${pageContext.request.contextPath}/acl/menuResource/genAwesome',
      type: 'post',
      //data: dataPara,
      success: function(responseJson){
        $.TS.messager.showMsg('提示',responseJson.msg,'info');
        if(responseJson.code == 0){
        }
      }
    });
  }

</script>

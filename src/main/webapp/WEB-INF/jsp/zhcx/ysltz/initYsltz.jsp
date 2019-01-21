<%--
  Created by IntelliJ IDEA.
  User: BoYi Sun
  Date: 2018/12/19
  Time: 14:36
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@include file="../../common/taglibs.jsp" %>
<html>
<head>
    <title>用水量台账</title>
    <%@include file="../../common/include-head.jsp" %>
    <%@include file="../../common/include-head.echarts.jsp" %>
    <style>
        /*Modal滚动条*/
        @media (min-width: 992px) {
            .modal-chat {
                width: 58.333%;
                height: 78.333%;
                overflow: scroll;
                overflow: auto;
                overflow: auto;
            }
        }

        /*Modal分割线*/
        .hr-line-dashed {
            border-top: 1px dashed #e7eaec;
            color: #fff;
            background-color: #fff;
            height: 1px;
            margin: 15px 0
        }

        .file-manager .hr-line-dashed {
            margin: 15px 0
        }
        .modal.fade.in{
            top:60px;
        }

    </style>
</head>
<body>
<!--1.用水量信息报送查询部分-->
<table class="table table-bordered table-striped" style="width: 98%; margin:20px auto;">
    <thead>
    <tr>
        <td colspan="4">查询条件</td>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>年度:</td>
        <td><select class="input-nd" style="width: 220px;" id="nd" name="nd"></select></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>用水户识别号:</td>
        <td><input id="nsrsbh" name="nsrsbh" type="text"  style="width: 220px;"  class=" form-control "></td>
        <td>用水户名称:</td>
        <td ><input id="nsrmc" name="nsrmc" type="text"   style="width: 220px;" class="form-control "></td>
    </tr>
    <tr>
        <td>水源区域:</td>
        <td><select class="input-syqy" style="width: 220px;" id="syqy" name="syqy"></select></td>
        <td>水源类型:</td>
        <td><select class="input-sylx" style="width: 220px;" id="sylx" name="sylx"></select></td>
    </tr>
    <tr>
        <td colspan="4" align="center">
            <button type="button" class="btn btn-info" onclick="searchlist()"> 执行查询 </button>
            <button type="button" name="doExcel" class="btn btn-info" onclick="doExcel();">导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;出</button>
        </td>
    </tr>
    </tbody>
</table>
<!--2.查询结果，用水量报送-->
<table  class="table table-bordered table-striped" style="width: 98%; margin:0px auto;">
    <thead>
    <tr>
        <td><span class="widget-caption">查询结果</span></td>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td colspan="2">
            <button type="button" class="btn btn-warning btn-sm" data-toggle="modal"  data-target="#ztyslqk" onclick="doZtYslqk()"><i
                    class="glyphicon glyphicon-pencil" data-toggle="modal" data-target="#ztyslqk"></i>总体情况
            </button>
        </td>
    </tr>
    </tbody>
</table>
<!--2.台账明细表-->
<div class="col-md-12 container" style="margin-top: -22px">
    <table id="taskList_table" data-height="550" class="table table-striped"></table>
</div>
<!--3.用数量报送结果详情-->
<div class="modal fade" id="yslqk" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog" style="width: 1200px;height: 600px">
        <div class="modal-content">
            <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title">用水量情况</h4>
        </div>
            <div style="width: 98%; margin:10px auto 0px auto;">
                <div class="row">
                    <!--1.历年用水量趋势图-->
                    <div class="col-md-12">
                        <div class="panel panel-default">
                            <div class="panel-heading">用水量趋势图</div>
                            <div class="panel-body">
                                <div id="nyslqst" style="min-height: 300px;"></div>
                            </div>
                        </div>
                    </div>
                    <!--2.本年个季度之间同比环比-->
                    <div class="col-md-12">
                        <div class="panel panel-default">
                            <div class="panel-heading">本年同比环比图</div>
                            <div class="panel-body">
                                <div id="tbhbt" style="min-height: 300px;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!--4.用数量总体情况-->
<div class="modal fade" id="ztyslqk" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog" style="width: 1200px;height: 600px">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">用水量情况</h4>
            </div>
            <div style="width: 98%; margin:10px auto 0px auto;">
                <div class="row">
                    <!--1.历年用水量趋势图-->
                    <div class="col-md-12">
                        <div class="panel panel-default">
                            <div class="panel-heading">用水量趋势图</div>
                            <div class="panel-body" height="300px">
                                <div id="ztnyslqst" style="min-height: 300px;"></div>
                            </div>
                        </div>
                    </div>
                    <!--2.本年各季度之间数据-->
                    <div class="col-md-12">
                        <div class="panel panel-default">
                            <div class="panel-heading">本年同比环比图</div>
                            <div class="panel-body">
                                <div id="zttbhbt" style="min-height: 300px;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>
<script type="text/javascript">
     var nyslqst = echarts.init(document.getElementById("nyslqst"));//用水量情况中年用水量趋势图
     var tbhbt = echarts.init(document.getElementById("tbhbt"));//用水量情况中各季度之间用水量同比环比
     var ztnyslqst = echarts.init(document.getElementById("ztnyslqst"));//用水量总体情况中年用水量趋势图
     var zttbhbt = echarts.init(document.getElementById("zttbhbt"));//用水量情况总体中各季度之间用水量同比环比

     $(function () {
        laydate.render({
            elem: '#qsssqq'
            ,format:'yyyy/MM/dd'
        });
        laydate.render({
            elem: '#qsssqz'
            ,format:'yyyy/MM/dd'
        });
        //获取当前时间
        $("#qsssqq,#qsssqz").attr('value', getNowFormatDate());
        //水源类型（下拉菜单）
        $.post("${ctx}/zhcx/ysltz/ndcd", null, function (data) {
            $(".input-nd").select2({
                data: data,
                placeholder: '请选择',
                allowClear: true
            });
        });
        //水源类型（下拉菜单）
        $.post("${ctx}/zhcx/ysltz/sylxcd", null, function (data) {
            $(".input-sylx").select2({
                data: data,
                placeholder: '请选择',
                allowClear: true
            });
        });

        //水源区域（下拉菜单）
        $.post("${ctx}/zhcx/ysltz/syqycd", null, function (data) {
            $(".input-syqy").select2({
                data: data,
                placeholder: '请选择',
                allowClear: true
            });
        });
        $(document).keydown(function (event) {
            if (event.keyCode == 13) {
                searchlist();
            }
        });
        //初始化(信息采集)表格数据
        inittabs();
    });


    //检索
    function searchlist() {
        //纳税人识别号
        var nsrsbh = $("#nsrsbh").val().trim();
        //纳税人名称
        var nsrmc = $("#nsrmc").val().trim();
        //水源区域
        var syqy = $("#syqy").select2("data")[0].id == '00' ? '%' : $("#syqy").select2("data")[0].id;
        //水源类型
        var sylx = $("#sylx").select2("data")[0].id == '00' ? '%' : $("#sylx").select2("data")[0].id;
        //年度
        var nd = $("#nd").select2("data")[0].id == '00' ? '%' : $("#nd").select2("data")[0].id;

        //先销毁表格
        $('#taskList_table').bootstrapTable('destroy');
        $('#taskList_table').bootstrapTable({
            url: "${ctx}/zhcx/ysltz/selectAll",//获取数据的Select地址
            sidePagination: "server",//表示服务端请求(分页方式：client客户端分页，server服务端分页)
            queryParams: function (params) {
                return {
                    'svo.ssnf': nd,
                    'svo.nsrsbh': nsrsbh,
                    'svo.nsrmc': nsrmc,
                    'svo.syqydm': syqy,
                    'svo.sylxdm': sylx,
                    offset: (params.offset / params.limit) + 1,
                    limit: params.limit
                }
            },
            pagination: true, //是否分页
            singleSelect: true,
            pageNumber: 1, //初始化加载第一页，默认第一页
            buttonsAlign: 'right', //按钮对齐方式
            pageSize: 10, //每页的记录行数
            onlyInfoPagination: false,
            toolbar: '#toolbar',
            cache: false,//是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性
            pageList: [10, 20, 30, 50], //可供选择的每页行数
            paginationLoop: true,//设置为true启用分页条无线循环的功能
            clickToSelect: true, //是否启用点击选中行
            uniqueIS: "nsrsbh", //每一行的唯一标识，一般为主键列
            ueryParamsType: 'limit',
            showFooter:true,//
            columns: [{
                field: 'ck',
                checkbox: true,
                align: 'center'
                },
                {
                    field: 'nsrmc',
                    align: 'left',
                    title: '用水户名称',
                    halign: 'center'
                },
                {
                    field: 'nsrsbh',
                    align: 'left',
                    title: '用水户识别号',
                    halign: 'center',
                    footerFormatter:function () {
                        return '合计';
                    }
                },
                {
                    field: 'ssnf',
                    align: 'left',
                    halign: 'center',
                    title: '年度'
                },
                {
                    field: 'ndqsl',
                    align: 'right',
                    halign: 'center',
                    title: '年度用水量',
                    formatter:function(value, row, index, field){
                        return  parseFloat(value).toFixed(2);
                    },
                    footerFormatter:function (value) {
                        var sum=0;
                        for(var i in value){
                            sum+=parseFloat(JSON.parse(JSON.stringify(value[i])).ndqsl);
                        }
                        return parseFloat(JSON.stringify(sum)).toFixed(2);
                    }
                },
                {
                    field: 'ndskje',
                    align: 'right',
                    halign: 'center',
                    title: '年度缴纳税款金额',
                    formatter:function(value, row, index, field){
                        return  parseFloat(value).toFixed(2);
                    },
                    footerFormatter:function (value) {
                        var sum=0;
                        for(var i in value){
                            sum+=parseFloat(JSON.parse(JSON.stringify(value[i])).ndskje);
                        }
                        return parseFloat(JSON.stringify(sum)).toFixed(2);
                    }
                },
                {
                    field: 'ndhcje',
                    align: 'right',
                    halign: 'center',
                    title: '年度核查税款金额',
                    formatter:function(value, row, index, field){
                        return  parseFloat(value).toFixed(2);
                    },
                    footerFormatter:function (value) {
                        var sum=0;
                        for(var i in value){
                            sum+=parseFloat(JSON.parse(JSON.stringify(value[i])).ndhcje);
                        }
                        return parseFloat(JSON.stringify(sum)).toFixed(2);
                    }
                },
                {
                    field: 'yhdqsl',
                    align: 'right',
                    halign: 'center',
                    title: '一季度用水量',
                    formatter:function(value, row, index, field){
                        return  parseFloat(value).toFixed(2);
                    },
                    footerFormatter:function (value) {
                        var sum=0;
                        for(var i in value){
                            sum+=parseFloat(JSON.parse(JSON.stringify(value[i])).yhdqsl);
                        }
                        return parseFloat(JSON.stringify(sum)).toFixed(2);
                    }
                },
                {
                    field: 'yskjnje',
                    align: 'right',
                    halign: 'center',
                    title: '一季度缴纳税款',
                    formatter:function(value, row, index, field){
                        return  parseFloat(value).toFixed(2);
                    },
                    footerFormatter:function (value) {
                        var sum=0;
                        for(var i in value){
                            sum+=parseFloat(JSON.parse(JSON.stringify(value[i])).yskjnje);
                        }
                        return parseFloat(JSON.stringify(sum)).toFixed(2);
                    }
                },
                {
                    field: 'yhcskje',
                    align: 'right',
                    halign: 'center',
                    title: '一季度核查税款',
                    formatter:function(value, row, index, field){
                        return  parseFloat(value).toFixed(2);
                    },
                    footerFormatter:function (value) {
                        var sum=0;
                        for(var i in value){
                            sum+=parseFloat(JSON.parse(JSON.stringify(value[i])).yhcskje);
                        }
                        return parseFloat(JSON.stringify(sum)).toFixed(2);
                    }
                },
                {
                    field: 'ehdqsl',
                    align: 'right',
                    title: '二季度用水量',
                    formatter:function(value, row, index, field){
                        return  parseFloat(value).toFixed(2);
                    },
                    footerFormatter:function (value) {
                        var sum=0;
                        for(var i in value){
                            sum+=parseFloat(JSON.parse(JSON.stringify(value[i])).ehdqsl);
                        }
                        return parseFloat(JSON.stringify(sum)).toFixed(2);
                    }

                },
                {
                    field: 'eskjnje',
                    align: 'right',
                    halign: 'center',
                    title: '二季度缴纳税款',
                    formatter:function(value, row, index, field){
                        return  parseFloat(value).toFixed(2);
                    },
                    footerFormatter:function (value) {
                        var sum=0;
                        for(var i in value){
                            sum+=parseFloat(JSON.parse(JSON.stringify(value[i])).eskjnje);
                        }
                        return parseFloat(JSON.stringify(sum)).toFixed(2);
                    }
                },
                {
                    field: 'ehcskje',
                    align: 'right',
                    halign: 'center',
                    title: '二季度核查税款',
                    formatter:function(value, row, index, field){
                        return  parseFloat(value).toFixed(2);
                    },
                    footerFormatter:function (value) {
                        var sum=0;
                        for(var i in value){
                            sum+=parseFloat(JSON.parse(JSON.stringify(value[i])).ehcskje);
                        }
                        return parseFloat(JSON.stringify(sum)).toFixed(2);
                    }
                },
                {
                    field: 'shdqsl',
                    align: 'right',
                    halign: 'center',
                    title: '三季度用水量',
                    formatter:function(value, row, index, field){
                        return  parseFloat(value).toFixed(2);
                    },
                    footerFormatter:function (value) {
                        var sum=0;
                        for(var i in value){
                            sum+=parseFloat(JSON.parse(JSON.stringify(value[i])).shdqsl);
                        }
                        return parseFloat(JSON.stringify(sum)).toFixed(2);
                    }
                }, {
                    field: 'sskjnje',
                    align: 'right',
                    halign: 'center',
                    title: '三季度缴纳税款',
                    formatter:function(value, row, index, field){
                        return  parseFloat(value).toFixed(2);
                    },
                    footerFormatter:function (value) {
                        var sum=0;
                        for(var i in value){
                            sum+=parseFloat(JSON.parse(JSON.stringify(value[i])).sskjnje);
                        }
                        return parseFloat(JSON.stringify(sum)).toFixed(2);
                    }
                },
                {
                    field: 'shcskje',
                    align: 'right',
                    halign: 'center',
                    title: '三季度核查税款',
                    formatter:function(value, row, index, field){
                        return  parseFloat(value).toFixed(2);
                    },
                    footerFormatter:function (value) {
                        var sum=0;
                        for(var i in value){
                            sum+=parseFloat(JSON.parse(JSON.stringify(value[i])).shcskje);
                        }
                        return parseFloat(JSON.stringify(sum)).toFixed(2);
                    }
                },
                {
                    field: 'fhdqsl',
                    align: 'right',
                    title: '四季度用水量',
                    formatter:function(value, row, index, field){
                        return  parseFloat(value).toFixed(2);
                    },
                    footerFormatter:function (value) {
                        var sum=0;
                        for(var i in value){
                            sum+=parseFloat(JSON.parse(JSON.stringify(value[i])).fhdqsl);
                        }
                        return parseFloat(JSON.stringify(sum)).toFixed(2);
                    }
                }, {
                    field: 'fskjnje',
                    align: 'right',
                    halign: 'center',
                    title: '四季度缴纳税款',
                    formatter:function(value, row, index, field){
                        return  parseFloat(value).toFixed(2);
                    },
                    footerFormatter:function (value) {
                        var sum=0;
                        for(var i in value){
                            sum+=parseFloat(JSON.parse(JSON.stringify(value[i])).fskjnje);
                        }
                        return parseFloat(JSON.stringify(sum)).toFixed(2);
                    }
                },
                {
                    field: 'fhcskje',
                    align: 'right',
                    halign: 'center',
                    title: '四季度核查税款',
                    formatter:function(value, row, index, field){
                        return  parseFloat(value).toFixed(2);
                    },
                    footerFormatter:function (value) {
                        var sum=0;
                        for(var i in value){
                            sum+=parseFloat(JSON.parse(JSON.stringify(value[i])).fhcskje);
                        }
                        return parseFloat(JSON.stringify(sum)).toFixed(2);
                    }
                },
                {
                    field: 'cz',
                    align: 'right',
                    halign: 'center',
                    title: '操作',
                    formatter:function(value, row, index, field){
                        return '<button id="ckmxbtn" type="button" class="btn btn-link" data-toggle="modal" data-target="#yslqk" onclick="doYslqk(\'' + row.nsrsbh + '\')">用水量情况</button>'
                    }
                }
            ]
        });
    }

    //初始化表
    function inittabs() {
        var nd= new Date().getFullYear();
        //先销毁表格
        $('#taskList_table').bootstrapTable('destroy');
        $('#taskList_table').bootstrapTable({
            url: "${ctx}/zhcx/ysltz/selectAll",//获取数据的Select地址
            sidePagination: "server",//表示服务端请求(分页方式：client客户端分页，server服务端分页)
            queryParams: function (params) {
                return {
                    'svo.ssnf':nd,
                    //'svo.nsrmc': nsrmc,
                    offset: (params.offset / params.limit) + 1,
                    limit: params.limit
                }
            },
            pagination: true, //是否分页
            singleSelect: true,
            pageNumber: 1, //初始化加载第一页，默认第一页
            buttonsAlign: 'right', //按钮对齐方式
            pageSize: 10, //每页的记录行数
            onlyInfoPagination: false,
            toolbar: '#toolbar',
            cache: false,//是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性
            pageList: [10, 20, 30, 50], //可供选择的每页行数
            paginationLoop: true,//设置为true启用分页条无线循环的功能
            clickToSelect: true, //是否启用点击选中行
            uniqueIS: "nsrsbh", //每一行的唯一标识，一般为主键列
            ueryParamsType: 'limit',
            showFooter:true,
            columns: [{
                field: 'ck',
                checkbox: true,
                align: 'center'
                },
                {
                    field: 'nsrmc',
                    align: 'left',
                    title: '用水户名称',
                    halign: 'center'
                },
                {
                    field: 'nsrsbh',
                    align: 'left',
                    title: '用水户识别号',
                    halign: 'center',
                    footerFormatter:function () {
                        return '合计';
                    }
                },

                {
                    field: 'ssnf',
                    align: 'left',
                    halign: 'center',
                    title: '年度'
                },
                {
                    field: 'ndqsl',
                    align: 'right',
                    halign: 'center',
                    title: '年度用水量',
                    formatter:function(value, row, index, field){
                        return  parseFloat(value).toFixed(2);
                    },
                    footerFormatter:function (value) {
                        var sum=0;
                        for(var i in value){
                            sum+=parseFloat(JSON.parse(JSON.stringify(value[i])).ndqsl);
                        }
                        return parseFloat(JSON.stringify(sum)).toFixed(2);
                    }
                },
                {
                    field: 'ndskje',
                    align: 'right',
                    halign: 'center',
                    title: '年度缴纳税款金额',
                    formatter:function(value, row, index, field){
                        return  parseFloat(value).toFixed(2);
                    },
                    footerFormatter:function (value) {
                        var sum=0;
                        for(var i in value){
                            sum+=parseFloat(JSON.parse(JSON.stringify(value[i])).ndskje);
                        }
                        return parseFloat(JSON.stringify(sum)).toFixed(2);
                    }
                },
                {
                    field: 'ndhcje',
                    align: 'right',
                    halign: 'center',
                    title: '年度核查税款金额',
                    formatter:function(value, row, index, field){
                        return  parseFloat(value).toFixed(2);
                    },
                    footerFormatter:function (value) {
                        var sum=0;
                        for(var i in value){
                            sum+=parseFloat(JSON.parse(JSON.stringify(value[i])).ndhcje);
                        }
                        return parseFloat(JSON.stringify(sum)).toFixed(2);
                    }
                },
                {
                    field: 'yhdqsl',
                    align: 'right',
                    halign: 'center',
                    title: '一季度用水量',
                    formatter:function(value, row, index, field){
                        return  parseFloat(value).toFixed(2);
                    },
                    footerFormatter:function (value) {
                        var sum=0;
                        for(var i in value){
                            sum+=parseFloat(JSON.parse(JSON.stringify(value[i])).yhdqsl);
                        }
                        return parseFloat(JSON.stringify(sum)).toFixed(2);
                    }
                },
                {
                    field: 'yskjnje',
                    align: 'right',
                    halign: 'center',
                    title: '一季度缴纳税款',
                    formatter:function(value, row, index, field){
                        return  parseFloat(value).toFixed(2);
                    },
                    footerFormatter:function (value) {
                        var sum=0;
                        for(var i in value){
                            sum+=parseFloat(JSON.parse(JSON.stringify(value[i])).yskjnje);
                        }
                        return parseFloat(JSON.stringify(sum)).toFixed(2);
                    }
                },
                {
                    field: 'yhcskje',
                    align: 'right',
                    halign: 'center',
                    title: '一季度核查税款',
                    formatter:function(value, row, index, field){
                        return  parseFloat(value).toFixed(2);
                    },
                    footerFormatter:function (value) {
                        var sum=0;
                        for(var i in value){
                            sum+=parseFloat(JSON.parse(JSON.stringify(value[i])).yhcskje);
                        }
                        return parseFloat(JSON.stringify(sum)).toFixed(2);
                    }
                },
                {
                    field: 'ehdqsl',
                    align: 'right',
                    title: '二季度用水量',
                    formatter:function(value, row, index, field){
                        return  parseFloat(value).toFixed(2);
                    },
                    footerFormatter:function (value) {
                        var sum=0;
                        for(var i in value){
                            sum+=parseFloat(JSON.parse(JSON.stringify(value[i])).ehdqsl);
                        }
                        return parseFloat(JSON.stringify(sum)).toFixed(2);
                    }

                },
                {
                    field: 'eskjnje',
                    align: 'right',
                    halign: 'center',
                    title: '二季度缴纳税款',
                    formatter:function(value, row, index, field){
                        return  parseFloat(value).toFixed(2);
                    },
                    footerFormatter:function (value) {
                        var sum=0;
                        for(var i in value){
                            sum+=parseFloat(JSON.parse(JSON.stringify(value[i])).eskjnje);
                        }
                        return parseFloat(JSON.stringify(sum)).toFixed(2);
                    }
                },
                {
                    field: 'ehcskje',
                    align: 'right',
                    halign: 'center',
                    title: '二季度核查税款',
                    formatter:function(value, row, index, field){
                        return  parseFloat(value).toFixed(2);
                    },
                    footerFormatter:function (value) {
                        var sum=0;
                        for(var i in value){
                            sum+=parseFloat(JSON.parse(JSON.stringify(value[i])).ehcskje);
                        }
                        return parseFloat(JSON.stringify(sum)).toFixed(2);
                    }
                },
                {
                    field: 'shdqsl',
                    align: 'right',
                    halign: 'center',
                    title: '三季度用水量',
                    formatter:function(value, row, index, field){
                        return  parseFloat(value).toFixed(2);
                    },
                    footerFormatter:function (value) {
                        var sum=0;
                        for(var i in value){
                            sum+=parseFloat(JSON.parse(JSON.stringify(value[i])).shdqsl);
                        }
                        return parseFloat(JSON.stringify(sum)).toFixed(2);
                    }
                }, {
                    field: 'sskjnje',
                    align: 'right',
                    halign: 'center',
                    title: '三季度缴纳税款',
                    formatter:function(value, row, index, field){
                        return  parseFloat(value).toFixed(2);
                    },
                    footerFormatter:function (value) {
                        var sum=0;
                        for(var i in value){
                            sum+=parseFloat(JSON.parse(JSON.stringify(value[i])).sskjnje);
                        }
                        return parseFloat(JSON.stringify(sum)).toFixed(2);
                    }
                },
                {
                    field: 'shcskje',
                    align: 'right',
                    halign: 'center',
                    title: '三季度核查税款',
                    formatter:function(value, row, index, field){
                        return  parseFloat(value).toFixed(2);
                    },
                    footerFormatter:function (value) {
                        var sum=0;
                        for(var i in value){
                            sum+=parseFloat(JSON.parse(JSON.stringify(value[i])).shcskje);
                        }
                        return parseFloat(JSON.stringify(sum)).toFixed(2);
                    }
                },
                {
                    field: 'fhdqsl',
                    align: 'right',
                    title: '四季度用水量',
                    formatter:function(value, row, index, field){
                        return  parseFloat(value).toFixed(2);
                    },
                    footerFormatter:function (value) {
                        var sum=0;
                        for(var i in value){
                            sum+=parseFloat(JSON.parse(JSON.stringify(value[i])).fhdqsl);
                        }
                        return parseFloat(JSON.stringify(sum)).toFixed(2);
                    }
                }, {
                    field: 'fskjnje',
                    align: 'right',
                    halign: 'center',
                    title: '四季度缴纳税款',
                    formatter:function(value, row, index, field){
                        return  parseFloat(value).toFixed(2);
                    },
                    footerFormatter:function (value) {
                        var sum=0;
                        for(var i in value){
                            sum+=parseFloat(JSON.parse(JSON.stringify(value[i])).fskjnje);
                        }
                        return parseFloat(JSON.stringify(sum)).toFixed(2);
                    }
                },
                {
                    field: 'fhcskje',
                    align: 'right',
                    halign: 'center',
                    title: '四季度核查税款',
                    formatter:function(value, row, index, field){
                        return  parseFloat(value).toFixed(2);
                    },
                    footerFormatter:function (value) {
                        var sum=0;
                        for(var i in value){
                            sum+=parseFloat(JSON.parse(JSON.stringify(value[i])).fhcskje);
                        }
                        return parseFloat(JSON.stringify(sum)).toFixed(2);
                    }
                },
                {
                    field: 'cz',
                    align: 'right',
                    halign: 'center',
                    title: '操作',
                    formatter:function(value, row, index, field){
                        return '<button id="ckmxbtn" type="button" class="btn btn-link " data-toggle="modal" data-target="#yslqk" onclick="doYslqk(\'' + row.nsrsbh + '\')">用水量情况</button>'
                    }
                }
            ]
        });

    }


    //导出excel
     function doExcel() {
        var rows = $('#taskList_table').bootstrapTable('getData');
         //纳税人识别号
         var nsrsbh = $("#nsrsbh").val().trim();
         //纳税人名称
         var nsrmc = $("#nsrmc").val().trim();
         //水源区域
         var syqy = $("#syqy").select2("data")[0].id == '00' ? '%' : $("#syqy").select2("data")[0].id;
         //水源类型
         var sylx = $("#sylx").select2("data")[0].id == '00' ? '%' : $("#sylx").select2("data")[0].id;
         //年度
         var ssnf = $("#nd").select2("data")[0].id == '00' ? '%' : $("#nd").select2("data")[0].id;

         if(rows.length==0){
             htlui.msg("查询无数据,无法导出!");
             return false;
         }


         var dataParam ="svo.ssnf="+ssnf
             +"&svo.nsrsbh="+nsrsbh
             +"&svo.nsrmc="+nsrmc
             +"&svo.syqydm="+syqy
             +"&svo.sylxdm="+sylx
         window.location.href = "${ctx}/zhcx/ysltz/doExcel?" +dataParam;
     }


     //用水量总体情况
     $("#ztyslqk").on('shown.bs.modal',function(){
         //tbhbtEcharts(nsrsbh);
         ztnyslqst.resize();//刷新图表
         zttbhbt.resize();//刷新图表
     });

     //用水量总体情况
     function doZtYslqk(){
         var nsrsbh="";
         ztnyslqstEcharts(nsrsbh);
         zttbhbtEcharts(nsrsbh);
     }


     //用水量情况情况中趋势图
     function ztnyslqstEcharts(nsrsbh){
         var  option = null;
         option = {
             xAxis: {
                 data: [],
                 axisLabel: {
                     inside: true,
                     textStyle: {
                         color: '#000'
                     }
                 },
                 axisTick: {
                     show: false
                 },
                 axisLine: {
                     show: false
                 },
                 z: 10
             },
             yAxis: {
                 axisLine: {
                     show: false
                 },
                 axisTick: {
                     show: false
                 },
                 axisLabel: {
                     textStyle: {
                         color: '#000'
                     }
                 }
             },
             dataZoom: [
                 {
                     type: 'inside'
                 }
             ],
             series: [
                 { // For shadow
                     type: 'bar',
                     itemStyle: {
                         normal: {color: 'rgba(0,0,0,0.05)'}
                     },
                     barGap:'-100%',
                     barCategoryGap:'40%',
                     data: [],
                     animation: false
                 },
                 {
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: new echarts.graphic.LinearGradient(
                                     0, 0, 0, 1,
                                     [
                                         {offset: 0, color: '#83bff6'},
                                         {offset: 0.5, color: '#188df0'},
                                         {offset: 1, color: '#188df0'}
                                     ]
                             )
                         },
                         emphasis: {
                             color: new echarts.graphic.LinearGradient(
                                     0, 0, 0, 1,
                                     [
                                         {offset: 0, color: '#2378f7'},
                                         {offset: 0.7, color: '#2378f7'},
                                         {offset: 1, color: '#83bff6'}
                                     ]
                             )
                         }
                     },
                     data: []
                 }
             ]
         };
         var zoomSize = 6;
         ztnyslqst.on('click', function (params) {
             ztnyslqst.dispatchAction({
                 type: 'dataZoom',
                 startValue: option.xAxis.data[Math.max(params.dataIndex - zoomSize / 2, 0)],
                 endValue: option.xAxis.data[Math.min(params.dataIndex + zoomSize / 2, option.series[0].data.length - 1)]
             });
         });
         var _param ={
             "svo.ssnf":$("#nd").select2("data")[0].id,
             "svo.nsrsbh":nsrsbh,
             "svo.nsrmc":$("select[name=nsrmc]").val(),
             "svo.syqydm":$("#syqy").select2("data")[0].id == '00' ? '%' : $("#syqy").select2("data")[0].id,
             "svo.sylxdm": $("#sylx").select2("data")[0].id == '00' ? '%' : $("#sylx").select2("data")[0].id
         }
         // console.log("11==>>"+JSON.stringify(_param));
         $.post("${ctx}/zhcx/ysltz/nfyslqsQuery", _param, function (result) {
             //    console.log("11==>>"+JSON.stringify(result))
             for (var a in result){
                 option.series[0].data.push(result[a].SYLXYSL);
                 option.xAxis.data.push(result[a].YSNF);
                 option.series[1].data.push(result[a].SYLXYSL);
             }
             ztnyslqst.setOption(option, true);
         });
     }

     /**
      * 同比方
      * @param obj
      */
     function zttbhbtEcharts(nsrsbh){
         var app = {};
         var option;  var posList = [
             'left', 'right', 'top', 'bottom',
             'inside',
             'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
             'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
         ];
         app.configParameters = {
             rotate: {
                 min: -90,
                 max: 90
             },
             align: {
                 options: {
                     left: 'left',
                     center: 'center',
                     right: 'right'
                 }
             },
             verticalAlign: {
                 options: {
                     top: 'top',
                     middle: 'middle',
                     bottom: 'bottom'
                 }
             },
             position: {
                 options: echarts.util.reduce(posList, function (map, pos) {
                     map[pos] = pos;
                     return map;
                 }, {})
             },
             distance: {
                 min: 0,
                 max: 100
             }
         };

         app.config = {
             rotate: 90,
             align: 'left',
             verticalAlign: 'middle',
             position: 'insideBottom',
             distance: 15,
             onChange: function () {
                 var labelOption = {
                     normal: {
                         rotate: app.config.rotate,
                         align: app.config.align,
                         verticalAlign: app.config.verticalAlign,
                         position: app.config.position,
                         distance: app.config.distance
                     }
                 };
             }
         };


         var labelOption = {
             normal: {
                 show: true,
                 feature : {
                     dataView : {show: true, readOnly: true}
                 },
                 position: app.config.position,
                 distance: app.config.distance,
                 align: app.config.align,
                 verticalAlign: app.config.verticalAlign,
                 rotate: app.config.rotate,
                 formatter: '{c}  {name|{a}}',
                 fontSize: 16,
                 rich: {
                     name: {
                         textBorderColor: '#fff'
                     }
                 }
             }
         };

         option = {
             color: ['#9DD3FA',  '#4cabce', '#e5323e'],
             tooltip: {
                 trigger: 'axis',
                 axisPointer: {
                     type: 'shadow'
                 }
             },
             legend: {
                 data: ['用水量(方)', '同比（%）', '环比（%）']
             },
             toolbox: {
                 show: true,
                 orient: 'vertical',
                 left: 'right',
                 top: 'center',
                 feature: {
                     mark: {show: true},
                     dataView: {show: true, readOnly: false},
                     magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                     restore: {show: true},
                     saveAsImage: {show: true}
                 }
             },
             calculable: true,
             xAxis: [
                 {
                     type: 'category',
                     axisTick: {show: false},
                     data: ['第一季度', '第二季度', '第三季度', '第四季度']
                 }
             ],
             yAxis: [
                 {
                     type: 'value'
                 }
             ],
             series: [
                 {
                     name: '用水量(方)',
                     type: 'bar',
                     barGap: 0,
                     label: labelOption
                 },
                 {
                     name: '同比（%）',
                     type: 'bar',
                     label: labelOption
                 },
                 {
                     name: '环比（%）',
                     type: 'bar',
                     label: labelOption
                 }
             ]
         };
         var _param ={
             "svo.ssnf":$("#nd").select2("data")[0].id,
             "svo.nsrsbh":nsrsbh,
             "svo.nsrmc":$("select[name=nsrmc]").val(),
             "svo.syqydm":$("#syqy").select2("data")[0].id == '00' ? '%' : $("#syqy").select2("data")[0].id,
             "svo.sylxdm": $("#sylx").select2("data")[0].id == '00' ? '%' : $("#sylx").select2("data")[0].id
         }
         console.log("11==>>"+JSON.stringify(_param))
         $.post("${ctx}/zhcx/ysltz/ylstbhb",_param , function (result) {
             option.series[0].data=[result.CURRQSL1Q, result.CURRQSL2Q, result.CURRQSL3Q, result.CURRQSL4Q];
             option.series[1].data=[result.TB1, result.TB2, result.TB3, result.TB4];
             option.series[2].data=[result.HB1, result.HB2, result.HB3, result.HB4];
             zttbhbt.setOption(option, true);
         });
     }



     //用水量情况
     $("#yslqk").on('shown.bs.modal',function(){
         nyslqst.resize();//刷新图表
         tbhbt.resize();//刷新图表
     });


    //用水量情况
    function doYslqk(nsrsbh){
        nyslqstEcharts(nsrsbh);
        tbhbtEcharts(nsrsbh);
    }


     //用水量情况情况中趋势图
     function nyslqstEcharts(nsrsbh){
         var  option = null;
         option = {
             xAxis: {
                 data: [],
                 axisLabel: {
                     inside: true,
                     textStyle: {
                         color: '#000'
                     }
                 },
                 axisTick: {
                     show: false
                 },
                 axisLine: {
                     show: false
                 },
                 z: 10
             },
             yAxis: {
                 axisLine: {
                     show: false
                 },
                 axisTick: {
                     show: false
                 },
                 axisLabel: {
                     textStyle: {
                         color: '#000'
                     }
                 }
             },
             dataZoom: [
                 {
                     type: 'inside'
                 }
             ],
             series: [
                 { // For shadow
                     type: 'bar',
                     itemStyle: {
                         normal: {color: 'rgba(0,0,0,0.05)'}
                     },
                     barGap:'-100%',
                     barCategoryGap:'40%',
                     data: [],
                     animation: false
                 },
                 {
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: new echarts.graphic.LinearGradient(
                                     0, 0, 0, 1,
                                     [
                                         {offset: 0, color: '#83bff6'},
                                         {offset: 0.5, color: '#188df0'},
                                         {offset: 1, color: '#188df0'}
                                     ]
                             )
                         },
                         emphasis: {
                             color: new echarts.graphic.LinearGradient(
                                     0, 0, 0, 1,
                                     [
                                         {offset: 0, color: '#2378f7'},
                                         {offset: 0.7, color: '#2378f7'},
                                         {offset: 1, color: '#83bff6'}
                                     ]
                             )
                         }
                     },
                     data: []
                 }
             ]
         };
         var zoomSize = 6;
         nyslqst.on('click', function (params) {
             nyslqst.dispatchAction({
                 type: 'dataZoom',
                 startValue: option.xAxis.data[Math.max(params.dataIndex - zoomSize / 2, 0)],
                 endValue: option.xAxis.data[Math.min(params.dataIndex + zoomSize / 2, option.series[0].data.length - 1)]
             });
         });
         var _param ={
             "svo.ssnf":$("#nd").select2("data")[0].id,
             "svo.nsrsbh":nsrsbh,
             "svo.nsrmc":$("select[name=nsrmc]").val(),
             "svo.syqydm":$("#syqy").select2("data")[0].id == '00' ? '%' : $("#syqy").select2("data")[0].id,
             "svo.sylxdm": $("#sylx").select2("data")[0].id == '00' ? '%' : $("#sylx").select2("data")[0].id
         }
        // console.log("11==>>"+JSON.stringify(_param));
         $.post("${ctx}/zhcx/ysltz/nfyslqsQuery", _param, function (result) {
         //    console.log("11==>>"+JSON.stringify(result))
             for (var a in result){
                 option.series[0].data.push(result[a].SYLXYSL);
                 option.xAxis.data.push(result[a].YSNF);
                 option.series[1].data.push(result[a].SYLXYSL);
             }
             nyslqst.setOption(option, true);
         });
     }

     /**
      * 同比方
      * @param obj
      */
     function tbhbtEcharts(nsrsbh){
         var app = {};
         var option;  var posList = [
             'left', 'right', 'top', 'bottom',
             'inside',
             'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
             'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
         ];
         app.configParameters = {
             rotate: {
                 min: -90,
                 max: 90
             },
             align: {
                 options: {
                     left: 'left',
                     center: 'center',
                     right: 'right'
                 }
             },
             verticalAlign: {
                 options: {
                     top: 'top',
                     middle: 'middle',
                     bottom: 'bottom'
                 }
             },
             position: {
                 options: echarts.util.reduce(posList, function (map, pos) {
                     map[pos] = pos;
                     return map;
                 }, {})
             },
             distance: {
                 min: 0,
                 max: 100
             }
         };

         app.config = {
             rotate: 90,
             align: 'left',
             verticalAlign: 'middle',
             position: 'insideBottom',
             distance: 15,
             onChange: function () {
                 var labelOption = {
                     normal: {
                         rotate: app.config.rotate,
                         align: app.config.align,
                         verticalAlign: app.config.verticalAlign,
                         position: app.config.position,
                         distance: app.config.distance
                     }
                 };
             }
         };


         var labelOption = {
             normal: {
                 show: true,
                 feature : {
                     dataView : {show: true, readOnly: true}
                 },
                 position: app.config.position,
                 distance: app.config.distance,
                 align: app.config.align,
                 verticalAlign: app.config.verticalAlign,
                 rotate: app.config.rotate,
                 formatter: '{c}  {name|{a}}',
                 fontSize: 16,
                 rich: {
                     name: {
                         textBorderColor: '#fff'
                     }
                 }
             }
         };

         option = {
             color: ['#9DD3FA',  '#4cabce', '#e5323e'],
             tooltip: {
                 trigger: 'axis',
                 axisPointer: {
                     type: 'shadow'
                 }
             },
             legend: {
                 data: ['用水量(方)', '同比（%）', '环比（%）']
             },
             toolbox: {
                 show: true,
                 orient: 'vertical',
                 left: 'right',
                 top: 'center',
                 feature: {
                     mark: {show: true},
                     dataView: {show: true, readOnly: false},
                     magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                     restore: {show: true},
                     saveAsImage: {show: true}
                 }
             },
             calculable: true,
             xAxis: [
                 {
                     type: 'category',
                     axisTick: {show: false},
                     data: ['第一季度', '第二季度', '第三季度', '第四季度']
                 }
             ],
             yAxis: [
                 {
                     type: 'value'
                 }
             ],
             series: [
                 {
                     name: '用水量(方)',
                     type: 'bar',
                     barGap: 0,
                     label: labelOption
                 },
                 {
                     name: '同比（%）',
                     type: 'bar',
                     label: labelOption
                 },
                 {
                     name: '环比（%）',
                     type: 'bar',
                     label: labelOption
                 }
             ]
         };
         var _param ={
             "svo.ssnf":$("#nd").select2("data")[0].id,
             "svo.nsrsbh":nsrsbh,
             "svo.nsrmc":$("select[name=nsrmc]").val(),
             "svo.syqydm":$("#syqy").select2("data")[0].id == '00' ? '%' : $("#syqy").select2("data")[0].id,
             "svo.sylxdm": $("#sylx").select2("data")[0].id == '00' ? '%' : $("#sylx").select2("data")[0].id
         }
        // console.log("11==>>"+JSON.stringify(_param))
         $.post("${ctx}/zhcx/ysltz/ylstbhb",_param , function (result) {
             option.series[0].data=[result.CURRQSL1Q, result.CURRQSL2Q, result.CURRQSL3Q, result.CURRQSL4Q];
             option.series[1].data=[result.TB1, result.TB2, result.TB3, result.TB4];
             option.series[2].data=[result.HB1, result.HB2, result.HB3, result.HB4];
             tbhbt.setOption(option, true);
         });
     }


     //获取当前日期时间
    function getNowFormatDate() {
        var date = new Date();
        var tung = "/";
        var thecolon = ":";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 1 && strDate <= 9) {
            strDate = "0" + strDate
        }
        // var currentTime = date.getFullYear() + tung + month + tung + strDate + " " + date.getHours() + thecolon + date.getMinutes() + thecolon + date.getSeconds();
        var currentTime = date.getFullYear() + tung + month + tung + strDate;
        return currentTime;
    }
</script>

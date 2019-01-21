<%--
  Created by IntelliJ IDEA.
  User: PengWen Wang
  Date: 2018/12/25
  Time: 14:45
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<html>
<head>
    <title>用水量计划查询</title>
    <meta name="description" content="simple and responsive tables"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link rel="shortcut icon" href="${ctx}/assets/img/favicon.png" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="${ctx}/bootstrap/bootstrap-3.3.7/css/bootstrap.css"/>
    <link rel="stylesheet" type="text/css" href="${ctx}/bootstrap/bootstrap-table/dist/bootstrap-table.css">
    <link rel="stylesheet" type="text/css" href="${ctx}/bootstrap/font-awesome-4.7.0/css/font-awesome.css"/>
    <link rel="stylesheet" type="text/css" href="${ctx}/bootstrap/select2/dist/css/select2.css"/>
    <link rel="stylesheet" type="text/css" href="${ctx}/bootstrap/css/beyond.min.css"/>
</head>
<style>
    .table {
        margin-top: 20px;
        font-size: 14px;
    }

    .table td {
        vertical-align: middle !important;
    }

    .bgcolor {
        font-weight: bold;
    }

    h4 {
        font-size: 20px;
        font-weight: bold;
    }

    .audit td{
        width: 120px;
    }
</style>
<body>
<div class="page-body">
    <div class="row">
        <div class="col-lg-12 col-sm-6 col-xs-12 col-md-12">
            <div class="widget">
                <div class="widget-header bg-blue">
                    <span class="widget-caption">查询条件</span>
                </div>
                <div class="widget-body">
                    <table class="table">
                        <tr>
                            <td style="vertical-align:middle; width:2.2cm;">计划年度:</td>
                            <td style="width: 6cm;">
                                <div class="col-sm-2" style="width: 190px;">
                                    <select id="ssnd" class="select-ssnd" style="width:100%;height: 35px;">
                                        <option/>
                                    </select>
                                </div>
                            </td>
                            <td style="vertical-align:middle; width:2cm;font-size: 15px">用水户:</td>
                            <td>
                                <div class="col-sm-2" style="width: 190px;">
                                    <input id="nsrmc" align="left" type="text" class="form-control" placeholder="请输入名称">
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td colspan="12" align="center">
                                <button type="submit" class="btn btn-info" style="width: 2cm;" onclick="namedQuery()">执行查询</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-12 col-sm-12 col-xs-12 col-md-12">
            <div class="widget-header ">
                <span class="widget-caption">用水户计划信息</span>
            </div>
            <div class="widget-body">
                <table id="table" data-height="600" class="table table-striped table-bordered table-hover"></table>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="audit" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog" style="width: 1200px">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="titleBar" align="center"></h4>
            </div>
            <div class="modal-body">
                <table class="table table-bordered container table-striped text-center audit">
                    <tr style="font-weight: bold;">
                        <td>用水户</td>
                        <td colspan="4"><input id="user" style="text-align: left; border: 0; background-color: transparent;" type="text" class="form-control"></td>
                        <td>取水地点</td>
                        <td colspan="4"><input id="address" style="text-align: left; border: 0; background-color: transparent;" type="text" class="form-control"></td>
                    </tr>
                    <tr style="font-weight: bold;">
                        <td>季度</td>
                        <td style="width: 50px;">月份</td>
                        <td>上报计划量(m³)</td>
                        <td class="td-control">审核计划量(m³)</td>
                        <td style="width: 50px;">月份<br></td>
                        <td>上报计划量(m³)</td>
                        <td class="td-control">审核计划量(m³)</td>
                        <td style="width: 50px;">月份</td>
                        <td>上报计划量(m³)</td>
                        <td class="td-control">审核计划量(m³)</td>
                    </tr>
                    <tr>
                        <td>第一季度</td>
                        <td>1月</td>
                        <td><input id="jans" style="text-align: right; border: 0; background-color: transparent;" type="text" class="form-control"></td>
                        <td><input id="jan" style="text-align: right; border: 0; background-color: transparent;" type="text" class="form-control input-control"></td>
                        <td>2月</td>
                        <td><input id="febs" style="text-align: right; border: 0; background-color: transparent;" type="text" class="form-control"></td>
                        <td><input id="feb" style="text-align: right; border: 0; background-color: transparent;" type="text" class="form-control input-control"></td>
                        <td>3月</td>
                        <td><input id="mars" style="text-align: right; border: 0; background-color: transparent;" type="text" class="form-control"></td>
                        <td><input id="mar" style="text-align: right; border: 0; background-color: transparent;" type="text" class="form-control input-control"></td>

                    </tr>
                    <tr>
                        <td>第二季度</td>
                        <td>4月</td>
                        <td><input id="aprs" style="text-align: right; border: 0; background-color: transparent;" type="text" class="form-control"></td>
                        <td class="col-lg-2"><input id="apr" style="text-align: right; border: 0; background-color: transparent;" type="text" class="form-control input-control" ></td>
                        <td>5月</td>
                        <td><input id="mays" style="text-align: right; border: 0; background-color: transparent;" type="text" class="form-control"></td>
                        <td class="col-lg-2"><input id="may" style="text-align: right; border: 0; background-color: transparent;" type="text" class="form-control input-control" ></td>
                        <td>6月</td>
                        <td><input id="juns" style="text-align: right; border: 0; background-color: transparent;" type="text" class="form-control"></td>
                        <td class="col-lg-2"><input id="jun" style="text-align: right; border: 0; background-color: transparent;" type="text" class="form-control input-control" ></td>

                    </tr>
                    <tr>
                        <td>第三季度</td>
                        <td>7月</td>
                        <td><input id="juls" style="text-align: right; border: 0; background-color: transparent;" type="text" class="form-control"></td>
                        <td class="col-lg-2"><input id="jul" style="text-align: right; border: 0; background-color: transparent;" type="text" class="form-control input-control"></td>
                        <td>8月</td>
                        <td><input id="augs" style="text-align: right; border: 0; background-color: transparent;" type="text" class="form-control"></td>
                        <td class="col-lg-2"><input id="aug" style="text-align: right; border: 0; background-color: transparent;" type="text" class="form-control input-control"></td>
                        <td>9月</td>
                        <td><input id="septs" style="text-align: right; border: 0; background-color: transparent;" type="text" class="form-control"></td>
                        <td class="col-lg-2"><input id="sept" style="text-align: right; border: 0; background-color: transparent;" type="text" class="form-control input-control"></td>

                    </tr>
                    <tr>
                        <td>第四季度</td>
                        <td>10月</td>
                        <td><input id="octs" style="text-align: right; border: 0; background-color: transparent;" type="text" class="form-control"></td>
                        <td class="col-lg-2"><input id="oct" style="text-align: right; border: 0; background-color: transparent;" type="text" class="form-control input-control"></td>
                        <td>11月</td>
                        <td><input id="novs" style="text-align: right; border: 0; background-color: transparent;" type="text" class="form-control"></td>
                        <td class="col-lg-2"><input id="nov" style="text-align: right; border: 0; background-color: transparent;" type="text" class="form-control input-control"></td>
                        <td>12月</td>
                        <td><input id="decs" style="text-align: right; border: 0; background-color: transparent;" type="text" class="form-control"></td>
                        <td class="col-lg-2"><input id="dec" style="text-align: right; border: 0; background-color: transparent;" type="text" class="form-control input-control"></td>

                    </tr>

                    <tr>
                        <td style="font-weight: bold;">上报计划量合计</td>
                        <td colspan="4" align="left" style="text-indent: 15px;"><a id="totals" style="display: block; text-decoration: none; cursor: pointer; color: #0b4b97"></a></td>
                        <td class="td-control" style="font-weight: bold">审核计划量合计</td>
                        <td colspan="4" align="left" style="text-indent: 15px;"><a id="total" class="input-control" style="display: block; text-decoration: none; cursor: pointer; color: #0b4b97"></a></td>
                    </tr>

                    <tr>
                        <td colspan="11" align="center">
                            <input type="button" class="btn btn-default" data-dismiss="modal" value="关&nbsp;&nbsp;闭"/>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</div>
</body>
<script src="${ctx}/bootstrap/js/jquery-3.3.1.js"></script>
<script src="${ctx}/bootstrap/bootstrap-3.3.7/js/bootstrap.js"></script>
<script src="${ctx}/bootstrap/bootstrap-table/dist/bootstrap-table.js"></script>
<script src="${ctx}/bootstrap/bootstrap-table/dist/locale/bootstrap-table-zh-CN.js"></script>
<script src="${ctx}/bootstrap/select2/dist/js/select2.js"></script>
</html>
<script>
    $(function(){
        initTable();
        $("#nsrmc").focus();
        $(document).keydown(function (event) {
            if (event.keyCode == 13) {
                namedQuery();
            }
        });

        // 水源区域
        $.post("${ctx}/zhcx/ysljhcx/syqycd",null,function(result){
            $(".select-syqy").select2({
                data: result,
                placeholder: '请选择',
                allowClear: true
            });
        });
        // 所属年度
        $.post("${ctx}/zhcx/ysljhcx/yearMenu",null,function(result){
            $(".select-ssnd").select2({
                data: result,
                placeholder: '请选择',
                allowClear: true
            });
        });
    });

    function namedQuery(){
        // 所属年度
        var ssnd = $("#ssnd").select2("data");
        var ssnds = "";
        if (ssnd != null && JSON.stringify(ssnd) != "{}" && typeof(ssnd) != "undefined" && ssnd.length > 0) {
            ssnds = $("#ssnd option:checked").text().trim();
        }

        // 纳税人名称
        var nsrmc = $("#nsrmc").val().trim();

        initTable(ssnds,nsrmc);
    }

    function initTable(ssnds,nsrmc) {
        $('#table').bootstrapTable('destroy');
        $('#table').bootstrapTable({
            url: "${ctx}/zhcx/ysljhcx/initQuery", // 获取数据的Select地址
            sidePagination: "server", 				// 表示服务端请求(分页方式：client客户端分页，server服务端分页)
            queryParams: function(params) {
                return {
                    'svo.sbnd': ssnds,
                    'svo.nsrmc': nsrmc,
                    offset: (params.offset / params.limit) + 1,
                    limit: params.limit
                }
            },
            pagination: true, 						// 是否分页
            singleSelect: true, 					// 设置为true禁止多选
            pageNumber: 1, 							// 初始化加载第一页，默认第一页
            buttonsAlign: 'right', 					// 按钮对齐方式
            pageSize: 10, 							// 每页的记录行数
            pageList: [10, 20, 30, 50], 			// 可供选择的每页行数
            onlyInfoPagination: false, 				// 设置为true只显示总数据数，而不显示分页按钮
            paginationLoop: true, 					// 设置为true启用分页条无线循环的功能
            clickToSelect: true, 					// 是否启用点击选中行
            uniqueIS: "ck", 						// 每一行的唯一标识，一般为主键列
            ueryParamsType: 'limit',
            columns: [{
                field: 'ck',
                checkbox: true,
                align: 'center'
            }, {
                field: 'nsrmc',
                align: 'left',
                halign: 'left',
                title: '用水户'
            }, {
                field: 'shxydm',
                align: 'left',
                halign: 'left',
                title: '社会信用代码'
            },
            //   {
            //     field: 'fddbrxm',
            //     align: 'center',
            //     title: '法定代表人姓名'
            // },
            {
                field: 'qskszd',
                align: 'left',
                halign: 'left',
                title: '取水地点'
            },{
                field: 'sbnd',
                align: 'center',
                title: '计划年度'
            }, {
                field: 'ysljhz',
                align: 'center',
                title: '上报计划量(m³)'
            }, {
                field: 'yslshz',
                align: 'center',
                title: '审核计划量(m³)'
            }, {
                field: 'sbrq',
                align: 'center',
                title: '上报日期'
            }, {
                field: 'shztmc',
                align: 'center',
                title: '审核状态',
                sortatable: true,
                formatter: function (value, row, index) {
                    if (value == "未审核" ){
                        return '<span class="label label-warning">未审核</span>';
                    }else {
                        return '<span class="label label-success">已审核</span>';
                    }
                }
            }, {
                field: 'shztmc',
                align: 'center',
                title: '操作',
                sortatable: true,
                formatter: function (value, row, index) {
                        return '<button type="button" class="btn btn-link btn-xs" data-toggle="modal" ' +
                            'data-target="#audit" onclick="audit(\'' + row.ysljhxh + '\',\'' + row.sbnd + '\',\'' + row.shztmc + '\',\'' + row.nsrmc + '\',\'' + row.qskszd + '\')">查看</button>';
                }
            }]
        });
    }

    /**
     * 用水量计划序号、申报年度、审核状态名称
     * @param ysljhxh sbnd shztmc
     * @returns
     */
    function audit(ysljhxh,sbnd,shztmc,nsrmc,qskszd){
        $("#titleBar").text(sbnd + "年度计划用水量查看");
        $("#user").val(nsrmc);
        $("#address").val(qskszd);
        if (ysljhxh ==  "" || ysljhxh == null || ysljhxh == undefined){
            return;
        }
        // 查询(用水户年度计划用水明细)
        $.post("${ctx}/zhcx/ysljhcx/conditionQuery", {'svo.ysljhxh':ysljhxh}, function (results) {
            if (results.toString().length == 0){return;}
            $("#jans").val(results[0].jan);
            $("#febs").val(results[0].feb);
            $("#mars").val(results[0].mar);
            $("#aprs").val(results[0].apr);
            $("#mays").val(results[0].may);
            $("#juns").val(results[0].jun);
            $("#juls").val(results[0].jul);
            $("#augs").val(results[0].aug);
            $("#septs").val(results[0].sept);
            $("#octs").val(results[0].oct);
            $("#novs").val(results[0].nov);
            $("#decs").val(results[0].dec);
            $("#totals").text(results[0].ysljhz);
        });

        // 审核明细查询(已审核的用水户年度计划明细)
        $.post("${ctx}/zhcx/ysljhcx/auditDetailQuery", {'svo.ysljhxh':ysljhxh}, function (results) {
            $(".td-control").addClass("gray");
            if (results.toString().length == 0){return;}
            $(".td-control").removeClass("gray");
            $(".td-control,.input-control").addClass("green");
            $("#jan").val(results[0].jan);
            $("#feb").val(results[0].feb);
            $("#mar").val(results[0].mar);
            $("#apr").val(results[0].apr);
            $("#may").val(results[0].may);
            $("#jun").val(results[0].jun);
            $("#jul").val(results[0].jul);
            $("#aug").val(results[0].aug);
            $("#sept").val(results[0].sept);
            $("#oct").val(results[0].oct);
            $("#nov").val(results[0].nov);
            $("#dec").val(results[0].dec);
            $("#total").text(results[0].yslshz);
        });
    }

    $("#audit").on('hidden.bs.modal', function() {
        $("#jans,#jan").val("");
        $("#febs,#feb").val("");
        $("#mars,#mar").val("");
        $("#aprs,#apr").val("");
        $("#mays,#may").val("");
        $("#juns,#jun").val("");
        $("#juls,#jul").val("");
        $("#augs,#aug").val("");
        $("#septs,#sept").val("");
        $("#octs,#oct").val("");
        $("#novs,#nov").val("");
        $("#decs,#dec").val("");
        $("#totals,#total").text("");
    });
</script>

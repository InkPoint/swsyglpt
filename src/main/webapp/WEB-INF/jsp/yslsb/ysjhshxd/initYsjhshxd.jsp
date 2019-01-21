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
    <title>用水量计划审核下达</title>
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
                <table id="table" data-height="492" class="table table-striped table-bordered table-hover"></table>
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
                                <td>计划用水量(m³)</td>
                                <td>实际用水量(m³)</td>
                                <td style="width: 50px;">月份<br></td>
                                <td>计划用水量(m³)</td>
                                <td>实际用水量(m³)</td>
                                <td style="width: 50px;">月份</td>
                                <td>计划用水量(m³)</td>
                                <td>实际用水量(m³)</td>
                            </tr>
                            <tr>
                                <td>第一季度</td>
                                <td>1月</td>
                                <td><input id="jans" style="text-align: right; border: 0; background-color: transparent;" type="text" class="form-control"></td>
                                <td><input id="jan" style="text-align: right" type="text" class="form-control input-control" placeholder="" onkeyup="sum();numberCheck(this)"></td>
                                <td>2月</td>
                                <td><input id="febs" style="text-align: right; border: 0; background-color: transparent;" type="text" class="form-control"></td>
                                <td><input id="feb" style="text-align: right" type="text" class="form-control input-control" placeholder="" onkeyup="sum();numberCheck(this)"></td>
                                <td>3月</td>
                                <td><input id="mars" style="text-align: right; border: 0; background-color: transparent;" type="text" class="form-control"></td>
                                <td><input id="mar" style="text-align: right" type="text" class="form-control input-control" placeholder="" onkeyup="sum();numberCheck(this)"></td>

                            </tr>
                            <tr>
                                <td>第二季度</td>
                                <td>4月</td>
                                <td><input id="aprs" style="text-align: right; border: 0; background-color: transparent;" type="text" class="form-control"></td>
                                <td class="col-lg-2"><input id="apr" style="text-align: right" type="text" class="form-control input-control" placeholder="" onkeyup="sum();numberCheck(this)"></td>
                                <td>5月</td>
                                <td><input id="mays" style="text-align: right; border: 0; background-color: transparent;" type="text" class="form-control"></td>
                                <td class="col-lg-2"><input id="may" style="text-align: right" type="text" class="form-control input-control" placeholder="" onkeyup="sum();numberCheck(this)"></td>
                                <td>6月</td>
                                <td><input id="juns" style="text-align: right; border: 0; background-color: transparent;" type="text" class="form-control"></td>
                                <td class="col-lg-2"><input id="jun" style="text-align: right" type="text" class="form-control input-control" placeholder="" onkeyup="sum();numberCheck(this)"></td>

                            </tr>
                            <tr>
                                <td>第三季度</td>
                                <td>7月</td>
                                <td><input id="juls" style="text-align: right; border: 0; background-color: transparent;" type="text" class="form-control"></td>
                                <td class="col-lg-2"><input id="jul" style="text-align: right" type="text" class="form-control input-control" placeholder="" onkeyup="sum();numberCheck(this)"></td>
                                <td>8月</td>
                                <td><input id="augs" style="text-align: right; border: 0; background-color: transparent;" type="text" class="form-control"></td>
                                <td class="col-lg-2"><input id="aug" style="text-align: right" type="text" class="form-control input-control" placeholder="" onkeyup="sum();numberCheck(this)"></td>
                                <td>9月</td>
                                <td><input id="septs" style="text-align: right; border: 0; background-color: transparent;" type="text" class="form-control"></td>
                                <td class="col-lg-2"><input id="sept" style="text-align: right" type="text" class="form-control input-control" placeholder="" onkeyup="sum();numberCheck(this)"></td>

                            </tr>
                            <tr>
                                <td>第四季度</td>
                                <td>10月</td>
                                <td><input id="octs" style="text-align: right; border: 0; background-color: transparent;" type="text" class="form-control"></td>
                                <td class="col-lg-2"><input id="oct" style="text-align: right" type="text" class="form-control input-control" placeholder="" onkeyup="sum();numberCheck(this)"></td>
                                <td>11月</td>
                                <td><input id="novs" style="text-align: right; border: 0; background-color: transparent;" type="text" class="form-control"></td>
                                <td class="col-lg-2"><input id="nov" style="text-align: right" type="text" class="form-control input-control" placeholder="" onkeyup="sum();numberCheck(this)"></td>
                                <td>12月</td>
                                <td><input id="decs" style="text-align: right; border: 0; background-color: transparent;" type="text" class="form-control"></td>
                                <td class="col-lg-2"><input id="dec" style="text-align: right" type="text" class="form-control input-control" placeholder="" onkeyup="sum();numberCheck(this)"></td>

                            </tr>

                            <tr>
                                <td style="font-weight: bold">计划用水量合计</td>
                                <td colspan="4" align="left" style="text-indent: 15px;"><a id="totals" style="display: block; text-decoration: none; cursor: pointer; color: #0b4b97"></a></td>
                                <td style="font-weight: bold">实际用水量合计</td>
                                <td colspan="4" align="left" style="text-indent: 15px;"><a id="total" style="display: block; text-decoration: none; cursor: pointer; color: #0b4b97"></a></td>
                            </tr>

                            <tr>
                                <td colspan="11" align="center">
                                    <input type="button" class="btn btn-info" onclick="addData()" value="核定下达"/>
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
    var num;
    $(function(){
        initTable();
        $("#nsrmc").focus();
        $(document).keydown(function (event) {
            if (event.keyCode == 13) {
                namedQuery();
            }
        });
    });

    function namedQuery(){
        var nsrmc = $("#nsrmc").val().trim();
        initTable(nsrmc);
    }

    function initTable(nsrmc) {
        $('#table').bootstrapTable('destroy');
        $('#table').bootstrapTable({
            url: "${ctx}/yslsb/ysjhshxd/initQuery", // 获取数据的Select地址
            sidePagination: "server", 				// 表示服务端请求(分页方式：client客户端分页，server服务端分页)
            queryParams: function(params) {
                return {
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
            //     {
            //     field: 'fddbrxm',
            //     align: 'center',
            //     title: '法定代表人姓名'
            // },
            {
                field: 'qskszd',
                align: 'left',
                halign: 'left',
                title: '取水地点'
            }, {
                field: 'sbnd',
                align: 'center',
                title: '计划年度'
            }, {
                field: 'ysljhz',
                align: 'center',
                title: '用水量计划值(m³)'
            }, {
                field: 'yslshz',
                align: 'center',
                title: '用水量审核值(m³)'
            }, {
                field: 'sbrq',
                align: 'center',
                title: '上报日期'
            }, {
                field: 'shztmc',
                align: 'center',
                title: '操作',
                sortatable: true,
                formatter: function (value, row, index) {
                    if (value == "未审核" ){
                        return '<button type="button" class="btn btn-success btn-xs" data-toggle="modal" ' +
                            'data-target="#audit" onclick="audit(\'' + row.ysljhxh + '\',\'' + row.sbnd + '\',\'' + row.nsrmc + '\',\'' + row.qskszd + '\')">审核</button>';
                    }else {
                        return '已审核';
                    }
                }
            }]
        });
    }

    /**
     * 用水量计划序号
     * 申报年度
     * @param ysljhxh sbnd
     * @returns ysljhxh
     */
    function audit(ysljhxh,sbnd,nsrmc,qskszd){
        num = ysljhxh;
        $("#user").val(nsrmc);
        $("#address").val(qskszd);
        $("#titleBar").text(sbnd + "年度计划用水量审核");
        if (num ==  "" || num == null || num == undefined){
            return;
        }

        $.post("${ctx}/yslsb/ysjhshxd/conditionQuery", {'svo.ysljhxh':num}, function (results) {
                    $("#jans,#jan").val(results[0].jan);
                    $("#febs,#feb").val(results[0].feb);
                    $("#mars,#mar").val(results[0].mar);
                    $("#aprs,#apr").val(results[0].apr);
                    $("#mays,#may").val(results[0].may);
                    $("#juns,#jun").val(results[0].jun);
                    $("#juls,#jul").val(results[0].jul);
                    $("#augs,#aug").val(results[0].aug);
                    $("#septs,#sept").val(results[0].sept);
                    $("#octs,#oct").val(results[0].oct);
                    $("#novs,#nov").val(results[0].nov);
                    $("#decs,#dec").val(results[0].dec);
                    $("#totals,#total").text(results[0].ysljhz);
                });
    }

    function addData() {
        var jan = $("#jan").val();
        var feb = $("#feb").val();
        var mar = $("#mar").val();
        var apr = $("#apr").val();
        var may = $("#may").val();
        var jun = $("#jun").val();
        var jul = $("#jul").val();
        var aug = $("#aug").val();
        var sept = $("#sept").val();
        var oct = $("#oct").val();
        var nov = $("#nov").val();
        var dec = $("#dec").val();

        var sumUp = Number(0);
        $(".input-control").each(function () {
            if($(this).val()!=""){
                sumUp += Number($(this).val());
            }
        });

        $.post("${ctx}/yslsb/ysjhshxd/addData", {
            'svo.jan':jan,
            'svo.feb':feb,
            'svo.mar':mar,
            'svo.apr':apr,
            'svo.may':may,
            'svo.jun':jun,
            'svo.jul':jul,
            'svo.aug':aug,
            'svo.sept':sept,
            'svo.oct':oct,
            'svo.nov':nov,
            'svo.dec':dec,
            'svo.yslshz':sumUp,
            'svo.ysljhxh':num
        }, function (result) {
            window.location.href = '${ctx}/yslsb/ysjhshxd/initYsjhshxd';
        });
    };

    function sum(){
        var sumUp = Number(0);
        $(".input-control").each(function () {
            if($(this).val()!=""){
                sumUp += Number($(this).val());
            }
        });
        $("#total").text(sumUp);
    }

    /**
     * 只能输入数字和小数点；
     * 小数点只能有1个
     * 第一位不能是小数点
     * 第一位如果输入0，且第二位不是小数点，则去掉第一位的0
     * 小数点后保留1位
     * @param num
     * @returns {*}
     */
    function  numberCheck(num) {
        var str = num.value;
        var len1 = str.substr(0, 1);
        var len2 = str.substr(1, 1);
        //如果第一位是0，第二位不是点，就用数字把点替换掉
        if (str.length > 1 && len1 == 0 && len2 != ".") {
            str = str.substr(1, 1);
        }
        //第一位不能是.
        if (len1 == ".") {
            str = "";
        }
        //限制只能输入一个小数点
        if (str.indexOf(".") != -1) {
            var str_ = str.substr(str.indexOf(".") + 1);

            if (str_.indexOf(".") != -1) {
                str = str.substr(0, str.indexOf(".") + str_.indexOf(".") + 1);
            }
        }
        //正则替换，保留数字和小数点
        str = str.replace(/[^\d^\.]+/g,'');
        //如果需要保留小数点后一位，则用下面公式
        str = str.replace(/\.\d\d$/,'');
        var key = num.id;
        $("#" + key).val(str);
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

<%--
  Created by IntelliJ IDEA.
  User: PengWen Wang
  Date: 2018/12/25
  Time: 10:41
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<html>
<head>
    <title>用水量计划报送</title>
    <%@include file="../../common/include-head.jsp" %>
    <meta name="description" content="simple and responsive tables"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link rel="shortcut icon" href="${ctx}/assets/img/favicon.png" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="${ctx}/bootstrap/bootstrap-3.3.7/css/bootstrap.css"/>
    <link rel="stylesheet" type="text/css" href="${ctx}/bootstrap/font-awesome-4.7.0/css/font-awesome.css"/>
    <link rel="stylesheet" type="text/css" href="${ctx}/bootstrap/select2/dist/css/select2.css"/>
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
</style>
<body>
<div class="col-lg-8 col-md-offset-2">
    <table class="table table-bordered container table-striped text-center">
        <thead>
        <tr>
            <td colspan="9" align="center"><h4 id="titleBar">年度用水量计划报送</h4></td>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td align="left">
               <span>年度：</span><select id="ChooseTheAnnual" style="width: 50%;"></select>
            </td>
            <td colspan="6" align="left">
                <span>取水地点：</span><select id="qsdd" class="select-qsdd" style="width: 15%;"></select>
            </td>
        </tr>
        <tr style="font-weight: bold;">
            <td>季度</td>
            <td>月份</td>
            <td>上报计划量(m³)</td>
            <td>月份<br></td>
            <td>上报计划量(m³)</td>
            <td> 月份</td>
            <td>上报计划量(m³)</td>
        </tr>
        <tr>
            <td>第一季度</td>
            <td>1月</td>
            <td class="col-lg-2"><input id="jan" style="text-align: right" type="text" class="form-control" placeholder="" onkeyup="sum();numberCheck(this)"></td>
            <td>2月</td>
            <td class="col-lg-2"><input id="feb" style="text-align: right" type="text" class="form-control" placeholder="" onkeyup="sum();numberCheck(this)"></td>
            <td>3月</td>
            <td class="col-lg-2"><input id="mar" style="text-align: right" type="text" class="form-control" placeholder="" onkeyup="sum();numberCheck(this)"></td>

        </tr>
        <tr>
            <td>第二季度</td>
            <td>4月</td>
            <td class="col-lg-2"><input id="apr" style="text-align: right" type="text" class="form-control" placeholder="" onkeyup="sum();numberCheck(this)"></td>
            <td>5月</td>
            <td class="col-lg-2"><input id="may" style="text-align: right" type="text" class="form-control" placeholder="" onkeyup="sum();numberCheck(this)"></td>
            <td>6月</td>
            <td class="col-lg-2"><input id="jun" style="text-align: right" type="text" class="form-control" placeholder="" onkeyup="sum();numberCheck(this)"></td>

        </tr>
        <tr>
            <td>第三季度</td>
            <td>7月</td>
            <td class="col-lg-2"><input id="jul" style="text-align: right" type="text" class="form-control" placeholder="" onkeyup="sum();numberCheck(this)"></td>
            <td>8月</td>
            <td class="col-lg-2"><input id="aug" style="text-align: right" type="text" class="form-control" placeholder="" onkeyup="sum();numberCheck(this)"></td>
            <td>9月</td>
            <td class="col-lg-2"><input id="sept" style="text-align: right" type="text" class="form-control" placeholder="" onkeyup="sum();numberCheck(this)"></td>

        </tr>
        <tr>
            <td>第四季度</td>
            <td>10月</td>
            <td class="col-lg-2"><input id="oct" style="text-align: right" type="text" class="form-control" placeholder="" onkeyup="sum();numberCheck(this)"></td>
            <td>11月</td>
            <td class="col-lg-2"><input id="nov" style="text-align: right" type="text" class="form-control" placeholder="" onkeyup="sum();numberCheck(this)"></td>
            <td>12月</td>
            <td class="col-lg-2"><input id="dec" style="text-align: right" type="text" class="form-control" placeholder="" onkeyup="sum();numberCheck(this)"></td>

        </tr>

        <tr>
            <td style="font-weight: bold">合计(m³)</td>
            <td colspan="7" align="left" style="text-indent: 15px;"><a id="total" style="display: block; text-decoration: none; cursor: pointer; color: #0b4b97"></a></td>
        </tr>

        <tr>
            <td colspan="11" align="center">
                <input type="button" class="btn btn-info" onclick="addData()" value="提&nbsp;&nbsp;交"/>
            </td>
        </tr>
    </table>
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
        $("#jan").focus();

        $("#ChooseTheAnnual").select2({
            placeholder: '请选择',
            data:[{id: 10001, text: new Date().getFullYear()},
                {id: 10002, text: new Date().getFullYear()+1}]
        });

        // 取水地点
        $.post("${ctx}/yslsb/ysljhbs/yshqsddcd",null,function(result){
            $(".select-qsdd").select2({
                data: result,
                placeholder: '请选择'
            });
        });

    });

    function sum(){
        var sumUp = Number(0);
        $(".form-control").each(function () {
            if($(this).val()!=""){
                sumUp += Number($(this).val());
            }
        });
        $("#total").text(sumUp);
    }

    function addData() {
        var qsdd = $(".select-qsdd").select2("data");
        var qsdds = "";
        if (qsdd != null && JSON.stringify(qsdd) != "{}" && typeof(qsdd) != "undefined" && qsdd.length > 0) {
            qsdds = $("#qsdd option:checked").val();
        }
        if (qsdds == ''){layer.msg('请选取相关的取水地点', {icon: 0});return false;}
        var jan = $("#jan").val();
        if (jan == ''){layer.msg('请输入1月份上报计划量', {icon: 0});return false;}
        var feb = $("#feb").val();
        if (feb == ''){layer.msg('请输入2月份上报计划量', {icon: 0});return false;}
        var mar = $("#mar").val();
        if (mar == ''){layer.msg('请输入3月份上报计划量', {icon: 0});return false;}
        var apr = $("#apr").val();
        if (apr == ''){layer.msg('请输入4月份上报计划量', {icon: 0});return false;}
        var may = $("#may").val();
        if (may == ''){layer.msg('请输入5月份上报计划量', {icon: 0});return false;}
        var jun = $("#jun").val();
        if (jun == ''){layer.msg('请输入6月份上报计划量', {icon: 0});return false;}
        var jul = $("#jul").val();
        if (jul == ''){layer.msg('请输入7月份上报计划量', {icon: 0});return false;}
        var aug = $("#aug").val();
        if (aug == ''){layer.msg('请输入8月份上报计划量', {icon: 0});return false;}
        var sept = $("#sept").val();
        if (sept == ''){layer.msg('请输入9月份上报计划量', {icon: 0});return false;}
        var oct = $("#oct").val();
        if (oct == ''){layer.msg('请输入10月份上报计划量', {icon: 0});return false;}
        var nov = $("#nov").val();
        if (nov == ''){layer.msg('请输入11月份上报计划量', {icon: 0});return false;}
        var dec = $("#dec").val();
        if (dec == ''){layer.msg('请输入12月份上报计划量', {icon: 0});return false;}
        var sbnd = $("#ChooseTheAnnual option:checked").text();
        var sumUp = Number(0);
        $(".form-control").each(function () {
            if($(this).val()!=""){
                sumUp += Number($(this).val());
            }
        });

        $.post("${ctx}/yslsb/ysljhbs/addData", {
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
            'svo.sbnd':sbnd,
            'svo.ysljhz':sumUp,
            'svo.sydjxh':qsdds
        }, function (result) {
            layer.msg('报送成功', {icon: 1});
            $(".form-control").each(function () {
                if($(this).val()!=""){
                    $(this).val("");
                    $("#total").text("");
                }
            });
        });
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
</script>

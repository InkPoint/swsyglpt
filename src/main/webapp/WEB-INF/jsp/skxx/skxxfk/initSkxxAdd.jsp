<%--
  Created by IntelliJ IDEA.
  User: WangPengWen
  Date: 2018/3/24
  Time: 09:03
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@include file="../../common/taglibs.jsp" %>
<html>
<head>
    <title>税款信息反馈新增</title>
    <%@include file="../../common/include-head.jsp" %>
    <style>
        /*Modal分割线*/
        .hr-line-dashed {
            border-top: 1px dashed #e7eaec;
            color: #fff;
            background-color: #fff;
            height: 1px;
            margin: 15px 0
        }
        .txinput{
            width: 240px;
            height: 29px;
        }
        .file-manager .hr-line-dashed {
            margin: 15px 0
        }
        .modal.fade.in{
            top:120px;
        }
        .checknull{
            border:1px solid red
        }
    </style>
</head>
<body>
<form id="tablevalidation" method="post" class="form-horizontal">
<table class="table table-bordered table-striped" style="width: 98%; margin:35px auto;">
    <thead>
        <tr>
            <td  colspan="8">用水量报送 / 信息录入</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>登记序号:</td>
            <td colspan="3">
                <input type="text" id="djxh" name="djxh" class="form-control" required="true" >
            </td>
            <td>纳税人识别号</td>:</td>
            <td colspan="3"><input type="text" id="nsrsbh" name="nsrsbh" class="form-control" required="true" maxlength="20"></td>
        </tr>
        <tr>
            <td>纳税人名称:</td>
            <td colspan="3"><input type="text" id="nsrmc" name="nsrmc" class="form-control"></td>
            <td>电子税票号码</td>:</td>
            <td colspan="3"><input type="text" id="dzsphm" name="nsrsbh" class="form-control"></td>
        </tr>
        <tr>
            <td>税款所属期期起:</td>
            <td colspan="3">
                <div id="sksssqqid" class="input-group date form_date col-sm-10"
                     data-date-format="yyyy/mm/dd"
                     data-link-format="yyyy/mm/dd">
                    <input id="sksssqq" class="form-control" type="text" name="sksssqq"
                           readonly>
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
            </td>
            <td>税款所属期期止:</td>
            <td>
                <div id="sksssqzid" class="input-group date form_date  col-sm-10"
                     data-date-format="yyyy/mm/dd"
                     data-link-format="yyyy/mm/dd">
                    <input id="sksssqz" class="form-control" type="text" name="sksssqz"
                           readonly>
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
            </td>
        </tr>
        <tr>
            <td>税款缴纳金额:</td>
            <td colspan="3"><input type="text" id="skjnje" name="skjnje" class="form-control"></td>
            <td>核查税款金额</td>:</td>
            <td colspan="3"><input type="text" id="hcskje" name="hcskje" class="form-control" disabled></td>
        </tr>
        <tr>
            <td>反馈人:</td>
            <td colspan="3"><input type="text" id="fkr" name="fkr" value="${username}" class="form-control" disabled></td>
            <td>核查人:</td>
            <td colspan="3"><input type="text" id="hcr" name="hcr" class="form-control" disabled></td>
        </tr>
        <tr>
            <td>反馈时间:</td>
            <td colspan="3">
                <div id="fksjid" class="input-group date form_date  col-sm-10"
                     data-date-format="yyyy/mm/dd"
                     data-link-format="yyyy/mm/dd">
                    <input id="fksj" class="form-control" type="text" name="${dqrq}"
                           disabled >
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
            </td>
            <td>核查时间</td>:</td>
            <td colspan="3">
                <div id="hcsjid" class="input-group date form_date  col-sm-10"
                     data-date-format="yyyy/mm/dd"
                     data-link-format="yyyy/mm/dd">
                    <input id="hcsj" class="form-control" type="text" name="hcsj"
                           disabled>
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
            </td>
        </tr>
        <tr>
            <td colspan="8" align="center">
                <button type="button" class="btn btn-info"
                        onclick="window.location.href='${ctx}/skxx/skxxfk/initSkxxfk'">返&nbsp;&nbsp;&nbsp;回
                </button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button" class="btn btn-info" onclick="saves();">保&nbsp;&nbsp;&nbsp;存</button>
            </td>
        </tr>
    </tbody>
</table>
</form>
</body>
</html>
<script>
    //核定书编号
    var hdsbh = "${param.hdsbh}";
    //反馈人
    var fkr ="${usercode}";
    $(function () {
        //初始化日期
        laydate.render({
            elem: '#sksssqq'
            ,format:'yyyy/MM/dd'
        });
        laydate.render({
            elem: '#sksssqz'
            ,format:'yyyy/MM/dd'
        });
        laydate.render({
            elem: '#fksj'
            ,format:'yyyy/MM/dd'
        });
        laydate.render({
            elem: '#hcsj'
            ,format:'yyyy/MM/dd'
        });
        //初始化日期
        $("#sksssqq,#sksssqz,#fksj,#hcsj").attr('value', getNowFormatDate());

        $("#skjnje").blur(function(){
            var skjnjeReg = /^[0-9]+(.[0-9]{2}])?$/;
            var skjnje = $("#skjnje").val();
            if(skjnjeReg.test(skjnje)){
                $("#skjnje").val(parseFloat(skjnje).toFixed(2));
            }
        });
    });

    //将表格数据和表单数据全部发送到后台
    function saves() {
        if(!isCheck()) return;
        //登记序号
        var djxh = $("#djxh").val();
        //纳税人识别号
        var nsrsbh = $("#nsrsbh").val();
        //纳税人识别号
        var nsrmc = $("#nsrmc").val();
        //电子税票号码
        var dzsphm = $("#dzsphm").val();
        //税款所属期起
        var sksssqq = $("#sksssqq").val();
        //税款所属期止
        var sksssqz= $("#sksssqz").val();
        //税款缴纳金额
        var skjnje = $("#skjnje").val();
        //核查税款金额
        var hcskje = $("#hcskje").val();
        //反馈人
        //  var fkr = $("#fkr").val();
        //核查人
        var hcr = $("#hcr").val();
        //反馈时间
        var fksj = $("#fksj").val();
        //核查时间
        var hcsj = $("#hcsj").val();
        //提交参数
        var sub = {
            //核定书编号
            'svo.hdsbh':hdsbh,
            //登记序号
            'svo.djxh': djxh,
            //纳税人识别号
            'svo.nsrsbh': nsrsbh,
            //纳税人名称
            'svo.nsrmc': nsrmc,
            //税款所属期起
            'svo.skssqq': sksssqq,
            //税款所属期止
            'svo.skssqz': sksssqz,
            //税款缴纳金额
            'svo.skjnje': skjnje,
            //电子税票号码
            'svo.dzsphm': dzsphm,
            //反馈人
            'svo.fkr': fkr,
            //核查人
            'svo.hcr': hcr,
            //反馈时间
            'svo.fksj': fksj,
            //核查时间
            'svo.hcsj': hcsj,
            //核查税款金额
            'svo.hcskje': hcskje
        };
        //提交url
        var myurl = "${ctx}/skxx/skxxfk/newaddition";
        //成功方法
        $.ajax({
            contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
            url: myurl,
            data: sub,
            type:'post',
            dataType:'json',
            success: function(msg){
                layer.alert("Data Saved: " + msg);
                setTimeout(function () {
                    //页面跳转
                    window.location.href = '${ctx}/skxx/skxxfk/initSkxxfk';
                }, 3000);
            },error:function(){
                layer.alert("Data Saved:新增失败！");
            }
        });
    }

    function isCheck(){
        //登记序号
        var djxh = $("#djxh").val();
        //纳税人识别号
        var nsrsbh = $("#nsrsbh").val();
        //纳税人识别号
        var nsrmc = $("#nsrmc").val();
        //电子税票号码
        var dzsphm = $("#dzsphm").val();
        //税款所属期起
        var sksssqq = $("#sksssqq").val();
        //税款所属期止
        var sksssqz= $("#sksssqz").val();
        //税款缴纳金额
        var skjnje = $("#skjnje").val();
        //核查税款金额
        var hcskje = $("#hcskje").val();
        //反馈时间
        var fksj = $("#fksj").val();
        //核查时间
        var hcsj = $("#hcsj").val();

        var valid = true;
        var numReg = /^\d+(\.{0,2}\d+){0,2}$/;
        //1.登记序号
        if(djxh.length==0){
            layer.alert("登记序号不能为空！");
            $("#djxh").focus();
            valid = false;
            return false;
        }else if(!numReg.test(djxh)){
            layer.alert("登记序号只能由数字组成！");
            $("#djxh").val("")
            $("#djxh").focus();
            valid = false;
            return false;
        }

        //2.纳税人识别号
        var sbhReg=/^[1-9A-Z][A-Za-z0-9]+$/;
        if(nsrsbh.length==0){
            layer.alert("纳税人识别号不能为空！");
            $("#nsrsbh").focus();
            valid = false;
            return false;
        }else if(!sbhReg.test(nsrsbh)){
            layer.alert("纳税人识别号只能由数字和字母组成！");
            $("#nsrsbh").val("")
            $("#nsrsbh").focus();
            valid = false;
            return false;
        }else if(nsrsbh.length>20){
            layer.alert("纳税人识别号不能大于20字符！");
            $("#nsrsbh").val("")
            $("#nsrsbh").focus();
            valid = false;
            return false;
        }

        //3.纳税人名称
        if(nsrmc.length==0){
            layer.alert("纳税人名称不能为空！");
            $("#nsrmc").focus();
            valid = false;
            return false;
        }else if(nsrmc.length>300){
            layer.alert("纳税人名称不能大于300字符！");
            $("#nsrmc").val("")
            $("#nsrmc").focus();
            valid = false;
            return false;
        }

        //4.电子票证号码
        var dzpzhmReg=/^[0-9]*$/;
        if(dzsphm.length==0){
            layer.alert("电子票证号码不能为空！");
            $("#dzsphm").focus();
            valid = false;
            return false;
        } else if(dzsphm.length>0){
            if(!dzpzhmReg.test(dzsphm)){
                layer.alert("电子票证号码只能由数字组成！");
                $("#dzsphm").val("")
                $("#dzsphm").focus();
                valid = false;
                return false;
            }else if(dzsphm.length>20){
                layer.alert("纳税人识别号不能大于20字符！");
            $("#dzsphm").val("")
            $("#dzsphm").focus();
            valid = false;
            return false;
            }
        }

        //4.核查税款金额
        var skjnjeReg = /^\d+(\.{0,2}\d+){0,2}$/;
        if(skjnje.length==0){
            layer.alert("税款金额不能为空！");
            $("#skjnje").focus();
            valid = false;
            return false;
        }else if(!skjnjeReg.test(skjnje)){
            layer.alert("税款金额必须为非负数！");
            $("#skjnje").val("")
            $("#skjnje").focus();
            valid = false;
            return false;
        }
        return valid;
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

    //获取当前日期的(后一天)时间
    function getAfterTheTime() {
        var date = new Date();
        var tung = "/";
        var month = date.getMonth() + 1;
        var strDate = date.getDate() + 1;
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 1 && strDate <= 9) {
            strDate = "0" + strDate
        }
        var currentTime = date.getFullYear() + tung + month + tung + strDate;
        return currentTime;
    }
</script>



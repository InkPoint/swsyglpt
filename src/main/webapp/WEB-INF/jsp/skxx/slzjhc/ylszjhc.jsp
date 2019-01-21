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
    <title>用水量征缴核查</title>
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
            width: 180px;
            height: 29px;
        }
        .file-manager .hr-line-dashed {
            margin: 15px 0
        }
        .modal.fade.in{
            top:120px;
        }
    </style>
</head>
<body>


</select>
<form id="validationForm" method="post" class="form-horizontal">
    <table class="table table-bordered table-striped" style="width: 98%; margin:35px auto;">
        <thead>
        <tr>
            <td  colspan="8">用水量报送 / 信息录入</td>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>登记序号:</td>
            <td colspan="3"><input type="text" id="djxh" name="djxh" class="form-control" disabled></td>
            <td>纳税人识别号</td>:</td>
            <td colspan="3"><input type="text" id="nsrsbh" name="nsrsbh" class="form-control" disabled></td>
        </tr>
        <tr>
            <td>纳税人名称:</td>
            <td colspan="3"><input type="text" id="nsrmc" name="nsrmc" class="form-control" disabled></td>
            <td>电子税票号码</td>:</td>
            <td colspan="3"><input type="text" id="dzsphm" name="dzsphm" class="form-control" disabled></td>
        </tr>
        <tr>
            <td>税款所属期期起:</td>
            <td colspan="3">
                <div id="sksssqqid" class="input-group date form_date col-sm-10"
                     data-date-format="yyyy/mm/dd"
                     data-link-format="yyyy/mm/dd">
                    <input id="sksssqq" class="form-control" type="text" name="sksssqq"
                           disabled>
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
                           disabled>
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
            </td>
        </tr>
        <tr>
            <td>税款缴纳金额:</td>
            <td colspan="3"><input type="text" id="skjnje" name="skjnje" class="form-control" disabled></td>
            <td>核查税款金额</td>:</td>
            <td colspan="3"><input type="text" id="hcskje" name="hcskje" class="form-control" ></td>
        </tr>
        <tr>
            <td>反馈人:</td>
            <td colspan="3"><input type="text" id="fkr" name="fkr" class="form-control" disabled></td>
            <td>核查人:</td>
            <td colspan="3"><input type="text" id="hcr" name="hcr" class="form-control" value="${username}" disabled></td>
        </tr>
        <tr>
            <td>反馈时间:</td>
            <td colspan="3">
                <div id="fksjid" class="input-group date form_date  col-sm-10"
                     data-date-format="yyyy/mm/dd"
                     data-link-format="yyyy/mm/dd">
                    <input id="fksj" class="form-control" type="text" name="fksj"
                           disabled>
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
                    <input id="hcsj" class="form-control" value="${dqrq}" disabled type="text" name="hcsj">
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
            </td>
        </tr>
        <td>反馈结果类型:</td>
        <td colspan="3" id="fkjglx"></td>
        <%--<td colspan="3"><select class="input-fkjglx col-sm-10" id="fkjglx" name="fkjglx"></select></td>--%>
        <td>核查结果类型:</td>
        <td colspan="3"><select class="input-hcjglx col-sm-10" id="hcjglx" name="hcjglx"></select></td>
        </tbody>
    </table>
    <div style="position: absolute; bottom: 20px;  width: 100%; height: 50px;  text-align: center;">
        <button type="button" class="btn btn-info"
                onclick="window.location.href='${ctx}/skxx/slzjhc/initSlzjhc'">返&nbsp;&nbsp;&nbsp;回
        </button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-info" onclick="saves();">保&nbsp;&nbsp;&nbsp;存</button>
    </div>
</form>
</body>
</html>
<script>
    //核定书编号
    var hdsbh = "${param.hdsbh}";
    //核查人
    var hcr ="${usercode}";
    $(function () {
        laydate.render({
            elem: '#hcsj'
            ,format:'yyyy/MM/dd'
        });
       // $("#hcsj").attr('value', getNowFormatDate());
        //核查结果类型
        $.post("${ctx}/skxx/slzjhc/hcjglxcd", null, function (data) {
            $(".input-hcjglx").select2({
                data: data,
                placeholder: '请选择',
                allowClear: true
            });
        });

        $("#hcskje").blur(function(){
            var hcskjeReg = /^[0-9]+(.[0-9]{2}])?$/;
            var hcskje = $("#hcskje").val();
            if(hcskjeReg.test(hcskje)){
                $("#hcskje").val(parseFloat(hcskje).toFixed(2));
            }
        });
    });

    //编辑初始化数据
    $(function(){
        $.ajax({
            contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
            url: '${ctx}/skxx/slzjhc/doFkxxInit',
            data: {'hdsbh':hdsbh},
            type:'post',
            dataType:'json',
            success: function(json){
                //反馈结果类型代码
                var fkjglxdm =json[0].FKJGLX;
                //登记序号
                $("#djxh").val(json[0].DJXH);
                //纳税人识别号
                $("#nsrsbh").val(json[0].NSRSBH);
                //纳税人名称
                $("#nsrmc").val(json[0].NSRMC);
                //电子税票号码
                $("#dzsphm").val(json[0].DZSPHM);
                //税款所属期起
                $("#sksssqq").val(json[0].SKSSQQ);
                //税款所属期止
                $("#sksssqz").val(json[0].SKSSQZ);
                //税款缴纳金额
                $("#skjnje").val(json[0].SKJNJE);
                //反馈人
                $("#fkr").val(json[0].FKR);
                //反馈时间
                $("#fksj").val(json[0].FKSJ);
                //核查结果类型
                $("#fkjglx").text(json[0].FKJGLXMC);
                //核查金额
                $("#hcskje").val(json[0].HCSKJE);
                //核查人
               // $("#hcr").val(json[0].HCR);
                //核查时间
                //$("#hcsj").val(json[0].HCSJ);
            },error:function(){
                layer.alert("Data Saved:数据初始化失败！");
            }
        });
    });

    //将表格数据和表单数据全部发送到后台
    function saves() {
        //校验
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
        var fkr = $("#fkr").val();
        //核查人
        //var hcr = $("#hcr").val();
        //反馈时间
        var fksj = $("#fksj").val();
        //核查时间
        var hcsj = $("#hcsj").val();
        //核查结果类型
        var hcjglx = $("#hcjglx").val();

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
            'svo.hcskje': hcskje,
            //核查结果类型
            'svo.hcjglx': hcjglx
        };
        //提交url
        var myurl = "${ctx}/skxx/slzjhc/doFkxxEdit";
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
                    window.location.href = '${ctx}/skxx/slzjhc/initSlzjhc';
                }, 1500);

            },error:function(){
                layer.alert("Data Saved:核查失败！");
            }
        });
    }

    function isCheck(){
        //核查税款金额
        var hcskje = $("#hcskje").val();
        //核查时间
        var hcsj = $("#hcsj").val();

        var valid = true;
        var numReg = /^[0-9]*$/;

        //4.核查税款金额
        var hcskjeReg =  /^\d+(\.{0,2}\d+){0,2}$/;
        if(hcskje.length==0){
            layer.alert("税款金额不能为空！");
            $("#hcskje").focus();
            valid = false;
            return false;
        }else if(!hcskjeReg.test(hcskje)){
            layer.alert("税款金额必须是非负数！");
            $("#hcskje").val("")
            $("#hcskje").focus();
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

<%--
  Created by IntelliJ IDEA.
  User: BoyiSun
  Date: 2018/3/26
  Time: 15:09
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@include file="../../common/taglibs.jsp" %>
<html>
<head>
    <title>用水量核定</title>
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
<!--1.用数量报送主表信息-->
<form id="tablevalidation" method="post" class="form-horizontal">
    <table class="table table-bordered table-striped" style="width: 98%; margin:20px auto;">
        <thead>
        <tr>
            <td  colspan="8">用水量核定 / 信息核定</td>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>水行政主管部门:</td>
            <td><input type="text" id="${sxzzgbm}" name="sxzzgbm" value="${sxzzgbmmc}" class="form-control" disabled></td>
            <td>取水所属期起:</td>
            <td>
                <div id="qsssqq" class="input-group date form_date col-sm-10"
                     data-date-format="yyyy/mm/dd"
                     data-link-format="yyyy/mm/dd">
                    <input id="qsssqqid" class="form-control" type="text" name="qsssqqjy" value="${qslssqq}" disabled>
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
            </td>
            <td>取水所属期止:</td>
            <td>
                <div id="qsssqz" class="input-group date form_date  col-sm-10"
                     data-date-format="yyyy/mm/dd"
                     data-link-format="yyyy/mm/dd">
                    <input id="qsssqzid" class="form-control" type="text" name="qsssqzjy" value="${qslssqz}" disabled>
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
            </td>
            <td>抄表日期:</td>
            <td>
                <div id="cbrq" class="input-group date form_date  col-sm-10" data-date-format="yyyy/mm/dd"  data-link-format="yyyy/mm/dd">
                    <input id="cbrqid" class="form-control" value="${cbrq}" type="text" name="cbrqjy" readonly>
                            <span class="input-group-addon">
                                <span class="glyphicon glyphicon-calendar"></span>
                            </span>
                </div>
            </td>
        </tr>
        <tr>
            <td>纳税人识别号:</td>
            <td>
                <input type="text" id="nsrsbh" name="nsrsbh" value="${nsrsbh}" class="form-control " style="float: left;" disabled>
            </td>
            <td>纳税人名称:</td>
            <td colspan="3">
                <input type="text"   id="nsrmc" name="nsrmc" value="${nsrmc}" class="form-control" style="float: left;" disabled>
            </td>
            <td>取水计划:</td>
            <td> <input type="text" id="qsjh" name="qsjh" value="${qsjh}" class="form-control" disabled></td>
        </tr>
        <tr>
            <td>联系人:</td>
            <td><input type="text" id="lxr" name="bsyxm" value="${lxr}"  class="form-control"></td>
            <td>联系方式:</td>
            <td><input type="text" id="lxfs" name="bsylxdh" value="${lxfs}" class="form-control" maxlength="11"></td>
            <td>水源类型:</td>
            <td><input type="text" id="${sylx}" name="sylx" value="${sylxmc}" class="form-control" disabled> </td>
            <td>取用水行业:</td>
            <td><input type="text" id="${qyshy}" name="qyshymc" value="${qyshymc}" class="form-control" disabled> </td>
        </tr>
        <tr>
            <td>水源区域:</td>
            <td><input type="text" id="${syqy}" name="syqysmc" value="${syqymc}" class="form-control" disabled></td>
            <td>特殊用水类别:</td>
            <td><input type="text" id="${tsyslb}" name="tsyslb" value="${tsyslbmc}"  class="form-control" disabled></td>
            <td>地下水超采区类型:</td>
            <td><input type="text" id="${dxsccqlx}" name="dxsccqlx" value="${dxsccqlxmc}" class="form-control" disabled></td>
            <td>地下水取水地点供水管网:</td>
            <td><input type="text" id="${dxsqsddgsgw}" name="dxsqsddgsgw" value="${sfmc}" class="form-control" disabled></td>
        </tr>

        <tr>
            <td>纳税人签章:</td>
            <td><input type="text" id="nsrqz" name="nsrqz" value="${nsrmc}" class="form-control" disabled></td>
            <td>水量核定人签章:</td>
            <td>
                <input type="text" id="${slhdrqz}" name="slhdrqz" value="${slhdrqzmc}" class="form-control" disabled>
            </td>
            <td>税务机关受理人:</td>
            <td><input type="text" id="swjgslr" name="swjgslrjy" class="form-control" disabled></td>
            <td>受理日期:</td>
            <td>
                <div id="slrq" class="input-group date form_date col-sm-10"
                     data-date-format="yyyy/mm/dd"
                     data-link-format="yyyy/mm/dd">
                    <input id="slrqid" class="form-control" type="text" name="slrqjy"   readonly>
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
            </td>
        </tr>
        <tr>
            <td>核定结果类型:</td>
            <td><select class="input-hdjglx col-sm-10" id="hdjglx" name="hdjglx" ></select></td>
            <td>用水量核定情况:</td>
            <td colspan="5"> <input type="text" id="yslhdqk" name="yslhdqk" class="form-control"></td>
        </tr>
        </tbody>
    </table>
    <!--2.用水量报送明细表-->
    <div  class="col-md-12 container" style="margin-top: -22px;height: 300px;">
        <table class="table table-striped table-bordered table-hover" id="mytab" data-height="300"></table>
        <!--3.保存放回按钮-->
        <div style="; bottom: 20px;  width: 100%; height: 50px;  text-align: center;">
            <button type="button" class="btn btn-info"
                    onclick="window.location.href='${ctx}/yslhd/yslhds/initYslhd'">返&nbsp;&nbsp;&nbsp;回
            </button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" class="btn btn-info" onclick="saves();">保&nbsp;&nbsp;&nbsp;存</button>
        </div>
    </div>

</form>
<!--4.附件上传-->
<div class="modal fade" id="fileup" role="dialog"  aria-labelledby="fileupModalLabel" aria-hidden="true">
    <div style="width:1100px;" class="modal-dialog">
        <div class="modal-body" style="padding-top:80px;">
            <!--图片预览-->
            <div role="tabpanel" class="tab-pane" id="tpyl" style=" position: relative;">
                <div style="position: absolute;  right: -10px; top: -10px; z-index: 9999;">
                    <div style=" text-align: center;"  data-dismiss="modal" aria-hidden="true">
                        <img src="${ctx}/bootstrap/images/close.png" width="30" height="30" />
                    </div>
                </div>
                <div id="tpyls" style="min-height: 400px; padding-top: 120px; padding: 20px; background: #f3f3f3; margin: 0 auto; text-align: center; border: 3px solid #cccccc;" >
                    <img id="picyl" src=""  border="0px" width="600" height="400"/>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>
<script>
    var xxcjid = "${param.xxcjid}";
    var shrdm="${shrdm}";
    var mxxh;
    var ref = "";
    $(function () {
        //初始化日期
        laydate.render({
            elem: '#slrqid'
            ,format:'yyyy/MM/dd'
        });
        $("#slrqid").attr('value', getNowFormatDate());

        //核定结果类型（下拉菜单）
        $.post("${ctx}/yslhd/yslhds/hdjglx", null, function (data) {
            $(".input-hdjglx").select2({
                data: data,
                placeholder: '请选择',
                allowClear: true
            });
        });
    });

    //初始化(下拉菜单、表)
    $(function () {
        //初始化表
        inittabs();
    });
    //主表
    function inittabs() {
        //先销毁表格
        $('#mytab').bootstrapTable('destroy');
        $('#mytab').bootstrapTable({
            url: "${ctx}/yslhd/yslhds/getYslbsMx",//获取数据的Select地址
            sidePagination: "server",//表示服务端请求(分页方式：client客户端分页，server服务端分页)
            toolbar: '#toolbar',
            pagination: true, //是否分页
            singleSelect: true,
            pageNumber: 1, //初始化加载第一页，默认第一页
            buttonsAlign: 'right', //按钮对齐方式
            pageSize: 10, //每页的记录行数
            onlyInfoPagination: false,
            cache: false,//是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性
            pageList: [10, 20, 30, 50], //可供选择的每页行数
            paginationLoop: true,//设置为true启用分页条无线循环的功能
            clickToSelect: true, //是否启用点击选中行
            uniqueId: "mxxh", //每一行的唯一标识，一般为主键列
            queryParams: function (params) {
                return {
                    'svo.xxcjid': xxcjid,
                    offset: (params.offset / params.limit) + 1,
                    limit: params.limit
                }
            },
            columns: [{
                field: 'ck',
                checkbox: true,
                align: 'center',
                valign: 'middle'
            },
                {
                    field: 'qskdd',
                    align: 'left',
                    halign: 'center',
                    title: '取水口地点'
                }, {
                    field: 'bh',
                    align: 'center',
                    halign: 'center',
                    title: '编号'
                }, {
                    field: 'sqbds',
                    align: 'right',
                    halign: 'center',
                    title: '上期表底数',
                    formatter:function(value, row, index, field){
                        return '<input type="text"  name="sqbds" value="'+value+'" class="form-control"  disabled>';
                    }

                }, {
                    field: 'bqbds',
                    align: 'right',
                    halign: 'center',
                    title: '本期表底数',
                    formatter:function(value, row, index, field){
                        return '<input type="text"  name="bqbds" value="'+value+'" class="form-control" disabled>';
                    }
                }, {
                    field: 'bqqsl',
                    align: 'right',
                    halign: 'center',
                    title: '本期取水量',
                    formatter:function(value, row, index, field){
                        return '<input type="text"  name="bqqsl" value="'+value+'" class="form-control" disabled>';
                    }
                }, {
                    field: 'ljqsl',
                    align: 'right',
                    halign: 'center',
                    title: '累计取水量',
                    formatter:function(value, row, index, field){
                        return '<input type="text"  name="ljqsl" value="'+value+'" class="form-control" disabled>';
                    }
                }, {
                    field: 'jhqsl',
                    align: 'right',
                    halign: 'center',
                    title: '计划取水量',
                    formatter:function(value, row, index, field){
                        return '<input type="text"  name="jhqsl" value="'+value+'" class="form-control" disabled>';
                    }
                }, {
                    field: 'hddjhnqsl',
                    align: 'right',
                    halign: 'center',
                    title: '核定的计划内取水量',
                    formatter:function(value, row, index, field){
                        return '<input type="text"  name="hddjhnqsl" value="'+value+'" class="form-control" disabled>';
                    }
                }, {
                    field: 'hddcjhqsl',
                    align: 'right',
                    halign: 'center',
                    title: '核定的超计划取水量',
                    formatter:function(value, row, index, field){
                        return '<input type="text"  name="hddcjhqsl" value="'+value+'" class="form-control" disabled>';
                    }
                }
                ,{
                    field: 'fileurl',
                    align: 'right',
                    halign: 'center',
                    title: '附件url',
                    formatter:function(value, row, index, field){
                        return '<input type="text" name="fileurl" value="'+value+'" class="form-control" disabled >';
                    }
                }
                , {
                    field: 'cz',
                    align: 'right',
                    halign: 'center',
                    title: '操作',
                    formatter:function(value, row, index, field){
                        return '<button id="ckmxbtn" type="button" class="btn btn-link" data-toggle="modal" data-target="#fileup" onclick="getPicView(\'' + row.mxxh + '\')">附件</button>'
                    }
                }
            ]
        });
    };

    //图片预览
    function getPicView(mxxh){
        $.ajax({
            contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
            url: '${ctx}/yslhd/yslhds/getPicView',
            data: {'mxxh':mxxh},
            type:'post',
            dataType:'json',
            success: function(json){
                if(json.length==0){
                    htlui.msg("图片预览失败");
                    return false;
                } else if(json.length>0){
                    var _fileurl = json[0].FILEURL;
                    var _src = '${ctx}/down/'+_fileurl;
                    //console.log("_fileurl=="+_fileurl+"dsfhukd"+JSON.stringify(_src));
                    $("#picyl").attr('src',_src);
                }
            },error:function(){
                layer.alert("附件加载失败！");
            }
        });
    }
    //保存修改后的信息采集(表头)
    function saves() {
        if(!(isCheck()) ) return;

        //核定结果类型
        var hdjglx = $("#hdjglx").select2("data");
        var hdjglxcon = "";
        if (hdjglx != null && JSON.stringify(hdjglx) != "{}" && typeof(hdjglx) != "undefined" && hdjglx.length > 0) {
            hdjglxcon = hdjglx[0].id;
        }
        //水量核定人签章
        var slhdrqz=$("input[name='slhdrqz']").attr("id");
        //税务机关受理人
        var swjgslr = $("#swjgslr").val();
        //受理日期
        var slrq = $("#slrqid").val();
        //用水量核定情况
        var hdqk = $("#yslhdqk").val();
        //提交参数
        var sub = {
            //用数量核定报送id
            'svo.xxcjid': xxcjid,
            //水量核定人签章
            'svo.slhdrqz': slhdrqz,
            //税务机关受理人
            'svo.swjgslr': swjgslr,
            //受理日期
            'svo.slrq': slrq,
            //核定结果类型
            'svo.hdjglxdm': hdjglxcon,
            //用水量核定情况
            'svo.hdqk': hdqk
        };
        //提交url
        var myurl = "${ctx}/yslhd/yslhds/doYslhd";
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
                    window.location.href = '${ctx}/yslhd/yslhds/initYslhd';
                }, 1000);
            },error:function(){
                layer.alert("Data Saved: 核定失败！");
            }
        });
    }

    //主表校验
    function isCheck(){
        //用水量核定情况
        var yslhdqk = $("#yslhdqk").val();
        //取水所属期起
        var valid = true;
        //1.水行政主管部门
        if(yslhdqk.length==0){
            layer.alert("用水量核定情况不能为空！");
            $("#yslhdqk").focus();
            valid = false;
            return false;
        }else if(yslhdqk.length>1000){
            layer.alert("用水量核定情况不能大于1000字符！");
            $("#yslhdqk").val("")
            $("#yslhdqk").focus();
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
</script>
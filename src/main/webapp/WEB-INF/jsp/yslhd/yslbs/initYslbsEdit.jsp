<%--
  Created by IntelliJ IDEA.
  User: Sun  BoYi
  Date: 2018/12/18
  Time: 09:03
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@include file="../../common/taglibs.jsp" %>
<html>
<head>
    <title>用水量报送新增</title>
    <%@include file="../../common/include-head.jsp" %>
    <link rel="stylesheet" type="text/css" href="${ctx}/bootstrap/bootstrap-fileinput/css/fileinput.css"/>
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
<!--1.用数量报送主表-->
<form id="tablevalidation" method="post" class="form-horizontal">
    <table class="table table-bordered table-striped" style="width: 98%; margin:20px auto;">
        <thead>
        <tr>
            <td  colspan="8">用水量报送 / 信息录入</td>
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
        </tbody>
    </table>
    <!--2.用水量报送明细表-->
    <div  class="col-md-12 container" style="margin-top: -22px;height: 300px">
        <table class="table table-striped table-bordered table-hover" id="mytab" data-height="300"></table>
        <div style="bottom: 20px;  width: 100%; height: 50px;  text-align: center;">
            <button type="button" class="btn btn-info"
                    onclick="window.location.href='${ctx}/yslhd/yslbs/initYslbs'">返&nbsp;&nbsp;&nbsp;回
            </button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" class="btn btn-info" onclick="saves();">保&nbsp;&nbsp;&nbsp;存</button>
        </div>
    </div>

</form>
<!--附件上传-->
<div class="modal fade" id="fileup" role="dialog" aria-labelledby="fileupModalLabel" aria-hidden="true">
    <div style="width:1100px;" class="modal-dialog">
        <div class="modal-header" style="width:1100px;">
            <!--关闭事件-->
            <div style="position: absolute;  right: -22px; top: 10px; z-index: 9999;">
                <div style=" text-align: center;"  data-dismiss="modal" aria-hidden="true">
                    <img src="${ctx}/bootstrap/images/close.png" width="30" height="30" />
                </div>
            </div>
            <div style=" width: 1100px; margin: 0 auto; font-size: 14px;">
                <ul class="nav nav-tabs" role="tablist">
                    <li role="presentation" class="active">
                        <a href="#tjfj" aria-controls="base" role="tab" data-toggle="tab">
                            添加附件
                        </a>
                    </li>
                    <li role="presentation">
                        <a id="pic" href="#tpyl" aria-controls="amps" role="tab" data-toggle="tab">
                            图片预览
                        </a>
                    </li>
                </ul>
            </div>
            <div class="modal-content" style="width:1100px;">
                <div class="tab-content">
                    <!--图片上传-->
                    <div role="tabpanel" class="tab-pane active" id="tjfj">
                        <div class="tab-content">
                            <div class="modal-body">
                                <table class="table table-bordered table-striped" style="width: 98%; margin:0 auto;">
                                    <tr>
                                        <td>附件</td>
                                        <td colspan="7">
                                            <input id="fileinput" name="fileinput" type="file" multiple class="file-loading">
                                            <input type="hidden" name="rownum" class="form-control" disabled >
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <!--图片预览-->
                    <div role="tabpanel" class="tab-pane" id="tpyl" style=" position: relative;">
                        <div id="tpyls" style="min-height: 400px; padding-top: 120px; padding: 20px; background: #f3f3f3; margin: 0 auto; text-align: center; border: 3px solid #cccccc;" >
                            <img id="picyl" src=""  border="0px" width="600" height="400"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>
<script>
    var xxcjid="${xxcjid}";//主表id
    $(function () {
        //初始化日期
        laydate.render({
            elem: '#cbrqid'
            ,format:'yyyy/MM/dd'
        });
        laydate.render({
            elem: '#slrqid'
            ,format:'yyyy/MM/dd'
        });
        $("#cbrqid,#slrqid").attr('value', getNowFormatDate());

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
            url: "${ctx}/yslhd/yslbs/getEditMx",//获取数据的Select地址
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
            //clickToSelect: true, //是否启用点击选中行
            uniqueId: "mxxh", //每一行的唯一标识，一般为主键列
            queryParams: function (params) {
                return {
                    'svo.xxcjid': xxcjid,
                    offset: (params.offset / params.limit) + 1,
                    limit: params.limit
                }
            },
            columns: [
                {
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
                        return '<input type="text"  name="sqbds" value="'+value+'" class="form-control" >';
                    }

                }, {
                    field: 'bqbds',
                    align: 'right',
                    halign: 'center',
                    title: '本期表底数',
                    formatter:function(value, row, index, field){
                        return '<input type="text"  name="bqbds" value="'+value+'" class="form-control" >';
                    }
                }, {
                    field: 'bqqsl',
                    align: 'right',
                    halign: 'center',
                    title: '本期取水量',
                    formatter:function(value, row, index, field){
                        return '<input type="text"  name="bqqsl" value="'+value+'" class="form-control" >';
                    }
                }, {
                    field: 'ljqsl',
                    align: 'right',
                    halign: 'center',
                    title: '累计取水量',
                    formatter:function(value, row, index, field){
                        return '<input type="text"  name="ljqsl" value="'+value+'" class="form-control" >';
                    }
                }, {
                    field: 'jhqsl',
                    align: 'right',
                    halign: 'center',
                    title: '计划取水量',
                    formatter:function(value, row, index, field){
                        return '<input type="text"  name="jhqsl" value="'+value+'" class="form-control" >';
                    }
                }, {
                    field: 'hddjhnqsl',
                    align: 'right',
                    halign: 'center',
                    title: '核定的计划内取水量',
                    formatter:function(value, row, index, field){
                        return '<input type="text"  name="hddjhnqsl" value="'+value+'" class="form-control" >';
                    }
                }, {
                    field: 'hddcjhqsl',
                    align: 'right',
                    halign: 'center',
                    title: '核定的超计划取水量',
                    formatter:function(value, row, index, field){
                        return '<input type="text"  name="hddcjhqsl" value="'+value+'" class="form-control" >';
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
                        return '<button  type="button" class="btn btn-link fileup" data-toggle="modal" data-target="#fileup" data-row="'+index+'">附件</button>';
                    }
                }
            ]
        });
    };


    //获取行号
    $("#fileup").on('shown.bs.modal',function(e){
        var rownum  =$(e.relatedTarget).parent().parent().index();
        $('input:hidden[name="rownum"]').val(rownum);
        //console.log($(e.relatedTarget).parent().parent().index());
    });

    //文件上传
    $(document).on('ready', function () {
        $("#fileinput").fileinput({
            showUpload: true,                       // 是否显示上传按钮
            showPreview: true,                      // 是否显示预览
            dropZoneEnabled: false,                 // 是否显示拖拽区域
            layoutTemplates:{
                actionUpload:''                      // 移除文件缩略图小图标
            },
            maxFileCount: 1,                         // 最大文件数量
            mainClass: "input-group-lg",
            uploadAsync: true,                       // 默认异步上传
            language: "zh",                          // 语言
            allowedFileExtensions: ['jpg', 'png', 'jpeg'], //允许接受的文件后缀
            maxFileSize: 51200,                      //单位kb  最大文件大小   0 为不限制文件大小
            enctype: 'multipart/form-data',          //模拟form数据类型
            textEncoding:'UTF-8',
            uploadUrl: '${ctx}/yslhd/yslbs/fileUpload'//上传请求地址
        })
        // 异步上传返回结果处理
        $("#fileinput").on('fileuploaded', function (event, data, previewId, index) {
            //console.log(JSON.stringify($('input:hidden[name="rownum"]').val()));
            var _rownum  = $('input:hidden[name="rownum"]').val();

            var getFileName = $("#fileinput").val().split("\\");
            var fileName = getFileName[getFileName.length-1];
            var _fileurl = JSON.stringify(data.response).replace(/\"/g,"")+"/"+fileName;
            //console.log(_fileurl);
            $('#mytab tr[data-index="'+_rownum+'"] > td > input[name=fileurl]').val(_fileurl);
            //var  _url=$('#mytab tr[class="selected"] > td > input[name=fileurl]').val(_fileurl);
            if(_fileurl!=undefined&&_fileurl.length>=0){
                htlui.msg("上传成功");
            }
        });
    });


    $(function(){
        //图片预览
        $('#pic').click(function(){
            var _rownum  = $('input:hidden[name="rownum"]').val();
            //var  _fileurl=$('#mytab tr[class="selected"] > td > input[name=fileurl]').val();
            var  _fileurl=$('#mytab tr[data-index="'+_rownum+'"] > td > input[name=fileurl]').val();

            if(_fileurl==undefined){
                htlui.msg("图片预览失败");
                return;
            }else if(_fileurl!=undefined &&_fileurl.length>0){
                var _src = '${ctx}/down/'+_fileurl;
                $("#picyl").attr('src',_src);
            }
        });

    });

    //将表格数据和表单数据全部发送到后台
    function saves() {
        //alert($("input[name='sylx']").attr("id"));
        //var rows = $('#mytab').bootstrapTable('getSelections');
        // alert(rows[0].fileurl);
        //校验
        if(!(isCheck()&&isCheckMx()) ) return;
        //水行政主管部
        var shzzgb=$("input[name='sxzzgbm']").attr("id");
        //取水所属期起
        var qsssqq = $("#qsssqqid").val();
        //取水所属期止
        var qsssqz = $("#qsssqzid").val();
        //抄表日期
        var cbrq = $("#cbrqid").val();
        //纳税人识别号
        var nsrsbh = $("#nsrsbh").val();
        //纳税人名称
        var nsrmc = $("#nsrmc").val();
        //联系人
        var lxr = $("#lxr").val();
        //联系方式
        var lxfs = $("#lxfs").val();
        //取水计划
        var qsjh = $("#qsjh").val();
        //水源类型
        var sylx=$("input[name='sylx']").attr("id");
        //取用水行业
        var qyshy=$("input[name='qyshymc']").attr("id");
        //水源区
        var syqy=$("input[name='syqysmc']").attr("id");
        //特殊用水类别
        var tsyslb=$("input[name='tsyslb']").attr("id");
        //地下水超采区类型
        var dxsccqlx=$("input[name='dxsccqlx']").attr("id");
        //地下水取水地点供水管网
        var dxsqsddgsgw=$("input[name='dxsqsddgsgw']").attr("id");
        //纳税人签章
        var nsrqz = $("#nsrqz").val();
        //水量核定人签章
        var slhdrqz=$("input[name='slhdrqz']").attr("id");
        //税务机关受理人
        var swjgslr = $("#swjgslr").val();
        //受理日期
        var slrq = $("#slrqid").val();
        //获取明细数据
        var dataArr = getDataList();
        //$('#mytab').bootstrapTable('getData');
        // console.log(JSON.stringify(dataArr));
        //提交参数
        var sub = {
            //获取明细数据
            'datalist': JSON.stringify(dataArr),
            //主键
            'svo.xxcjid':xxcjid,
            //水行政主管部
            'svo.sxzzgbm': shzzgb,
            //取水所属期起
            'svo.qslssqq': qsssqq,
            //取水所属期止
            'svo.qslssqz': qsssqz,
            //抄表日期
            'svo.cbrq': cbrq,
            //纳税人识别号
            'svo.nsrsbh': nsrsbh,
            //纳税人名称
            'svo.nsrmc': nsrmc,
            //联系人
            'svo.lxr': lxr,
            //联系方式
            'svo.lxfs': lxfs,
            //取水计划
            'svo.qsjh': qsjh,
            //水源类型
            'svo.sylx': sylx,
            //取用水行业
            'svo.qyshy': qyshy,
            //超采区类型
            'svo.dxsccqlx': dxsccqlx,
            //地下供水管网
            'svo.dxsqsddgsgw': dxsqsddgsgw,
            //特殊用水类别
            'svo.tsyslb': tsyslb,
            //纳税人签章
            'svo.nsrqz': nsrqz,
            //水量核定人签章
            'svo.slhdrqz': slhdrqz,
            //税务机关受理人
            'svo.swjgslr': swjgslr,
            //受理日期
            'svo.slrq': slrq,
            //水源区域
            'svo.syqy': syqy
        };
        //提交url
        var myurl = "${ctx}/yslhd/yslbs/updateBsEdit";
        //成功方法
        $.ajax({
            contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
            url: myurl,
            data: sub,
            type:'post',
            dataType:'json',
            success: function(msg){
                htlui.msg(msg);
                setTimeout(function () {
                    //页面跳转
                    window.location.href = '${ctx}/yslhd/yslbs/initYslbs';
                }, 3000);
            },error:function(){
                layer.alert("保存失败！");
            }
        });
    }

    //获取明细数据
    function getDataList(){
        var datalist = new Array();
        var rows = $('#mytab').bootstrapTable("getData");
        $("#mytab tr ").each(function(i){
            if(i>=1){
                var _qskdd = $(this).find("td").eq(1).text().trim();
                var _bh = $(this).find("td").eq(2).text().trim();
                var _sqbds = $(this).find("td").eq(3).find("input").val().trim();
                var _bqbds = $(this).find("td").eq(4).find("input").val().trim();
                var _bqqsl = $(this).find("td").eq(5).find("input").val().trim();
                var _ljqsl = $(this).find("td").eq(6).find("input").val().trim();
                var _jhqsl = $(this).find("td").eq(7).find("input").val().trim();
                var _hdjhqsl = $(this).find("td").eq(8).find("input").val().trim();
                var _hdcjhqsl = $(this).find("td").eq(9).find("input").val().trim();
                var _fileurl = $(this).find("td").eq(10).find("input").val().trim();
                var _mxxh = $(this).attr("data-uniqueid");//明细

                //  console.log("_qskdd="+_qskdd+";_bh="+_bh+";_sqbds="+_sqbds+";_bqbds="+_bqbds+";_bqqsl="+_bqqsl+";_ljqsl="+_ljqsl+";_jhqsl="+_jhqsl+";_hdjhqsl="+_hdjhqsl+";_hdcjhqsl="+_hdcjhqsl+";_fileurl="+_fileurl);
                datalist[i] = {
                    qskdd:_qskdd,
                    bh:_bh,
                    sqbds:_sqbds,
                    bqbds:_bqbds,
                    bqqsl: _bqqsl,
                    ljqsl: _ljqsl,
                    jhqsl:_jhqsl,
                    hddjhnqsl:_hdjhqsl,
                    hddcjhqsl: _hdcjhqsl,
                    fileurl: _fileurl,
                    mxxh:_mxxh
                }
            }
        });
        //console.log(JSON.stringify(datalist));
        return datalist
    }

    //明细校验
    function isCheckMx(){
        var valid = true;
        var tabdata = $('#mytab').bootstrapTable("getData");
        if (tabdata.length == 0) {
            layer.alert("请添加相关表信息！");
            return;
        }
        $("#mytab tr ").each(function(i){
            var reg = /^\d+(\.{0,2}\d+){0,2}$/;
            if(i!=0){
                var index =i;

                console.log(JSON.stringify($(this).find("td").eq(10).find("input")));

                var sqbds = $(this).find("td").eq(3).find("input").val().trim();
                var bqbds = $(this).find("td").eq(4).find("input").val().trim();
                var bqqsl = $(this).find("td").eq(5).find("input").val().trim();
                var ljqsl = $(this).find("td").eq(6).find("input").val().trim();
                var jhqsl = $(this).find("td").eq(7).find("input").val().trim();
                var hdjhqsl = $(this).find("td").eq(8).find("input").val().trim();
                var hdcjhqsl = $(this).find("td").eq(9).find("input").val().trim();
                var fileurl = $(this).find("td").eq(10).find("input").val().trim();


                //1.上期表底数
                if(sqbds=='-'||sqbds.length==0){
                    layer.alert("第"+index+"行上期表底数不能为空！");
                    $(this).find("td").eq(3).find("input").focus();
                    valid = false;
                    return false;
                }else if(!reg.test(sqbds)){
                    layer.alert("第"+index+"行上期表底数只能为正实数字！");
                    $(this).find("td").eq(3).find("input").focus();
                    valid = false;
                    return false;
                }
                //2.本期表底数
                if(bqbds=='-'||bqbds.length==0){
                    layer.alert("第"+index+"行本期表底数不能为空！");
                    $(this).find("td").eq(4).find("input").focus();
                    valid = false;
                    return false;
                }else if(!reg.test(bqbds)){
                    layer.alert("第"+index+"行本期表底数只能为正实数！");
                    $(this).find("td").eq(4).find("input").focus();
                    valid = false;
                    return false;
                }

                //3.本期取水量
                if(bqqsl=='-'||bqqsl.length==0){
                    layer.alert("第"+index+"行本期取水量不能为空！");
                    $(this).find("td").eq(5).find("input").focus();
                    valid = false;
                    return false;
                }else if(!reg.test(bqqsl)){
                    layer.alert("第"+index+"行本期取水量只能为正实数！");
                    $(this).find("td").eq(5).find("input").focus();
                    valid = false;
                    return false;
                }
                //4.累计取水量
                if(ljqsl=='-'||ljqsl.length==0){
                    layer.alert("第"+index+"行累计取水量不能正实数！");
                    $(this).find("td").eq(6).find("input").focus();
                    valid = false;
                    return false;
                }else if(!reg.test(ljqsl)){
                    layer.alert("第"+index+"行累计取水量只能为正实数！");
                    $(this).find("td").eq(6).find("input").focus();
                    valid = false;
                    return false;
                }
                //5.计划取水量
                if(jhqsl=='-'||jhqsl.length==0){
                    layer.alert("第"+index+"行计划取水量不能为空！");
                    $(this).find("td").eq(7).find("input").focus();
                    valid = false;
                    return false;
                }else if(!reg.test(jhqsl)){
                    layer.alert("第"+index+"行计划取水量只能为正实数！");
                    $(this).find("td").eq(7).find("input").focus();
                    valid = false;
                    return false;
                }
                //6.核定的计划内取水量
                if(hdjhqsl=='-'||hdjhqsl.length==0){
                    layer.alert("第"+index+"行核定的计划内取水量不能为空！");
                    $(this).find("td").eq(8).find("input").focus();
                    valid = false;
                    return false;
                }else if(!reg.test(hdjhqsl)){
                    layer.alert("第"+index+"行核定的计划内取水量只能为正实数！");
                    $(this).find("td").eq(8).find("input").focus();
                    valid = false;
                    return false;
                }

                //7.核定的超计划取水量
                if(hdcjhqsl=='-'||hdcjhqsl.length==0){
                    layer.alert("第"+index+"行核定的超计划取水量不能为空！");
                    $(this).find("td").eq(9).find("input").focus();
                    valid = false;
                    return false;
                }else if(!reg.test(hdcjhqsl)){
                    layer.alert("第"+index+"行核定的超计划取水量只能为正实数！");
                    $(this).find("td").eq(9).find("input").focus();
                    valid = false;
                    return false;
                }
                //7.附件url
                if(fileurl=='-'||fileurl.length==0){
                    layer.alert("第"+index+"行请上传附件！");
                    $(this).find("td").eq(10).find("input").focus();
                    valid = false;
                    return false;
                }
            }
        });
        return valid;
    }


    //主表校验
    function isCheck(){

        //抄表日期
        var cbrq = $("#cbrqid").val();
        //联系人
        var lxr = $("#lxr").val();
        //联系方式
        var lxfs = $("#lxfs").val();
        //受理日期
        var slrq = $("#slrqid").val();

        var valid = true;
        //1.抄表日期:
        if(cbrq.length==0){
            layer.alert("取水所属期止不能为空，请选择抄表日期！");
            $("#qsssqz").focus();
            valid = false;
            return false;
        }
        //2.联系人不能为空
        if(lxr.length==0){
            layer.alert("联系人不能为空！");
            $("#lxr").focus();
            valid = false;
            return false;
        }else if(lxr.length>20){
            layer.alert("联系人不能大于20字符！");
            $("#lxr").val("")
            $("#lxr").focus();
            valid = false;
            return false;
        }
        //3.联系方式
        var lxfsReg =/^[0-9-]{11}$/;
        if(lxfs.length==0){
            layer.alert("联系方式不能为空！");
            $("#lxfs").focus();
            valid = false;
            return false;
        }else if(!lxfsReg.test(lxfs)){
            layer.alert("请输入正确的联系方式！");
            $("#lxfs").val("")
            $("#lxfs").focus();
            valid = false;
            return false;
        }
        //4.受理日期:
        if(slrq.length==0){
            layer.alert("取水所属期止不能为空，请选择受理日期！");
            $("#qsssqz").focus();
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

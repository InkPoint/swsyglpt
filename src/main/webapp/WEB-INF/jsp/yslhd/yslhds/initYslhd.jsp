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
    <title>用水量核定</title>
    <%@include file="../../common/include-head.jsp" %>
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
            top:120px;
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
    <<tr>
        <td>报送时间起:</td>
        <td>
            <div class="input-group date form_date col-sm-10"
                 data-date-format="yyyy/mm/dd"
                 data-link-format="yyyy/mm/dd">
                <input id="bssjq" class="form-control" type="text" name="sbsjq"  readonly>
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                    </span>
            </div>
        </td>
        <td>报送时间止:</td>
        <td>
            <div class="input-group date form_date col-sm-10"
                 data-date-format="yyyy/mm/dd"
                 data-link-format="yyyy/mm/dd">
                <input id="bssjz" class="form-control" type="text" name="sbsjz"  readonly>
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                    </span>
            </div>
        </td>
    </tr>
    <tr>
        <td colspan="4" align="center">
            <button type="button" class="btn btn-info" onclick="searchlist()"> 执行查询 </button>
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
            <button type="button" class="btn btn-warning btn-sm" onclick="btn_edit()"><i
                    class="glyphicon glyphicon-pencil" onclick="btn_edit()"></i>核定
            </button>
        </td>
    </tr>
    </tbody>
</table>
<div class="col-md-12 container" style="margin-top: -22px">
    <table id="taskList_table" data-height="604" class="table table-striped"></table>
</div>

<!--3.用数量报送结果详情-->
<div class="modal fade" id="myview" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog" style="width: 1200px;height: 600px">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">查看</h4>
            </div>
            <form id="tablevalidation" method="post" class="form-horizontal">
                <table class="table table-bordered table-striped" style="width: 98%; margin:20px auto;">
                    <tr>
                        <td>水行政主管部门:</td>
                        <td style="width: 30%" colspan="3" id="shzzgb"></td>
                        <td>抄表日期:</td>
                        <td style="width: 30%" colspan="3" id="cbrq"></td>
                    </tr>
                    <tr>
                        <td>取水所属期起:</td>
                        <td colspan="3" id="qslssqq"></td>
                        <td>取水所属期止:</td>
                        <td colspan="3" id="qslssqz"></td>
                    </tr>
                    <tr>
                        <td>纳税人识别号:</td>
                        <td colspan="3" id="_nsrsbh"></td>
                        <td>纳税人名称:</td>
                        <td colspan="3"  id="_nsrmc"></td>
                    </tr>
                    <tr>
                        <td>联系人:</td>
                        <td colspan="3" id="lxr"></td>
                        <td>联系方式:</td>
                        <td colspan="3" id="lxfs"></td>
                    </tr>

                    <tr>
                        <td>取水计划:</td>
                        <td colspan="3" id="qsjh"></td>
                        <td>水源类型:</td>
                        <td colspan="3" id="sylx"></td>
                    </tr>

                    <tr>
                        <td>取用水行业:</td>
                        <td colspan="3" id="qyshy"></td>
                        <td>地下水超采区类型:</td>
                        <td colspan="3" id="dxsccqlx"></td>

                    </tr>

                    <tr>
                        <td>地下水取水地点供水管网:</td>
                        <td colspan="3" id="dxsqsddgsgw"></td>
                        <td>特殊用水类别:</td>
                        <td colspan="3" id="tsyslb"></td>
                    </tr>
                    <tr>
                        <td>纳税人签章:</td>
                        <td colspan="3" id="nsrqz"></td>
                        <td>税务机关受理人:</td>
                        <td colspan="3" id="swjgslr"></td>
                    </tr>
                    <tr>
                        <td>受理日期:</td>
                        <td  colspan="3" id="slrq"></td>
                        <td>水量核定人签章:</td>
                        <td colspan="3" id="slhdrqz"></td>
                    </tr>
                    <tr>
                        <td>水源区域:</td>
                        <td colspan="3" id="_syqy"></td>
                        <td>核定结果类型:</td>
                        <td colspan="3" id="hdjglx"></td>
                    </tr>
                    <tr>
                        <td>用水量核定情况:</td>
                        <td colspan="7" id="hdqk"></td>
                    </tr>
                    </tbody>
                </table>
            </form>
            <div id="querys" class="row">
                <div class="col-lg-12 col-sm-12 col-xs-12 col-md-12">
                    <div class="widget">
                        <div class="widget-header ">
                            <span class="widget-caption">表明细</span>
                            <div class="col-sm-11">
                                <label class="control-label" style="margin-top: 10px">单位:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(m³)</label>
                            </div>
                        </div>
                        <div class="widget-body" style="height: 300px;">
                            <table id="mytab"></table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!--附件上传-->
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
<script type="text/javascript">
    var shr ="${usercode}";//审核人
    //初始化报送时间
    $(function(){
        laydate.render({
            elem: '#bssjq'
            ,format:'yyyy/MM/dd'
        });
        laydate.render({
            elem: '#bssjz'
            ,format:'yyyy/MM/dd'
        });
        $("#bssjq,#bssjz").attr('value', getNowFormatDate());
    });

    $(function () {
        //为Enter绑定事件
        $(document).keydown(function (event) {
            if (event.keyCode == 13) {
                searchlist();
            }
        });
        //初始化表格
        inittabs();
    });
    //检索查询
    function searchlist() {
        //报送时间起
        var bssjq = $("#bssjq").val().trim();
        //报送时间止
        var bssjz = $("#bssjz").val().trim();
        inittabs(bssjq, bssjz);
    }

    //(信息采集)初始化表
    function inittabs(bssjq, bssjz) {
        //先销毁表格
        $('#taskList_table').bootstrapTable('destroy');
        $('#taskList_table').bootstrapTable({
            url: "${ctx}/yslhd/yslhds/selectAll",//获取数据的Select地址
            sidePagination: "server",//表示服务端请求(分页方式：client客户端分页，server服务端分页)
            queryParams: function (params) {
                return {
                    'svo.bssjq': bssjq,
                    'svo.bssjz': bssjz,
                    'svo.shrdm':shr,
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
            uniqueid: "xxcjid", //每一行的唯一标识，一般为主键列
            ueryParamsType: 'limit',
            columns: [{
                field: 'ck',
                checkbox: true,
                align: 'center'

            }
                ,{
                    field: 'nsrsbh',
                    align: 'left',
                    title: '纳税人识别号',
                    halign: 'center'

                }
                ,{
                    field: 'nsrmc',
                    align: 'left',
                    title: '纳税人名称',
                    halign: 'center'
                },
                {
                    field: 'syqy',
                    align: 'left',
                    title: '水源区域',
                    halign: 'center'

                }
                ,{
                    field: 'sylx',
                    align: 'left',
                    title: '水源类型',
                    halign: 'center'
                }
                ,{
                    field: 'qskdd',
                    align: 'left',
                    title: '取水口地点',
                    halign: 'center'

                }
                ,{
                    field: 'qslssqq',
                    align: 'left',
                    title: '取水所属期起',
                    halign: 'center'
                }
                ,{
                    field: 'qslssqz',
                    align: 'left',
                    title: '取水所属期止',
                    halign: 'center'
                }
                ,{
                    field: 'hdjglxmc',
                    align: 'left',
                    halign: 'center',
                    title: '核定结果类型'
                }
                ,{
                    field: 'lrsj',
                    align: 'center',
                    title: '录入时间'
                }
                ,{
                    field: 'cz',
                    align: 'center',
                    title: '操作 ',
                    sortatable: true,
                    formatter: function (value, row, index) {
                        return '<button id="ckmxbtn" type="button" class="btn btn-link" data-toggle="modal" data-target="#myview" onclick="myviewdata(\'' + row.xxcjid + '\')">查看明细</button>'
                    }
                }]
        });
    }

    //查看数据
    function myviewdata(xxcjid) {
        $.ajax({
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            url: '${ctx}/yslhd/yslhds/doQueryTable',
            type: 'post',
            dataType: 'json',
            data: {
                'xxcjid': xxcjid
            },
            success: function (json) {
                //水行政主管部门
                $("#shzzgb").text(json[0].SXZZGBM);
                //取水所属期起
                $("#qslssqq").text(json[0].QSLSSQQ);
                //取水所属期止
                $("#qslssqz").text(json[0].QSLSSQZ);
                //抄表日期
                $("#cbrq").text(json[0].CBRQ);
                //纳税人识别号
                $("#_nsrsbh").text(json[0].NSRSBH);
                //纳税人名称
                $("#_nsrmc").text(json[0].NSRMC);
                //取水计划
                $("#qsjh").text(json[0].QSJH);
                //联系人
                $("#lxr").text(json[0].LXR);
                //联系方式
                $("#lxfs").text(json[0].LXFS);
                //水源类型
                $("#sylx").text(json[0].SYLXMC);
                //取用水行业
                $("#qyshy").text(json[0].QYSHYMC);
                //地下水超采区类型
                $("#dxsccqlx").text(json[0].DXSCCQLXMC);
                //地下水取水地点供水管网
                $("#dxsqsddgsgw").text(json[0].SFMC);
                //特殊用水类别
                $("#tsyslb").text(json[0].TSYSLBMC);
                //纳税人签章
                $("#nsrqz").text(json[0].NSRQZ);
                //水量核定人签章
                $("#slhdrqz").text(json[0].SLHDRQZ);
                //税务机关受理人
                $("#swjgslr").text(json[0].SWJGSLR);
                //受理日期
                $("#slrq").text(json[0].SLRQ);
                //	核定结果类型
                $("#hdjglx").text(json[0].HDJGLXMC);
                //用水量核定情况
                $("#hdqk").text(json[0].HDQK);
                //水源区域
                $("#_syqy").text(json[0].SYQYMC);
            },
            error:function(json){
                layer.alert("数据获取失败！");
            }
        });
        theDetailTable(xxcjid);
    }

    //明细表
    function theDetailTable(xxcjid) {
        //先销毁表格
        $('#mytab').bootstrapTable('destroy');
        $('#mytab').bootstrapTable({
            url: "${ctx}/yslhd/yslhds/getYslbsMx",
            sidePagination: "server",//表示服务端请求
            pagination: true, //是否分页
            queryParams: function (params) {
                return {
                    'svo.xxcjid': xxcjid,
                    offset: (params.offset / params.limit) + 1,
                    limit: params.limit
                }
            },
            queryParamsType: 'limit',//设置为‘limit’则会发送符合RESTFul格式的参数
            singleSelect: true,//设置为true 禁止多选
            pageNumber: 1, //初始化加载第一页，默认第一页
            buttonsAlign: 'right', //按钮对齐方式
            pageSize: 10, //每页的记录行数
            pageList: [10, 20, 30, 50], //可供选择的每页行数
            clickToSelect: true, //是否启用点击选中行
            cache: false,//是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性
            columns: [
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
                    title: '上期表底数'
                }, {
                    field: 'bqbds',
                    align: 'right',
                    halign: 'center',
                    title: '本期表底数'
                }, {
                    field: 'bqqsl',
                    align: 'right',
                    halign: 'center',
                    title: '本期取水量'
                }, {
                    field: 'ljqsl',
                    align: 'right',
                    halign: 'center',
                    title: '累计取水量'
                }, {
                    field: 'jhqsl',
                    align: 'right',
                    halign: 'center',
                    title: '计划取水量'
                }, {
                    field: 'hddjhnqsl',
                    align: 'right',
                    halign: 'center',
                    title: '核定的计划内取水量'
                }, {
                    field: 'hddcjhqsl',
                    align: 'right',
                    halign: 'center',
                    title: '核定的超计划取水量'
                }, {
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
    }
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

    //用水量报送核定
    function btn_edit() {
        //获取被选中的记录
        var rows = $('#taskList_table').bootstrapTable('getSelections');
        if (rows.length == 0) {
            layer.alert("请选择要核定的数据！");
            return;
        } else {
            window.location.href = "${ctx}/yslhd/yslhds/initYslhdEdit?xxcjid=" + rows[0].xxcjid;
        }
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

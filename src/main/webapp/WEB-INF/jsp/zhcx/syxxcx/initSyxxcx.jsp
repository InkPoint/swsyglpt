<%--
  Created by IntelliJ IDEA.
  User: PengWen Wang
  Date: 2018/12/13
  Time: 11:20
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@include file="../../common/taglibs.jsp" %>

<html>
<head>
    <title>水源信息维护</title>
    <%@include file="../../common/include-head.jsp" %>
    <%@include file="../../common/include-head.amap.jsp" %>
</head>

<body>
<div>
    <table class="table table-bordered table-striped" style="width: 98%; margin:10px auto 0px auto;">
        <thead>
        <tr>
            <td colspan="9">查询条件</td>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>水源区域:</td>
            <td><select style="width: 120px;" name="syqydm"></select></td>
            <td>水源类型:</td>
            <td><select style="width: 120px;" name="sylxdm"></select></td>
            <td>水源状态:</td>
            <td><select style="width: 120px;" name="syztdm"></select></td>
            <td>取水地点:</td>
            <td><input type="text" style="width: 220px;" name="qsdd"/></td>
            <td align="center">
                <button type="button" class="btn btn-info">执行查询</button>
            </td>
        </tr>
        </tbody>
    </table>
    <div style=" width: 98%; margin: 10px auto; font-size: 14px;">
        <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" class="active"><a href="#base" aria-controls="base" role="tab"
                                       data-toggle="tab">水源清册</a></li>
            <li role="presentation"><a href="#amps" aria-controls="amps" role="tab" data-toggle="tab">水源分布</a></li>


        </ul>
        <div class="tab-content">
            <div role="tabpanel" class="tab-pane" id="amps">
                <div id="container" style="min-height: 600px;"></div>
            </div>
            <div role="tabpanel" class="tab-pane active" id="base">
                <table id="table" style="width: 100%; white-space: nowrap; word-break: keep-all;"
                       class="table table2 table-striped table-bordered table-hover"></table>
            </div>

        </div>

    </div>
</div>


</body>
</html>
<script>
    //初始化地图对象，加载地图
    var markers=new Array() ,map = new AMap.Map("container", {resizeEnable: true});
    var infoWindow = new AMap.InfoWindow({offset: new AMap.Pixel(0, -30)});

    function markerClick(e) {
        infoWindow.setContent(e.target.content);
        infoWindow.open(map, e.target.getPosition());
    }

    /**
     * 增加描点
     * @param obj 描点对象
     */
    function addMarker(obj) {
        var marker = new AMap.Marker({
            position: [obj.JD, obj.WD],
            map: map
        });
        var content = "";
        content += '<table class="table table-bordered table-condensed" style="width: 500px;font-size: 14px;margin-top: 10px;">';
        content += '<tr class="active"><td colspan="4">税源信息</td></tr>';
        content += '<tr><td style="width: 80px">税源编号：</td><td style="width: 120px">'+htlui.nullToEmpty(obj.SYBH)+'</td>  <td style="width: 80px">税源区域：</td><td style="width: 120px">'+htlui.nullToEmpty(obj.SYQYSMC)+'</td></tr>';
        content += '<tr> <td>取水许可证编号：</td><td >'+htlui.nullToEmpty(obj.QSXKZBH)+'</td> <td>取水许可证状态：</td><td >'+htlui.nullToEmpty(obj.QSXKZZTMC)+'</td>  </tr>';
        content += '<tr><td>取水口数量：</td><td >'+htlui.nullToEmpty(obj.QSKSL)+'</td>  <td>总计量个数：</td><td >'+htlui.nullToEmpty(obj.ZJLGS)+'</td>   </tr>';
        content += '<tr><td>在线监控：</td><td >'+htlui.nullToEmpty(obj.SFZXJCMC)+'</td>  <td>分计量个数：</td><td >'+htlui.nullToEmpty(obj.FJLGS)+'</td>   </tr>';
        content += '<tr><td>税源类型：</td><td  colspan="3">'+htlui.nullToEmpty(obj.SYLXMC)+'</td></tr>';
        content += '<tr class="active"><td colspan="4">用水户</td></tr>';
        content += '<tr><td>社会信用代码：</td><td >'+htlui.nullToEmpty(obj.SHXYDM)+'</td>  <td>纳税人识别号：</td><td >'+htlui.nullToEmpty(obj.NSRSBH)+'</td>   </tr>';
        content += '<tr><td>纳税人名称：</td><td  colspan="3">'+htlui.nullToEmpty(obj.NSRMC)+'</td></tr>';
        content += '<tr><td>法定代表：</td><td>'+htlui.nullToEmpty(obj.FDDBRXM)+'</td> <td>办税员：</td><td>'+htlui.nullToEmpty(obj.BSYXM)+'('+htlui.nullToEmpty(obj.BSYLXDH)+')</td></tr>';
        content += '<tr><td>单位地址：</td><td  colspan="3">'+htlui.nullToEmpty(obj.DWDZ)+'</td></tr>';
        content += '</table>';
        content += '<a href="javascript:void(0)" class="ampsDetailBtn" data-id="'+obj.SYDJXH+'"> 查看更多</a>';
        marker.content = content;
        marker.on('click', markerClick);
        markers.push(marker);
    }

    $('a[aria-controls="amps"]').on('shown.bs.tab', function (e) {
            map.setFitView();
    });
    $(document).on("click", ".ampsDetailBtn", function () {
        var sydjxh=$(this).data("id");
        queryDetail(sydjxh);
    });
    function queryDetail(id){
        $.post("${ctx}/zhcx/syxxcx/syxxdetailQuery", {"svo.sydjxh":id}, function (result) {
            openDetail(result);
        });
    }
 function openDetail(obj){
     var html= "";
     html += '<table class="table table-bordered table-condensed" style="width: 98%;font-size: 14px;margin: 10px auto;">';
     html += '<tr class="active"><td colspan="4">税源信息</td></tr>';
     html += '<tr><td style="width: 80px">税源编号：</td><td style="width: 120px">'+htlui.nullToEmpty(obj.SYBH)+'</td>  <td style="width: 80px">税源区域：</td><td style="width: 120px">'+htlui.nullToEmpty(obj.SYQYSMC)+'</td></tr>';
     html += '<tr> <td>取水许可证编号：</td><td >'+htlui.nullToEmpty(obj.QSXKZBH)+'</td> <td>取水许可证状态：</td><td >'+htlui.nullToEmpty(obj.QSXKZZTMC)+'</td>  </tr>';
     html += '<tr><td>取水口数量：</td><td >'+htlui.nullToEmpty(obj.QSKSL)+'</td>  <td>总计量个数：</td><td >'+htlui.nullToEmpty(obj.ZJLGS)+'</td>   </tr>';
     html += '<tr><td>在线监控：</td><td >'+htlui.nullToEmpty(obj.SFZXJCMC)+'</td>  <td>分计量个数：</td><td >'+htlui.nullToEmpty(obj.FJLGS)+'</td>   </tr>';
     html += '<tr><td>税源类型：</td><td  colspan="3">'+htlui.nullToEmpty(obj.SYLXMC)+'</td></tr>';


     html += '<tr><td>取水许可有效期起：</td><td >'+htlui.nullToEmpty(obj.QSXKYXQQ)+'</td>  <td>取水许可有效期止：</td><td >'+htlui.nullToEmpty(obj.QSXKYXQZ)+'</td>   </tr>';
     html += '<tr><td>年取用水计划：</td><td >'+htlui.nullToEmpty(obj.NQSJH)+'</td>  <td>地下水取水地点供水管网是否覆盖：</td><td >'+htlui.nullToEmpty(obj.DXSQSDGSGWSFFGMC)+'</td>   </tr>';
     html += '<tr><td>地下水超采区类型：</td><td >'+htlui.nullToEmpty(obj.DXSCCQLXMC)+'</td>  <td>水资源费额标准（元/立方米）：</td><td >'+htlui.nullToEmpty(obj.SZYFEBZ)+'</td>   </tr>';
     html += '<tr><td>取水方式代码：</td><td >'+htlui.nullToEmpty(obj.QSFSMC)+'</td>  <td>用水量计划序号：</td><td >'+htlui.nullToEmpty(obj.YSLJHXH)+'</td>   </tr>';
     html += '<tr><td>退水地点：</td><td >'+htlui.nullToEmpty(obj.TSDD)+'</td>  <td>退水方式：</td><td >'+htlui.nullToEmpty(obj.TSFS_DM)+'</td>   </tr>';
     html += '<tr><td>行政区划：</td><td >'+htlui.nullToEmpty(obj.XZQHMC)+'</td>  <td>退水量：</td><td >'+htlui.nullToEmpty(obj.TSL)+'</td>   </tr>';
     html += '<tr><td>退水水质要求：</td><td colspan="3">'+htlui.nullToEmpty(obj.TSSZYQ)+'</td>   </tr>';





     html += '<tr class="active"><td colspan="4">用水户</td></tr>';
     html += '<tr><td>社会信用代码：</td><td >'+htlui.nullToEmpty(obj.SHXYDM)+'</td>  <td>纳税人识别号：</td><td >'+htlui.nullToEmpty(obj.NSRSBH)+'</td>   </tr>';
     html += '<tr><td>纳税人名称：</td><td  colspan="3">'+htlui.nullToEmpty(obj.NSRMC)+'</td></tr>';
     html += '<tr><td>法定代表：</td><td>'+htlui.nullToEmpty(obj.FDDBRXM)+'</td> <td>办税员：</td><td>'+htlui.nullToEmpty(obj.BSYXM)+'('+htlui.nullToEmpty(obj.BSYLXDH)+')</td></tr>';
     html += '<tr><td>单位地址：</td><td  colspan="3">'+htlui.nullToEmpty(obj.DWDZ)+'</td></tr>';
     html += '</table>';;
     layer.open({
         type: 1,
         area:[600,400],
         title:"详细信息",
         content: html //这里content是一个普通的String
     });
 }
    function loadAmps() {
        map.remove(markers);
        var syztdm = $("select[name=syztdm]").val();
        if (syztdm == null || syztdm == "") {
            syztdm = "all";
        }
        var sylxdm = $("select[name=sylxdm]").val();
        if (sylxdm == null || sylxdm == "") {
            sylxdm = "all";
        }
        var syqydm = $("select[name=syqydm]").val();
        if (syqydm == null || syqydm == "") {
            syqydm = "all";
        }
        $.post("${ctx}/zhcx/syxxcx/syxxjhampsQuery", {
            "svo.syztdm": syztdm,
            "svo.sylxdm": sylxdm,
            "svo.syqydm": syqydm
        }, function (result) {
            for (var i = 0; i < result.length; i++) {
                var obj = result[i];
                if (obj.JD != null && obj.JD != "" && obj.WD != null && obj.WD != "") {
                    addMarker(obj);
                    console.log("obj.toString==>>"+JSON.stringify(obj));
                }
            }
            map.setFitView();
        });
    }

    $(function () {
        // 税源区域
        $.post("${ctx}/zhcx/syxxcx/syqyQuery", null, function (result) {
            console.log("syqyQuery==>>" + JSON.stringify(result));
            $("select[name=syqydm]").val("").select2({
                data: result,
                placeholder: '请选择',
                allowClear: false
            });
        });
        // 税源区域
        $.post("${ctx}/zhcx/syxxcx/sylxQuery", null, function (result) {
            console.log("sylxQuery==>>" + JSON.stringify(result));

            $("select[name=sylxdm]").val("").select2({
                data: result,
                placeholder: '请选择',
                allowClear: false
            });
        });
        // 税源区域
        $.post("${ctx}/zhcx/syxxcx/syztQuery", null, function (result) {
            console.log("syztQuery==>>" + JSON.stringify(result));

            $("select[name=syztdm]").val("").select2({
                data: result,
                placeholder: '请选择',
                allowClear: false
            });
        });
        initTable();
        loadAmps();
    });

    function initTable() {
        var syztdm = $("select[name=syztdm]").val();
        if (syztdm == null || syztdm == "") {
            syztdm = "all";
        }
        var sylxdm = $("select[name=sylxdm]").val();
        if (sylxdm == null || sylxdm == "") {
            sylxdm = "all";
        }
        var syqydm = $("select[name=syqydm]").val();
        if (syqydm == null || syqydm == "") {
            syqydm = "all";
        }
        var qsdd= $("input[name=qsdd]").val();
        $('#table').bootstrapTable('destroy');
        $('#table').bootstrapTable({
            url: "${ctx}/zhcx/syxxcx/syxxjhQuery", 	// 获取数据的Select地址
            sidePagination: "server", 				// 表示服务端请求(分页方式：client客户端分页，server服务端分页)
            queryParams: function (params) {
                return {
                    offset: (params.offset / params.limit) + 1,
                    limit: params.limit,
                    "svo.syztdm": syztdm,
                    "svo.sylxdm": sylxdm,
                    "svo.syqydm": syqydm,
                    "svo.qsdd":qsdd,
                }
            },
            pagination: true, 						// 是否分页
            singleSelect: true, 					// 设置为true禁止多选
            pageNumber: 1, 							// 初始化加载第一页，默认第一页
            buttonsAlign: 'right', 					// 按钮对齐方式
            height: $(window).height() - 300,
            pageSize: 10, 							// 每页的记录行数
            pageList: [10, 20, 30, 50], 			// 可供选择的每页行数
            onlyInfoPagination: false, 				// 设置为true只显示总数据数，而不显示分页按钮
            toolbar: '#toolbar',					// 是否包含工具栏
            paginationLoop: true, 					// 设置为true启用分页条无线循环的功能
            clickToSelect: true, 					// 是否启用点击选中行
            uniqueIS: "jbid", 						// 每一行的唯一标识，一般为主键列
            ueryParamsType: 'limit',
            columns: [{
                field: 'ck',
                checkbox: true,
                align: 'center'
            }, {
                field: 'NSRMC',
                align: 'center',
                title: '用水户名称'
            }, {
                field: 'SHXYDM',
                align: 'center',
                title: '社会信用代码'
            }, {
                field: 'SYBH',
                align: 'center',
                title: '水源编号',formatter:function(value, row, index, field){
                    return '<a href="javascript:void(0)" class="ysxxDetailBtn" data-id="'+row.SYDJXH+'">'+value+'</a>';
                }
            }, {
                field: 'SYQYSMC',
                align: 'center',
                title: '水源区域'
            }, {
                field: 'SYZTMC',
                align: 'center',
                title: '水源状态'
            }, {
                field: 'QSXKZBH',
                align: 'center',
                title: '取水许可证编号'
            }, {
                field: 'QSXKZZTMC',
                align: 'center',
                title: '取水许可证状态'
            }, {
                field: 'QSKSZD',
                align: 'center',
                title: '取水地点'
            }, {
                field: 'QSYTMC',
                align: 'center',
                title: '取水用途'
            }, {
                field: 'SFZXJCMC',
                align: 'center',
                title: '是否在线监测'
            }, {
                field: 'SYLXMC',
                align: 'center',
                title: '水源类型'
            }, {
                field: 'QYSHYMC',
                align: 'center',
                title: '取水行业'
            }, {
                field: 'TSYSLBMC',
                align: 'center',
                title: '特殊用水类别'
            }]
        });
    }
$(document).on("click",".ysxxDetailBtn",function () {
    var sydjxh=$(this).data("id");
    queryDetail(sydjxh);
});
    $(".btn-info").click(function () {
        initTable();
        loadAmps();
    });
    //Modal验证销毁重构(添加)
    $("#myModal").on('hidden.bs.modal', function () {
        $("#validationForm").data('bootstrapValidator').destroy();
        $("#validationForm").data('bootstrapValidator', null);
        formValidator();
    });


</script>

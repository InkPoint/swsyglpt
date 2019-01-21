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
    <title>用水量综合分析</title>
    <%@include file="../../common/include-head.jsp" %>
    <%@include file="../../common/include-head.echarts.jsp" %>

</head>

<body>
<table class="table table-bordered table-striped" style="width: 98%; margin:10px auto 0px auto;">
    <thead>
    <tr>
        <td colspan="11">查询条件</td>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>年份:</td>
        <td><select style="width: 100px;" name="ssnf"></select></td>
        <td>水源区域:</td>
        <td><select style="width: 100px;" name="syqydm"></select></td>
        <td>水源类型:</td>
        <td><select style="width: 100px;" name="sylxdm"></select></td>
        <td>地下水超采区类型:</td>
        <td><select style="width: 100px;" name="dxsccqkxdm"></select></td>
        <td>特殊用水类型:</td>
        <td><select style="width: 100px;" name="tsyslxdm"></select></td>
        <td align="center">
            <button type="button" class="btn btn-info"> 执行查询</button>
        </td>
    </tr>
    </tbody>
</table>
<div style="width: 98%; margin:10px auto 0px auto;">
    <div class="row">
        <div class="col-md-3">   <div class="panel panel-default">
            <div class="panel-heading">水源类型用水量占比</div>
            <div class="panel-body"> <div id="sylxyslt" style="min-height:300px;"></div> </div></div></div>
        <div class="col-md-3">  <div class="panel panel-default">
            <div class="panel-heading">行业用水量占比</div>
            <div class="panel-body">  <div id="hyyslfbt" style="min-height: 300px;"></div> </div></div></div>
        <div class="col-md-3">   <div class="panel panel-default">
            <div class="panel-heading">地下水超采区类型用水量占比</div>
            <div class="panel-body"> <div id="dxsccqlxyslzb" style="min-height:300px;"></div> </div></div></div>
        <div class="col-md-3">  <div class="panel panel-default">
            <div class="panel-heading">特殊用水类型用水量占比</div>
            <div class="panel-body">  <div id="tsyslxyslzb" style="min-height: 300px;"></div> </div></div></div>
        <div class="col-md-6">   <div class="panel panel-default">
            <div class="panel-heading">本年同比环比</div>
            <div class="panel-body">
                <div id="tbhbt" style="min-height: 300px;"></div>    </div></div></div>

        <div class="col-md-6">   <div class="panel panel-default">
            <div class="panel-heading">用水量趋势</div>
            <div class="panel-body"> <div id="nyslqst" style="min-height: 300px;"></div> </div></div></div>
    </div>

</div>
<script>
    var tbhbt = echarts.init(document.getElementById("tbhbt"));
    var sylxyslt = echarts.init(document.getElementById("sylxyslt"));
    var hyyslfbt = echarts.init(document.getElementById("hyyslfbt"));
    var nyslqst = echarts.init(document.getElementById("nyslqst"));

    var dxsccqlxyslzb = echarts.init(document.getElementById("dxsccqlxyslzb"));
    var tsyslxyslzb = echarts.init(document.getElementById("tsyslxyslzb"));
    /**
     * 同比方
     * @param obj
     */
    function tbhbtEcharts(obj){
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
                show: false,//取消工具
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
          var param=getparam();
          console.log("11==>>"+JSON.stringify(param))
        $.post("${ctx}/zhcx/yslzhfx/yslzhfxQuery",param , function (result) {
            option.series[0].data=[result.CURRQSL1Q, result.CURRQSL2Q, result.CURRQSL3Q, result.CURRQSL4Q];
            option.series[1].data=[result.TB1, result.TB2, result.TB3, result.TB4];
            option.series[2].data=[result.HB1, result.HB2, result.HB3, result.HB4];
            tbhbt.setOption(option, true);
        });


    }
    function sylxysltEcharts(obj){
       var option = {};

        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data:[]
            },
            series: [
                {
                    name:'用水量',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            formatter: '{b}:{c}: ({d}%)',
                            textStyle : {
                                fontWeight : 'normal',
                                fontSize : 15}
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: true
                        }
                    },
                    data:[]
                }
            ]
        };

        $.post("${ctx}/zhcx/yslzhfx/sylxyslQuery", getparam(), function (result) {
            for (var a in result){
                option.series[0].data.push({"value":result[a].SYLXYSL,"name":result[a].SYLXMC});
                option.legend.data.push(result[a].SYLXMC);
            }
                sylxyslt.setOption(option, true);
        });
    }
    function hyyslfbtEcharts(obj){
        var app = {};
       var option = null;

        option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                type: 'scroll',
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data: [],
                selected: []
            },
            series : [
                {
                    name: '行业类型',
                    type: 'pie',
                    radius : '55%',
                    center: ['40%', '50%'],
                    data: [],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        $.post("${ctx}/zhcx/yslzhfx/hyyslQuery", getparam(), function (result) {
            for (var a in result){
                option.series[0].data.push({"value":result[a].SYLXYSL,"name":result[a].QYSHYMC});
                option.legend.data.push(result[a].QYSHYMC);
                if(a<=5){
                    option.legend.selected.push(result[a].QYSHYMC);
                }
            }
            hyyslfbt.setOption(option, true);
        });

    }

    function dxsccqlxyslzbEcharts(obj){
        var option = {};

        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data:[]
            },
            series: [
                {
                    name:'地下水超采区类型',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: true,
                    label: {
                        normal: {
                            show: true,
                            formatter: '{b}:{c}: ({d}%)',
                            textStyle : {
                                fontWeight : 'normal',
                                fontSize : 15}
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: true
                        }
                    },
                    data:[]
                }
            ]
        };

        $.post("${ctx}/zhcx/yslzhfx/dxsccqlxQuery", getparam(), function (result) {
            for (var a in result){
                option.series[0].data.push({"value":result[a].YSL,"name":result[a].DXSCCQLXMC});
                option.legend.data.push(result[a].DXSCCQLXMC);
            }
            dxsccqlxyslzb.setOption(option, true);
        });
    }
    function tsyslxyslzbEcharts(obj){
        var app = {};
        var option = null;

        option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                type: 'scroll',
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data: [],
                selected: []
            },
            series : [
                {
                    name: '特殊用水类型',
                    type: 'pie',
                    radius : '55%',
                    center: ['40%', '50%'],
                    data: [],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        $.post("${ctx}/zhcx/yslzhfx/tsyslxQuery", getparam(), function (result) {
            for (var a in result){
                option.series[0].data.push({"value":result[a].YSL,"name":result[a].TSYSLBMC});
                option.legend.data.push(result[a].TSYSLBMC);
                if(a<=5){
                    option.legend.selected.push(result[a].TSYSLBMC);
                }
            }
            tsyslxyslzb.setOption(option, true);
        });

    }

    function nyslqstEcharts(obj){
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
        $.post("${ctx}/zhcx/yslzhfx/nfyslqsQuery", getparam(), function (result) {
            for (var a in result){
                option.series[0].data.push(result[a].SYLXYSL);
                option.xAxis.data.push(result[a].YSNF);
                option.series[1].data.push(result[a].SYLXYSL);

            }
            nyslqst.setOption(option, true);
        });
    }

    $(function () {
        $.post("${ctx}/zhcx/ysltz/ndcd", null, function (data) {
            $("select[name=ssnf]").select2({
                data: data,
                placeholder: '请选择',
                allowClear: false
            });
        });
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
        $.post("${ctx}/zhcx/yslzhfx/dxsccqlxdmQuery", null, function (result) {
            console.log("sylxQuery==>>" + JSON.stringify(result));

            $("select[name=dxsccqkxdm]").val("").select2({
                data: result,
                placeholder: '请选择',
                allowClear: false
            });
        });
        // 税源区域
        $.post("${ctx}/zhcx/yslzhfx/tsyslxdmQuery", null, function (result) {
            console.log("sylxQuery==>>" + JSON.stringify(result));

            $("select[name=tsyslxdm]").val("").select2({
                data: result,
                placeholder: '请选择',
                allowClear: false
            });
        });
        queryEcharts();
    });
    function getparam(){
        var temp={
            "svo.ssnf":  $("select[name=ssnf]").val(),
            "svo.syqydm":$("select[name=syqydm]").val(),
            "svo.sylxdm":$("select[name=sylxdm]").val(),
            "svo.dxsccqkxdm":$("select[name=dxsccqkxdm]").val(),
            "svo.tsyslxdm":$("select[name=tsyslxdm]").val(),

        };
            console.log("temp==>>"+JSON.stringify(temp));
        return temp;
    }
    function queryEcharts(){
        tbhbtEcharts();
        sylxysltEcharts();
        hyyslfbtEcharts();
        dxsccqlxyslzbEcharts();
        tsyslxyslzbEcharts();
        nyslqstEcharts();
    }
    $(".btn-info").click(function(){
        queryEcharts();
    });
</script>
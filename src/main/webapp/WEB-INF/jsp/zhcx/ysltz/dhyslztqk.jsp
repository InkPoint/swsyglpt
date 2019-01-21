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
    <title>单户用水量总体情况</title>
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
        .table{
            margin-top: 35px;
            font-size: 14px;
        }
        .table td{
            vertical-align: middle!important;
        }
        .bgcolor{
            font-weight: bold;
        }
    </style>

</head>
<body>
<div class="container-fluid row" style="background: #fff;margin-top: 60px;">
    <div class="col-lg-12" style="border-right:1px solid #e7e9f0; border-bottom: 1px solid #e7e9f0; height:380px;">
        <h4 class="table">年度用水量</h4>
        <div id="ysl" style="height: 350px"></div>
    </div>

</div>
<div class="row" style="background: #fff;">
    <div class="col-lg-6" style="border-right:1px solid #e7e9f0; border-bottom: 1px solid #e7e9f0; height:380px;">
        <h4 class="table">水源区域用水量</h4>
        <div id="syqy" style="height: 350px"></div>
    </div>
    <div class="col-lg-6" style="border-right:1px solid #e7e9f0; border-bottom: 1px solid #e7e9f0; height:380px;">
        <h4 class="table">水源类型用水量</h4>
        <div id="sylx"  style="height: 350px"></div>
    </div>
</div>
</body>
</html>

<script>
    var nsrsbh = "${param.nsrsbh}";
    var _yls = echarts.init(document.getElementById("ysl"));
    var _syqy = echarts.init(document.getElementById("syqy"));
    var _sylx = echarts.init(document.getElementById("sylx"));

    //历年用水量总体情况
    $(function () {
        var nd = [];   //年度
        var datas = new Array();  // 数据存储
        $.ajax({
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            url: '${ctx}/zhcx/ysltz/doYslztqk',
            type: 'post',
            dataType: 'json',
            data: {
                'nsrsbh': nsrsbh
            },
            success: function (json) {
                for (var i = 0; i < json.length; i++) {
                    nd.push(json[i].ND);
                    datas.push(json[i].LJQSL);
                }

                option = {
                    tooltip : {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['用水量']
                    },
                    toolbox: {
                        show : true,
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            magicType : {show: true, type: ['line', 'bar']},
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    calculable : true,
                    xAxis : [
                        {
                            type : 'category',
                            data : nd
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'用水量',
                            type:'bar',
                            data:datas,
                            itemStyle:{//设置柱状图颜色
                                normal:{
                                    color:function(params){
                                        var colorList=[
                                            '#5683FF','#468fFF'
                                        ];
                                        return colorList[params.dataIndex];
                                    }
                                }
                            },
                            barWidth:35
                        }
                    ]
                };
                _yls.setOption(option);
            },
            error: function (msg) {
                $.messager.alert('获取数据失败', '失败！', 'error');
            }
        });
    });

    //本年水源区域用水量分布情况
    $(function () {
        var syqymc = [];   //水源区域名称
        var datas = new Array();  // 数据存储
        $.ajax({
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            url: '${ctx}/zhcx/ysltz/doSyqyqk',
            type: 'post',
            dataType: 'json',
            data: {
                'nsrsbh': nsrsbh
            },
            success: function (json) {
                for (var i = 0; i < json.length; i++) {
                    syqymc.push(json[i].SYQYSMC);
                    datas[i] = {
                        value: json[i].LJQSL,
                        name: json[i].SYQYSMC
                    }
                }
                option = {
                    title : {
                        text: '年水源区域用水量',
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    color:['#338DC1','#31CBF4','#338DC1','#90E3FW','#3CA6E2'],
                    legend: {//horizontal
                        orient : 'vertical',
                        x : 'right',
                        y : 'bottom',
                        data:syqymc
                    },
                    toolbox: {
                        show : true,
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            magicType : {
                                show: true,
                                type: ['pie', 'funnel'],
                                option: {
                                    funnel: {
                                        x: '25%',
                                        width: '50%',
                                        funnelAlign: 'left',
                                        max: 1548
                                    }
                                }
                            },
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    calculable : true,
                    series : [
                        {
                            name:'用水量',
                            type:'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data:datas
                        }
                    ]
                };
                _syqy.setOption(option);
            },
            error: function (msg) {
                $.messager.alert('获取数据失败', '失败！', 'error');
            }
        });
    });

    //本年水源类型用水量分布情况
    $(function () {
        var sylxmc = [];   //水源类型名称
        var datas = new Array();  // 数据存储
        $.ajax({
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            url: '${ctx}/zhcx/ysltz/doSylxqk',
            type: 'post',
            dataType: 'json',
            data: {
                'nsrsbh': nsrsbh
            },
            success: function (json) {
                for (var i = 0; i < json.length; i++) {
                    sylxmc.push(json[i].SYLXMC);
                    datas[i] = {
                        value: json[i].LJQSL,
                        name: json[i].SYLXMC
                    }
                }
                option = {
                    title : {
                        text: '年水源类型用水量',
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    color:['#314280','#31CBF4','#4D73C1','#274355'],
                    legend: {
                        orient : 'vertical',
                        x : 'right',
                        y : 'bottom',
                        data:sylxmc
                    },
                    toolbox: {
                        show : true,
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            magicType : {
                                show: true,
                                type: ['pie', 'funnel'],
                                option: {
                                    funnel: {
                                        x: '25%',
                                        width: '50%',
                                        funnelAlign: 'left',
                                        max: 1548
                                    }
                                }
                            },
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    calculable : true,
                    series : [
                        {
                            name:'用水量',
                            type:'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data:datas
                        }
                    ]
                };
                _sylx.setOption(option);
            },
            error: function (msg) {
                $.messager.alert('查询失败', '失败！', 'error');
            }
        });
    });
</script>
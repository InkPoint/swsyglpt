<%@page contentType="text/html;charset=utf-8" pageEncoding="utf-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var='ctx' value="${pageContext.request.contextPath}"/>
<c:set var='principal' value='${sessionScope.aclSessionInfo}'/>
<!DOCTYPE html>
<html>
<head>
    <title>用户管理</title>
    <!-- BEGIN META -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="Olive Enterprise">
    <!-- END META -->
    <%--<link href="${ctx}/theme/assets/global/css/components.css" id="style_components" rel="stylesheet" type="text/css"/>--%>
    <title>数据应用平台</title>
    <!-- BEGIN STYLESHEET-->
    <link href="${ctx}/static/new/css/bootstrap.min.css" rel="stylesheet">
    <!-- BOOTSTRAP CSS -->
    <link href="${ctx}/static/new/css/bootstrap-reset.css" rel="stylesheet">
    <!-- BOOTSTRAP CSS -->
    <link href="${ctx}/static/new/assets/font-awesome/css/font-awesome.css" rel="stylesheet">
    <!-- FONT AWESOME ICON CSS -->
    <link href="${ctx}/static/new/css/style.css" rel="stylesheet">
    <!-- THEME BASIC CSS -->
    <link href="${ctx}/static/new/css/style-responsive.css" rel="stylesheet">
    <!-- THEME RESPONSIVE CSS -->
    <link href="${ctx}/static/new/assets/morris.js-0.4.3/morris.css" rel="stylesheet">
    <!-- MORRIS CHART CSS -->
    <link href="${ctx}/theme/assets/global/plugins/simple-line-icons/simple-line-icons.min.css" rel="stylesheet"
          type="text/css"/>
    <link href="${ctx}/theme/assets/global/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet"
          type="text/css"/>
    <script src="${ctx}/static/new/js/jquery.dcjqaccordion.2.7.js"></script>

</head>

<body style="background: #f3f3f3;">
<div style=" height: 670px; width: 100%; padding:10px;">
<!--内容区域1-->
<div class="con_01">
        <div class="title"><a class="a2">入库税款统计</a></div>
        <div id="main3" style="height:320px;with:100%;"></div>
</div>
<!--内容区域1-->
<div class="con_02">
    <div class="title"><a class="a2" href="#">新办户分布图</a></div>
    <div id="main" style="height:270px; with:100%;"></div>
</div>
<!--内容区域1-->
<div class="con_03">
    <div class="title"><a class="a2">门临代开发票明细</a></div>
    <div id="mains" style="padding:5px;">
        <table id="dg" class="table table-bordered table-striped table-hover">
            <thead class="bg-info">
            <tr>
                <th align="center">发票代码</th>

                <th align="center">发票种类</th>
                <th align="center">开票金额</th>
                <th align="center">开票人</th>
                <th align="center">开具日期</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>005</td><td>门临代开</td><td>6468.12</td><td>张合</td><td>2016-10-21 12:45:14</td>
            </tr>
            <tr>
                <td>004</td><td>门临代开</td><td>56468.12</td><td>张合</td><td>2016-10-21 12:41:14</td>
            </tr>
            <tr>
                <td>003</td><td>门临代开</td><td>345668</td><td>张合</td><td>2016-10-21 12:35:14</td>
            </tr>
            <tr>
                <td>002</td><td>门临代开</td><td>164564</td><td>张合</td><td>2016-10-21 12:30:14</td>
            </tr>
            <tr>
                <td>001</td><td>门临代开</td><td>163</td><td>张合</td><td >2016-10-21 12:22:14</td>
            </tr>

            </tbody>
        </table>
    </div>
</div>
</div>

<script src="${ctx}/static/new/js/html5shiv.js"></script>
<%--
<script src="${ctx}/static/new/js/respond.min.js"></script>
--%>
<script src="${ctx}/static/new/js/jquery-1.8.3.min.js"></script>
<script src="${ctx}/static/new/js/bootstrap.min.js"></script>

<script src="${ctx}/static/new/js/jquery.scrollTo.min.js"></script>
<script src="${ctx}/static/new/js/echarts-all.js"></script>
<script type="text/javascript" src="${ctx }/static/jquery-easyui-1.4/jquery.easyui.min.js"></script>
<script type="text/javascript">
    // 基于准备好的dom，初始化echarts图表
    // 新办户分分行业分分局分布图
    $(function(){
            var myChart = echarts.init(document.getElementById('main'));
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'right',
                    data: ['新城区', '碑林区', '雁塔区', '未央区', '灞桥区', '莲湖区', '阎良']

                },
                series: [
                    {
                        name: '任务完成率',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
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
                                show: false
                            }
                        },
                        data: [
                            {value: 200, name: '碑林区'},
                            {value: 159, name: '雁塔区'},
                            {value: 622, name: '未央区'},
                            {value: 88, name: '灞桥区'},
                            {value: 632, name: '莲湖区'},
                            {value: 185, name: '阎良'},
                            {value: 100, name: '新城区'}

                        ]
                    }
                ]
            };

            // 为echarts对象加载数据
            myChart.setOption(option);

            //数据统计2


            //数据统计2
            var myChart3 = echarts.init(document.getElementById('main3'));
            option3 = {
                title: {
                    //text: '某地区蒸发量和降水量',
                    //subtext: '纯属虚构'
                },
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data: ['入库总税款','营业税入库税款','城建税入库税款']
                },

                toolbox: {
                    show: true,
                    feature: {
                        dataView: {show: false, readOnly: false},
                        magicType: {show: true, type: ['line', 'bar']},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },

                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                    }
                ],
                yAxis : [
                    {
                        type: 'value'
                    }
                ],

                series : [
                    {
                        name: '入库税款',
                        type: 'line',
						itemStyle: {
						            normal: {color:'#41D141'} 
						},
                        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7,55.4,62.8,78.6,45.9,22.4,98.9],
                        markPoint: {
                            data: [
                                {name: '月最高', value: 182.2, xAxis: 7, yAxis: 183, symbolSize: 18},
                                {name: '月最低', value: 2.3, xAxis: 11, yAxis: 3}
                            ]
                        },
                        markLine: {
                            data: [
                                {type: 'average', name: '平均值'}
                            ]
                        }
                    },
                    {
                        name: '营业税入库税款',
                        type: 'bar',
						itemStyle: {
						            normal: {color:'#0379fd'}
						},
                        data: [1.1, 2.9, 3.0, 12.4, 15.7, 33.7,12.4,47.8,58.6,25.9,12.4,68.9]

                    },
                    {
                        name: '城建税入库税款',
                        type: 'bar',
						itemStyle: {
						normal: {
							     color:'#03d4d7'
						      } 
					    } , 
                        data: [6.1, 9.9, 12.0, 33.4, 44.7, 22.7,77.4,59.8,38.6,66.9,33.4,88.9]

                    }
                ]
            }
            ;
            // 为echarts对象加载数据
            myChart3.setOption(option3);
            setInterval(function () {
                option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
                myChart.setOption(option, true);
            }, 2000);
    })
</script>
</body>
</html>

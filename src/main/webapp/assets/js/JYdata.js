var mydate = new Date();
$('.month').each(
        function(index,o){
            o.value=mydate.getMonth()+1;
        }
);
function extracted(echartObj, name) {
    var echart;
    for (var i = 0; i < echartObj.length; i++) {
        if (name == echartObj[i].name) {
            echart = echartObj[i].value;
            break;
        }
    }
    return echart;
}

function changeData(parmas){

    $.post("sjhz/job.do", parmas,function (data) {
               var json = eval('(' + data + ')');
                if (json) {
                    var html = '';
                    $.each(json, function (i, o) {
                        if (o.value / 10000 > 0) {
                            var num = Math.round(o.value / 10000);
                            html += '<li> <span></span> <a href="javascript:;">' + o.name + '</a> <span>' + num + '万条</span></li>'
                        } else {
                            html += '<li> <span></span> <a href="javascript:;">' + o.name + '</a> <span>' + o.value + '</span></li>'
                        }

                    });
                    $('#demoList').html(html);
                }
            }, "json");
}
function resolve(type,index){
   var class1;
   if(type=="xwsj"){
       switch(index){
           case "1":
               class1="1"; //新闻
               break;
           case "2":
               class1="2";//境外
               break;
           case "3":
               class1="3";//论坛
               break;
           case "4":
               class1="4";//博客
               break;
           case "5":
               class1="5"; //微信公众号
               break;
           case "6":
               class1="6";//政府网站
               break;
           case "7":
               class1="7";  //微博类
               break;
           case "8":
               class1="8"; //学术智库
               break;
           case "9":
               class1="9"; //财经资讯
               break;
           case "10":
               class1="10"; //新闻客户端
               break;
           case "11":
               class1="11"; //上市公告
               break;
       }
   }else if(type=="dzsj"){
       switch(index){
           case "1":
               class1="12"; //就业信息
               break;
           case "2":
               class1="13";//电商信息
               break;
           case "3":
               class1="14";//房地产交易
               break;
           case "4":
               class1="15";//经济统计数据
               break;
           case "5":
               class1="16"; //搜索引擎
               break;
           case "6":
               class1="17";//上市公司数据
               break;
           case "7":
               class1="18";//第三方业务数据
               break;

       }
   }
    return class1;
}
$(function () {
        var type='${param.type}'
        var index='${param.index}';
        var class1=resolve(type,index);
        var  source;
        if(type=='xwsj'){
            source='1'
        }else if(type=='dzsj'){
            source='2';
        }
        alert(class1);
        var demo = $('#demo').echart3Utils({
            type: 'line',
            ajax: {
                url: 'sjhz/job.do?time='+new Date().getTime(),
                dataType: 'json',
                type:'post',
                params: {
                    class1:"12", //就业
                    year: $('select[name="demoSelect"][class="year"] option:selected').val(),
                    month: $('select[name="demoSelect"][class="month"] option:selected').val(),
                    type:"line",
                    source:source
                },
                callback: function(json) {
                    json = eval('(' + json + ')');
                    var legendDatas = [];
                    if (json && json.datasource) {
                        $.each(json.datasource, function(i, o) {
                            legendDatas[i++] = {
                                name: o,
                                icon: 'roundRect'
                            };
                        });
                    }
                    this.reader({
                        xAxis:  {
                            name: '日期',
                            data: json.timeline,
                            axisLabel: {
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 14
                                }
                            }
                        },
                        yAxis:  {
                            name: '条',
                            max: 'dataMax',
                            axisLabel: {
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 14
                                }
                            }
                        },
                        legend: {
                            data: legendDatas,
                            textStyle: {
                                color: '#fff',
                                fontSize: 14
                            }
                        },
                        series: json.datas
                    });
                }
            }
        });
        var demo1 = $('#demo1').echart3Utils({
            type: 'bar',
            ajax: {
            	 url: 'sjhz/job.do?time='+new Date().getTime(),
                 dataType: 'json',
                 type:'post',
                 params: {
                      type:"bar",class1:"12", //就业
                     year: $('select[name="demo1Select"][class="year"] option:selected').val(),
                     month: $('select[name="demo1Select"][class="month"] option:selected').val(),
                     source:source
                 },
                callback: function(json) {
                    json = eval('(' + json + ')');

                    this.reader({
                        xAxis:  {
                            name: '日期',
                            data: json.timeline,
                            axisLabel: {
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 14
                                }
                            }
                        },
                        yAxis:  {
                            name: '条',
                            axisLabel: {
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 14
                                }
                            }
                        },
                        series: json.datas
                    });
                }
            }
        });
        var demo3 = $('#demo3').echart3Utils({
            type: 'pie',
            ajax: {
            	url: 'sjhz/job.do?time='+new Date().getTime(),
                dataType: 'json',
                params: {
                    class1:"12",
                    year: $('select[name="demo3Select"][class="year"] option:selected').val(),
                    month: $('select[name="demo3Select"][class="month"] option:selected').val(),
                    type:"pie",
                    source:source
                },
                callback: function(json) {
                    json = eval('(' + json + ')');
                    this.reader({
                        legend: {
                            orient: 'vertical',
                            x: 'right',
                            top:90,
                            left:'80%',
                            itemGap:20,
                            data: json.datasource,
                            textStyle: {
                                color: '#fff',
                                fontSize: 14
                            }
                        },
                        series: json.datas
                    });
                }
            }
        });


     changeData({queryType: "1",class1:class1,time:new Date().getTime(),
         source:source});

    var echartObj=[
        {name:"demoSelect",value:demo},
        {name:"demo1Select",value:demo1},
        {name:"demo3Select",value:demo3}
    ]

    $('.year').on('change', function () {

        var $this = $(this);
        $('.month').val('0');
        var echart = extracted(echartObj, $this.attr("name"));

        echart.reload({
                ajax: {
                    params: {
                        year: $this.val(),
                        month: ''
                    }
                }
            })

    });
    $('.month').on('change', function () {
        var $this = $(this);
            var echart = extracted(echartObj, $this.attr("name"));
            echart.reload({
                ajax: {
                    params: {
                        year: $('select[name=echart][class="year"] option:selected').val(),
                        month: $this.val()
                    }
                }
            })

    });

    $('#demo4select').on('change', function() {
        changeData({querytype: $(this).val(),class1:class1,time:new Date().getTime(),
            source:source});
    });

});
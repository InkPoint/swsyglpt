$(function(){

    slide();
    path();
    datanews();
    datamark();
    
    var loginUrl = $("#login_url").val();
    $('.list li a').each(function () {
    	if (String(window.location).indexOf($($(this))[0].href) != -1)
            $(this).addClass('current').siblings().removeClass('current');
    }); 
    
    $(window).resizeEnd(function(){
    	var h = document.body.clientHeight-$('.header').height();
        var w = document.body.clientWidth;
        $('.aside').height(h-20);
        $('.charts').height(h-20);
        $('.aside-All').height($('.aside').height()-$('.dataMonitor').height());
        $('.chart-content').height(h-$('.chart-title').height()-20);
        
        $('.leftChart').height($('.charts').height()-$('.total').height()-80);
//        $('.leftChart>div').height($('.leftChart').height());
        $('.rightChart').height($('.charts').height()-$('.total').height()-86);
        $('.leftChart canvas').height($('.leftChart').height());
        
        $('.contentBox .chartIn').height($('.contentBox').height()-$('.chartName').height()-$('.chartPro').height());
        $('.chartIn>div>div:first-child').height($('.contentBox').height()-$('.chartName').height()-$('.chartPro').height());
        $('.chartIn>div:first-child').height($('.contentBox').height()-$('.chartName').height()-$('.chartPro').height());
        $('.contentBox .chartIn canvas').height($('.contentBox').height()-$('.chartName').height()-$('.chartPro').height());
        $('#demo1,#demo,#demo3,#chartdata').height($('.contentBox').height()-82);
        
        var wid = $('#demoDS').width();
        $('#demoDS>div').width(wid);
        $('#demoDS>div canvas').width(wid);
    	
    	if($(window).width()<1366){
            $('.leftChart>span').css({'width':'250px','height':'250px','backgroundSize':'250px','marginTop':'-125px','marginLeft':'-125px'});
            $('.rightChart').css({'backgroundSize':'400px 300px'});
            //location.reload(true)
        }else{
            $('.leftChart>span').css({'width':'300px','height':'300px','backgroundSize':'300px','marginTop':'-150px','marginLeft':'-150px'});
            $('.rightChart').css({'backgroundSize':'600px 400px'});
        }
    	echarts.init(document.getElementById('chart1')).setOption(option1);  
    	
       
    });
    $(window).resizeEnd();
    
    var h = document.body.clientHeight-$('.header').height();
    var w = document.body.clientWidth;
    $('.aside').height(h-20);
    $('.charts').height(h-20);
    $('.content1').height(h);
    $('.aside-All').height($('.aside').height()-$('.dataMonitor').height()-6);
    $('.chart-content').height(h-$('.chart-title').height()-20);
//    $('.leftChart>div').height($('.leftChart').height());
    $('.leftChart').height($('.charts').height()-$('.total').height()-80);
    $('.rightChart').height($('.charts').height()-$('.total').height()-86);
    $('.leftChart canvas').height($('.leftChart').height());
    
    function slide(){
        //获取1级菜单总分类名称标签
        var lis = $('.all>a');
        //获取2级菜单分类标签
        var lisIn = $('.lists>li>a');
        //获取左边线
        var leftLine = $('.leftLine');
        //设置左侧2级菜单栏滑动效果
        var index;
        for(var i = 0; i < lis.length;i++){
            $(lis[i]).on('click', function (event) {
                event.stopPropagation();
                var d = null;
                //获取到索引值
                index =$(this).text();
                //获取当前对象下的分类列表（详细分类）
                var lis2 = $(this).siblings('ul').children();
                var lis2_ul = lis2.children('ul').children();
                var monitor = $('.dataMonitor').text();
                //设置自动滑进滑出效果

                $(this).siblings('.line').height((lis2.length*45));
                $(this).addClass('active').parents().siblings('').children().removeClass('active');
                $(this).siblings('.leftLine').addClass('active').parents().siblings('').children().removeClass('active');
                $(this).siblings('.line,.lists').slideToggle().parents().siblings('').children('.line,.lists').slideUp();
                
                $(this).siblings('ul').children('li').children('a,span').removeClass('active');
                $('.lists>li>a').not($(this)).siblings('ul').hide();

                //动态设置图表
                $('.chart-title').text('首页 / '+monitor+' / '+$(this).text());

                if(index == '采集总览'){
                    $('.contentBox').css({'display':'none','height':'100%'});
                    window.location.href = ctx + "/gat/sjhz/dataMonitor";
//                    $.post(ctx +"/gat/sjhz/allNews", function(html) {
//                        console.log(html);
//                    	  //$('.index_content').html("");
//                        $('.chart-content').html(html);
//                    });
                }else if(index == '互联网数据'){

                	$.post(ctx +"/gat/sjhz/newsTotalDataContent",{"type":"xwsj","index":"互联网数据"}, function(html) {
                		$('.chart-content').html("");
                        $('.chart-content').html(html);
                   });
                }else if(index == "政府业务数据"){

//                	$.get(common.getCtx() +"/newsDataContent.do",{"type":"xwsj","index":"政府业务数据"}, function(html) {
//                        $('.chart-content').html(html)
//                   });

                }
            })
        };
        //设置3级菜单栏滑动效果
        for(var j = 0;j < lisIn.length;j++){
            $(lisIn[j]).on('click', function (event) {
                event.stopPropagation();
                var lis2 = $(this).parents('.lists').children();
                var lis2_ul = $(this).siblings('ul').children();
                

                $(this).parents('.lists>li').children().not('ul').addClass('active').parents('.lists>li').siblings('').children('a,span').removeClass('active');
                $(this).parents().siblings('.line').height((lis2.length*46)+lis2_ul.length*45);
                $(this).siblings('ul').slideDown().parents('.lists>li').siblings().children('.listsIn').slideUp();
                $('.lists>li>a').not($(this)).siblings('ul').hide();
    
     
                if($(this).text()=='行业类数据'){
                    $(this).parents().siblings('.line').height((lis2.length*45) +lis2_ul.length*52);
                    $.post(ctx +"/gat/sjhz/newsTotalDataContent",{"type":"xwsj","index":"行业类数据"}, function(html) {
                    	$('.chart-content').html('');
                        $('.chart-content').html(html);
                        if($('.chart-content').html() == "{}") {
//        	  				//common.navigate(common.getCtx() + "/system/SpiderSystem.do");
                        	common.navigate("" + loginUrl);
        	  			}
                   });
                }
                if($(this).text()=='媒体类数据'){
                	$(this).parents().siblings('.line').height((lis2.length*47)+lis2_ul.length*46);
                    $.post(ctx +"/gat/sjhz/newsTotalDataContent",{"type":"xwsj","index":"媒体类数据"}, function(html) {
                    	$('.chart-content').html('');
                        $('.chart-content').html(html);

                   });
                }
                if($(this).text()=='位置类数据'){
                	$(this).parents().siblings('.line').height((lis2.length*45));
                    $.post(ctx +"/gat/sjhz/newsTotalDataContent",{"type":"xwsj","index":"媒体类数据"}, function(html) {
                        $('.chart-content').html("");
                        if($('.chart-content').html() == "{}") {
        	  				//common.navigate(common.getCtx() + "/system/SpiderSystem.do");
                        	common.navigate("" + loginUrl);
        	  			}
                   });
                }
                if($(this).text()=='发改委核心业务数据'){
                	 $(this).parents().siblings('.line').height((lis2.length*45) +lis2_ul.length*55);
                    $.post(ctx +"/gat/sjhz/newsTotalDataContent",{"type":"xwsj","index":"媒体类数据"}, function(html) {
                        $('.chart-content').html("");
                        if($('.chart-content').html() == "{}") {
        	  				//common.navigate(common.getCtx() + "/system/SpiderSystem.do");
                        	common.navigate("" + loginUrl);
        	  			}
                   });
                }
            })
        }

    }

    //所有2级菜单分项(4个)的数据显示（向后台请求数据）
    function datanews (){
        //所有2级菜单分项(4个)
        var list2Lis = $('.list-2>li>a,.list-3>li>a ');
        //console.log(list2Lis);
        var d = null;
        for(var n = 0;n < list2Lis.length;n++ ){
            $(list2Lis[n]).on('click', function () {
                console.log($(this));
                //if($(this)){
                //    $.get("..//dataContent.html", function(html) {
                //       $('.chart-content').html(html)
                //    });
                $(this).siblings('ul').children('li').children('a,span').removeClass('active');
                $(this).children().removeClass('active');

            })
        }

    }

    //所有三级菜单中详细分项的数据显示
    function datamark(){
        var list2Lis = $('.listsIn>li>a');//12个小的3级菜单
        //console.log(list2Lis);
        
        var d = null;
        for(var n = 0;n < list2Lis.length;n++ ){
            $(list2Lis[n]).on('click', function () {
            	 var index = $(this).text();
                 $(this).addClass('active').parents('li').siblings('li').children('a,span').removeClass('active');
                 //console.log($(this).parents('.listsIn').siblings('a'));
                 $(this).parents('.listsIn').siblings('a').removeClass('active');

                
                if(index == '新闻'){
                	
                    $.post(ctx +"/gat/sjhz/dataContent1",{"type":"xwsj","index":"新闻数据"},  function(html) {
                    	$('.chart-content').html('');
                        $('.chart-content').html(html);
                        if($('.chart-content').html() == "{}") {
        	  				//common.navigate(common.getCtx() + "/system/SpiderSystem.do");
                        	common.navigate("" + loginUrl);
        	  			}
                    });
                } else if(index == "微博") {
	                   	 $.post(ctx +"/gat/sjhz/newsDataContent",{"type":"xwsj","index":"微博数据"}, function(html) {
	                   		$('.chart-content').html('');
	                          $('.chart-content').html(html);
	                          if($('.chart-content').html() == "{}") {
	          	  				//common.navigate(common.getCtx() + "/system/SpiderSystem.do");
	                        	  //common.navigate("" + loginUrl);
	          	  			}
	                     });
                   } else if(index == "境外") {
                	   $.post(ctx +"/gat/sjhz/newsDataContent",{"type":"xwsj","index":"境外数据"}, function(html) {
                		   $('.chart-content').html('');
	                          $('.chart-content').html(html);
	                          if($('.chart-content').html() == "{}") {
	          	  				//common.navigate(common.getCtx() + "/system/SpiderSystem.do");
	                        	  common.navigate("" + loginUrl);
	          	  			}
	                     });
                   } else if(index == "论坛") {
                	   $.post(ctx +"/gat/sjhz/newsDataContent",{"type":"xwsj","index":"论坛数据"}, function(html) {
                		   $('.chart-content').html('');
	                          $('.chart-content').html(html);
	                          if($('.chart-content').html() == "{}") {
	          	  				//common.navigate(common.getCtx() + "/system/SpiderSystem.do");
	                        	  common.navigate("" + loginUrl);
	          	  			}
	                     });
                   } else if(index == "博客") {
                	   $.post(ctx +"/gat/sjhz/newsDataContent",{"type":"xwsj","index":"博客数据"}, function(html) {
                		   $('.chart-content').html('');
	                          $('.chart-content').html(html);
	                          if($('.chart-content').html() == "{}") {
	          	  				//common.navigate(common.getCtx() + "/system/SpiderSystem.do");
	                        	  common.navigate("" + loginUrl);
	          	  			}
	                     });
                   } else if(index == "微信公众号") {
                	   $.post(ctx +"/gat/sjhz/newsDataContent",{"type":"xwsj","index":"微信数据"}, function(html) {
                		   	  $('.chart-content').html('');
	                          $('.chart-content').html(html);
	                          if($('.chart-content').html() == "{}") {
	          	  				//common.navigate(common.getCtx() + "/system/SpiderSystem.do");
	                        	  common.navigate("" + loginUrl);
	          	  			}
	                     });
                   }else if(index == '就业'){
                	   var indexValue = '招聘数据';
	                	$.post(ctx +"/gat/sjhz/JYDataContent",{"type":"dzsj","index":indexValue}, function(html) {
	                		$('.chart-content').html('');
	                        $('.chart-content').html(html);
	                        if($('.chart-content').html() == "{}") {
	        	  				//common.navigate(common.getCtx() + "/system/SpiderSystem.do");
	                        	common.navigate("" + loginUrl);
	        	  			}
	                    });
                   
            }else if(index == '简历'){
         	   var indexValue = '简历数据';
             	$.post(ctx +"/gat/sjhz/JYDataContent",{"type":"dzsj","index":indexValue}, function(html) {
             		$('.chart-content').html('');
                     $('.chart-content').html(html);
                     if($('.chart-content').html() == "{}") {
     	  				//common.navigate(common.getCtx() + "/system/SpiderSystem.do");
                     	common.navigate("" + loginUrl);
     	  			}
                 });
             }else if(index == "电商") {
                    	$.post(ctx +"/gat/sjhz/DSDataContent",{"type":"dzsj","index":"电商数据"}, function(html) {
                    		$('.chart-content').html("");
	                        $('.chart-content').html(html);
	                        if($('.chart-content').html() == "{}") {
	        	  				//common.navigate(common.getCtx() + "/system/SpiderSystem.do");
	                        	common.navigate("" + loginUrl);
	        	  			}
	                    });
                    }else if(index == "房产") {
                    	$.post(ctx +"/gat/sjhz/FCDataContent",{"type":"dzsj","index":"房产数据"}, function(html) {
                    		$('.chart-content').html("");
	                        $('.chart-content').html(html);
	                        if($('.chart-content').html() == "{}") {
	        	  				//common.navigate(common.getCtx() + "/system/SpiderSystem.do");
	                        	common.navigate("" + loginUrl);
	        	  			}
	                    });
                    } else if(index == "经济统计") {
                    	$.post(ctx +"/gat/sjhz/newsDataContent",{"type":"dzsj","index":"经济统计数据"}, function(html) {
                    		$('.chart-content').html('');
	                        $('.chart-content').html(html);
	                        if($('.chart-content').html() == "{}") {
	        	  				//common.navigate(common.getCtx() + "/system/SpiderSystem.do");
	                        	common.navigate("" + loginUrl);
	        	  			}
	                    });
                    } else if(index == "上市公司财务报表") {
                    	$.post(ctx +"/gat/sjhz/newsDataContent",{"type":"dzsj","index":"上市公司财务报表数据"}, function(html) {
                    		$('.chart-content').html('');
	                        $('.chart-content').html(html);
	                        if($('.chart-content').html() == "{}") {
	        	  				//common.navigate(common.getCtx() + "/system/SpiderSystem.do");
	                        	common.navigate("" + loginUrl);
	        	  			}
	                    });
                    }  else if(index == "搜索引擎") {
                    	$.post(ctx +"/gat/sjhz/newsDataContent",{"type":"dzsj","index":"搜索引擎数据"}, function(html) {
                    		$('.chart-content').html('');
	                        $('.chart-content').html(html);
	                        if($('.chart-content').html() == "{}") {
	        	  				//common.navigate(common.getCtx() + "/system/SpiderSystem.do");
	                        	common.navigate("" + loginUrl);
	        	  			}
	                    });
                    } 
            })
        }
    }

//改变标题等路径
function path(){
//动态改变路径及信息
    var lists = $('.lists>li');
    var monitor = $('.dataMonitor').text();
    for(var j = 0; j < lists.length;j++){
        $(lists[j]).on('click', function () {
            $(this).children('a').addClass('active').end().siblings().children('a').removeClass('active');
            var text = $(this).children('a').text();
            $('.chart-title').text('首页 / '+monitor+' / '+$(this).parents('ul').siblings('a').text()+' / '+ text);
        })
    }
//            动态改变表格标题
        var baseData = $('.listsIn>li>a');
        baseData.on('click', function() {
            var inner = $(this).text();
            //alert(inner);
            console.log($('.chartTitle'));
            $('.chartTitle').text("【"+inner+"】");
        });
    }


    $.ajax({
    	    url:ctx +"/gat/sjhz/dataMonitorList",
    	    
    	   type: 'post',
    	   
	    success:function (data) { 
	    	
		    	//初始化常用数据
			    var typelist=data.typedata;
			
		    	var xwsj = data.新闻数据;
		    	
		    	if(isNaN(xwsj)){
		    		
		    		$("#news").text("0条");
		    		
		    	}else{
		    		
		    		$("#news").text(parseInt((xwsj)/10000)+"万条");
		    		
		    	}
		    	
		    	
		    	var bk = data.博客数据;
		    	
		        if(isNaN(bk)){
		        	
		        	$("#blogs").text("0条");
		        	
		    	}else{
		    		
		    		$("#blogs").text(parseInt(bk/10000)+"万条");
		    		
		    	}
		    	
		    	
		    	
		    	var jw = data.境外数据;
		    	
		    	if(isNaN(jw)){
		    		
		    		$("#overseas").text("0条");
		    		
		    	}else{
		    		
		    		$("#overseas").text(parseInt(jw/10000)+"万条");
		    		
		    	}
		    	
		    	
		    	var wxsj = data.微信数据;
		    	
		    	if(isNaN(wxsj)){
		    		
		    		$("#wechat").text("0条");
		    		
		    	}else{
		    		
		    		$("#wechat").text(parseInt(wxsj/10000)+"万条");
		    		
		    	}
		
		
		    	var wb = data.微博数据;
		    	
		        if(isNaN(wb)){
		    		
		        	$("#weblog").text("0条");
		    		
		    	}else{
		    		
		    		$("#weblog").text(parseInt(wb/10000)+"万条");
		    		
		    	}
		    	
		    	
		    	
		    	var fcsj = data.房产数据;
		    	
		        if(isNaN(fcsj)){
		    		
		        	$("#houses").text("0条");
		    		
		    	}else{
		    		
		    		$("#houses").text(parseInt(fcsj/10000)+"万条");
		    		
		    	}
		    	
		    	
		    	var zpsj=data.招聘数据;
		    	
		        if(isNaN(zpsj)){
		    		
		        	$("#job").text("0条");
		    		
		    	}else{
		    		
		    		$("#job").text(parseInt(zpsj/10000)+"万条");
		    		
		    	}
		    	
		    	
		    	
		    	var dssj=data.电商数据;
		    	
		        if(isNaN(dssj)){
		    		
		        	$("#E-business").text("0条");
		    		
		    	}else{
		    		
		    		$("#E-business").text(parseInt(dssj/10000)+"万条");
		    		
		    	}
		    	
		    	
		    	
		    	var jjtjsj=data.经济统计数据;
		    	
		        if(isNaN(jjtjsj)){
		    		
		        	$("#economy").text("0条");
		    		
		    	}else{
		    		
		    		$("#economy").text(parseInt(jjtjsj/10000)+"万条");
		    		
		    	}
		    	
		    	var lt=data.论坛数据;
		    	
		        if(isNaN(lt)){
		    		
		        	$("#forum").text("0条");
		    		
		    	}else{
		    		
		    		$("#forum").text(parseInt(lt/10000)+"万条");
		    		
		    	}
		
				var cwbb = data.上市公司财务报表数据;
		
				if(isNaN(cwbb)){
		
					$("#account").text("0条");
		
				}else{
		
					$("#account").text(parseInt((cwbb)/10000)+"万条");
		
				}
		
				var ssyq = data.搜索引擎数据;
		
				if(isNaN(ssyq)){
		
					$("#search").text("0条");
		
				}else{
		
					$("#search").text(parseInt((ssyq)/10000)+"万条");
		
				}
		
		
		    	var typedata = data.typedata;
		    	
		    	
			    var listfortype= new Array();
			    
			    for(var i=0;i<typedata.length;i++){
			    	
			    	listfortype[i]=typedata[i].name;
			    	
			    }
			    
			    
			    //修改左边地球背景的饼图
			    option1 = {
			    	    tooltip : {
			    	        trigger: 'item',
			    	        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    	    },
			    	    color:['royalblue','yellow'] ,
			    	    toolbox: {
			    	        show : false,
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
			    	                        funnelAlign: 'center',
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
			    	            name:'访问来源',
			    	            type:'pie',
			    	            radius : ['50%', '70%'],
			    	            itemStyle : {
			    	                normal : {
			    	                    label : {
			    	                        show : true
			    	                    },
			    	                    labelLine : {
			    	                        show : true
			    	                    }
			    	                },
			    	                emphasis : {
			    	                    label : {
			    	                        show : true,
			    	                        position : 'center',
			    	                        textStyle : {
			    	                            fontSize : '30',
			    	                            fontWeight : 'bold'
			    	                        }
			    	                    }
			    	                }
			    	            },
			    	            label:{
			    	            	normal:{
			    	            		textStyle:{
			    	            			fontSize:24,
			    	            		}
			    	            	}
			    	            },
			    	            data:typedata
			    	        }
			    	    ]
			    	};
			    
			    echarts.init(document.getElementById('chart1')).setOption(option1);  
		    }
    
});



fade();
function fade(){
    var leftLi = $('.mediaData li');
    var rightLi = $('.fieldData li');
    //console.log(dataLi);
    leftLi.on('mouseenter', function () {
        $(this).css({'transform':'scale(1.2) translate(-20px,0)'}).siblings().css({'transform':'scale(1)'});
        $(this).children('a').css({'backgroundColor':'#059AA9'}).end().siblings().children('a').css({'backgroundColor':'#696866'});
        $(this).children('span').css({'color':'#fff'}).end().siblings().children('span').css({'color':'#777777'});
    });
    rightLi.on('mouseenter', function () {
        $(this).css({'transform':'scale(1.2) translate(20px,0)'}).siblings().css({'transform':'scale(1)'});
        $(this).children('a').css({'backgroundColor':'#059AA9'}).end().siblings().children('a').css({'backgroundColor':'#696866'});
        $(this).children('span').css({'color':'#fff'}).end().siblings().children('span').css({'color':'#777777'});
    });
    leftLi.on('mouseleave', function () {
        $(this).css({'transform':'scale(1) translate(0,0)'});
        $(this).children('a').css({'backgroundColor':'#696866'});
        $(this).children('span').css({'color':'#777777'});
    })
    rightLi.on('mouseleave', function () {
        $(this).css({'transform':'scale(1) translate(0,0)'});
        $(this).children('a').css({'backgroundColor':'#696866'});
        $(this).children('span').css({'color':'#777777'});
    })
} 

function splists(datanum,xh){
    var splistr=datanum+"";
	var splitnums=new Array(8);
	for(var i=0;i<splistr.length;i++){
	    var everydata=splistr.charAt(i);
		splitnums[8-splistr.length+1+i]=parseInt(everydata);
	}
	//将为空的数据赋值为0
	for(var k=0;k<splitnums.length;k++){
	    if(splitnums[k]==""||splitnums[k]==null){
		   splitnums[k]=0;
		}
	}
	return splitnums[xh];
  }

});
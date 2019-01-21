$(function(){
	
	var h = document.body.clientHeight-$('.header').height();
    $('.content').height(h);
    var w = document.body.clientWidth;
    $('.aside').height(h-20);
    $('.charts').height(h-20);
    $('.content1').height(h);
    $('.aside-All').height($('.aside').height()-$('.dataMonitor').height());
    $('.chart-content').height(h-$('.chart-title').height()-20);
    $('.contentBox .chartBox').height($('.contentBox').height());
    $('.contentBox img').height($('.contentBox').height()*0.9);
   
    $(window).resizeEnd(function(){
        var h = document.body.clientHeight-$('.header').height();
        var w = document.body.clientWidth;
        $('.aside').height(h-20);
        $('.charts').height(h-20);
        $('.aside-All').height($('.aside').height()-$('.dataMonitor').height());
        $('.chart-content').height(h-$('.chart-title').height()-20);

        $('.contentBox .chartBox').height($('.contentBox').height());
        $('.contentBox img').not('.sourcePage3 img').height($('.contentBox').height());



    });
    $(window).resizeEnd();
    
    slide();
    path();
    data();
    
    
    $('.list li a').each(function () {
    	if(String(window.location).indexOf($($(this))[0].href) == -1) {
    		$(this).removeClass('current');
    	}
    	if (String(window.location).indexOf($($(this))[0].href) != -1)
            $(this).addClass('current').siblings().removeClass('current');
    });
    
    var h = document.body.clientHeight-$('.header').height();
    $('.content1').height(h);
   

//设置左侧菜单栏滑动效果以及动态显示图表
    function slide(){
        //    获取总分类名称标签（采集总览，基础数据，定制数据）
        var lis = $('.all>a');
//            获取左边线
        var leftLine = $('.leftLine');
        //设置左侧菜单栏滑动效果以及动态显示图表
        var index;
        for(var i = 0; i < lis.length;i++){
            $(lis[i]).on('click', function () {
                //获取到索引值
                index =$(this).text();
                //获取当前对象下的分类列表（详细分类）
                var lis2 = $(this).siblings('ul').children();
                var monitor = $('.dataMonitor').text();
                //设置自动滑进滑出效果
                $(this).siblings('.line').height((lis2.length*45));
                $(this).addClass('active').parents().siblings('').children().removeClass('active');
                $(this).siblings('.leftLine').addClass('active').parents().siblings('').children().removeClass('active');
                $(this).siblings('.line,.lists').slideDown().parents().siblings('').children('.line,.lists').slideUp();

                //动态设置图表
                $('.chart-title').text('首页 / '+monitor+' / '+$(this).text())
                if(index == '采集 / 存储'){
                    var url=ctx+'/assets/images/page1-1.gif';
                    $('.chartIn').children('img').css({'display':'block'}).siblings().css({'display':'none'});
                    $('.contentBox').html('<img src="'+url+'" style="width:1200px;height:700px;  alt="">');
                }else if(index == '计算'){
                    var url=ctx+'/assets/images/page2.gif';
                    $('.contentBox').html('<img src="'+url+'" style="width:1100px;height:600px;"  alt="">')
                }else if(index == '可视化'){
                    var url=ctx+'/assets/images/page3.gif';
                    $('.contentBox').html('<img src="'+url+'" style="width:1100px;height:700px;"  alt="">')
                }
                else if(index == '报告'){
                    var url=ctx+'/assets/images/page4.gif';
                    $('.contentBox').html('<img src="'+url+'" style="width:1100px;height:700px;"  alt="">')
                }
                else if(index == '服务器健康'){
                    var url=ctx+'/assets/images/zyjc5.png';
                    $('.contentBox').html('<img src="'+url+'" style="width:100%" alt="">')
                };
            })
        }

    }

    function path(){
        //            动态改变路径及信息
        var lists = $('.lists>li');
        var monitor = $('.dataMonitor').text();
        for(var j = 0; j < lists.length;j++){
            $(lists[j]).on('click', function () {
                $(this).children('a').toggleClass('active').end().siblings().children('a').removeClass('active');
                $(this).children('span').css(
                    {'backgroundColor':'#059aa9'}).end()
                    .siblings().children('span').css({'backgroundColor':'#373941'});
                var text = $(this).children('a').text();
                $('.chart-title').text('首页 / '+monitor+' / '+$(this).parents('ul').siblings('a').text()+' / '+ text);
            })
        }

//            动态改变表格标题
        var baseData = $('.lists>li>a');
        for(var k =0 ; k < baseData.length;k++){
            $(baseData[k]).on('click', function () {
                var inner = $(this).text();
                $('#chartTitle').text(inner);
            })
        }
    }

    function data(){

    }


});
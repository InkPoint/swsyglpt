$(function () {

    	common.ajaxPost(
    			common.getCtx() + "/mians/datamonitor.do", 
    		    		{
    		             "userName": "8888"
    		            }, 
    	    function (result) { 
    	    if (result.success) {

    	    	//初始化常用数据
    	    	var list = result.data.detaildata;
    	    	
    	    	var typedata = result.data.typedata;
    	    	
    	    	
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
    		    	            data:typedata
    		    	        }
    		    	    ]
    		    	};
    		    
    		    echarts.init(document.getElementById('chart1')).setOption(option1);  
    		       
    		       
    	    } else {
    	        common.showMsg("请从右侧分类中选择！");
    	    }
    	}
    	);

    	secondKill();
    	function secondKill() {
    	//  获取元素
    	      var time = $('.total');
    	      var timebox = time.find('span');
    	      var total = 5000000000;
    	      var addnums=0;
    	      var interval = setInterval(function () {
    	          var random = parseInt(Math.random()*1000) + 100;
    	          //alert("random:"+random+"   addnums:"+addnums+"   total:"+total);
    	          if(addnums>=100000000){
    	        	  addnums=0;
    	          }
    	          addnums=addnums+random;
    	          total =total+ random;
    	          var  num =  total / 100000000;
    	          $('.total>div:eq(0)').text(parseInt(num)+"亿");
    	          var  num0 =  splists(addnums,1);
    	          $(timebox[0]).text(parseInt(num0));
    	          var  num1 = splists(addnums,2);
    	          $(timebox[1]).text(parseInt(num1));
    	          var  num2 = splists(addnums,3);
    	          $(timebox[2]).text(parseInt(num2));
    	          var  num3 =splists(addnums,4);
    	          $(timebox[3]).text(parseInt(num3));
    	          var  num4 = splists(addnums,5);
    	          $(timebox[4]).text(parseInt(num4));
    	          var  num5 = splists(addnums,6);
    	          $(timebox[5]).text(parseInt(num5));
    	          var  num6 = splists(addnums,7);
    	          $(timebox[6]).text(parseInt(num6));
    	          var  num7 = splists(addnums,8);
    	          $(timebox[7]).text(parseInt(num7));

    	      },500);
    	  }


    	fade();
    	function fade(){
    	    var leftLi = $('.mediaData li');
    	    var rightLi = $('.fieldData li');
    	    //console.log(dataLi);
    	    leftLi.on('mouseenter', function () {
    	        $(this).css({'transform':'scale(1.5) translate(-30px,0)'}).siblings().css({'transform':'scale(1)'});
    	        $(this).children('a').css({'backgroundColor':'#059AA9'}).end().siblings().children('a').css({'backgroundColor':'#696866'});
    	        $(this).children('span').css({'color':'#fff'}).end().siblings().children('span').css({'color':'#777777'});
    	    });
    	    rightLi.on('mouseenter', function () {
    	        $(this).css({'transform':'scale(1.5) translate(30px,0)'}).siblings().css({'transform':'scale(1)'});
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
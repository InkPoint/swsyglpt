// 主要内容
var
	$gitem = $(".goods-item");

// 商品鼠标经过样式
$gitem.hover(function(){
	$(this).addClass("item-active");
},function(){
	$(this).removeClass("item-active");
})
	
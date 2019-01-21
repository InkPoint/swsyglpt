(function ($){
    $.myajax={
        common:function(type,param,url,sucfun){
            if(type==""){
                type="post";
            }
            $.ajax({
    //          contentType:'application/json',
                contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
                url: url,
                data: param,
                type:'post',
                dataType:'json',
                success: sucfun
            });
        }
    }
})(jQuery);
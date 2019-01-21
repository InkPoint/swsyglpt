(function ($) {
    $.TS = {
        getCombo : function(array){
            return array;
        },
        getComboText : function(array,value){
            var result = "";
            $.each(array,function(i,r){
                if (r.id == value){
                    result = r.text;
                    return false;
                }
            })
            return result;
        },
        formatterNumber : function(value,precision){
            var result;
            if (value===undefined || isNaN(value))
                return value;
            var pos = value.indexOf('.');
            if (pos == -1 && value.length > precision){
                v = new Number(value).toExponential(precision);
                result = v;
            }else if ((value.length - pos) > precision || pos > precision){
                v = new Number(value).toExponential(precision);
                result = v;
            }else
                result = value;
            return result;
        },
        getFormJson : function(frm) {
            //将form中的值转换为键值对。
            var o = {};
            var a = $(frm).serializeArray();
            $.each(a, function () {
                if (o[this.name] !== undefined) {
                    if (!o[this.name].push) {
                        o[this.name] = [o[this.name]];
                    }
                    o[this.name].push(this.value || '');
                } else {
                    o[this.name] = this.value || '';
                }
            });
            return o;
        },
        getDataGridJson: function(datagridId){
            var jsonArr = new Array();
            var jsonStr = "";
            var $g = $(datagridId);
            if($g && $g.length == 1){
                $g.datagrid('acceptChanges');
                var d = $g.datagrid('getData');
                for(var i=0; i<d.rows.length; i++){
                    var cc = d.rows[i];
                    jsonArr.push(cc);
                }
                jsonStr = JSON.stringify(jsonArr);
            }
            return jsonStr;
        },
        genDataGridParam: function(dataGridId,paramName,filter){
            var rows = undefined;
            $(dataGridId).datagrid('acceptChanges');
            if('selected' == filter){
                rows = $(dataGridId).datagrid('getSelections');
            }else{
                rows = $(dataGridId).datagrid('getRows');
            }
            var paramArr = "{";
            for(var rowObj in rows)
            {                //console.log(rowObj)
                for(var rowAttr in rows[rowObj])
                {
                    var idx = rowObj;
                    var attrName = rowAttr;
                    var attrVal = rows[rowObj][rowAttr];
                    paramArr = paramArr + '"'+paramName + '[' + rowObj + '].' + attrName + '":"' + attrVal + '",';
                }
            }
            if(paramArr.lastIndexOf(",") != -1){
                paramArr = paramArr.substring(0,paramArr.length-1);
            }
            paramArr = paramArr + '}';
            //console.log('paramArr=', paramArr);
            return $.parseJSON(paramArr);
        },
        numberFmt: function(value){
            if(value == 0){
                return '';
            }else{
                return value;
            }
        },
        Dateformatter: function (date){
            var y = date.getFullYear();
            var m = date.getMonth()+1;
            var d = date.getDate();
            return y+'-'+(m<10?('0'+m):m)+'-'+(d<10?('0'+d):d);
        },
        Dateparser: function (s){
            if (!s) return new Date();
            var ss = (s.split('-'));
            var y = parseInt(ss[0],10);
            var m = parseInt(ss[1],10);
            var d = parseInt(ss[2],10);
            if (!isNaN(y) && !isNaN(m) && !isNaN(d)){
                return new Date(y,m-1,d);
            } else {
                return new Date();
            }
        }
    };
    // json
    $.TS.json = {
        toJSON: function (object) {
            var type = typeof object;
            if ('object' == type) {
                if (Array == object.constructor)
                    type = 'array';
                else if (RegExp == object.constructor)
                    type = 'regexp';
                else
                    type = 'object';
            }
            switch (type) {
                case 'undefined':
                case 'unknown':
                    return;
                    break;
                case 'function':
                case 'boolean':
                case 'regexp':
                    return object.toString();
                    break;
                case 'number':
                    return isFinite(object) ? object.toString() : 'null';
                    break;
                case 'string':
                    return '"'
                        + object.replace(/(\\|\")/g, "\\$1").replace(
                        /\n|\r|\t/g,
                        function () {
                            var a = arguments[0];
                            return (a == '\n') ? '\\n'
                                : (a == '\r') ? '\\r'
                                : (a == '\t') ? '\\t' : ""
                        }) + '"';
                    break;
                case 'object':
                    if (object === null)
                        return 'null';
                    var results = [];
                    for (var property in object) {
                        var value = this.toJSON(object[property]);
                        if (value !== undefined)
                            results.push(this.toJSON(property) + ':' + value);
                    }
                    return '{' + results.join(',') + '}';
                    break;
                case 'array':
                    var results = [];
                    for (var i = 0; i < object.length; i++) {
                        var value = this.toJSON(object[i]);
                        if (value !== undefined)
                            results.push(value);
                    }
                    return '[' + results.join(',') + ']';
                    break;
            }
        },
        evalJSON: function (strJson) {
            return eval("(" + strJson + ")");
        }
    };
    $.TS.messager = {
        showMsg: function (title, msg, type, call) {
            if (call) {
                $.messager.alert('<span class="wintitle">' + title + '</span>', msg, type, call);
            }
            else {
                $.messager.alert('<span class="wintitle">' + title + '</span>', msg, type);
            }
        },
        confirm: function (title, msg, call) {
            if (call) {
                $.messager.confirm('<span class="wintitle">' + title + '</span>', msg, call);
            }
            else {
                $.messager.confirm('<span class="wintitle">' + title + '</span>', msg);
            }
        }
    };
    // window
    $.TS.window = {
        getWindowOptions: function (opt) {
            var options = {
                resizable: true,
                modal: true,
                closable: true,
                maximizable: true,
                minimizable: false,
                collapsible: true,
                cache: false,
                width: 800,
                height: 400,
                onClose: function () {
                    $(this).window('destroy');
                }
            }
            $.extend(options, opt);
            return options;
        },
        getWindow: function (opt, win) {
            if (!win)
                win = $('<div id="driftwin" class="easyui-window"></div>');
            opt = this.getWindowOptions(opt);
            opt.title = '<span class="wintitle">' + opt.title + '</span>';
            win.window(opt);
            return win;
        }
    };
	// 时间显示
	$.TS.time = {
		DATETIME_PATTERN : "yyyy年MM月dd日hh时mm分ss秒",
		formatter : function(value, format) {       // 格式化时间对象
            if(!(value instanceof Object)){
                return value;
            }
            if (!format)
                format = this.DATETIME_PATTERN;
            var year = value.year + 1900;
            var month = value.month + 1;
            var date = value.date;
            var hours = value.hours;
            var minutes = value.minutes;
            var seconds = value.seconds;
            var o = {
                "M+" : month, // month
                "d+" : date, // day
                "h+" : hours, // hour
                "m+" : minutes, // minute
                "s+" : seconds, // second
                "q+" : Math.floor((month + 3) / 3)
            // quarter
            }
            if (new RegExp("(y+)").test(format)) {
                format = format.replace(RegExp.$1, year);
            }
            for ( var k in o) {
                if (new RegExp("(" + k + ")").test(format)) {
                    format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k]
                            : ("00" + o[k]).substr(("" + o[k]).length));
                }
            }
            return format;
		},
        formatDate: function(date, format) {    // 格式化带T,+的时间字符串
            if (!date) return;
            date = date.replace("T"," ");
            var pos = date.indexOf("+");
            if(pos != -1){
                date = date.substring(0,pos);
            }
            if (!format) format = "yyyy-MM-dd";
            switch(typeof date) {
                case "string":
                    date = new Date(Date.parse(date.replace(/-/g, "/")));
                    break;
                case "number":
                    date = new Date(date);
                    break;
            }
            if (!date instanceof Date) return;
            var dict = {
                "yyyy": date.getFullYear(),
                "M": date.getMonth() + 1,
                "d": date.getDate(),
                "H": date.getHours(),
                "m": date.getMinutes(),
                "s": date.getSeconds(),
                "MM": ("" + (date.getMonth() + 101)).substr(1),
                "dd": ("" + (date.getDate() + 100)).substr(1),
                "HH": ("" + (date.getHours() + 100)).substr(1),
                "mm": ("" + (date.getMinutes() + 100)).substr(1),
                "ss": ("" + (date.getSeconds() + 100)).substr(1)
            };
            return format.replace(/(yyyy|MM?|dd?|HH?|ss?|mm?)/g, function() {
                return dict[arguments[0]];
            });
        }
	};
})(jQuery);

/*$(document).ajaxError(function (event, jqXHR, request, settings) {
		var result = eval("(" + jqXHR.responseText + ")");
    if (result.errorCode == "5000") {
        $.TS.messager.showMsg('错误提示', "链接超时，请重新登录！", 'error', function () {
        	if (typeof(clientProxy) === "undefined" || !clientProxy.isSupported)
        	  	top.location.href = "/WEB-INF/jsp/acl/user/login2.jsp";
        	else{
        	  	var clientProxy = new tsClientProxy();
        	  	clientProxy.requireLogin({});	
        	}
        });
    } else {
        if (result.message) {
            $.TS.messager.showMsg('错误提示', result.message, 'error');
        } else {
            $.TS.messager.showMsg('错误提示', '错误代码:' + result.errorCode, 'error');
        }
    }
});*/

/**
 * 设置未来(全局)的AJAX请求默认选项
 * 主要设置了AJAX请求遇到Session过期的情况
 */
$.ajaxSetup({
    type: 'POST',
    complete: function(xhr,status) {
        var sessionStatus = xhr.getResponseHeader('sessionStatus');
        if(sessionStatus == 'timeout') {
            $.TS.messager.confirm('提示','由于您长时间没有操作, session已过期, 请重新登录.',function(data){
                if (data) {
                    var top = getTopWinow();
                    top.location.href = getContextPath()+'/login';
                }
            });
        }
    }
});
/**
 * 在页面中任何嵌套层次的窗口中获取顶层窗口
 * @return 当前页面的顶层窗口对象
 */
function getTopWinow(){
    var p = window;
    while(p != p.parent){
        p = p.parent;
    }
    return p;
}

function getContextPath() {
    var contextPath = document.location.pathname;
    var index = contextPath.substr(1).indexOf("/");
    contextPath = contextPath.substr(0, index + 1);
    delete index;
    return contextPath;
}
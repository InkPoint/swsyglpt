var wks = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
var mths = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
function select_accordion(title) {
    $("#bars").accordion('select', title);
}

function getWeekly(date) {
    var day = date.getDay();
    return wks[day];
}

function getMonthly(date) {
    var m = date.getMonth();
    return mths[m];
}

function loadTour(tar, id, ctx) {
    tar.css("padding", "10px");
    tar.load(ctx + "/static/tour/qfdtour.jsp", {id:id});
    tar.fadeIn("slow");
}


function dump_obj(object) {
    var s = "";
    for (var property in object) {
        s = s + "\n " + property + ": " + object[property];
    }
    alert(s);
}

function jsonToString(obj) {
    var THIS = this;
    switch (typeof (obj)) {
        case 'string':
            return '"' + obj.replace(/(["\\])/g, '\\$1') + '"';
        case 'array':
            return '[' + obj.map(THIS.jsonToString).join(',') + ']';//map是自定义的方法映射。
        case 'object':
            if (obj instanceof Array) {
                var strArr = [];
                var len = obj.length;
                for (var i = 0; i < len; i++) {
                    strArr.push(THIS.jsonToString(obj[i]));
                }
                return '[' + strArr.join(',') + ']';
            } else if (obj == null || obj == undefined) {
                return 'null';
            } else {
                var string = [];
                for (var property in obj) string.push(THIS.jsonToString(property) + ':' + THIS.jsonToString(obj[property]));
                return '{' + string.join(',') + '}';
            }
        case 'number':
            return obj;
        case false:
            return obj;
    }
}

$("<div class=\"datagrid-mask\"></div>").css({display:"block", width:"100%", height:$(window).height()}).appendTo("body");
$("<div class=\"datagrid-mask-msg\"></div>").html("正在处理，请稍候。。。").appendTo("body").css({display:"block", left:($(document.body).outerWidth(true) - 190) / 2, top:($(window).height() - 45) / 2});

var _qfd = {
    qfd_about:function () {
        var dlg = getAboutDialog();
        $("#qfdabout").appendTo('#dialog-content').show();
        dlg.dialog({
            title:'<div class="window-title"> 关于DEMX平台系统</div>',
            resizable:true,
            modal:true,
            width:720,
            height:500
        });
    }
}

function getAboutDialog(cat) {
    if (!document.getElementById("qfd-about")) {
        var div = $("<div id='qfd-about'><div id='dialog-content'" +
            " style='padding: 10px;'></div></div>");
        div.appendTo("body");
        if (cat == 0) {
            div.width(800).height(480);
        }
        else {
            div.width(700).height(500);
        }
        div.dialog({
            modal:true,
            onClose:function () {
            }
        });
    }
    return $("#qfd-about");
}

function openFile(name,fid) {
    window.location = "/fileServlet?filename="+name+"&fid=" + fid;
}

function tsClientProxy(keyName){
	this.isSupported = true;
	if (typeof(top.tsWebProxyObject) === "undefined"){
        top.$.TS.messager.showMsg('错误提示','在非DEMX客户端中系统的一些功能将无法使用','error');
		this.isSupported = false;
		return;
	}
	this.TASKADD="TaskAdded";
	this.TASKINITED="TaskInited";
	this.TASKSTART="TaskStarted";
	this.TASKCOMPLETED="TaskCompleted";
	this.TASKERROR="TaskError";
	this.TASKSTOPPED="TaskStopped";
	this.TASKPROGRESS="TaskProgress";
	if (!keyName)
		keyName = "default";
	this.proxyObj = new Object();
	if (this.isSupported){
		top.tsWebProxyObject.addNamedJSObject(keyName);
		this.proxyObj = top.window[keyName];
		this.proxyObj.unbind();
	}

	this.unbindEvent = function(event){
		if (!this.isSupported){
			return;
		}
		if (typeof(event) === "undefined"){
			this.proxyObj.unbind();
		}else{
			this.proxyObj.unbind(event);
		}	
	};
	this.bindEvent = function(event, func){
		if (!this.isSupported){
			return;
		}
		if (event == this.TASKADD){
			this.proxyObj.TaskAdded.connect(func);
		}else if (event == this.TASKINITED){
			this.proxyObj.TaskInited.connect(func);
		}else if (event == this.TASKSTART){
			this.proxyObj.TaskStarted.connect(func);
		}else if (event == this.TASKCOMPLETED){
			this.proxyObj.TaskCompleted.connect(func);
		}else if (event == this.TASKERROR){
			this.proxyObj.TaskError.connect(func);
		}else if (event == this.TASKSTOPPED){
			this.proxyObj.TaskStopped.connect(func);
		}else if (event == this.TASKPROGRESS){
			this.proxyObj.TaskProgress.connect(func);
		}
	};
	this.setSession = function(object){
		if (this.isSupported){
			this.proxyObj.setSession(object);
		}
	};
	this.init = function(object){
		if (!this.isSupported){
			return {};
		}
		return this.proxyObj.init(object);
	};
	this.add = function(object){
		if (!this.isSupported){
			return {};
		}
		return this.proxyObj.add(object);
	};
	this.select = function(object){
		if (!this.isSupported){
			return {};
		}
		return this.proxyObj.select(object);
	};
    this.loadPView = function(object){
        if (!this.isSupported){
            return {};
        }
        return this.proxyObj.loadPView(object);
    };
	this.remove = function(object){
		if (!this.isSupported){
			return {};
		}
		return this.proxyObj.remove(object);
	};
	this.previewImage = function(object){
		if (!this.isSupported){
			return {};
		}
		return this.proxyObj.previewImage(object);
	};
    this.getOSLoginName = function(){
        if (!this.isSupported){
            return {};
        }
        return this.proxyObj.getOSLoginName();
    }
	this.previewTaskImage = function(object){
		if (!this.isSupported){
			return {};
		}
		return this.proxyObj.previewTaskImage(object);
	};
	this.login = function(object){
		if (!this.isSupported){
			$.TS.messager.showMsg('错误提示','在非DEMX客户端中暂时不支持login函数','error');
			return {};
		}
		return this.proxyObj.login(object);
	};
	this.requireLogin = function(object){
		if (!this.isSupported){
			$.TS.messager.showMsg('错误提示','在非DEMX客户端中暂时不支持requireLogin函数','error');
			return {};
		}
		return this.proxyObj.requireLogin(object);
	};
    this.executeTools = function(object){
        if (!this.isSupported){
            $.TS.messager.showMsg('错误提示','在非DEMX客户端中暂时不支持executeTool函数','error');
            return {};
        }
        return this.proxyObj.executeTools(object);
    };
	this.cancel = function(){
		if (!this.isSupported){
			$.TS.messager.showMsg('错误提示','在非DEMX客户端中暂时不支持cancel函数','error');
			return {};
		}
		return this.proxyObj.cancel();
	};
	this.start = function(object){
		if (!this.isSupported){
			return {};
		}
		return this.proxyObj.start(object);
	};
    this.executeToolsFromPath = function(object){
        if (!this.isSupported){
            return {};
        }
        return this.proxyObj.executeToolsFromPath(object);
    };
    this.selectFile = function(object){
        if (!this.isSupported){
            return {};
        }
        return this.proxyObj.selectFile(object);
    };
}
<%@page contentType="text/html;charset=utf-8" pageEncoding="utf-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var='xhid' value='${sessionScope.SESSON_XHID}'/>
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
        tar.load(ctx + "/static/tour/qfdtour.jsp", {id: id});
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

    $('<div class="datagrid-mask"></div>').css({display: "block", width: "100%", height: $(window).height()}).appendTo("body");
    $('<div class="datagrid-mask-msg"></div>').html("正在处理，请稍候。。。").appendTo("body").css({display: "block", left: ($(document.body).outerWidth(true) - 190) / 2, top: ($(window).height() - 45) / 2});

    var _qfd = {
        qfd_about: function () {
            var dlg = getAboutDialog();
            $("#qfdabout").appendTo('#dialog-content').show();
            dlg.dialog({
                title: '关于QFD Suit',
                resizable: true,
                modal: true,
                width: 700,
                height: 500
            });
        }
    }

    function getAboutDialog(cat) {
        if (!document.getElementById("qfd-about")) {
            var div = $('<div id="qfd-about"><div id="dialog-content" style="padding: 10px;"></div></div>');
            div.appendTo("body");
            if (cat == 0) {
                div.width(800).height(480);
            }
            else {
                div.width(700).height(500);
            }
            div.dialog({
                modal: true,
                onClose: function () {
                    _form.edit_form();
                }
            });
        }
        return $("#qfd-about");
    }

    function openFile(name, fid) {
        window.location = "${pageContext.request.contextPath}/fileServlet?filename=" + name + "&fid=" + fid;
    }

    function refreshXhid(fid) {
        var url = '${pageContext.request.contextPath}/demx/modelSearchService/getXhid';
        if (fid) {
            url = url + '?fid=' + fid;
        }
        $.post(url, function (data) {
            if (data) {
                $('#xhid').html('当前' + data);
                $('#xhname').html(data);
            }
        });
    }
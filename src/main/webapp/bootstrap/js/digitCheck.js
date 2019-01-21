/**
 * User: PengWen Wang
 * Date: 2019/1/10
 * 文本框只能输入2位小数
 * 使用示例：  $("#price").digitcheck();
 */

$.fn.digitcheck = function () {
    $(this).css("ime-mode", "disabled");
    this.bind("keypress", function (e) {
        if (e.charCode === 0) return true;  //非字符键 for firefox
        var code = (e.keyCode ? e.keyCode : e.which);  //兼容火狐 IE
        if (code >= 48 && code <= 57) {
            var pos = getCurPosition(this);
            var selText = getSelectedText(this);
            var dotPos = this.value.indexOf(".");
            if (dotPos > 0 && pos > dotPos) {
                if (pos > dotPos + 2) return false;
                if (selText.length > 0 || this.value.substr(dotPos + 1).length < 2)
                    return true;
                else
                    return false;
            }
            return true;
        }
        //输入"."
        if (code == 46) {
            var selText = getSelectedText(this);
            if (selText.indexOf(".") > 0) return true; //选中文本包含"."
            else if (/^[0-9]+\.$/.test(this.value + String.fromCharCode(code)))
                return true;
        }
        return false;
    });


    this.bind("blur", function () {
        if (this.value.lastIndexOf(".") == (this.value.length - 1)) {
            this.value = this.value.substr(0, this.value.length - 1);
        } else if (isNaN(this.value)) {
            this.value = "";
        }
        if (this.value) {
            this.value = parseFloat(this.value);//parseFloat(this.value).toFixed(2);
        }
        $(this).trigger("input");
        var value = this.value;
        var reg = /^(([1-9]\d*)(\.\d{1,2})?|0\.([1-9]|\d[1-9])|0)$/;
        if (reg.test(value)) {
            $(this).val(value);
            $("#errMsg").text("√");
        } else {
            $("#errMsg").text("×");
        }
    });


    this.bind("paste", function () {
        if (window.clipboardData) {
            var s = clipboardData.getData('text');
            if (!isNaN(s)) {
                value = parseFloat(s);
                return true;
            }
        }
        return false;
    });


    this.bind("dragenter", function () {
        return false;
    });


    this.bind("keyup", function () {


    });


    this.bind("propertychange", function (e) {
        if (isNaN(this.value))
            this.value = this.value.replace(/[^0-9\.]/g, "");
    });


    this.bind("input", function (e) {
        if (isNaN(this.value))
            this.value = this.value.replace(/[^0-9\.]/g, "");
    });
};

//获取当前光标在文本框的位置
function getCurPosition(domObj) {
    var position = 0;
    if (domObj.selectionStart || domObj.selectionStart == '0') {
        position = domObj.selectionStart;
    }
    else if (document.selection) { //for IE
        domObj.focus();
        var currentRange = document.selection.createRange();
        var workRange = currentRange.duplicate();
        domObj.select();
        var allRange = document.selection.createRange();
        while (workRange.compareEndPoints("StartToStart", allRange) > 0) {
            workRange.moveStart("character", -1);
            position++;
        }
        currentRange.select();
    }


    return position;
}

//获取当前文本框选中的文本
function getSelectedText(domObj) {
    if (domObj.selectionStart || domObj.selectionStart == '0') {
        return domObj.value.substring(domObj.selectionStart, domObj.selectionEnd);
    }
    else if (document.selection) { //for IE
        domObj.focus();
        var sel = document.selection.createRange();
        return sel.text;
    }
    else return '';
}
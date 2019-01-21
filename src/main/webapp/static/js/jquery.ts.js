(function ($) {
    $.TS = {
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
        genDataGridParam: function(dataGridId,paramName,filter){
            var rows = undefined;
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
                    var attrVal = this.string2Json(rows[rowObj][rowAttr]);
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
        string2Json: function(s) {
            var newstr = "";
            for (var i=0; i<s.length; i++) {
                c = s.charAt(i);
                switch (c) {
                    case '\"':
                        newstr+="\\\"";
                        break;
                    case '\\':
                        newstr+="\\\\";
                        break;
                    case '/':
                        newstr+="\\/";
                        break;
                    case '\b':
                        newstr+="\\b";
                        break;
                    case '\f':
                        newstr+="\\f";
                        break;
                    case '\n':
                        newstr+="\\n";
                        break;
                    case '\r':
                        newstr+="\\r";
                        break;
                    case '\t':
                        newstr+="\\t";
                        break;
                    default:
                        newstr+=c;
                }
            }
            return newstr;
        },
        getDataGridJson: function(datagridId){
            var jsonArr = new Array();
            var jsonStr = "";
            var $g = $(datagridId);
            if($g && $g.length == 1){
                //$g.datagrid('acceptChanges');
                var d = $g.datagrid('getData');
                for(var i=0; i<d.rows.length; i++){
                    var cc = d.rows[i];
                    jsonArr.push(cc);
                }
                jsonStr = JSON.stringify(jsonArr);
            }
            return jsonStr;
        }
    };
    $.TS.grid = {
        // 添加行
        addRow : function ($dg, lastIndex) {
            $dg.datagrid('endEdit', lastIndex);
            $dg.datagrid('appendRow', {});
            lastIndex = $dg.datagrid('getRows').length - 1;
            $dg.datagrid('selectRow', lastIndex);
            $dg.datagrid('beginEdit', lastIndex);
            return lastIndex;
        },
        // 删除行
        deleteRow : function ($dg){
            var row = $dg.datagrid('getSelected');
            if (row) {
                var index = $dg.datagrid('getRowIndex', row);
                //console.log('row index is',index);
                $dg.datagrid('deleteRow', index);
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
    $.TS.time = {
        formatter : function(s){
            return s;
        }
    };

})(jQuery);
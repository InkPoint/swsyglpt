function SFNS() {
    SFNS.vinfo = {time: "Sat Dec 3 22:30:59 UTC+0800 2011", version: "1.0", ov: "0.1.20080518"};
    var ao = "NbnpAYW_EcPfR6KwBozyA3ywQ7HqS2W_EdCfFpelBoW_EcnlOs5iQ6zpT7meFpenCZTSBZ1SBZ1SBZ4fAIaf";

    function ak(cw, cv) {
        for (var cu in cv) {
            cw[cu] = cv[cu]
        }
    }

    function al(cE, cG) {
        cG = (cG === false) ? cG : ao;
        var cu, cy;
        if (cG) {
            cu = 0;
            cy = cG.length
        }
        var cA = 0, cx = 0;
        var cB = cE.length;
        var cD = new String();
        var cC = -1;
        var cv = 0;
        for (var cz = 0; cz < cB; cz++) {
            var cw = cE.charCodeAt(cz);
            cw = (cw == 95) ? 63 : ((cw == 44) ? 62 : ((cw >= 97) ? (cw - 61) : ((cw >= 65) ? (cw - 55) : (cw - 48))));
            if (cG) {
                cw = (cw - cG.charCodeAt(cu++) + 128) % 64;
                cu = cu % cy
            }
            cx = (cx << 6) + cw;
            cA += 6;
            while (cA >= 8) {
                var cF = cx >> (cA - 8);
                if (cv > 0) {
                    cC = (cC << 6) + (cF & (63));
                    cv--;
                    if (cv == 0) {
                        cD += String.fromCharCode(cC)
                    }
                } else {
                    if (cF >= 224) {
                        cC = cF & (15);
                        cv = 2
                    } else {
                        if (cF >= 128) {
                            cC = cF & (31);
                            cv = 1
                        } else {
                            cD += String.fromCharCode(cF)
                        }
                    }
                }
                cx = cx - (cF << (cA - 8));
                cA -= 8
            }
        }
        return cD
    }

    var an = [al("ivJfVtjOod5pBVz_RrDVcjD"), "inset 1px #000000", "#FFFFE1", "BlueNormal", "Type,FromTask,ToTask", "name,BaselineStart,BaselineFinish", "name,ActualStart,ActualFinish,ActualDuration,PercentComplete", "name,Start,Finish,Duration", "solid 1px #FF0000", "#0000FF", "grid_1", "solid 1px #0000FF", "#F4F4F4", "LineHeight,Selected", "Collapse,LineHeight,Selected", "task_head_3_hollow", "Percent", "position:absolute;width:", "px;top:", "position:absolute;font-size:0px;z-index:100;left:0px;width:", "task_head_2", "task_head_3", "SFGanttField", "SFGanttField/boolTypes", "keydown", "selectstart", "TaskNormal", "StatusIcon", "HyperlinkAddress,Hyperlink", "icon_hyperlink", "icon_notes", "_Fields_", "dotted 1px #808080", "afterstarttimechange", "#DDDDDD", "px;height:", "scroll_barbg1", "scroll_barright1", "scroll_barcenter1", "scroll_barleft1", "scrollend", "scrollstart", "scroll_barcenter", "scroll_barbg", "scroll_barright", "scroll_barleft", "scroll_right", "scroll_left", "bodyScroll", "checkbox", "input", "#999999", "solid 1px #000000", "contextmenu", "#FF0000", "elementheightchanged", "taskoutview", "taskinview", "SFGanttTasksMap", al("ef_aTS_EGQjTle3iE5BYP9sRk91KkKKIUAW7XNsWDbu4WgkR"), "#000000", "col-resize,se-resize", "default", "clearSelected", "setSelected", "getSelected", "right", "12px", "taskdblclick", "taskmousedown", "taskchange", "network", "SFGantt/linkStyle", "SFGantt/taskStyle", "Selected", "orderdrag.cur,move", "itemHeight", "lineselect.cur,default", "listfieldsresize", "listfieldsscroll", "list", "dblclick", "click", "#FFFFFF", "table", "column", "arrow_right", "arrow_left", "col-resize", "listBody", "center", "solid 1px ", "afterscalechange", "layoutchange", "mapBody", "heightspanchange", "resize", "Month", "icon", "symbol", "scroll", "afterresize", "beforeresize", "initialize", "left", "FieldNames", "PreviousUID", "afterlinkchange", "aftertaskadd", "aftertaskmove", "aftertaskdelete", "aftertaskchange", "Assignments", "Assignments/Assignment", "../Links/*", "SuccessorLink", "Resources", "NextSiblingDataUrl", "Tasks", "ChildrenDataUrl", "CalendarUID", "SFDataXmlBase", "PredecessorTask", "SuccessorTask", "PredecessorLink", "ExtendedAttribute", "FieldID", "ResourceUID", "TaskUID", "Type", "SuccessorUID", "PredecessorUID", "BaselineFinish", "BaselineStart", "Critical", "LineHeight", "Collapse", "ClassName", "ActualFinish", "ActualStart", "ConstraintDate", "ConstraintType", "Notes", "PercentComplete", "ReadOnly", "Name", "OutlineLevel", "OutlineNumber", "Units", "Start", "Finish", "change", "Summary", "after", "move", "NextSibling", "FirstChild", "getRoot", "delete", "before", "unregister", "register", "update", "linkunregister", "linkregister", "afterlinkadd", "beforelinkadd", "Assignment", "Link", "Resource", "Task", "url(#default#VML)", "behavior:url(#default#VML)", "dashed", "none", "style", al("ef_aTS_EGQjTle4kEXpeTPLcTQ8XVqKIYAV"), "solid", "transparent", "start", "mouseup", "mousemove", "mousedown", "Standard", "undefined", "_SF_E_", "function", "100%", "relative", "absolute", "hidden", "string", "progid:DXImageTransform.Microsoft.Alpha(opacity=", "pointer", "object"];

    function O() {
    }

    function af() {
        if (!document.all) {
            return false
        }
        var cv = new RegExp("MSIE\\s*([0-9]+)");
        var cu;
        if (cu = cv.exec(navigator.userAgent)) {
            if (parseInt(cu[0]) < 7) {
                return false
            }
        }
        return true
    }

    function ae(cw) {
        var cv, cu;
        cv = new RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})[ t]([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})(?:\\.[0-9]{1,3})?(?:[\\+\\-][0-9]{1,2}:[0-9]{1,2})?$", "ig");
        var cu = cv.exec(cw);
        if (cu) {
            return new Date(cu[1], cu[2] - 1, cu[3], cu[4], cu[5], cu[6])
        }
        return new Date(cw)
    }

    function ad(cw, cv, cu) {
        if (!cw) {
            cw = " "
        }
        if (!cu) {
            cu = ""
        }
        cu = cu.toString();
        while (cu.length < cv) {
            cu = cw + cu
        }
        return cu
    }

    function ac(cz, cy, cv) {
        if (!cz) {
            return""
        }
        cv = cv ? cv : {};
        if (cy == "s") {
            cy = "yyyy-MM-ddTHH:mm:ss"
        }
        var cw = cz.getYear();
        if (cw < 1900) {
            cw += 1900
        }
        var cu = [];
        var cx = function (cA) {
            switch (cA) {
                case"ddd":
                    return cv.weekStrs ? cv.weekStrs[cz.getDay()] : cz.getDay();
                case"dd":
                    return ad("0", 2, cz.getDate());
                case"d":
                    return cz.getDate();
                case"yyyy":
                    return ad("0", 4, cw);
                case"yy":
                    return ad("0", 2, cw % 100);
                case"MM":
                    return ad("0", 2, cz.getMonth() + 1);
                case"M":
                    return cz.getMonth() + 1;
                case"hhh":
                    return Math.ceil((cz.getMonth() + 1) / 6);
                case"HH":
                    return ad("0", 2, cz.getHours());
                case"H":
                    return cz.getHours();
                case"mm":
                    return ad("0", 2, cz.getMinutes());
                case"m":
                    return cz.getMinutes();
                case"ss":
                    return ad("0", 2, cz.getSeconds());
                case"s":
                    return cz.getSeconds();
                case"q":
                    return Math.ceil((cz.getMonth() + 1) / 3)
            }
            return cA
        };
        cy = cy.replace(new RegExp("\\\\([a-zA-Z])", "g"), function (cB, cA) {
            cu.push(cA);
            return"\\"
        });
        cy = cy.replace(new RegExp("([a-zA-Z])\\1*", "g"), cx);
        cy = cy.replace(new RegExp("\\\\", "g"), function (cA) {
            return cu.shift()
        });
        return cy
    }

    function E(cv, cw) {
        if (typeof(cw) != an[194]) {
            cw = [cw]
        }
        function cu(cy, cx) {
            return cw[cx]
        }

        return cv.replace(new RegExp("%([0-9a-zA-Z_]+)", "gi"), cu)
    }

    function D(cy, cv) {
        if (cv.indexOf(",") > 0) {
            var cw = cv.split(",");
            for (var cu = 0; cu < cw.length; cu++) {
                if (D(cy, cw[cu])) {
                    return true
                }
            }
            return false
        }
        try {
            if (cv.toLowerCase().indexOf(".cur") > 0) {
                cv = "url(" + cv + "),auto"
            }
            cv = cv.toLowerCase();
            if (cv == "hand" && !document.all) {
                cv = an[193]
            }
            cy.style.cursor = cv;
            return true
        } catch (cx) {
            return false
        }
    }

    function C(cv, cu) {
        cv.style.filter = an[192] + parseInt(cu * 100) + ")";
        cv.style.MozOpacity = cu;
        cv.style.opacity = cu
    }

    function B(cz, cy, cx, cw) {
        if (!cz) {
            return
        }
        var cu = cw ? [] : null;
        cx = cx ? cx : function (cB, cA) {
            return cB == cA
        };
        for (var cv = cz.length - 1; cv >= 0; cv--) {
            if (cx(cz[cv], cy)) {
                if (cw) {
                    cu.push(cu)
                } else {
                    return cz[cv]
                }
            }
        }
        return cu
    }

    function A(cx, cw, cv) {
        if (!cx) {
            return
        }
        for (var cu = cx.length - 1; cu >= 0; cu--) {
            if (cx[cu] == cw) {
                cx.splice(cu, 1);
                if (!cv) {
                    return cx[cu]
                }
            }
        }
    }

    function z(cv, cu) {
        ak(cv.style, {width: cu[0] + "px", height: cu[1] + "px"})
    }

    function y(cu) {
        var cv = [cu.offsetWidth, cu.offsetHeight];
        if (cu.clientHeight && !document.all) {
            cv[1] = cu.clientHeight
        }
        if (!cv[0]) {
            cv[0] = cu.clientWidth
        }
        if (!cv[0]) {
            cv[0] = parseInt(cu.style.width)
        }
        if (!cv[1]) {
            cv[1] = cu.clientHeight
        }
        if (!cv[1]) {
            cv[1] = parseInt(cu.style.height)
        }
        if (!cv[0] || !cv[1]) {
            cu = cu.parentElement;
            while (cu) {
                if (!cv[0] && cu.offsetWidth) {
                    cv[0] = cu.offsetWidth
                }
                if (!cv[1] && cu.offsetHeight) {
                    cv[1] = cu.offsetHeight
                }
                if (cv[0] && cv[1]) {
                    break
                }
                cu = cu.parentElement
            }
        }
        return cv
    }

    function x(cB, cy) {
        cy = Math.round(cy % 360);
        var cu = cy * Math.PI / 180, cz = cB.style;
        var cv, cw = an[191];
        if (typeof(cz[(cv = "WebkitTransform")]) == cw || typeof(cz[(cv = "MozTransform")]) == cw || typeof(cz[(cv = "transform")]) == cw) {
            var cx = (cy == 0) ? "" : "rotate(" + cy + "deg)", cA = {};
            cA[cv] = cx;
            ak(cB.style, cA);
            return true
        }
        if (typeof(cz.filter) == an[191] && document.body.filters) {
            ak(cB.style, {filter: (cy == 0) ? "" : "progid:DXImageTransform.Microsoft.Matrix(sizingMethod='auto expand',M11=" + Math.cos(cu) + ",M12=" + (-Math.sin(cu)) + ",M21=" + Math.sin(cu) + ",M22=" + Math.cos(cu) + ")"});
            return true
        }
        return false
    }

    function w(cu) {
    }

    function v(cz, cv) {
        cv = cv ? cv : {};
        var cu, cy = cv.doc || document;
        if (cv.spritePoint && (cv.spriteSize || cv.size)) {
            if (!cv.spriteSize) {
                cv.spriteSize = cv.size
            }
            if (!cv.size) {
                cv.size = cv.spriteSize
            }
            cu = cy.createElement("div");
            ak(cu.style, {overflow: an[190], display: "inline-block"});
            if (cu.style.position != an[189]) {
                cu.style.position = an[188]
            }
            var cw = cv.imageSize ? [cv.imageSize[0] * cv.size[0] / cv.spriteSize[0], cv.imageSize[1] * cv.size[1] / cv.spriteSize[1]] : null;
            var cx = v(cz, {position: [-cv.spritePoint[0] * cv.size[0] / cv.spriteSize[0], -cv.spritePoint[1] * cv.size[1] / cv.spriteSize[1]], size: cw, doc: cy});
            ak(cx.style, {position: an[189]});
            cu.appendChild(cx)
        } else {
            cu = cy.createElement("img");
            cu.hspace = 0;
            ak(cu.style, {border: "0px"})
        }
        if (!cv.noLoad) {
            p(cu, cz)
        }
        if (cv.position) {
            ak(cu.style, {left: cv.position[0] + "px", top: cv.position[1] + "px"})
        }
        if (cv.size) {
            ak(cu.style, {width: cv.size[0] + "px", height: cv.size[1] + "px"})
        }
        return cu
    }

    function p(cu, cw) {
        cu.src = cw;
        var cv = cu.firstChild;
        while (cv) {
            if (cv.nodeName != "IMG") {
                cv = cv.nextSibling;
                continue
            }
            cv.src = cw;
            break
        }
    }

    function o(cB, cA, cv) {
        if (!cA) {
            p(cB, "");
            ak(cB.style, {backgroundImage: ""});
            return
        }
        cv = cv ? cv : {};
        if (cv.canPrint) {
            var cu = v(cA), cz = cu;
            if (cv.spritePoint && cv.imageSize) {
                cz = document.createElement("div");
                var cw = cv.repeat == "repeat-x" || cv.repeat == "repeat";
                var cy = cv.repeat == "repeat-y" || cv.repeat == "repeat";
                ak(cu.style, {position: an[188], border: "0px", width: (cw ? an[187] : (cv.imageSize[0] + "px")), height: (cy ? an[187] : (cv.imageSize[1] + "px")), left: (cw ? (100 * cv.spritePoint[0] / cv.imageSize[0] + "%") : (-cv.spritePoint[0] + "px")), top: (cy ? (100 * cv.spritePoint[1] / cv.imageSize[1] + "%") : (-cv.spritePoint[1] + "px")), zIndex: -1});
                cz.appendChild(cu)
            }
            ak(cz.style, {position: an[189], border: "0px", width: an[187], height: an[187], left: "0px", top: "0px", zIndex: -1, overflow: an[190]});
            cB.appendChild(cz)
        } else {
            ak(cB.style, {backgroundImage: "url(" + cA + ")"});
            if (cv.spritePoint) {
                ak(cB.style, {backgroundPosition: (-cv.spritePoint[0]) + "px " + (-cv.spritePoint[1]) + "px"})
            }
        }
        if (cv.spriteDouble) {
            var cx = document.createElement("div");
            ak(cx.style, {position: an[189], fontSize: "0px", left: "0px", top: "0px", width: an[187], height: an[187], overflow: an[190]});
            o(cx, cA, {canPrint: cv.canPrint, spritePoint: (cv.repeat == "repeat-x" ? {x: cv.imageSize[0] / 2, y: cv.spritePoint[1]} : {x: cv.spritePoint[0], y: cv.imageSize[1] / 2}), imageSize: cv.imageSize, repeat: cv.repeat});
            cB.appendChild(cx)
        }
    }

    ak(O, {setProperty: ak, isCompatible: af, getDate: ae, getLengthStr: ad, getDateString: ac, formatString: E, setCursor: D, setOpacity: C, findInArray: B, deleteInArray: A, setElementSize: z, getElementSize: y, setRotate: x, setNoPrint: w, createImage: v, setImageSrc: p, setBackgroundImage: o});
    function bc() {
    }

    function m(cv, cu) {
        return function () {
            return cu.apply(cv, arguments)
        }
    }

    function l(cu) {
        return(cu.tagName || cu.nodeName || cu == window)
    }

    function k(cu) {
        if (!cu) {
            cu = []
        }
        if (!cu[0]) {
            cu[0] = window.event
        }
        if (cu[0] && !cu[0].target && cu[0].srcElement) {
            cu[0].target = cu[0].srcElement
        }
        return cu
    }

    function j(cu, cv) {
        return function () {
            cv.apply(cu, k(arguments))
        }
    }

    function i(cu) {
        cu = cu ? cu : window.event;
        if (!cu) {
            return
        }
        if (cu.stopPropagation) {
            cu.preventDefault();
            cu.stopPropagation()
        } else {
            cu.cancelBubble = true;
            cu.returnValue = false
        }
    }

    function g(cu) {
        cu = cu ? cu : window.event;
        if (!cu) {
            return
        }
        if (cu.stopPropagation) {
            cu.stopPropagation()
        } else {
            cu.cancelBubble = true;
            cu.returnValue = true
        }
    }

    function f(cy, cx, cu, cw, cv) {
        return cn(cy, cx, l(cy) ? j(cu, cw) : m(cu, cw), cv)
    }

    function d(cu, cv) {
        if (!cu) {
            return
        }
        if (cu.parentNode && !cv) {
            cu.parentNode.removeChild(cu)
        }
        if (!cv) {
            ck(cu);
            if (cu._SF_E_) {
                cu._SF_E_ = null
            }
        }
        var cw;
        while (cw = cu.firstChild) {
            d(cw)
        }
    }

    function co(cv, cu) {
        return function () {
            cv.apply(this, arguments);
            cm(cu)
        }
    }

    function cn(cA, cx, cz, cw) {
        var cy = [cA, cx];
        if (cw) {
            cz = co(cz, cy)
        }
        var cv = l(cA);
        if (cv) {
            cz = j(cA, cz);
            if (cA.addEventListener) {
                cA.addEventListener(cx, cz, false)
            } else {
                if (cA.attachEvent) {
                    cA.attachEvent("on" + cx, cz)
                } else {
                    var cu = cA["on" + cx];
                    if (typeof(cu) == an[186]) {
                        cA["on" + cx] = function () {
                            cu();
                            cz()
                        }
                    } else {
                        cA["on" + cx] = cz
                    }
                }
            }
        }
        cy.push(cz);
        if (!cA._SF_E_) {
            cA._SF_E_ = []
        }
        if (!B(cA._SF_E_, cx)) {
            cA._SF_E_.push(cx)
        }
        if (cA[an[185] + cx] && cv != "shape") {
            cA[an[185] + cx].push(cy)
        } else {
            cA[an[185] + cx] = (cv == "shape") ? [] : [cy]
        }
        if (!bc.allEvents) {
            bc.allEvents = []
        }
        if (cx != "unload") {
            bc.allEvents.push(cy)
        }
        return cy
    }

    function cm(cu) {
        if (!cu || cu.length == 0) {
            return
        }
        try {
            if (l(cu[0])) {
                if (cu[0].removeEventListener) {
                    cu[0].removeEventListener(cu[1], cu[2], false)
                } else {
                    if (cu[0].detachEvent) {
                        cu[0].detachEvent("on" + cu[1], cu[2])
                    } else {
                        cu[0]["on" + cu[1]] = null
                    }
                }
            }
        } catch (cv) {
        }
        A(cu[0][an[185] + cu[1]], cu);
        A(bc.allEvents, cu);
        while (cu.length > 0) {
            cu.pop()
        }
    }

    function ck(cy, cw) {
        if (!cy || !cy._SF_E_) {
            return
        }
        if (!cw) {
            for (var cu = cy._SF_E_.length - 1; cu >= 0; cu--) {
                ck(cy, cy._SF_E_[cu])
            }
            return
        }
        var cx, cv = cy[an[185] + cw];
        while (cx = cv.pop()) {
            cm(cx)
        }
    }

    function ci() {
        var cv = bc.allEvents;
        if (cv) {
            for (var cu = cv.length - 1; cu >= 0; cu--) {
                cm(cv[cu])
            }
        }
        bc.allEvents = null
    }

    function cg(cA, cx, cu) {
        if (l(cA)) {
            try {
                if (cA.fireEvent) {
                    cA.fireEvent("on" + cx)
                }
                if (cA.dispatchEvent) {
                    cA.dispatchEvent(cx)
                }
            } catch (cz) {
            }
        }
        if (!cu) {
            cu = []
        }
        var cw = cA[an[185] + cx];
        if (cw && cw.length > 0) {
            for (var cv = 0; cv < cw.length; cv++) {
                var cy = cw[cv];
                if (cy && cy[2]) {
                    cy[2].apply(cA, cu)
                }
            }
        }
    }

    function cf(cx, cw) {
        var cu = [0, 0];
        var cv = cx;
        while (cv && cv.offsetParent && cv != cw) {
            cu[0] += cv.offsetLeft;
            cu[1] += cv.offsetTop;
            cv = cv.offsetParent;
            if (cv) {
                cu[0] -= cv.scrollLeft;
                cu[1] -= cv.scrollTop
            }
        }
        return cu
    }

    function cd(cw, cu) {
        if (typeof cw.clientX != an[184]) {
            var cv = cu.getBoundingClientRect();
            return[cw.clientX - cv.left, cw.clientY - cv.top]
        }
        if (typeof cw.pageX != an[184]) {
            var cx = cf(cu);
            return[cw.pageX - cx[0], cw.pageY - cx[1]]
        }
        return[0, 0]
    }

    function cc(cv, cu) {
        return cd(cv, cu)
    }

    function cb(cu) {
        return(document.all && !+"\v1") ? cu.button : (cu.button == 2 ? 2 : 1)
    }

    function b3(cu) {
        if (document.all) {
            cu.unselectable = "on";
            cu.onselectstart = b1
        } else {
            cu.style.MozUserSelect = "text"
        }
    }

    function b1() {
        return false
    }

    function b0() {
        if (!bc._ganttUnloadListener) {
            bc._ganttUnloadListener = cn(window, "unload", ci)
        }
    }

    ak(bc, {getCallback: m, isHtmlControl: l, getEvent: k, createAdapter: j, cancelBubble: i, returnTrue: g, bind: f, deposeNode: d, runOnceHandle: co, addListener: cn, removeListener: cm, clearListeners: ck, clearAllListeners: ci, trigger: cg, getPageOffset: cf, getEventPosition: cd, getEventRelative: cc, getEventButton: cb, setUnSelectable: b3, falseFunction: b1, load: b0});
    function aX() {
    }

    function bZ() {
        if (window.XMLHttpRequest) {
            return new window.XMLHttpRequest()
        } else {
            if (typeof(ActiveXObject) != an[184]) {
                return new ActiveXObject("Microsoft.XMLHTTP")
            }
        }
    }

    function bY(cC, cz, cw, cy) {
        var cB;
        if (location.protocol.indexOf(al("ef_aTP")) != 0 && cC.indexOf(al("ef_aTS_EGJ")) != 0) {
            try {
                cB = bX();
                cB.load(cC)
            } catch (cA) {
            }
            if (cB && cB.documentElement) {
                if (cz) {
                    cz.apply(null, [cB])
                }
                cB = null;
                return
            }
        }
        var cx = bZ(), cv = false;
        var cu = m(this, function () {
            cv = true;
            if (cx.readyState == 4) {
                var cD = cx.responseXML;
                if (!cD.documentElement) {
                    cD = bX(cx.responseText)
                }
                if (!cD || !cD.documentElement) {
                    cz();
                    return
                }
                if (cz) {
                    cz.apply(null, [cD])
                }
                cD = null;
                ck(cx);
                cx = null
            }
        });
        cx.onreadystatechange = cu;
        cx.open(cy ? "POST" : "GET", cC, !!cw);
        cx.send(cy ? cy : null);
        if (!cw && !cv) {
            cu()
        }
    }

    function bX(cw) {
        var cv;
        if (typeof(ActiveXObject) != an[184]) {
            try {
                cv = new ActiveXObject("Msxml2.DOMDocument")
            } catch (cu) {
                cv = new ActiveXObject("Msxml.DOMDocument")
            }
            if (cw) {
                cv.loadXML(cw)
            }
        } else {
            if (cw) {
                if (typeof DOMParser != an[184]) {
                    cv = new DOMParser().parseFromString(cw, "text/xml")
                }
            } else {
                if (document.implementation && document.implementation.createDocument) {
                    cv = document.implementation.createDocument("", "", null)
                }
            }
        }
        return cv
    }

    function bW(cw, cu) {
        var cy = cu.split("/");
        for (var cv = 0; cv < cy.length; cv++) {
            if (!cw) {
                return cw
            }
            var cx = cy[cv];
            if (cx == "..") {
                cw = cw.parentNode;
                continue
            }
            var cz;
            for (cz = cw.firstChild; cz; cz = cz.nextSibling) {
                if (cx == "*" || cx == cz.nodeName) {
                    break
                }
            }
            cw = cz;
            continue
        }
        return cw
    }

    function bV(cu) {
        if (!cu || typeof(cu) != an[194]) {
            return cu
        }
        return cu.text ? cu.text : (cu.childNodes[0] ? cu.childNodes[0].nodeValue : "")
    }

    function bU(cu, cv) {
        while (cu.firstChild) {
            cu.removeChild(cu.firstChild)
        }
        cu.appendChild(cu.ownerDocument.createTextNode(cv))
    }

    function bT(cu) {
        return cu.xml ? cu.xml : new window.XMLSerializer().serializeToString(cu)
    }

    function bM(cv, cu) {
        while (cv) {
            if (!cu || cu == cv.nodeName) {
                return cv
            }
            cv = cv.nextSibling
        }
        return null
    }

    function bL(cC, cE) {
        cE = cE == false ? cE : ao;
        var cu, cx;
        if (cE) {
            cu = 0;
            cx = cE.length
        }
        var cz = 0, cw = 0;
        var cA = cC.length;
        var cB = "";
        for (var cy = 0; cy < cA; cy++) {
            var cv = cC.charCodeAt(cy);
            if (cv >= 2048) {
                cw = (cw << 24) + (((cv >> 12) | 224) << 16) + ((((cv & 4095) >> 6) | 128) << 8) + ((cv & 63) | 128);
                cz += 24
            } else {
                if (cv >= 128) {
                    cw = (cw << 16) + (((cv >> 6) | 192) << 8) + ((cv & 63) | 128);
                    cz += 16
                } else {
                    cz += 8;
                    cw = (cw << 8) + cv
                }
            }
            while (cz >= 6) {
                var cD = cw >> (cz - 6);
                cw = cw - (cD << (cz - 6));
                cz -= 6;
                if (cE) {
                    cD = (cD + cE.charCodeAt(cu++)) % 64;
                    cu = cu % cx
                }
                var cv = (cD <= 9) ? (cD + 48) : ((cD <= 35) ? (cD + 55) : ((cD <= 61) ? (cD + 61) : ((cD == 62) ? 44 : 95)));
                cB += String.fromCharCode(cv)
            }
        }
        if (cz > 0) {
            var cD = cw << (6 - cz);
            if (cE) {
                cD = (cD + cE.charCodeAt(cu++)) % 64;
                cu = cu % cx
            }
            cB += String.fromCharCode((cD <= 9) ? (cD + 48) : ((cD <= 35) ? (cD + 55) : ((cD <= 61) ? (cD + 61) : ((cD == 62) ? 44 : 95))))
        }
        return cB
    }

    ak(aX, {createHttpRequest: bZ, loadXml: bY, createDocument: bX, selectSingleNode: bW, getNodeValue: bV, setNodeValue: bU, getXmlString: bT, getNextSibling: bM, encode: bL, decode: al});
    function aE(cu) {
        this.obj = cu ? cu : {};
        this.inited = false;
        if (!cu) {
            bI(this.obj, window._SFGantt_config, false)
        }
    }

    ak(aE.prototype, {getConfig: function (cw, cu) {
        if (!this.inited) {
            this.inited = true;
            this.parseWildcard()
        }
        var cv = this.getConfigObj(cw);
        return typeof(cv) != an[184] ? cv : cu
    }, getConfigObj: function (cw) {
        if (!this.inited) {
            this.inited = true;
            this.parseWildcard()
        }
        var cx = cw.split(new RegExp("[/\\.]"));
        var cu, cv = this.obj;
        while (typeof(cu = cx.shift()) == an[191]) {
            if (!cu) {
                continue
            }
            if (!cv || typeof(cv) != an[194]) {
                break
            }
            cv = cv[cu]
        }
        return cv
    }, setConfig: function (cy, cv, cx) {
        var cz = cy.split(new RegExp("[/\\.]"));
        var cu, cw = this.obj;
        while (cu = cz.shift()) {
            if (cz[0]) {
                if (!cw[cu] || typeof(cw[cu]) != an[194]) {
                    cw[cu] = {}
                }
                cw = cw[cu]
            } else {
                if (cx != false || !cw[cu]) {
                    cw[cu] = cv
                }
            }
        }
    }, parseWildcard: function (cw) {
        if (!cw) {
            cw = this.obj
        }
        if (!cw) {
            return
        }
        for (var cv in cw) {
            switch (typeof(cw[cv])) {
                case an[194]:
                    this.parseWildcard(cw[cv]);
                    break;
                case an[191]:
                    if (cw[cv].indexOf("${") >= 0) {
                        var cu = this;
                        cw[cv] = cw[cv].replace(new RegExp("\\$\\{([^\\}]+)\\}\\$", "g"), function (cy, cx) {
                            return cu.getConfig(cx)
                        })
                    }
                    break
            }
        }
    }});
    function bI(cx, cv, cw) {
        if (!cv) {
            return
        }
        for (var cu in cv) {
            switch (typeof(cv[cu])) {
                case an[186]:
                    break;
                case an[194]:
                    if (l(cv[cu])) {
                        cx[cu] = cv[cu];
                        continue
                    }
                    if (!cx[cu]) {
                        cx[cu] = {}
                    }
                    bI(cx[cu], cv[cu], cw);
                    break;
                default:
                    if (cw != false || !cx[cu]) {
                        cx[cu] = cv[cu]
                    }
                    break
            }
        }
    }

    function bG(cw, cv) {
        if (!cv) {
            return
        }
        for (var cu in cv) {
            if (typeof(cv[cu]) == an[186]) {
                continue
            }
            cw[cu] = cv[cu]
        }
    }

    ak(aE, {addConfig: bI, applyProperty: bG});
    function aU(cv) {
        this.imgs = [];
        var cu = new Image();
        this.img = cu;
        f(cu, "load", this, this.onLoad);
        cu.src = cv;
        if (cu.complete) {
            this.onLoad()
        }
    }

    ak(aU.prototype, {addImg: function (cu) {
        this.imgs.push(cu);
        if (this.loaded) {
            this.onLoad()
        }
    }, onLoad: function () {
        this.loaded = true;
        var cu;
        while (cu = this.imgs.pop()) {
            if (cu.tagName.toLowerCase() == "img") {
                cu.src = this.img.src
            } else {
                cu.style.backgroundImage = "url(" + this.img.src + ")"
            }
        }
    }, depose: function () {
        this.imgs.length = 0;
        ck(this);
        for (var cu in this) {
            this[cu] = null
        }
    }});
    function bF(cu, cv) {
        if (!aU.objs) {
            aU.objs = {}
        }
        if (!aU.objs[cv]) {
            aU.objs[cv] = new aU(cv)
        }
        aU.objs[cv].addImg(cu)
    }

    function bE(cv, cx) {
        if (aU.objs) {
            for (var cw in aU.objs) {
                if (!aU.objs[cw] instanceof aU) {
                    continue
                }
                var cu = aU.objs[cw];
                if (cu) {
                    cu.depose()
                }
                aU.objs[cw] = null;
                delete aU.objs[cw]
            }
        }
    }

    ak(aU, {setImageSrc: bF, depose: bE});
    function aG(cu) {
        this.getWorkTime = cu
    }

    function bC(cu) {
        switch (cu) {
            case"AnyDay":
                return new aG(bB([
                    [
                        [480, 720],
                        [780, 1020]
                    ],
                    [
                        [480, 720],
                        [780, 1020]
                    ],
                    [
                        [480, 720],
                        [780, 1020]
                    ],
                    [
                        [480, 720],
                        [780, 1020]
                    ],
                    [
                        [480, 720],
                        [780, 1020]
                    ],
                    [
                        [480, 720],
                        [780, 1020]
                    ],
                    [
                        [480, 720],
                        [780, 1020]
                    ]
                ], []));
            case an[183]:
                return new aG(bB([
                    [],
                    [
                        [480, 720],
                        [780, 1020]
                    ],
                    [
                        [480, 720],
                        [780, 1020]
                    ],
                    [
                        [480, 720],
                        [780, 1020]
                    ],
                    [
                        [480, 720],
                        [780, 1020]
                    ],
                    [
                        [480, 720],
                        [780, 1020]
                    ],
                    []
                ], []));
            case"AnyTime":
            default:
                return new aG(function () {
                    return[Number.MIN_VALUE, Number.MIN_VALUE]
                })
        }
    }

    function bB(cv, cu) {
        return function (cw) {
            return bA(cw, cv, cu)
        }
    }

    function bA(cz, cu, cw) {
        var cB, cv = (cz.valueOf() - cz.getTimezoneOffset() * 60 * 1000) % (24 * 60 * 60 * 1000);
        var cD = cz.valueOf() - cv;
        for (var cA = 0; cA < cw.length; cA++) {
            var cx = cw[cA];
            if (cw[cA][0].valueOf() <= cD && cw[cA][1].valueOf() > cz.valueOf()) {
                if (cx[2].length == 0) {
                    return bA(cw[cA][1], cu, cw)
                }
                for (var cA = 0; cA < cx[2].length; cA++) {
                    var cy = cx[2][cA];
                    if (cv < cy[1] * 60 * 1000) {
                        return[new Date(cD + cy[0] * 60 * 1000), new Date(cD + cy[1] * 60 * 1000)]
                    }
                }
                return bA(new Date(cD + 24 * 60 * 60 * 1000), cu, cw)
            }
        }
        var cC = cz.getDay();
        for (var cA = 0; cA < cu[cC].length; cA++) {
            var cy = cu[cC][cA];
            if (cv < cy[1] * 60 * 1000) {
                return[new Date(cD + cy[0] * 60 * 1000), new Date(cD + cy[1] * 60 * 1000)]
            }
        }
        return bA(new Date(cD + 24 * 60 * 60 * 1000), cu, cw)
    }

    ak(aG, {getCalendar: bC, WT_WeekDay: bB, WT_WeekDayCal: bA});
    function s(cw, cv, cu) {
        ak(this, {div: cw, handle: cv, container: cw, interval: 256});
        ak(this, cu)
    }

    ak(s.prototype, {onMouseDown: function (cx) {
        i(cx);
        var cy = this.div, cw = cy.ownerDocument;
        if (cy.setCapture) {
            cy.setCapture()
        }
        var cu = cd(cx, this.container);
        ak(this, {ml: f(cw, an[181], this, this.onMouseMove), ul: f(cw, an[180], this, this.onMouseUp), sp: cu, lp: cu, timeout: window.setInterval(m(this, this.onTime), this.interval)});
        if (this.rtp) {
            var cv = cy.style;
            this.dsp = {x: parseInt(cv.left), y: parseInt(cv.top)}
        }
        this.handle(cu, cu, an[179])
    }, onMouseMove: function (cB) {
        i(cB);
        var cu = cd(cB, this.container), cy = this.rtp;
        this.lp = cu;
        this.moveed = true;
        if (cy) {
            var cw = this.dsp, cA = this.sp;
            var cx = cw.x + cy.x * (cu.x - cA.x), cv = cw.y + cy.y * (cu.y - cA.y);
            var cz = this.rtpLimit;
            if (cz) {
                if (cz.minX) {
                    cx = Math.max(cx, cz.minX)
                }
                if (cz.maxX) {
                    cx = Math.min(cx, cz.maxX)
                }
                if (cz.minY) {
                    cv = Math.max(cv, cz.minY)
                }
                if (cz.maxY) {
                    cv = Math.min(cv, cz.maxY)
                }
            }
            ak(this.div.style, {left: cx + "px", top: cv + "px"})
        }
    }, onTime: function () {
        if (this.div && this.moveed) {
            this.handle(this.sp, this.lp);
            this.moveed = false
        }
    }, onMouseUp: function (cv) {
        this.onTime();
        var cu = this.div.ownerDocument;
        i(cv);
        cm(this.ml);
        cm(this.ul);
        window.clearInterval(this.timeout);
        delete this.div;
        delete this.container;
        if (cu.releaseCapture) {
            cu.releaseCapture()
        }
        this.handle(this.sp, this.lp, "end")
    }});
    function bz(cw, cv, cu) {
        return cn(cw, an[182], function (cy) {
            if (cb(cy) != 1) {
                return
            }
            var cx = new s(cw, cv, cu);
            cx.onMouseDown(cy)
        })
    }

    ak(s, {setup: bz});
    function c() {
        if (arguments.length < 1) {
            return
        }
        this.div = document.createElement("div")
    }

    ak(c.prototype, {getPanel: function () {
        return this.div
    }, start: function () {
    }, moveTo: function () {
    }, lineTo: function () {
    }, finish: function () {
    }, clear: function () {
    }, setScale: function () {
    }, setPosition: function (cu) {
        ak(this.div.style, {position: an[189], left: cu.x + "px", top: cu.y + "px"})
    }, setLineColor: function () {
    }, setFillColor: function () {
    }, setOpacity: function () {
    }, setLineWeight: function () {
    }, setLineStyle: function () {
    }});
    function bg() {
        var cu = this.div = document.createElement("canvas");
        ak(cu.style, {position: an[189], zIndex: 420})
    }

    bg.prototype = new c();
    ak(bg.prototype, {start: function (cu, cw, cv) {
        ak(this, {origin: cu, size: cv, scale: cw, pathArr: []})
    }, moveTo: function (cu) {
        var cw = this.pathArr, cx = this.scale, cv = this.origin;
        cw.push({type: "m", argu: [(cu.x - cv.x) / cx, (cu.y - cv.y) / cx]})
    }, lineTo: function (cu) {
        var cw = this.pathArr, cx = this.scale, cv = this.origin;
        cw.push({type: "l", argu: [(cu.x - cv.x) / cx, (cu.y - cv.y) / cx]})
    }, finish: function () {
        this.lastScale = this.scale;
        this.reDraw()
    }, clear: function () {
        var cu = this.div.getContext("2d")
    }, setScale: function (cv) {
        this.lastScale = cv;
        var cu = this.size;
        ak(this.div.style, {width: cu.x / cv + "px", height: cu.y / cv + "px"});
        this.reDraw()
    }, reDraw: function () {
        var cA = this.scale, cx = this.lastScale, cw = this.size, cB = this.div, cy = this.pathArr;
        if (!cw || !cy || cy.length == 0) {
            return
        }
        ak(cB, {width: cw.x / cx, height: cw.y / cx});
        var cu = cB.getContext("2d");
        ak(cu, {lineCap: "round", lineJoin: "round", fillStyle: this.bgcolor, lineWidth: this.lineWeight / cA * cx, strokeStyle: this.lineColor, globalAlpha: this.opacity});
        cu.beginPath();
        cu.scale(cA / cx, cA / cx);
        for (var cv = 0; cv < cy.length; cv++) {
            var cz = cy[cv];
            switch (cz.type) {
                case"m":
                    cu.moveTo.apply(cu, cz.argu);
                    break;
                case"l":
                    cu.lineTo.apply(cu, cz.argu);
                    break
            }
        }
        if (this.bgcolor) {
            cu.fill()
        }
        if (this.lineColor) {
            cu.stroke()
        }
    }, setLineColor: function (cu) {
        if (cu == an[178]) {
            cu = ""
        }
        this.lineColor = cu;
        this.reDraw()
    }, setFillColor: function (cu) {
        if (cu == an[178]) {
            cu = ""
        }
        this.bgcolor = cu;
        this.reDraw()
    }, setOpacity: function (cu) {
        this.opacity = cu;
        this.reDraw()
    }, setLineWeight: function (cu) {
        this.lineWeight = cu;
        this.reDraw()
    }});
    function bs() {
        if (typeof(bg._isSupport) == an[184]) {
            bg._isSupport = !!document.createElement("canvas").getContext
        }
        return bg._isSupport
    }

    ak(bg, {isSupport: bs});
    function aq() {
        var cu = this.div = document.createElement("div");
        ak(cu.style, {position: an[189], zIndex: 420});
        this.ctx = new window.jsGraphics(cu)
    }

    aq.prototype = new c();
    ak(aq.prototype, {start: function (cu, cw, cv) {
        ak(this, {origin: cu, size: cv, scale: cw, pathArr: []})
    }, moveTo: function (cv) {
        var cx = this.pathArr, cy = this.scale, cw = this.origin;
        var cu = {xPoints: [(cv.x - cw.x) / cy], yPoints: [(cv.y - cw.y) / cy]};
        cx.push(cu)
    }, lineTo: function (cv) {
        var cx = this.pathArr, cu = cx[cx.length - 1], cy = this.scale, cw = this.origin;
        cu.xPoints.push((cv.x - cw.x) / cy);
        cu.yPoints.push((cv.y - cw.y) / cy)
    }, finish: function () {
        this.lastScale = this.scale;
        this.reDraw()
    }, setScale: function (cv) {
        this.lastScale = cv;
        var cu = this.size;
        ak(this.div.style, {width: cu.x / cv + "px", height: cu.y / cv + "px"});
        this.reDraw()
    }, setLineColor: function (cu) {
        if (cu == an[178]) {
            cu = ""
        }
        this.lineColor = cu;
        this.reDraw()
    }, setFillColor: function (cu) {
        if (cu == an[178]) {
            cu = ""
        }
        this.bgcolor = cu;
        this.reDraw()
    }, setOpacity: function (cu) {
        ak(this.div.style, {filter: an[192] + parseInt(cu * 100) + ")", MozOpacity: cu, opacity: cu})
    }, setLineWeight: function (cu) {
        this.lineWeight = cu;
        this.reDraw()
    }, setLineStyle: function (cu) {
        this.lineStyle = cu.toLowerCase()
    }, reDraw: function () {
        var cz = this.scale, cy = this.lastScale, cH = this.size, cv = this.div, cE = this.pathArr;
        if (!cH || !cE || cE.length == 0) {
            return
        }
        ak(cv, {width: cH.x / cy, height: cH.y / cy});
        var cF = this.ctx;
        cF.clear();
        for (var cB = 0; cB < cE.length; cB++) {
            var cw = cE[cB], cu, cD;
            if (cz == cy) {
                cu = cw.xPoints;
                cD = cw.yPoints
            } else {
                cu = new Array(cw.xPoints.length);
                cD = new Array(cw.yPoints.length);
                var cG = cz / cy, cC = cw.xPoints, cx = cw.yPoints;
                for (var cA = cu.length - 1; cA >= 0; cA--) {
                    cu[cA] = cC[cA] * cG;
                    cD[cA] = cx[cA] * cG
                }
            }
            if (this.bgcolor) {
                cF.setColor(this.bgcolor);
                cF.fillPolygon(cu, cD)
            }
            if (this.lineColor) {
                cF.setColor(this.lineColor);
                cF.setStroke((this.lineStyle && this.lineStyle != an[177] && window.Stroke) ? window.Stroke.DOTTED : this.lineWeight);
                cF.drawPolyline(cu, cD)
            }
        }
        cF.paint()
    }});
    function br() {
        return !!window.jsGraphics
    }

    ak(aq, {isSupport: br});
    function bD() {
        var cv = an[176];
        var cw = this.div = document.createElementNS(cv, "svg");
        ak(cw.style, {position: an[189], zIndex: 420});
        var cu = this.path = document.createElementNS(cv, "path");
        cw.appendChild(cu)
    }

    bD.prototype = new c();
    ak(bD.prototype, {start: function (cu, cw, cv) {
        ak(this, {origin: cu, size: cv, scale: cw, pathArr: []})
    }, moveTo: function (cu) {
        var cw = this.pathArr, cx = this.scale, cv = this.origin;
        cw.push("M");
        cw.push((cu.x - cv.x) / cx);
        cw.push((cu.y - cv.y) / cx)
    }, lineTo: function (cu) {
        var cw = this.pathArr, cx = this.scale, cv = this.origin;
        cw.push("L");
        cw.push((cu.x - cv.x) / cx);
        cw.push((cu.y - cv.y) / cx)
    }, finish: function () {
        var cu = this.pathArr;
        this.path.setAttribute("d", this.pathArr.join(" "));
        this.setScale(this.scale)
    }, clear: function () {
        this.path.setAttribute("d", "")
    }, setScale: function (cw) {
        var cv = this.size, cu = this.lineWeight;
        if (!cv) {
            return
        }
        ak(this.div.style, {width: cv.x / cw + cu * 2 + "px", height: cv.y / cw + cu * 2 + "px"});
        this.path.setAttribute("transform", "scale(" + (this.scale / cw) + ") translate(" + (cu) + "," + (cu) + ")");
        this.lastScale = cw;
        this.path.setAttribute(an[175], this.getStyle())
    }, setPosition: function (cu) {
        if (!cu) {
            return
        }
        this.lastPosition = cu;
        var cv = this.lineWeight;
        ak(this.div.style, {position: an[189], left: (cu.x - cv) + "px", top: (cu.y - cv) + "px"})
    }, setLineColor: function (cu) {
        if (cu == an[178] || !cu) {
            cu = an[174]
        }
        this.lineColor = cu;
        this.path.setAttribute(an[175], this.getStyle())
    }, setFillColor: function (cu) {
        if (cu == an[178] || !cu) {
            cu = an[174]
        }
        this.bgcolor = cu;
        this.path.setAttribute(an[175], this.getStyle())
    }, setOpacity: function (cu) {
        this.opacity = cu;
        this.path.setAttribute(an[175], this.getStyle())
    }, setLineWeight: function (cu) {
        this.lineWeight = cu;
        this.setScale(this.lastScale);
        this.setPosition(this.lastPosition)
    }, setLineStyle: function (cv) {
        var cu;
        switch (cv.toLowerCase()) {
            case"dotted":
                cu = [1, 6];
                break;
            case an[173]:
                cu = [6, 6];
                break;
            default:
                break
        }
        this.dashArray = cu;
        this.path.setAttribute(an[175], this.getStyle())
    }, getStyle: function () {
        var cu = [];
        cu.push("fill:none");
        cu.push("opacity:" + this.opacity);
        cu.push("stroke:" + this.lineColor);
        cu.push("stroke-linecap:round");
        cu.push("stroke-linejoin:round");
        cu.push("stroke-dasharray:" + this.dashArray);
        cu.push("stroke-width:" + this.lineWeight / this.scale * this.lastScale);
        cu.push("fill:" + this.bgcolor);
        return cu.join(";")
    }});
    function bq() {
        if (typeof(bD._isSupport) == an[184]) {
            if (document.createElementNS) {
                var cu = an[176];
                var cv = document.createElementNS(cu, "svg");
                bD._isSupport = typeof(cv.ownerSVGElement) == an[194]
            } else {
                bD._isSupport = false
            }
        }
        return bD._isSupport
    }

    ak(bD, {isSupport: bq});
    function cr() {
        var cw = this.div = document.createElement("v:shape");
        ak(cw, {unselectable: "on", filled: "true"});
        var cv = this.stroke = document.createElement("v:stroke");
        ak(cv, {joinstyle: "round", endcap: "round"});
        cw.appendChild(cv);
        var cu = this.fill = document.createElement("v:fill");
        cw.appendChild(cu);
        cv.style.cssText = cu.style.cssText = cw.style.cssText = an[172];
        cv.style.behavior = cu.style.behavior = cw.style.behavior = an[171];
        cw.style.position = an[189];
        cw.style.zIndex = "420"
    }

    cr.prototype = new c();
    ak(cr.prototype, {setPosition: function (cu) {
        var cv = this.div;
        cv.style.position = an[189];
        cv.style.left = cu.x + "px";
        cv.style.top = cu.y + "px"
    }, start: function (cu, cw, cv) {
        ak(this, {origin: cu, size: cv, scale: cw, pathArr: []});
        this.div.coordsize = parseInt(cv.x * 256 / cw) + "," + parseInt(cv.y * 256 / cw)
    }, moveTo: function (cu) {
        var cw = this.pathArr, cx = this.scale, cv = this.origin;
        cw.push("m");
        cw.push(parseInt((cu.x - cv.x) * 256 / cx));
        cw.push(parseInt((cu.y - cv.y) * 256 / cx))
    }, lineTo: function (cu) {
        var cw = this.pathArr, cx = this.scale, cv = this.origin;
        cw.push("l");
        cw.push(parseInt((cu.x - cv.x) * 256 / cx));
        cw.push(parseInt((cu.y - cv.y) * 256 / cx))
    }, finish: function () {
        var cu = this.pathArr;
        cu.push("e");
        this.div.path = this.pathArr.join(" ");
        this.setScale(this.scale)
    }, clear: function () {
        this.div.style.display = an[174];
        this.div.path = "e";
        this.div.style.display = ""
    }, setScale: function (cv) {
        var cw = this.div, cu = this.size;
        cw.style.width = cu.x / cv + "px";
        cw.style.height = cu.y / cv + "px"
    }, setLineColor: function (cu) {
        var cv = this.div;
        if (cu == an[178] || cu == "") {
            cv.stroked = false
        } else {
            cv.stroked = true;
            cv.strokecolor = cu
        }
    }, setFillColor: function (cu) {
        var cv = this.div;
        if (cu == an[178] || cu == "") {
            cv.filled = false
        } else {
            cv.filled = true;
            cv.fillcolor = cu
        }
    }, setOpacity: function (cu) {
        this.stroke.opacity = cu;
        this.fill.opacity = cu
    }, setLineWeight: function (cu) {
        this.div.strokeweight = cu
    }, setLineStyle: function (cu) {
        switch (cu.toLowerCase()) {
            case"dotted":
                cu = "ShortDot";
                break;
            case an[173]:
                cu = "ShortDash";
                break
        }
        this.stroke.dashstyle = cu
    }});
    function bp() {
        if (typeof(cr._isSupport) == an[184]) {
            try {
                if (document.namespaces) {
                    if (!document.namespaces.v) {
                        document.namespaces.add("v", "urn:schemas-microsoft-com:vml")
                    }
                    var cv = document.createElement("v:shape");
                    cv.style.cssText = an[172];
                    cv.style.behavior = an[171];
                    document.body.appendChild(cv);
                    cr._isSupport = typeof(cv.Path) == an[194];
                    cv.parentNode.removeChild(cv)
                } else {
                    cr._isSupport = false
                }
            } catch (cu) {
                cr._isSupport = false
            }
        }
        return cr._isSupport
    }

    ak(cr, {isSupport: bp});
    function V(cu, cv) {
        cv = cv ? cv : new aE();
        bG(this, cv.getConfigObj("SFData"));
        ak(this, {modules: [], adapter: cu, components: [], rootElement: {}, lastElement: {}, elementUids: {}});
        cu.initialize();
        this.initialize()
    }

    ak(V.prototype, {initialize: function () {
        this.addTreeModule(an[170]);
        this.addTreeModule(an[169]);
        this.addModule(an[168]);
        this.addModule(an[167]);
        this.addLink = function (cw, cz, cx) {
            if (!this.checkEvent(an[166], [cw, cz, cx])) {
                return false
            }
            var cy = this.adapter.addLink(cw, cz, cx);
            cy.PredecessorTask = cz;
            cy.SuccessorTask = cw;
            cy.Type = cx;
            this.registerLink(cy);
            cg(this, an[165], [cy]);
            return cy
        };
        this.addAssignment = function (cw, cy, cx) {
            if (!this.checkEvent("beforeassignmentadd", [cw, cy, cx])) {
                return false
            }
            var cz = this.adapter.addAssignment(cw, cy, cx);
            cz.task = cw;
            cz.resource = cy;
            this.registerAssignment(cz);
            cg(this, "afterassignmentadd", [cz]);
            return cz
        };
        this._registerLink = function (cx) {
            if (!cx.SuccessorTask) {
                cx.SuccessorTask = this.getTaskByUid(cx.SuccessorUID, false)
            }
            if (!cx.PredecessorTask) {
                cx.PredecessorTask = this.getTaskByUid(cx.PredecessorUID, false)
            }
            if (cx.SuccessorTask && cx.PredecessorTask) {
                this.registerLink(cx);
                return
            }
            if (!this.afterTaskLinks) {
                this.afterTaskLinks = {}
            }
            if (cx.SuccessorUID && !cx.SuccessorTask) {
                var cw = cx.SuccessorUID;
                if (!this.afterTaskLinks[cw]) {
                    this.afterTaskLinks[cw] = []
                }
                this.afterTaskLinks[cw].push(cx)
            }
            if (cx.PredecessorUID && !cx.PredecessorTask) {
                var cw = cx.PredecessorUID;
                if (!this.afterTaskLinks[cw]) {
                    this.afterTaskLinks[cw] = []
                }
                this.afterTaskLinks[cw].push(cx)
            }
        };
        this.readTaskLinks = function (cw) {
            for (var cx = this.adapter.readTaskFirstLink(cw); cx; cx = this.adapter.readTaskNextLink(cw, cx)) {
                this._registerLink(cx)
            }
        };
        this.readTaskAssignments = function (cw) {
            for (var cx = this.adapter.readTaskFirstAssignment(cw); cx; cx = this.adapter.readTaskNextAssignment(cw, cx)) {
                cx.task = cw;
                this.registerAssignment(cx)
            }
        };
        this.readResourceAssignments = function (cw) {
            for (var cx = this.adapter.readResourceFirstAssignment(cw);
                 cx; cx = this.adapter.readResourceNextAssignment(cw, cx)) {
                cx.resource = cw;
                this.registerAssignment(cx)
            }
        };
        f(this, "taskregister", this, function (cx) {
            var cy = cx.UID;
            if (cy && this.afterTaskLinks && this.afterTaskLinks[cy]) {
                var cw = this.afterTaskLinks[cy], cz;
                this.afterTaskLinks[cy] = null;
                delete this.afterTaskLinks[cy];
                while (cz = cw.pop()) {
                    this._registerLink(cz)
                }
            }
        });
        f(this, "taskunregister", this, function (cz) {
            var cx = cz.PredecessorLinks;
            for (var cy = cx.length - 1; cy >= 0; cy--) {
                this.unregisterLink(cx[cy])
            }
            var cx = cz.SuccessorLinks;
            for (var cy = cx.length - 1;
                 cy >= 0; cy--) {
                this.unregisterLink(cx[cy])
            }
            var cw = cz.Assignments;
            for (var cy = cw.length - 1; cy >= 0; cy--) {
                this.unregisterAssignment(cw[cy])
            }
        });
        f(this, "resourceunregister", this, function (cy) {
            var cw = cy.Assignments;
            for (var cx = cw.length - 1; cx >= 0; cx--) {
                this.unregisterAssignment(cw[cx])
            }
        });
        f(this, an[164], this, function (cw) {
            cw.SuccessorTask.PredecessorLinks.push(cw);
            cw.PredecessorTask.SuccessorLinks.push(cw)
        });
        f(this, an[163], this, function (cw) {
            A(cw.PredecessorTask.SuccessorLinks, cw);
            A(cw.SuccessorTask.PredecessorLinks, cw)
        });
        f(this, an[166], this, function (cz, cw, cA) {
            if (!cw || !cA) {
                return
            }
            var cx = cw.getPredecessorLinks();
            for (var cy = cx.length - 1; cy >= 0; cy--) {
                if (cx[cy].PredecessorTask == cA) {
                    cz.returnValue = false;
                    return
                }
            }
            var cx = cw.getSuccessorLinks();
            for (var cy = cx.length - 1; cy >= 0; cy--) {
                if (cx[cy].PredecessorTask == cA) {
                    cz.returnValue = false;
                    return
                }
            }
        });
        f(this, "assignmentregister", this, function (cw) {
            (cw.task = cw.getTask()).Assignments.push(cw);
            if ((cw.resource = cw.getResource())) {
                cw.resource.Assignments.push(cw)
            }
        });
        f(this, "assignmentunregister", this, function (cw) {
            if (cw.task) {
                A(cw.task.Assignments, cw);
                delete cw.task
            }
            if (cw.resource) {
                A(cw.resource.Assignments, cw);
                delete cw.resource
            }
        });
        if (this.initComponents) {
            var cu = this.initComponents.split(",");
            for (var cv = 0; cv < cu.length; cv++) {
                this.addComponent(new window[cu[cv]]())
            }
        }
    }, addModule: function (cu) {
        this.modules.push(cu);
        this.elementUids[cu] = {};
        this["get" + cu + "ByUid"] = function (cv, cw) {
            return this.getElementByUid(cu, cv, cw)
        };
        this[an[162] + cu] = function (cv, cx, cw) {
            return this.updateElement(cu, cv, cx, cw)
        };
        this[an[161] + cu] = function (cv) {
            return this.registerElement(cu, cv)
        };
        this[an[160] + cu] = function (cv) {
            return this.unregisterElement(cu, cv)
        };
        this["add" + cu] = function () {
            var cv = [cu];
            for (var cw = 0; cw < arguments.length; cw++) {
                cv.push(arguments[cw])
            }
            return this.addElement(cv)
        };
        this["canAdd" + cu] = function () {
            return this.checkEvent(an[159] + cu + "add", arguments)
        };
        this[an[158] + cu] = function (cv) {
            return this.deleteElement(cu, cv)
        };
        this["canDelete" + cu] = function () {
            return this.checkEvent(an[159] + cu + an[158], arguments)
        }
    }, addTreeModule: function (cu) {
        this.addModule(cu);
        this[an[157] + cu] = function (cv) {
            return this.getRootElement(cu)
        };
        this["read" + cu + an[156]] = function (cv) {
            return this.readElementFirstChild(cu, cv)
        };
        this["read" + cu + an[155]] = function (cv) {
            return this.readElementNextSibling(cu, cv)
        };
        this["get" + cu + "ByOutline"] = function (cv) {
            return this.getElementByOutline(cu, cv)
        };
        this["compare" + cu] = function (cv, cw) {
            return this.compareElement(cv, cw)
        };
        this[an[160] + cu] = function (cv) {
            return this.unregisterTreeElement(cu, cv)
        };
        this["add" + cu] = function (cw, cv) {
            return this.addTreeElement(cu, cw, cv)
        };
        this[an[158] + cu] = function (cv) {
            return this.deleteTreeElement(cu, cv)
        };
        this[an[154] + cu] = function (cw, cv, cx) {
            return this.moveElement(cu, cw, cv, cx)
        };
        this["canMove" + cu] = function (cw, cv, cx) {
            return this.canMoveElement(cu, cw, cv, cx)
        }
    }, getModules: function () {
        return this.modules
    }, addComponent: function (cu) {
        if (B(this.components, cu)) {
            return
        }
        cu.initialize(this);
        this.components.push(cu)
    }, removeComponent: function (cu) {
        cu.remove(cu);
        A(this.components, cu)
    }, getCalendar: function () {
        return this.adapter.getCalendar()
    }, checkEvent: function (cw, cv) {
        var cx = cw;
        var cz = {returnValue: true};
        var cu = [cz];
        for (var cy = 0; cy < cv.length; cy++) {
            cu.push(cv[cy])
        }
        cg(this, cx, cu);
        if (!cz.returnValue) {
            return false
        }
        return true
    }, depose: function () {
        ck(this);
        for (var cu in this) {
            this[cu] = null
        }
    }, registerElement: function (cv, cw) {
        cw.data = this;
        var cu = cw.UID;
        if (cu) {
            this.elementUids[cv][cu] = cw
        }
        cg(this, cv.toLowerCase() + an[161], [cw])
    }, unregisterElement: function (cv, cw) {
        var cu = cw.UID;
        if (cu) {
            this.elementUids[cv][cu] = null;
            delete this.elementUids[cv][cu]
        }
        cg(this, cv.toLowerCase() + an[160], [cw]);
        cw.data = null
    }, addElement: function (cw) {
        var cu = [];
        for (var cv = 1; cv < arguments.length; cv++) {
            cu.push(arguments[cv])
        }
        if (!this.checkEvent(an[159] + cw.toLowerCase() + "add", cu)) {
            return false
        }
        var cx = this.adapter["add" + cw].apply(this.adapter, cu);
        cg(this, an[153] + cw.toLowerCase() + "add", [cx]);
        this.registerElement(cw, cx);
        return cx
    }, deleteElement: function (cv, cu) {
        if (!this.checkEvent(an[159] + cv.toLowerCase() + an[158], [cu])) {
            return false
        }
        this.unregisterElement(cv, cu);
        this.adapter[an[158] + cv](cu);
        cg(this, an[153] + cv.toLowerCase() + an[158], [cu]);
        return true
    }, getRootElement: function (cv) {
        var cu = this.rootElement[cv];
        if (!cu) {
            cu = this.rootElement[cv] = this.adapter["readRoot" + cv]();
            if (cu) {
                this.registerElement(cv, cu)
            }
        }
        return cu
    }, readElementFirstChild: function (cw, cv) {
        if (!cv.firstChild) {
            var cu = cv.firstChild = this.adapter["read" + cw + an[156]](cv);
            if (cu) {
                cu.parent = cv;
                this.registerElement(cw, cu)
            }
        }
        return cv.firstChild
    }, readElementNextSibling: function (cw, cv) {
        if (cv == this.getRootElement(cw)) {
            return null
        }
        if (!cv.nextSibling) {
            var cu = cv.nextSibling = this.adapter["read" + cw + an[155]](cv);
            if (cu) {
                cu.previousSibling = cv;
                cu.parent = cv.parent;
                this.registerElement(cw, cv.nextSibling)
            }
        }
        return cv.nextSibling
    }, getElementByUid: function (cw, cv, cx) {
        var cu = this.elementUids[cw][cv];
        if (cu || cx === false) {
            return cu
        }
        if (!this.lastElement[cw]) {
            this.lastElement[cw] = this.getRootElement(cw)
        }
        while (this.lastElement[cw] = this.lastElement[cw].getNext()) {
            if (this.lastElement[cw].UID == cv) {
                return this.lastElement[cw]
            }
        }
        return null
    }, getElementByOutline: function (cw, cv) {
        var cu = this.getRootElement(cw);
        if (!cv) {
            return cu
        }
        return this.searchElementOutline(cw, cu, cv.split("."))
    }, searchElementOutline: function (cy, cw, cx) {
        if (cx.length == 0) {
            return cw
        }
        var cz = cw.getFirstChild(), cu = cx.shift();
        for (var cv = 1; cv < cu; cv++) {
            cz = cz.getNextSibling()
        }
        return this.searchElementOutline(cy, cz, cx)
    }, compareElement: function (cz, cy) {
        var cv = cz.getOutlineNumber(this).split(".");
        var cu = cy.getOutlineNumber(this).split(".");
        var cx = Math.min(cv.length, cu.length);
        for (var cw = 0; cw < cx; cw++) {
            if (cv[cw] * 1 < cu[cw] * 1) {
                return 1
            }
            if (cv[cw] * 1 > cu[cw] * 1) {
                return -1
            }
        }
        if (cv.length == cu.length) {
            return 0
        }
        return(cv.length < cu.length) ? 1 : -1
    }, updateElement: function (cv, cu, cx, cw) {
        this.adapter[an[162] + cv](cu, cx, cw)
    }, addTreeElement: function (cw, cv, cu) {
        if (!this.checkEvent(an[159] + cw.toLowerCase() + "add", [cv, cu])) {
            return false
        }
        if (!cv.getFirstChild()) {
            cv.setProperty(an[152], true)
        }
        var cx = this.adapter["add" + cw](cv, cu);
        cx.parent = cv;
        if (!cu) {
            cx.previousSibling = null;
            cx.nextSibling = cv.getFirstChild();
            if (cx.nextSibling) {
                cx.nextSibling.previousSibling = cx
            }
            cv.firstChild = cx
        } else {
            cx.previousSibling = cu;
            cx.nextSibling = cu.getNextSibling();
            if (cx.nextSibling) {
                cx.nextSibling.previousSibling = cx
            }
            cu.nextSibling = cx
        }
        this.registerElement(cw, cx);
        cg(this, an[153] + cw.toLowerCase() + "add", [cx]);
        return cx
    }, deleteTreeElement: function (cx, cv) {
        if (!this.checkEvent(an[159] + cx.toLowerCase() + an[158], [cv])) {
            return false
        }
        var cw = cv.getParent(), cy = cv.getPreviousSibling(), cu = cv.getNextSibling();
        if (cy) {
            cy.nextSibling = cu
        }
        if (cu) {
            cu.previousSibling = cy
        }
        if (cw) {
            if (cw.getFirstChild() == cv) {
                cw.firstChild = cu
            }
            cw.setProperty(an[152], !!cw.getFirstChild())
        }
        cv.previousSibling = null;
        cv.nextSibling = null;
        this.adapter[an[158] + cx](cv);
        this.unregisterTreeElement(cx, cv);
        cg(this, an[153] + cx.toLowerCase() + an[158], [cv, cw, cy]);
        return true
    }, unregisterTreeElement: function (cv, cu) {
        var cx = cu.firstChild;
        cu.firstChild = null;
        while (cx) {
            this.unregisterTreeElement(cv, cx);
            var cw = cx.nextSibling;
            cx.nextSibling = null;
            cx.previousSibling = null;
            cx.parent = null;
            cx = cw
        }
        this.unregisterElement(cv, cu)
    }, moveElement: function (cx, cv, cu, cA) {
        if (!this.canMoveElement(cx, cv, cu, cA)) {
            return false
        }
        var cw = cv.getParent(), cy = cv.getPreviousSibling(), cz = cv.getNextSibling();
        if (cw.getFirstChild() == cv) {
            cw.firstChild = cz;
            if (!cz) {
                cw.setProperty(an[152], false)
            }
        }
        cv.parent = null;
        if (cy) {
            cy.nextSibling = cz;
            cv.previousSibling = null
        }
        if (cz) {
            cz.previousSibling = cy;
            cv.nextSibling = null
        }
        cv.parent = cu;
        cv.previousSibling = cA;
        if (cA) {
            cv.nextSibling = cA.getNextSibling();
            cA.nextSibling = cv
        } else {
            cv.nextSibling = cu.getFirstChild();
            cu.firstChild = cv
        }
        if (cv.nextSibling) {
            cv.nextSibling.previousSibling = cv
        }
        cu.setProperty(an[152], true);
        this.adapter[an[154] + cx](cv, cw, cy);
        cg(this, an[153] + cx.toLowerCase() + an[154], [cv, cw, cy]);
        return true
    }, canMoveElement: function (cw, cv, cu, cx) {
        if (!cu && cx) {
            cu = cx.getParent()
        }
        if (!cu) {
            cu = this.getRootElement(cw)
        }
        if (cx && cx.getParent() != cu) {
            return false
        }
        if (cv.contains(cu)) {
            return false
        }
        if (!this.checkEvent(an[159] + cw.toLowerCase() + an[154], [cv, cu, cx])) {
            return false
        }
        return true
    }});
    function be() {
    }

    ak(be.prototype, {getProperty: function (cu) {
        return this[cu]
    }, setProperty: function (cw, cB) {
        var cv = (typeof(this[cw]) == an[194] && cB) ? this[cw].valueOf() : this[cw];
        var cu = (typeof(cB) == an[194] && cB) ? cB.valueOf() : cB;
        if (cv == cu) {
            return true
        }
        if (!this.canSetProperty(cw, cB)) {
            return false
        }
        var cy = this[cw];
        this[cw] = cB;
        if (!this.data) {
            return true
        }
        if (this.data[an[162] + this.elementType]) {
            this.data[an[162] + this.elementType](this, cw, cB)
        }
        if (cw == "UID") {
            var cA = this.data.elementUids[this.elementType];
            if (cy) {
                delete cA[cy]
            }
            if (cB) {
                cA[cB] = this
            }
        }
        cg(this.data, an[153] + this.elementType.toLowerCase() + an[151], [this, cw, cB, cy]);
        var cz = {}, cx = {};
        cz[cw] = cy;
        cx[cw] = cB;
        cg(this.data, an[153] + this.elementType.toLowerCase() + an[162], [this, [cw], cx, cz]);
        return true
    }, canSetProperty: function (cu, cv) {
        if (!this.data) {
            return true
        }
        return this.data.checkEvent(an[159] + this.elementType.toLowerCase() + an[151], [this, cu, cv])
    }});
    function cl() {
    }

    cl.prototype = new be();
    ak(cl.prototype, {getFirstChild: function () {
        if (typeof(this.firstChild) == an[184]) {
            this.firstChild = this.data.readElementFirstChild(this.elementType, this)
        }
        return this.firstChild
    }, getParent: function () {
        return this.parent
    }, getPreviousSibling: function () {
        return this.previousSibling
    }, getNextSibling: function (cu) {
        if (typeof(this.nextSibling) == an[184]) {
            this.nextSibling = this.data.readElementNextSibling(this.elementType, this)
        }
        if (!this.nextSibling && cu) {
            var cv = this.getParent();
            if (cv) {
                return cv.getNextSibling(cu)
            }
        }
        return this.nextSibling
    }, getAncestor: function (cw) {
        var cv = this.getOutlineLevel();
        var cu = this;
        while (cv > cw) {
            cu = cu.getParent();
            cv--
        }
        return cu
    }, getPrevious: function () {
        var cu = this.getPreviousSibling();
        return cu ? cu.getLastDescendant() : this.getParent()
    }, getNext: function () {
        if (this == this.data.getRootElement(this.elementType)) {
            return this.getFirstChild()
        }
        if (this.Summary) {
            var cv = this.getFirstChild();
            if (cv) {
                return cv
            }
        }
        var cv = this.getNextSibling();
        if (cv) {
            return cv
        }
        for (var cu = this.getParent(); cu; cu = cu.getParent()) {
            cv = cu.getNextSibling();
            if (cv) {
                return cv
            }
        }
        return null
    }, getLastChild: function () {
        var cu = null;
        for (var cv = this.getFirstChild(); cv; cv = cv.getNextSibling()) {
            cu = cv
        }
        return cu
    }, getLastDescendant: function (cv) {
        if (!this.Summary || (cv && this.Collapse)) {
            return this
        }
        var cu = this.getLastChild();
        return cu ? cu.getLastDescendant(cv) : this
    }, getNextView: function () {
        return this.Collapse ? this.getNextSibling(true) : this.getNext()
    }, getPreviousView: function () {
        var cu = this.getPreviousSibling();
        if (cu) {
            return cu.getLastDescendant(true)
        }
        cu = this.getParent();
        if (cu && cu.getOutlineLevel() > 0) {
            return cu
        }
        return null
    }, isHidden: function () {
        if (!this.data) {
            return true
        }
        for (var cu = this.getParentTask(); cu; cu = cu.getParentTask()) {
            if (cu.Collapse || !cu.data) {
                return true
            }
        }
        return false
    }, contains: function (cu) {
        for (var cv = cu;
             cv; cv = cv.getParent()) {
            if (cv == this) {
                return true
            }
        }
        return false
    }, getSiblingIndex: function () {
        var cu = 0, cv = this;
        while (cv) {
            cv = cv.getPreviousSibling();
            cu++
        }
        return cu
    }, getOutlineNumber: function (cx) {
        cx = cx ? cx : this.data;
        var cw = this, cv = cx.getRootElement(this.elementType);
        if (cw == cv) {
            return"0"
        }
        var cu = [];
        while (cw && cw != cv) {
            cu.unshift(cw.getSiblingIndex());
            cw = cw.getParent()
        }
        return cu.join(".")
    }, getOutlineLevel: function () {
        var cv = this, cu = -1;
        while (cv) {
            cu++;
            cv = cv.getParent()
        }
        return cu
    }});
    function r() {
        this.elementType = an[170];
        ak(this, {SuccessorLinks: [], PredecessorLinks: [], Assignments: []});
        ak(this, {getParentTask: this.getParent, getNextTask: this.getNext, getPreviousTask: this.getPrevious, getAncestorTask: this.getAncestor, getNextViewTask: this.getNextView, getPreviousViewTask: this.getPreviousView, containsTask: this.contains})
    }

    r.prototype = new be();
    ak(r.prototype, {getOutlineLevel: function () {
        var cv = this, cu = -1;
        while (cv) {
            cu++;
            cv = cv.getParent()
        }
        return cu
    }, getOutlineNumber: function (cx) {
        cx = cx ? cx : this.data;
        var cw = this, cv = cx.getRootElement(this.elementType);
        if (cw == cv) {
            return"0"
        }
        var cu = [];
        while (cw && cw != cv) {
            cu.unshift(cw.getSiblingIndex());
            cw = cw.getParent()
        }
        return cu.join(".")
    }, getSiblingIndex: function () {
        var cu = 0, cv = this;
        while (cv) {
            cv = cv.getPreviousSibling();
            cu++
        }
        return cu
    }, contains: function (cu) {
        for (var cv = cu; cv; cv = cv.getParent()) {
            if (cv == this) {
                return true
            }
        }
        return false
    }, isHidden: function () {
        if (!this.data) {
            return true
        }
        for (var cu = this.getParentTask(); cu; cu = cu.getParentTask()) {
            if (cu.Collapse || !cu.data) {
                return true
            }
        }
        return false
    }, getPreviousView: function () {
        var cu = this.getPreviousSibling();
        if (cu) {
            return cu.getLastDescendant(true)
        }
        cu = this.getParent();
        if (cu && cu.getOutlineLevel() > 0) {
            return cu
        }
        return null
    }, getNextView: function () {
        return this.Collapse ? this.getNextSibling(true) : this.getNext()
    }, getLastDescendant: function (cv) {
        if (!this.Summary || (cv && this.Collapse)) {
            return this
        }
        var cu = this.getLastChild();
        return cu ? cu.getLastDescendant(cv) : this
    }, getLastChild: function () {
        var cu = null;
        for (var cv = this.getFirstChild(); cv; cv = cv.getNextSibling()) {
            cu = cv
        }
        return cu
    }, getNext: function () {
        if (this == this.data.getRootElement(this.elementType)) {
            return this.getFirstChild()
        }
        if (this.Summary) {
            var cv = this.getFirstChild();
            if (cv) {
                return cv
            }
        }
        var cv = this.getNextSibling();
        if (cv) {
            return cv
        }
        for (var cu = this.getParent(); cu; cu = cu.getParent()) {
            cv = cu.getNextSibling();
            if (cv) {
                return cv
            }
        }
        return null
    }, getPrevious: function () {
        var cu = this.getPreviousSibling();
        return cu ? cu.getLastDescendant() : this.getParent()
    }, getAncestor: function (cw) {
        var cv = this.getOutlineLevel();
        var cu = this;
        while (cv > cw) {
            cu = cu.getParent();
            cv--
        }
        return cu
    }, getNextSibling: function (cu) {
        if (typeof(this.nextSibling) == an[184]) {
            this.nextSibling = this.data.readElementNextSibling(this.elementType, this)
        }
        if (!this.nextSibling && cu) {
            var cv = this.getParent();
            if (cv) {
                return cv.getNextSibling(cu)
            }
        }
        return this.nextSibling
    }, getPreviousSibling: function () {
        return this.previousSibling
    }, getParent: function () {
        return this.parent
    }, getFirstChild: function () {
        if (typeof(this.firstChild) == an[184]) {
            this.firstChild = this.data.readElementFirstChild(this.elementType, this)
        }
        return this.firstChild
    }, update: function () {
    }, checkTime: function () {
        var cu = Number.MAX_VALUE, cv = Number.MIN_VALUE;
        for (var cw = this.getFirstChild(); cw; cw = cw.getNextSibling()) {
            if (cw.Start) {
                cu = Math.min(cu, cw.Start.valueOf())
            }
            if (cw.Finish) {
                cv = Math.max(cv, cw.Finish.valueOf())
            }
        }
        if (cu == Number.MAX_VALUE) {
            this.setProperty(an[150], this.Start)
        } else {
            this.setProperty(an[149], new Date(cu));
            this.setProperty(an[150], new Date(Math.max(cu, cv)))
        }
    }, getPredecessorLinks: function () {
        if (!this.linksRead) {
            this.data.readTaskLinks(this);
            this.linksRead = true
        }
        return this.PredecessorLinks
    }, getSuccessorLinks: function () {
        if (!this.linksRead) {
            this.data.readTaskLinks(this);
            this.linksRead = true
        }
        return this.SuccessorLinks
    }, getPredecessorTasks: function () {
        var cw = [], cu = this.getPredecessorLinks();
        for (var cv = 0; cv < cu.length; cv++) {
            cw.push(cu[cv].getPredecessorTask())
        }
        return cw
    }, getSuccessorTasks: function () {
        var cw = [], cu = this.getSuccessorLinks();
        for (var cv = 0; cv < cu.length; cv++) {
            cw.push(cu[cv].getSuccessorTask())
        }
        return cw
    }, getAssignments: function () {
        if (this.Summary) {
            return[]
        }
        if (!this.assignmentsRead) {
            this.data.readTaskAssignments(this);
            this.assignmentsRead = true
        }
        return this.Assignments
    }, addPredecessorLink: function (cw, cu) {
        var cv = this.data.addLink(this, cw, cu);
        return cv
    }, addSuccessorLink: function (cw, cu) {
        var cv = this.data.addLink(cw, this, cu);
        return cv
    }, addAssignment: function (cw, cu) {
        var cv = this.data.addAssignment(this, cw, cu);
        if (!cv) {
            return
        }
        if (cu) {
            cv.setProperty(an[148], cu)
        }
        return cv
    }});
    function bh() {
        this.elementType = an[168]
    }

    bh.prototype = new be();
    ak(bh.prototype, {getPredecessorTask: function () {
        return this.PredecessorTask
    }, getSuccessorTask: function () {
        return this.SuccessorTask
    }});
    function b() {
        this.elementType = an[167]
    }

    b.prototype = new be();
    ak(b.prototype, {getTask: function () {
        return this.task ? this.task : this.data.getTaskByUid(this.TaskUID)
    }, getResource: function () {
        return this.resource ? this.resource : this.data.getResourceByUid(this.ResourceUID)
    }});
    function Z() {
        this.elementType = an[169];
        ak(this, {getParentResource: this.getParent, getNextResource: this.getNext, getPreviousResource: this.getPrevious, getAncestorResource: this.getAncestor, getNextViewResource: this.getNextView, getPreviousViewResource: this.getPreviousView, containsResource: this.contains});
        this.Assignments = []
    }

    Z.prototype = new cl();
    ak(Z.prototype, {getAssignments: function () {
        if (!this.assignmentsRead) {
            this.data.readResourceAssignments(this);
            this.assignmentsRead = true
        }
        return this.Assignments
    }, addAssignment: function (cu, cv) {
        var cw = this.data.addAssignment(cu, this);
        if (!cw) {
            return
        }
        if (cv) {
            cw.setProperty(an[148], cv)
        }
        return cw
    }});
    function aT(cu, cv) {
        this.read = cu;
        this.write = cv
    }

    function bo(cu) {
        return this.read.apply(this, [cu])
    }

    function bn(cu, cv) {
        return this.write.apply(this, [cu, cv])
    }

    function bm() {
        aT.types = {Bool2Int: new aT(a6, a5), Int: new aT(a8, a7), Float: new aT(a4, a3), String: new aT(bb, a9), Time: new aT(bk, bj)}
    }

    function bl(cu) {
        return aT.types[cu]
    }

    function bk(cu) {
        return ae(bV(cu))
    }

    function bj(cu, cv) {
        bU(cu, ac(cv, "s"))
    }

    function bb(cu) {
        return bV(cu)
    }

    function a9(cu, cv) {
        bU(cu, cv)
    }

    function a8(cu) {
        return parseInt(bV(cu))
    }

    function a7(cu, cv) {
        bU(cu, parseInt(cv))
    }

    function a6(cu) {
        return parseInt(bV(cu)) > 0 ? true : false
    }

    function a5(cu, cv) {
        bU(cu, cv ? 1 : 0)
    }

    function a4(cu) {
        return parseFloat(bV(cu))
    }

    function a3(cu, cv) {
        bU(cu, parseFloat(cv))
    }

    ak(aT, {read: bo, write: bn, init: bm, getType: bl, TimeRead: bk, TimeWrite: bj, StringRead: bb, StringWrite: a9, IntRead: a8, IntWrite: a7, Bool2IntRead: a6, Bool2IntWrite: a5, FloatRead: a4, FloatWrite: a3});
    function aW() {
    }

    ak(aW.prototype, {initialize: function () {
    }, remove: function () {
    }, depose: function () {
        if (this.listeners) {
            var cu;
            while (cu = this.listeners.pop()) {
                cm(cu)
            }
        }
    }, getCalendar: function () {
        return bC(an[183])
    }, readRootTask: function () {
    }, readTaskFirstChild: function () {
    }, readTaskNextSibling: function () {
    }, readRootResource: function () {
    }, readResourceFirstChild: function () {
    }, readResourceNextSibling: function () {
    }, readTaskFirstLink: function () {
    }, readTaskNextLink: function () {
    }, readTaskFirstAssignment: function () {
    }, readTaskNextAssignment: function () {
    }, readResourceFirstAssignment: function () {
    }, readResourceNextAssignment: function () {
    }, updateTask: function () {
    }, addTask: function () {
        return new r()
    }, deleteTask: function () {
    }, moveTask: function () {
    }, updateResource: function () {
    }, addResource: function () {
        return new Z()
    }, deleteResource: function () {
    }, moveResource: function () {
    }, updateLink: function () {
    }, addLink: function () {
        return new bh()
    }, deleteLink: function () {
    }, updateAssignment: function () {
    }, addAssignment: function () {
        return new b()
    }, deleteAssignment: function () {
    }});
    function bP() {
    }

    bP.prototype = new aW();
    ak(bP.prototype, {initialize: function () {
        aW.prototype.initialize.apply(this, arguments)
    }, getConfig: function () {
        return this.config
    }, getXml: function () {
        return this.doc
    }, readCalendar: function (cv) {
        var cA = new Array(7), cz = [];
        var cB = bW(cv, "WeekDays");
        for (var cy = cB.firstChild; cy; cy = cy.nextSibling) {
            if (cy.nodeName != "WeekDay") {
                continue
            }
            var cx = parseInt(bV(bW(cy, "DayType")));
            var cu = parseInt(bV(bW(cy, "DayWorking")));
            var cw = this.getCalendarTime(bW(cy, "WorkingTimes"));
            if (cx) {
                cA[cx - 1] = cw
            } else {
                cz.push([ae(bV(bW(cy, "TimePeriod/FromDate"))), ae(bV(bW(cy, "TimePeriod/ToDate"))), cw])
            }
        }
        return new aG(bB(cA, cz))
    }, getCalendarTime: function (cu) {
        var cv = [];
        if (!cu) {
            return cv
        }
        for (var cw = cu.firstChild; cw; cw = cw.nextSibling) {
            if (cw.nodeName != "WorkingTime") {
                continue
            }
            cv.push([this.getMinutes(bV(bW(cw, "FromTime"))), this.getMinutes(bV(bW(cw, "ToTime")))])
        }
        return cv
    }, getMinutes: function (cv) {
        var cw = new RegExp("^([0-9]+):([0-9]+):([0-9]+)$");
        var cu = cw.exec(cv);
        return parseInt(cu[1], 10) * 60 + parseInt(cu[2], 10) + parseInt(cu[3], 10) / 60
    }, addDefaultProperty: function () {
        var cu = aT.types;
        this.addTaskProperty("UID", 0, cu.String);
        this.addTaskProperty(an[152], 0, cu.Bool2Int);
        this.addTaskProperty("ID", 0, cu.Int);
        this.addTaskProperty(an[147], 0, cu.String);
        this.addTaskProperty(an[146], 0, cu.Int);
        this.addTaskProperty(an[149], 0, cu.Time);
        this.addTaskProperty(an[150], 0, cu.Time);
        this.addTaskProperty(an[145], 0, cu.String);
        this.addTaskProperty(an[144], 0, cu.Bool2Int);
        this.addTaskProperty(an[143], 0, cu.Int);
        this.addTaskProperty(an[142], 0, cu.String);
        this.addTaskProperty(an[141], 0, cu.Int);
        this.addTaskProperty(an[140], 0, cu.Time);
        this.addTaskProperty(an[139], 0, cu.Time);
        this.addTaskProperty(an[138], 0, cu.Time);
        this.addTaskProperty("Hyperlink", 0, cu.String);
        this.addTaskProperty("HyperlinkAddress", 0, cu.String);
        this.addTaskProperty(an[137], 0, cu.String);
        this.addTaskProperty(an[136], 0, cu.Bool2Int);
        this.addTaskProperty(an[135], 0, cu.Int);
        this.addTaskProperty(an[134], 0, cu.Bool2Int);
        this.addTaskProperty(an[133], "Baseline/Start", cu.Time);
        this.addTaskProperty(an[132], "Baseline/Finish", cu.Time);
        this.addResourceProperty("UID", 0, cu.String);
        this.addResourceProperty(an[152], 0, cu.Bool2Int);
        this.addResourceProperty(an[136], 0, cu.Bool2Int);
        this.addResourceProperty(an[145], 0, cu.String);
        this.addResourceProperty("ID", 0, cu.Int);
        this.addResourceProperty(an[147], 0, cu.String);
        this.addResourceProperty(an[146], 0, cu.Int);
        this.addResourceProperty(an[144], 0, cu.Bool2Int);
        this.addResourceProperty(an[142], 0, cu.String);
        this.addLinkProperty("UID", 0, cu.String);
        this.addLinkProperty(an[131], 0, cu.String);
        this.addLinkProperty(an[130], 0, cu.String);
        this.addLinkProperty(an[129], 0, cu.Int);
        this.addAssignmentProperty("UID", 0, cu.String);
        this.addAssignmentProperty(an[128], 0, cu.String);
        this.addAssignmentProperty(an[127], 0, cu.String);
        this.addAssignmentProperty(an[148], 0, cu.Float)
    }, addTaskProperty: function (cu, cw, cx) {
        cw = cw ? cw : cu;
        var cy = {proName: cu, tagName: cw, type: cx};
        this.taskReader[cw] = cy;
        this.taskWriter[cu] = cy;
        if (cw.indexOf("/") > 0) {
            var cv = cw.split("/")[0];
            if (!this.taskReader[cv]) {
                this.taskReader[cv] = []
            }
            this.taskReader[cv].push(cy)
        }
    }, addResourceProperty: function (cu, cv, cw) {
        cv = cv ? cv : cu;
        var cx = {proName: cu, tagName: cv, type: cw};
        this.resourceReader[cv] = cx;
        this.resourceWriter[cu] = cx
    }, addLinkProperty: function (cu, cv, cw) {
        cv = cv ? cv : cu;
        var cx = {proName: cu, tagName: cv, type: cw};
        this.linkReader[cv] = cx;
        this.linkWriter[cu] = cx
    }, addAssignmentProperty: function (cu, cv, cw) {
        cv = cv ? cv : cu;
        var cx = {proName: cu, tagName: cv, type: cw};
        this.assignmentReader[cv] = cx;
        this.assignmentWriter[cu] = cx
    }, addExtendedAttributes: function (cu) {
        if (!this.extendedAttributes) {
            this.extendedAttributes = {}
        }
        var cx, cw;
        for (var cv = cu.firstChild; cv; cv = cv.nextSibling) {
            switch (cv.nodeName) {
                case an[126]:
                case"FieldName":
                    cw = bV(cv);
                    break
            }
        }
        this.extendedAttributes[cx] = {FieldID: cx, FieldName: cw}
    }, readTask: function (cw) {
        if (!cw) {
            return null
        }
        var cv = new r();
        cv.node = cw;
        var cx = this.taskReader;
        for (var cu = cw.firstChild; cu; cu = cu.nextSibling) {
            switch (cu.nodeName) {
                case an[125]:
                    for (var cA = cu.firstChild; cA; cA = cA.nextSibling) {
                        var cz, cy;
                        switch (cA.nodeName) {
                            case an[126]:
                                cz = bV(cA);
                                break;
                            case"Value":
                                cy = bV(cA);
                                break
                        }
                    }
                    cv[cz] = cy;
                    break;
                default:
                    var cC = cx[cu.nodeName];
                    if (cC) {
                        if (cC.length) {
                            for (var cA = cu.firstChild; cA; cA = cA.nextSibling) {
                                if (cA.nodeName.indexOf("#") == 0) {
                                    continue
                                }
                                var cB = cx[cu.nodeName + "/" + cA.nodeName];
                                if (cB) {
                                    cv[cB.proName] = bo.apply(cB.type, [cA])
                                }
                            }
                        } else {
                            cv[cC.proName] = bo.apply(cC.type, [cu])
                        }
                    }
                    break
            }
        }
        this.taskCount++;
        if (cv.OutlineNumber) {
            if (!cv.OutlineLevel) {
                cv.OutlineLevel = cv.OutlineNumber == "0" ? 0 : cv.OutlineNumber.split(".").length
            }
            cv.OriginalLevel = cv.OutlineLevel
        }
        return cv
    }, readResource: function (cv) {
        if (!cv) {
            return null
        }
        var cx = new Z();
        cx.node = cv;
        var cu = this.resourceReader;
        for (var cy = cv.firstChild; cy; cy = cy.nextSibling) {
            var cw = cu[cy.nodeName];
            if (cw) {
                cx[cw.proName] = bo.apply(cw.type, [cy])
            }
        }
        if (cx.OutlineNumber) {
            if (!cx.OutlineLevel) {
                cx.OutlineLevel = cx.OutlineNumber == "0" ? 0 : cx.OutlineNumber.split(".").length
            }
            cx.OriginalLevel = cx.OutlineLevel
        }
        return cx
    }, readLink: function (cw) {
        if (!cw) {
            return null
        }
        var cv = new bh();
        cv.node = cw;
        var cu = this.linkReader;
        for (var cy = cw.firstChild; cy; cy = cy.nextSibling) {
            var cx = cu[cy.nodeName];
            if (cx) {
                cv[cx.proName] = bo.apply(cx.type, [cy])
            }
        }
        return cv
    }, readAssignment: function (cv) {
        if (!cv) {
            return null
        }
        var cx = new b();
        cx.node = cv;
        var cu = this.assignmentReader;
        for (var cy = cv.firstChild; cy; cy = cy.nextSibling) {
            var cw = cu[cy.nodeName];
            if (cw) {
                cx[cw.proName] = bo.apply(cw.type, [cy])
            }
        }
        return cx
    }, readTaskLink: function (cu, cw) {
        if (!cw) {
            return null
        }
        var cv = this.readLink(cw);
        cv[cw.nodeName == an[124] ? an[123] : an[122]] = cu;
        return cv
    }, readTaskAssignment: function (cu, cv) {
        if (!cv) {
            return null
        }
        var cw = this.readAssignment(cv);
        cw.task = cu;
        return cw
    }, readResourceAssignment: function (cv, cu) {
        if (!cu) {
            return null
        }
        var cw = this.readAssignment(cu);
        cw.resource = cv;
        return cw
    }, updateItem: function (cx, cF, cz, cB) {
        var cC = cx[cz];
        if (cC) {
            var cw = bW(cF.node, cC.tagName);
            if (!cw) {
                var cA = cC.tagName.split("/"), cD = cF.node;
                for (var cy = 0; cy < cA.length; cy++) {
                    if (!cA[cy]) {
                        continue
                    }
                    cw = bW(cD, cA[cy]);
                    if (!cw) {
                        cw = cD.ownerDocument.createElement(cA[cy]);
                        cD.appendChild(cw)
                    }
                    cD = cw
                }
            }
            bn.apply(cC.type, [cw, cB])
        }
        if (!cx[cz] && this.extendedAttributes && this.extendedAttributes[cz]) {
            for (var cv = cF.node.firstChild; cv; cv = cv.nextSibling) {
                if (cv.nodeName != an[125]) {
                    continue
                }
                var cu = bW(cv, an[126]);
                if (!cu || bV(cu) != cz) {
                    continue
                }
                var cE = bW(cv, "Value");
                if (!cE) {
                    cE = cv.ownerDocument.createElement("Value");
                    cv.appendChild(cE)
                }
                bn.apply(aT.types.String, [cE, cB]);
                return
            }
            var cv = cF.node.ownerDocument.createElement(an[125]);
            var cu = cv.ownerDocument.createElement(an[126]);
            bn.apply(aT.types.String, [cu, cz]);
            cv.appendChild(cu);
            var cE = cv.ownerDocument.createElement("Value");
            bn.apply(aT.types.String, [cE, cB]);
            cv.appendChild(cE)
        }
    }, updateTask: function (cv, cu, cw) {
        if (!this.saveChange) {
            return
        }
        this.updateItem(this.taskWriter, cv, cu, cw)
    }, updateLink: function (cv, cu, cw) {
        if (!this.saveChange) {
            return
        }
        this.updateItem(this.linkWriter, cv, cu, cw)
    }, updateResource: function (cw, cu, cv) {
        if (!this.saveChange) {
            return
        }
        this.updateItem(this.resourceWriter, cw, cu, cv)
    }, updateAssignment: function (cw, cu, cv) {
        if (!this.saveChange) {
            return
        }
        this.updateItem(this.assignmentWriter, cw, cu, cv)
    }});
    function cj(cv, cu) {
        ak(this, {taskReader: {}, taskWriter: {}, resourceReader: {}, resourceWriter: {}, linkReader: {}, linkWriter: {}, assignmentReader: {}, assignmentWriter: {}});
        var cw = (typeof(cv) == an[191]) ? this.loadUrl(cv) : cv;
        cu = cu ? cu : new aE();
        bG(this, cu.getConfigObj("SFDataXml"));
        ak(this, {doc: cw, config: cu});
        this.addDefaultProperty()
    }

    cj.prototype = new bP();
    ak(cj.prototype, {initialize: function () {
        bP.prototype.initialize.apply(this, arguments)
    }, loadUrl: function (cu) {
        var cw;

        function cv(cx) {
            cw = cx
        }

        bY(cu, cv, false);
        return cw
    }, getCalendar: function () {
        var cu;
        var cv = bW(this.doc.documentElement, an[120]);
        if (cv) {
            cu = bV(cv);
            var cw = bW(this.doc.documentElement, "Calendars");
            for (var cx = cw.firstChild; cx; cx = cx.nextSibling) {
                if (cx.nodeName != "Calendar") {
                    continue
                }
                if (bV(bW(cx, "UID")) == cu) {
                    return this.readCalendar(cx)
                }
            }
        }
        return bC(an[183])
    }, readRootTask: function () {
        var cv = bW(this.doc.documentElement, an[170]);
        if (!cv) {
            var cu = this.addTask();
            return cu
        }
        return this.readTask(cv)
    }, readTaskFirstChild: function (cu) {
        if (!cu.node) {
            return null
        }
        if (cu.node.getAttribute(an[119])) {
            var cx = this.loadUrl(cu.node.getAttribute(an[119]));
            cu.node.removeAttribute(an[119]);
            var cw = bW(cu.node, an[118]);
            if (!cw) {
                cw = cu.node.ownerDocument.createElement(an[118]);
                cu.node.appendChild(cw)
            }
            while (cx.documentElement.firstChild) {
                var cv = cx.documentElement.firstChild;
                cx.documentElement.removeChild(cv);
                cw.appendChild(cv)
            }
        }
        return this.readTask(bW(cu.node, "Tasks/Task"))
    }, readTaskNextSibling: function (cu) {
        if (!cu.node) {
            return null
        }
        if (cu.node.getAttribute(an[117])) {
            var cx = this.loadUrl(cu.node.getAttribute(an[117]));
            cu.node.removeAttribute(an[117]);
            var cw = bW(cu.getParentTask().node, an[118]);
            while (cx.documentElement.firstChild) {
                var cv = cx.documentElement.firstChild;
                cx.documentElement.removeChild(cv);
                cw.appendChild(cv)
            }
        }
        return this.readTask(bM(cu.node.nextSibling, an[170]))
    }, readRootResource: function () {
        var cu = bW(this.doc.documentElement, an[169]);
        if (!cu) {
            var cv = this.addResource();
            return cv
        }
        return this.readResource(cu)
    }, readResourceFirstChild: function (cv) {
        if (!cv.node) {
            return null
        }
        if (cv.node.getAttribute(an[119])) {
            var cw = this.loadUrl(cv.node.getAttribute(an[119]));
            cv.node.removeAttribute(an[119]);
            var cx = bW(cv.node, an[116]);
            if (!cx) {
                cx = cv.node.ownerDocument.createElement(an[116]);
                cv.node.appendChild(cx)
            }
            while (cw.documentElement.firstChild) {
                var cu = cw.documentElement.firstChild;
                cw.documentElement.removeChild(cu);
                cx.appendChild(cu)
            }
        }
        return this.readResource(bW(cv.node, "Resources/Resource"))
    }, readResourceNextSibling: function (cv) {
        if (!cv.node) {
            return null
        }
        if (cv.node.getAttribute(an[117])) {
            var cw = this.loadUrl(cv.node.getAttribute(an[117]));
            cv.node.removeAttribute(an[117]);
            var cx = bW(cv.getParentResource().node, an[116]);
            while (cw.documentElement.firstChild) {
                var cu = cw.documentElement.firstChild;
                cw.documentElement.removeChild(cu);
                cx.appendChild(cu)
            }
        }
        return this.readResource(bM(cv.node.nextSibling, an[169]))
    }, readTaskFirstLink: function (cu) {
        var cw, cv = cu.node;
        if (!cv) {
            return null
        }
        for (cw = cv.firstChild; cw; cw = cw.nextSibling) {
            if (cw.nodeName == an[124] || cw.nodeName == an[115]) {
                break
            }
        }
        if (cw == null) {
            cw = bW(cv, "Links/*")
        }
        return this.readTaskLink(cu, cw)
    }, readTaskNextLink: function (cv, cx) {
        var cw, cu = cx.node;
        if (!cu) {
            return null
        }
        for (cw = cu.nextSibling; cw; cw = cw.nextSibling) {
            if (cw.nodeName == an[124] || cw.nodeName == an[115]) {
                break
            }
        }
        if (!cw && cu.parentNode.nodeName != "Links") {
            cw = bW(cu, an[114])
        }
        return this.readTaskLink(cv, cw)
    }, readTaskFirstAssignment: function (cu) {
        if (!cu.node) {
            return null
        }
        return this.readTaskAssignment(cu, bW(cu.node, an[113]))
    }, readTaskNextAssignment: function (cu, cv) {
        if (!cv.node) {
            return null
        }
        return this.readTaskAssignment(cu, bM(cv.node.nextSibling, an[167]))
    }, readResourceFirstAssignment: function (cu) {
        if (!cu.node) {
            return null
        }
        return this.readTaskAssignment(cu, bW(cu.node, an[113]))
    }, readResourceNextAssignment: function (cu, cv) {
        if (!cv.node) {
            return null
        }
        return this.readTaskAssignment(cu, bM(cv.node.nextSibling, an[167]))
    }, insertNode: function (cy, cw, cx, cv) {
        if (cw) {
            var cu = bW(cw.node, cv);
            if (!cu) {
                cu = cw.node.ownerDocument.createElement(cv);
                cw.node.appendChild(cu)
            }
            if (cx) {
                if (cx.node.nextSibling) {
                    cu.insertBefore(cy, cx.node.nextSibling)
                } else {
                    cu.appendChild(cy)
                }
            } else {
                cu.insertBefore(cy, cu.firstChild)
            }
        } else {
            this.doc.documentElement.appendChild(cy)
        }
    }, addTask: function (cw, cu) {
        var cv = new r();
        if (this.saveChange) {
            var cx = cw.node.ownerDocument.createElement(an[170]);
            this.insertNode(cx, cw, cu, an[118]);
            cv.node = cx
        }
        return cv
    }, deleteTask: function (cu) {
        if (!this.saveChange) {
            return
        }
        cu.node.parentNode.removeChild(cu.node)
    }, moveTask: function (cv, cw, cu) {
        if (!this.saveChange) {
            return
        }
        cv.node.parentNode.removeChild(cv.node);
        this.insertNode(cv.node, cw, cu, an[118])
    }, addResource: function (cu, cx) {
        var cw = new Z();
        if (this.saveChange) {
            var cv = cu.node.ownerDocument.createElement(an[169]);
            this.insertNode(cv, cu, cx, an[116]);
            cw.node = cv
        }
        return cw
    }, deleteResource: function (cu) {
        if (!this.saveChange) {
            return
        }
        cu.node.parentNode.removeChild(cu.node)
    }, moveResource: function (cv, cu, cw) {
        if (!this.saveChange) {
            return
        }
        cv.node.parentNode.removeChild(cv.node);
        this.insertNode(cv.node, cu, cw, an[116])
    }, addLink: function (cB, cy, cv) {
        var cx = new bh();
        if (this.saveChange) {
            var cz = cB.node.ownerDocument;
            var cw = cz.createElement(an[124]);
            var cA = cz.createElement(an[131]);
            bU(cA, cy.UID);
            cw.appendChild(cA);
            var cA = cz.createElement(an[129]);
            bU(cA, cv);
            cw.appendChild(cA);
            cx.node = cw;
            cx.setProperty(an[129], cv);
            var cu = bW(cB.node, "Links");
            if (!cu) {
                cu = cB.node.ownerDocument.createElement("Links");
                cB.node.appendChild(cu)
            }
            cu.appendChild(cw)
        }
        return cx
    }, deleteLink: function (cu) {
        if (!this.saveChange) {
            return
        }
        cu.node.parentNode.removeChild(cu.node)
    }, addAssignment: function (cw, cy, cv) {
        var cA = new b();
        if (this.saveChange) {
            var cz = this.doc;
            var cx = cz.createElement(an[167]);
            var cB = cz.createElement(an[128]);
            bU(cB, cw.UID);
            cx.appendChild(cB);
            var cB = cz.createElement(an[127]);
            bU(cB, cy.UID);
            cx.appendChild(cB);
            var cB = cz.createElement(an[148]);
            bU(cB, cv);
            cx.appendChild(cB);
            cA.node = cx;
            var cu = bW(cw.node, an[112]);
            if (!cu) {
                cu = cw.node.ownerDocument.createElement(an[112]);
                cw.node.appendChild(cu)
            }
            cu.appendChild(cx)
        }
        return cA
    }, deleteAssignment: function (cu) {
        if (!this.saveChange) {
            return
        }
        cu.node.parentNode.removeChild(cu.node)
    }});
    function am(cv, cu) {
        ak(this, {taskReader: {}, taskWriter: {}, resourceReader: {}, resourceWriter: {}, linkReader: {}, linkWriter: {}, assignmentReader: {}, assignmentWriter: {}});
        cu = cu ? cu : new aE();
        bG(this, cu.getConfigObj("SFDataProject"));
        ak(this, {doc: cv, config: cu});
        this.addDefaultProperty()
    }

    am.prototype = new bP();
    ak(am.prototype, {initialize: function () {
        bP.prototype.initialize.apply(this, arguments)
    }, loadXml: function (cv) {
        if (cv) {
            this.doc = cv
        }
        cv = this.doc;
        if (!cv) {
            this.doc = cv = bX()
        }
        if (!cv.documentElement) {
            cv.appendChild(cv.createElement("Project"))
        }
        var cu = this.doc.documentElement, cw = cu.firstChild;
        while (cw) {
            switch (cw.nodeName) {
                case an[118]:
                    this.tasksNode = cw;
                    break;
                case an[116]:
                    this.resourcesNode = cw;
                    break;
                case an[112]:
                    this.assignmentsNode = cw;
                    break;
                case"ExtendedAttributes":
                    this.addExtendedAttributes(cw);
                    break
            }
            cw = cw.nextSibling
        }
        this.loaded = true
    }, getCalendar: function () {
        var cu;
        var cv = bW(this.doc.documentElement, an[120]);
        if (cv) {
            cu = bV(cv);
            var cw = bW(this.doc.documentElement, "Calendars");
            for (var cx = cw.firstChild; cx; cx = cx.nextSibling) {
                if (cx.nodeName != "Calendar") {
                    continue
                }
                if (bV(bW(cx, "UID")) == cu) {
                    return this.readCalendar(cx)
                }
            }
        }
        return bC(an[183])
    }, getTasksNode: function () {
        if (!this.loaded) {
            this.loadXml()
        }
        if (!this.tasksNode) {
            this.tasksNode = this.doc.createElement(an[118]);
            this.doc.documentElement.appendChild(this.tasksNode)
        }
        return this.tasksNode
    }, getResourcesNode: function () {
        if (!this.loaded) {
            this.loadXml()
        }
        if (!this.resourcesNode) {
            this.resourcesNode = this.doc.createElement(an[116]);
            this.doc.documentElement.appendChild(this.resourcesNode)
        }
        return this.resourcesNode
    }, getAssignmentsNode: function () {
        if (!this.loaded) {
            this.loadXml()
        }
        if (!this.assignmentsNode) {
            this.assignmentsNode = this.doc.createElement(an[112]);
            this.doc.documentElement.appendChild(this.assignmentsNode)
        }
        return this.assignmentsNode
    }, readRootTask: function () {
        var cv = bM(this.getTasksNode().firstChild, an[170]);
        if (!cv) {
            var cu = this.addTask();
            return cu
        }
        return this.readTask(cv)
    }, readTaskFirstChild: function (cu) {
        if (!cu.node) {
            return null
        }
        var cw = cu.OriginalLevel;
        var cv = bM(cu.node.nextSibling, an[170]);
        if (cv) {
            var cx = bW(cv, an[146]) ? bV(bW(cv, an[146])) : bV(bW(cv, an[147])).split(".").length;
            if (cx > cw) {
                return this.readTask(cv)
            }
        }
        return null
    }, readTaskNextSibling: function (cu) {
        if (!cu.node) {
            return null
        }
        var cw = cu.OriginalLevel;
        for (var cv = cu.node.nextSibling; cv; cv = cv.nextSibling) {
            if (cv.nodeName != an[170]) {
                continue
            }
            var cx = bW(cv, an[146]) ? bV(bW(cv, an[146])) : bV(bW(cv, an[147])).split(".").length;
            if (cx > cw) {
                continue
            }
            if (cx == cw) {
                return this.readTask(cv)
            }
            break
        }
        return null
    }, readRootResource: function () {
        var cu = this.getResourcesNode().firstChild;
        if (!cu) {
            var cv = this.addResource("0");
            return cv
        }
        return this.readResource(cu)
    }, readResourceFirstChild: function (cu) {
        if (!cu.node) {
            return null
        }
        if (cu.node != bM(this.getResourcesNode().firstChild, an[169])) {
            return null
        }
        return this.readResource(bM(cu.node.nextSibling, an[169]))
    }, readResourceNextSibling: function (cu) {
        if (!cu.node) {
            return null
        }
        if (cu.node == bM(this.getResourcesNode().firstChild, an[169])) {
            return null
        }
        return this.readResource(bM(cu.node.nextSibling, an[169]))
    }, readTaskFirstLink: function (cu) {
        var cw, cv = cu.node;
        if (!cv) {
            return null
        }
        for (cw = cv.firstChild; cw; cw = cw.nextSibling) {
            if (cw.nodeName == an[124] || cw.nodeName == an[115]) {
                break
            }
        }
        if (cw == null) {
            cw = bW(cv, "Links/*")
        }
        return this.readTaskLink(cu, cw)
    }, readTaskNextLink: function (cv, cx) {
        var cw, cu = cx.node;
        if (!cu) {
            return null
        }
        for (cw = cu.nextSibling; cw; cw = cw.nextSibling) {
            if (cw.nodeName == an[124] || cw.nodeName == an[115]) {
                break
            }
        }
        if (!cw && cu.parentNode.nodeName != "Links") {
            cw = bW(cu, an[114])
        }
        return this.readTaskLink(cv, cw)
    }, readTaskFirstAssignment: function (cu) {
        var cv = cu.UID;
        for (var cw = this.getAssignmentsNode().firstChild;
             cw; cw = cw.nextSibling) {
            if (cw.nodeName != an[167]) {
                continue
            }
            if (bV(bW(cw, an[128])) == cv) {
                return this.readTaskAssignment(cu, cw)
            }
        }
        return null
    }, readTaskNextAssignment: function (cu, cx) {
        if (!cx.node) {
            return null
        }
        var cv = cu.UID;
        for (var cw = cx.node.nextSibling; cw; cw = cw.nextSibling) {
            if (cw.nodeName != an[167]) {
                continue
            }
            if (bV(bW(cw, an[128])) == cv) {
                return this.readTaskAssignment(cu, cw)
            }
        }
        return null
    }, readResourceFirstAssignment: function (cw) {
        var cu = cw.UID;
        for (var cv = this.getAssignmentsNode().firstChild; cv; cv = cv.nextSibling) {
            if (cv.nodeName != an[167]) {
                continue
            }
            if (bV(bW(cv, an[127])) == cu) {
                return this.readResourceAssignment(cw, cv)
            }
        }
        return null
    }, readResourceNextAssignment: function (cw, cx) {
        if (!cx.node) {
            return null
        }
        var cu = cw.UID;
        for (var cv = cx.node.nextSibling; cv; cv = cv.nextSibling) {
            if (cv.nodeName != an[167]) {
                continue
            }
            if (bV(bW(cv, an[127])) == cu) {
                return this.readResourceAssignment(cw, cv)
            }
        }
        return null
    }, addTask: function (cx, cu) {
        var cv = new r();
        if (this.saveChange) {
            var cz = this.getTasksNode();
            var cy = cz.ownerDocument.createElement(an[170]);
            if (cx) {
                var cw = cu ? cu.node : cx.node;
                if (cw.nextSibling) {
                    cz.insertBefore(cy, cw.nextSibling)
                } else {
                    cz.appendChild(cy)
                }
            } else {
                cz.insertBefore(cy, cz.firstChild)
            }
            cv.node = cy
        }
        return cv
    }, deleteTask: function (cu) {
        if (!this.saveChange) {
            return
        }
        cu.node.parentNode.removeChild(cu.node)
    }, addResource: function (cv, cz) {
        var cx = new Z();
        if (this.saveChange) {
            var cy = this.getResourcesNode();
            var cw = cy.ownerDocument.createElement(an[169]);
            var cu = cz ? cz.node : cv.node;
            if (cu.nextSibling) {
                cy.insertBefore(cw, cu.nextSibling)
            } else {
                cy.appendChild(cw)
            }
            cx.node = cw
        }
        return cx
    }, deleteResource: function (cu) {
        if (!this.saveChange) {
            return
        }
        cu.node.parentNode.removeChild(cu.node)
    }, addLink: function (cA, cx, cu) {
        var cw = new bh();
        if (this.saveChange) {
            var cy = cA.node.ownerDocument;
            var cv = cy.createElement(an[124]);
            var cz = cy.createElement(an[131]);
            bU(cz, cx.UID);
            cv.appendChild(cz);
            cw.node = cv;
            if (cu) {
                var cz = cy.createElement(an[129]);
                bU(cz, cu);
                cv.appendChild(cz);
                cw.setProperty(an[129], cu)
            }
            cA.node.appendChild(cv)
        }
        return cw
    }, deleteLink: function (cu) {
        if (!this.saveChange) {
            return
        }
        cu.node.parentNode.removeChild(cu.node)
    }, addAssignment: function (cv, cx, cu) {
        var cz = new b();
        if (this.saveChange) {
            var cy = this.doc;
            var cw = cy.createElement(an[167]);
            var cA = cy.createElement(an[128]);
            bU(cA, cv.UID);
            cw.appendChild(cA);
            var cA = cy.createElement(an[127]);
            bU(cA, cx.UID);
            cw.appendChild(cA);
            if (cu) {
                var cA = cy.createElement(an[148]);
                bU(cA, cu);
                cw.appendChild(cA);
                cz.setProperty(an[148], cu)
            }
            cz.node = cw;
            this.getAssignmentsNode().appendChild(cw)
        }
        return cz
    }, deleteAssignment: function (cu) {
        if (!this.saveChange) {
            return
        }
        cu.node.parentNode.removeChild(cu.node)
    }});
    function aa() {
    }

    ak(aa.prototype, {initialize: function () {
    }, remove: function () {
    }, depose: function () {
        this.remove()
    }});
    function ah() {
    }

    ah.prototype = new aa();
    ak(ah.prototype, {initialize: function (cu) {
        if (!cu.autoCalculateTime) {
            return false
        }
        this.listeners = [f(cu, an[111], this, this.onTaskChange), f(cu, an[110], this, this.onTaskDelete), f(cu, an[109], this, this.onTaskMove)];
        return true
    }, onTaskChange: function (cu, cv, cw) {
        if (cv != an[149] && cv != an[150]) {
            return
        }
        if (cu.getParentTask()) {
            cu.getParentTask().checkTime()
        }
    }, onTaskDelete: function (cv, cu) {
        if (cu) {
            cu.checkTime()
        }
    }, onTaskMove: function (cv, cu) {
        if (cu) {
            cu.checkTime()
        }
        if (cv.getParentTask()) {
            cv.getParentTask().checkTime()
        }
    }});
    function h() {
    }

    h.prototype = new aa();
    ak(h.prototype, {initialize: function (cx) {
        this.listeners = [];
        var cu = cx.getModules();
        for (var cw = cu.length - 1; cw >= 0; cw--) {
            if (!cx[an[157] + cu[cw]]) {
                continue
            }
            var cv = cu[cw].toLowerCase();
            this.listeners = this.listeners.concat([f(cx, cv + an[161], this, this.onElementRegister), f(cx, an[153] + cv + "add", this, this.onElementAdd), f(cx, an[153] + cv + an[158], this, this.onElementDelete), f(cx, an[153] + cv + an[154], this, this.onElementMove)])
        }
    }, setOutline: function (cv, cu) {
        var cw = cv.getParent(), cx = "0", cA = 0;
        if (cw) {
            cx = (cw.OutlineLevel == 0) ? "" + cv.getSiblingIndex() : cw.OutlineNumber + "." + cv.getSiblingIndex();
            cA = cw.OutlineLevel + 1
        }
        var cy = (cx != cv[an[147]]);
        cv.setProperty(an[147], cx);
        cv.setProperty(an[146], cA);
        if (cu && cy && cv.Summary) {
            for (var cz = cv.getFirstChild(); cz; cz = cz.getNextSibling()) {
                this.setOutline(cz, true)
            }
        }
    }, onElementRegister: function (cu) {
        this.setOutline(cu, false)
    }, onElementAdd: function (cv) {
        for (var cu = cv; cu; cu = cu.getNextSibling()) {
            this.setOutline(cu, true)
        }
    }, onElementDelete: function (cv, cw, cx) {
        if (!cw) {
            return
        }
        for (var cu = cx ? cx.getNextSibling() : cw.getFirstChild(); cu; cu = cu.getNextSibling()) {
            this.setOutline(cu, true)
        }
    }, onElementMove: function (cw, cu, cx) {
        if (cu) {
            for (var cv = cx ? cx.getNextSibling() : cu.getFirstChild(); cv; cv = cv.getNextSibling()) {
                this.setOutline(cv, true)
            }
        }
        for (var cv = cw; cv; cv = cv.getNextSibling()) {
            this.setOutline(cv, true)
        }
    }});
    function cq() {
    }

    cq.prototype = new aa();
    ak(cq.prototype, {initialize: function (cx) {
        this.listeners = [];
        var cu = cx.getModules();
        for (var cw = cu.length - 1; cw >= 0; cw--) {
            if (!cx[an[157] + cu[cw]]) {
                continue
            }
            var cv = cu[cw].toLowerCase();
            this.listeners = this.listeners.concat([f(cx, cv + an[161], this, this.onElementRegister), f(cx, an[153] + cv + "add", this, this.onElementAdd), f(cx, an[153] + cv + an[158], this, this.onElementDelete), f(cx, an[153] + cv + an[154], this, this.onElementMove)])
        }
    }, setID: function (cu) {
        var cv = cu.getParent() ? cu.getPrevious().ID + 1 : 0;
        if (!isNaN(cv) && cv != cu.ID) {
            cu.setProperty("ID", cv);
            return true
        }
        return false
    }, onElementRegister: function (cu) {
        this.setID(cu)
    }, onElementAdd: function (cv) {
        for (var cu = cv.getNext(); cu; cu = cu.getNext()) {
            if (!this.setID(cu)) {
                break
            }
        }
    }, onElementDelete: function (cv, cw, cx) {
        if (!cw) {
            return
        }
        for (var cu = cx ? cx.getNext() : cw.getNext(); cu; cu = cu.getNext()) {
            if (!this.setID(cu)) {
                break
            }
        }
    }, onElementMove: function (cw, cu, cx) {
        var cz, cy = [cw];
        if (cu) {
            cy.push(cx ? cx.getNext() : cu.getNext())
        }
        cy.sort(function (cB, cA) {
            if (!cB || !cA) {
                return 0
            }
            return cB.data.compareElement(cB, cA)
        });
        while (cy.length > 0) {
            for (var cv = cy.pop(); cv; cv = cv.getNext()) {
                if (!this.setID(cv)) {
                    break
                }
            }
        }
    }});
    function bJ() {
    }

    bJ.prototype = new aa();
    ak(bJ.prototype, {initialize: function (cx) {
        if (cx.ignoreReadOnly) {
            return false
        }
        this.listeners = [];
        var cu = cx.getModules();
        this.ignoreFields = {};
        for (var cw = cu.length - 1; cw >= 0; cw--) {
            var cv = cu[cw].toLowerCase();
            var cy = cx[cv + "ReadonlyIgnoreProperty"];
            this.ignoreFields[cv] = cy ? cy.split(",") : [];
            this.listeners = this.listeners.concat([f(cx, an[159] + cv + an[151], this, this.onElementChange), f(cx, an[159] + cv + an[158], this, this.onElementAction), f(cx, an[159] + cv + an[154], this, this.onElementAction)])
        }
        return true
    }, onElementChange: function (cw, cv, cu) {
        if (B(this.ignoreFields[cv.elementType.toLowerCase()], cu)) {
            return
        }
        if (cv[an[144]]) {
            cw.returnValue = false
        }
    }, onElementAction: function (cv, cu) {
        if (cu[an[144]]) {
            cv.returnValue = false
        }
    }});
    function ab(cu) {
        this.setTaskFields("Name,Start,Finish,Summary,PercentComplete,Notes");
        this.setLinkFields(an[129]);
        this.clear();
        if (cu) {
            cu.addComponent(this)
        }
    }

    ab.prototype = new aa();
    ak(ab.prototype, {initialize: function (cu) {
        this.start(cu)
    }, start: function (cu) {
        this.stop();
        this.listeners = [f(cu, an[108], this, this.onTaskAdd), f(cu, an[110], this, this.onTaskDelete), f(cu, an[109], this, this.onTaskMove), f(cu, an[111], this, this.onTaskChange), f(cu, an[165], this, this.onLinkAdd), f(cu, "afterlinkdelete", this, this.onLinkDelete), f(cu, an[107], this, this.onLinkChange)]
    }, clear: function () {
        ak(this, {newTasks: [], updateTasks: [], moveTasks: [], deleteTasks: [], newLinks: [], updateLinks: [], deleteLinks: []})
    }, getXml: function () {
        var cA = bX();
        var cu = cA.createElement("Log");
        cA.appendChild(cu);
        var cz = this.newTasks;
        if (cz && cz.length > 0) {
            var cv = this.addNode(cu, "AddTasks");
            for (var cy = 0; cy < cz.length; cy++) {
                var cx = cz[cy];
                if (!cx.task.data) {
                    continue
                }
                var cw = this.addNode(cv, an[170]);
                this.addPropertyNode(cw, cx.task, ["UID"]);
                this.addPropertyNode(cw, cx.task, cx.fields);
                if (cx.task.getParentTask()) {
                    this.addNode(cw, "ParentUID", cx.task.getParentTask().UID)
                }
                if (cx.task.getPreviousSibling()) {
                    this.addNode(cw, an[106], cx.task.getPreviousSibling().UID)
                }
            }
        }
        var cz = this.updateTasks;
        if (cz && cz.length > 0) {
            var cv = this.addNode(cu, "UpdateTasks");
            for (var cy = 0; cy < cz.length; cy++) {
                var cx = cz[cy];
                if (!cx.task.data) {
                    continue
                }
                var cw = this.addNode(cv, an[170]);
                this.addPropertyNode(cw, cx.task, ["UID"]);
                this.addPropertyNode(cw, cx.task, cx.fields)
            }
        }
        var cz = this.moveTasks;
        if (cz && cz.length > 0) {
            var cv = this.addNode(cu, "MoveTasks");
            for (var cy = 0; cy < cz.length; cy++) {
                var cx = cz[cy];
                if (!cx.task.data) {
                    continue
                }
                var cw = this.addNode(cv, an[170]);
                this.addPropertyNode(cw, cx.task, ["UID"]);
                if (cx.task.getParentTask()) {
                    this.addNode(cw, "ParentUID", cx.task.getParentTask().UID)
                }
                if (cx.task.getPreviousSibling()) {
                    this.addNode(cw, an[106], cx.task.getPreviousSibling().UID)
                }
            }
        }
        var cz = this.deleteTasks;
        if (cz && cz.length > 0) {
            var cv = this.addNode(cu, "DeleteTasks");
            for (var cy = 0; cy < cz.length; cy++) {
                var cx = cz[cy];
                var cw = this.addNode(cv, an[170]);
                this.addPropertyNode(cw, cx.task, ["UID"])
            }
        }
        var cz = this.newLinks;
        if (cz && cz.length > 0) {
            var cv = this.addNode(cu, "AddLinks");
            for (var cy = 0; cy < cz.length; cy++) {
                var cx = cz[cy];
                if (!cx.link.data) {
                    continue
                }
                var cw = this.addNode(cv, an[168]);
                this.addPropertyNode(cw, cx.link, ["UID", an[129]]);
                this.addPropertyNode(cw, cx.link, cx.fields);
                if (cx.link.getPredecessorTask()) {
                    this.addNode(cw, an[131], cx.link.getPredecessorTask().UID)
                }
                if (cx.link.getSuccessorTask()) {
                    this.addNode(cw, an[130], cx.link.getSuccessorTask().UID)
                }
            }
        }
        var cz = this.updateLinks;
        if (cz && cz.length > 0) {
            var cv = this.addNode(cu, "UpdateLinks");
            for (var cy = 0; cy < cz.length; cy++) {
                var cx = cz[cy];
                if (!cx.link.data) {
                    continue
                }
                var cw = this.addNode(cv, an[168]);
                this.addPropertyNode(cw, cx.link, ["UID"]);
                if (cx.link.getPredecessorTask()) {
                    this.addNode(cw, an[131], cx.link.getPredecessorTask().UID)
                }
                if (cx.link.getSuccessorTask()) {
                    this.addNode(cw, an[130], cx.link.getSuccessorTask().UID)
                }
                this.addPropertyNode(cw, cx.link, cx.fields)
            }
        }
        var cz = this.deleteLinks;
        if (cz && cz.length > 0) {
            var cv = this.addNode(cu, "DeleteLinks");
            for (var cy = 0; cy < cz.length; cy++) {
                var cx = cz[cy];
                var cw = this.addNode(cv, an[168]);
                this.addPropertyNode(cw, cx.link, ["UID"])
            }
        }
        return cA
    }, setTaskFields: function (cu) {
        this.taskFields = typeof(cu) == an[191] ? cu.split(",") : cu
    }, onTaskAdd: function (cv) {
        var cw = B(this.deleteTasks, cv, function (cy, cx) {
            return cy.task == cx
        });
        if (cw) {
            A(this.deleteTasks, cw);
            return
        }
        cw = B(this.moveTasks, cv, function (cy, cx) {
            return cy.task == cx
        });
        if (cw) {
            A(this.moveTasks, cw)
        }
        var cu = [];
        cw = B(this.updateTasks, cv, function (cy, cx) {
            return cy.task == cx
        });
        if (cw) {
            A(this.updateTasks, cw);
            cu = cw.fields
        }
        this.newTasks.push({task: cv, fields: cu})
    }, onTaskDelete: function (cu) {
        var cv = B(this.newTasks, cu, function (cx, cw) {
            return cx.task == cw
        });
        if (cv) {
            A(this.newTasks, cv);
            return
        }
        cv = B(this.moveTasks, cu, function (cx, cw) {
            return cx.task == cw
        });
        if (cv) {
            A(this.moveTasks, cv)
        }
        cv = B(this.updateTasks, cu, function (cx, cw) {
            return cx.task == cw
        });
        if (cv) {
            A(this.updateTasks, cv)
        }
        this.deleteTasks.push({task: cu})
    }, onTaskMove: function (cv, cu, cw) {
        if (B(this.deleteTasks, cv, function (cy, cx) {
            return cy.task == cx
        })) {
            return
        }
        if (B(this.newTasks, cv, function (cy, cx) {
            return cy.task == cx
        })) {
            return
        }
        if (B(this.moveTasks, cv, function (cy, cx) {
            return cy.task == cx
        })) {
            return
        }
        this.moveTasks.push({task: cv})
    }, onTaskChange: function (cu, cv, cw) {
        if (B(this.deleteTasks, cu, function (cz, cy) {
            return cz.task == cy
        })) {
            return
        }
        if (!B(this.taskFields, cv)) {
            return
        }
        var cx = B(this.newTasks, cu, function (cz, cy) {
            return cz.task == cy
        });
        if (!cx) {
            cx = B(this.updateTasks, cu, function (cz, cy) {
                return cz.task == cy
            })
        }
        if (!cx) {
            this.updateTasks.push(cx = {task: cu, fields: []})
        }
        if (B(cx.fields, cv)) {
            return
        }
        cx.fields.push(cv)
    }, setLinkFields: function (cu) {
        this.linkFields = typeof(cu) == an[191] ? cu.split(",") : cu
    }, onLinkAdd: function (cv) {
        var cw = B(this.deleteLinks, cv, function (cy, cx) {
            return cy.link == cx
        });
        if (cw) {
            A(this.deleteLinks, cw);
            return
        }
        var cu = [];
        cw = B(this.updateLinks, cv, function (cy, cx) {
            return cy.link == cx
        });
        if (cw) {
            A(this.updateLinks, cw);
            cu = cw.fields
        }
        this.newLinks.push({link: cv, fields: cu})
    }, onLinkDelete: function (cu) {
        var cv = B(this.newLinks, cu, function (cx, cw) {
            return cx.link == cw
        });
        if (cv) {
            A(this.newLinks, cv);
            return
        }
        cv = B(this.updateLinks, cu, function (cx, cw) {
            return cx.link == cw
        });
        if (cv) {
            A(this.updateLinks, cv)
        }
        this.deleteLinks.push({link: cu})
    }, onLinkChange: function (cv, cu, cw) {
        if (B(this.deleteLinks, cv, function (cz, cy) {
            return cz.link == cy
        })) {
            return
        }
        if (!B(this.linkFields, cu)) {
            return
        }
        var cx = B(this.newLinks, cv, function (cz, cy) {
            return cz.link == cy
        });
        if (!cx) {
            cx = B(this.updateLinks, cv, function (cz, cy) {
                return cz.link == cy
            })
        }
        if (!cx) {
            this.updateLinks.push(cx = {link: cv, fields: []})
        }
        if (B(cx.fields, cu)) {
            return
        }
        cx.fields.push(cu)
    }, addNode: function (cu, cv, cw) {
        var cx = cu.ownerDocument.createElement(cv);
        if (cw != null) {
            cx.appendChild(cu.ownerDocument.createTextNode(this.pack(cw)))
        }
        cu.appendChild(cx);
        return cx
    }, addPropertyNode: function (cw, cv, cx) {
        cx = cx ? cx : ["UID"];
        for (var cu = cx.length - 1; cu >= 0; cu--) {
            this.addNode(cw, cx[cu], cv[cx[cu]])
        }
    }, stop: function () {
        if (!this.listeners) {
            return
        }
        var cu;
        while (cu = this.listeners.pop()) {
            cm(cu)
        }
    }, pack: function (cu) {
        switch (typeof(cu)) {
            case"boolean":
                return cu ? "1" : "0";
            case an[194]:
                if (cu.constructor == Date) {
                    return ac(cu, "s")
                }
                break
        }
        return cu.toString()
    }, depose: function () {
        this.stop();
        this.clear();
        for (var cu in this) {
            this[cu] = null
        }
    }});
    function at(cv, cw) {
        cv = this.config = cv ? cv : new aE();
        this.elementType = an[170];
        bG(this, cv.getConfigObj("SFGantt"));
        this.initContainer();
        this.setViewSize(y(this.container));
        this.controls = [];
        var cx = this.container.ownerDocument;
        if (cx.createDocumentFragment) {
            this.containerFragment = cx.createDocumentFragment()
        }
        var cu;
        this.addControl(new bi());
        this.addControl(new b2());
        this.addControl(new J());
        this.addControl(new N());
        this.addControl(new ai());
        this.addControl(new t());
        this.addControl(new b7());
        this.addControl(new bx());
        this.addControl(new bt());
        this.addControl(new b5({elementType: this.elementType}));
        this.addControl(new bu({elementType: this.elementType}));
        if (this.showNetwork) {
            this.addControl(new bO())
        } else {
            this.addControl(new bK());
            this.addControl(new ce());
            this.addControl(new ap(this[this.elementType.toLowerCase() + an[105]].split(",")));
            this.addControl(new n());
            this.addControl(new Y(this.elementType));
            this.addControl(new bQ());
            this.addControl(cu = new aZ({fieldNames: this[this.elementType.toLowerCase() + an[105]].split(","), bgColor: this.bodyBgColor, elementType: this.elementType}));
            this.addControl(new aZ({fieldNames: this[this.elementType.toLowerCase() + "IdFieldNames"].split(","), bgColor: this.idCellBgColor, mainList: cu, elementType: this.elementType}));
            this.addControl(new M());
            this.addControl(new aA());
            this.addControl(new b6());
            this.addControl(new bS());
            this.addControl(new bH());
            this.addControl(new bw());
            this.addControl(new ct());
            this.addControl(new P());
            this.addControl(new cp());
            switch (this.elementType) {
                case an[170]:
                    this.addControl(new ca());
                    this.addControl(new q());
                    this.addControl(new G());
                    break;
                case an[169]:
                    this.addControl(new SFGanttResourceMap());
                    break
            }
            this.addControl(new bN());
            this.addControl(new aV());
            this.addControl(new S());
            this.addControl(new F());
            this.addControl(new a());
            this.addControl(new bR());
            this.addControl(new b4());
            this.addControl(new T())
        }
        this.addControl(new by());
        if (this.containerFragment) {
            this.container.appendChild(this.containerFragment);
            this.containerFragment = null
        }
        if (cw) {
            this.setData(cw)
        }
    }

    ak(at.prototype, {initContainer: function () {
        var cu = this.container;
        this.container = cu = (typeof(cu) == an[194]) ? cu : document.getElementById(cu);
        var cy, cx = this.container.ownerDocument;
        try {
            cx.execCommand("BackgroundImageCache", false, true)
        } catch (cw) {
        }
        var cv = this.container.style;
        if (cv.position != an[189]) {
            cv.position = an[188]
        }
        ak(cv, {padding: "0px", margin: "0px", textAlign: an[104], overflow: an[190], backgroundColor: this.bodyBgColor, fontSize: this.fontSize + "px"});
        while (cy = cu.firstChild) {
            cu.removeChild(cy)
        }
    }, addControl: function (cu) {
        if (!cu) {
            return
        }
        cu.added = true;
        if (!cu.initialize(this, this.containerFragment ? this.containerFragment : this.container)) {
            return false
        }
        this.controls.push(cu);
        return true
    }, removeControl: function (cu) {
        if (!cu) {
            return
        }
        cu.remove();
        cu.added = false;
        A(cu)
    }, initialize: function () {
        if (this.loaded || !this.data) {
            return
        }
        this.loaded = true;
        cg(this, an[103])
    }, getContainer: function () {
        return this.container
    }, setViewSize: function (cv) {
        var cw = this.viewSize;
        if (cw && cw[0] == cv[0] && cw[1] == cv[1]) {
            return
        }
        var cu = {returnValue: true};
        cg(this, an[102], [cu, cv]);
        if (!cu.returnValue) {
            return false
        }
        this.viewSize = cv;
        cg(this, an[101], [cv]);
        return true
    }, getViewSize: function () {
        return this.viewSize
    }, setData: function (cu) {
        this.data = cu;
        bG(cu, this.config.getConfigObj("SFData"));
        if (!this.loaded) {
            this.initialize()
        }
    }, getData: function () {
        return this.data
    }, depose: function () {
        var cu = this.controls;
        for (var cv = cu.length - 1; cv >= 0; cv--) {
            this.removeControl(cu[cv])
        }
        d(this.container, true)
    }});
    function L() {
    }

    ak(L.prototype, {initialize: function () {
        return false
    }, remove: function () {
        var cv, cu = this.listeners;
        if (cu) {
            while (cv = cu.pop()) {
                cm(cv)
            }
        }
        d(this.div);
        delete this.listeners;
        delete this.gantt
    }, isUsing: function () {
        return !!this.added
    }, depose: function () {
        this.remove();
        ck(this);
        for (var cu in this) {
            this[cu] = null
        }
    }});
    function J() {
        this.sprites = {icon: {imageSize: [128, 48], path: "icon/icon_default"}, symbol: {imageSize: [36, 168], path: "symbol/symbol_000000", autoColor: 1}, scroll: {imageSize: [48, 86], path: "scroll/scroll"}};
        this.images = {tab_left: {size: [2, 23]}, tab_right: {size: [2, 23]}, tab_bg: {size: [1, 23]}, tab_f_right: {size: [2, 23]}, tab_f_bg: {size: [1, 23]}, tab_bg: {size: [1, 23]}, tab_bg: {size: [1, 23]}, collapse_open: {size: [9, 9]}, collapse_close: {size: [9, 9]}, map_mask: {size: [4, 2]}, scroll_barbg: {sprite: an[100], spritePoint: [0, 51], spriteSize: [48, 17]}, scroll_barright: {sprite: an[100], spritePoint: [28, 0], spriteSize: [3, 17]}, scroll_barcenter: {sprite: an[100], spritePoint: [20, 0], spriteSize: [8, 17]}, scroll_barleft: {sprite: an[100], spritePoint: [17, 0], spriteSize: [3, 17]}, scroll_barbg1: {sprite: an[100], spritePoint: [0, 34], spriteSize: [48, 17]}, scroll_barright1: {sprite: an[100], spritePoint: [28, 17], spriteSize: [3, 17]}, scroll_barcenter1: {sprite: an[100], spritePoint: [20, 17], spriteSize: [8, 17]}, scroll_barleft1: {sprite: an[100], spritePoint: [17, 17], spriteSize: [3, 17]}, scroll_left: {sprite: an[100], spritePoint: [0, 0], spriteSize: [17, 17]}, scroll_right: {sprite: an[100], spritePoint: [31, 0], spriteSize: [17, 17]}, scroll_left1: {sprite: an[100], spritePoint: [0, 17], spriteSize: [17, 17]}, scroll_right1: {sprite: an[100], spritePoint: [31, 17], spriteSize: [17, 17]}, scroll_bg: {sprite: an[100], spritePoint: [0, 68], spriteSize: [48, 18]}, dragflag_right: {size: [3, 21]}, dragflag_left: {size: [2, 21]}, logo: {size: [36, 36]}, task_head_1: {sprite: an[99], spritePoint: [0, 0], spriteSize: [11, 11]}, task_head_2: {sprite: an[99], spritePoint: [12, 0], spriteSize: [11, 11]}, task_head_3: {sprite: an[99], spritePoint: [24, 0], spriteSize: [11, 11]}, task_head_3_hollow: {sprite: an[99], spritePoint: [0, 12], spriteSize: [11, 11]}, task_head_4: {sprite: an[99], spritePoint: [12, 12], spriteSize: [11, 11]}, task_head_5: {sprite: an[99], spritePoint: [24, 12], spriteSize: [11, 11]}, task_head_6: {sprite: an[99], spritePoint: [0, 24], spriteSize: [11, 11]}, task_head_7: {sprite: an[99], spritePoint: [12, 24], spriteSize: [11, 11]}, task_head_8: {sprite: an[99], spritePoint: [24, 24], spriteSize: [11, 11]}, task_head_9: {sprite: an[99], spritePoint: [0, 36], spriteSize: [11, 11]}, task_head_10: {sprite: an[99], spritePoint: [12, 36], spriteSize: [11, 11]}, task_head_11: {sprite: an[99], spritePoint: [24, 36], spriteSize: [11, 11]}, task_head_12: {sprite: an[99], spritePoint: [0, 48], spriteSize: [11, 11]}, task_head_13: {sprite: an[99], spritePoint: [12, 48], spriteSize: [11, 11]}, task_head_14: {sprite: an[99], spritePoint: [24, 48], spriteSize: [11, 11]}, task_head_15: {sprite: an[99], spritePoint: [0, 60], spriteSize: [11, 11]}, task_head_16: {sprite: an[99], spritePoint: [12, 60], spriteSize: [11, 11]}, task_head_17: {sprite: an[99], spritePoint: [24, 60], spriteSize: [11, 11]}, task_head_18: {sprite: an[99], spritePoint: [0, 72], spriteSize: [11, 11]}, task_head_19: {sprite: an[99], spritePoint: [12, 72], spriteSize: [11, 11]}, task_head_19_hollow: {sprite: an[99], spritePoint: [24, 72], spriteSize: [11, 11]}, task_head_20: {sprite: an[99], spritePoint: [0, 84], spriteSize: [11, 11]}, arrow_down: {sprite: an[99], spritePoint: [13, 84], spriteSize: [9, 5]}, arrow_left: {sprite: an[99], spritePoint: [24, 85], spriteSize: [5, 9]}, arrow_right: {sprite: an[99], spritePoint: [30, 85], spriteSize: [5, 9]}, arrow_up: {sprite: an[99], spritePoint: [13, 90], spriteSize: [9, 5]}, grid_1: {sprite: an[99], spritePoint: [0, 96], spriteSize: [36, 36]}, grid_2: {sprite: an[99], spritePoint: [0, 132], spriteSize: [36, 36]}, icon_finished: {sprite: an[98], spritePoint: [0, 16], spriteSize: [16, 16]}, icon_constraint2: {sprite: an[98], spritePoint: [0, 0], spriteSize: [16, 16]}, icon_constraint3: {sprite: an[98], spritePoint: [16, 0], spriteSize: [16, 16]}, icon_constraint4: {sprite: an[98], spritePoint: [32, 0], spriteSize: [16, 16]}, icon_constraint5: {sprite: an[98], spritePoint: [48, 0], spriteSize: [16, 16]}, icon_constraint6: {sprite: an[98], spritePoint: [64, 0], spriteSize: [16, 16]}, icon_constraint7: {sprite: an[98], spritePoint: [80, 0], spriteSize: [16, 16]}, icon_notes: {sprite: an[98], spritePoint: [32, 16], spriteSize: [16, 16]}, icon_hyperlink: {sprite: an[98], spritePoint: [16, 16], spriteSize: [16, 16]}, icon_taskstatus: {sprite: an[98], spritePoint: [112, 16], spriteSize: [16, 16]}, icon_taskinfo: {sprite: an[98], spritePoint: [80, 16], spriteSize: [16, 16]}, icon_taskgoto: {sprite: an[98], spritePoint: [64, 16], spriteSize: [16, 16]}, icon_print: {sprite: an[98], spritePoint: [48, 16], spriteSize: [16, 16]}, icon_zoomin: {sprite: an[98], spritePoint: [0, 32], spriteSize: [16, 16]}, icon_zoomout: {sprite: an[98], spritePoint: [16, 32], spriteSize: [16, 16]}, resize: {sprite: an[98], spritePoint: [32, 32], spriteSize: [16, 16]}}
    }

    J.prototype = new L();
    ak(J.prototype, {initialize: function (cu) {
        this.gantt = cu;
        cu.createImage = m(this, a1);
        cu.setImageSrc = m(this, a0);
        cu.setBackgroundImage = m(this, aS);
        return true
    }, remove: function () {
        var cu = this.gantt;
        delete cu.createImage;
        delete cu.setImageSrc;
        delete cu.setBackgroundImage;
        delete this.gantt
    }});
    function a1(cw, cv) {
        cv = cv || {};
        cv.doc = this.gantt.container ? this.gantt.container.ownerDocument : document;
        var cu = this.images[cw], cy = {};
        if (!cu) {
            return v(cw, cv)
        }
        if (cu.sprite) {
            var cx = this.sprites[cu.sprite], cz = cx.path;
            ak(cy, cx);
            ak(cy, cu);
            ak(cy, cv);
            if (cx.autoColor && cv.color) {
                cz = cz.replace("000000", cv.color.substring(1).toUpperCase())
            }
            return v(this.gantt.imgPath + cz + this.gantt.imgType, cy)
        }
        ak(cy, this.images[cw]);
        ak(cy, cv);
        return v(this.gantt.imgPath + cw + this.gantt.imgType, cy)
    }

    function a0(cu, cw) {
        var cv = this.images[cw];
        if (cv) {
            if (cv.sprite) {
                ak(cu.firstChild.style, {left: -cv.spritePoint[0] + "px", top: -cv.spritePoint[1] + "px"});
                return
            }
            p(cu, this.gantt.imgPath + cw + this.gantt.imgType)
        }
    }

    function aS(cA, cw, cv) {
        var cu = this.images[cw];
        if (cu) {
            if (cu.sprite) {
                var cy = {}, cx = this.sprites[cu.sprite], cz = cx.path;
                ak(cy, cx);
                ak(cy, cu);
                ak(cy, cv);
                if (cx.autoColor && cv && cv.color) {
                    cz = cz.replace("000000", cv.color.substring(1).toUpperCase())
                }
                o(cA, this.gantt.imgPath + cz + this.gantt.imgType, cy);
                return
            }
            o(cA, this.gantt.imgPath + cw + this.gantt.imgType, this.images[cw])
        }
    }

    ak(J, {createImage: a1, setImageSrc: a0, setBackgroundImage: aS});
    function e(cv, cu, cw) {
        this.unit = cv;
        this.number = cu;
        this.format = cw
    }

    ak(e.prototype, {showHead: function (cv) {
        var cu = window._SFGantt_config.SFGlobal;
        return ac(cv, this.format, cu)
    }, getFloorTime: function (cw) {
        switch (this.unit) {
            case"Minute":
                var cu = cw.getMinutes() % this.number;
                return new Date(cw.getFullYear(), cw.getMonth(), cw.getDate(), cw.getHours(), cw.getMinutes() - cu);
            case"Hour":
                var cu = cw.getHours() % this.number;
                return new Date(cw.getFullYear(), cw.getMonth(), cw.getDate(), cw.getHours() - cu);
            case"Dat":
                var cu = (cw.valueOf() - cw.getTimezoneOffset() * 60 * 1000) % (this.number * 24 * 60 * 60 * 1000);
                return new Date(cw.valueOf() - cu);
            case"Day":
                var cu = cw.getDay() % this.number;
                var cv = new Date(cw.valueOf() - cu * 24 * 60 * 60 * 1000);
                return new Date(cv.getFullYear(), cv.getMonth(), cv.getDate());
            case"Week":
                var cu = cw.getDay();
                var cv = new Date(cw.valueOf() - cu * 24 * 60 * 60 * 1000);
                return new Date(cv.getFullYear(), cv.getMonth(), cv.getDate());
            case an[97]:
                var cu = cw.getMonth() % this.number;
                return new Date(cw.getFullYear(), cw.getMonth() - cu);
            case"Year":
                var cu = cw.getFullYear() % this.number;
                return new Date(cw.getFullYear() - cu);
            default:
                return cw
        }
    }, getNextTime: function (cx) {
        switch (this.unit) {
            case"Minute":
                return new Date(cx.valueOf() + this.number * 60 * 1000);
            case"Hour":
                return new Date(cx.valueOf() + this.number * 60 * 60 * 1000);
            case"Dat":
            case"Day":
                return new Date(cx.valueOf() + this.number * 24 * 60 * 60 * 1000);
            case"Week":
                return new Date(cx.valueOf() + this.number * 7 * 24 * 60 * 60 * 1000);
            case an[97]:
                var cv = cx.getFullYear(), cw = cx.getMonth() + this.number;
                if (cw == 12) {
                    cv++;
                    cw = 0
                }
                return new Date(cv, cw);
            case"Year":
                var cv = cx.getFullYear() + this.number;
                var cu = new Date(0);
                cu.setYear(cv);
                return cu;
            default:
                return cx
        }
    }});
    function aP(cv, cx, cy, cw, cz, cu) {
        if (!cz) {
            if (!aP.idNum) {
                aP.idNum = 0
            }
            cz = "MenuItem_" + (aP.idNum++)
        }
        cu = cu ? cu : 500;
        this.setIcon(cw);
        ak(this, {showHandle: cv, runHandle: cx, text: cy, id: cz, index: cu})
    }

    ak(aP.prototype, {getIndex: function () {
        return this.index
    }, setIndex: function (cu) {
        this.index = parseInt(cu)
    }, getText: function () {
        return this.text
    }, setText: function (cu) {
        this.text = cu
    }, setIcon: function (cu) {
        this.icon = cu
    }});
    function bt() {
    }

    bt.prototype = new L();
    ak(bt.prototype, {initialize: function (cu) {
        var cv = cu.getContainer().style;
        if (cv.width && cv.width.indexOf("%") < 0 && cv.height && cv.height.indexOf("%") < 0) {
            return false
        }
        this.gantt = cu;
        this.listeners = [f(cu.getContainer(), an[96], this, this.onResize), f(window, an[96], this, this.onResize), f(window, an[154], this, this.onResize), f(window, "load", this, this.onResize)];
        return true
    }, onResize: function () {
        if (!this.timeout) {
            this.timeout = window.setInterval(m(this, this.onTime), 256)
        }
        this.changed = true;
        this.idleTimes = 0
    }, onTime: function () {
        if (!this.changed) {
            this.idleTimes++;
            if (this.idleTimes > 4) {
                window.clearInterval(this.timeout);
                delete this.timeout
            }
            return
        }
        this.changed = false;
        this.resize()
    }, resize: function () {
        var cu = this.gantt;
        cu.setViewSize(y(cu.getContainer()));
        this.timeout = null
    }});
    function ce(cu) {
    }

    ce.prototype = new L();
    ak(ce.prototype, {initialize: function (cv, cu) {
        this.listeners = [f(this.gantt = cv, an[95], this, this.onChange)];
        return true
    }, onChange: function (cu) {
        if (!this.timeout) {
            this.timeout = window.setInterval(m(this, this.onTime), 64)
        }
        this.changed = true;
        this.idleTimes = 0;
        this.bodyHeight = cu[1]
    }, onTime: function () {
        if (!this.changed) {
            this.idleTimes++;
            if (this.idleTimes > 16) {
                window.clearInterval(this.timeout);
                delete this.timeout
            }
            return
        }
        this.changed = false;
        this.setBodyHeight()
    }, setBodyHeight: function () {
        var cu = this.gantt.getLayout(an[94]);
        if (cu) {
            cu.style.height = this.bodyHeight + 100 + "px"
        }
    }, remove: function () {
        if (this.timeout) {
            window.clearInterval(this.timeout)
        }
        L.prototype.remove.apply(this, arguments)
    }});
    function F() {
    }

    F.prototype = new L();
    ak(F.prototype, {initialize: function (cw) {
        if (!cw.getLayout || !cw.getCalList) {
            return false
        }
        var cu = cw.getLayout("mapHead"), cy = cw.container.ownerDocument;
        if (!cu) {
            return false
        }
        bG(this, cw.config.getConfigObj("SFGanttCalDiv"));
        var cz = this.div = cy.createElement("div");
        b3(cz);
        ak(this, {gantt: cw, div: cz, container: cu, cals: {}});
        ak(cz.style, {position: an[189], padding: "0px", margin: "0px"});
        for (var cx = 0; cx < this.calNum; cx++) {
            var cv = cy.createElement("div");
            ak(cv.style, {position: an[189], padding: "0px", margin: "0px", left: "0px"});
            cz.appendChild(cv)
        }
        cu.appendChild(cz);
        this.listeners = [f(cw, an[103], this, this.onResize), f(cw, an[93], this, this.onResize), f(cw, an[92], this, this.showCal), f(cw, an[154], this, this.showCal)];
        this.onResize();
        return true
    }, onResize: function () {
        var cw = this.gantt, cB = this.div, cv = cB.parentNode, cy = this.size, cz = [cv.offsetWidth, cv.offsetHeight];
        if (!cy || cy[1] != cz[1]) {
            var cA = this.calNum, cu = cz[1];
            for (var cx = 0; cx < cA; cx++) {
                ak(cB.childNodes[cx].style, {top: Math.floor(cu * cx / cA) + "px", height: Math.floor(cu / cA) + "px"})
            }
        }
        this.size = cz;
        this.showCal()
    }, showCal: function () {
        var cv = this.gantt, cx = cv.getStartTime(), cA = cv.getScale(), cu = cv.getCalList();
        if (!cx || !cA || !cu) {
            return
        }
        cx = cx.valueOf();
        this.moveTo(cA, cx);
        var cz = this.gantt.getCalList(), cy = this.div.childNodes;
        for (var cw = 0; cw < this.calNum; cw++) {
            this.showCalItem(cA, cx, cz[cw], cy[this.calNum - cw - 1], cw)
        }
    }, showCalItem: function (cy, cx, cu, cD, cA) {
        var cv = this.cals[cA];
        if (!cv || cv.cal != cu) {
            this.clearItem(cA);
            this.cals[cA] = cv = {start: cx, cal: cu, scale: cy};
            cD.style.left = (cx - this.drawStart) / cy + "px"
        } else {
            if (cv.scale != cy) {
                for (var cw = cD.firstChild;
                     cw; cw = cw.nextSibling) {
                    ak(cw.style, {left: (cw.sTime - cv.start) / cy + "px", width: (cw.eTime - cw.sTime) / cy + "px"})
                }
                cD.style.left = (cv.start - this.drawStart) / cy + "px";
                cv.scale = cy
            }
        }
        var cz = cx + this.container.offsetWidth * cy;
        var cB = cD.firstChild ? cD.firstChild.sTime : Number.MAX_VALUE;
        var cC = cD.lastChild ? cD.lastChild.eTime : Number.MIN_VALUE;
        if (cx > (cD.firstChild ? cD.firstChild.eTime : Number.MAX_VALUE)) {
            while (cD.firstChild && cD.firstChild.eTime < cx) {
                d(cD.firstChild)
            }
            cB = cD.firstChild ? cD.firstChild.sTime : Number.MAX_VALUE
        }
        if ((cD.lastChild ? cD.lastChild.sTime : Number.MIN_VALUE) > cz) {
            while (cD.lastChild && cD.lastChild.sTime > cz) {
                d(cD.lastChild)
            }
            cC = cD.lastChild ? cD.lastChild.eTime : Number.MIN_VALUE
        }
        if (cx < cB) {
            this.addTimeSpans(cx, Math.min(cB, cz), cv, cD, -1);
            cB = cD.firstChild ? cD.firstChild.sTime : Number.MAX_VALUE;
            cC = cD.lastChild ? cD.lastChild.eTime : Number.MIN_VALUE
        }
        if (cC < cz) {
            this.addTimeSpans(Math.max(cC, cx), cz, cv, cD, 1)
        }
    }, addTimeSpans: function (cx, cz, cw, cD, cy) {
        var cv = cw.cal;
        var cA = parseInt(cv.getFloorTime(new Date(cx)).valueOf());
        var cE = null;
        while (cA < cz) {
            var cB = parseInt(cv.getNextTime(new Date(cA)).valueOf());
            var cu = cD.ownerDocument.createElement("div");
            ak(cu, {sTime: cA, eTime: cB});
            var cC = Math.floor(this.size[1] / this.calNum) - 1;
            ak(cu.style, {position: an[189], left: (cA - cw.start) / cw.scale + "px", top: "0px", width: (cB - cA) / cw.scale + "px", height: cC, fontSize: Math.floor(cC * 0.8) + "px", padding: "0px", lineHeight: cC + "px", borderRight: an[91] + this.gantt.borderColor, borderBottom: an[91] + this.gantt.borderColor, textAlign: an[90]});
            cu.innerHTML = cv.showHead(new Date(cA));
            if (cy == -1) {
                if (cE == null) {
                    cD.insertBefore(cu, cD.firstChild)
                } else {
                    if (cE.nextSibling == null) {
                        cD.appendChild(cu)
                    } else {
                        cD.insertBefore(cu, cE.nextSibling)
                    }
                }
            } else {
                cD.appendChild(cu)
            }
            cE = cu;
            cA = cB
        }
    }, clear: function () {
        for (var cu = 0; cu < this.calNum; cu++) {
            this.clearItem(cu)
        }
    }, clearItem: function (cu) {
        d(this.div.childNodes[this.calNum - cu - 1], true);
        delete this.cals[cu]
    }, moveTo: function (cz, cw) {
        if (!this.drawStart) {
            this.drawStart = cw
        }
        var cu = parseInt((this.drawStart - cw) / cz);
        if (Math.abs(cu) > 10000) {
            this.drawStart = cw;
            var cx = this.calNum;
            for (var cv = 0; cv < cx; cv++) {
                if (!this.cals[cv]) {
                    continue
                }
                var cy = parseInt((this.cals[cv].start - this.drawStart) / cz);
                if (Math.abs(cy) > 10000) {
                    this.cals[cv].start = this.drawStart;
                    for (var cA = this.div.childNodes[cv].firstChild;
                         cA; cA = cA.nextSibling) {
                        cA.style.left = parseInt(cA.style.left + cu) + "px"
                    }
                    cy = 0
                }
                this.div.childNodes[cv].style.left = cy + "px"
            }
            cu = 0
        }
        this.div.style.left = cu + "px"
    }});
    function S() {
    }

    S.prototype = new L();
    ak(S.prototype, {initialize: function (cw) {
        this.gantt = cw;
        var cu = cw.config.getConfig("SFGanttCalendarItem/formats");
        var cv = {Minute15: new e("Minute", 15, cu.Minute15), Hour: new e("Hour", 1, cu.Hour), Hour2: new e("Hour", 2, cu.Hour2), Hour6: new e("Hour", 6, cu.Hour6), Dat: new e("Dat", 1, cu.Dat), Dat1: new e("Dat", 1, cu.Dat1), Day: new e("Day", 1, cu.Day), Day3: new e("Dat", 3, cu.Day3), Day7: new e("Day", 7, cu.Day7), Week: new e("Week", 1, cu.Week), Month: new e(an[97], 1, cu.Month), Month1: new e(an[97], 1, cu.Month1), Quarter: new e(an[97], 3, cu.Quarter), Quarter1: new e(an[97], 3, cu.Quarter1), Quarter2: new e(an[97], 6, cu.Quarter2), Year: new e("Year", 1, cu.Year), Year1: new e("Year", 1, cu.Year1), Year5: new e("Year", 5, cu.Year5), Year10: new e("Year", 10, cu.Year10)};
        this.levels = [
            {scale: 3 * 60000 / 6, cals: [cv.Minute15, cv.Hour, cv.Dat]},
            {scale: 30 * 60000 / 6, cals: [cv.Hour2, cv.Dat, cv.Week]},
            {scale: 3600000 / 6, cals: [cv.Hour6, cv.Dat, cv.Week]},
            {scale: 4 * 3600000 / 6, cals: [cv.Day, cv.Week, cv.Month]},
            {scale: 12 * 3600000 / 6, cals: [cv.Day3, cv.Month, cv.Quarter]},
            {scale: 24 * 3600000 / 6, cals: [cv.Day7, cv.Month, cv.Year]},
            {scale: 96 * 3600000 / 6, cals: [cv.Month1, cv.Quarter, cv.Year]},
            {scale: 192 * 3600000 / 6, cals: [cv.Month1, cv.Year, cv.Year]},
            {scale: 576 * 3600000 / 6, cals: [cv.Quarter1, cv.Year, cv.Year5]},
            {scale: 1728 * 3600000 / 6, cals: [cv.Quarter2, cv.Year1, cv.Year10]}
        ];
        ak(cw, {setCalLevels: m(this, this.setCalLevels), getCalList: m(this, this.getCalList)});
        this.listeners = [f(cw, an[103], this, this.onScaleChange), f(cw, an[92], this, this.onScaleChange)];
        this.onScaleChange();
        return true
    }, setCalLevels: function (cu) {
        this.levels = cu
    }, getCalList: function () {
        return this.calList
    }, onScaleChange: function () {
        var cw = this.gantt.getScale(), cv = this.levels, cu;
        if (!cw) {
            return
        }
        for (cu = cv.length - 1; cu >= 0; cu--) {
            if (cw > cv[cu].scale) {
                cu++;
                break
            }
        }
        cu = Math.min(Math.max(cu, 0), cv.length - 1);
        this.calList = cv[cu].cals
    }, remove: function () {
        var cu = this.gantt;
        delete cu.getCalList;
        L.prototype.remove.apply(this, arguments)
    }});
    function bu() {
    }

    bu.prototype = new L();
    ak(bu.prototype, {initialize: function (cu) {
        if (cu.disableChangeEvent) {
            return false
        }
        this.listeners = [f(this.gantt = cu, an[103], this, this.onGanttInit)];
        return true
    }, onGanttInit: function () {
        var cu = this.gantt;
        this.listeners = this.listeners.concat([f(cu.getData(), an[153] + cu.elementType.toLowerCase() + an[162], this, this.onElementUpdate)])
    }, onElementUpdate: function (cv, cu, cz, cw) {
        var cy, cx;
        if (!(cx = this.changedElements)) {
            cx = this.changedElements = []
        }
        if (cy = B(cx, cv, function (cB, cA) {
            return cB.element == cA
        })) {
            if (!B(cy.fields, cu)) {
                cy.fields.push(cu)
            }
        } else {
            cx.push({element: cv, fields: [cu]})
        }
        if (!this.eut) {
            this.eut = window.setInterval(m(this, this.onTime), 256)
        }
        this.changed = true;
        this.idleTimes = 0
    }, onTime: function () {
        if (!this.changed) {
            this.idleTimes++;
            if (this.idleTimes > 4) {
                window.clearInterval(this.eut);
                delete this.eut
            }
            return
        }
        this.changed = false;
        this.triggerUpdate()
    }, triggerUpdate: function () {
        var cu, cv = this.changedElements;
        while (cu = cv.pop()) {
            this.onElementChange(cu.element, cu.fields)
        }
    }, onElementChange: function (cv, cw) {
        var cu = this.gantt;
        cg(this.gantt, cu.elementType.toLowerCase() + an[151], [cv, cw])
    }});
    function M() {
    }

    M.prototype = new L();
    ak(M.prototype, {initialize: function (cw, cu) {
        if (!cw.getLayout || cw.disableCollapse || !cw.getLayout(an[89]) || !cw.getLayout(an[94]) || cw.spaceWidth < 4) {
            return false
        }
        var cx = this.width = cw.spaceWidth, cy = cw.container.ownerDocument;
        var cz = this.div = cy.createElement("div");
        ak(cz.style, {position: an[189], zIndex: 200, top: "0px", width: cx + "px", height: an[187], backgroundColor: cw.columnBarColor, borderLeft: an[91] + cw.borderColor, borderRight: an[91] + cw.borderColor});
        D(cz, an[88]);
        var cv = this.listColImg = cw.createImage(an[87], {position: [(cx - 5) / 2, cx]});
        ak(cv.style, {position: an[189], zIndex: 200});
        D(cv, an[193]);
        cz.appendChild(cv);
        var cv = this.mapColImg = cw.createImage(an[86], {position: [(cx - 4) / 2, cx + 10]});
        ak(cv.style, {position: an[189], zIndex: 200});
        D(cv, an[193]);
        cz.appendChild(cv);
        cu.appendChild(cz);
        if (cw.setContextMenu) {
            cw.setContextMenu(cz, function (cA) {
                cA.type = an[85];
                return true
            })
        }
        this.gantt = cw;
        this.listeners = [f(cz, an[182], this, this.onMouseDown), f(cw, an[93], this, this.onLayoutChange)];
        return true
    }, onLayoutChange: function () {
        var cw = this.gantt, cu = cw.getLayout(an[89]), cv = cw.getLayout(an[94]);
        var cx = cf(cu, cw.getContainer()), cy = cf(cv, cw.getContainer());
        var cz = Math.max(cx[0], cy[0]);
        if ((!cw.isListShow() && cz == cx[0]) || (!cw.isChartShow() && cz == cy[0])) {
            cz = cf(cu.parentNode, cw.getContainer())[0] + cu.parentNode.offsetWidth
        }
        this.div.style.left = cz - this.width + "px";
        cw.setImageSrc(this.listColImg, cu.offsetWidth == 0 ? an[86] : an[87]);
        cw.setImageSrc(this.mapColImg, cu.offsetWidth == 0 ? an[87] : an[86])
    }, onMouseDown: function (cv) {
        if (cb(cv) != 1) {
            return
        }
        i(cv);
        if (this.dragObj) {
            this.onMouseUp(cv)
        }
        var cu = cv.target;
        while (cu && cu != this.div) {
            if (cu == this.listColImg) {
                this.gantt.collapseList();
                return
            }
            if (cu == this.mapColImg) {
                this.gantt.collapseMap();
                return
            }
            cu = cu.parentNode
        }
        new s(this.div, m(this, this.onMove), {container: this.gantt.getContainer()}).onMouseDown(cv)
    }, onMove: function (cw, cu, cv) {
        if (cv == an[179]) {
            this.startColumn = this.gantt.listWidth * 1
        }
        var cx = this.startColumn + cu[0] - cw[0];
        this.div.style.left = cx + this.gantt.idCellWidth + "px";
        if (cv == "end") {
            this.gantt.setListWidth(cx)
        }
    }});
    function N() {
    }

    N.prototype = new L();
    ak(N.prototype, {initialize: function (cu) {
        if (cu.disableCursor) {
            return false
        }
        this.gantt = cu;
        cu.setCursor = m(cu, aQ);
        return true
    }, remove: function () {
        var cu = this.gantt;
        delete cu.setCursor;
        delete this.gantt
    }});
    function aQ(cy, cv) {
        if (cv.indexOf(",") > 0) {
            var cw = cv.split(",");
            for (var cu = 0; cu < cw.length; cu++) {
                if (this.setCursor(cy, cw[cu])) {
                    return true
                }
            }
            return false
        }
        try {
            if (cv.toLowerCase().indexOf(".cur") > 0) {
                cv = "url(" + this.imgPath + "cursor/" + cv + "),auto"
            }
            cv = cv.toLowerCase();
            if (cv == "hand" && !document.all) {
                cv = an[193]
            }
            cy.style.cursor = cv;
            return true
        } catch (cx) {
            return false
        }
    }

    ak(N, {setCursor: aQ});
    function ai() {
    }

    ai.prototype = new L();
    ak(ai.prototype, {initialize: function (cv, cu) {
        if (cv.disableDragResize) {
            return false
        }
        var cw = this.div = cv.createImage(an[96]);
        ak(cw.style, {position: an[189], right: "0px", bottom: "0px", zIndex: 200});
        D(cw, "se-resize");
        this.listeners = [bz(cw, m(this, this.onMove), {container: cv.getContainer()})];
        cu.appendChild(cw);
        this.gantt = cv;
        return true
    }, onMove: function (cy, cu, cx) {
        var cv = this.gantt;
        if (cx == an[179]) {
            this.startSize = cv.getViewSize();
            return
        }
        var cw = [this.startSize[0] + cu[0] - cy[0], this.startSize[1] + cu[1] - cy[1]];
        if (cv.setViewSize(cw)) {
            ak(cv.getContainer().style, {width: cw[0] + "px", height: cw[1] + "px"})
        }
    }});
    function a() {
    }

    a.prototype = new L();
    ak(a.prototype, {initialize: function (cv) {
        if (cv.disableDragZoom || !cv.getLayout) {
            return false
        }
        var cu = cv.getLayout("mapHead");
        if (!cu) {
            return false
        }
        D(cu, an[88]);
        this.gantt = cv;
        this.container = cu;
        this.listeners = [bz(cu, m(this, this.onMove), {interval: 32})];
        return true
    }, onMove: function (cw, cu, cv) {
        if (cv == an[179]) {
            this.startScale = this.gantt.getScale()
        }
        if (cu[0] > 1) {
            var cx = this.startScale * cw[0] / cu[0];
            this.gantt.setScale(cx)
        }
    }});
    function aZ(cu) {
        ak(this, cu)
    }

    aZ.prototype = new L();
    ak(aZ.prototype, {initialize: function (cx) {
        if (!cx.getLayout) {
            return false
        }
        var cv = this.container = cx.getLayout(this.mainList ? "listId" : an[89]), cH = cx.container.ownerDocument;
        if (!cv) {
            return false
        }
        this.gantt = cx;
        this.elementStyles = cx.config.getConfigObj("SFGantt/" + cx.elementType.toLowerCase() + "Style");
        bG(this, cx.config.getConfigObj("SFGanttElementList"));
        if (!aZ.listIndex) {
            aZ.listIndex = 0
        }
        this.proTag = "listRow_" + (aZ.listIndex++);
        var cJ = this.div = cH.createElement(an[84]);
        ak(cJ, {bgColor: cx.borderColor, border: 0, cellSpacing: 1, cellPadding: 0});
        ak(cJ.style, {fontSize: "0px", position: an[188], left: "-2px", top: "-3px", tableLayout: "fixed", zIndex: 100});
        b3(cJ);
        var cB = cJ.insertRow(-1), cF = this.bgColor;
        cF = cF ? cF : an[83];
        ak(cB, {bgColor: cF});
        var cD = 0, cC = this.fields = aK(cx.elementType, this.fieldNames);
        var cz = cB.insertCell(-1);
        ak(cz, {width: 1});
        var cI = document.compatMode ? "nowrap" : "pre";
        ak(cz.style, {overflowX: an[190], fontSize: "0px", whiteSpace: cI});
        var cu = cH.createElement("div"), cy = [];
        ak(cu.style, {position: an[188], left: "-1px", width: "1px"});
        cz.appendChild(cu);
        for (var cA = 0; cA < cC.length; cA++) {
            cz = cB.insertCell(-1);
            ak(cz.style, {overflow: an[190], fontSize: "0px", whiteSpace: cI});
            var cw = cC[cA].width;
            cy.push(cw);
            cD += cw + 1;
            ak(cz, {width: cw})
        }
        var cB = cJ.insertRow(-1);
        ak(cB, {bgColor: cF});
        var cz = cB.insertCell(-1);
        ak(cz, {height: (cx.itemHeight - 1) * 1});
        ak(cz.style, {overflow: an[190], whiteSpace: cI});
        for (var cA = 0; cA < this.fields.length; cA++) {
            cz = cB.insertCell(-1);
            ak(cz.style, {overflow: an[190], whiteSpace: cI})
        }
        cJ.width = cD + 3;
        this.container.appendChild(cJ);
        var cG = this.elementType.toLowerCase();
        var cE = this.listeners = [f(cx, an[96], this, this.onResize), f(cx, cG + "inview", this, this.drawElement), f(cx, cG + "outview", this, this.clearElement), f(cx, cG + an[151], this, this.updateElement), f(cJ, an[82], this, this.onTableClick), f(cJ, an[81], this, this.onTableDblClick)];
        if (cx.setContextMenu) {
            cx.setContextMenu(cJ, function (cK) {
                cK.type = an[80];
                return true
            })
        }
        cE.push(f(cJ, an[182], this, this.onTableMouseDown));
        if (this.mainList) {
            if (!this.disableAdjustLineHeight && !cx.inline) {
                cE.push(f(cJ, an[181], this, this.onTableMouseOver))
            }
        } else {
            cE.push(f(cx, an[79], this, this.onHeadMove));
            cE.push(f(cx, an[78], this, this.onHeadResize))
        }
        this.onHeadResize(cy);
        if (this.disableDragOrder || cx.inline) {
            this.mainList = null
        }
        if (cx.setCursor) {
            cx.setCursor(cJ, this.mainList ? an[77] : "fieldedit.cur,default")
        }
        this.onResize();
        return true
    }, setViewTop: function () {
        var cu = this.gantt.getViewTop();
        this.div.rows[0].cells[0].firstChild.style.height = cu + 1 + "px"
    }, onResize: function () {
        var cv = this.div.rows, cu = this.gantt;
        cv[cv.length - 1].height = Math.max(cu.itemHeight, cu.viewSize[1] - cu.headHeight - cu.footHeight) - 1
    }, applyRowStyle: function (cz, cv) {
        var cx = cv.ClassName;
        cx = cx ? cx : this.elementStyle;
        var cy = this.elementStyles[cx];
        if (cy) {
            var cw = cv.Selected ? cy.listSelectedStyle : cy.listStyle;
            if (cw) {
                ak(cz.style, cw);
                return
            }
        }
        var cu = this.gantt, cw = this.mainList ? (cv.Selected ? {backgroundColor: cu.listFocusColor} : {backgroundColor: this.gantt.idCellBgColor}) : (cv.Selected ? {backgroundColor: cu.listFocusColor} : {backgroundColor: an[83]});
        ak(cz.style, cw)
    }, drawElement: function (cz, cF) {
        if (cF == 0) {
            this.setViewTop()
        }
        var cx = this.gantt, cw = cx.getElementDrawObj(cz), cG = cw.height;
        var cI = this.div.insertRow(cF + 1);
        if ((cx.getElementHeight(cz) <= 0 && !(cx.hideSummary && cx.inline && cz.Summary && cz.getFirstChild() && !cz.getFirstChild().Summary)) || ((cx.hideSummary && cx.inline) && (!cz.Summary && cz.getParent() && cz.getParent().getFirstChild() == cz))) {
            cI.style.display = an[174]
        }
        if (cG == 0) {
            cG = cx.itemHeight
        }
        var cv = true;
        if ((cx.hideSummary && cx.inline) && (!cz.Summary && cz.getParent())) {
            cv = false
        }
        this.applyRowStyle(cI, cz);
        var cD = cI.insertCell(-1);
        var cC = document.compatMode ? "nowrap" : "pre";
        ak(cD, {height: (cG - 1) * 1, width: 1});
        cD.style.cssText = "overflow:hidden;white-space:" + cC + ";font-size:0px;";
        cw[this.proTag] = cI;
        if (cv) {
            cI._Element = cz
        }
        var cB = this.container.ownerDocument, cA = this.fields, cH = cx.fontSize;
        for (var cy = 0; cy < cA.length; cy++) {
            var cD = cB.createElement("td");
            var cE = [];
            cE.push("overflow:hidden");
            cE.push("white-space:" + cC);
            cE.push("font-size:" + cH + "px");
            if (cz.Summary) {
                cE.push("font-weight:bolder")
            }
            cD.style.cssText = cE.join(";");
            if (cv) {
                cA[cy].showBody(cD, cz, this)
            } else {
                cD.vAlign = "top";
                var cu = document.createElement("div");
                ak(cu.style, {width: an[187], position: an[188], top: "-1px", backgroundColor: an[83], height: "1px", fontSize: "0px", overflow: an[190]});
                cD.appendChild(cu)
            }
            cI.appendChild(cD)
        }
    }, clearElement: function (cw, cv) {
        if (cv == 0) {
            this.setViewTop()
        }
        this.clearInputCell();
        var cu = this.gantt.getElementDrawObj(cw);
        d(cu[this.proTag]);
        cu[this.proTag] = null
    }, clearInputCell: function () {
        if (this.focusObj && this.focusObj.inputCell >= 0) {
            var cw = this.focusObj.element, cx = this.fields[this.focusObj.inputCell], cv = this.gantt.getElementDrawObj(cw), cu = cv[this.proTag].cells, cy = cu[this.focusObj.inputCell + 1];
            cx.showBody(cy, cw, this);
            this.focusObj.inputCell = -1;
            cg(this.gantt, "afterfieldeditend", [cx, cw, cy])
        }
    }, onHeadMove: function (cu) {
        this.div.style.left = cu + "px"
    }, onHeadResize: function (cy) {
        var cx = this.div, cu = cx.rows[0].cells, cw = 0;
        for (var cv = 0; cv < cy.length; cv++) {
            cu[cv + 1].width = cy[cv];
            cw += cy[cv] + 1
        }
        cx.width = cw + 3;
        this.widths = cy
    }, getEventRow: function (cw) {
        var cv = cw.target;
        var cx, cu = cv;
        while (cu) {
            if (cu.nodeName == "TR") {
                cx = cu
            }
            if (cu == this.div) {
                break
            }
            cu = cu.parentNode
        }
        if (!cx || !cx._Element) {
            return
        }
        return cx
    }, onTableMouseOver: function (cz) {
        var cA = this.getEventRow(cz);
        if (!cA) {
            var cu = cd(cz, this.div)[1];
            for (cA = this.div.rows[0]; cA; cA = cA.nextSibling) {
                cu -= cA.offsetHeight;
                if (cu < 0) {
                    break
                }
            }
            if (!cA || !cA._Element) {
                return
            }
        }
        var cy = cA._Element, cv = this.gantt;
        var cx = 3, cu = cc(cz, cA)[1];
        if (cu < cx || cu >= cv.getElementHeight(cy) - cx - 1) {
            var cw = cu < cx ? cy.getPreviousView() : cy;
            if (cw && cw.canSetProperty(an[135])) {
                if (cv.setCursor) {
                    cv.setCursor(this.div, "heightChange.cur,default")
                }
                this.dragMode = an[76];
                return
            }
        }
        if (cv.setCursor) {
            cv.setCursor(this.div, cy.Selected ? an[75] : an[77])
        }
        this.dragMode = ""
    }, onTableMouseDown: function (cv) {
        var cw = this.getEventRow(cv);
        if (!cw) {
            return
        }
        var cu = cw._Element;
        cg(this.gantt, this.elementType.toLowerCase() + an[182], [cu, cv]);
        if (cb(cv) != 1) {
            return
        }
        if (this.mainList) {
            if (this.dragMode == an[76]) {
                if (cd(cv, cw)[1] < 3) {
                    cu = cu.getPreviousView();
                    if (!cu) {
                        return
                    }
                    cw = this.gantt.getElementDrawObj(cu)[this.proTag]
                }
            }
            this.dragElement = cu;
            new s(cw, m(this, (this.dragMode == an[76]) ? this.onItemHeightMove : this.onTableMove)).onMouseDown(cv)
        }
    }, onItemHeightMove: function (cA, cy, cz) {
        var cx = this.dragElement, cw = this.gantt;
        if (cz == an[179]) {
            this.startHeight = cw.getElementHeight(cx);
            return
        }
        var cv = cw.getElementDrawObj(cx)[this.proTag].cells[0];
        var cu = Math.max(this.startHeight + cy[1] - cA[1], 10);
        if (cz != "end") {
            cv.height = cu - 1
        } else {
            cv.height = this.startHeight - 1;
            if (this.startHeight != cu) {
                cx.setProperty(an[135], cu)
            }
        }
    }, onTableMove: function (cv, cA, cB) {
        if (cB != "end") {
            var cw = cA[1] > cv[1];
            var cx = this.gantt, cy = this.dragElement;
            var cu = cw ? (cA[1] - cx.getElementHeight(cy)) : cA[1];
            while (cy) {
                var cz = cw ? cy.getNextView() : cy.getPreviousView();
                if (!cz) {
                    break
                }
                var cC = cx.getElementHeight(cz);
                if (cz && cz != this.gantt.data.getRootElement(this.elementType) && (cw ? (cu - cC / 2) : (cu + cC / 2)) * (cw ? 1 : -1) > 0) {
                    cy = cz;
                    cu = cw ? (cu - cC) : (cu + cC)
                } else {
                    break
                }
            }
            this.dragDir = cw;
            this.flagElement = cy;
            this.mainList.showElementMoveFlag(cy, this.dragElement, this.dragDir)
        } else {
            if (this.flagElement && this.flagElement != this.dragElement) {
                this.moveElement(this.dragElement, this.flagElement, this.dragDir)
            }
            this.mainList.showElementMoveFlag(this.dragElement, this.dragElement)
        }
    }, showElementMoveFlag: function (cy, cv, cw) {
        if (this.flagDiv) {
            if (cy == this.flagElement) {
                return
            }
            d(this.flagDiv);
            this.flagDiv = null;
            this.flagElement = cy
        }
        if (!cy || cv.contains(cy)) {
            return
        }
        var cx = this.gantt, cB = cf(cx.getElementDrawObj(cy)[this.proTag], this.container)[1], cz = this.container.ownerDocument;
        cB = cw ? (cB + cx.getElementHeight(cy) - 14) : (cB - 14);
        var cC = cz.createElement(an[84]);
        cC.cellSpacing = 0;
        ak(cC.style, {position: an[189], width: an[187], zIndex: 200, height: "21px", left: "3px", top: cB + "px"});
        var cD = cC.insertRow(-1);
        var cA = cD.insertCell(-1);
        cA.width = 3;
        var cu = cz.createElement("img");
        ak(cu.style, {width: "3px", height: "21px"});
        this.gantt.setBackgroundImage(cu, "dragflag_left");
        cA.appendChild(cu);
        var cA = cD.insertCell(-1);
        this.gantt.setBackgroundImage(cA, "dragflag_right");
        this.container.appendChild(cC);
        this.flagDiv = cC
    }, moveElement: function (cz, cy, cw) {
        var cv, cB = null, cu = null;
        if (cw) {
            var cx = cy.getNextView();
            if (!cx || cx.getOutlineLevel() < cy.getOutlineLevel()) {
                cB = cy
            } else {
                cu = cx
            }
        } else {
            var cv = cy.getPreviousView();
            if (!cv || cv.getOutlineLevel() <= cy.getOutlineLevel()) {
                cu = cy
            } else {
                cB = cv
            }
        }
        var cA = this.gantt.data;
        if (cB) {
            cA.moveElement(cz.elementType, cz, cB.getParent(), cB)
        } else {
            cA.moveElement(cz.elementType, cz, cu.getParent(), cu.getPreviousSibling())
        }
    }, updateElement: function (cz, cv) {
        var cx = this.gantt;
        if (cz == cx.getData().getRootElement(this.elementType)) {
            return
        }
        var cw = cx.getElementDrawObj(cz);
        var cC = cw[this.proTag];
        if (!cC) {
            return
        }
        if (B(cv, an[74])) {
            var cy = cz.Selected;
            if (!cy && this.focusObj && this.focusObj.element == cz) {
                this.clearInputCell()
            }
            this.applyRowStyle(cC, cz);
            if (this.mainList && cx.setCursor) {
                cx.setCursor(cC, cy ? an[75] : an[77])
            }
        }
        if (B(cv, an[137])) {
            this.applyRowStyle(cC, cz)
        }
        for (var cA = 0; cA < this.fields.length; cA++) {
            if (!this.fields[cA].checkUpdate(cv)) {
                continue
            }
            var cB = cC.cells[cA + 1];
            d(cB, true);
            var cu = cB.style;
            cu.fontSize = cx.fontSize + "px";
            this.fields[cA].showBody(cB, cz, this)
        }
        if (B(cv, an[152])) {
            for (var cA = 0; cA < this.fields.length;
                 cA++) {
                cC.cells[cA + 1].style.fontWeight = cz.Summary ? "bolder" : ""
            }
        }
    }, onTableDblClick: function (cx) {
        var cy = this.getEventRow(cx);
        if (!cy) {
            return
        }
        var cw = cy._Element;
        var cv = this.getFieldIndex(cy, cx), cu = this.fields;
        if (cv < 0) {
            return
        }
        cg(this.gantt, this.elementType.toLowerCase() + an[81], [cw, an[80], cu[cv].Name]);
        if (this.editEvent == an[81]) {
            this.startInput(cw, cv)
        }
    }, getFieldIndex: function (cz, cy) {
        var cv, cx = cd(cy, cz)[0], cu = this.fields, cw = this.widths;
        for (cv = 0; cv < cw.length; cv++) {
            cx -= cw[cv] - 1;
            if (cx < 0) {
                break
            }
        }
        if (cv == cu.length) {
            return -1
        }
        return cv
    }, startInput: function (cy, cw) {
        var cv = this.gantt;
        if (!cv.readOnly && !cv.disableUpdateElement && !this.disableInput) {
            var cu = this.fields, cz = cu[cw];
            this.clearInputCell();
            if (cz.inputFunc && !cz.ReadOnly && (!cz.inputData || cy.canSetProperty(cz.inputData))) {
                var cx = {returnValue: true}, cA = cv.getElementDrawObj(cy)[this.proTag].cells[cw + 1];
                cg(cv, "beforefieldeditstart", [cx, cz, cy, cA]);
                if (cx.returnValue) {
                    this.focusObj = {inputCell: cw, element: cy};
                    cz.showInput(cA, cy, this);
                    cg(cv, "afterfieldeditstart", [cz, cy, cA])
                }
            }
        }
    }, onTableClick: function (cx) {
        var cy = this.getEventRow(cx), cu = this.gantt;
        if (!cy) {
            if (cu.clearSelectedElement) {
                cu.clearSelectedElement()
            }
            return
        }
        var cw = cy._Element;
        cg(cu, this.elementType.toLowerCase() + an[82], [cw, cx]);
        if (this.editEvent == an[82]) {
            var cv = this.getFieldIndex(cy, cx);
            if (cv > -1) {
                this.startInput(cw, cv)
            }
        }
    }});
    function bO(cv) {
        var cu = this.container = document.createElement("div");
        ak(cu.style, {position: an[189], overflow: "auto", zIndex: 100, width: an[187], height: an[187]});
        var cw = this.div = document.createElement("div");
        this.zoom = 1;
        this.zoomUnit = 1.6;
        ak(cw.style, {position: an[188]});
        cu.appendChild(cw);
        ak(this, cv)
    }

    bO.prototype = new L();
    ak(bO.prototype, {initialize: function (cu) {
        bG(this, cu.config.getConfigObj("SFGanttNetworkControl"));
        this.taskStyles = cu.config.getConfigObj(an[73]);
        this.linkStyles = cu.config.getConfigObj(an[72]);
        this.gantt = cu;
        var cv = this.div;
        if (cu.setContextMenu) {
            cu.setContextMenu(cv, function (cw) {
                cw.type = an[71];
                return true
            })
        }
        this.taskFields = this.taskFields ? aI(this.taskFields.split(",")) : null;
        this.taskNoticeFields = this.taskNoticeFields ? aI(this.taskNoticeFields.split(",")) : null;
        cu.showMap = m(this, this.draw);
        cu.zoomIn = m(this, this.zoomIn);
        cu.zoomOut = m(this, this.zoomOut);
        cu.container.appendChild(this.container);
        if (this.taskNoticeFields && cu.setTooltip) {
            cu.setTooltip(cv, m(this, this.getTooltip))
        }
        this.listeners = [f(cu, an[70], this, this.updateTask), f(cv, an[182], this, this.onMouseDown), f(cv, an[82], this, this.onClick), f(cv, an[81], this, this.onDblClick)];
        bz(this.div, m(this, this.onDrag), {interval: 32, container: this.container})
    }, updateTask: function (cu, cv) {
        if (cu._div) {
            this.drawTask(cu)
        }
    }, drawTaskNode: function (cz, cu) {
        d(cz, true);
        var cx = this.getTaskStyle(cu);
        for (var cv = 0; cv < this.taskFields.length; cv++) {
            var cy = this.taskFields[cv], cw = document.createElement("div");
            cy.showBody(cw, cu, this);
            if (cy.bodyData == an[145]) {
                ak(cw.style, {fontWeight: "bolder"})
            } else {
                cw.insertBefore(document.createTextNode(cy.headText ? (cy.headText + ":") : ""), cw.firstChild)
            }
            ak(cw.style, {left: "5%", width: "90%", height: "18px", lineHeight: "18px"});
            ak(cw.style, cx.networkLineStyle);
            ak(cw.style, {position: an[188], overflow: an[190]});
            cz.appendChild(cw)
        }
    }, applyStyle: function (cx, cu) {
        var cw = this.getTaskStyle(cu);
        if (cw) {
            var cv = cu.Selected ? cw.listSelectedStyle : cw.listStyle;
            if (cv) {
                ak(cx.style, cv);
                return
            }
        }
    }, getEventNode: function (cv) {
        var cu = cv.target;
        while (cu && !cu._task) {
            cu = cu.parentNode
        }
        return cu
    }, onMouseDown: function (cw) {
        var cv = this.getEventNode(cw);
        if (!cv) {
            return
        }
        var cu = cv._task;
        cg(this.gantt, an[69], [cu, cw])
    }, onClick: function (cx) {
        var cw = this.getEventNode(cx), cv = this.gantt;
        if (!cw) {
            return
        }
        var cu = cw._task;
        cg(cv, "taskclick", [cu, cx])
    }, onDblClick: function (cw) {
        var cv = this.getEventNode(cw);
        if (!cv) {
            return
        }
        var cu = cv._task;
        cg(this.gantt, an[68], [cu, an[71]])
    }, getGraphics: function () {
        var cu = [bD, cr, bg, aq];
        for (var cv = 0; cv < cu.length; cv++) {
            if (cu[cv].isSupport()) {
                return new cu[cv]()
            }
        }
        return new c(true)
    }, getTooltip: function (cC, cw) {
        var cx = this.getEventNode(cw);
        if (!cx) {
            return false
        }
        var cu = cx._task, cy = this.gantt.container.ownerDocument;
        if (cC.bindObject == cu) {
            return false
        }
        var cA = cy.createElement(an[84]);
        cA.width = 300;
        cA.style.fontSize = an[67];
        var cB = cA.insertRow(-1);
        var cz = cB.insertCell(-1);
        ak(cz, {align: an[90], colSpan: 2, noWrap: true});
        cz.appendChild(cy.createTextNode(al("7jShwn10")));
        for (var cv = 0; cv < this.taskNoticeFields.length;
             cv++) {
            cB = cA.insertRow(-1);
            cz = cB.insertCell(-1);
            ak(cz, {align: an[104], noWrap: true});
            this.taskNoticeFields[cv].showHead(cz);
            cz = cB.insertCell(-1);
            ak(cz, {align: an[104], noWrap: true});
            this.taskNoticeFields[cv].showBody(cz, cu, this)
        }
        cC.bindObject = cu;
        cC.setContent(cA);
        return true
    }, onDrag: function (cx, cv, cw) {
        var cu = this.container;
        if (cw == an[179]) {
            this.dsp = [cu.scrollLeft, cu.scrollTop]
        }
        cu.scrollLeft = this.dsp[0] - cv[0] + cx[0];
        cu.scrollTop = this.dsp[1] - cv[1] + cx[1]
    }, searchLink: function (cv, cz, cw, cu) {
        var cy = cv.getPredecessorTasks();
        for (var cx = cy.length - 1; cx >= 0; cx--) {
            if (cw == cx) {
                continue
            }
            if (cy[cx] == cz) {
                return true
            }
            if (cv._index >= cz._index) {
                return false
            }
            if (cu > 0 && this.searchLink(cy[cx], cz, -1, cu - 1)) {
                return true
            }
        }
        return false
    }, findLongest: function (cx, cA, cB) {
        if (cx > this.maxLevel) {
            return cB
        }
        for (var cy = 0; cy < cA.length; cy++) {
            var cv = cA[cy], cz = cv.getPredecessorTasks(), cu;
            for (var cw = cz.length - 1; cw >= 0; cw--) {
                if (cz[cw]._level != cx + 1) {
                    cz.splice(cw, 1)
                }
            }
            cu = this.findLongest(cx + 1, cz, cB.concat(cv));
            if (cu) {
                return cu
            }
        }
        return null
    }, findLonger: function (cB, cA) {
        var cv = cA.length, cy = cA;
        for (var cx = 0; cx < cB.length; cx++) {
            var cu = cB[cx], cz = cu.getPredecessorTasks(), cC;
            for (var cw = cz.length - 1; cw >= 0; cw--) {
                if (cz[cw]._level <= cu._level) {
                    cz.splice(cw, 1)
                }
            }
            if (cB[cx]._index !== undefined) {
                if (cA.length > cv) {
                    cv = cA.length;
                    cy = cA
                }
                cC = this.findLonger(cz, []);
                if (cC.length > cv) {
                    cv = cC.length;
                    cy = cC
                }
            } else {
                cC = this.findLonger(cz, cA.concat(cu));
                if (cC.length > cv) {
                    cv = cC.length;
                    cy = cC
                }
            }
        }
        return cy
    }, initData: function () {
        var cT = this.gantt.data, cS = this.taskList = {}, cL = this.tasks = [], cH = 0;
        for (var cQ = cT.getRootTask(); cQ; cQ = cQ.getNext()) {
            if (cQ.Summary) {
                continue
            }
            cQ._level = 0;
            cL.push(cQ);
            cH++
        }
        var cG, cz = 0, cv = this.type;
        for (cG = this.maxTimes; cG > 0; cG--) {
            var cB = false;
            for (var cQ = cT.getRootTask(); cQ; cQ = cQ.getNext()) {
                if (cQ.Summary) {
                    continue
                }
                var cK = cQ.getPredecessorTasks();
                for (var cP = 0; cP < cK.length; cP++) {
                    if (cv == an[150]) {
                        if (cQ._level + 1 > cK[cP]._level) {
                            cK[cP]._level = cQ._level + 1;
                            cz = Math.max(cz, cK[cP]._level);
                            cB = true
                        }
                    } else {
                        if (cK[cP]._level + 1 > cQ._level) {
                            cQ._level = cK[cP]._level + 1;
                            cz = Math.max(cz, cQ._level);
                            cB = true
                        }
                    }
                }
            }
            if (!cB) {
                break
            }
        }
        if (cv != an[150]) {
            for (var cQ = cT.getRootTask(); cQ; cQ = cQ.getNext()) {
                if (cQ.Summary) {
                    continue
                }
                cQ._level = cz - cQ._level
            }
        }
        this.maxLevel = cz;
        if (cG == 0) {
            alert(al("8ieHwJHs,D27BVXdxwS6wDBMCowzCALE_iHZ_AR4x897,,eM8hlOAUitDGlsI0"))
        }
        for (var cQ = cT.getRootTask(); cQ; cQ = cQ.getNext()) {
            if (cQ.Summary) {
                continue
            }
            var cK = cQ.getPredecessorTasks(), cJ;
            for (var cP = cK.length - 1; cP >= 0; cP--) {
                cJ = cK[cP]._level - cQ._level + 1;
                if (cJ <= 0) {
                    continue
                }
                if (this.searchLink(cQ, cK[cP], cP, cJ - 2)) {
                    var cD = B(cK[cP].getSuccessorLinks(), cQ, function (cX, cW) {
                        return cX.getSuccessorTask() == cW
                    });
                    cT.deleteLink(cD)
                }
            }
        }
        for (var cQ = cT.getRootTask(); cQ; cQ = cQ.getNext()) {
            if (cQ.Summary) {
                continue
            }
            if (!cS[cQ._level]) {
                cS[cQ._level] = []
            }
            cS[cQ._level].push(cQ)
        }
        var cA = this.findLongest(0, cS[0], []);
        for (var cP = 0; cP < cA.length; cP++) {
            cA[cP]._index = 0
        }
        var cw = {};
        var cO;
        do {
            var cu = this.findLonger(cS[0], []);
            cO = cu.length;
            if (cO < 2) {
                break
            }
            var cV = cu[0].getSuccessorTasks(), cy = cu[cO - 1].getPredecessorTasks(), cF = cz, cU = 0;
            for (var cP = 0; cP < cV.length; cP++) {
                var cE = cV[cP]._index;
                if (cE === undefined) {
                    continue
                }
                cF = Math.min(cF, cE)
            }
            if (cV.length == 0) {
                cF = 0
            }
            for (var cP = 0; cP < cy.length; cP++) {
                var cE = cy[cP]._index;
                if (cE === undefined) {
                    continue
                }
                cU = Math.max(cU, cE)
            }
            if (cy.length == 0) {
                cU = cz
            }
            var cC;
            for (var cM = 1; ; cM++) {
                if (!cw[cM]) {
                    cw[cM] = {}
                }
                var cP;
                for (var cP = cF; cP <= cz; cP++) {
                    if (cw[cM][cP]) {
                        break
                    }
                }
                if (cP < cz) {
                    continue
                }
                cC = cM;
                for (cP = cF; cP <= cU; cP++) {
                    cw[cC][cP] = 1
                }
                break
            }
            for (cP = 0; cP < cO; cP++) {
                cu[cP]._index = cC
            }
        } while (cO > 1);
        for (var cP = 0; cP <= cz; cP++) {
            var cR = cS[cP];
            for (var cN = 0; cN < cR.length; cN++) {
                if (cR[cN]._index !== undefined) {
                    continue
                }
                var cC;
                for (var cM = 1; ; cM++) {
                    if (!cw[cM]) {
                        cw[cM] = {}
                    }
                    if (cw[cM][cP]) {
                        continue
                    }
                    cw[cM][cP] = 1;
                    cC = cM;
                    break
                }
                cR[cN]._index = cC
            }
        }
        var cx = 0, cI = 0;
        for (var cQ = cT.getRootTask();
             cQ; cQ = cQ.getNext()) {
            if (cQ.Summary) {
                continue
            }
            cx = Math.min(cx, cQ._index);
            cI = Math.max(cI, cQ._index)
        }
        this.maxIndex = cI;
        this.minIndex = cx
    }, getNodePosition: function (cA, cx) {
        var cz = this.zoom, cv = this.height * cz, cy = this.width * cz, cw = this.maxIndex - this.minIndex + 1, cu = this.nodeWidth * cz, cB = this.nodeHeight * cz;
        if (cx == "x") {
            return{x: (this.maxLevel - cA._level) * cy + (cy - cu) / 2, y: cA._index * cv + (cv - cB) / 2, w: cu, h: cB}
        } else {
            return{x: cA._index * cy + (cy - cu) / 2, y: (this.maxLevel - cA._level) * cv + (cv - cB) / 2, w: cu, h: cB}
        }
    }, draw: function () {
        if (!this.inited) {
            this.initData();
            this.inited = true
        }
        var cw = this.gantt.data;
        var cv = (this.dir == "x") ? {x: this.width * (this.maxLevel + 1), y: this.height * (this.maxIndex - this.minIndex + 1)} : {x: this.width * (this.maxIndex - this.minIndex + 1), y: this.height * (this.maxLevel + 1)};
        ak(this.div.style, {width: cv.x * this.zoom + "px", height: cv.y * this.zoom + "px"});
        for (var cu = cw.getRootTask(); cu; cu = cu.getNext()) {
            if (cu.Summary) {
                continue
            }
            this.drawTask(cu)
        }
    }, getTaskStyle: function (cu) {
        var cv = cu.ClassName, cw = this.taskStyles;
        cv = cv && cw[cv] ? cv : this.taskStyle;
        return cw[cv]
    }, drawTask: function (cw) {
        var cB = cw._div, cu = this.getNodePosition(cw, this.dir), cA = this.zoom, cz = this.getTaskStyle(cw);
        if (!cB) {
            cB = cw._div = document.createElement("div");
            cB._task = cw;
            ak(cB.style, cz.networkStyle);
            ak(cB.style, {fontSize: an[67], wordBreak: "break-all", zIndex: 100, cursor: an[193]});
            this.div.appendChild(cB)
        }
        this.applyStyle(cB, cw);
        var cy = parseInt(cB.style.borderWidth) || 0;
        ak(cB.style, {position: an[189], width: (cu.w - cy * 2) + "px", height: (cu.h - cy * 2) + "px", left: cu.x + "px", top: cu.y + "px", overflow: an[190], zIndex: 100});
        var cv = cw.getPredecessorLinks();
        for (var cx = cv.length - 1; cx >= 0; cx--) {
            this.drawLink(cv[cx], cA)
        }
        cv = cw.getSuccessorLinks();
        for (var cx = cv.length - 1;
             cx >= 0; cx--) {
            this.drawLink(cv[cx], cA)
        }
        this.drawTaskNode(cB, cw)
    }, drawLink: function (cD, cH) {
        var cv = cD.SuccessorTask, cG = cD.PredecessorTask, cC = cD.ClassName, cw = this.dir, cA = this.combineLine;
        var cB = this.getNodePosition(cv, cw);
        cC = cC ? cC : (this.linkFocusStyle && (cv.Selected || cG.Selected) ? this.linkFocusStyle : this.linkStyle);
        if (cD._paths) {
            if (cD._tag == cC + "_" + cH) {
                return
            }
            var cK, cJ = cD._paths;
            while (cK = cJ.pop()) {
                d(cK)
            }
            delete cD._paths
        }
        cD._tag = cC + "_" + cH;
        var cx = this.linkStyles[cC], cz = this.getNodePosition(cG, cw), cF = [];
        if (this.dir != "x") {
            var cE = Math.atan((cG._index - cv._index) / 2) / Math.PI;
            cE = cE * (1 - Math.atan(Math.abs(cG._level - cv._level - 1) / 2) / Math.PI * 2);
            var cu = {x: cB.x + cB.w * (cA ? 0.5 : (0.5 + cE)), y: cB.y};
            var cI = {x: cz.x + cz.w * (cA ? 0.5 : (0.5 - cE)), y: cz.y + cz.h};
            cF.push(cu);
            if (cu.x != cI.x) {
                var cy = (this.height * cH - cB.h) * (cA ? 0.5 : (0.5 + cE));
                cF.push({x: cu.x, y: cI.y + cy});
                cF.push({x: cI.x, y: cI.y + cy})
            }
            cF.push(cI)
        } else {
            var cE = Math.atan((cG._index - cv._index) / 2) / Math.PI;
            cE = cE * (1 - Math.atan(Math.abs(cG._level - cv._level - 1) / 2) / Math.PI * 2);
            var cu = {x: cB.x, y: cB.y + cB.h * (cA ? 0.5 : (0.5 + cE))};
            var cI = {x: cz.x + cz.w, y: cz.y + cz.h * (cA ? 0.5 : (0.5 - cE))};
            cF.push(cu);
            if (cu.y != cI.y) {
                var cy = (this.width * cH - cB.w) * (cA ? 0.5 : (0.5 + cE));
                cF.push({x: cI.x + cy, y: cu.y});
                cF.push({x: cI.x + cy, y: cI.y})
            }
            cF.push(cI)
        }
        cD._paths = this.drawLine(cF, cx)
    }, drawLine: function (cD, cx) {
        var cE = [], cB = cD.length, cw = this.gantt, cy = cx.color;
        for (var cA = 1; cA < cB; cA++) {
            var cu = document.createElement("div");
            ak(cu.style, {borderColor: cy, zIndex: 200});
            ak(cu.style, cx.lineStyle);
            ak(cu.style, {position: an[189], fontSize: "0px", borderWidth: "0px"});
            if (cD[cA - 1].x == cD[cA].x) {
                ak(cu.style, {borderRightWidth: "1px", height: Math.abs(cD[cA].y - cD[cA - 1].y) + "px", width: 0 + "px", left: (cD[cA].x - 1) + "px", top: (Math.min(cD[cA].y, cD[cA - 1].y)) + "px"});
                if (cA == 1) {
                    var cC = cD[cA - 1].y > cD[cA].y ? (cD[cA - 1].y - 5) : cD[cA - 1].y;
                    var cz = cw.createImage("arrow_" + (cD[cA - 1].y > cD[cA].y ? "down" : "up"), {color: cy, position: [cD[cA - 1].x - 5, cC]});
                    ak(cz.style, {position: an[189], fontSize: "0px"});
                    cE.push(cz);
                    this.div.appendChild(cz)
                }
            } else {
                if (cD[cA - 1].y == cD[cA].y) {
                    ak(cu.style, {borderTopWidth: "1px", width: Math.abs(cD[cA].x - cD[cA - 1].x) + "px", height: 0 + "px", left: (Math.min(cD[cA].x, cD[cA - 1].x)) + "px", top: (cD[cA].y) + "px"});
                    if (cA == 1) {
                        var cv = cD[cA - 1].x > cD[cA].x ? (cD[cA - 1].x - 5) : cD[cA - 1].x;
                        var cz = cw.createImage("arrow_" + (cD[cA - 1].x > cD[cA].x ? an[66] : an[104]), {color: cy, position: [cv, cD[cA].y - 4]});
                        ak(cz.style, {position: an[189], fontSize: "0px"});
                        cE.push(cz);
                        this.div.appendChild(cz)
                    }
                }
            }
            this.div.appendChild(cu);
            cE.push(cu)
        }
        return cE
    }, scrollTo: function (cv, cu) {
        cu = cu || [0, 0];
        this.container.scrollLeft = cv[0] * this.zoom - cu[0];
        this.container.scrollTop = cv[1] * this.zoom - cu[1]
    }, zoomIn: function (cv) {
        var cw = this.zoom, cu = [(cv[0] + (this.container.scrollLeft || 0)) / cw, (cv[1] + (this.container.scrollTop || 0)) / cw];
        this.zoom *= this.zoomUnit;
        this.draw();
        this.scrollTo(cu, cv)
    }, zoomOut: function (cv) {
        var cw = this.zoom, cu = [(cv[0] + (this.container.scrollLeft || 0)) / cw, (cv[1] + (this.container.scrollTop || 0)) / cw];
        this.zoom /= this.zoomUnit;
        this.draw();
        this.scrollTo(cu, cv)
    }});
    function aO(cw, cv) {
        if (!cw) {
            return
        }
        for (var cu = cw.length - 1; cu >= 0; cu--) {
            if (cw[cu] == cv) {
                return cu
            }
        }
    }

    ak(bO, {indexOf: aO});
    function b5() {
        this.selectedElements = []
    }

    b5.prototype = new L();
    ak(b5.prototype, {initialize: function (cw, cu) {
        if (cw.disableSelect) {
            return false
        }
        this.gantt = cw;
        var cv = cw.elementType;
        ak(cw, {getFocusElement: cw["getFocus" + cv] = m(this, this.getFocusElement), getSelectedElements: cw[an[65] + cv + "s"] = m(this, this.getSelectedElements), setSelectedElement: cw[an[64] + cv] = m(this, this.setSelectedElement), clearSelectedElement: cw[an[63] + cv] = m(this, this.clearSelectedElement)});
        this.listeners = [f(cw, cv.toLowerCase() + an[182], this, this.onElementClick), f(cw, an[103], this, this.onGanttInit)];
        return true
    }, onGanttInit: function () {
        var cu = this.gantt, cw = cu.getData(), cv = cu.elementType.toLowerCase();
        this.listeners = this.listeners.concat([f(cw, cv + an[161], this, this.onRegister), f(cw, cv + an[160], this, this.onUnRegister), f(cw, an[153] + cv + an[151], this, this.onElementChange)])
    }, onRegister: function (cu) {
        if (cu.Selected) {
            this.selectedElements.push(cu)
        }
    }, onUnRegister: function (cu) {
        if (cu.Selected) {
            A(this.selectedElements, cu)
        }
    }, onElementClick: function (cw, cx) {
        if (!cx || cb(cx) == 2) {
            if (!cw.Selected) {
                this.clearSelectedElement();
                cw.setProperty(an[74], true)
            }
        } else {
            var cz = this.selectedElements;
            if (cx.shiftKey && cz[0]) {
                var cy = cz[cz.length - 1];
                var cu = this.gantt.data.compareElement(cy, cw) > 0;
                var cv = cy;
                while (cv) {
                    cv = cu ? cv.getNextView() : cv.getPreviousView();
                    if (cv) {
                        cv.setProperty(an[74], true)
                    }
                    if (cv == cw) {
                        return
                    }
                }
            } else {
                if (cx.ctrlKey) {
                    cw.setProperty(an[74], !cw.Selected)
                } else {
                    this.clearSelectedElement();
                    cw.setProperty(an[74], true)
                }
            }
        }
    }, onElementChange: function (cv, cu, cx) {
        if (cu == an[74]) {
            var cw = this.gantt.elementType.toLowerCase();
            cg(this.gantt, cw + (cx ? "focus" : "blur"), [cv]);
            if (cx) {
                this.selectedElements.push(cv)
            } else {
                A(this.selectedElements, cv)
            }
        }
    }, getFocusElement: function () {
        return this.selectedElements[this.selectedElements.length - 1]
    }, getSelectedElements: function () {
        return this.selectedElements
    }, setSelectedElement: function (cu) {
        if (this.selectedElements && this.selectedElements[0] == cu && !this.selectedElements[1]) {
            return
        }
        this.clearSelectedElement();
        cu.setProperty(an[74], true)
    }, clearSelectedElement: function () {
        var cu, cv = this.selectedElements;
        while (cu = cv.pop()) {
            cu.setProperty(an[74], false)
        }
    }, remove: function () {
        var cv = this.gantt;
        delete cv.getFocusElement;
        delete cv.getSelectedElements;
        delete cv.setSelectedElement;
        delete cv.clearSelectedElement;
        var cu = cv.elementType;
        delete cv["getFocus" + cu];
        delete cv[an[65] + cu + "s"];
        delete cv[an[64] + cu];
        delete cv[an[63] + cu];
        this.selectedElements = [];
        L.prototype.remove.apply(this, arguments)
    }});
    function ap(cu) {
        this.fieldNames = cu
    }

    ap.prototype = new L();
    ak(ap.prototype, {initialize: function (cw) {
        if (!cw.getLayout) {
            return false
        }
        var cu = cw.getLayout("listHead"), cz = cw.container.ownerDocument;
        if (!cu) {
            return false
        }
        var cy = this.fields = aK(cw.elementType, this.fieldNames), cB = cz.createElement(an[84]);
        ak(this, {container: cu, gantt: cw, div: cB, fieldIndex: -1});
        ak(cB, {bgColor: cw.borderColor, border: 0, cellSpacing: 1, cellPadding: 0});
        ak(cB.style, {fontSize: "0px", height: (cw.headHeight + 2) + "px", left: "-2px", top: "-1px", position: an[188], tableLayout: "fixed"});
        var cC = this.div.insertRow(-1);
        ak(cC, {bgColor: cw.headBgColor});
        var cA = cC.insertCell(-1);
        cA.width = 1;
        this.widths = [];
        for (var cx = 0; cx < cy.length; cx++) {
            cA = cC.insertCell(-1);
            cA.vAlign = "top";
            var cv = cy[cx].width * 1;
            ak(cA.style, {overflow: an[190], fontSize: cw.fontSize + "px", whiteSpace: (document.compatMode ? "nowrap" : "pre")});
            cy[cx].showHead(cA, this);
            this.widths.push(cv)
        }
        cu.appendChild(this.div);
        this.listeners = [f(cw, an[103], this, this.setWidth), bz(cB, m(this, this.onDrag)), f(cB, an[181], this, this.onMouseMove), f(cu, an[100], this, this.onScroll)];
        return true
    }, onScroll: function () {
        cg(this.gantt, an[79], [parseInt(this.div.style.left)])
    }, setWidth: function () {
        var cy = this.div, cu = cy.rows[0].cells, cw = 0, cx = this.widths;
        for (var cv = 0;
             cv < cx.length; cv++) {
            cu[cv + 1].width = cx[cv];
            cw += cx[cv] * 1 + 1
        }
        cy.width = cw + 3;
        cg(this.gantt, an[78], [this.widths])
    }, onMouseMove: function (cy) {
        var cu = -1, cx = cd(cy, this.div)[0] - 3, cw = this.widths;
        for (var cv = 0; cv < cw.length; cv++) {
            cx -= cw[cv];
            if (Math.abs(cx) < 5) {
                cu = cv;
                break
            }
            if (cx < 0) {
                break
            }
        }
        this.fieldIndex = cu;
        D(this.div, cu < 0 ? an[62] : an[61])
    }, onDrag: function (cx, cu, cw) {
        if (cw == an[179]) {
            D(this.div, an[61]);
            this.dragNum = this.fieldIndex;
            this.dragWidth = this.widths[this.fieldIndex];
            return
        }
        var cv = Math.max(this.dragWidth + cu[0] - cx[0], 20);
        this.widths[this.dragNum] = cv;
        this.setWidth();
        if (cw == "end") {
            D(this.div, an[62])
        }
    }});
    function t() {
    }

    t.prototype = new L();
    ak(t.prototype, {initialize: function (cw) {
        var cv, cy = cw.container.ownerDocument;
        if (cw.disableHelpLink || !cw.getLayout || !(cv = cw.getLayout("head"))) {
            return false
        }
        var cx = this.div = cy.createElement("div");
        ak(cx.style, {position: an[189], backgroundColor: cw.headBgColor, width: "16px", right: "0px", top: "0px", textAlign: an[66], padding: "3px"});
        var cu = cy.createElement("a");
        ak(cu.style, {fontSize: "24px", color: an[60], textDecoration: an[174]});
        cu.appendChild(cy.createTextNode("?"));
        cu.title = (window.SFNS && window.SFNS.vinfo) ? ac(ae(window.SFNS.vinfo.time), "s") : "";
        ak(cu, {href: an[59], target: "_blank"});
        cx.appendChild(cu);
        cv.appendChild(cx);
        return true
    }});
    function bK() {
        this.panels = {}
    }

    bK.prototype = new L();
    ak(bK.prototype, {initialize: function (cv, cu) {
        this.gantt = cv;
        this.spaceWidth = cv.spaceWidth;
        cv.getLayout = m(this, this.getLayout);
        cv.collapseMap = cv.collapseChart = m(this, this.collapseChart);
        cv.collapseList = m(this, this.collapseList);
        cv.isListShow = m(this, this.isListShow);
        cv.isChartShow = m(this, this.isChartShow);
        cv.setListWidth = m(this, this.setListWidth);
        this.createLayout(cu);
        this.listeners = [f(cv, an[103], this, this.onColumnResize), f(cv, "heightchange", this, this.onHeightChange), f(cv, an[101], this, this.onGanttResize)];
        return true
    }, getLayout: function (cu) {
        return this.panels[cu]
    }, createLayout: function (cv) {
        var cx = this.gantt, cF = this.panels, cJ = cv.ownerDocument;
        var cH = cx.listWidth * 1, cz = cx.getViewSize()[0] - cH - cx.idCellWidth;
        if (cH <= 0 || cz <= 0) {
            this.spaceWidth = 10
        }
        if (cx.headHeight > 0) {
            var cu = cF.head = cJ.createElement("div");
            D(cA, an[62]);
            b3(cu);
            ak(cu.style, {position: an[189], zIndex: 100, left: "0px", top: "0px", width: an[187], height: cx.headHeight + "px", backgroundColor: cx.headBgColor, borderBottom: an[91] + cx.borderColor});
            if (cH > 0) {
                var cA = cF.listHead = cJ.createElement("div");
                ak(cA.style, {position: an[189], top: "0px", left: cx.idCellWidth + "px", height: cx.headHeight + "px", overflow: an[190], borderLeft: an[91] + cx.borderColor});
                cu.appendChild(cA)
            }
            if (cz > 0) {
                var cy = cF.mapHead = cJ.createElement("div");
                ak(cy.style, {position: an[189], top: "0px", height: cx.headHeight + "px", top: "0px", left: "0px", width: an[187], overflowX: an[190], borderLeft: an[91] + cx.borderColor, borderRight: an[91] + cx.borderColor});
                cu.appendChild(cy)
            }
            cv.appendChild(cu)
        }
        var cG = cF.bodyScroll = cJ.createElement("div");
        ak(cG.style, {position: an[189], zIndex: 100, overflowY: an[190], overflowX: an[190], left: "0px", top: cx.headHeight + 1 + "px", width: an[187], height: (cx.getContainer().offsetHeight - cx.headHeight - cx.footHeight) + "px"});
        var cw = cF.body = cJ.createElement("div");
        if (cx.idCellWidth > 0) {
            var cD = cF.listId = cJ.createElement("div");
            ak(cD.style, {position: an[189], width: cx.idCellWidth + "px", overflow: an[190]});
            cw.appendChild(cD)
        }
        if (cH > 0) {
            var cE = cF.listBody = cJ.createElement("div");
            ak(cE.style, {position: an[189], left: cx.idCellWidth + "px", overflow: an[190], borderLeft: an[91] + cx.borderColor, backgroundColor: an[83]});
            cw.appendChild(cE)
        }
        if (cz > 0) {
            var cB = cF.mapBody = cJ.createElement("div");
            b3(cB);
            if (cx.setContextMenu) {
                cx.setContextMenu(cB, function (cL) {
                    cL.type = "chart";
                    return true
                })
            }
            ak(cB.style, {position: an[189], overflow: an[190]});
            cw.appendChild(cB)
        }
        cG.appendChild(cw);
        cv.appendChild(cG);
        if (cx.footHeight > 0) {
            var cC = cF.foot = cJ.createElement("div");
            ak(cC.style, {position: an[189], zIndex: 100, left: "0px", bottom: "0px", width: an[187], height: cx.footHeight + "px", backgroundColor: cx.bottomBgColor});
            if (cH > 0) {
                var cK = cF.listFoot = cJ.createElement("div");
                ak(cK.style, {position: an[189], left: "0px", height: an[187], bottom: "0px", fontSize: "0px", overflow: an[190]});
                cC.appendChild(cK)
            }
            if (cz > 0) {
                var cI = cF.mapFoot = cJ.createElement("div");
                ak(cI.style, {position: an[189], height: an[187], bottom: "0px", fontSize: "0px", overflow: an[190]});
                cC.appendChild(cI)
            }
            cv.appendChild(cC)
        }
        return true
    }, onColumnResize: function () {
        var cA = this.spaceWidth, cx = 0, cy = this.panels, cv = this.gantt, cB = cv.idCellWidth, cz;
        var cu = this.listHidden ? an[174] : "";
        if (cy.listHead) {
            cy.listHead.style.display = cu
        }
        if (cy.listBody) {
            cy.listBody.style.display = cu
        }
        if (cy.listFoot) {
            cy.listFoot.style.display = cu
        }
        var cC = this.mapHidden ? an[174] : "";
        if (cy.mapHead) {
            cy.mapHead.style.display = cC
        }
        if (cy.mapBody) {
            cy.mapBody.style.display = cC
        }
        if (cy.mapFoot) {
            cy.mapFoot.style.display = cC
        }
        if (!cy.listBody || !cy.mapBody) {
            cA = 0
        }
        if (!cy.listBody || this.listHidden) {
            cz = 0
        } else {
            if (!cy.mapBody || this.mapHidden) {
                cz = cy.bodyScroll.clientWidth - cB - cA
            } else {
                cz = cv.listWidth * 1;
                cz = Math.max(cz, 10)
            }
        }
        var cw = cy.bodyScroll.clientWidth - cz - cB - cA;
        if (cy.mapBody && cw - cx < 10) {
            cz += cw - cx - 10;
            cw = 10 + cx
        }
        if (!this.listHidden) {
            if (cy.listBody) {
                cy.listBody.style.width = cz + "px"
            }
            if (cy.listHead) {
                cy.listHead.style.width = cz + "px"
            }
            if (cy.listFoot) {
                cy.listFoot.style.width = cz + cB + "px"
            }
        }
        if (!this.mapHidden) {
            if (cy.mapHead) {
                cy.mapHead.style.left = cB + cz + cA + "px"
            }
            if (cy.mapHead) {
                cy.mapHead.style.width = cw - cx + "px"
            }
            if (cy.mapBody) {
                cy.mapBody.style.left = cz + cA + cB + "px"
            }
            if (cy.mapBody) {
                cy.mapBody.style.width = cw - cx + "px"
            }
            if (cy.mapFoot) {
                cy.mapFoot.style.left = cz + cA + cB + "px"
            }
            if (cy.mapFoot) {
                cy.mapFoot.style.width = cw - cx + "px"
            }
        }
        cg(cv, an[93])
    }, onGanttResize: function (cv) {
        var cu = this.gantt;
        this.panels.bodyScroll.style.height = (cv[1] - cu.headHeight - cu.footHeight) + "px";
        this.onColumnResize()
    }, collapseList: function () {
        if (!this.listHidden && this.mapHidden) {
            this.collapseChart()
        }
        this.listHidden = !this.listHidden;
        this.onColumnResize()
    }, collapseChart: function () {
        if (!this.mapHidden && this.listHidden) {
            this.collapseList()
        }
        this.mapHidden = !this.mapHidden;
        this.onColumnResize()
    }, isListShow: function () {
        return !this.listHidden
    }, isChartShow: function () {
        return !this.mapHidden
    }, setListWidth: function (cv) {
        var cu = this.gantt;
        cv = Math.max(cv, 0);
        cv = Math.min(cv, this.panels.bodyScroll.clientWidth - cu.idCellWidth - 10);
        cu.listWidth = cv;
        this.onColumnResize()
    }, onHeightChange: function (cw) {
        var cv = this.panels, cu = (cw + 64) + "px";
        if (cv.mapBody) {
            cv.mapBody.style.height = cu
        } else {
            if (cv.body) {
                cv.body.style.height = cu
            }
        }
    }, remove: function () {
        var cu = this.gantt;
        delete cu.getLayout;
        delete cu.collapseMap;
        delete cu.collapseList;
        delete cu.isListShow;
        delete cu.isChartShow;
        delete cu.setListWidth;
        var cv = this.panels;
        for (var cw in cv) {
            d(cv[cw])
        }
        this.panels = {};
        L.prototype.remove.apply(this, arguments)
    }});
    function G() {
    }

    G.prototype = new L();
    ak(G.prototype, {initialize: function (cv) {
        if (cv.disableLinksMap || !cv.getMapPanel) {
            return false
        }
        bG(this, cv.config.getConfigObj(an[58]));
        bG(this, cv.config.getConfigObj("SFGanttLinksMap"));
        ak(this, {gantt: cv, arrayPadding: 10, linkStyles: cv.config.getConfigObj(an[72])});
        this.taskPadding = cv.itemHeight - this.taskHeight;
        var cu = this.div = cv.container.ownerDocument.createElement("div");
        ak(cu.style, {position: an[189], fontSize: "0px", top: "-1px", left: "0px", zIndex: 200});
        cv.getMapPanel().appendChild(cu);
        this.linkNoticeFields = this.linkNoticeFields ? aF(this.linkNoticeFields.split(",")) : null;
        this.listeners = [f(cv, an[103], this, this.onInit), f(cv, an[92], this, this.onScale), f(cv, an[57], this, this.drawLinks), f(cv, an[56], this, this.clearLinks), f(cv, an[70], this, this.updateLinks), f(cv, an[55], this, this.onScale), f(cu, an[82], this, this.onLinkClick), f(cu, an[81], this, this.onLinkDblClick)];
        if (this.linkNoticeFields && cv.setTooltip) {
            cv.setTooltip(cu, m(this, this.getTooltip))
        }
        this.inited = false;
        this.onInit();
        return true
    }, onInit: function () {
        var cu = this.gantt.getData();
        if (!cu || this.inited) {
            return
        }
        this.listeners = this.listeners.concat([f(cu, an[164], this, this.drawLink), f(cu, an[163], this, this.clearLink), f(cu, an[107], this, this.updateLink), f(cu, an[108], this, this.onScale), f(cu, an[110], this, this.onScale)]);
        this.inited = true;
        this.refresh()
    }, onScale: function () {
        var cv = this.gantt.getViewElements();
        if (!cv) {
            return
        }
        for (var cu = 0; cu < cv.length; cu++) {
            this.clearLinks(cv[cu], 0)
        }
        this.changed = true;
        this.idleTimes = 0;
        if (!this.gantt.forPrint) {
            if (!this.refreshTimeout) {
                this.refreshTimeout = window.setInterval(m(this, this.onTime), 100)
            }
        } else {
            this.refresh()
        }
    }, onTime: function () {
        if (!this.changed) {
            this.idleTimes++;
            if (this.idleTimes > 4) {
                window.clearInterval(this.refreshTimeout);
                delete this.refreshTimeout;
                this.refresh()
            }
            return
        }
        this.changed = false
    }, refresh: function () {
        var cv = this.gantt.getViewElements();
        if (!cv) {
            return
        }
        if (this.refreshTimeout) {
            window.clearTimeout(this.refreshTimeout)
        }
        this.refreshTimeout = null;
        for (var cu = 0; cu < cv.length; cu++) {
            this.drawLinks(cv[cu], cu)
        }
    }, drawLinks: function (cv, cw) {
        var cu = cv.getPredecessorLinks();
        for (var cx = 0; cx < cu.length;
             cx++) {
            this.drawLink(cu[cx], true)
        }
        var cu = cv.getSuccessorLinks();
        for (var cx = 0; cx < cu.length; cx++) {
            this.drawLink(cu[cx], false)
        }
    }, clearLinks: function (cv, cw) {
        var cu = cv.getPredecessorLinks();
        for (var cx = 0; cx < cu.length; cx++) {
            this.clearLink(cu[cx])
        }
        var cu = cv.getSuccessorLinks();
        for (var cx = 0; cx < cu.length; cx++) {
            this.clearLink(cu[cx])
        }
    }, updateLinks: function (cu, cz) {
        var cw = false, cx = false;
        for (var cv = 0; cv < cz.length; cv++) {
            var cy = cz[cv];
            if (cy == an[136]) {
                cw = true;
                break
            }
            if (!cx && (cy == an[149] || cy == an[150])) {
                cx = true
            }
        }
        if (cw) {
            this.onScale()
        } else {
            if (cx) {
                this.clearLinks(cu, 0);
                this.drawLinks(cu)
            }
        }
    }, updateLink: function (cu) {
        if (this.gantt.getElementDrawObj(cu)) {
            this.clearLink(cu);
            this.drawLink(cu)
        }
    }, drawLink: function (cE) {
        if (this.refreshTimeout) {
            return
        }
        var cS = this.gantt, cA = cE.PredecessorTask, cP = cE.SuccessorTask, cW = cS.getScale();
        if (cS.getElementDrawObj(cE).linkImg) {
            return
        }
        if (!cW || cA.isHidden() || cP.isHidden()) {
            return
        }
        var cF = cS.getElementDrawObj(cE);
        if (!cA.Start || !cA.Finish || !cP.Start || !cP.Finish) {
            return
        }
        var cD = [cS.getMapPanelPosition(cA.Start), cS.getElementViewTop(cA) + 2];
        var cy = [cS.getMapPanelPosition(cP.Start), cS.getElementViewTop(cP) + 2];
        var cQ;
        if (cS.getElementHeight(cA) == 0 && (cQ = cS.getElementHeight(cA) - cS.getElementDrawObj(cA).height) != 0) {
            cD[1] += cQ
        }
        if (cS.getElementHeight(cP) == 0 && (cQ = cS.getElementHeight(cP) - cS.getElementDrawObj(cP).height) != 0) {
            cy[1] += cQ
        }
        var cu = (cA.Finish - cA.Start) / cW;
        var cB = (cP.Finish - cP.Start) / cW;
        var cv = Math.ceil(this.taskPadding / 2 + this.taskHeight * this.trackNormalTopScale) - 1, cL = Math.ceil(this.taskHeight * (cS.isTracking ? this.trackNormalHeightScale : 1)), cK = Math.ceil(cv + cL / 2);
        var cJ, cI, cV, cO = [], cU = {}, cx = {borderStyle: an[177]}, cM = an[60];
        var cw = cE.ClassName;
        cw = cw ? cw : this.linkStyle;
        var cT = this.linkStyles[cw];
        if (cT) {
            if (cT.color) {
                cM = cT.color
            }
            if (cT.lineStyle) {
                cx = cT.lineStyle
            }
        }
        cx.borderColor = cM;
        switch (parseInt(cE.Type)) {
            case 0:
                cJ = an[104];
                cI = [5, 9];
                var cz = cD[0] + cu;
                var cR = cD[1] + cK;
                var cH = cy[0] + cB;
                var cN = cy[1] + cK;
                var cC = Math.max(cz, cH) + this.arrayPadding;
                cO.push([cz, cR]);
                cO.push([cC, cR]);
                cO.push([cC, cN]);
                cO.push([cH, cN]);
                cV = [cH, cN - Math.floor(cI[1] / 2)];
                break;
            case 2:
                cJ = an[104];
                cI = [5, 9];
                var cz = cD[0];
                var cR = cD[1] + cK;
                var cH = cy[0] + cB + cI[0];
                var cN = cy[1] + cK;
                cO.push([cz, cR]);
                cO.push([cz - this.arrayPadding, cR]);
                cO.push([cz - this.arrayPadding, cy[1]]);
                cO.push([cy[0] + cB + this.arrayPadding, cy[1]]);
                cO.push([cy[0] + cB + this.arrayPadding, cN]);
                cO.push([cH, cN]);
                cV = [cH - cI[0], cN - Math.floor(cI[0] / 2)];
                break;
            case 3:
                cJ = an[66];
                cI = [5, 9];
                var cz = cD[0];
                var cR = cD[1] + cK;
                var cH = cy[0];
                var cN = cy[1] + cK;
                var cC = Math.min(cz, cH) - this.arrayPadding;
                cO.push([cz, cR]);
                cO.push([cC, cR]);
                cO.push([cC, cN]);
                cO.push([cH, cN]);
                cV = [cH - cI[0], cN - Math.floor(cI[1] / 2)];
                break;
            case 1:
            default:
                var cz = cD[0] + cu;
                var cR = cD[1] + cK;
                if (cA.Finish <= cP.Start && cy[1] != cD[1]) {
                    cJ = cD[1] > cy[1] ? "up" : "down";
                    cI = [9, 5];
                    var cH = cy[0];
                    if (cA.Finish.valueOf() == cA.Start.valueOf()) {
                        cR -= 3
                    }
                    var cN = cD[1] > cy[1] ? (cy[1] + (cS.itemHeight - cv - cL) + this.taskHeight) : (cy[1] + cv - cI[1]);
                    if (cP.Finish.valueOf() - cP.Start.valueOf() == 0) {
                        cN -= 3
                    }
                    if (cP.Finish.valueOf() - cP.Start.valueOf() != 0 && cA.Finish.valueOf() != cA.Start.valueOf()) {
                        cH = Math.max(cH, cz + 5)
                    }
                    cO.push([cz, cR]);
                    cO.push([cH, cR]);
                    cO.push([cH, cN]);
                    cV = [(cH - Math.floor(cI[0] / 2) - 1), cN]
                } else {
                    cJ = an[66];
                    cI = [5, 9];
                    var cH = cy[0] - cI[0];
                    var cN = cy[1] + cK;
                    cO.push([cz, cR]);
                    if (cy[1] != cD[1]) {
                        cO.push([cz + this.arrayPadding, cR]);
                        cO.push([cz + this.arrayPadding, cy[1]]);
                        cO.push([cy[0] - this.arrayPadding, cy[1]]);
                        cO.push([cy[0] - this.arrayPadding, cN])
                    }
                    cO.push([cH, cN]);
                    cV = [cH, cN - Math.floor(cI[1] / 2)]
                }
                break
        }
        cF.linkPaths = this.getLinkPaths(cO, cx, cE);
        var cG = cS.createImage("arrow_" + cJ, {color: cM, position: cV});
        ak(cG.style, cU);
        ak(cG.style, {position: an[189], fontSize: "0px"});
        cF.linkImg = cG;
        cG._link = cE;
        this.div.appendChild(cG)
    }, getLinkPaths: function (cw, cv, cx) {
        var cz = [], cy = this.gantt.container.ownerDocument;
        for (var cu = 1; cu < cw.length; cu++) {
            var cA = cy.createElement("div");
            ak(cA.style, cv);
            ak(cA.style, {position: an[189], fontSize: "0px", borderWidth: "0px"});
            if (cw[cu - 1][0] == cw[cu][0]) {
                ak(cA.style, {borderRightWidth: "1px", height: Math.abs(cw[cu][1] - cw[cu - 1][1]) + "px", width: 0 + "px", left: (cw[cu][0] - 1) + "px", top: (Math.min(cw[cu][1], cw[cu - 1][1])) + "px"})
            } else {
                if (cw[cu - 1][1] == cw[cu][1]) {
                    ak(cA.style, {borderTopWidth: "1px", width: Math.abs(cw[cu][0] - cw[cu - 1][0]) + "px", height: 0 + "px", left: (Math.min(cw[cu][0], cw[cu - 1][0])) + "px", top: (cw[cu][1]) + "px"})
                }
            }
            this.div.appendChild(cA);
            cA.aaa = "bbb";
            cA._link = cx;
            cz.push(cA)
        }
        return cz
    }, clearLink: function (cv) {
        var cu = this.gantt.getElementDrawObj(cv);
        if (!cu) {
            return
        }
        if (cu.linkImg) {
            d(cu.linkImg);
            cu.linkImg._link = null;
            cu.linkImg = null
        }
        if (cu.linkPaths) {
            var cw;
            while (cw = cu.linkPaths.pop()) {
                cw._link = null;
                d(cw)
            }
            cu.linkPaths = null
        }
        this.gantt.removeElementDrawObj(cv)
    }, onLinkClick: function (cv) {
        var cu = cv.target._link;
        if (!cu) {
            return
        }
        cg(this.gantt, "linkclick", [cu, cv])
    }, onLinkDblClick: function (cv) {
        var cu = cv.target._link;
        if (!cu) {
            return
        }
        i(cv);
        cg(this.gantt, "linkdblclick", [cu])
    }, getTooltip: function (cy, cA) {
        var cx = cA.target._link, cz = this.gantt.container.ownerDocument;
        if (!cx) {
            return
        }
        if (cy.bindObject == cx) {
            return false
        }
        var cw = cz.createElement(an[84]);
        cw.style.fontSize = an[67];
        var cB = cw.insertRow(-1);
        var cu = cB.insertCell(-1);
        ak(cu, {align: an[90], colSpan: 2, noWrap: true});
        cu.appendChild(cz.createTextNode(this.tooltipTitle.link));
        for (var cv = 0; cv < this.linkNoticeFields.length; cv++) {
            cB = cw.insertRow(-1);
            cu = cB.insertCell(-1);
            ak(cu, {align: an[104], noWrap: true});
            this.linkNoticeFields[cv].showHead(cu);
            cu = cB.insertCell(-1);
            ak(cu, {align: an[104], noWrap: true});
            this.linkNoticeFields[cv].showBody(cu, cx, this)
        }
        cy.bindObject = cx;
        cy.setContent(cw);
        return true
    }, remove: function () {
        this.onScale();
        if (this.refreshTimeout) {
            window.clearInterval(this.refreshTimeout)
        }
        L.prototype.remove.apply(this, arguments)
    }, depose: function () {
        if (this.delayTimeout) {
            window.clearTimeout(this.delayTimeout)
        }
        d(this.div);
        ck(this);
        for (var cu in this) {
            this[cu] = null
        }
    }});
    function aD(cv, cu) {
        this.time = cv ? ae(cv) : new Date();
        this.progressType = "normal";
        ak(this, {vertexSize: [11, 11], lineColor: "red", lineWeight: 1});
        ak(this, cu)
    }

    aD.prototype = new L();
    ak(aD.prototype, {initialize: function (cu) {
        if (!cu.getMapPanel) {
            return false
        }
        bG(this, cu.config.getConfigObj("SFGanttProgressLine"));
        if (!aD.listIndex) {
            aD.listIndex = 0
        }
        this.proTag = "progressLine_" + (aD.listIndex++);
        ak(this, {gantt: cu, taskHeight: 12, lineStyle: cu.config.getConfigObj("SFGanttProgressLine/lineStyle")});
        this.taskPadding = cu.itemHeight - this.taskHeight;
        var cv = this.div = cu.container.ownerDocument.createElement("div");
        ak(cv.style, {position: an[189], fontSize: "0px", top: "-1px", left: "0px", zIndex: 190});
        cu.getMapPanel().appendChild(cv);
        this.listeners = [f(cu, an[92], this, this.onScale), f(cu, an[57], this, this.drawLine), f(cu, an[56], this, this.clearLine), f(cu, an[70], this, this.updateLine), f(cu, an[55], this, this.onScale)];
        if (this.lineNoticeFields && cu.setTooltip) {
            cu.setTooltip(cv, m(this, this.getTooltip))
        }
        this.onScale();
        return true
    }, getGraphics: function () {
        var cu = [bD, cr, bg, aq];
        for (var cv = 0; cv < cu.length; cv++) {
            if (cu[cv].isSupport()) {
                return new cu[cv]()
            }
        }
        return new c(true)
    }, onScale: function () {
        var cv = this.gantt.getViewElements();
        if (!cv) {
            return
        }
        for (var cu = 0; cu < cv.length; cu++) {
            this.clearLine(cv[cu], 0)
        }
        if (!this.refreshTimeout) {
            this.refreshTimeout = window.setInterval(m(this, this.onTime), 100)
        }
        this.changed = true;
        this.idleTimes = 0
    }, onTime: function () {
        if (!this.changed) {
            this.idleTimes++;
            if (this.idleTimes > 4) {
                window.clearInterval(this.refreshTimeout);
                delete this.refreshTimeout;
                this.refresh()
            }
            return
        }
        this.changed = false
    }, refresh: function () {
        var cv = this.gantt.getViewElements();
        if (!cv) {
            return
        }
        if (this.refreshTimeout) {
            window.clearTimeout(this.refreshTimeout)
        }
        this.refreshTimeout = null;
        for (var cu = 0; cu < cv.length; cu++) {
            this.drawLine(cv[cu], cu)
        }
    }, hasVertex: function (cu) {
        return cu.Start && cu.Finish && cu.Start <= this.time && (cu.PercentComplete != 100 || (cu.Finish >= this.time))
    }, getVertexTime: function (cu) {
        var cv = cu.PercentComplete ? cu.PercentComplete : 0, cw = cu.Start.valueOf() + (cu.Finish - cu.Start) * cv / 100;
        switch (this.progressType) {
            case"earlier":
                cw = Math.min(cw, this.time);
                break;
            case"later":
                cw = Math.max(cw, this.time);
                break
        }
        return cw
    }, drawLine: function (cw) {
        if (this.refreshTimeout) {
            return
        }
        var cx = this.gantt, cy = cx.getScale();
        if (!cy) {
            return
        }
        var cv = cx.getElementDrawObj(cw);
        if (cv[this.proTag]) {
            return
        }
        if (!this.hasVertex(cw)) {
            return
        }
        var cA = cw.getPreviousView();
        while (cA) {
            if (this.hasVertex(cA)) {
                break
            }
            cA = cA.getPreviousView()
        }
        var cu, cE;
        if (!cA) {
            cu = [cx.getMapPanelPosition(this.time), 0]
        } else {
            cu = [cx.getMapPanelPosition(this.getVertexTime(cA)), cx.getElementViewTop(cA) + cx.getElementDrawObj(cA).height / 2]
        }
        var cE = [cx.getMapPanelPosition(this.getVertexTime(cw)), cx.getElementViewTop(cw) + cx.getElementDrawObj(cw).height / 2];
        var cB = this.vertexSize, cC = cx.createImage(this.vertexImg ? this.vertexImg : "task_head_4", {color: this.vertexColor ? this.vertexColor : an[54], size: this.vertexSize});
        ak(cC.style, {position: an[189], fontSize: "0px", left: (cE[0] - Math.floor(cB[0] / 2)) + "px", top: (cE[1] - Math.floor(cB[1] / 2)) + "px"});
        cv[this.proTag] = cC;
        this.div.appendChild(cC);
        var cD = this.getGraphics();
        cD.setLineColor(this.lineColor);
        cD.setLineWeight(this.lineWeight);
        cv[this.proTag + "_l"] = cD.div;
        var cz = {x: Math.min(cu[0], cE[0]), y: Math.min(cu[1], cE[1])};
        cD.setPosition(cz);
        cD.start({x: 0, y: 0}, 1, {x: Math.abs(cu[0] - cE[0]), y: Math.abs(cu[1] - cE[1])});
        cD.moveTo({x: cu[0] - cz.x, y: cu[1] - cz.y});
        cD.lineTo({x: cE[0] - cz.x, y: cE[1] - cz.y});
        cD.finish();
        cD._task = cw;
        this.div.appendChild(cD.div)
    }, clearLine: function (cu, cw) {
        var cv = this.gantt.getElementDrawObj(cu);
        if (!cv) {
            return
        }
        if (cv[this.proTag]) {
            d(cv[this.proTag]);
            delete cv[this.proTag];
            d(cv[this.proTag + "_l"]);
            delete cv[this.proTag + "_l"]
        }
    }, updateLine: function (cv, cz) {
        var cx = false, cA = false;
        for (var cw = 0; cw < cz.length; cw++) {
            var cy = cz[cw];
            if (cy == an[136]) {
                cx = true;
                break
            }
            if (!cA && (cy == an[149] || cy == an[150] || cy == an[143])) {
                cA = true
            }
        }
        if (cx) {
            this.onScale()
        } else {
            if (cA) {
                var cu = cv.getNextView();
                while (cu) {
                    if (this.hasVertex(cu)) {
                        break
                    }
                    cu = cu.getNextView()
                }
                if (cu) {
                    this.clearLine(cu);
                    this.drawLine(cu)
                }
                this.clearLine(cv);
                this.drawLine(cv)
            }
        }
    }, remove: function () {
        this.onScale();
        if (this.refreshTimeout) {
            window.clearInterval(this.refreshTimeout)
        }
        delete this.refreshTimeout;
        d(this.div);
        L.prototype.remove.apply(this, arguments)
    }, depose: function () {
        for (var cu in this) {
            this[cu] = null
        }
    }});
    function aV() {
    }

    aV.prototype = new L();
    ak(aV.prototype, {initialize: function (cw, cu) {
        if (cw.disableListScrollNotice || !cw.getLayout) {
            return false
        }
        bG(this, cw.config.getConfigObj("SFGanttListScrollNotice"));
        var cv = cw.elementType;
        this.fields = this[cv.toLowerCase() + "Fields"] ? aK(cv, this[cv.toLowerCase() + "Fields"].split(",")) : null;
        this.gantt = cw;
        var cx = this.div = cu.ownerDocument.createElement("div");
        ak(cx.style, {position: an[189], zIndex: 400, display: an[174]});
        ak(cx.style, this.divStyle);
        cu.appendChild(cx);
        this.listeners = [f(cw, an[100], this, this.onScroll), f(cw, an[101], this, this.onResize)];
        this.onResize();
        return true
    }, onScroll: function (cv, cu) {
        if (!cu || !cu.spanElements[1]) {
            return
        }
        if (!this.timeout) {
            this.timeout = window.setInterval(m(this, this.onTime), 64)
        }
        this.scrollObj = cu;
        this.changed = true;
        this.idleTimes = 0
    }, onTime: function () {
        if (!this.changed) {
            this.idleTimes++;
            if (this.idleTimes > 16) {
                this.div.style.display = an[174];
                window.clearInterval(this.timeout);
                delete this.timeout
            }
            return
        }
        this.changed = false;
        var cv = this.scrollObj.spanElements[1], cA = this.fields.length, cy = this.div.ownerDocument;
        if (!this.div.firstChild) {
            var cx = cy.createElement(an[84]);
            this.div.appendChild(cx);
            cx.width = 160;
            cx.style.fontSize = an[67];
            for (var cw = 0; cw < cA; cw++) {
                var cz = cx.insertRow(-1);
                var cu = cz.insertCell(-1);
                cu.width = 60;
                this.fields[cw].showHead(cu, this);
                var cu = cz.insertCell(-1);
                if (cw == 0) {
                    cu.width = 100
                }
                var cB = cy.createElement("div");
                ak(cB.style, {position: an[188], overflow: an[190], width: "100px", height: "14px"});
                cu.appendChild(cB)
            }
        }
        for (var cw = 0; cw < cA; cw++) {
            var cB = this.div.firstChild.rows[cw].cells[1].firstChild;
            d(cB, true);
            this.fields[cw].showBody(cB, cv, this)
        }
        this.div.style.display = ""
    }, onResize: function () {
        ak(this.div.style, {right: "30px", top: (this.gantt.headHeight + 10) + "px"})
    }});
    function b7() {
    }

    b7.prototype = new L();
    ak(b7.prototype, {initialize: function (cu) {
        this.gantt = cu;
        var cv = this.div = cu.createImage("logo", {size: [cu.idCellWidth, cu.headHeight]});
        ak(cv.style, {position: an[189], zIndex: 200});
        if (cu.setTooltip) {
            cu.setTooltip(cv, m(this, this.getLogoTooltip))
        }
        cu.container.appendChild(cv);
        if (cu.setContextMenu) {
            cu.setContextMenu(cv, function (cw) {
                cw.type = "logo";
                return true
            })
        }
        return true
    }, getLogoTooltip: function (cu) {
        if (cu && cu.bindObject == this) {
            return false
        }
        var cv = this.div.ownerDocument.createElement("div");
        cv.innerHTML = al("MbVH9VuHUveZQSihVswpCbskkkaVW5S3Vw8LVtvQQbF1KH4ypHF0wKS11L3SlEthgeg1hTX2QjfpxIQkwoJI7AKmw29eDZ");
        cu.setContent(cv);
        cu.bindObject = this;
        return true
    }});
    function b2() {
        this.contextMenuItems = []
    }

    b2.prototype = new L();
    ak(b2.prototype, {initialize: function (cv) {
        if (cv.disableContextMenu) {
            return false
        }
        bG(this, cv.config.getConfigObj("SFMenu"));
        this.gantt = cv;
        var cu = this.container = cv.getContainer(), cx = cv.container.ownerDocument;
        var cw = this.div = cx.createElement(an[84]);
        ak(cw, {cellSpacing: 0, border: 0, cellPadding: 0});
        ak(cw.style, {position: an[189], zIndex: 700});
        ak(cw.style, this.tableStyle);
        ak(cv, {addContextMenuItem: m(this, this.addItem), getContextMenuItemById: m(this, this.getItemById), removeContextMenuItem: m(this, this.removeItem), setContextMenu: m(this, this.setContextMenu)});
        this.listeners = [cn(cu, an[53], i), f(cu, an[182], this, this.onMouseDown), f(cw, an[181], this, this.onItemMouseOver), f(cw, an[182], this, this.onItemClick), f(cx, an[182], this, this.hidden)];
        return true
    }, setContextMenu: function (cv, cu) {
        if (!cv._SF_E_) {
            cv._SF_E_ = []
        }
        cv._SF_E_.contextMenu = cu
    }, onMouseDown: function (cB) {
        var cx = cb(cB);
        if (cx == 4) {
            g(cB)
        }
        if (cx != 2) {
            return
        }
        this.event = cB;
        var cA = cB.target;
        while (cA) {
            if (cA._SF_E_ && cA._SF_E_.contextMenu && cA._SF_E_.contextMenu(this, cB)) {
                i(cB);
                if (this.items) {
                    this.hidden()
                }
                var cv = [], cz = this.contextMenuItems;
                for (var cw = 0; cw < cz.length; cw++) {
                    var cy = cz[cw].showHandle(this, cB);
                    if (cy == 1) {
                        cv.push(cz[cw])
                    }
                }
                this.items = cv;
                var cu = cc(cB, this.container);
                this.show(cu);
                return
            }
            cA = cA.parentNode
        }
    }, addItem: function (cw, cz, cA, cy, cB, cu) {
        if (cB) {
            for (var cv = 0; cv < this.contextMenuItems.length; cv++) {
                if (cB == this.contextMenuItems[cv].id == cB) {
                    return false
                }
            }
        }
        var cx = new aP(cw, cz, cA, cy, cB, cu);
        this.contextMenuItems.push(cx);
        return cx
    }, getItemById: function (cv) {
        for (var cu = 0; cu < this.contextMenuItems.length; cu++) {
            if (cv == this.contextMenuItems[cu].id) {
                return this.contextMenuItems[cu]
            }
        }
        return null
    }, removeItem: function (cv) {
        if (typeof(cv) == an[194]) {
            cv = cv.id
        }
        if (cv) {
            for (var cu = 0; cu < this.contextMenuItems.length; cu++) {
                if (this.contextMenuItems[cu].id == cv) {
                    return this.contextMenuItems.splice(cu, 1)
                }
            }
        }
        return null
    }, show: function (cu) {
        var cv = this.container, cw = this.div;
        this.createItemContent();
        cv.appendChild(cw);
        var cy = cu[0] + 1, cx = cu[1] + 1;
        if (cy + cw.offsetWidth > cv.offsetWidth) {
            cy = cu[0] - cw.offsetWidth - 1
        }
        if (cx + cw.offsetHeight > cv.offsetHeight) {
            cx = cu[1] - cw.offsetHeight - 1
        }
        ak(cw.style, {left: cy + "px", top: cx + "px"})
    }, hidden: function () {
        this.focusObj = null;
        var cu = this.items;
        if (cu) {
            for (var cv = 0; cv < cu.length; cv++) {
                cu[cv].row = null
            }
            this.items = null
        }
        d(this.div, true);
        if (this.div.parentNode == this.container) {
            this.container.removeChild(this.div)
        }
    }, createItemContent: function () {
        this.items.sort(function (cB, cA) {
            if (cB.index == cA.index) {
                return 0
            }
            return cB.index > cA.index ? 1 : -1
        });
        var cy = this.container.ownerDocument;
        for (var cw = 0; cw < this.items.length; cw++) {
            var cx = this.items[cw];
            var cz = this.div.insertRow(-1);
            var cu = cz.insertCell(-1);
            ak(cu, {width: 34, height: 24, bgColor: "#F6F6F6", align: an[90]});
            if (cx.icon) {
                var cv = this.gantt.createImage(cx.icon, {size: [16, 16]});
                cu.appendChild(cv)
            }
            cu = cz.insertCell(-1);
            ak(cu, {noWrap: "true"});
            ak(cu.style, {paddingLeft: "10px", paddingRight: "25px", fontSize: "13px", cursor: an[62]});
            cu.innerHTML = cx.text;
            cx.row = cz
        }
    }, getFocusItem: function (cx) {
        if (!this.items) {
            return null
        }
        var cw = cx.target, cy, cv = this.div;
        while (cw) {
            if (cw == cv) {
                break
            }
            if (cw.nodeName == "TR") {
                cy = cw
            }
            cw = cw.parentNode
        }
        if (!cy) {
            return null
        }
        for (var cu = cv.rows.length - 1; cu >= 0; cu--) {
            if (cy == cv.rows[cu]) {
                return this.items[cu]
            }
        }
        return null
    }, onItemMouseOver: function (cw) {
        var cv = this.getFocusItem(cw);
        if (!cv) {
            return
        }
        var cu = this.focusObj;
        if (cu) {
            cu.row.style.backgroundColor = "";
            cu.row.cells[0].style.backgroundColor = "#F6F6F6"
        }
        this.focusObj = cv;
        cv.row.style.backgroundColor = "#C4E0F2";
        cv.row.cells[0].style.backgroundColor = "#C4E0F2"
    }, onItemClick: function (cv) {
        var cu = this.getFocusItem(cv);
        if (!cu) {
            return
        }
        i(cv);
        this.hidden();
        if (cu.runHandle) {
            cu.runHandle(this)
        }
    }, remove: function () {
        this.hidden();
        var cu = this.gantt;
        delete cu.addContextMenuItem;
        delete cu.getContextMenuItemById;
        delete cu.removeContextMenuItem;
        delete cu.setContextMenu;
        delete this.contextMenuItems;
        L.prototype.remove.apply(this, arguments)
    }});
    function by() {
    }

    by.prototype = new L();
    ak(by.prototype, {initialize: function (cv, cu) {
        if (!cv.addContextMenuItem) {
            return
        }
        var cw = cv.config.getConfig("SFGantt/menuText");
        cv.addContextMenuItem(function (cx) {
            return((cx.type == "chart" || cx.type == an[71]) && cx.gantt.zoomIn) ? 1 : 0
        }, function (cx) {
            cx.gantt.zoomIn(cx.type == an[71] ? cd(cx.event, cx.gantt.container) : null)
        }, cw.ZoomIn, "icon_zoomin", "ZoomIn", 551);
        cv.addContextMenuItem(function (cx) {
            return((cx.type == "chart" || cx.type == an[71]) && cx.gantt.zoomOut) ? 1 : 0
        }, function (cx) {
            cx.gantt.zoomOut(cx.type == an[71] ? cd(cx.event, cx.gantt.container) : null)
        }, cw.ZoomOut, "icon_zoomout", "ZoomOut", 556);
        cv.addContextMenuItem(function (cx) {
            return(cx.type == an[80] && cx.gantt.focusIntoView && cx.gantt.getFocusElement && cx.gantt.getFocusElement() && cx.gantt.getFocusElement().Start) ? 1 : 0
        }, function (cx) {
            cx.gantt.focusIntoView()
        }, cw.FocusIntoView, "icon_taskgoto", "FocusIntoView", 601);
        cv.addContextMenuItem(function (cx) {
            return(cx.type == an[80] && cx.gantt.addTask && !cx.gantt.readOnly && !cx.gantt.disableAddTask) ? 1 : 0
        }, function (cx) {
            cx.gantt.addTask()
        }, cw.AddTask, null, "AddTask", 651);
        cv.addContextMenuItem(function (cx) {
            return(cx.type == an[80] && cx.gantt.deleteTask && !cx.gantt.readOnly && !cx.gantt.disableDeleteTask && cx.gantt.getFocusElement && cx.gantt.getFocusElement() && cx.gantt.getFocusElement().elementType == an[170]) ? 1 : 0
        }, function (cx) {
            cx.gantt.deleteTask()
        }, cw.DeleteTask, null, "DeleteTask", 656);
        cv.addContextMenuItem(function (cx) {
            return(cx.type == an[80] && cx.gantt.addTasksLinks && !cx.gantt.readOnly && !cx.gantt.disableAddLink && cx.gantt.getFocusElement && cx.gantt.getFocusElement() && cx.gantt.getFocusElement().elementType == an[170]) ? 1 : 0
        }, function (cx) {
            cx.gantt.addTasksLinks()
        }, cw.AddTasksLinks, null, "AddTasksLinks", 701);
        cv.addContextMenuItem(function (cx) {
            return(cx.type == an[80] && cx.gantt.removeTasksLinks && !cx.gantt.readOnly && !cx.gantt.disableDeleteLink && cx.gantt.getFocusElement && cx.gantt.getFocusElement() && cx.gantt.getFocusElement().elementType == an[170]) ? 1 : 0
        }, function (cx) {
            cx.gantt.removeTasksLinks()
        }, cw.RemoveTasksLinks, null, "RemoveTasksLinks", 706);
        cv.addContextMenuItem(function (cx) {
            return(cx.type == an[80] && cx.gantt.upgradeSelectedTasks && !cx.gantt.readOnly && !cx.gantt.disableUpdateTask && cx.gantt.getFocusElement && cx.gantt.getFocusElement() && cx.gantt.getFocusElement().elementType == an[170]) ? 1 : 0
        }, function (cx) {
            cx.gantt.upgradeSelectedTasks()
        }, cw.UpgradeTask, null, "UpgradeTask", 751);
        cv.addContextMenuItem(function (cx) {
            return(cx.type == an[80] && cx.gantt.degradeSelectedTasks && !cx.gantt.readOnly && !cx.gantt.disableUpdateTask && cx.gantt.getFocusElement && cx.gantt.getFocusElement() && cx.gantt.getFocusElement().elementType == an[170]) ? 1 : 0
        }, function (cx) {
            cx.gantt.degradeSelectedTasks()
        }, cw.DegradeTask, null, "DegradeTask", 756);
        cv.addContextMenuItem(function (cx) {
            return(cx.gantt.showPrintDialog) ? 1 : 0
        }, function (cx) {
            cx.gantt.showPrintDialog()
        }, cw.Print, "icon_print", "Print", 791);
        cv.addContextMenuItem(function (cx) {
            return(cx.type == an[85] && cx.gantt.collapseChart && !cx.gantt.isChartShow()) ? 1 : 0
        }, function (cx) {
            cx.gantt.collapseChart()
        }, cw.ShowChart, null, "ShowChart", 801);
        cv.addContextMenuItem(function (cx) {
            return(cx.type == an[85] && cx.gantt.collapseChart && cx.gantt.isChartShow()) ? 1 : 0
        }, function (cx) {
            cx.gantt.collapseChart()
        }, cw.HideChart, null, "HideChart", 806);
        cv.addContextMenuItem(function (cx) {
            return(cx.type == an[85] && cx.gantt.collapseList && !cx.gantt.isListShow()) ? 1 : 0
        }, function (cx) {
            cx.gantt.collapseList()
        }, cw.ShowList, null, "ShowList", 850);
        cv.addContextMenuItem(function (cx) {
            return(cx.type == an[85] && cx.gantt.collapseList && cx.gantt.isListShow()) ? 1 : 0
        }, function (cx) {
            cx.gantt.collapseList()
        }, cw.HideList, null, "HideList", 856);
        cv.addContextMenuItem(function (cx) {
            return 1
        }, function (cx) {
            window.open(an[59])
        }, cw.Help, null, "Help", 901);
        cv.addContextMenuItem(function (cx) {
            return(cx.type == "logo") ? 1 : 0
        }, function (cx) {
            window.open(al("ef_aTS_EGQjTle3iE5BYP9sRk91KkKKIUAW7XNsWDV"))
        }, cw.About, null, "About", 951);
        return true
    }});
    function aA() {
    }

    aA.prototype = new L();
    ak(aA.prototype, {initialize: function (cu) {
        if (this.gantt) {
            return false
        }
        cu.openDialog = m(this, this.openDialog);
        cu.closeDialog = m(this, this.closeDialog);
        this.gantt = cu;
        return true
    }, openDialog: function (cB, cy) {
        if (this.isOpen) {
            this.closeDialog()
        }
        cy = cy ? cy : {};
        var cA = this.gantt, cD = cA.getViewSize(), cv = this.gantt.getContainer();
        var cF = cy.size ? cy.size : [parseInt(cD[0] / 2), parseInt(cD[1] / 2)];
        var cG = [cF[0] + 10, cF[1] + 35];
        var cu = this.div, cz;
        if (!cu) {
            var cu = this.div = document.createElement("div");
            ak(cu.style, {position: an[189], overflow: an[190], zIndex: 990, border: an[52], backgroundColor: an[83]});
            var cx = document.createElement("div");
            ak(cx.style, {position: an[188], borderBottom: an[52], backgroundColor: an[51], width: an[187], height: "21px"});
            cu.appendChild(cx);
            var cE = document.createElement("div");
            ak(cE.style, {position: an[188], width: an[187], height: "16px", fontSize: "14px", fontWeight: "bolder", padding: "4px", paddingLeft: "10px", cursor: an[154]});
            cx.appendChild(cE);
            var cC = document.createElement("div");
            ak(cC.style, {position: an[189], right: "2px", top: "-8px", fontSize: "25px", backgroundColor: an[51], cursor: an[193]});
            cC.appendChild(document.createTextNode("×"));
            cu.appendChild(cC);
            this.listeners = [f(cC, an[82], this, this.closeDialog)];
            var cz = document.createElement("div");
            ak(cz.style, {position: an[188], fontSize: "13px", margin: "5px"});
            cu.appendChild(cz)
        } else {
            cz = cu.lastChild
        }
        ak(cu.style, {left: (cD[0] - cG[0]) / 2 + "px", top: (cD[1] - cG[1]) / 2 + "px", width: cG[0] + "px", height: cG[1] + "px"});
        ak(cz.style, {width: cF[0] + "px", height: cF[1] + "px"});
        if (cy.title) {
            cu.firstChild.firstChild.innerHTML = cy.title
        } else {
            d(cu.firstChild.firstChild, true)
        }
        if (typeof(cB) == an[194]) {
            cz.appendChild(cB)
        } else {
            cz.innerHTML = cB
        }
        cv.appendChild(cu);
        if (cy.isModal) {
            var cw = this.maskDiv;
            if (!cw) {
                var cw = this.maskDiv = document.createElement("div");
                ak(cw.style, {position: an[189], zIndex: 950, backgroundColor: an[60]});
                C(cw, 0.7)
            }
            ak(cw.style, {left: "0px", top: "0px", width: cD[0] + "px", height: cD[1] + "px"});
            cv.appendChild(cw)
        } else {
            if (this.maskDiv) {
                cv.removeChild(this.maskDiv)
            }
        }
        this.isOpen = true;
        cg(this.gantt, "dialogopen", [cy])
    }, closeDialog: function () {
        var cu = this.gantt.getContainer();
        if (this.maskDiv) {
            cu.removeChild(this.maskDiv)
        }
        if (this.div) {
            while (this.div.lastChild.firstChild) {
                this.div.lastChild.removeChild(this.div.lastChild.firstChild)
            }
            cu.removeChild(this.div)
        }
        this.isOpen = false;
        cg(this.gantt, "dialogclose")
    }, remove: function () {
        this.closeDialog();
        var cu = this.gantt;
        delete cu.openDialog;
        delete cu.closeDialog;
        delete this.maskDiv;
        L.prototype.remove.apply(this, arguments)
    }});
    function b6() {
    }

    b6.prototype = new L();
    ak(b6.prototype, {initialize: function (cu) {
        this.gantt = cu;
        cu.createPrintWindow = m(this, this.createPrintWindow);
        cu.addPrintContent = m(this, this.addPrintContent);
        cu.printContentWindow = m(this, this.printContentWindow);
        cu.showPrintDialog = m(this, this.showPrintDialog);
        return true
    }, showPrintDialog: function () {
        var cy = this.gantt, cx = this.div;
        if (!cx) {
            cx = this.div = document.createElement("div");
            cx.style.padding = "5px";
            cx.style.fontSize = an[67];
            var cv = document.createElement("div");
            cv.style.margin = "5px";
            cv.appendChild(document.createTextNode(al("7AK3wnDF,CgVBFD8GHw")));
            var cw = this.cb_hor = document.createElement(an[50]);
            cw.type = an[49];
            cv.appendChild(cw);
            cv.appendChild(document.createTextNode(al("7CGQwoPm,BsvBE1d")));
            cx.appendChild(cv);
            var cv = document.createElement("div");
            cv.style.margin = "5px";
            cv.appendChild(document.createTextNode(al("7AK3wnDF,xghBG5mGHw")));
            var cC = this.cb_showList = document.createElement(an[50]);
            cC.type = an[49];
            cv.appendChild(cC);
            cC.checked = true;
            cv.appendChild(document.createTextNode(al("7zCMwaH6,xozC0HV")));
            var cz = this.cb_showMap = document.createElement(an[50]);
            cz.type = an[49];
            cv.appendChild(cz);
            cz.checked = true;
            cv.appendChild(document.createTextNode(al("7wiZwaH6,y,aC0HV")));
            cx.appendChild(cv);
            var cv = document.createElement("div");
            cv.style.margin = "5px";
            cv.appendChild(document.createTextNode(al("7AK3wnDF_h2fBFvhGHw")));
            var cB = this.cb_all = document.createElement(an[50]);
            cB.type = an[49];
            cv.appendChild(cB);
            cv.appendChild(document.createTextNode(al("7AK3wnDF,CcQB1jXxOK0wT_Q")));
            cx.appendChild(cv);
            var cv = document.createElement("div");
            cv.style.margin = "5px";
            cv.innerHTML = al("8iidw1zo,,2cBXX6yvO1wCVVW,LblOKDUN,EceOIe9M5dyzHoErbSj7amTgJVZWNZYxygrOtmK8tnZNBaIyCpwHMe27");
            cx.appendChild(cv);
            var cv = document.createElement("div");
            cv.style.margin = "5px";
            cv.align = an[90];
            var cA = document.createElement(an[50]);
            cA.type = "button";
            cA.value = al("7AK3wnDF");
            cv.appendChild(cA);
            var cu = document.createElement(an[50]);
            cu.type = "button";
            cu.value = al("7wi6w4nd");
            cv.appendChild(cu);
            cx.appendChild(cv);
            this.listeners = [f(cA, an[82], this, this.onSubmit), f(cu, an[82], cy, cy.closeDialog)]
        }
        cy.openDialog(cx, {isModal: true, size: [280, 120], title: al("7AK3wnDF")})
    }, onSubmit: function () {
        var cH = 210, cE = 297;
        var cv = this.cb_hor.checked, cA = this.cb_all.checked;
        var cB = this.cb_showList.checked, cz = this.cb_showMap.checked;
        if (!cB && !cz) {
            return
        }
        cH -= 19.05 + 19.05;
        cE -= 19.05 + 19.05 + 20;
        var cx = window.chrome ? 96 : 96, cQ = 25.4;
        var cO = this.gantt, cy = cO.createPrintWindow(), cD = cv ? [cE / cQ * cx, cH / cQ * cx] : [cH / cQ * cx, cE / cQ * cx], cC = 20;
        var cN = cO.getData().getRootElement(cO.elementType).getLastDescendant(true);
        var cG = cO.getElementViewTop(cN) + cO.getElementHeight(cN), cw = cA ? 0 : cO.getLayout(an[48]).scrollTop, cu = 0;
        var cF, cM, cL, cK, cP = cO.getData().getRootTask().Finish;
        for (var cJ = 0; ; cJ++) {
            if (cw >= cG || (!cA && cJ > 0)) {
                break
            }
            cu = Math.min(cw + cD[1] - cO.headHeight - cC, cG);
            cL = cA ? cO.getData().getRootTask().Start : cO.getStartTime();
            for (var cI = 0; ; cI++) {
                if (cI == 0) {
                    cF = (!cB) ? 0 : ((!cz) ? cD[0] : cO.listWidth);
                    cM = cD[0] - cF - 10 - cO.idCellWidth
                } else {
                    cF = 0;
                    cM = cD[0] - cO.idCellWidth
                }
                cK = new Date(cL.valueOf() + cM * cO.getScale());
                this._addPrintContent(cy, [cD[0], Math.min(cD[1], cu - cw + cO.headHeight + cC)], cv, [cF, cM], cL, cw);
                cL = cK;
                if (cL >= cP || !cz || !cA) {
                    break
                }
            }
            cw = cu
        }
    }, createPrintWindow: function () {
        if (this._win) {
            this.deposePrintWindow(this._win);
            delete this._win
        }
        var cv = document.createElement("iframe");
        ak(cv.style, {position: an[189], width: "1px", height: "1px", left: "-2px", top: "-2px", visibility: an[190]});
        this.gantt.getContainer().appendChild(cv);
        var cx = cv.contentWindow;
        cx.location = "about:blank";
        var cw = cx.document;
        var cu = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">\n';
        cu += "<html>";
        cu += al("TeFLPldTKf5BlyFNSsBjTrkSjETQmLB1LQ0KZswQVnCpZwlHNLsCiipajDcPL2kYSnr7DGI7TmXEAW1EPWgPdv,jQFVHHMKOQP4bHsBYUvgSWSLtaeSDYhJYHdsLVr84K6URfvAAgvo");
        cu += '<body style="padding:0px;margin:0px;" bgcolor="#FFFFFF"></body></html>';
        cw.writeln(cu);
        cw.close();
        cx.gantts = [];
        if (!document.all) {
            this._win = cx
        }
        return cx
    }, deposePrintWindow: function (cv) {
        var cu;
        while (cu = cv.gantts.pop()) {
            cu.depose()
        }
        d(cv.frameElement)
    }, _addPrintContent: function () {
        if (!this.printList) {
            this.printList = [];
            this.printTimeout = setInterval(m(this, function () {
                var cu = this.printList.shift();
                this.addPrintContent.apply(this, cu);
                this.gantt.openDialog(al("Te_PUxOIYgrIh9_PRLtdUrkghEnMXLRKXhZXX6gURbyDJ6oShwLaPPrO3mGAeACIopup") + this.printList.length + al("Mm4ifS7EUfrSXM"), {isModal: true, size: [200, 32], title: al("7CaJwo97,SY5BUj7xNWCwBldAFYsCCHO")});
                if (!this.printList[0]) {
                    clearInterval(this.printTimeout);
                    delete this.printTimeout;
                    delete this.printList;
                    cu[0].frameElement.style.visibility = "";
                    this.printContentWindow(cu[0]);
                    this.gantt.closeDialog()
                }
            }), 32)
        }
        this.printList.push(arguments)
    }, addPrintContent: function (cB, cG, cF, cy, cw, cE) {
        var cD = cB.document, cA = cD.body, cx = this.gantt, cv = cD.createElement("div");
        if (cA.firstChild) {
            cv.style.pageBreakBefore = "always"
        }
        cv.style.border = an[52];
        cA.appendChild(cv);
        var cu = cv;
        if (cF) {
            z(cv, [cG[1], cG[0]]);
            cu = cD.createElement("div");
            z(cu, cG);
            x(cu, 90);
            if (!cu.style.filter) {
                cu.style.top = (cG[0] - cG[1]) / 2 + "px";
                cu.style.left = -(cG[0] - cG[1]) / 2 + "px"
            }
            cv.appendChild(cu)
        } else {
            z(cv, cG)
        }
        var cC = new aE();
        bI(cC, cx.config, true);
        cC.setConfig("SFGantt/container", cu);
        cC.setConfig("SFGantt/readOnly", true);
        cC.setConfig("SFGantt/footHeight", 0);
        cC.setConfig("SFGantt/listWidth", cy[0]);
        cC.setConfig("SFGantt/disableTooltip", true);
        cC.setConfig("SFGantt/disableChangeEvent", true);
        cC.setConfig("SFGantt/disableHelpLink", true);
        cC.setConfig("SFGantt/disableTimeScrollNotice", true);
        cC.setConfig("SFGantt/disableDragResize", true);
        cC.setConfig("SFGantt/disableCursor", true);
        cC.setConfig("SFGantt/disableContextMenu", true);
        cC.setConfig("SFGantt/disableScroll", true);
        cC.setConfig("SFGantt/disableSelect", true);
        cC.setConfig("SFGantt/scrollTop", cE);
        cC.setConfig("SFGantt/forPrint", true);
        var cz = new at(cC, cx.data);
        cz.showMap(cw, cx.getZoom());
        cB.gantts.push(cz)
    }, printContentWindow: function (cu) {
        window.setTimeout(m(this, function () {
            cu.focus();
            cu.print();
            if (document.all) {
                this.deposePrintWindow(cu)
            }
        }), 0)
    }, remove: function () {
        delete this.a_pageType;
        delete this.t_width;
        delete this.t_height;
        var cu = this.gantt;
        delete cu.createPrintWindow;
        delete cu.addPrintContent;
        L.prototype.remove.apply(this, arguments)
    }});
    function bQ() {
    }

    bQ.prototype = new L();
    ak(bQ.prototype, {initialize: function (cv) {
        this.gantt = cv;
        if (cv.disableScroll || !cv.getLayout || !cv.showScroller) {
            return false
        }
        var cu = cv.getLayout(an[48]);
        cu.style.overflowY = an[100];
        if (!cu) {
            return false
        }
        this.listeners = [f(cu, an[100], this, this.onScroll)];
        return true
    }, onScroll: function (cv) {
        i(cv);
        if (!this.timeout) {
            this.timeout = window.setInterval(m(this, this.onTime), 128)
        }
        var cu = this.scrollObj ? this.scrollObj : this.getScrollObj();
        cu.scrollTop = this.gantt.getLayout(an[48]).scrollTop;
        cu.changed = true;
        cu.idleTimes = 0
    }, onTime: function () {
        var cw = this.scrollObj, cu = this.gantt;
        if (!cw || !cw.changed) {
            if (cw) {
                cw.idleTimes++;
                if (cw.idleTimes > 8) {
                    window.clearInterval(this.timeout);
                    delete this.timeout
                }
            }
            return
        }
        cw.changed = false;
        if (cu.getTooltip) {
            cu.getTooltip().hidden()
        }
        var cv = cw.scrollTop;
        this.updateScroll(cw, 1, cv);
        this.updateScroll(cw, 3, cv + this.gantt.getLayout(an[48]).clientHeight * 1.5);
        cg(this.gantt, an[100], [cv, cw])
    }, updateScroll: function (cz, cw, cy) {
        var cu = this.gantt, cx = cz.spanElements[cw];
        var cB = cy - cz.spanHeights[cw];
        var cv = cB > 0;
        while (cx) {
            if (!cx.data) {
                delete this.scrollObj;
                this.onScroll()
            }
            if (cv) {
                if (cB < cu.getElementHeight(cx)) {
                    break
                }
                var cA = cx.getNextView();
                if (!cA) {
                    break
                }
                cu.getElementDrawObj(cA);
                cx = cA;
                cB -= cu.getElementHeight(cx)
            } else {
                if (cB > 0) {
                    break
                }
                var cA = cx.getPreviousView();
                if (!cA) {
                    break
                }
                cu.getElementDrawObj(cA);
                cx = cA;
                cB += cu.getElementHeight(cA)
            }
        }
        cz.spanHeights[cw] = cy - cB;
        cz.spanElements[cw] = cx
    }, getScrollObj: function () {
        var cv = this.gantt, cw = cv.getViewElements()[0], cu = cv.getViewTop();
        return this.scrollObj = {lastTime: new Date().valueOf(), spanElements: [cw, cw, cw, cw], spanHeights: [cu, cu, cu, cu]}
    }});
    function Q() {
    }

    Q.prototype = new L();
    ak(Q.prototype, {initialize: function (cA) {
        if (!this.layoutName || !cA.getLayout) {
            return false
        }
        var cx = cA.getLayout(this.layoutName);
        if (!cx) {
            return false
        }
        b3(cx);
        var cE = cx.ownerDocument, cw = cE.createElement("div");
        cw._cmd = 1;
        ak(cw.style, {position: an[189]});
        var cu = cA.createImage(an[47]);
        ak(cu.style, {position: an[189], left: "0px"});
        cu._cmd = 1;
        cw.appendChild(cu);
        var cB = cA.createImage(an[46]);
        ak(cB.style, {position: an[189], right: "0px"});
        cB._cmd = 1;
        cw.appendChild(cB);
        var cv = cE.createElement("div");
        cv._cmd = 1;
        ak(cv.style, {position: an[189]});
        var cz = cA.createImage(an[45]);
        ak(cz.style, {position: an[189], left: "0px"});
        cv.appendChild(cz);
        var cC = cA.createImage(an[44]);
        ak(cC.style, {position: an[189], right: "0px"});
        cv.appendChild(cC);
        var cD = document.createElement("div");
        cA.setBackgroundImage(cD, an[43]);
        ak(cD.style, {position: an[189], left: "3px", textAlign: an[90]});
        var cy = cA.createImage(an[42]);
        cD.appendChild(cy);
        cv.appendChild(cD);
        cw.appendChild(cv);
        cx.appendChild(cw);
        ak(this, {gantt: cA, container: cx, div: cw, leftImg: cu, rightImg: cB, barDiv: cv, barLeftImg: cz, barRightImg: cC, barCenterDiv: cD, barCenterImg: cy});
        this.listeners = [f(cw, an[182], this, this.onMouseDown), f(cA, an[93], this, this.onResize)];
        this.scrollLeft = 0;
        return true
    }, onResize: function () {
        if (!this.container) {
            return
        }
        var cv = this.container, cx = cv.offsetWidth, cu = cv.offsetHeight, cw = this.size;
        if (cw && cw[1] == cu && cw[0] == cx) {
            return
        }
        if (cx <= 0) {
            this.div.style.display = an[174];
            return
        } else {
            this.div.style.display = ""
        }
        z(this.div, [cx, cu]);
        this.div.style.display = cx - cu * 2 <= 0 ? an[174] : "";
        if (cx - cu * 2 <= 0) {
            return
        }
        z(this.barDiv, [cx - cu * 2, cu]);
        z(this.barCenterDiv, [Math.max(0, cx - cu * 2 - 6), cu]);
        if (!cw || cw[1] != cu) {
            z(this.leftImg, [cu, cu]);
            z(this.rightImg, [cu, cu]);
            z(this.barLeftImg, [3, cu]);
            z(this.barRightImg, [3, cu]);
            z(this.barCenterImg, [8, cu])
        }
        this.size = [cx, cu];
        this.init(this.offsetWidth, this.scrollWidth, this.scrollLeft)
    }, init: function (cx, cv, cy) {
        if (!cx || !cv) {
            return
        }
        var cw = this.size[0] - this.size[1] * 2;
        this.offsetWidth = cx;
        this.scrollWidth = cv;
        this.barDiv.style.display = cx < cv ? "" : an[174];
        var cu = Math.max(cv ? parseInt(cw * cx / cv) : 0, 14);
        ak(this.barDiv.style, {width: cu + "px"});
        ak(this.barCenterDiv.style, {width: cu - 6 + "px"});
        this.width = cw - cu;
        this.scrollTo(cy ? cy : this.scrollLeft, false)
    }, scrollTo: function (cv, cu) {
        cv = this.scrollLeft = Math.max(Math.min(cv, this.scrollWidth - this.offsetWidth), 0);
        ak(this.barDiv.style, {left: (this.size[1] + cv / (this.scrollWidth - this.offsetWidth) * this.width) + "px"});
        if (cu != false) {
            cg(this, an[100], [cv])
        }
    }, onMouseDown: function (cz) {
        i(cz);
        if (this.pressObj || this.spaceObj) {
            this.onMouseUp(cz)
        }
        var cx = this.gantt, cu = this.div, cC = cu.ownerDocument, cA = cz.target;
        if (cu.setCapture) {
            cu.setCapture()
        }
        while (cA && !cA._cmd) {
            cA = cA.parentNode
        }
        switch (cA) {
            case this.leftImg:
            case this.rightImg:
                var cB = (this.rightImg == cA);
                cx.setImageSrc(cA, "scroll_" + (cB ? an[66] : an[104]) + "1");
                var cv = this.pressObj = {dir: (cB ? 1 : -1), timeout: window.setInterval(m(this, this.onButtonPress), 32), ul: f(cC, an[180], this, this.onMouseUp)};
                cg(this, an[41], [this.scrollLeft]);
                this.onButtonPress();
                break;
            case this.div:
                var cD = cd(cz, this.div);
                var cy = cD[0] / (this.size[0] - this.size[1] * 2) * (this.scrollWidth - this.offsetWidth);
                var cw = this.spaceObj = {toLeft: cy, timeout: window.setInterval(m(this, this.onSpacePress), 128), ul: f(cC, an[180], this, this.onMouseUp)};
                cg(this, an[41], [this.scrollLeft]);
                this.onSpacePress();
                break;
            default:
                new s(cu, m(this, this.onBarMove), {interval: 32}).onMouseDown(cz);
                break
        }
    }, onMouseUp: function (cw) {
        i(cw);
        if (cw && cw.target && cw.target.ownerDocument.releaseCapture) {
            cw.target.ownerDocument.releaseCapture()
        }
        var cv = this.gantt;
        if (this.pressObj) {
            var cu = this.pressObj;
            cg(this, an[40], [this.scrollLeft]);
            window.clearInterval(cu.timeout);
            cm(cu.ul);
            cv.setImageSrc(this.leftImg, an[47]);
            cv.setImageSrc(this.rightImg, an[46]);
            this.pressObj = null
        }
        if (this.spaceObj) {
            var cx = this.spaceObj;
            cg(this, an[40], [this.scrollLeft]);
            this.scrollTo(cx.toLeft);
            window.clearInterval(cx.timeout);
            cm(cx.ul);
            this.spaceObj = null
        }
    }, onButtonPress: function () {
        if (!this.pressObj) {
            return
        }
        this.scrollTo(this.scrollLeft + this.pressObj.dir * 8)
    }, onSpacePress: function () {
        if (!this.spaceObj) {
            return
        }
        var cx = this.spaceObj, cv = cx.toLeft, cu = this.scrollLeft;
        var cw = cx.toLeft - this.scrollLeft;
        if (Math.abs(cw) < 64) {
            this.onMouseUp();
            return
        }
        this.scrollTo(this.scrollLeft + (cw > 0 ? 64 : -64))
    }, onBarMove: function (cx, cv, cw) {
        var cu = this.gantt;
        if (cw == an[179]) {
            cu.setImageSrc(this.barLeftImg, an[39]);
            cu.setImageSrc(this.barCenterImg, an[38]);
            cu.setImageSrc(this.barRightImg, an[37]);
            cu.setBackgroundImage(this.barCenterDiv, an[36]);
            cg(this, an[41], [this.startDragLeft = this.scrollLeft]);
            return
        }
        this.scrollTo(this.startDragLeft + (cv[0] - cx[0]) / this.width * (this.scrollWidth - this.offsetWidth));
        if (cw == "end") {
            cu.setImageSrc(this.barLeftImg, an[45]);
            cu.setImageSrc(this.barCenterImg, an[42]);
            cu.setImageSrc(this.barRightImg, an[44]);
            cu.setBackgroundImage(this.barCenterDiv, an[43]);
            cg(this, an[40], [this.scrollLeft])
        }
    }, remove: function (cu) {
        delete this.leftImg;
        delete this.rightImg;
        delete this.barDiv;
        delete this.barLeftImg;
        delete this.barRightImg;
        delete this.barCenterDiv;
        delete this.barCenterImg;
        L.prototype.remove.apply(this, arguments)
    }});
    function cp(cu) {
        this.layoutName = "listFoot"
    }

    cp.prototype = new L();
    ak(cp.prototype, {remove: function (cu) {
        delete this.leftImg;
        delete this.rightImg;
        delete this.barDiv;
        delete this.barLeftImg;
        delete this.barRightImg;
        delete this.barCenterDiv;
        delete this.barCenterImg;
        L.prototype.remove.apply(this, arguments)
    }, onBarMove: function (cx, cv, cw) {
        var cu = this.gantt;
        if (cw == an[179]) {
            cu.setImageSrc(this.barLeftImg, an[39]);
            cu.setImageSrc(this.barCenterImg, an[38]);
            cu.setImageSrc(this.barRightImg, an[37]);
            cu.setBackgroundImage(this.barCenterDiv, an[36]);
            cg(this, an[41], [this.startDragLeft = this.scrollLeft]);
            return
        }
        this.scrollTo(this.startDragLeft + (cv[0] - cx[0]) / this.width * (this.scrollWidth - this.offsetWidth));
        if (cw == "end") {
            cu.setImageSrc(this.barLeftImg, an[45]);
            cu.setImageSrc(this.barCenterImg, an[42]);
            cu.setImageSrc(this.barRightImg, an[44]);
            cu.setBackgroundImage(this.barCenterDiv, an[43]);
            cg(this, an[40], [this.scrollLeft])
        }
    }, onSpacePress: function () {
        if (!this.spaceObj) {
            return
        }
        var cx = this.spaceObj, cv = cx.toLeft, cu = this.scrollLeft;
        var cw = cx.toLeft - this.scrollLeft;
        if (Math.abs(cw) < 64) {
            this.onMouseUp();
            return
        }
        this.scrollTo(this.scrollLeft + (cw > 0 ? 64 : -64))
    }, onButtonPress: function () {
        if (!this.pressObj) {
            return
        }
        this.scrollTo(this.scrollLeft + this.pressObj.dir * 8)
    }, onMouseUp: function (cw) {
        i(cw);
        if (cw && cw.target && cw.target.ownerDocument.releaseCapture) {
            cw.target.ownerDocument.releaseCapture()
        }
        var cv = this.gantt;
        if (this.pressObj) {
            var cu = this.pressObj;
            cg(this, an[40], [this.scrollLeft]);
            window.clearInterval(cu.timeout);
            cm(cu.ul);
            cv.setImageSrc(this.leftImg, an[47]);
            cv.setImageSrc(this.rightImg, an[46]);
            this.pressObj = null
        }
        if (this.spaceObj) {
            var cx = this.spaceObj;
            cg(this, an[40], [this.scrollLeft]);
            this.scrollTo(cx.toLeft);
            window.clearInterval(cx.timeout);
            cm(cx.ul);
            this.spaceObj = null
        }
    }, onMouseDown: function (cz) {
        i(cz);
        if (this.pressObj || this.spaceObj) {
            this.onMouseUp(cz)
        }
        var cx = this.gantt, cu = this.div, cC = cu.ownerDocument, cA = cz.target;
        if (cu.setCapture) {
            cu.setCapture()
        }
        while (cA && !cA._cmd) {
            cA = cA.parentNode
        }
        switch (cA) {
            case this.leftImg:
            case this.rightImg:
                var cB = (this.rightImg == cA);
                cx.setImageSrc(cA, "scroll_" + (cB ? an[66] : an[104]) + "1");
                var cv = this.pressObj = {dir: (cB ? 1 : -1), timeout: window.setInterval(m(this, this.onButtonPress), 32), ul: f(cC, an[180], this, this.onMouseUp)};
                cg(this, an[41], [this.scrollLeft]);
                this.onButtonPress();
                break;
            case this.div:
                var cD = cd(cz, this.div);
                var cy = cD[0] / (this.size[0] - this.size[1] * 2) * (this.scrollWidth - this.offsetWidth);
                var cw = this.spaceObj = {toLeft: cy, timeout: window.setInterval(m(this, this.onSpacePress), 128), ul: f(cC, an[180], this, this.onMouseUp)};
                cg(this, an[41], [this.scrollLeft]);
                this.onSpacePress();
                break;
            default:
                new s(cu, m(this, this.onBarMove), {interval: 32}).onMouseDown(cz);
                break
        }
    }, scrollTo: function (cv, cu) {
        cv = this.scrollLeft = Math.max(Math.min(cv, this.scrollWidth - this.offsetWidth), 0);
        ak(this.barDiv.style, {left: (this.size[1] + cv / (this.scrollWidth - this.offsetWidth) * this.width) + "px"});
        if (cu != false) {
            cg(this, an[100], [cv])
        }
    }, init: function (cx, cv, cy) {
        if (!cx || !cv) {
            return
        }
        var cw = this.size[0] - this.size[1] * 2;
        this.offsetWidth = cx;
        this.scrollWidth = cv;
        this.barDiv.style.display = cx < cv ? "" : an[174];
        var cu = Math.max(cv ? parseInt(cw * cx / cv) : 0, 14);
        ak(this.barDiv.style, {width: cu + "px"});
        ak(this.barCenterDiv.style, {width: cu - 6 + "px"});
        this.width = cw - cu;
        this.scrollTo(cy ? cy : this.scrollLeft, false)
    }, initialize: function (cu) {
        if (!cu.getLayout) {
            return false
        }
        var cv = this.targetDiv = cu.getLayout("listHead");
        if (!cv) {
            return false
        }
        if (!Q.prototype.initialize.apply(this, arguments)) {
            return false
        }
        this.startLeft = parseInt(cv.firstChild.style.left);
        this.listeners.push(f(this, an[100], this, this.onScroll));
        this.listeners.push(f(cu, an[78], this, this.onResize));
        return true
    }, onResize: function () {
        if (!this.container) {
            return
        }
        Q.prototype.onResize.apply(this, arguments);
        this.init(this.targetDiv.offsetWidth, this.targetDiv.scrollWidth + this.startLeft)
    }, onScroll: function (cu) {
        for (var cv = this.targetDiv.firstChild; cv; cv = cv.nextSibling) {
            if (!cv.style) {
                continue
            }
            cv.style.left = -cu + this.startLeft + "px"
        }
        cg(this.targetDiv, an[100])
    }});
    function P() {
        this.layoutName = "mapFoot"
    }

    P.prototype = new Q();
    ak(P.prototype, {initialize: function (cu) {
        if (!Q.prototype.initialize.apply(this, arguments)) {
            return false
        }
        this.listeners.push(f(this, an[41], this, this.onScrollStart));
        this.listeners.push(f(this, an[100], this, this.onScroll));
        this.listeners.push(f(this, an[40], this, this.onScrollEnd));
        return true
    }, onResize: function () {
        if (!this.container) {
            return
        }
        Q.prototype.onResize.apply(this, arguments);
        var cu = this.gantt.getLayout(an[94]).offsetWidth;
        this.init(cu, cu * 9, cu * 4)
    }, onScrollStart: function (cu) {
        this.scrollObj = {start: cu, startTime: this.gantt.startTime}
    }, onScroll: function (cu) {
        this.gantt.move(cu - this.scrollObj.start);
        this.scrollObj.start = cu
    }, onScrollEnd: function (cu) {
        this.onResize()
    }});
    function ca() {
    }

    ca.prototype = new L();
    ak(ca.prototype, {initialize: function (cv, cu) {
        if (!cv.getSelectedElements) {
            return false
        }
        this.gantt = cv;
        ak(cv, {addTask: m(this, this.addTask), deleteTask: m(this, this.deleteTask), upgradeSelectedTasks: m(this, this.upgradeSelectedTasks), degradeSelectedTasks: m(this, this.degradeSelectedTasks), upgradeTask: m(this, this.upgradeTask), degradeTask: m(this, this.degradeTask), addTasksLinks: m(this, this.addTasksLinks), removeTasksLinks: m(this, this.removeTasksLinks), focusIntoView: m(this, this.focusIntoView)});
        return true
    }, addTask: function () {
        var cw = this.gantt, cz = cw.data, cy = cw.getSelectedElements();
        var cx, cv = null, cA = cy[0] ? cy[cy.length - 1] : null;
        if (cA) {
            if (!cA.getPreviousSibling()) {
                cx = cA.getParent()
            } else {
                cv = cA.getPreviousSibling().getLastDescendant(true);
                cx = cv.getParent()
            }
        } else {
            if (!cz.getRootTask().getFirstChild()) {
                cx = cz.getRootTask()
            } else {
                cv = cz.getRootTask().getLastChild().getLastDescendant(true);
                cx = cv.getParent()
            }
        }
        var cu = cz.addTask(cx, cv);
        if (cu) {
            cw.setSelectedElement(cu)
        }
    }, checkReadOnly: function () {
        var cx = this.gantt.getSelectedElements();
        var cu = cx.length;
        for (var cv = 0; cv < cu; cv++) {
            if (cx[cv].ReadOnly) {
                var cw = this.gantt.config.getConfig("SFGantt/noticeReadonly");
                if (cw) {
                    alert(cw)
                }
                return false
            }
        }
        return true
    }, deleteTask: function () {
        if (!this.checkReadOnly()) {
            return false
        }
        var cy = this.gantt.getSelectedElements();
        var cu = cy.length;
        if (!cy[0]) {
            return
        }
        if (cu == 0) {
            return
        }
        var cx = this.gantt.config.getConfig("SFGantt/noticeDelete");
        if (cx && !window.confirm(cx)) {
            return
        }
        for (var cw = cy.length - 1; cw >= 0; cw--) {
            var cv = cy[cw];
            if (!cv) {
                continue
            }
            this.gantt.data.deleteTask(cv)
        }
    }, getTopSelectedTasks: function () {
        var cx = [], cw = this.gantt.getSelectedElements();
        for (var cv = 0; cv < cw.length; cv++) {
            var cu;
            for (var cu = cx.length - 1; cu >= 0; cu--) {
                if (cw[cv].contains(cx[cu])) {
                    cx[cu] = cw[cv];
                    break
                } else {
                    if (cx[cu].contains(cw[cv])) {
                        break
                    }
                }
            }
            if (cu < 0) {
                cx.push(cw[cv])
            }
        }
        return cx
    }, upgradeSelectedTasks: function () {
        if (!this.checkReadOnly()) {
            return false
        }
        var cv = this.getTopSelectedTasks();
        for (var cu = 0; cu < cv.length; cu++) {
            this.upgradeTask(cv[cu])
        }
    }, degradeSelectedTasks: function () {
        if (!this.checkReadOnly()) {
            return false
        }
        var cv = this.getTopSelectedTasks();
        for (var cu = 0; cu < cv.length; cu++) {
            this.degradeTask(cv[cu])
        }
    }, upgradeTask: function (cw) {
        var cy = this.gantt.data, cx = cw.getParent();
        if (!cx || cx == cy.getRootTask()) {
            return false
        }
        var cz = cw.getNextSibling(), cu = true;
        if (!cy.moveTask(cw, cx.getParent(), cx)) {
            return false
        }
        while (cz) {
            var cv = cz.getNextSibling();
            if (!cy.moveTask(cz, cw, cw.getLastChild())) {
                return false
            }
            cz = cv
        }
        return true
    }, degradeTask: function (cv) {
        var cu = cv.getPreviousSibling();
        if (!cu) {
            return false
        }
        return this.gantt.data.moveTask(cv, cu, cu.getLastChild())
    }, addTasksLinks: function () {
        var cv = this.gantt.getSelectedElements();
        if (cv.length < 2) {
            return false
        }
        for (var cu = 1; cu < cv.length; cu++) {
            cv[cu].addPredecessorLink(cv[cu - 1], 1)
        }
        return true
    }, removeTasksLinks: function () {
        var cw = this.gantt, cA = cw.data, cz = cw.getSelectedElements();
        if (cz.length < 2) {
            return false
        }
        for (var cy = 0; cy < cz.length; cy++) {
            for (var cx = 0; cx < cz.length; cx++) {
                if (cy == cx) {
                    continue
                }
                var cv = cz[cy].getPredecessorLinks();
                for (var cu = cv.length - 1; cu >= 0; cu--) {
                    if (cv[cu].PredecessorTask == cz[cx]) {
                        cA.deleteLink(cv[cu]);
                        break
                    }
                }
            }
        }
        return true
    }, focusIntoView: function () {
        var cv = this.gantt, cu = cv.getFocusElement();
        if (!cu || !cu.Start || !cv.moveTo) {
            return
        }
        if (cv.getViewIndex(cu) < 0) {
            cv.scrollToElement(cu, 50)
        }
        cv.moveTo(cu.Start);
        cv.move(-10)
    }, remove: function () {
        var cu = this.gantt;
        delete cu.addTask;
        delete cu.deleteTask;
        delete cu.upgradeSelectedTasks;
        delete cu.degradeSelectedTasks;
        delete cu.upgradeTask;
        delete cu.degradeTask;
        delete cu.addTasksLinks;
        delete cu.removeTasksLinks;
        delete cu.focusIntoView;
        L.prototype.remove.apply(this, arguments)
    }});
    function bx() {
    }

    bx.prototype = new L();
    ak(bx.prototype, {initialize: function (cu) {
        this.listeners = [f(cu, an[102], this, this.onBeforeResize)];
        var cw = cu.maxSize, cv = cu.minSize;
        cw = cw ? cw : [1000, 1000];
        cv = cv ? cv : [200, 200];
        ak(this, {maxSize: cw, minSize: cv, gantt: cu});
        cu.setMaxSize = m(this, function (cx) {
            this.maxSize = cx
        });
        cu.setMinSize = m(this, function (cx) {
            this.minSize = cx
        });
        return true
    }, onBeforeResize: function (cv, cw) {
        var cu = this.maxSize;
        if (cu && (cu[0] < cw[0] || cu[1] < cw[1])) {
            cv.returnValue = false
        }
        var cu = this.minSize;
        if (cu && (cu[0] > cw[0] || cu[1] > cw[1])) {
            cv.returnValue = false
        }
    }, remove: function () {
        var cu = this.gantt;
        delete cu.setMaxSize;
        delete cu.setMinSize;
        L.prototype.remove.apply(this, arguments)
    }});
    function q(cu) {
        bG(this, cu);
        this.items = []
    }

    q.prototype = new L();
    ak(q.prototype, {initialize: function (cv) {
        if (!cv.getMapPanel) {
            return false
        }
        ak(this, {gantt: cv, taskStyles: cv.config.getConfigObj(an[73])});
        bG(this, cv.config.getConfigObj(an[58]));
        if (!q.listIndex) {
            q.listIndex = 0
        }
        this.proTag = "taskMap_" + (q.listIndex++);
        if (!this.taskStyles) {
            this.taskStyles = {}
        }
        this.taskPadding = cv.itemHeight - this.taskHeight;
        var cw = cv.container.ownerDocument, cu = this.div = cw.createElement("div");
        ak(this.div.style, {position: an[188], fontSize: "0px", left: "0px", top: "-1px", zIndex: 100});
        var cx = cw.createElement("div");
        ak(cx.style, {position: an[188], padding: "0px", margin: "0px", border: "0px"});
        cu.appendChild(cx);
        cv.getMapPanel().appendChild(cu);
        this.listeners = [f(cv, an[103], this, this.onInitialize), f(cv, an[92], this, this.onScale), f(cv, an[57], this, this.drawTask), f(cv, an[56], this, this.clearTask), f(cv, an[70], this, this.updateTask), f(cu, an[81], this, this.onDblClick), f(cu, an[82], this, this.onClick), f(cu, an[182], this, this.onMouseDown)];
        if (cv.setTooltip) {
            cv.setTooltip(cu, m(this, this.getTooltip))
        }
        return true
    }, addItem: function (cu) {
        if (!cu) {
            return
        }
        if (!cu.initialize(this)) {
            return false
        }
        this.items.push(cu);
        return true
    }, setViewTop: function () {
        var cu = this.gantt.getViewTop();
        this.div.firstChild.style.height = cu + "px"
    }, getTaskStyle: function (cu) {
        var cv = cu.ClassName, cw = this.taskStyles;
        cv = cv && cw[cv] ? cv : this.taskStyle;
        return cw[cv]
    }, drawTask: function (cw, cF) {
        var cx = this.gantt, cz = cx.getScale();
        if (!cz) {
            return
        }
        if (cF == 0) {
            this.setViewTop()
        }
        var cv = cx.getElementDrawObj(cw);
        var cy = cv[this.proTag] = {};
        var cu = cw.Start, cC = cw.Finish, cE = cx.getElementHeight(cw);
        var cG = this.div.ownerDocument.createElement("div"), cD = this.div.childNodes;
        cG.style.cssText = "position:relative;top:" + (cE - cx.getElementDrawObj(cw).height) + "px;left:" + cx.getMapPanelPosition(cu) + an[35] + cE + "px";
        cy.taskDiv = cG;
        if (cv.height > 0) {
            cG._element = cw;
            var cB = this.items;
            if (cC && cu && cC >= cu) {
                for (var cA = cB.length - 1; cA >= 0; cA--) {
                    cB[cA].show(cw, cy, cz)
                }
            }
        }
        if (cF + 1 == cD.length) {
            this.div.appendChild(cG)
        } else {
            this.div.insertBefore(cG, cD[cF + 1])
        }
    }, updateTask: function (cy, cv) {
        if (!this.gantt.getElementDrawObj(cy)) {
            return
        }
        var cx = this.gantt.getElementDrawObj(cy), cz = cx[this.proTag];
        if (!cz) {
            return
        }
        var cu = cy.Start, cC = cy.Finish;
        cz.taskDiv.style.left = this.gantt.getMapPanelPosition(cu) + "px";
        var cB = this.items, cw = (cC && cu && cC >= cu && cx.height > 0);
        if (B(cv, an[74])) {
            cz.taskDiv.style.backgroundColor = cy.Selected ? an[34] : ""
        }
        for (var cA = cB.length - 1; cA >= 0; cA--) {
            if (cw) {
                cB[cA].onUpdate(cy, cz, cv)
            } else {
                cB[cA].remove(cy, cz)
            }
        }
    }, clearTask: function (cw, cy) {
        if (cy == 0) {
            this.setViewTop()
        }
        var cx = this.gantt.getElementDrawObj(cw);
        if (!cx) {
            return
        }
        var cu = cx[this.proTag];
        if (!cu) {
            return
        }
        var cv = this.items;
        for (var cz = cv.length - 1; cz >= 0; cz--) {
            cv[cz].remove(cw, cu)
        }
        if (cu) {
            cu.taskDiv._element = null
        }
        d(cu.taskDiv);
        cx[this.proTag] = null
    }, getEventElement: function (cv) {
        if (!cv.target) {
            cv.target = cv.srcElement
        }
        for (var cu = cv.target; cu; cu = cu.parentNode) {
            if (cu == this.div) {
                return null
            }
            if (cu._element) {
                return cu._element
            }
        }
    }, onDblClick: function (cv) {
        var cu = this.getEventElement(cv);
        if (!cu) {
            return
        }
        cg(this.gantt, an[68], [cu, "chart"])
    }, onClick: function (cv) {
        var cu = this.getEventElement(cv);
        if (!cu) {
            return
        }
        cg(this.gantt, "taskclick", [cu, cv])
    }, onMouseDown: function (cy) {
        if (cb(cy) != 1) {
            return
        }
        var cw = this.getEventElement(cy);
        if (!cw) {
            return
        }
        cg(this.gantt, an[69], [cw, cy]);
        this.dragTask = cw;
        var cu = this.gantt.getElementDrawObj(cw)[this.proTag];
        var cv = this.items;
        for (var cx = cv.length - 1; cx >= 0; cx--) {
            cv[cx].onMouseDown(cw, cu, cy)
        }
    }, onInitialize: function () {
        this.addItem(new bd());
        this.addItem(new a2());
        this.addItem(new u());
        this.addItem(new av());
        this.addItem(new bv());
        this.addItem(new cs());
        this.addItem(new K());
        this.addItem(new aR());
        this.addItem(new aY());
        this.addItem(new bf());
        var cu = this.gantt;
        if (!cu.getScale()) {
            return
        }
        var cw = cu.getViewElements();
        for (var cv = 0;
             cv < cw.length; cv++) {
            this.drawTask(cw[cv], cv)
        }
    }, onScale: function () {
        var cw = this.gantt, cy = cw.getScale();
        if (!cy) {
            return
        }
        var cC = cw.getViewElements(), cB = this.items;
        for (var cA = 0; cA < cC.length; cA++) {
            var cv = cC[cA], cx = this.gantt.getElementDrawObj(cv)[this.proTag];
            if (!cx) {
                continue
            }
            var cu = cv.Start;
            cx.taskDiv.style.left = cw.getMapPanelPosition(cu) + "px";
            for (var cz = cB.length - 1; cz >= 0; cz--) {
                cB[cz].onScale(cv, cx, cy)
            }
        }
    }, getTooltip: function (cy, cz) {
        var cw = this.getEventElement(cz);
        if (!cw) {
            return
        }
        var cv = this.items, cu = this.gantt.getElementDrawObj(cw)[this.proTag];
        for (var cx = cv.length - 1; cx >= 0; cx--) {
            if (cv[cx].getTooltip(cw, cu, cy, cz)) {
                return true
            }
        }
        return false
    }, getTaskTooltipContent: function (cu, cy, cw) {
        var cz = this.div.ownerDocument, cB = cz.createElement(an[84]);
        cB.style.fontSize = an[67];
        ak(cB, {});
        var cC = cB.insertRow(-1);
        var cA = cC.insertCell(-1);
        ak(cA, {align: an[90], colSpan: 2, noWrap: true});
        cA.appendChild(cz.createTextNode(cy));
        cw = aI(cw);
        for (var cv = 0; cv < cw.length; cv++) {
            var cx = cw[cv];
            cC = cB.insertRow(-1);
            cA = cC.insertCell(-1);
            ak(cA, {align: an[104], noWrap: true});
            cx.showHead(cA);
            cA = cC.insertCell(-1);
            ak(cA, {align: an[104], noWrap: true});
            cx.showBody(cA, cu, this)
        }
        return cB
    }, getLinkTooltipContent: function (cw) {
        var cz = this.div.ownerDocument, cB = cz.createElement(an[84]);
        cB.style.fontSize = an[67];
        ak(cB, {});
        var cC = cB.insertRow(-1);
        var cA = cC.insertCell(-1);
        ak(cA, {align: an[90], colSpan: 2, noWrap: true});
        var cy = this.tooltipTitle.link;
        cA.appendChild(cz.createTextNode(cy));
        var cv = aK(an[168], this.linkAddNoticeFields.split(","));
        for (var cu = 0; cu < cv.length; cu++) {
            var cx = cv[cu];
            cC = cB.insertRow(-1);
            cA = cC.insertCell(-1);
            ak(cA, {align: an[104], noWrap: true});
            cx.showHead(cA);
            cA = cC.insertCell(-1);
            ak(cA, {align: an[104], noWrap: true});
            cx.showBody(cA, cw, this)
        }
        return cB
    }});
    function bS() {
    }

    bS.prototype = new L();
    ak(bS.prototype, {initialize: function (cv, cu) {
        this.gantt = cv;
        ak(cv, {getStartTime: m(this, this.getStartTime), getScale: m(this, this.getScale), setStartTime: m(this, this.setStartTime), setScale: m(this, this.setScale), move: m(this, this.move), show: m(this, this.show)});
        cv.moveTo = cv.setStartTime;
        this.listeners = [f(cv, an[103], this, this.onGanttInit)];
        return true
    }, onGanttInit: function () {
        var cv = this.gantt;
        this.startTime = cv.startTime;
        if (!this.startTime) {
            var cu = cv.data.getRootTask();
            if (cu) {
                this.startTime = cu.Start
            }
            if (!this.startTime) {
                this.startTime = new Date()
            }
        }
        if (!this.scale) {
            this.scale = 576 * 3600000 / 12
        }
    }, move: function (cu) {
        this.setStartTime(new Date(cu * this.scale + this.startTime.valueOf()))
    }, getStartTime: function () {
        return this.startTime
    }, setStartTime: function (cx) {
        var cu = this.gantt, cw = this.startTime;
        if (cw && (cw == cx || cw.valueOf() == cx.valueOf())) {
            return
        }
        var cv = {returnValue: true};
        cg(cu, "beforestarttimechange", [cv, cx]);
        if (!cv.returnValue) {
            return false
        }
        this.startTime = cx;
        cg(cu, an[33], [cx]);
        cg(cu, an[154], [cx]);
        return true
    }, getScale: function () {
        return this.scale
    }, setScale: function (cv) {
        if (this.scale == cv) {
            return
        }
        var cu = {returnValue: true};
        cg(this.gantt, "beforescalechange", [cu, cv]);
        if (!cu.returnValue) {
            return false
        }
        this.scale = cv;
        cg(this.gantt, an[92], [cv]);
        return true
    }, show: function (cv, cw) {
        var cu = this.gantt;
        if (cv) {
            cu.setStartTime(cv)
        }
        if (cw) {
            cu.setScale(cw)
        }
    }, remove: function () {
        var cu = this.gantt;
        delete cu.moveTo;
        delete cu.getStartTime;
        delete cu.getScale;
        delete cu.setStartTime;
        delete cu.setScale;
        delete cu.move;
        delete cu.show;
        L.prototype.remove.apply(this, arguments)
    }});
    function bH() {
    }

    bH.prototype = new L();
    ak(bH.prototype, {initialize: function (cv) {
        if (!cv.getLayout || !cv.getStartTime || !cv.getLayout(an[94])) {
            return false
        }
        var cu = this.div = cv.container.ownerDocument.createElement("div");
        ak(cu.style, {position: an[188], left: "0px", top: "0px"});
        cv.getLayout(an[94]).appendChild(cu);
        if (!cu) {
            return false
        }
        this.gantt = cv;
        cv.getMapPanel = m(this, this.getMapPanel);
        cv.getMapPanelPosition = m(this, this.getMapPanelPosition);
        cv.getTimeByMapPanelPosition = m(this, this.getTimeByMapPanelPosition);
        this.listeners = [f(cv, an[103], this, this.onGanttInit), f(cv, an[33], this, this.onTimeChange), f(cv, an[92], this, this.onTimeChange)];
        if (!cv.disableMapDrag) {
            this.listeners = this.listeners.concat(bz(cu, m(this, this.onMove), {container: cv.getContainer()}))
        }
        return true
    }, onGanttInit: function () {
        this.drawStart = this.gantt.getStartTime();
        this.onTimeChange()
    }, onTimeChange: function (cu) {
        this.div.style.left = -Math.round(this.gantt.getStartTime() - this.drawStart) / this.gantt.getScale() + "px"
    }, getMapPanelPosition: function (cu) {
        if (!cu) {
            return 0
        }
        return Math.round(cu - this.drawStart) / this.gantt.getScale()
    }, getTimeByMapPanelPosition: function (cu) {
        cu = cu ? cu : 0;
        return new Date(cu * this.gantt.getScale() + this.drawStart.valueOf())
    }, getMapPanel: function () {
        return this.div
    }, onMove: function (cx, cv, cw) {
        var cu = this.gantt, cz = cu.getLayout(an[48]);
        if (cw == an[179]) {
            this.startPosition = cz.scrollTop;
            this.startTime = cu.getStartTime()
        }
        var cy = cz.scrollTop = this.startPosition - cv[1] + cx[1];
        cg(cu, an[100], [cy]);
        cu.setStartTime(new Date(this.startTime.valueOf() + (cx[0] - cv[0]) * cu.getScale()))
    }, remove: function () {
        var cu = this.gantt;
        delete cu.getMapPanel;
        delete cu.getMapPanelPosition;
        delete cu.getTimeByMapPanelPosition;
        L.prototype.remove.apply(this, arguments)
    }});
    function bw() {
    }

    bw.prototype = new L();
    ak(bw.prototype, {initialize: function (cv) {
        if (!cv.getLayout || !cv.getStartTime || !cv.getLayout(an[94])) {
            return false
        }
        var cu = this.div = cv.container.ownerDocument.createElement("div");
        ak(cu.style, {position: an[189], left: "0px", top: "0px", width: an[187], height: an[187], zIndex: 10});
        cv.getContainer().appendChild(cu);
        if (!cu) {
            return false
        }
        this.gantt = cv;
        cv.getTimePanel = m(this, this.getTimePanel);
        cv.getTimePanelPosition = m(this, this.getTimePanelPosition);
        this.listeners = [f(cv, an[103], this, this.onGanttInit), f(cv, an[93], this, this.onTimeChange), f(cv, an[33], this, this.onTimeChange), f(cv, an[92], this, this.onTimeChange)];
        return true
    }, onGanttInit: function () {
        this.drawStart = this.gantt.getStartTime();
        this.onTimeChange()
    }, onTimeChange: function (cv) {
        if (!this.drawStart) {
            return
        }
        var cu = this.gantt;
        this.div.style.left = -Math.round((cu.getStartTime() - this.drawStart) / cu.getScale() - cf(cu.getLayout(an[94]), cu.getContainer())[0]) + "px"
    }, getTimePanelPosition: function (cu) {
        if (!cu) {
            return 0
        }
        return Math.round(cu - this.drawStart) / this.gantt.getScale()
    }, getTimePanel: function () {
        return this.div
    }, remove: function () {
        var cu = this.gantt;
        delete cu.getTimePanel;
        delete cu.getTimePanelPosition;
        L.prototype.remove.apply(this, arguments)
    }});
    function T(cw, cv, cu) {
        ak(this, {time: cw, dragable: cv, style: cu})
    }

    T.prototype = new L();
    ak(T.prototype, {initialize: function (cv) {
        if (!cv.getTimePanel) {
            return false
        }
        var cu = cv.getTimePanel();
        if (!cu) {
            return false
        }
        cv.addTimeLine = m(cv, aN);
        if (!this.time) {
            return false
        }
        this.gantt = cv;
        bG(this, cv.config.getConfigObj("SFGanttTimeLine"));
        var cw = this.div = cv.container.ownerDocument.createElement("div");
        ak(cw.style, this.lineStyle);
        ak(cw.style, this.style);
        ak(cw.style, {position: an[189], fontSize: "0px", left: "-1px", top: "0px", height: an[187], zIndex: 200});
        cu.appendChild(cw);
        this.listeners = [f(cv, an[92], this, this.onMove)];
        if (this.dragable) {
            D(cw, an[88]);
            this.listeners.push(bz(cw, m(this, this.onDrag), {container: cu}))
        }
        this.onMove();
        return true
    }, onMove: function () {
        var cu = this.gantt, cw = cu.getScale(), cv = cu.getStartTime();
        if (!cw || !cv) {
            return
        }
        this.div.style.left = cu.getTimePanelPosition(this.time) + "px"
    }, moveTo: function (cu) {
        this.time = cu;
        this.onMove()
    }, onDrag: function (cy, cv, cw) {
        if (cw == an[179]) {
            this.dragStart = this.time.valueOf()
        }
        var cu = this.gantt, cA = new Date(this.dragStart + (cv[0] - cy[0]) * this.gantt.getScale());
        this.moveTo(cA);
        if (cu.getTooltip) {
            var cx = cu.getTooltip(), cz = cf(cu.getTimePanel(), cu.getContainer());
            cx.setContent(this.div.ownerDocument.createTextNode(ac(cA, this.tooltipFormat)));
            cx.show([cv[0] + cz[0], cv[1] + cz[1]])
        }
    }});
    function aN(cx, cw, cv) {
        var cu = new T(cx, cw, cv);
        this.addControl(cu);
        return cu
    }

    ak(T, {addTimeLine: aN});
    function bN(cv, cu) {
    }

    bN.prototype = new L();
    ak(bN.prototype, {initialize: function (cv, cu) {
        if (cv.disableTimeScrollNotice || !cv.getLayout) {
            return false
        }
        bG(this, cv.config.getConfigObj("SFGanttTimeScrollNotice"));
        this.gantt = cv;
        this.div = cu.ownerDocument.createElement("div");
        ak(this.div.style, {position: an[189], zIndex: 400, display: an[174], left: "100px"});
        ak(this.div.style, this.divStyle);
        cu.appendChild(this.div);
        this.listeners = [f(cv, an[154], this, this.onMove), f(cv, an[93], this, this.onResize)];
        return true
    }, onMove: function (cu) {
        if (!this.timeout) {
            this.timeout = window.setInterval(m(this, this.onTime), 64)
        }
        this.lastTime = cu;
        this.idleTimes = 0;
        this.changed = true
    }, onTime: function () {
        if (!this.changed) {
            this.idleTimes++;
            if (this.idleTimes > 4) {
                window.clearInterval(this.timeout);
                this.div.style.display = an[174];
                delete this.timeout
            }
            return
        }
        this.changed = false;
        this.div.style.display = "";
        this.div.innerHTML = ac(this.lastTime, this.dateFormat)
    }, onResize: function () {
        var cu = this.gantt.getLayout(an[94]);
        this.div.style.left = (cf(cu, this.gantt.getContainer())[0] + 1) + "px";
        this.div.style.bottom = this.gantt.footHeight + 5 + "px"
    }});
    function bR() {
    }

    bR.prototype = new L();
    ak(bR.prototype, {initialize: function (cv) {
        if (cv.disableTimeSegmentation || !cv.getTimePanel || !cv.getCalList) {
            return false
        }
        var cu = cv.getTimePanel();
        if (!cu) {
            return false
        }
        bG(this, cv.config.getConfigObj("SFGanttTimeSegmentation"));
        this.gantt = cv;
        var cw = this.div = cv.container.ownerDocument.createElement("div");
        ak(cw.style, {position: an[189], fontSize: "0px", left: "0px", top: "0px", height: an[187], width: an[187], zIndex: 20});
        cu.appendChild(cw);
        this.listeners = [f(cv, an[103], this, this.reDraw), f(cv, an[93], this, this.reDraw), f(cv, an[92], this, this.reDraw), f(cv, an[154], this, this.reDraw)];
        this.reDraw();
        return true
    }, reDraw: function () {
        var cu = this.gantt, cv = cu.getCalList();
        if (!cv || !cv[1]) {
            return
        }
        this.showSegmentations(cu.getScale(), cu.getStartTime().valueOf(), cv[1])
    }, showSegmentations: function (cA, cx, cz) {
        if (this.cal != cz || !this.drawStart || Math.abs(cx - this.drawStart) / cA > 10000) {
            this.clear();
            ak(this, {cal: cz, drawStart: cx, scale: cA});
            this.div.style.left = this.gantt.getTimePanelPosition(cx) + "px"
        }
        if (this.scale != cA) {
            for (var cB = this.div.firstChild; cB; cB = cB.nextSibling) {
                cB.style.left = (cB.sTime - this.drawStart) / cA + 1 + "px"
            }
            this.div.style.left = this.gantt.getTimePanelPosition(this.drawStart) + "px";
            this.scale = cA
        }
        var cv = cx + this.div.offsetWidth * cA;
        var cu = this.div;
        var cw = cu.firstChild ? cu.firstChild.sTime : Number.MAX_VALUE;
        var cy = cu.lastChild ? cu.lastChild.eTime : Number.MIN_VALUE;
        if (cx > (cu.firstChild ? cu.firstChild.eTime : Number.MAX_VALUE)) {
            while (cu.firstChild && cu.firstChild.eTime < cx) {
                d(cu.firstChild)
            }
            cw = cu.firstChild ? cu.firstChild.sTime : Number.MAX_VALUE
        }
        if ((cu.lastChild ? cu.lastChild.sTime : Number.MIN_VALUE) > cv) {
            while (cu.lastChild && cu.lastChild.sTime > cv) {
                d(cu.lastChild)
            }
            cy = cu.lastChild ? cu.lastChild.eTime : Number.MIN_VALUE
        }
        if (cx < cw) {
            this.addSegmentation(cx, Math.min(cw, cv), cz, cu, cA, -1);
            cw = cu.firstChild ? cu.firstChild.sTime : Number.MAX_VALUE;
            cy = cu.lastChild ? cu.lastChild.eTime : Number.MIN_VALUE
        }
        if (cy < cv) {
            this.addSegmentation(Math.max(cy, cx), cv, cz, cu, cA, 1)
        }
    }, addSegmentation: function (cw, cz, cv, cC, cx, cy) {
        var cA = parseInt(cv.getFloorTime(new Date(cw)).valueOf());
        var cD = null;
        while (cA < cz) {
            var cB = parseInt(cv.getNextTime(new Date(cA)).valueOf());
            var cu = this.div.ownerDocument.createElement("div");
            ak(cu, {sTime: cA, eTime: cB});
            ak(cu.style, {position: an[189], left: (cA - this.drawStart) / cx + 1 + "px", top: "0px", width: "0px", height: an[187], borderLeft: an[32]});
            ak(cu.style, this.lineStyle);
            if (cy == -1) {
                if (cD == null) {
                    cC.insertBefore(cu, cC.firstChild)
                } else {
                    if (cD.nextSibling == null) {
                        cC.appendChild(cu)
                    } else {
                        cC.insertBefore(cu, cD.nextSibling)
                    }
                }
            } else {
                cC.appendChild(cu)
            }
            cD = cu;
            cA = cB
        }
    }, clear: function () {
        d(this.div, true)
    }});
    function bi() {
    }

    bi.prototype = new L();
    ak(bi.prototype, {initialize: function (cv) {
        if (cv.disableTooltip) {
            return false
        }
        bG(this, cv.config.getConfigObj("SFTooltip"));
        var cw = cv.container.ownerDocument.createElement("div");
        ak(cw.style, {position: an[189], zIndex: 650});
        ak(cw.style, this.divStyle);
        var cu = cv.container;
        ak(this, {gantt: cv, div: cw, container: cu});
        this.setEnable(true);
        ak(cv, {getTooltip: m(this, this.getTooltip), setTooltip: m(this, this.setTooltip)});
        return true
    }, onMouseOver: function (cv) {
        var cu = cv.target;
        while (cu) {
            if (cu._SF_E_ && cu._SF_E_.tooltip && cu._SF_E_.tooltip(this, cv)) {
                i(cv);
                this.show(cc(cv, this.container), cu);
                return
            }
            cu = cu.parentNode
        }
    }, setEnable: function (cu) {
        if (cu && !this.listeners) {
            this.listeners = [f(this.container, "mouseover", this, this.onMouseOver)]
        } else {
            if (!cu && this.listeners) {
                cm(this.listeners[0]);
                delete this.listeners
            }
        }
    }, setContent: function (cu) {
        d(this.div, true);
        this.div.appendChild(cu)
    }, getContent: function () {
        return this.div
    }, show: function (cu, cx) {
        cx = cx ? cx : this.div;
        this.container.appendChild(this.div);
        var cw = cu[0] + 5, cv = cu[1] + 5;
        if (!this.position) {
            if (cw + this.div.offsetWidth > this.container.offsetWidth) {
                cw = cu[0] - this.div.offsetWidth - 2
            }
            if (cv + this.div.offsetHeight > this.container.offsetHeight) {
                cv = cu[1] - this.div.offsetHeight - 2
            }
        }
        ak(this.div.style, {left: cw + "px", top: cv + "px"});
        this.container._ganttTip = this;
        this.hl = f(cx, "mouseout", this, function (cy) {
            if (!this.listeners) {
                return
            }
            this.hidden()
        })
    }, hidden: function () {
        if (this.div.parentNode == this.container) {
            this.container.removeChild(this.div)
        }
        this.container._ganttTip = null;
        this.bindObject = null;
        cm(this.hl)
    }, setTooltip: function (cv, cu) {
        if (!cv._SF_E_) {
            cv._SF_E_ = []
        }
        cv._SF_E_.tooltip = cu
    }, getTooltip: function () {
        return this
    }, remove: function () {
        this.setEnable(false);
        this.hidden();
        var cu = this.gantt;
        delete cu.getTooltip;
        delete cu.setTooltip;
        delete this.container;
        L.prototype.remove.apply(this, arguments)
    }});
    function n() {
    }

    n.prototype = new L();
    ak(n.prototype, {initialize: function (cu) {
        this.gantt = cu;
        this.itemHeight = cu.itemHeight;
        this.inline = cu.inline;
        this.hideSummary = cu.hideSummary;
        cu.getElementDrawObj = m(this, this.getElementDrawObj);
        cu.removeElementDrawObj = m(this, this.removeElementDrawObj);
        cu.getElementHeight = m(this, this.getElementHeight);
        this.listeners = [f(cu, cu.elementType.toLowerCase() + an[151], this, this.onElementChange)];
        return true
    }, getElementDrawObj: function (cx) {
        var cw = this.getTagName();
        if (!cx[cw]) {
            var cv = this.getElementHeight(cx), cu = (this.hideSummary && cx.Summary) ? 0 : (this.inline ? this.itemHeight : cv);
            cx[cw] = {height: cu, _height: cv}
        }
        return cx[cw]
    }, removeElementDrawObj: function (cv) {
        var cu = this.getTagName();
        delete cv[cu]
    }, getTagName: function () {
        if (!this.tagName) {
            if (!at._tagIndex) {
                at._tagIndex = 0
            }
            this.tagName = "drawObj_" + (at._tagIndex++)
        }
        return this.tagName
    }, getElementHeight: function (cw) {
        var cx, cu;
        if (cw.Summary && this.hideSummary) {
            return 0
        }
        if (this.inline) {
            if (!cw.Summary && cw.Start && cw.Finish && (cu = cw.getPreviousSibling()) && !cu.Summary && cu.Start && cu.Finish && cu.Finish < cw.Start) {
                var cv = {returnValue: true};
                cg(this.gantt, "beforeinline", [cv, cw, cu]);
                if (cv.returnValue) {
                    return 0
                }
            }
            return this.itemHeight
        }
        return(cx = cw.LineHeight) ? cx : this.itemHeight
    }, onElementChange: function (cx, cz) {
        var cu = this.gantt;
        if (cu.inline) {
            if (!B(cz, an[149]) && !B(cz, an[150])) {
                return
            }
            var cy = null;
            if (cu.getElementDrawObj(cx)._height != cu.getElementHeight(cx)) {
                cy = cx
            } else {
                var cw = cx.getNextSibling();
                if (cw && cu.getElementDrawObj(cw)._height != cu.getElementHeight(cw)) {
                    cy = cw
                }
            }
            for (var cv = cy; cv; cv = cv.getNextSibling()) {
                if (cu.getElementDrawObj(cv)._height == cu.getElementHeight(cv)) {
                    break
                }
                cg(cu, an[55], [cv, cu.getElementHeight(cv), cu.getElementDrawObj(cv)._height])
            }
        }
        if (B(cz, an[135])) {
            cg(cu, an[55], [cx, cx.LineHeight, cu.getElementDrawObj(cx)._height])
        }
    }, remove: function () {
        var cu = this.gantt;
        delete cu.getElementHeight;
        delete cu.removeElementDrawObj;
        delete cu.getElementDrawObj;
        delete this.gantt
    }});
    function Y(cu) {
        this.elementType = cu
    }

    Y.prototype = new L();
    ak(Y.prototype, {initialize: function (cu) {
        if (!cu.getLayout || !cu.getLayout(an[48])) {
            return false
        }
        ak(this, {gantt: cu, heightSpan: [0, 0], viewElements: []});
        cu.getViewTop = m(this, this.getViewTop);
        cu.getViewElements = m(this, this.getViewElements);
        cu.getViewIndex = m(this, this.getViewIndex);
        cu.getElementViewTop = m(this, this.getElementViewTop);
        cu.setScrollTop = m(this, this.setScrollTop);
        cu.scrollToElement = m(this, this.scrollToElement);
        this.listeners = [f(cu, an[103], this, this.onGanttInit), f(cu, an[100], this, this.onScroll), f(cu, an[101], this, this.showViewElements), f(cu, an[55], this, this.onHeightChange)];
        return true
    }, onGanttInit: function () {
        var cu = this.gantt, cw = cu.getData(), cv = this.elementType.toLowerCase();
        this.listeners = this.listeners.concat([f(cw, an[153] + cv + an[154], this, this.onElementMove), f(cw, an[153] + cv + "add", this, this.onElementAdd), f(cw, an[153] + cv + an[158], this, this.onElementDelete), f(cw, an[153] + cv + an[151], this, this.onElementChange)]);
        this.setScrollTop(cu.scrollTop ? cu.scrollTop : 0)
    }, setScrollTop: function (cv) {
        this.onScroll(cv);
        var cu = this.gantt, cw = cu.getLayout(an[48]);
        if (cu.forPrint) {
            cw.firstChild.style.position = an[188];
            cw.firstChild.style.top = -cv + "px"
        } else {
            cw.scrollTop = cv
        }
    }, getScrollTop: function () {
        return this.scrollTop ? this.scrollTop : 0
    }, onScroll: function (cv) {
        if (cv) {
            this.scrollTop = cv
        } else {
            var cu = this.gantt, cw = cu.getLayout(an[48]);
            this.scrollTop = cu.forPrint ? (-parseInt(cw.firstChild.style.top)) : cw.scrollTop
        }
        this.showViewElements()
    }, inViewElement: function (cw, cv) {
        var cu = this.gantt;
        if (cv < 0) {
            this.viewElements.push(cw);
            cv = this.viewElements.length - 1
        } else {
            this.viewElements.splice(cv, 0, cw)
        }
        if (this.viewElements[1] && cv == 0) {
            this.heightSpan[0] -= cu.getElementHeight(cw)
        } else {
            this.heightSpan[1] += cu.getElementHeight(cw)
        }
        cg(cu, an[95], [this.heightSpan]);
        cg(cu, this.elementType.toLowerCase() + "inview", [cw, cv])
    }, outViewElement: function (cw) {
        if (cw < 0) {
            cw = this.viewElements.length - 1
        }
        if (cw < 0) {
            return
        }
        var cx = this.viewElements.splice(cw, 1)[0], cu = this.gantt, cv = cu.getElementDrawObj(cx);
        if (cw == 0 && this.viewElements.length > 0 && !cx.isHidden()) {
            this.heightSpan[0] += cv.height
        } else {
            this.heightSpan[1] -= cv.height
        }
        cg(cu, an[95], [this.heightSpan]);
        cg(cu, this.elementType.toLowerCase() + "outview", [cx, cw])
    }, getViewIndex: function (cv) {
        for (var cu = this.viewElements.length - 1;
             cu >= 0; cu--) {
            if (cv == this.viewElements[cu]) {
                return cu
            }
        }
        return -1
    }, getViewTop: function () {
        return this.heightSpan[0]
    }, resetHeightSpan: function () {
        var cw = this.viewElements[0], cu = 0, cz = false, cv = this.gantt;
        if (cw) {
            for (var cx = cv.getData().getRootElement(this.elementType).getFirstChild(); cx; cx = cx.getNextView()) {
                if (cx == cw) {
                    cz = true;
                    break
                }
                cu += cv.getElementDrawObj(cx).height
            }
            if (cz) {
                var cy = this.heightSpan[0] - cu;
                this.heightSpan[0] = cu;
                this.heightSpan[1] -= cy
            }
        } else {
            this.heightSpan = [0, 0]
        }
        cg(cv, an[95], [this.heightSpan])
    }, delayShowViewElements: function () {
        if (!this.dst) {
            this.dst = window.setInterval(m(this, this.onShowTime), 32)
        }
        this.showChanged = true;
        this.showIdleTimes = 0
    }, onShowTime: function () {
        if (!this.showChanged) {
            this.showIdleTimes++;
            if (this.showIdleTimes > 4) {
                window.clearInterval(this.dst);
                delete this.dst;
                this.showViewElements(true)
            }
            return
        }
        this.showChanged = false
    }, showViewElements: function (cu) {
        var cy = this.gantt, cC = cy.getLayout(an[48]), cw = cy.viewEnlargeHeight, cD = cy.viewBufferHeight + cw;
        var cF = this.getScrollTop() - cw;
        var cx = cF + cC.clientHeight + cw * 2;
        if (cu && this.viewElements.length > 1) {
            var cG = this.heightSpan[0];
            var cz = 0;
            for (var cB = 0; cB < this.viewElements.length - 1;
                 cB++) {
                var cE = this.viewElements[cB], cv = this.viewElements[cB + 1];
                if (cE.getNextView() != cv) {
                    for (var cA = cE.getNextView(); cA && cA != cv; cA = cA.getNextView()) {
                        cG += cy.getElementHeight(cA);
                        this.inViewElement(cA, cB + (++cz), true);
                        if (cG > cx) {
                            break
                        }
                    }
                    cB += cz;
                    cz = 0
                } else {
                    cG += cy.getElementHeight(cE)
                }
                if (cG > cx) {
                    this.removeViewElements(cB + cz);
                    this.heightSpan[1] = cG;
                    cg(cy, an[95], [this.heightSpan]);
                    break
                }
            }
        }
        while (this.viewElements[0] && this.heightSpan[0] + cy.getElementHeight(this.viewElements[0]) < cF - cD) {
            this.outViewElement(0)
        }
        while (this.viewElements[0] && this.heightSpan[1] - cy.getElementHeight(this.viewElements[this.viewElements.length - 1]) > cx + cD) {
            this.outViewElement(-1)
        }
        if (!this.viewElements[0]) {
            var cG = 0, cA = cy.data.getRootElement(this.elementType).getNext();
            while (cG < cF && cA) {
                if (cG + cy.getElementHeight(cA) >= cF) {
                    break
                }
                cG += cy.getElementHeight(cA);
                cA = cA.getNextView()
            }
            if (!cA) {
                if (cG > 0) {
                    this.setScrollTop(cG)
                }
                return
            }
            this.heightSpan = [cG, cG];
            cg(cy, an[95], [this.heightSpan]);
            this.inViewElement(cA, -1)
        }
        while (this.heightSpan[1] < cx) {
            var cA = this.viewElements[this.viewElements.length - 1].getNextView();
            if (!cA) {
                break
            }
            this.inViewElement(cA, -1)
        }
        while (this.heightSpan[0] > cF) {
            var cA = this.viewElements[0].getPreviousView();
            if (!cA) {
                break
            }
            this.inViewElement(cA, 0)
        }
    }, getElementViewTop: function (cy) {
        var cz = this.viewElements[0];
        var cv = this.gantt, cw = cv.data.compareElement(cz, cy) > 0, cu = 0;
        for (var cx = cy; cx; cx = cw ? cx.getPreviousView() : cx.getNextView()) {
            if (cx == cy && cw) {
                continue
            }
            if (cx == cz && !cw) {
                break
            }
            cu += cv.getElementHeight(cx) * (cw ? 1 : -1);
            if (cx == cz) {
                break
            }
        }
        return this.getViewTop() + cu
    }, removeViewElements: function (cu) {
        for (var cv = this.viewElements.length - 1; cv > cu; cv--) {
            this.outViewElement(-1, true)
        }
    }, getViewElements: function () {
        return this.viewElements
    }, onElementChange: function (cx, cu, cz, cy) {
        switch (cu) {
            case an[136]:
                if (cx.isHidden()) {
                    return
                }
                var cw = this.viewElements[0] && this.gantt.data.compareElement(cx, this.viewElements[0]) > 0;
                var cA = cx.Collapse;
                if (cA) {
                    for (var cv = 0; cv < this.viewElements.length; cv++) {
                        if (cx != this.viewElements[cv] && cx.contains(this.viewElements[cv])) {
                            this.outViewElement(cv, true);
                            cv--
                        }
                    }
                }
                if (cw) {
                    this.resetHeightSpan()
                }
                this.showViewElements(!cA);
                break;
            case an[135]:
                break
        }
    }, onHeightChange: function (cv, cy, cx) {
        if (cv.isHidden()) {
            return
        }
        if (this.viewElements[0] && this.gantt.data.compareElement(cv, this.viewElements[0]) >= 0) {
            var cw = cy - (cx ? cx : this.gantt.itemHeight);
            this.heightSpan[0] += cw;
            this.heightSpan[1] += cw;
            cg(this.gantt, an[95], [this.heightSpan])
        }
        var cu = this.getViewIndex(cv);
        this.outViewElement(cu, true);
        this.gantt.removeElementDrawObj(cv);
        this.delayShowViewElements()
    }, onElementAdd: function (cw) {
        if (cw.isHidden()) {
            return
        }
        var cv = false;
        if (this.viewElements[0] && this.gantt.data.compareElement(cw, this.viewElements[0]) > 0) {
            var cu = this.gantt.getElementHeight(cw);
            this.heightSpan[0] += cu;
            this.heightSpan[1] += cu;
            cg(this.gantt, an[95], [this.heightSpan]);
            cv = true
        }
        if (cv || this.viewElements.length == 0 || B(this.viewElements, cw.getNextView()) || B(this.viewElements, cw.getPreviousView())) {
            this.delayShowViewElements()
        }
    }, onElementMove: function (cy, cv, cB) {
        var cA = this.gantt.data;
        var cz = (!cv.Collapse && !cv.isHidden()) && this.viewElements[0] && cA.compareElement((cB ? cB.getLastDescendant(true) : cv), this.viewElements[0]) > 0;
        var cu = (!cy.isHidden()) && this.viewElements[0] && cA.compareElement(cy, this.viewElements[0]) > 0;
        for (var cx = 0; cx <= this.viewElements.length; cx++) {
            if (cy.contains(this.viewElements[cx])) {
                var cw = this.viewElements[cx];
                this.outViewElement(cx, true);
                this.gantt.removeElementDrawObj(cw);
                cx--
            }
        }
        if (cz != cu) {
            this.resetHeightSpan()
        }
        this.delayShowViewElements()
    }, onElementDelete: function (cz, cv, cB) {
        if (cv.Collapse || cv.isHidden()) {
            return
        }
        var cu = cB ? cB.getLastDescendant(true) : cv, cA = this.viewElements;
        var cy = cA[0] && this.gantt.data.compareElement(cu, cA[0]) > 0;
        for (var cx = cA.length - 1; cx >= 0; cx--) {
            if (cA[cx].isHidden()) {
                var cw = cA[cx];
                this.outViewElement(cx, true)
            }
        }
        if (cy) {
            this.resetHeightSpan()
        }
        if (this.Selected) {
            this.removeSelectedElement(cz)
        }
        this.delayShowViewElements()
    }, scrollToElement: function (cu, cv) {
        cv = cv ? cv : 0;
        this.gantt.setScrollTop(Math.max(0, this.gantt.getElementViewTop(cu) - cv))
    }, remove: function () {
        var cu = this.gantt;
        delete cu.getViewTop;
        delete cu.getViewElements;
        delete cu.getViewIndex;
        delete cu.getElementViewTop;
        delete cu.setScrollTop;
        delete cu.scrollToElement;
        delete this.viewElements;
        L.prototype.remove.apply(this, arguments)
    }});
    function b4() {
    }

    b4.prototype = new L();
    ak(b4.prototype, {initialize: function (cv) {
        if (cv.disableWorkingMask || !cv.getTimePanel || !cv.getCalList) {
            return false
        }
        var cu = cv.getTimePanel();
        if (!cu) {
            return false
        }
        bG(this, cv.config.getConfigObj("SFGanttWorkingMask"));
        this.gantt = cv;
        var cw = this.div = cv.container.ownerDocument.createElement("div");
        ak(cw.style, {position: an[189], fontSize: "0px", left: "0px", top: "0px", height: an[187], width: an[187], zIndex: 10});
        cu.appendChild(cw);
        this.listeners = [f(cv, an[103], this, this.onGanttInit), f(cv, an[93], this, this.reDraw), f(cv, an[92], this, this.reDraw), f(cv, an[154], this, this.reDraw)];
        this.reDraw();
        return true
    }, onGanttInit: function () {
        this.calendar = this.gantt.getData().getCalendar();
        this.reDraw()
    }, reDraw: function () {
        var cu = this.gantt, cx = cu.getScale(), cv = cu.getStartTime(), cw = cu.getCalList();
        if (!cw || !cw[0] || !this.calendar) {
            return
        }
        this.showSegmentations(cu.getScale(), cu.getStartTime().valueOf(), cw[0])
    }, showSegmentations: function (cA, cx, cz) {
        if (this.cal != cz || !this.drawStart || Math.abs(cx - this.drawStart) / cA > 10000) {
            this.clear();
            ak(this, {scale: cA, drawStart: cx, cal: cz});
            this.div.style.left = this.gantt.getTimePanelPosition(cx) + "px"
        }
        if (this.scale != cA) {
            for (var cB = this.div.firstChild; cB; cB = cB.nextSibling) {
                ak(cB.style, {left: (cB.sTime - this.drawStart) / cA + 1 + "px", width: (cB.eTime - cB.sTime) / cA + "px"})
            }
            this.div.style.left = this.gantt.getTimePanelPosition(this.drawStart) + "px";
            this.scale = cA
        }
        var cv = cx + this.div.offsetWidth * cA;
        var cu = this.div;
        var cw = cu.firstChild ? cu.firstChild.sTime : Number.MAX_VALUE;
        var cy = cu.lastChild ? cu.lastChild.eTime : Number.MIN_VALUE;
        if (cx > (cu.firstChild ? cu.firstChild.eTime : Number.MAX_VALUE)) {
            while (cu.firstChild && cu.firstChild.eTime < cx) {
                d(cu.firstChild)
            }
            cw = cu.firstChild ? cu.firstChild.sTime : Number.MAX_VALUE
        }
        if ((cu.lastChild ? cu.lastChild.sTime : Number.MIN_VALUE) > cv) {
            while (cu.lastChild && cu.lastChild.sTime > cv) {
                d(cu.lastChild)
            }
            cy = cu.lastChild ? cu.lastChild.eTime : Number.MIN_VALUE
        }
        if (cx < cw) {
            this.addMask(cx, Math.min(cw, cv), cz, cu, cA, -1);
            cw = cu.firstChild ? cu.firstChild.sTime : Number.MAX_VALUE;
            cy = cu.lastChild ? cu.lastChild.eTime : Number.MIN_VALUE
        }
        if (cy < cv) {
            this.addMask(Math.max(cy, cx), cv, cz, cu, cA, 1)
        }
    }, addMask: function (cw, cA, cv, cE, cy, cz) {
        var cB = parseInt(cv.getFloorTime(new Date(cw)).valueOf()), cD = this.div.ownerDocument;
        var cF = null;
        while (cB < cA) {
            var cC = parseInt(cv.getNextTime(new Date(cB)).valueOf());
            var cx = this.calendar.getWorkTime(new Date(cB));
            if (cx[0] >= cC.valueOf()) {
                var cu = cD.createElement("div");
                ak(cu, {sTime: cB, eTime: cC});
                ak(cu.style, {position: an[189], left: (cB - this.drawStart) / cy + 1 + "px", top: "0px", width: (cC - cB) / cy + "px", height: an[187]});
                this.gantt.setBackgroundImage(cu, "map_mask");
                if (cz == -1) {
                    if (cF == null) {
                        cE.insertBefore(cu, cE.firstChild)
                    } else {
                        if (cF.nextSibling == null) {
                            cE.appendChild(cu)
                        } else {
                            cE.insertBefore(cu, cF.nextSibling)
                        }
                    }
                } else {
                    cE.appendChild(cu)
                }
                cF = cu
            }
            cB = cC
        }
    }, clear: function () {
        d(this.div, true)
    }});
    function ct() {
    }

    ct.prototype = new L();
    ak(ct.prototype, {initialize: function (cv, cu) {
        this.gantt = cv;
        this.levels = [3 * 60000 / 6, 30 * 60000 / 6, 3600000 / 6, 4 * 3600000 / 6, 12 * 3600000 / 6, 24 * 3600000 / 6, 96 * 3600000 / 6, 192 * 3600000 / 6, 576 * 3600000 / 6, 1728 * 3600000 / 6];
        ak(cv, {setZoomLevels: m(this, this.setZoomLevels), getZoomScale: m(this, this.getZoomScale), zoomIn: m(this, this.zoomIn), zoomOut: m(this, this.zoomOut), zoomTo: m(this, this.zoomTo), getZoom: m(this, this.getZoom), show: m(this, this.show)});
        cv.showMap = cv.show;
        this.listeners = [f(cv, an[103], this, this.onScaleChange), f(cv, an[92], this, this.onScaleChange)];
        return true
    }, getZoomScale: function (cv, cu) {
        return this.levels[this.getZoomIndex(cv, cu)]
    }, setZoomLevels: function (cu) {
        this.levels = cu
    }, getZoomIndex: function (cy, cv) {
        cv = cv ? cv : 0;
        var cx = this.levels, cu = cx.length;
        for (var cw = 0; cw < cu; cw++) {
            var cz = cx[cw];
            if (cy <= cz) {
                if (cw > 0 && ((cv == 1) || (cv == 0 && cy / (cx[cw - 1]) < cz / cy))) {
                    return cw - 1
                }
                return cw
            }
        }
        return cu - 1
    }, onScaleChange: function () {
        this.zoomIndex = this.getZoomIndex(this.gantt.getScale())
    }, zoomIn: function () {
        this.zoomTo(this.zoomIndex - 1)
    }, zoomOut: function () {
        this.zoomTo(this.zoomIndex + 1)
    }, zoomTo: function (cu) {
        if (!this.levels[cu]) {
            return
        }
        var cv = this.zoomIndex;
        this.zoomIndex = cu;
        this.gantt.setScale(this.levels[cu]);
        cg(this, "zoom", [cu, cv])
    }, getZoom: function () {
        return this.zoomIndex
    }, show: function (cw, cv) {
        var cx = this.levels[cv];
        cx = cx ? cx : cv;
        var cu = this.gantt;
        if (cw) {
            cu.setStartTime(cw)
        }
        if (cx) {
            cu.setScale(cx)
        }
    }, remove: function () {
        var cu = this.gantt;
        delete cu.getZoomScale;
        delete cu.showMap;
        delete cu.zoomIn;
        delete cu.zoomOut;
        delete cu.zoomTo;
        delete cu.getZoom;
        delete cu.show;
        L.prototype.remove.apply(this, arguments)
    }});
    function b9() {
        if (arguments.length <= 0) {
            return
        }
        ak(this, {width: 100, headText: "", headStyle: {textAlign: an[90]}, bodyStyle: {textAlign: an[104]}, inputStyle: {}});
        var cv = arguments[0];
        if (typeof(cv) != an[194]) {
            var cu = arguments;
            cv = {};
            if (cu[0]) {
                cv.width = cu[0]
            }
            if (cu[1]) {
                cv.headText = cu[1]
            }
            if (cu[2]) {
                cv.headFunc = cu[2]
            }
            if (cu[3]) {
                cv.bodyFunc = cu[3]
            }
            if (cu[4]) {
                cv.inputFunc = cu[4]
            }
            if (cu[5]) {
                cv.inputData = cu[5]
            }
            if (cu[6]) {
                cv.bodyData = cu[6]
            }
        }
        ak(this, cv)
    }

    ak(b9.prototype, {setWidth: function (cu) {
        this.width = parseInt(cu)
    }, setHeadText: function (cu) {
        this.headText = cu
    }, setHeadAlign: function (cu) {
        this.setHeadStyle({textAlign: cu})
    }, setHeadColor: function (cu) {
        this.setHeadStyle({color: cu})
    }, setHeadBgColor: function (cu) {
        this.setHeadStyle({backgroundColor: cu})
    }, setHeadStyle: function (cu) {
        ak(this.headStyle, cu)
    }, setBodyAlign: function (cu) {
        this.setBodyStyle({textAlign: cu})
    }, setBodyColor: function (cu) {
        this.setBodyStyle({color: cu})
    }, setBodyBgColor: function (cu) {
        this.setBodyStyle({backgroundColor: cu})
    }, setBodyStyle: function (cu) {
        ak(this.bodyStyle, cu)
    }, setInputHandle: function (cu) {
        this.inputFunc = cu
    }, setInputStyle: function (cu) {
        ak(this.inputStyle, cu)
    }, setReadOnly: function (cu) {
        this.ReadOnly = cu
    }, showHead: function (cu, cv) {
        d(cu, true);
        ak(cu.style, this.headStyle);
        return this.headFunc(cu, cv)
    }, showBody: function (cu, cv, cw) {
        d(cu, true);
        ak(cu.style, this.bodyStyle);
        return this.bodyFunc(cu, cv, cw)
    }, showInput: function (cu, cv, cw) {
        d(cu, true);
        ak(cu.style, this.bodyStyle);
        ak(cu.style, this.inputStyle);
        return this.inputFunc(cu, cv, cw)
    }, checkUpdate: function (cx) {
        if (!this.bodyData) {
            return false
        }
        var cu = this.bodyData.split(",");
        for (var cw = 0; cw < cu.length; cw++) {
            for (var cv = 0; cv < cx.length; cv++) {
                if (cx[cv] == cu[cw]) {
                    return true
                }
            }
        }
        return false
    }, headFunc: function (cu) {
        cu.innerHTML = this.headText
    }, bodyFunc: function (cu, cv, cx) {
        var cw = cv[this.bodyData];
        cw = (typeof(cw) != an[184]) ? cw : "";
        cu.appendChild(cu.ownerDocument.createTextNode(cw))
    }, createInput: function (cv) {
        var cu = cv.ownerDocument.createElement(an[50]);
        ak(cu.style, {width: an[187], height: an[187], border: "solid 2px #000000", overflow: an[190]});
        cn(cu, an[82], g);
        cn(cu, an[180], g);
        cn(cu, an[182], function (cw) {
            cm(cu.cml);
            cu.cml = cn(cu, an[53], g);
            g(cw)
        });
        cn(cu, an[25], g);
        cu.cml = cn(cu, an[53], i);
        return cu
    }, inputFunc: function (cu, cw, cz) {
        var cy = this.inputData, cA = this;
        var cx = cw[this.inputData];
        var cv = this.createInput(cu, cA, cz);
        cv.value = (typeof(cx) != an[184]) ? cx : "";
        cn(cv, an[24], function (cC) {
            if (cC.keyCode == 27) {
                var cB = cw[cy];
                cv.value = (typeof(cB) != an[184]) ? cB : ""
            }
            if (cC.keyCode == 13) {
                cw.setProperty(cy, cv.value);
                d(cu, true);
                cA.showBody(cu, cw, cz)
            }
        });
        cn(cv, an[151], function () {
            cw.setProperty(cy, cv.value)
        });
        cu.appendChild(cv);
        cv.focus()
    }});
    function aM(cw, cv) {
        var cu = b9[an[31] + cw];
        if (!cu || !cu[cv]) {
            aJ(cw, cv, new b9(100, cv))
        }
        if (!cu) {
            cu = b9[an[31] + cw]
        }
        return cu[cv]
    }

    function aK(cw, cx) {
        var cu = [];
        for (var cv = 0; cv < cx.length; cv++) {
            if (!cx[cv]) {
                continue
            }
            cu.push(aM(cw, cx[cv]))
        }
        return cu
    }

    function aJ(cw, cv, cx) {
        var cu = b9[an[31] + cw];
        if (!cu) {
            cu = b9[an[31] + cw] = {}
        }
        cu[cv] = cx;
        cx.Name = cv
    }

    function aI(cu) {
        return aK(an[170], cu)
    }

    function aH(cu) {
        return aK(an[169], cu)
    }

    function aF(cu) {
        return aK(an[168], cu)
    }

    function aC(cu) {
        return aM(an[170], cu)
    }

    function aB(cu) {
        return aM(an[169], cu)
    }

    function az(cu) {
        return aM(an[168], cu)
    }

    function ay(cu, cv) {
        return aJ(an[170], cu, cv)
    }

    function ax(cu, cv) {
        return aJ(an[169], cu, cv)
    }

    function aw(cu, cv) {
        return aJ(an[168], cu, cv)
    }

    function au(cu, cw, cB, cz, cv, cy, cA, cx) {
        aJ(an[170], cu, new b9({width: cw, headText: cB, headFunc: cz, bodyFunc: cv, inputFunc: cy, inputData: cA, bodyData: cx}))
    }

    function ar() {
        if (b9.inited) {
            return
        }
        b9.inited = true;
        b9.NormalHead = b9.prototype.headFunc;
        b9.NormalBody = b9.prototype.bodyFunc;
        b9.BoolBody = aL.prototype.bodyFunc;
        b9.BoolInput = aL.prototype.inputFunc;
        b9.BoolCheckbox = aL.prototype.inputFunc;
        b9.createInput = b9.prototype.createInput;
        b9.NormalInput = b9.prototype.inputFunc;
        b9.DateBody = U.prototype.bodyFunc;
        b9.DateInput = U.prototype.inputFunc;
        var cu = window._SFGantt_config.SFGanttField;
        var cw = cu.fieldTexts;
        ay("Empty", new b9({width: 36, ReadOnly: true}));
        ay("UID", new b9({width: 36, bodyData: "UID", headText: cw.UID, ReadOnly: true, bodyStyle: {textAlign: an[90]}}));
        ay("ID", new b9({width: 36, bodyData: "ID", headText: cw.ID, ReadOnly: true, bodyStyle: {textAlign: an[90]}}));
        ay("name", new b9({width: 120, bodyData: an[145], headText: cw.TaskName}));
        ay(an[145], new ba({width: 120, headText: cw.TaskName}));
        ay(an[147], new b9({width: 100, bodyData: an[147], headText: cw.OutlineNumber, ReadOnly: true}));
        var cv = new I({width: 32, headText: cw.StatusIcon});
        cv.addIcon(function (cz, cy) {
            if (cz.PercentComplete < 100) {
                return
            }
            var cx = this.createImage(cy, "icon_finished");
            if (cy.setTooltip) {
                cy.setTooltip(cx, function (cA) {
                    if (cA.bindObject == cx) {
                        return false
                    }
                    cA.bindObject = cx;
                    cA.setContent(cy.container.ownerDocument.createTextNode(E(cu.tooltipPercentComplete, ac(cz.Finish, cu.dateShowFormat))));
                    return true
                })
            }
            return cx
        }, an[143]);
        cv.addIcon(function (cz, cy) {
            if (!cz.ConstraintType || cz.ConstraintType <= 1) {
                return
            }
            var cx = this.createImage(cy, "icon_constraint" + cz.ConstraintType);
            if (cy.setTooltip) {
                cy.setTooltip(cx, function (cA) {
                    if (cA.bindObject == cx) {
                        return false
                    }
                    cA.bindObject = cx;
                    var cB = E(cu.tooltipConstraint, [cu.constraintTypes[cz.ConstraintType], ac(cz.ConstraintDate, cu.dateShowFormat)]);
                    cA.setContent(cy.container.ownerDocument.createTextNode(cB));
                    return true
                })
            }
            return cx
        }, "ConstraintType,ConstraintDate");
        cv.addIcon(function (cz, cy) {
            if (!cz.Notes) {
                return
            }
            var cx = this.createImage(cy, an[30]);
            if (cy.setTooltip) {
                cy.setTooltip(cx, function (cA) {
                    if (cA.bindObject == cx) {
                        return false
                    }
                    cA.bindObject = cx;
                    var cB = aM(cz.elementType, an[142]).headText + ': "' + cz.Notes + '"';
                    cA.setContent(cy.container.ownerDocument.createTextNode(cB));
                    return true
                })
            }
            return cx
        }, an[142]);
        cv.addIcon(function (cz, cy) {
            if (!cz.HyperlinkAddress) {
                return
            }
            var cA = cy.container.ownerDocument.createElement("a");
            cA.href = cz.HyperlinkAddress;
            cA.target = "_blank";
            var cx = this.createImage(cy, an[29]);
            cA.appendChild(cx);
            if (cy.setTooltip) {
                cy.setTooltip(cx, function (cB) {
                    if (cB.bindObject == cx) {
                        return false
                    }
                    cB.bindObject = cx;
                    var cC = cz.Hyperlink ? cz.Hyperlink : cz.HyperlinkAddress;
                    cB.setContent(cy.container.ownerDocument.createTextNode(cC));
                    return true
                })
            }
            return cA
        }, an[28]);
        ay(an[27], cv);
        ay("Duration", new H({width: 60, bodyData: "Start,Finish", headText: cw.Duration}));
        ay(an[149], new U({width: 100, bodyData: an[149], headText: cw.Start, disableSummaryEdit: true}));
        ay(an[150], new U({width: 100, bodyData: an[150], headText: cw.Finish, disableSummaryEdit: true}));
        ay(an[142], new W({width: 100, bodyData: an[142], headText: cw.Notes}));
        ay(an[137], new b8({width: 120, bodyData: an[137], headText: cw.ClassName}));
        aC(an[137]).getOptions = true ? (function (cx, cy) {
            return{TaskNormal: an[26], TaskImportant: "TaskImportant"}
        }) : null;
        ay(an[141], new b8({width: 120, bodyData: an[141], headText: cw.ConstraintType, options: window._SFGantt_config.SFGanttField.constraintTypes}));
        ay(an[140], new U({width: 100, bodyData: an[140], headText: cw.ConstraintDate}));
        ay(an[134], new aL({width: 30, bodyData: an[134], headText: cw.Critical}));
        ay(an[74], new ch({width: 30, headText: cw.Selected}));
        ay(an[122], new b9({width: 100, headText: cw.PredecessorTask, bodyFunc: function (cx, cz, cB) {
            var cy = [], cC = cz.getPredecessorTasks();
            for (var cA = 0; cA < cC.length; cA++) {
                cy.push(cC[cA].Name)
            }
            cx.appendChild(cx.ownerDocument.createTextNode(cy.join(",")))
        }, ReadOnly: true}));
        ay(an[123], new b9({width: 100, headText: cw.SuccessorTask, bodyFunc: function (cx, cz, cB) {
            var cy = [], cC = cz.getSuccessorTasks();
            for (var cA = 0; cA < cC.length;
                 cA++) {
                cy.push(cC[cA].Name)
            }
            cx.appendChild(cx.ownerDocument.createTextNode(cy.join(",")))
        }, ReadOnly: true}));
        ay(an[169], new b9({width: 100, bodyData: an[169], headText: cw.Resource, bodyFunc: function (cx, cA, cE) {
            var cz = [], cy = cA.getAssignments();
            for (var cC = 0; cC < cy.length; cC++) {
                var cD = cy[cC].getResource();
                if (cD) {
                    var cB = cD.Name;
                    if (cy[cC].Units != 1) {
                        cB += "[" + (cy[cC].Units * 100) + "%]"
                    }
                    cz.push(cB)
                }
            }
            cx.appendChild(cx.ownerDocument.createTextNode(cz.join(",")))
        }, ReadOnly: true}));
        ay(an[143], new aj({width: 100, bodyData: an[143], headText: cw.PercentComplete}));
        ay(an[139], new U({width: 100, bodyData: an[139], headText: cw.ActualStart, disableSummaryEdit: true}));
        ay(an[138], new U({width: 100, bodyData: an[138], headText: cw.ActualFinish, disableSummaryEdit: true}));
        ay("ActualDuration", new H({width: 60, bodyData: "ActualStart,ActualFinish", headText: cw.ActualDuration}));
        ay(an[133], new U({width: 100, bodyData: an[133], headText: cw.BaselineStart, disableSummaryEdit: true}));
        ay(an[132], new U({width: 100, bodyData: an[132], headText: cw.BaselineFinish, disableSummaryEdit: true}));
        ax("Empty", new b9({width: 36, ReadOnly: true}));
        ax("UID", new b9({width: 36, bodyData: "UID", headText: cw.UID, ReadOnly: true, bodyStyle: {textAlign: an[90]}}));
        ax("ID", new b9({width: 36, bodyData: "ID", headText: cw.ID, ReadOnly: true, bodyStyle: {textAlign: an[90]}}));
        ax("name", new b9({width: 120, bodyData: an[145], headText: cw.ResourceName}));
        ax(an[145], new ba({width: 120, headText: cw.ResourceName}));
        ax(an[147], new b9({width: 100, bodyData: an[147], headText: cw.OutlineNumber, ReadOnly: true}));
        var cv = new I({width: 32, headText: cw.StatusIcon});
        cv.addIcon(function (cz, cy) {
            if (!cz.Notes) {
                return
            }
            var cx = this.createImage(cy, an[30]);
            if (cy.setTooltip) {
                cy.setTooltip(cx, function (cA) {
                    if (cA.bindObject == cx) {
                        return false
                    }
                    cA.bindObject = cx;
                    var cB = aM(cz.elementType, an[142]).headText + ': "' + cz.Notes + '"';
                    cA.setContent(cy.container.ownerDocument.createTextNode(cB));
                    return true
                })
            }
            return cx
        }, an[142]);
        cv.addIcon(function (cz, cy) {
            if (!cz.HyperlinkAddress) {
                return
            }
            var cA = cy.container.ownerDocument.createElement("a");
            cA.href = cz.HyperlinkAddress;
            cA.target = "_blank";
            var cx = this.createImage(cy, an[29]);
            cA.appendChild(cx);
            if (cy.setTooltip) {
                cy.setTooltip(cx, function (cB) {
                    if (cB.bindObject == cx) {
                        return false
                    }
                    cB.bindObject = cx;
                    var cC = cz.Hyperlink ? cz.Hyperlink : cz.HyperlinkAddress;
                    cB.setContent(cy.container.ownerDocument.createTextNode(cC));
                    return true
                })
            }
            return cA
        }, an[28]);
        ax(an[27], cv);
        ax(an[142], new W({width: 100, bodyData: an[142], headText: cw.Notes}));
        ax(an[137], new b8({width: 120, bodyData: an[137], headText: cw.ClassName}));
        aB(an[137]).getOptions = true ? (function (cx, cy) {
            return{ResourceNormal: "ResourceNormal", ResourceImportant: "ResourceImportant"}
        }) : null;
        ax(an[134], new aL({width: 30, bodyData: an[134], headText: cw.Critical}));
        ax(an[74], new ch({width: 30, headText: cw.Selected}));
        ax(an[170], new b9({width: 100, bodyData: an[169], headText: cw.Resource, bodyFunc: function (cx, cE, cD) {
            var cz = [], cy = cE.getAssignments();
            for (var cC = 0; cC < cy.length; cC++) {
                var cB = cy[cC].getResource();
                if (cB) {
                    var cA = cB.Name;
                    if (cy[cC].Units != 1) {
                        cA += "[" + (cy[cC].Units * 100) + "%]"
                    }
                    cz.push(cA)
                }
            }
            cx.appendChild(cx.ownerDocument.createTextNode(cz.join(",")))
        }, ReadOnly: true}));
        b9.linkFields = {};
        aw(an[129], new b8({width: 100, bodyData: an[129], headText: cw.LinkType, options: window._SFGantt_config.SFGanttField.linkTypes}));
        aw("FromTask", new X({width: 100, bodyData: an[122], headText: cw.FromTask}));
        aw("ToTask", new X({width: 100, bodyData: an[123], headText: cw.ToTask}))
    }

    ak(b9, {getField: aM, getFields: aK, setField: aJ, getTaskFields: aI, getResourceFields: aH, getLinkFields: aF, getTaskField: aC, getResourceField: aB, getLinkField: az, setTaskField: ay, setResourceField: ax, setLinkField: aw, addTaskField: au, init: ar});
    function aL() {
        if (arguments.length <= 0) {
            return
        }
        b9.apply(this, arguments);
        this.inputData = this.bodyData
    }

    aL.prototype = new b9();
    ak(aL.prototype, {bodyFunc: function (cu, cv, cx) {
        if (!this.ReadOnly) {
            this.inputFunc(cu, cv, cx);
            return
        }
        var cw = cv[this.bodyData];
        var cy = cx.gantt.config.getConfig(an[23]);
        cu.appendChild(cu.ownerDocument.createTextNode(cw ? cy[1] : cy[0]))
    }, inputFunc: function (cu, cw, cz) {
        var cy = this.inputData, cA = this;
        var cx = cw[this.bodyData];
        var cv = cu.ownerDocument.createElement(an[50]);
        cv.type = an[49];
        cu.appendChild(cv);
        cv.checked = !!cx;
        cn(cv, an[82], function (cC) {
            var cB = cb(cC);
            if (cB && cB != 1) {
                return
            }
            cw.setProperty(cy, cv.checked);
            g(cC)
        })
    }});
    function aj() {
        b9.apply(this, arguments);
        this.inputFunc = this.bodyFunc
    }

    aj.prototype = new b9();
    ak(aj.prototype, {bodyFunc: function (cB, cv, cw) {
        var cz = cv[this.bodyData], cy = cB.ownerDocument;
        cz = (typeof(cz) != an[184]) ? cz : 0;
        cz = Math.max(0, Math.min(cz, 100));
        var cu = cy.createElement("div");
        ak(cu.style, {position: an[188], width: "90%", height: an[187], backgroundColor: an[83], border: an[52], textAlign: an[90]});
        cB.appendChild(cu);
        var cA = cy.createElement("div");
        ak(cA.style, {position: an[189], left: "0px", top: "0px", width: cz + "%", height: an[187], backgroundColor: an[51], zIndex: 2});
        cu.appendChild(cA);
        if (!this.ReadOnly) {
            var cx = cy.createElement("div");
            ak(cx.style, {position: an[189], left: cz + "%", top: "0px", width: "2px", height: an[187], backgroundColor: "blue", zIndex: 3});
            D(cx, an[88]);
            bz(cx, m(this, this.onBarMove(cv, cu)), {container: cu});
            cu.appendChild(cx)
        }
        var cC = cy.createElement("span");
        ak(cC.style, {position: an[188], zIndex: 4});
        cC.appendChild(cy.createTextNode(cz + "%"));
        cu.appendChild(cC)
    }, onBarMove: function (cu, cv) {
        return function (cA, cw, cy) {
            var cx = Math.min(Math.max(cw[0], 0), cv.offsetWidth - 2);
            var cz = Math.round(100 * cx / (cv.offsetWidth - 2));
            if (cy != "end") {
                cv.firstChild.style.width = cx + "px";
                cv.firstChild.nextSibling.style.left = cx + "px";
                cv.lastChild.nodeValue = cz + "%"
            } else {
                cu.setProperty(this.bodyData, cz)
            }
        }
    }});
    function X() {
        b9.apply(this, arguments);
        this.ReadOnly = true
    }

    X.prototype = new b9();
    ak(X.prototype, {bodyFunc: function (cu, cv, cw) {
        var cy = cv[this.bodyData];
        if (!cy) {
            return
        }
        var cx = "(" + aM(cy.elementType, "UID").headText + " " + cy.UID + ") " + cy.Name;
        cu.appendChild(cu.ownerDocument.createTextNode(cx))
    }});
    function ch() {
        aL.apply(this, arguments);
        this.bodyData = an[74]
    }

    ch.prototype = new b9();
    ak(ch.prototype, {bodyFunc: function (cu, cv, cx) {
        if (!this.ReadOnly) {
            this.inputFunc(cu, cv, cx);
            return
        }
        var cw = cv[this.bodyData];
        var cy = cx.gantt.config.getConfig(an[23]);
        cu.appendChild(cu.ownerDocument.createTextNode(cw ? cy[1] : cy[0]))
    }, inputFunc: function (cu, cw, cz) {
        var cy = this.inputData, cA = this;
        var cx = cw[this.bodyData];
        var cv = cu.ownerDocument.createElement(an[50]);
        cv.type = an[49];
        cu.appendChild(cv);
        cv.checked = !!cx;
        cn(cv, an[180], g);
        cn(cv, an[182], g);
        cn(cv, an[82], function (cB) {
            g(cB);
            cw.setProperty(an[74], cv.checked)
        })
    }});
    function W() {
        b9.apply(this, arguments);
        this.inputData = this.bodyData
    }

    W.prototype = new b9();
    ak(W.prototype, {inputFunc: function (cv, cx, cA) {
        var cz = this.inputData, cB = this;
        var cy = cx[cz];
        var cu = cf(cv, cA.container);
        var cw = cv.ownerDocument.createElement("textarea");
        ak(cw.style, {position: an[189], left: cu[0] + "px", top: cu[1] + "px", width: (this.width - 2) + "px", height: "100px", border: an[52], overflow: an[190], zIndex: 100});
        cn(cw, an[82], g);
        cn(cw, an[180], g);
        cn(cw, an[182], function (cC) {
            cm(cw.cml);
            cw.cml = cn(cw, an[53], g);
            g(cC)
        });
        cn(cw, an[25], g);
        cw.cml = cn(cw, an[53], i);
        cw.value = (typeof(cy) != an[184]) ? cy : "";
        if (!this.ReadOnly) {
            cn(cw, an[24], function (cD) {
                if (cD.keyCode == 27) {
                    var cC = cx[cz];
                    cw.value = (typeof(cC) != an[184]) ? cC : ""
                }
            });
            cn(cw, an[151], function () {
                cx.setProperty(cz, cw.value)
            })
        } else {
            cw.disabled = true
        }
        cn(cw, "blur", function () {
            d(cw)
        });
        cA.container.appendChild(cw);
        cw.focus()
    }});
    function U() {
        b9.apply(this, arguments);
        this.inputData = this.bodyData
    }

    U.prototype = new b9();
    ak(U.prototype, {bodyFunc: function (cu, cv, cw) {
        var cx = cv[this.bodyData] ? ac(cv[this.bodyData], cw.gantt.config.getConfig("SFGanttField/dateShowFormat")) : "";
        cu.appendChild(cu.ownerDocument.createTextNode(cx))
    }, inputFunc: function (cu, cx, cA) {
        if (this.disableSummaryEdit && cx.Summary) {
            d(cu, true);
            this.showBody(cu, cx, cA);
            return
        }
        var cz = this.inputData, cB = this;
        var cy = cx[cB.inputData];
        cy = (typeof(cy) != an[184]) ? cy : new Date();
        var cv = b9.createInput(cu, cB, cA);
        var cw = cA.gantt.config.getConfig(an[22]);
        cv.value = ac(cy, cw.dateInputFormat);
        cn(cv, an[24], function (cD) {
            if (cD.keyCode == 27) {
                var cC = cx[cB.inputData];
                cv.value = ac(cC, cw.dateInputFormat)
            }
            if (cD.keyCode == 13) {
                if (cv.value) {
                    var cC = ae(cv.value);
                    if (cC && !isNaN(cC)) {
                        cx.setProperty(cz, cC);
                        d(cu, true);
                        cB.showBody(cu, cx, cA)
                    } else {
                        if (cw.noticeWrongFormat) {
                            alert(cw.noticeWrongFormat)
                        }
                        cv.focus()
                    }
                } else {
                    cx.setProperty(cz, null)
                }
            }
        });
        cn(cv, an[151], function () {
            if (cv.value) {
                var cC = ae(cv.value);
                if (cC && !isNaN(cC)) {
                    cx.setProperty(cz, cC)
                } else {
                    if (cw.noticeWrongFormat) {
                        alert(cw.noticeWrongFormat)
                    }
                    cv.focus()
                }
            } else {
                cx.setProperty(cz, null)
            }
        });
        cu.appendChild(cv);
        cv.focus()
    }});
    function H() {
        b9.apply(this, arguments);
        this.ReadOnly = true
    }

    H.prototype = new b9();
    ak(H.prototype, {bodyFunc: function (cE, cz, cB) {
        var cy = this.bodyData.split(","), cv = cz[cy[0]], cD = cz[cy[1]], cA = 0;
        if (!cv || !cD) {
            return
        }
        var cu = cB.gantt.data.getCalendar(), cw = cv, cF = -1;
        while (cw < cD) {
            var cx = cu.getWorkTime(cw);
            var cC = [parseInt(cx[0] / 1000 / 60 / 60 / 24), parseInt(cx[1] / 1000 / 60 / 60 / 24)];
            cA += cC[1] - cC[0] + 1;
            if (cF == cC[0]) {
                cA--
            }
            cF = cC[1];
            cw = cx[1]
        }
        cE.appendChild(cE.ownerDocument.createTextNode(E(cB.gantt.config.getConfig("SFGanttField/durationFormat"), cA)))
    }});
    function b8() {
        b9.apply(this, arguments);
        this.inputData = this.bodyData
    }

    b8.prototype = new b9();
    ak(b8.prototype, {_getOptions: function (cv, cy) {
        var cu = this.getOptions(cv, cy);
        if (cu) {
            if (!cu.length) {
                var cx, cw = cu;
                cu = [];
                for (cx in cw) {
                    if (typeof(cw[cx]) == an[191]) {
                        cu.push([cx, cw[cx]])
                    }
                }
            }
        }
        return cu
    }, getOptions: function () {
        return this.options
    }, bodyFunc: function (cA, cv, cw) {
        var cB = this.inputData, cx = this, cC = this._getOptions(cv, cw), cy = cA.ownerDocument;
        var cz = cv[cB];
        for (var cu = 0; cu < cC.length; cu++) {
            if (typeof(cC[cu]) == an[194] && cC[cu].length > 1 && cC[cu][0] == cz) {
                cA.appendChild(cy.createTextNode(cC[cu][1]));
                return
            }
            if (typeof(cC[cu]) != an[194] && cu == cz) {
                cA.appendChild(cy.createTextNode(cC[cu]));
                return
            }
        }
        cA.appendChild(cy.createTextNode((typeof(cz) != an[184]) ? cz : ""))
    }, inputFunc: function (cB, cv, cw) {
        var cC = this.inputData, cx = this, cD = this._getOptions(cv, cw);
        var cA = cv[cC];
        var cy = cB.ownerDocument.createElement("select");
        cn(cy, an[82], g);
        cn(cy, an[180], g);
        cn(cy, an[182], function (cE) {
            cm(cy.cml);
            cy.cml = cn(cy, an[53], g);
            g(cE)
        });
        cn(cy, an[25], g);
        cy.cml = cn(cy, an[53], i);
        for (var cu = 0; cu < cD.length; cu++) {
            var cz = cD[cu];
            if (typeof(cz) != an[194]) {
                cz = [cu, cz]
            }
            cy.options.add(new Option(cz[1], cz[0]))
        }
        cy.value = (typeof(cA) != an[184]) ? cA : "";
        cn(cy, an[151], function () {
            cv.setProperty(cC, cy.value)
        });
        cB.appendChild(cy);
        cy.focus()
    }});
    function ba() {
        b9.apply(this, arguments);
        this.bodyData = "Name,Summary,Collapse";
        this.inputData = an[145]
    }

    ba.prototype = new b9();
    ak(ba.prototype, {bodyFunc: function (cu, cw, cx) {
        var cz = cu.ownerDocument;
        if (cx) {
            for (var cy = cw; cy; cy = cy.getParent()) {
                if (cy == cw && cw.Summary) {
                    continue
                }
                cu.appendChild(cz.createTextNode(al("6Qmm")))
            }
        }
        if (cw.Summary && cx && !(cx.gantt.hideSummary && cx.gantt.inline)) {
            var cv = this.getCollapseImg(cx.gantt, cw.Collapse);
            cu.appendChild(cv);
            cn(cv, an[82], function (cA) {
                g(cA);
                cw.setProperty(an[136], !cw.Collapse)
            })
        }
        cu.appendChild(cz.createTextNode((cw.Name ? cw.Name : "")))
    }, getCollapseImg: function (cv, cw) {
        var cu = cv.createImage("collapse_" + (cw ? "close" : "open"));
        ak(cu.style, {margin: "1px", cursor: an[193]});
        return cu
    }});
    function I() {
        b9.apply(this, arguments);
        this.ReadOnly = true;
        this.bodyDatas = [];
        this.icons = []
    }

    I.prototype = new b9();
    ak(I.prototype, {headFunc: function (cu, cw) {
        var cv = cw.gantt.createImage("icon_taskstatus");
        ak(cv.style, {position: an[188]});
        cu.appendChild(cv)
    }, bodyFunc: function (cu, cx, cy) {
        cu.vAlign = "middle";
        var cv;
        for (var cw = 0; cw < this.icons.length; cw++) {
            if (cv = this.icons[cw].showHandle.apply(this, [cx, cy.gantt])) {
                cu.appendChild(cv)
            }
        }
    }, createImage: function (cv, cw) {
        var cu = cv.createImage(cw);
        ak(cu.style, {position: an[188]});
        return cu
    }, addIcon: function (cw, cx) {
        if (cx) {
            var cu = cx.split(",");
            for (var cv = cu.length - 1; cv >= 0; cv--) {
                if (!B(this.bodyDatas, cu[cv])) {
                    this.bodyDatas.push(cu[cv])
                }
            }
            this.bodyData = this.bodyDatas.join(",")
        }
        this.icons.push({showHandle: cw})
    }});
    function R() {
    }

    ak(R.prototype, {initialize: function () {
        return false
    }, show: function () {
    }, onScale: function () {
    }, onUpdate: function () {
    }, onMouseDown: function () {
    }, getTooltip: function () {
    }, remove: function () {
    }, depose: function () {
    }});
    function bd() {
    }

    bd.prototype = new R();
    ak(bd.prototype, {initialize: function (cu) {
        ak(this, {control: cu, name: "MilestoneHead"});
        return true
    }, show: function (cx, cu) {
        var cB = cx.Start.valueOf(), cy = cx.Finish.valueOf();
        if (cB != cy) {
            return
        }
        var cA = this.control, cw = cA.gantt, cz = cA.getTaskStyle(cx);
        var cv = cu[this.name] = cw.createImage(cz.milestoneImage || an[21], {color: (cz.milestoneImageColor || an[60]), position: [(-Math.floor((cA.taskHeight - 1) / 2)), Math.ceil(cA.taskPadding / 2)], size: [(cA.taskHeight - 1), (cA.taskHeight - 1)]});
        ak(cv.style, {position: an[189], zIndex: 150});
        cu.taskDiv.appendChild(cv)
    }, getTooltip: function (cv, cu, cx, cz) {
        if (cz.target != cu[this.name] || !this.control.taskNoticeFields) {
            return false
        }
        var cy = this.control;
        if (cx.bindObject == cv && cx.bindType == an[170]) {
            return false
        }
        var cw = cy.getTaskTooltipContent(cv, cy.tooltipTitle.milestone, cy.taskNoticeFields.split(","));
        cx.bindObject = cv;
        cx.bindType = an[170];
        cx.setContent(cw);
        return true
    }, onUpdate: function (cw, cu, cy) {
        var cv = this.control.gantt, cA = cw.Start.valueOf(), cx = cw.Finish.valueOf();
        if (cA != cx) {
            this.remove(cw, cu);
            return
        }
        if (B(cy, an[137])) {
            this.remove(cw, cu);
            this.show(cw, cu);
            return
        }
        var cz = cu[this.name];
        if (!cz) {
            this.show(cw, cu)
        }
    }, remove: function (cv, cu) {
        d(cu[this.name]);
        delete cu[this.name]
    }});
    function a2() {
    }

    a2.prototype = new R();
    ak(a2.prototype, {initialize: function (cu) {
        ak(this, {control: cu, name: "SummaryHead"});
        return true
    }, show: function (cv, cy, cz) {
        var cu = cv.Start.valueOf(), cE = cv.Finish.valueOf(), cF = cy.taskDiv.ownerDocument;
        if (cu == cE || !cv.Summary) {
            return
        }
        var cC = this.control, cx = cC.gantt, cD = cy[this.name] = [];
        cz = cz ? cz : cx.getScale();
        var cG = cC.getTaskStyle(cv);
        for (var cB = 0;
             cB < 2; cB++) {
            var cw = -Math.floor((cC.taskHeight - 1) / 2);
            if (cB > 0) {
                cw += (cE - cu) / cz
            }
            var cA = cx.createImage(cG.summaryImage || an[20], {color: (cG.summaryImageColor || an[60]), position: [cw, Math.ceil(cC.taskPadding / 2)], size: [(cC.taskHeight - 1), (cC.taskHeight - 1)]});
            cD.push(cA);
            ak(cA.style, {position: an[189], zIndex: 150});
            cy.taskDiv.appendChild(cA)
        }
    }, onUpdate: function (cw, cu, cz) {
        var cv = this.control.gantt, cB = cw.Start.valueOf(), cx = cw.Finish.valueOf(), cy = this.control;
        if (cB == cx || !cw.Summary) {
            this.remove(cw, cu);
            return
        }
        var cA = cu[this.name];
        if (!cA) {
            this.show(cw, cu)
        } else {
            if (B(cz, an[149]) || B(cz, an[150])) {
                cu[this.name][1].style.left = (-Math.floor((cy.taskHeight - 1) / 2) + (cx - cB) / cv.getScale()) + "px"
            }
        }
    }, onScale: function (cv, cu, cw) {
        var cx = cu[this.name];
        if (cx) {
            cx[1].style.left = (-Math.floor((this.control.taskHeight - 1) / 2) + (cv.Finish - cv.Start) / cw) + "px"
        }
    }, remove: function (cv, cu) {
        var cw = cu[this.name];
        if (cw) {
            d(cw[0]);
            d(cw[1])
        }
        delete cu[this.name]
    }});
    function u() {
    }

    u.prototype = new R();
    ak(u.prototype, {initialize: function (cu) {
        ak(this, {control: cu, name: "BarSummary"});
        return true
    }, show: function (cw, cy, cz) {
        var cv = cw.Start.valueOf(), cB = cw.Finish.valueOf();
        if (cv >= cB || !cw.Summary) {
            return
        }
        var cA = this.control, cx = cA.gantt, cu = cy.taskDiv.ownerDocument.createElement("div");
        cz = cz ? cz : cx.getScale();
        cy[this.name] = cu;
        cu.style.cssText = an[19] + ((cB - cv) / cz) + an[18] + Math.ceil(cA.taskPadding / 2) + an[35] + Math.floor(cA.taskHeight / 2 - 1) + "px;";
        var cC = cA.getTaskStyle(cw);
        if (cC.summaryBarStyle) {
            ak(cu.style, cC.summaryBarStyle)
        }
        cy.taskDiv.appendChild(cu)
    }, getTooltip: function (cv, cu, cx, cz) {
        if (cz.target != cu[this.name] || !this.control.taskNoticeFields) {
            return false
        }
        var cy = this.control;
        if (cx && cx.bindObject == cv && cx.bindType == an[170]) {
            return false
        }
        var cw = cy.getTaskTooltipContent(cv, cy.tooltipTitle.summary, cy.taskNoticeFields.split(","));
        cx.bindObject = cv;
        cx.bindType = an[170];
        cx.setContent(cw);
        return true
    }, onUpdate: function (cw, cu, cz) {
        var cv = this.control.gantt, cB = cw.Start.valueOf(), cx = cw.Finish.valueOf();
        if (cB >= cx || !cw.Summary) {
            this.remove(cw, cu);
            return
        }
        var cA = cu[this.name];
        if (!cA) {
            this.show(cw, cu, cv.getScale())
        } else {
            var cy = cA.style;
            if (B(cz, an[149]) || B(cz, an[150])) {
                cy.width = ((cx - cB) / cv.getScale()) + "px"
            }
        }
    }, onScale: function (cv, cu, cw) {
        var cx = cu[this.name];
        if (cx) {
            cx.style.width = ((cv.Finish - cv.Start) / cw) + "px"
        }
    }, remove: function (cv, cu) {
        d(cu[this.name]);
        delete cu[this.name]
    }});
    function av() {
    }

    av.prototype = new R();
    ak(av.prototype, {initialize: function (cu) {
        ak(this, {control: cu, name: "BarNormal"});
        return true
    }, show: function (cw, cy, cz) {
        var cv = cw.Start.valueOf(), cB = cw.Finish.valueOf();
        if (cv >= cB || cw.Summary) {
            return
        }
        var cA = this.control, cx = cA.gantt, cu = cy.taskDiv.ownerDocument.createElement("div");
        cz = cz ? cz : cx.getScale();
        cy[this.name] = cu;
        var cC = cA.taskHeight * (cx.isTracking ? cA.trackNormalHeightScale : 1);
        cu.style.cssText = an[19] + ((cB - cv) / cz) + an[18] + Math.ceil(cA.taskPadding / 2 + cA.taskHeight * cA.trackNormalTopScale) + an[35] + cC + "px;cursor:move;";
        var cE = cA.getTaskStyle(cw), cD = cE.barStyle;
        if (cD) {
            if (cD.bgImage) {
                cx.setBackgroundImage(cu, cD.bgImage, {color: cD.bgColor})
            }
            ak(cu.style, cD)
        }
        cy.taskDiv.appendChild(cu)
    }, onUpdate: function (cw, cu, cz) {
        var cv = this.control.gantt, cB = cw.Start.valueOf(), cx = cw.Finish.valueOf();
        if (cB >= cx || cw.Summary) {
            this.remove(cw, cu);
            return
        }
        var cA = cu[this.name];
        if (!cA) {
            this.show(cw, cu)
        } else {
            if (B(cz, an[137])) {
                this.remove(cw, cu);
                this.show(cw, cu);
                return
            }
            var cy = cA.style;
            if (B(cz, an[149]) || B(cz, an[150])) {
                cA.style.left = "0px";
                cy.width = ((cx - cB) / cv.getScale()) + "px"
            }
        }
    }, getTooltip: function (cv, cu, cx, cz) {
        if (cz.target != cu[this.name] || !this.control.taskNoticeFields) {
            return false
        }
        var cy = this.control;
        if (cx && cx.bindObject == cv && cx.bindType == an[170]) {
            return false
        }
        var cw = cy.getTaskTooltipContent(cv, cy.tooltipTitle.task, cy.taskNoticeFields.split(","));
        cx.bindObject = cv;
        cx.bindType = an[170];
        cx.setContent(cw);
        return true
    }, onScale: function (cv, cu, cw) {
        var cx = cu[this.name];
        if (cx) {
            cx.style.width = ((cv.Finish - cv.Start) / cw) + "px"
        }
    }, onMouseDown: function (cv, cu, cw) {
        if (cw.target != cu[this.name]) {
            return
        }
        cg(cu[this.name], an[82], []);
        new s(this.control.div, m(this, this.onMove), {interval: 32}).onMouseDown(cw)
    }, onMove: function (cL, cD, cx) {
        var cE = this.control, cT = cE.gantt, cM = cE.dragTask, cH = cT.getElementDrawObj(cM)[cE.proTag];
        var cK = [cD[0] - cL[0], cD[1] - cL[1]];
        if (!cE.dragType) {
            if (Math.sqrt(Math.pow(cK[0], 2) + Math.pow(cK[1], 2)) < 5) {
                return
            }
            if (cK[0] == 0 || cK[1] / cK[0] > 2 && !cE.gantt.readOnly && cE.gantt.data.canAddLink(cM) && !cE.gantt.disableAddLink && !cE.disableDragAddLink) {
                cE.dragType = an[168];
                cE.startHeight = cH.taskDiv.offsetTop;
                var cC = {Type: 1, PredecessorTask: cM};
                cE.dragLink = cC;
                if (cT.getTooltip) {
                    var cz = cT.getTooltip();
                    cT.getTooltip().setEnable(false);
                    cz.setContent(cE.getLinkTooltipContent(cC));
                    cz.show([0, 0])
                }
                cH[this.name].style.borderStyle = an[173]
            } else {
                if ((cK[1] == 0 || cK[0] / cK[1] > 2) && !cT.readOnly && cM.canSetProperty(an[149]) && !cE.gantt.disableUpdateTask && !cE.disableDragMoveTask) {
                    cE.dragType = an[149];
                    if (cT.getTooltip) {
                        var cz = cT.getTooltip();
                        cz.setContent(cE.getTaskTooltipContent(cM, cE.tooltipTitle.task, [an[149], an[150]]));
                        cT.getTooltip().setEnable(false);
                        var cW = cf(cH.taskDiv, cT.container);
                        cW[1] += cT.getElementDrawObj(cM).height;
                        cz.show(cW)
                    }
                    cg(cT, "taskbardragstart", [cM])
                } else {
                    return
                }
            }
        }
        if (cE.dragType == an[149]) {
            var cB = cK[0] * cT.getScale();
            var cA = new Date(cM.Start.valueOf() + cB), cG = new Date(cM.Finish.valueOf() + cB);
            if (cx != "end") {
                var cy = cD[0] + cT.getMapPanel().offsetLeft;
                if (cy <= 0 || cy > cT.getLayout(an[94]).offsetWidth) {
                    this.dmDir = (cy <= 0) ? -1 : 1;
                    this.lastOffset = cK[0];
                    if (!this.dmt) {
                        this.dmt = window.setInterval(m(this, this.onTime), 32)
                    }
                } else {
                    if (this.dmt) {
                        window.clearInterval(this.dmt);
                        delete this.dmt
                    }
                }
                cH[this.name].style.left = cT.getMapPanelPosition(cA) - cT.getTimePanelPosition(cM.Start) + "px";
                if (cT.getTooltip) {
                    cT.getTooltip().setContent(cE.getTaskTooltipContent({Start: cA, Finish: cG}, cE.tooltipTitle.task, [an[149], an[150]]));
                    cT.getTooltip().setEnable(false)
                }
            } else {
                if (this.dmt) {
                    window.clearInterval(this.dmt);
                    delete this.dmt
                }
                if (cM.canSetProperty(an[150], cG) && cM.canSetProperty(an[149], cA)) {
                    cM.setProperty(an[150], cG);
                    cM.setProperty(an[149], cA)
                } else {
                    cH[this.name].style.left = "0px"
                }
                cg(cT, "taskbardragend", [cM]);
                if (cT.getTooltip) {
                    cT.getTooltip().setEnable(true)
                }
                delete cE.dragType
            }
        } else {
            if (cE.dragFlagLine) {
                d(cE.dragFlagLine)
            }
            if (cx != "end") {
                var cB = cf(cH.taskDiv, cE.div);
                var cJ = [];
                cJ.push([cL[0], cL[1]]);
                cJ.push([cD[0], cD[1]]);
                var cU = Number.MAX_VALUE, cS = Number.MAX_VALUE, cR = 0, cP = 0;
                for (var cI = 0; cI < cJ.length; cI++) {
                    cU = Math.min(cU, cJ[cI][0]);
                    cS = Math.min(cS, cJ[cI][1]);
                    cR = Math.max(cR, cJ[cI][0]);
                    cP = Math.max(cP, cJ[cI][1])
                }
                var cN = this.getGraphics();
                cE.div.appendChild(cN.div);
                cN.setLineColor(an[60]);
                cN.setLineWeight(1);
                cN.setPosition({x: cU, y: cS});
                cN.start({x: 0, y: 0}, 1, {x: cR - cU, y: cP - cS});
                cN.moveTo({x: cJ[0][0] - cU, y: cJ[0][1] - cS});
                for (var cI = 1; cI < cJ.length; cI++) {
                    cN.lineTo({x: cJ[cI][0] - cU, y: cJ[cI][1] - cS})
                }
                cN.finish();
                cE.dragFlagLine = cN.div;
                var cw = cD[1] - cE.startHeight;
                var cF = cM;
                if (cw < 0) {
                    cF = cF.getPreviousViewTask()
                }
                while (cF) {
                    var cX = cw + (cw < 0 ? 1 : -1) * cT.getElementHeight(cF);
                    if (cw * cX <= 0) {
                        break
                    }
                    cF = cw > 0 ? cF.getNextViewTask() : cF.getPreviousViewTask();
                    cw = cX
                }
                var cQ = cT.getTimeByMapPanelPosition(cD[0]);
                while (cF) {
                    if (cF.Start <= cQ && cQ <= cF.Finish) {
                        break
                    }
                    cF = cw > 0 ? cF.getNextViewTask() : cF.getPreviousViewTask();
                    if (cT.getElementHeight(cF) > 0) {
                        cF = null
                    }
                }
                if (cF == cM) {
                    cF = null
                }
                if (cF) {
                    var cv = cT.getElementDrawObj(cF)[cE.proTag].taskDiv;
                    var cu = cf(cv, cE.div);
                    if (cD[0] < cu[0] - 10 || cD[0] > cu[0] + cv.offsetWidth + 10) {
                        cF = null
                    }
                }
                var cO = cE.dragLink.SuccessorTask, cV;
                if (cO != cF) {
                    if (cF) {
                        cV = cT.getElementDrawObj(cF)[cE.proTag];
                        if (cV && cV[this.name]) {
                            cV[this.name].style.borderStyle = an[173]
                        }
                    }
                    if (cO) {
                        cV = cT.getElementDrawObj(cO)[cE.proTag];
                        if (cV && cV[this.name]) {
                            cV[this.name].style.borderStyle = an[177]
                        }
                    }
                    cE.dragLink.SuccessorTask = cF;
                    if (cT.getTooltip) {
                        cT.getTooltip().setContent(cE.getLinkTooltipContent(cE.dragLink));
                        cT.getTooltip().setEnable(false)
                    }
                }
            } else {
                var cO = cE.dragLink.SuccessorTask;
                if (cE.dragLink && cO) {
                    cO.addPredecessorLink(cM, 1)
                }
                if (cO) {
                    var cV = cT.getElementDrawObj(cO)[cE.proTag];
                    if (cV && cV[this.name]) {
                        cV[this.name].style.borderStyle = an[177]
                    }
                }
                cH[this.name].style.borderStyle = an[177];
                if (cT.getTooltip) {
                    cT.getTooltip().setEnable(true)
                }
                delete cE.dragType;
                delete cE.dragTask
            }
        }
    }, onTime: function () {
        var cx = this.control, cw = cx.gantt, cv = cx.dragTask, cu = cw.getElementDrawObj(cv)[cx.proTag];
        cw.setStartTime(new Date(cw.getStartTime().valueOf() + cw.getScale() * 6 * this.dmDir));
        this.lastOffset += 6 * this.dmDir;
        var cy = new Date(cv.Start.valueOf() + this.lastOffset * cw.getScale());
        cu[this.name].style.left = cw.getMapPanelPosition(cy) - cw.getTimePanelPosition(cv.Start) + "px"
    }, getGraphics: function () {
        var cu = [bD, cr, bg, aq];
        for (var cv = 0; cv < cu.length; cv++) {
            if (cu[cv].isSupport()) {
                return new cu[cv]()
            }
        }
        return new c(true)
    }, remove: function (cv, cu) {
        d(cu[this.name]);
        delete cu[this.name]
    }});
    function bv() {
    }

    bv.prototype = new R();
    ak(bv.prototype, {initialize: function (cz) {
        var cu = this.fields = {}, cw = false, cv = ["Center", "Top", "Bottom"], cy;
        if (!cz.gantt.inline) {
            cv = cv.concat("Left", "Right");
            if ((cy = cz.taskBarField)) {
                cu.Right = aC(cy);
                if (!cw) {
                    cw = true
                }
            }
        }
        for (var cx = 0; cx < cv.length; cx++) {
            if ((cy = cz["taskBar" + cv[cx] + "Field"])) {
                cu[cv[cx]] = aC(cy);
                if (!cw) {
                    cw = true
                }
            }
        }
        if (!cw) {
            return false
        }
        ak(this, {control: cz, name: "Text"});
        return true
    }, getStyle: function (cw, cA, cE) {
        if (!cw.Start || !cw.Finish) {
            return
        }
        var cu = cw.Start.valueOf(), cD = cw.Finish.valueOf(), cy = this.control.gantt;
        var cx = 0, cv = Math.max((cD - cu) / cA, 1), cC = Math.ceil((cy.itemHeight - cy.fontSize) / 2), cB = an[104], cz = an[190];
        switch (cE) {
            case"Left":
                cv = 1000;
                cx = -1010;
                cB = an[66];
                break;
            case"Right":
                cv = 0;
                cx = (cD - cu) / cA + 10;
                cz = "visible";
                break;
            case"Top":
                cC -= Math.max(cy.fontSize, cy.itemHeight / 4) + 2;
                cB = an[90];
                break;
            case"Bottom":
                cC += Math.max(cy.fontSize, cy.itemHeight / 4) + 2;
                cB = an[90];
                break;
            case"Center":
                cB = an[90];
                break;
            default:
                return
        }
        return{left: cx + "px", top: cC + "px", width: cv ? (cv + "px") : "auto", textAlign: cB, overflow: cz}
    }, show: function (cw, cy, cz) {
        var cA = this.control, cx = cA.gantt, cD = cx.getElementDrawObj(cw).height, cB = this.fields, cv;
        cz = cz ? cz : cx.getScale();
        for (var cC in cB) {
            var cu = this.getStyle(cw, cz, cC);
            if (!cu) {
                continue
            }
            cv = cy.taskDiv.ownerDocument.createElement("div");
            cv.noWrap = true;
            cy[this.name + cC] = cv;
            cB[cC].showBody(cv, cw, cA);
            cv.style.cssText = "position:absolute;white-space:nowrap;z-index:200;cursor:default;font-weight:bolder;font-size:" + cx.fontSize + "px;";
            ak(cv.style, cu);
            cy.taskDiv.appendChild(cv)
        }
    }, onUpdate: function (cx, cz, cw) {
        var cB = this.control, cy = cB.gantt, cA = cA ? cA : cy.getScale();
        var cC = this.fields;
        for (var cD in cC) {
            var cv = this.getStyle(cx, cA, cD);
            if (!cv) {
                continue
            }
            var cu = cz[this.name + cD];
            if (!cu) {
                this.show(cx, cz);
                return
            }
            if (B(cw, an[149]) || B(cw, an[150])) {
                ak(cu.style, cv)
            }
            if (cC[cD].checkUpdate(cw)) {
                cC[cD].showBody(cu, cx, cB)
            }
        }
    }, onScale: function (cw, cv, cz) {
        var cu = this.fields;
        for (var cx in cu) {
            var cy = this.getStyle(cw, cz, cx);
            if (!cy) {
                continue
            }
            var cA = cv[this.name + cx];
            if (!cA) {
                continue
            }
            ak(cA.style, cy)
        }
    }, remove: function (cw, cv) {
        var cu = this.fields;
        for (var cx in cu) {
            d(cv[this.name + cx]);
            delete cv[this.name + cx]
        }
    }});
    function cs() {
    }

    cs.prototype = new R();
    ak(cs.prototype, {initialize: function (cu) {
        if (cu.gantt.readOnly || cu.gantt.disableUpdateTask || cu.disableDragResizeTask) {
            return false
        }
        ak(this, {control: cu, name: "Resize"});
        return true
    }, show: function (cw, cy, cz) {
        var cv = cw.Start.valueOf(), cB = cw.Finish.valueOf(), cA = this.control, cx = cA.gantt, cC = cx.getElementDrawObj(cw).height;
        cz = cz ? cz : cx.getScale();
        if (cv >= cB || cw.Summary || cx.readOnly || !cw.canSetProperty(an[150])) {
            return
        }
        var cu = cy.taskDiv.ownerDocument.createElement("div");
        cy[this.name] = cu;
        cu.style.cssText = an[17] + (cA.taskHeight - 1) + "px;left:" + ((cB - cv) / cz - Math.floor((cA.taskHeight - 1) / 2)) + an[18] + Math.ceil(cA.taskPadding / 2) + an[35] + (cC / 2 + 2) + "px;z-index:150;font-size:0px;cursor:w-resize;";
        cy.taskDiv.appendChild(cu)
    }, onUpdate: function (cy, cA, cx) {
        var cw = cy.Start.valueOf(), cC = cy.Finish.valueOf(), cB = this.control, cz = cB.gantt, cD = cz.getElementHeight(cy);
        if (cw >= cC || cy.Summary || cz.readOnly || !cy.canSetProperty(an[150]) || cz.disableUpdateTask || cB.disableDragResizeTask) {
            this.remove(cy, cA);
            return
        }
        var cv = cA[this.name];
        if (!cv) {
            this.show(cy, cA)
        } else {
            var cu = cv.style;
            if (B(cx, an[149]) || B(cx, an[150])) {
                cu.left = ((cC - cw) / cz.getScale() - Math.floor((cB.taskHeight - 1) / 2)) + "px"
            }
        }
    }, onScale: function (cv, cu, cw) {
        var cx = cu[this.name];
        if (cx) {
            cx.style.left = ((cv.Finish - cv.Start) / cw) + "px"
        }
    }, onMouseDown: function (cv, cu, cx) {
        if (cx.target != cu[this.name]) {
            return
        }
        var cw = this.control;
        new s(cw.div, m(this, this.onResizeMove)).onMouseDown(cx)
    }, onResizeMove: function (cv, cB, cC) {
        var cz = this.control, cx = cz.gantt, cw = cz.dragTask, cu = cx.getElementDrawObj(cw)[cz.proTag].BarNormal, cy = cx.getScale();
        if (cC == an[179]) {
            if (cx.getTooltip) {
                var cE = cx.getTooltip();
                cE.setContent(cz.getTaskTooltipContent(cw, cz.tooltipTitle.task, [an[149], an[150]]));
                var cA = cf(cu, cx.container);
                cA[1] += cx.getElementDrawObj(cw).height;
                cE.show(cA)
            }
        }
        var cD = cw.Finish.valueOf() + [cB[0] - cv[0]] * cy;
        cD = Math.max(cw.Start.valueOf(), cD);
        if (cC != "end") {
            cu.style.width = (cD - cw.Start.valueOf()) / cy + "px";
            if (cx.getTooltip) {
                cx.getTooltip().setContent(cz.getTaskTooltipContent({Start: cw.Start, Finish: new Date(cD)}, cz.tooltipTitle.task, [an[149], an[150]]))
            }
        } else {
            if (!cw.setProperty(an[150], new Date(cD))) {
                cu.style.width = (cw.Finish.valueOf() - cw.Start.valueOf()) / cy + "px"
            }
        }
    }, remove: function (cv, cu) {
        d(cu[this.name]);
        delete cu[this.name]
    }});
    function K() {
    }

    K.prototype = new R();
    ak(K.prototype, {initialize: function (cu) {
        if (cu.gantt.readOnly || cu.gantt.disableUpdateTask || cu.disableDragChangePercent) {
            return false
        }
        ak(this, {control: cu, name: "PercentChange"});
        return true
    }, show: function (cw, cz) {
        var cv = cw.Start.valueOf(), cC = cw.Finish.valueOf(), cB = cw.PercentComplete, cA = this.control, cy = cA.gantt, cD = cA.taskHeight;
        if (cv >= cC || cw.Summary || cy.readOnly || !cw.canSetProperty(an[143])) {
            return
        }
        cB = cB ? cB : 0;
        var cx = (cC - cv) / cy.getScale() * cB / 100;
        var cu = cz.taskDiv.ownerDocument.createElement("div");
        cz[this.name] = cu;
        cu.style.cssText = an[17] + (Math.floor((cA.taskHeight - 1) / 2)) + "px;background-color:#FFFFFF;left:" + cx + an[18] + Math.ceil(cA.taskPadding / 2) + an[35] + (cD + 2) + "px;z-index:250;font-size:0px;cursor:col-resize;";
        cz.taskDiv.appendChild(cu);
        C(cu, 0.01)
    }, onUpdate: function (cy, cA, cx) {
        var cw = cy.Start.valueOf(), cD = cy.Finish.valueOf(), cC = cy.PercentComplete, cB = this.control, cz = cB.gantt;
        if (cw >= cD || cy.Summary || cz.readOnly || !cy.canSetProperty(an[143]) || cz.disableUpdateTask || cB.disableDragChangePercent) {
            this.remove(cy, cA);
            return
        }
        var cv = cA[this.name];
        if (!cv) {
            this.show(cy, cA)
        } else {
            var cu = cv.style, cC = cC ? cC : 0;
            if (B(cx, an[143]) || B(cx, an[149]) || B(cx, an[150])) {
                cu.left = (cD - cw) / cz.getScale() * cC / 100 + "px"
            }
        }
    }, onScale: function (cv, cu, cx) {
        var cy = cu[this.name];
        var cw = cv.PercentComplete;
        cw = cw ? cw : 0;
        if (cy) {
            cy.style.left = (cv.Finish - cv.Start) / this.control.gantt.getScale() * cw / 100 + "px"
        }
    }, onMouseDown: function (cv, cu, cx) {
        if (cx.target != cu[this.name]) {
            return
        }
        var cw = this.control;
        new s(cw.div, m(this, this.onPercentMove)).onMouseDown(cx)
    }, onPercentMove: function (cw, cD, cF) {
        var cB = this.control, cz = cB.gantt, cx = cB.dragTask, cA = cz.getElementDrawObj(cB.dragTask)[cB.proTag], cy = cA.Percent;
        if (!cy) {
            return
        }
        var cE = cx.PercentComplete, cv = cx.Start, cG = cx.Finish, cI = (cG - cv) / cz.getScale();
        if (!cE) {
            cE = 0
        }
        if (cF == an[179]) {
            if (cz.getTooltip) {
                var cH = cz.getTooltip();
                cH.setContent(cB.getTaskTooltipContent(cx, cB.tooltipTitle.progress, ["name", an[143]]));
                var cC = cf(cA.BarNormal, cz.container);
                cC[1] += cz.getElementDrawObj(cx).height;
                cH.show(cC)
            }
        }
        if (cF != "end") {
            cE = Math.round(cE + (cD[0] - cw[0]) * 100 / cI);
            cE = Math.min(Math.max(0, cE), 100);
            cy.style.width = (cG - cv) / cz.getScale() * cE / 100 + "px";
            if (cz.getTooltip) {
                cz.getTooltip().setContent(cB.getTaskTooltipContent({PercentComplete: cE, Name: cx.Name}, cB.tooltipTitle.progress, ["name", an[143]]))
            }
        } else {
            var cu = parseInt(cE + (cD[0] - cw[0]) * 100 / cI);
            cu = Math.min(Math.max(0, cu), 100);
            if (!cx.setProperty(an[143], cu)) {
                cE = cx.getProperty(an[143]);
                if (!cE) {
                    cE = 0
                }
                cy.style.width = (cG - cv) / cz.getScale() * cE / 100 + "px"
            }
        }
    }, remove: function (cv, cu) {
        d(cu[this.name]);
        delete cu[this.name]
    }});
    function aR() {
    }

    aR.prototype = new R();
    ak(aR.prototype, {initialize: function (cu) {
        ak(this, {control: cu, name: an[16]});
        return true
    }, show: function (cx, cz) {
        var cw = cx.Start.valueOf(), cC = cx.Finish.valueOf();
        if (cw >= cC || cx.Summary) {
            return
        }
        var cA = this.control, cy = cA.gantt, cu = cz.taskDiv.ownerDocument.createElement("div");
        var cD = cA.taskHeight * (cy.isTracking ? cA.trackNormalHeightScale : 1), cB = cx.PercentComplete;
        cB = cB ? cB : 0;
        cB = Math.max(0, Math.min(cB, 100));
        var cv = (cC - cw) / cy.getScale() * cB / 100;
        cu.style.cssText = "position:absolute;font-size:0px;z-index:200;left:0px;width:" + cv + an[18] + Math.ceil(cA.taskPadding / 2 + cA.taskHeight * cA.trackNormalTopScale + cD / 4) + an[35] + Math.ceil(cD / 2) + "px;";
        var cE = cA.getTaskStyle(cx);
        if (cE.percentBarStyle) {
            ak(cu.style, cE.percentBarStyle)
        }
        cz.taskDiv.appendChild(cu);
        cz[this.name] = cu
    }, getTooltip: function (cv, cu, cx, cz) {
        if (cz.target != cu[this.name] || !this.control.taskProgressNoticeFields) {
            return false
        }
        var cy = this.control;
        if (cx && cx.bindObject == cv && cx.bindType == an[16]) {
            return false
        }
        var cw = cy.getTaskTooltipContent(cv, cy.tooltipTitle.progress, cy.taskProgressNoticeFields.split(","));
        cx.bindObject = cv;
        cx.bindType = an[16];
        cx.setContent(cw);
        return true
    }, onUpdate: function (cv, cu, cz) {
        var cB = cv.Start.valueOf(), cw = cv.Finish.valueOf();
        if (cB >= cw || cv.Summary) {
            this.remove(cv, cu);
            return
        }
        var cA = cu[this.name];
        if (!cA) {
            this.show(cv, cu)
        } else {
            var cx = cA.style;
            if (B(cz, an[143]) || B(cz, an[149]) || B(cz, an[150])) {
                var cy = cv.PercentComplete;
                cy = cy ? cy : 0;
                cx.width = (cw - cB) / this.control.gantt.getScale() * cy / 100 + "px"
            }
        }
    }, onScale: function (cv, cu, cx) {
        var cy = cu[this.name];
        var cw = cv.PercentComplete;
        cw = cw ? cw : 0;
        if (cy) {
            cy.style.width = (cv.Finish - cv.Start) / this.control.gantt.getScale() * cw / 100 + "px"
        }
    }, remove: function (cv, cu) {
        d(cu[this.name]);
        delete cu[this.name]
    }});
    function aY() {
    }

    aY.prototype = new R();
    ak(aY.prototype, {initialize: function (cu) {
        if (!cu.gantt.isTracking) {
            return false
        }
        ak(this, {control: cu, name: "BarTrack"});
        return true
    }, show: function (cw, cy, cA) {
        if (!cw.BaselineStart || !cw.BaselineFinish) {
            return
        }
        var cv = cw.BaselineStart.valueOf(), cC = cw.BaselineFinish.valueOf();
        if (cv >= cC || cw.Summary) {
            return
        }
        var cB = this.control, cx = cB.gantt, cu = cy.taskDiv.ownerDocument.createElement("div");
        cA = cA ? cA : cx.getScale();
        cy[this.name] = cu;
        var cF = cB.taskHeight, cD = cB.trackBaselineTopScale, cz = cB.trackBaselineHeightScale;
        cu.style.cssText = "position:absolute;font-size:0px;z-index:100;left:" + (cv - cw.Start.valueOf()) / cA + "px;width:" + ((cC - cv) / cA) + an[18] + (Math.ceil(cB.taskPadding / 2) + cF * cD) + an[35] + cF * cz + "px;";
        var cG = cB.getTaskStyle(cw), cE = cG.trackBarStyle;
        if (cE) {
            if (cE.bgImage) {
                cx.setBackgroundImage(cu, cE.bgImage, {color: cE.bgColor})
            }
            ak(cu.style, cE)
        }
        cy.taskDiv.appendChild(cu)
    }, onUpdate: function (cw, cu, cz) {
        if (!cw.BaselineStart || !cw.BaselineFinish) {
            return
        }
        var cv = this.control.gantt, cB = cw.BaselineStart, cx = cw.BaselineFinish;
        if (!cB || !cx || cB.valueOf() >= cx.valueOf() || cw.Summary) {
            this.remove(cw, cu);
            return
        }
        var cA = cu[this.name];
        if (!cA) {
            this.show(cw, cu)
        } else {
            if (B(cz, an[137])) {
                this.remove(cw, cu);
                this.show(cw, cu);
                return
            }
            var cy = cA.style;
            if (B(cz, an[133]) || B(cz, an[132])) {
                cy.width = ((cx - cB) / cv.getScale()) + "px"
            }
            if (B(cz, an[149]) || B(cz, an[133])) {
                cy.left = ((cB - cw.Start.valueOf()) / cv.getScale()) + "px"
            }
        }
    }, getTooltip: function (cv, cu, cx, cz) {
        if (cz.target != cu[this.name] || !this.control.taskNoticeFields) {
            return false
        }
        var cy = this.control;
        if (cx && cx.bindObject == cv && cx.bindType == an[170]) {
            return false
        }
        var cw = cy.getTaskTooltipContent(cv, cy.tooltipTitle.task, cy.taskTrackingNoticeFields.split(","));
        cx.bindObject = cv;
        cx.bindType = an[170];
        cx.setContent(cw);
        return true
    }, onScale: function (cv, cu, cw) {
        var cx = cu[this.name];
        if (cx) {
            cx.style.width = ((cv.BaselineFinish - cv.BaselineStart) / cw) + "px";
            cx.style.left = ((cv.BaselineStart - cv.Start.valueOf()) / cw) + "px"
        }
    }, remove: function (cv, cu) {
        d(cu[this.name]);
        delete cu[this.name]
    }});
    function bf() {
    }

    bf.prototype = new R();
    ak(bf.prototype, {initialize: function (cu) {
        if (!cu.gantt.isTracking) {
            return false
        }
        ak(this, {control: cu, name: "MilestoneTrackHead"});
        return true
    }, show: function (cx, cu) {
        if (!cx.BaselineStart || !cx.BaselineFinish) {
            return
        }
        var cB = cx.BaselineStart.valueOf(), cy = cx.BaselineFinish.valueOf();
        if (cB != cy) {
            return
        }
        var cA = this.control, cw = cA.gantt, cz = cA.getTaskStyle(cx);
        var cv = cu[this.name] = cw.createImage(cz.milestoneTrackImage || an[15], {color: (cz.milestoneTrackImageColor || an[60]), position: [(-Math.floor((cA.taskHeight - 1) / 2)), Math.ceil(cA.taskPadding / 2)], size: [(cA.taskHeight - 1), (cA.taskHeight - 1)]});
        ak(cv.style, {position: an[189], zIndex: 150});
        cu.taskDiv.appendChild(cv)
    }, getTooltip: function (cv, cu, cx, cz) {
        if (cz.target != cu[this.name] || !this.control.taskNoticeFields) {
            return false
        }
        var cy = this.control;
        if (cx.bindObject == cv && cx.bindType == an[170]) {
            return false
        }
        var cw = cy.getTaskTooltipContent(cv, cy.tooltipTitle.milestone, cy.taskTrackingNoticeFields.split(","));
        cx.bindObject = cv;
        cx.bindType = an[170];
        cx.setContent(cw);
        return true
    }, onUpdate: function (cw, cu, cy) {
        if (!cw.BaselineStart || !cw.BaselineFinish) {
            return
        }
        var cv = this.control.gantt, cA = cw.BaselineStart, cx = cw.BaselineFinish;
        if (!cA || !cx || cA.valueOf() != cx.valueOf()) {
            this.remove(cw, cu);
            return
        }
        if (B(cy, an[137])) {
            this.remove(cw, cu);
            this.show(cw, cu);
            return
        }
        var cz = cu[this.name];
        if (!cz) {
            this.show(cw, cu)
        }
    }, remove: function (cv, cu) {
        d(cu[this.name]);
        delete cu[this.name]
    }});
    var ag = function (cu) {
        return new RegExp(cu, "i").test(location.href)
    };
    if (!ag(al(ao, false))) {
        return false
    }
    ak(window, {SFGlobal: O, SFEvent: bc, SFAjax: aX, SFConfig: aE, SFImgLoader: aU, SFWorkingCalendar: aG, SFDragObject: s, SFGraphics: c, SFGraphicsCanvas: bg, SFGraphicsDiv: aq, SFGraphicsSvg: bD, SFGraphicsVml: cr, SFData: V, SFDataElement: be, SFDataTreeElement: cl, SFDataTask: r, SFDataLink: bh, SFDataAssignment: b, SFDataResource: Z, SFDataRender: aT, SFDataAdapter: aW, SFDataXmlBase: bP, SFDataXml: cj, SFDataProject: am, SFDataComponent: aa, SFDataCalculateTimeComponent: ah, SFDataOutlineComponent: h, SFDataIDComponent: cq, SFDataReadOnlyComponent: bJ, SFDataLogging: ab, SFGantt: at, SFGanttControl: L, SFGanttImageControl: J, SFGanttCalendarItem: e, SFMenuItem: aP, SFGanttAutoResizeControl: bt, SFGanttBodyHeightControl: ce, SFGanttCalDiv: F, SFGanttCalendarControl: S, SFGanttChangeEventControl: bu, SFGanttCollapseControl: M, SFGanttCursorControl: N, SFGanttDragResizeControl: ai, SFGanttDragZoomControl: a, SFGanttElementList: aZ, SFGanttNetworkControl: bO, SFGanttElementSelectControl: b5, SFGanttFieldList: ap, SFGanttHelpLinkControl: t, SFGanttLayoutControl: bK, SFGanttLinksMap: G, SFGanttProgressLine: aD, SFGanttListScrollNotice: aV, SFGanttLogoControl: b7, SFGanttContextMenuControl: b2, SFGanttDefaultMenuControl: by, SFGanttDialogControl: aA, SFGanttPrintControl: b6, SFGanttScrollControl: bQ, SFGanttScrollerControl: Q, SFGanttDivScroller: cp, SFGanttTimeScroller: P, SFGanttSelectTaskOperateControl: ca, SFGanttSizeLimitControl: bx, SFGanttTasksMap: q, SFGanttTimeControl: bS, SFGanttMapPanel: bH, SFGanttTimePanel: bw, SFGanttTimeLine: T, SFGanttTimeScrollNotice: bN, SFGanttTimeSegmentation: bR, SFGanttTooltipControl: bi, SFGanttDrawControl: n, SFGanttViewItemsControl: Y, SFGanttWorkingMask: b4, SFGanttZoomControl: ct, SFGanttField: b9, SFGanttFieldBool: aL, SFGanttFieldPercent: aj, SFGanttFieldElement: X, SFGanttFieldSelected: ch, SFGanttFieldLongText: W, SFGanttFieldDateTime: U, SFGanttFieldDuration: H, SFGanttFieldSelecter: b8, SFGanttFieldTreeName: ba, SFGanttFieldIcon: I, SFGanttMapItem: R, SFGanttMapMilestoneHead: bd, SFGanttMapSummaryHead: a2, SFGanttMapBarSummary: u, SFGanttMapBarNormal: av, SFGanttMapText: bv, SFGanttMapResize: cs, SFGanttMapPercentChange: K, SFGanttMapPercent: aR, SFGanttMapBarTrack: aY, SFGanttMapMilestoneTrackHead: bf});
    window._SFGantt_config = {SFGlobal: {weekStrs: [al("7BCL"), al("7jGm"), al("7jOy"), al("7jGv"), al("7xSB"), al("7jO4"), al("7w4T")]}, SFData: {autoCalculateTime: true, ignoreReadOnly: false, initComponents: "SFDataCalculateTimeComponent,SFDataReadOnlyComponent", taskReadonlyIgnoreProperty: an[14], resourceReadonlyIgnoreProperty: an[14], linkReadonlyIgnoreProperty: an[13], assignmentReadonlyIgnoreProperty: an[13]}, SFDataProject: {saveChange: false}, SFDataXml: {saveChange: true}, SFGantt: {imgPath: "img/", listWidth: 200, imgType: ".gif", headHeight: 36, footHeight: 17, spaceWidth: 8, idCellWidth: 36, idCellBgColor: an[12], listFocusColor: an[34], itemHeight: 24, fontSize: 12, bodyBgColor: an[83], headBgColor: an[12], borderColor: "#CDCDCD", columnBarColor: an[12], bottomBgColor: an[12], viewEnlargeHeight: 25, viewBufferHeight: 1000, taskFieldNames: "StatusIcon,Name,Start,Finish", taskIdFieldNames: "Empty", resourceFieldNames: "StatusIcon,Name", resourceIdFieldNames: "Empty", isTracking: false, menuText: {ZoomIn: al("7xSkxZT7,CYaBGTU"), ZoomOut: al("7xSkxZT7,U2FBHD6"), FocusIntoView: al("8jaSwnvF,k,XBErO"), AddTask: al("7B8Wwq5P,k,XBErO"), DeleteTask: al("7wGGxoz3,k,XBErO"), AddTasksLinks: al("8xykw1H4,k,XBErO"), RemoveTasksLinks: al("7wi6w4nd_yUaBU5S"), UpgradeTask: al("7watwK16"), DegradeTask: al("8xKzwK16"), Print: al("7AK3wnDF"), ShowChart: al("7BGkwJfP,y,aC0HV"), HideChart: al("8xO0xYrk,y,aC0HV"), ShowList: al("7BGkwJfP,xozC0HV"), HideList: al("8xO0xYrk,xozC0HV"), Help: al("7jalwIf7,,oKBErW"), About: al("7w4Zwa1j,yItBVfSyu0kwiBFAlkg")}, showScroller: true, disableMapDrag: true, noticeDelete: al("7SqUxZH3_jgdBEjNy8WTw,doAFoICBPs0Vr5_RpKxNfk0UW68TFhB0KnD2RW_8FFyJ,NxqdZxbVExoU7wK757jWAxZXA,xo6CFnRzgiw"), noticeReadonly: al("8wmvwavC,kwiB1jtxwSZwRRDAHQBCzv9,y1G0wZdxe1Z,kSd8BVACniyDWxo_xRAybsWyY_GxqhVx2Msy4Jd"), taskStyle: {TaskNormal: {barStyle: {border: an[11], bgImage: an[10], bgColor: an[9]}, summaryBarStyle: {backgroundColor: an[60], border: an[52]}, percentBarStyle: {backgroundColor: an[60]}, trackBarStyle: {border: an[52], bgImage: an[10], bgColor: an[60]}, milestoneImage: an[21], summaryImage: an[20], milestoneTrackImage: an[15], listStyle: {backgroundColor: an[83]}, listSelectedStyle: {backgroundColor: an[34]}, networkStyle: {border: "solid 2px #0000FF", color: an[60]}, networkLineStyle: {borderBottom: an[11]}}, TaskImportant: {barStyle: {border: an[8], bgImage: "grid_2", bgColor: an[54]}, summaryBarStyle: {backgroundColor: an[60], border: an[52]}, percentBarStyle: {backgroundColor: an[60]}, trackBarStyle: {border: an[52], bgImage: an[10], bgColor: an[60]}, milestoneImage: an[21], summaryImage: an[20], milestoneTrackImage: an[15], listStyle: {backgroundColor: an[54]}, listSelectedStyle: {backgroundColor: an[83]}, networkStyle: {border: "solid 2px #FF0000", color: an[60]}, networkLineStyle: {borderBottom: an[8]}}}, resourceStyle: {ResourceNormal: {barStyle: {border: an[11], bgImage: an[10], bgColor: an[9]}, summaryBarStyle: {backgroundColor: an[60], border: an[52]}, percentBarStyle: {backgroundColor: an[60]}, trackBarStyle: {border: an[52], bgImage: an[10], bgColor: an[60]}, milestoneImage: an[21], summaryImage: an[20], milestoneTrackImage: an[15], listStyle: {backgroundColor: an[83]}, listSelectedStyle: {backgroundColor: an[34]}}, ResourceImportant: {barStyle: {border: an[8], bgImage: "grid_2", bgColor: an[54]}, summaryBarStyle: {backgroundColor: an[60], border: an[52]}, percentBarStyle: {backgroundColor: an[60]}, milestoneImage: an[21], summaryImage: an[20], listStyle: {backgroundColor: "red"}, listSelectedStyle: {backgroundColor: "red"}}}, linkStyle: {BlueNormal: {color: an[9], lineStyle: {borderStyle: an[177]}}, BlueDashed: {color: an[9], lineStyle: {borderStyle: an[173]}}, RedNormal: {color: an[54], lineStyle: {borderStyle: an[177]}}, RedDashed: {color: an[54], lineStyle: {borderStyle: an[173]}}, BlackNormal: {color: an[60], lineStyle: {borderStyle: an[177]}}, BlackDashed: {color: an[60], lineStyle: {borderStyle: an[173]}}}}, SFGanttTasksMap: {tooltipTitle: {summary: al("7Bq8xZnW"), milestone: al("8wCywJvg,TQt"), task: al("7jShwn10"), progress: al("8jiBwq15"), tracking: al("7Ci4xaHY,yEWBEfz"), link: al("8xykw1H4")}, taskStyle: an[26], taskBarField: "name", taskNoticeFields: an[7], taskProgressNoticeFields: an[6], taskTrackingNoticeFields: an[5], linkAddNoticeFields: an[4], taskHeight: 12, trackBaselineTopScale: 0.5, trackBaselineHeightScale: 0.5, trackNormalTopScale: 0, trackNormalHeightScale: 0.5}, SFGanttResourceMap: {tooltipTitle: {summary: an[152], milestone: "Milestone", task: an[170], progress: "Progress", tracking: "Baseline", link: an[168]}, taskStyle: an[26], taskBarField: "name", taskNoticeFields: an[7], taskProgressNoticeFields: an[6], taskTrackingNoticeFields: an[5], linkAddNoticeFields: an[4]}, SFGanttElementList: {elementStyle: an[26], editEvent: an[82]}, SFGanttLinksMap: {tooltipTitle: {link: al("7jShwn10_yUaBU5S")}, linkNoticeFields: an[4], linkStyle: an[3]}, SFGanttNetworkControl: {linkStyle: an[3], linkFocusStyle: "RedNormal", taskStyle: an[26], taskFields: "name,Start,Finish,Resource", taskNoticeFields: "name,UID,Duration,Resource,Notes", width: 300, height: 100, nodeWidth: 200, nodeHeight: 78, dir: "x", type: an[150], combineLine: false, maxTimes: 64}, SFGanttCalDiv: {calNum: 2}, SFMenu: {tableStyle: {border: "solid 1px #A4A4A4", backgroundColor: an[83]}}, SFTooltip: {divStyle: {fontSize: an[67], backgroundColor: an[2], border: an[52]}}, SFGanttTimeSegmentation: {lineStyle: {borderLeft: an[32]}}, SFGanttTimeScrollNotice: {divStyle: {fontSize: "13px", backgroundColor: an[2], padding: "3px", border: an[1]}, dateFormat: an[0]}, SFGanttTimeLine: {lineStyle: {width: "1px", borderStyle: an[177], borderColor: "red", borderLeftWidth: "1px", borderRightWidth: "1px", backgroundColor: an[83]}, tooltipFormat: an[0]}, SFGanttListScrollNotice: {divStyle: {backgroundColor: an[2], padding: "0px", border: an[1], fontSize: an[67]}, taskFields: "UID,name", resourceFields: "UID,name"}, SFGanttField: {fieldTexts: {UID: al("7CmtxZLb,xET"), ID: al("7T0Iwq9q"), TaskName: al("7jShwn10,yIpBmfd"), ResourceName: al("8j4qw41l,yIpBmfd"), OutlineNumber: al("7y0NwK1H"), StatusIcon: al("7QOcw1PW"), Duration: al("7zCLw29,"), Start: al("7zWmwprg,CkSCFfh"), Finish: al("7yeyw1vl,CkSCFfh"), Notes: al("7y0tw4b7"), ClassName: al("7Cmdwq9k"), Critical: al("7w4ZxofD"), Selected: al("8wmvwavC"), Resource: al("8j4qw41l,yIpBmfd"), PercentComplete: al("7yeyw1vl,SsaBEjzxPuD"), ActualStart: al("7yeExoza,,2cBGf2xOOlxCNh"), ActualFinish: al("7yeyw1vl_hkPBW1RxOOlxCNh"), ActualDuration: al("7yeExoza,,kBBVzM"), BaselineStart: al("7Ci4xaHY,yEWBEfzxAivwDN2AWcdDBrJ"), BaselineFinish: al("7Ci4xaHY,yEWBEfzxgeCwSlMAWcdDBrJ"), ConstraintType: al("7TOMw2D,,UMXBF52"), ConstraintDate: al("7TOMw2D,,CkSCFfh"), LinkType: al("8xykw1H4,UMXBF52"), FromTask: al("7jS,"), ToTask: al("7wGW"), PredecessorTask: al("7wKzwKDD,k,XBErO"), SuccessorTask: al("7xm,wKDD,k,XBErO")}, linkTypes: [al("7yeyw1vlG1cKr4b_cnR_ILT"), al("7yeyw1vlG1cYo4XUaXR_LbT"), al("7zWmwprgG1cKr4b_cnRCILT"), al("7zWmwprgG1cYo4XUaXRCLbT")], constraintTypes: [al("8j8ww2r8_kgmBGXq"), al("8j8ww2zv_kgmBGXq"), al("7zirxpTQ,,2cBGf2xwa7"), al("7zirxpTQ,zAoBUj7xwa7"), al("7jGzwqHs,CkFB1r5DHodwEhtAHcy"), al("7jGzwqHs,Cs0B1r5DHodwEhtAHcy"), al("7jGzwqHs,CkFB1r5DHodwDp3AVg1"), al("7jGzwqHs,Cs0B1r5DHodwDp3AVg1")], boolTypes: [al("7xmM"), al("7BGV")], dateShowFormat: an[0], dateInputFormat: "yyyy-MM-dd HH:mm:ss", noticeWrongFormat: al("7Cmiwq9k,kopBW1Qxf0d"), durationFormat: al("NrnKlZ24oTdA1F,TdfE"), tooltipConstraint: al("7CaKwa5Q,xw7BVz0y8W9wBRjAW,ICz5LJ638F3bEzg9h,CCH8Sd8VOEX"), tooltipPercentComplete: al("7CaKwa5Q,xw7BFzVAnEf91Fbq5Yvto"), noticeEmptyTaskField: al("7jShwn10,yE5R9ERmtnUiCSSu1eI"), noticeEmptyLinkField: al("8xykw1H4,yE5R9ERmtnUiCSSu1eI")}, SFGanttCalendarItem: {formats: {Minute15: "mm", Hour: "M-d HH", Hour2: "HH", Hour6: "HH", Dat: al("X08CZVg5gTdL1,iRRrDemxT"), Dat1: "d", Day: "ddd", Day3: "d", Day7: "d", Week: al("ivJfVtjOod7Cv,iRxOOU"), Month: al("ivLLlqei,C2k"), Month1: "M", Quarter: al("ivJfVtjOonkIzzISj99UlTH"), Quarter1: "\\Qq", Quarter2: "\\Hhhh", Year: al("ivJfVtjOoZ"), Year1: "yyyy", Year5: "yyyy", Year10: "yyyy"}}};
    bm();
    ar()
}
SFNS();
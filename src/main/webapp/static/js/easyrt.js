var easyRT = function(dbox,iw,ih,tbname){
    this.box = dbox;
    this.toolbar = null;
    this.editor = null;
    this.textbox = null;
    this.popup = null;
    this.width = iw||'100%';
    this.height = ih||200;
    this.textboxname = tbname||null;
    this.imgurl = '/';
    this.btnlist = ['family','size','bold','italic','underline','|','forecolor','backcolor','face','|','url','img','table','|','justify','list','|','outdent','indent','|','clear','|','source','preview'];
};
easyRT.prototype = {
    setValue:function(svalue){var ovalue=svalue.replace(/<embed\b([^>]+?)\bsrc=([^>]*?)>(?:<\/embed>)?/ig,'<img src="'+this.imgurl+'mediatype.gif"$1data=$2>');this.editor.document.body.innerHTML=ovalue;this.textbox.value=svalue;},
    getValue:function(){var svalue=this.editor.document.body.innerHTML.replace(/<img\b([^>]+?)\bsrc="?(?:[^\/\s]*?\/)+?mediatype.gif"?([^>]*?)>/ig,function(a,b,c){return '<embed'+(b&&b.replace(/data=/i,'src='))+(c&&c.replace(/data=/i,'src='))+'></embed>';});this.setValue(svalue);return svalue;},
    updateTextArea:function(){var svalue=this.editor.document.body.innerHTML;if(/<embed/i.test(svalue)){this.getValue();}svalue = svalue.replace(/<img\b([^>]+?)\bsrc="?(?:[^\/\s]*?\/)+?mediatype.gif"?([^>]*?)>/ig,function(a,b,c){return '<embed'+(b&&b.replace(/data=/i,'src='))+(c&&c.replace(/data=/i,'src='))+'></embed>';});this.textbox.value=svalue;},
    getIndexOfBL:function(pn){var astr = this.btnlist;if(!astr||!astr.length){return 0;}var bf = false,l=0;for(var i=0;i<astr.length;i++){if(astr[i]==pn){bf = true;break;}if(astr[i]=='|'){l+=4}else{l+=30;}}return bf?l:0;},
    init:function(svalue){
        var oBox = this;
        //editor class
        var oEditor = function(){
            var od = this.document;
            if(od){
                od.designMode = 'on';
                od.open();
                od.write('<html><head><style>html,body{margin:5px;font:12px/1.231 arial;cursor:text;}table{background:buttonface;}td{background:white;}</style></head><body id="easyrt_body"></body></html>');
                od.close();
            }
            if(document.attachEvent){
                od.attachEvent("onmousedown",function(){oBox.popup.hide();});
            }else{
                od.addEventListener("mousedown",function(){oBox.popup.hide();},false);
            }
        };
        //toolbar class
        var oToolbar = function(){
            this.cmdBtn = null;
            this.insertBtn = function(){};
            this.onmousedown = function(e){
                e = e||window.event;
                var dtarg = e.srcElement||e.target;
                if(dtarg.tagName=='A'){
                    if(this.cmdBtn){this.cmdBtn.style.cssText='';}
                    this.cmdBtn = dtarg;
                    dtarg.style.cssText = 'position:relative;top:1px;left:1px;';
                    easyUI.stopEvent(e);
                }
            };
            this.onmouseup = function(){if(this.cmdBtn){this.cmdBtn.style.cssText='';}};
            this.onclick = function(e){
                e = e||window.event;
                var dtarg = e.srcElement||e.target;
                easyUI.stopEvent(e);
                if(dtarg.tagName=='A'){
                    var scmd = dtarg.getAttribute('href').replace(/.*\//g,'');
                    if(oBox.toollist[scmd]){oBox.toollist[scmd].cmd();}
                }
            };
        };
        //popup class
        var oPopup = function(){
            this.show = function(ileft,itop,sc){
                this.innerHTML = sc;
                this.style.left = ileft+'px';
                this.style.top = itop+'px';
                this.style.visibility = 'visible';
            };
            this.hide = function(){this.innerHTML='';this.style.visibility = 'hidden';};
        };
        //execCommand
        var exec = function(cmd,svalue){
            var od = oBox.editor.document;
            if(cmd=='hilitecolor'){
                try{
                    od.execCommand(cmd,false,svalue);
                }catch(exp){
                    od.execCommand('backcolor',false,svalue);
                }
            }else{
                od.execCommand(cmd,false,svalue);
            }
        };
        //color pad
        var colorPad = function(){
            var getRGB = function(aRGB){
                var srgb = '';
                for(var s=0;s<aRGB.length;s++){
                    var stmp = aRGB[s].toString(16);
                    stmp = (stmp.length<2)?'0'+stmp:stmp;
                    srgb = srgb+''+stmp;
                }
                return srgb;
            };
            var dct = [],rgb = [0,0,0];
            for(var i=0;i<6;i++){
                var atmpI = [];
                for(var r=0;r<6;r++){
                    for(var c=0;c<6;c++){
                        var srgb = getRGB(rgb);
                        atmpI.push('<a href="#" style="color:#'+srgb+';background:#'+srgb+';" title="#'+srgb+'">&nbsp;</a>');
                        rgb[1] += 51;
                        if(rgb[1]>255){rgb[1]=0}
                    }
                    rgb[2] += 51;
                    if(rgb[2]>255){rgb[2]=0}
                }
                dct.push('<div>'+atmpI.join('')+'</div>');
                rgb[0] += 51;
                if(rgb[0]>255){rgb[0]=0}
            }
            return '<div class="colorpad">'+dct.slice(0).join('')+'<a href="#" title="#000000" class="normalcolor">#000000</a></div>';
        }();
        //face
        var ssrc = oBox.imgurl+'face/';
        var adetail = ['高興','難過','眨眼','咧嘴傻笑','眨眨眼睫毛','困擾','迷戀','害羞','伸舌頭','親親','驚訝','生氣','沾沾自喜','有型','擔心','抹汗','嚎啕大哭','開懷大笑','嚴肅','古古惑惑','天使','晕','唉...','快睡著了','憧憬','生病了','這是秘密','不跟你說！','別賴我！','嘻嘻','不耐煩了','流口水','嗯..我想想看！','是這樣喔？','不想看','掌聲鼓勵！'];
        var sface = new Array(adetail.length+1).join(0).replace(/0/g,function(){var inb=arguments[1],snb=inb+1;return '<a href="#" alt="'+snb+'" title="'+adetail[inb]+'" style="background:url('+ssrc+snb+'.gif) center center no-repeat;">&bsp;</a>'});
        sface = '<div class="facepad">'+sface+'</div>';
        //popup click function
        var fooExec = function(ileft,itop,shtml){
            oBox.popup.show(ileft,itop,shtml);
            oBox.popup.onclick = function(e){
                e = e||window.event;
                var dtarg = e.srcElement||e.target;
                if(dtarg.tagName=='A'){
                    var ahref = unescape(dtarg.getAttribute('href')).replace(/.*\//g,'').split('=');
                    var scmd = ahref[0],svalue = ahref[1];
                    exec(scmd,svalue);
                    oBox.popup.hide();
                }
                easyUI.stopEvent(e);
            };
        };
        //fore color back color pick
        var fooColor = function(scmd,scolor,ileft,itop,shtml){
            oBox.popup.show(ileft,itop,shtml);
            var dcolors = oBox.popup.getElementsByTagName('a');
            var dcolor = dcolors[dcolors.length-1];
            oBox.popup.onmouseover = function(e){
                e = e||window.event;
                var dtarg = e.srcElement||e.target;
                if(dtarg.tagName=='A'){
                    var srbg = dtarg.getAttribute('title');
                    dcolor.innerHTML = srbg;
                }
            };
            oBox.popup.onmouseout = function(){dcolor.innerHTML = scolor;dcolor.setAttribute('title',scolor);};
            oBox.popup.onclick = function(e){
                e = e||window.event;
                var dtarg = e.srcElement||e.target;
                if(dtarg.tagName=='A'){
                    var srbg = dtarg.getAttribute('title');
                    exec(scmd,srbg);
                    oBox.popup.hide();
                }
                easyUI.stopEvent(e);
            };
        };
        //insert html
        var editor_paste = function(shtml){
            if(document.selection){
                var w = oBox.editor;
                w.focus();
                var range = w.document.selection.createRange();
                if(range.pasteHTML){
                    range.pasteHTML(shtml);
                }else{
                    try{pasteIM(shtml)}catch(exp){}
                }
            }else{
                pasteIM(shtml);
            }
        };
        var pasteIM = function(shtml){
            var w = oBox.editor;
            w.focus();
            var ol,i,nl=[],r=w.document.createRange();
            if(shtml==""){return;}
            w.document.execCommand("insertimage",false,"http://easyrt/");
            ol=w.document.getElementsByTagName("img");
            for(var i=0;i<ol.length;i++){nl.push(ol[i]);}
            for(i=0;i<nl.length;i++){
                if(nl[i].src=="http://easyrt/"){
                    r.setStartBefore(nl[i]);
                    nl[i].parentNode.insertBefore(r.createContextualFragment(shtml),nl[i]);
                    nl[i].parentNode.removeChild(nl[i]);
                }
            }
        };
        //get current style
        var getCurrentStyle = function(oEl,oSt){
            if(oEl.currentStyle){
                switch(oSt){
                    case 'width':
                        return oEl.offsetWidth;break;
                    case 'height':
                        return oEl.offsetHeight;break;
                    default:
                        return oEl.offsetWidth;break;
                }
                return oBox.box.currentStyle[oSt];
            }else{
                return window.getComputedStyle(oEl,null).getPropertyValue(oSt);
            }
        };
        //the cmd list which need show in popup
        var special = function(scmd){
            switch(scmd){
                case 'family':
                    var l = oBox.getIndexOfBL('family');
                    var sfamily = '<a href="fontName=宋体" style="font-family:宋体;">宋体</a><a href="fontName=黑体" style="font-family:黑体;">黑体</a><a href="fontName=楷体_GB2312" style="font-family:楷体_GB2312;">楷体_GB2312</a><a href="fontName=Arial" style="font-family:Arial;">Arial</a><a href="fontName=Arial Black" style="font-family:Arial Black;">Arial Black</a><a href="fontName=Comic Sans MS" style="font-family:Comic Sans MS;">Comic Sans MS</a><a href="fontName=Courier New" style="font-family:Courier New;">Courier New</a><a href="fontName=Lucida Console" style="font-family:Lucida Console;">Lucida Console</a><a href="fontName=Tahoma" style="font-family:Tahoma;">Tahoma</a><a href="fontName=Times New Roman" style="font-family:Times New Roman;">Times New Roman</a><a href="fontName=Trebuchet MS" style="font-family:Trebuchet MS;">Trebuchet MS</a><a href="fontName=Verdana" style="font-family:Verdana;">Verdana</a>';
                    fooExec(l,32,sfamily);
                    break;
                case 'size':
                    var l = oBox.getIndexOfBL('size');
                    var sfamily = '<a href="fontSize=1" style="font-size:10px;">1号字</a><a href="fontSize=2" style="font-size:13px;">2号字</a><a href="fontSize=3" style="font-size:16px;">3号字</a><a href="fontSize=4" style="font-size:18px;">4号字</a><a href="fontSize=5" style="font-size:23px;">5号字</a><a href="fontSize=6" style="font-size:32px;">6号字</a><a href="fontSize=7" style="font-size:48px;">7号字</a>';
                    fooExec(l,32,sfamily);
                    break;
                case 'forecolor':
                    var l = oBox.getIndexOfBL('forecolor');
                    fooColor('forecolor','#000000',l,32,colorPad);
                    break;
                case 'backcolor':
                    var l = oBox.getIndexOfBL('backcolor');
                    fooColor('hilitecolor','#ffffff',l,32,colorPad);
                    break;
                case 'face':
                    var l = oBox.getIndexOfBL('face');
                    oBox.popup.show(l,32,sface);
                    oBox.popup.onclick = function(e){
                        e = e||window.event;
                        var dtarg = e.srcElement||e.target;
                        if(dtarg.tagName=='A'){
                            var sno = dtarg.getAttribute('alt');
                            var salt = dtarg.getAttribute('title');
                            var simg = '<img title="'+salt+'" src="'+ssrc+sno+'.gif"/>';
                            editor_paste(simg);
                            oBox.popup.hide();
                        }
                        easyUI.stopEvent(e);
                    };
                    break;
                case 'url':
                    oBox.popup.hide();
                    var surl = window.prompt('请输入链接地址：','');
                    if(surl){exec("createlink",surl);}else{exec("unlink");}
                    break;
                case 'img':
                    oBox.popup.hide();
                    var simgurl = window.prompt('请输入图片地址：','');
                    if(simgurl){editor_paste('<img src="'+simgurl+'"/>');}
                    break;
                case 'table':
                    oBox.popup.hide();
                    var sr,sc;
                    sr = window.prompt('请输入要插入表格的行数：','')|0;
                    if(sr){sc = window.prompt('请输入要插入表格的列数：','')|0;}
                    if(sr&&sc){
                        var scell = '<tr>'+new Array(sc+1).join('<td>&nbsp;</td>')+'</tr>';
                        var srow = new Array(sr+1).join(scell);
                        editor_paste('<table cellspacing="1" cellpadding="0" border="0" style="width:100%;">'+srow+'</table>');
                    }
                    break;
                case 'justify':
                    var l = oBox.getIndexOfBL('justify');
                    var sJustify = '<a href="justifyleft" class="ico-left">居左对齐</a><a href="justifycenter" class="ico-center">居中对齐</a><a href="justifyright" class="ico-right">居右对齐</a>';
                    fooExec(l,32,sJustify);
                    break;
                case 'list':
                    var l = oBox.getIndexOfBL('list');
                    var sList = '<a href="insertOrderedList" class="ico-ol">编号列表</a><a href="insertUnorderedList" class="ico-ul">项目列表</a>';
                    fooExec(l,32,sList);
                    break;
                case 'source':
                    var tw = parseInt(getCurrentStyle(oBox.box,'width'),10)-22,th = !isNaN(oBox.height)?oBox.height-21:200-21;
                    var sSource = '<div class="source"><textarea style="width:'+tw+'px;height:'+th+'px;overflow:auto;">'+oBox.getValue()+'</textarea><p><button>保存更改并返回可视编辑模式</button> <button>返回可视编辑模式</button></p></div>';
                    oBox.popup.show(0,0,sSource);
                    oBox.popup.focus();
                    oBox.popup.onclick = function(e){
                        e = e||window.event;
                        var dtarg = e.srcElement||e.target;
                        if(dtarg.tagName=='BUTTON'){
                            var stb = this.getElementsByTagName("textarea")[0];
                            var sihtm = dtarg.innerHTML;
                            if(sihtm=='保存更改并返回可视编辑模式'&&stb){
                                oBox.setValue(stb.value);
                            }
                            oBox.popup.hide();
                        }
                        easyUI.stopEvent(e);
                    };
                    break;
                case 'preview':
                    var svalue = oBox.getValue();
                    var pwin = window.open();
                    pwin.document.write(svalue);
                    pwin.document.close();
                default:break;
            }
        };
        this.toollist = {
            family:{cmd:function(){special("family")},str:'<li class="ico-family"><a href="family" title="字体"></a></li>'},
            size:{cmd:function(){special("size")},str:'<li class="ico-size"><a href="size" title="大小"></a></li>'},
            bold:{cmd:function(){exec("bold")},str:'<li class="ico-bold"><a href="bold" title="粗体字"></a></li>'},
            italic:{cmd:function(){exec("italic")},str:'<li class="ico-italic"><a href="italic" title="斜体字"></a></li>'},
            underline:{cmd:function(){exec("underline")},str:'<li class="ico-u"><a href="underline" title="下划线"></a></li>'},
            forecolor:{cmd:function(){special("forecolor")},str:'<li class="ico-fc"><a href="forecolor" title="字体颜色"></a></li>'},
            backcolor:{cmd:function(){special("backcolor")},str:'<li class="ico-bc"><a href="backcolor" title="背景颜色"></a></li>'},
            face:{cmd:function(){special("face")},str:'<li class="ico-face"><a href="face" title="表情图片"></a></li>'},
            url:{cmd:function(){special("url")},str:'<li class="ico-url"><a href="url" title="创建链接"></a></li>'},
            img:{cmd:function(){special("img")},str:'<li class="ico-img"><a href="img" title="插入图片"></a></li>'},
            table:{cmd:function(){special("table")},str:'<li class="ico-table"><a href="table" title="插入表格"></a></li>'},
            justify:{cmd:function(){special("justify")},str:'<li class="ico-ta"><a href="justify" title="段落对齐"></a></li>'},
            list:{cmd:function(){special("list")},str:'<li class="ico-li"><a href="list" title="项目编号"></a></li>'},
            outdent:{cmd:function(){exec("outdent")},str:'<li class="ico-od"><a href="outdent" title="减少缩进"></a></li>'},
            indent:{cmd:function(){exec("indent")},str:'<li class="ico-id"><a href="indent" title="增加缩进"></a></li>'},
            clear:{cmd:function(){exec("removeformat")},str:'<li class="ico-clear"><a href="clear" title="清除样式"></a></li>'},
            source:{cmd:function(){special("source")},str:'<li class="ico-source"><a href="source" title="源代码"></a></li>'},
            preview:{cmd:function(){special("preview")},str:'<li class="ico-preview"><a href="preview" title="预览"></a></li>'}
        };
        //init the tool bar and the editor
        var iw = this.width,ih = this.height,staname = this.textboxname,btnl = this.btnlist;
        var stabox = (staname)?'<textarea class="textbox" name="'+staname+'">'+svalue+'</textarea>':'<textarea class="textbox">'+svalue+'</textarea>';
        var sbw = !isNaN(iw)?'position:relative;width:'+iw+'px;':(/^\d+%$/.test(iw))?'position:relative;width:'+iw+';':'position:relative;width:100%;';
        var sbh = !isNaN(ih)?'style="height:'+ih+'px;"':'style="height:200px;"';
        this.box.className = (this.box.className)?this.box.className+' easyrt':'easyrt';
        this.box.style.cssText = sbw;
        var sIH = '<ul class="tool-bar">',bbtn = null;
        for(var ibl=0;ibl<btnl.length;ibl++){
            bbtn = this.toollist[btnl[ibl]];
            sIH += (bbtn)?bbtn.str:'<li class="split-bar">|</li>';
        }
        sIH += '</ul>';
        sIH += '<iframe class="editor" '+sbh+' frameborder="no" src=""></iframe><div class="popup"></div>'+stabox;
        this.box.innerHTML = sIH;
        this.toolbar = this.box.childNodes[0];
        this.editor = this.box.childNodes[1].contentWindow||this.box.childNodes[1];
        this.popup = this.box.childNodes[2];
        this.textbox = this.box.childNodes[3];
        oToolbar.call(this.toolbar);
        oEditor.call(this.editor);
        oPopup.call(this.popup);
        this.box.childNodes[1].onmouseout=(function(o){return function(){o.updateTextArea();};})(this);
        this.setValue(svalue);
        if(document.attachEvent){
            document.attachEvent("onmousedown",function(o){return function(e){e=e||window.event;var et=e.srcElement||e.target;if(!o.contains(et)){o.hide();}}}(this.popup));
        }else{
            document.addEventListener("mousedown",function(o){return function(e){e=e||window.event;var et=e.srcElement||e.target;if((o.contains&&!o.contains(et))||(o.compareDocumentPosition&&o.compareDocumentPosition(et)!=20)){o.hide();}}}(this.popup),false);
        }
        window.onunload = function(){document.onmousedown = function(){};}
    }
};
/**
 * Created by Administrator on 16-11-17.
 */



var onlyOpenTitle = "主 页";
window.onload = function () {
    $('#loading-mask').fadeOut();
};
var panelWest = false;

jQuery(document).ready(function () {
    $.ajax({
        url: getContextPath() + '/acl/menu/menu',
        type: 'post',
        dataType: 'json',
        success: showMenu         //成功执行方法
    });
    $.ajax({
        url: getContextPath() + '/acl/menu/commonMenu',
        type: 'post',
        dataType: 'json',
        success: showCommonMenu         //成功执行方法
    });
});

function showMenu(data) {
    var list = eval(data);
    var menu = "";
    for (var navMenu in list) {
        menu += "<li class='sub-menu' id='" + list[navMenu].uid + "'><a onclick=\"";
        menu += list[navMenu].clickEvent + ";\" style=\"cursor:pointer\">";
        if (list[navMenu].leftIconClass == "undefined" || list[navMenu].leftIconClass == "" || list[navMenu].leftIconClass == null) {
            menu += "<i class=\"linecons-database\"> </i>";
        } else {
            menu += "<i class=\"" + list[navMenu].leftIconClass + "\"></span>";
        }
        menu += "<span>" + list[navMenu].title + "</span></a>";
        if (list[navMenu].subNavMenu.length > 0) {
            menu = getSubMenu(menu, list[navMenu]);
        }
        menu += "</li>";
    }
    $('#nav').html(menu);
    $('#nav').dcAccordion({
        eventType: 'click',
        autoClose: true,
        saveState: true,
        disableLink: true,
        speed: 'slow',
        showCount: false,
        autoExpand: true,
        classExpand: 'dcjq-current-parent'
    });
    $("#nav li").bind('contextmenu', function (e) {
        $('#myMenu1').menu('show', {
            left: e.pageX,
            top: e.pageY
        });
        addCommonMenu(this);
        return false;
    });
    $('#searchText').bind('keypress', function (event) {
        if (event.keyCode == "13") {
            //搜索方法
            $.ajax({
                url: getContextPath() + '/acl/menu/findMenu',
                type: 'post',
                data: {'searchKeyword': $('input#searchText').val()},
                dataType: 'json',
                success: searchMenuFun         //成功执行方法
            });
        }
    });
}
function showCommonMenu(data) {
    var list = eval(data);
    var menu = "";
    for (var navMenu in list) {
        menu += "<li class='sub-menu' id='" + list[navMenu].uid + "'><a onclick=\"";
        menu += list[navMenu].clickEvent + ";\" style=\"cursor:pointer\">";
        if (list[navMenu].leftIconClass == "undefined" || list[navMenu].leftIconClass == "" || list[navMenu].leftIconClass == null) {
            menu += "<i class=\"fa fa-cogs\"> </i>";
        } else {
            menu += "<i class=\"" + list[navMenu].leftIconClass + "\"></i>";
        }
        menu += "<span>" + list[navMenu].title + "</span></a>";
        if (list[navMenu].subNavMenu.length > 0) {
            menu = getSubMenu(menu, list[navMenu]);
        }
        menu += "</li>";
    }
    $('#commNav').html(menu);
    $('#commNav').dcAccordion({
        eventType: 'click',
        autoClose: true,
        saveState: true,
        disableLink: true,
        speed: 'slow',
        showCount: false,
        autoExpand: true,
        classExpand: 'dcjq-current-parent'
    });

    $("#commNav li").bind('contextmenu', function (e) {
        $('#myMenu2').menu('show', {
            left: e.pageX,
            top: e.pageY
        });
        cancelCommonMenu(this);
        return false;
    });
}

function getSubMenu(menu, obj) {
    menu += "<ul class=\"sub\">";
    for (var subNavMenu in obj.subNavMenu) {
        var subMenu = obj.subNavMenu[subNavMenu];
        menu += "<li class='sub-menu' id='" + subMenu.uid + "'>";
        menu += "<a onclick=\"" + subMenu.clickEvent + ";\" style=\"cursor:pointer\">";
        menu += "<span>" + subMenu.title + "</span></a>";
        if (subMenu.subNavMenu.length) {
            menu = getSubMenu(menu, subMenu);
        }
        menu += "</li>";
    }
    menu += "</ul>";
    return menu;
}

function addCommonMenu(t) {
    $('#myMenu1').menu({
        onClick: function (item) {
            $.messager.confirm('添加确认', '是否添加菜单[' + $(t).find("a").eq(0).text() + ']到常用功能.', function (data) {
                if (data) {
                    $.ajax({
                        url: getContextPath() + '/acl/menu/addCommMenu',
                        type: 'post',
                        data: {'uid': t.id},
                        dataType: 'json',
                        success: function (responseJson) {
                            $.TS.messager.showMsg('提示', responseJson.msg, 'info');
                            $.ajax({
                                url: getContextPath() + '/acl/menu/commonMenu',
                                type: 'post',
                                dataType: 'json',
                                success: showCommonMenu         //成功执行方法
                            });
                        }
                    });
                }
            });
        }
    });
}
function cancelCommonMenu(t) {
    $('#myMenu2').menu({
        onClick: function (item) {
            $.messager.confirm('取消确认', '是否取消常用功能[' + $(t).find("a").eq(0).text() + ']', function (data) {
                if (data) {
                    $.ajax({
                        url: getContextPath() + '/acl/menu/deleteCommMenu',
                        type: 'post',
                        data: {'uid': t.id},
                        dataType: 'json',
                        success: function (responseJson) {
                            $.TS.messager.showMsg('提示', responseJson.msg, 'info');
                            $(t).remove();
                        }
                    });
                }
            })
        }
    });
    return false;
}

function menuClick(subtitle, url, icon) {
//    if (!$("#easyui_layout_main_center_tabs").tabs('exists', subtitle)) {
//        $("#easyui_layout_main_center_tabs").tabs("add", {
//            title: subtitle,
//            content: createFrame(url, subtitle),
//            closable: true,
//            icon: icon
//        })
//    } else {
//        $("#easyui_layout_main_center_tabs").tabs('select', subtitle);
//        $("#mm-tabupdata").click();
//    }
    //添加标签所需参数
    //    var options={"tabContentMainName":"tabcontent","tabMainName":"maintabs","tabName":subtitle,"tabTitle":subtitle,"tabUrl":url};
    //调用添加标签页方法
    //addTab(options);
    //弹出框
    $(this).hDialog({
        types:2,
        iframeSrc:'${ctx}/'+url,
        iframeId:'iframeHBox',
        box: '#demo',
        closeBg: '#f31d00',
        effect:'bounceOut',
        width:1280,
        height:650
    });

}
//弹框方法
function initHdialog(dataid,url){
    $('#'+dataid).hDialog({
        types:2,
        iframeSrc:'${ctx}/'+url,
        iframeId:'iframeHBox',
        box: '#demo',
        closeBg: '#f31d00',
        effect:'bounceOut',
        width:1280,
        height:650
    });
}
function createFrame(url, title) {
    var url = url;
    if (title != null) {
        url = url + '?request_menu_title=位置&nbsp;:&nbsp;' + title
    }
    var a = '<iframe scrolling="auto" frameborder="0" style="width:100%;height:100%" src="' + url + '"></iframe>';
    return a;
}

function searchMenuFun(data) {
    var list = eval(data);
    var menu = "";
    for (var navMenu in list) {
        menu += "<li class='sub-menu'><a onclick=\"";
        menu += list[navMenu].clickEvent + ";\" style=\"cursor:pointer\">";
        menu += "<span>" + list[navMenu].title + "</span></a>";
        if (list[navMenu].subNavMenu.length > 0) {
            menu = getSubMenu(menu, list[navMenu]);
        }
        menu += "</li>";
    }
    if (menu === "") {
        menu = " 未查询到信息";
    }
    $('#searchNav').html(menu);
    $('#searchNav').dcAccordion({
        eventType: 'click',
        autoClose: true,
        saveState: true,
        disableLink: true,
        speed: 'slow',
        showCount: false,
        autoExpand: true,
        classExpand: 'dcjq-current-parent'
    });
}
/**
 2  * 增加标签页
 3  */
function addTab(options) {
         //option:
         //tabMainName:tab标签页所在的容器
         //tabName:当前tab的名称
         //tabTitle:当前tab的标题
         //tabUrl:当前tab所指向的URL地址
         var exists = checkTabIsExists(options.tabMainName, options.tabName);
         if(exists){
                 $("#tab_a_"+options.tabName).click();
             } else {
                 $("#"+options.tabMainName).append('<li  id="tab_li_'+options.tabName+'" ><a href="#tab_content_'+options.tabName+'" data-toggle="tab" id="tab_a_'+options.tabName+'">' +
                     ''+options.tabTitle+'<i class="fa fa-remove tab-close" onclick="closetabs(event)"></i></a></li>');

                 //固定TAB中IFRAME高度
                 mainHeight = $(document.body).height() - 5;

                var content = '';
                 if(options.content){
                         content = option.content;
                     } else {
                         content = '<iframe src="' + options.tabUrl + '" width="100%" height="'+mainHeight+'px" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="yes" allowtransparency="yes"></iframe>';
                     }
                 $("#"+options.tabContentMainName).append('<div id="tab_content_'+options.tabName+'" role="tabpanel" class="tab-pane" id="'+options.tabName+'">'+content+'</div>');
                 $("#tab_a_"+options.tabName).click();
             }
     }
function tabClose() {
    /*双击关闭选项卡*/
    $("#easyui_layout_main_center").find(".tabs-inner").dblclick(function () {
        var subtitle = $(this).children(".tabs-closable").text();
        $("#easyui_layout_main_center_tabs").tabs('close', subtitle);
    });
    /*为选项卡绑定右键事件*/
    $("#easyui_layout_main_center").find(".tabs-inner").bind('contextmenu', function (e) {
        $("#mm").menu('show', {
            left: e.pageX,
            top: e.pageY
        });
        var subtitle = $(this).children(".tabs-closable").text();
        $("#mm").data('currtab', subtitle);
        $("#easyui_layout_main_center_tabs").tabs('select', subtitle);
        return false;
    });
}

function tabCloseEvent() {
    $("#mm").menu({
        onClick: function (item) {
            closeTab(item.id);
        }
    });
    return false;
}

function closeTab(action) {
    var alltabs = $('#easyui_layout_main_center_tabs').tabs('tabs');
    var currentTab = $('#easyui_layout_main_center_tabs').tabs('getSelected');
    var allTabTitle = [];
    $.each(alltabs, function (i, n) {
        allTabTitle.push($(n).panel('options').title);
    });
    switch (action) {
        case "refresh":
            var iframe = $(currentTab.panel('options').content);
            var src = iframe.attr('src');
            $('#easyui_layout_main_center_tabs').tabs('update', {
                tab: currentTab,
                options: {
                    content: createFrame(src)
                }
            })
            break;
        case "close":
            var currtab_title = currentTab.panel('options').title;
            if (currtab_title != onlyOpenTitle) {
                $("#easyui_layout_main_center_tabs").tabs('close', currtab_title);
            }
            break;
        case "closeAll":
            $.each(allTabTitle, function (i, n) {
                if (n != onlyOpenTitle) {
                    $("#easyui_layout_main_center_tabs").tabs('close', n);
                }
            });
            break;
        case "closeOther":
            var currtab_title = currentTab.panel('options').title;
            $.each(allTabTitle, function (i, n) {
                if (n != currtab_title && n != onlyOpenTitle) {
                    $("#easyui_layout_main_center_tabs").tabs('close', n);
                }
            })
            break;
        case "closeRight":
            var index = $('#easyui_layout_main_center_tabs').tabs('getTabIndex', currentTab);
            if (index == alltabs.length - 1) {
                return false;
            }
            $.each(allTabTitle, function (i, n) {
                if (i > index) {
                    if (n != onlyOpenTitle) {
                        $("#easyui_layout_main_center_tabs").tabs('close', n);
                    }
                }
            })
            break;
        case "closeLeft":
            var index = $('#easyui_layout_main_center_tabs').tabs('getTabIndex', currentTab);
            if (index == 1) {
                return false;
            }
            $.each(allTabTitle, function (i, n) {
                if (i < index) {
                    if (n != onlyOpenTitle) {
                        $("#easyui_layout_main_center_tabs").tabs('close', n);
                    }
                }
            })
            break;
    }
}

function chooseGroup() {
    $.TS.window.getWindow({
        title: '<i class=\"fa fa-retweet\"> </i> 切换岗位',
        width: 400,
        height: 240,
        resizable: false,
        maximizable: false,
        href: getContextPath() + '/acl/menu/chooseGroup'
    });
}

function modifyPassword(userId) {
    $.TS.window.getWindow({
        title: '<i class=\"fa fa-edit\"> </i> 修改密码',
        width: 550,
        height: 330,
        resizable: false,
        maximizable: false,
        href: getContextPath() + '/acl/user/modifyPassword?userId=' + userId
    });
}

function logout() {
    $.post(getContextPath() + '/logout', function () {
        location.href = getContextPath() + "/login";
    })
}
function getContextPath() {
    var contextPath = document.location.pathname;
    var index = contextPath.substr(1).indexOf("/");
    contextPath = contextPath.substr(0, index + 1);
    delete index;
    return contextPath;
}

function changeTheme(themeName){
    var easyUiTheme = $('#easyUiTheme');
    var url = easyUiTheme.attr('href');
    var href = url.substring(0,url.indexOf('themes')) + 'themes/' + themeName + '/easyui.css';
    easyUiTheme.attr('href',href);
    var iframe = $('iframe');
    if(iframe.length > 0){
        for(var i=0;i<iframe.length;i++){
            var ifr = iframe[i];
            $(ifr).contents().find("#easyUiTheme").attr('href',href);
        }
    }
    $.cookie('easyUiThemeName',themeName,{
        expires : 7
    });
}

 /**
   * 判断是否存在指定的标签页
   * @param tabMainName
   * @param tabName
   * @returns {Boolean}
   */
 function checkTabIsExists(tabMainName, tabName){
         var tab = $("#"+tabMainName+" > #tab_li_"+tabName);
         //console.log(tab.length)
         return tab.length > 0;
}

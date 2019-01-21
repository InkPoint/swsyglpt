jQuery(document).ready(function () {
    $.ajax({
        url: getContextPath() + '/acl/menu/menu',
        type: 'post',
        dataType: 'json',
        success: succFunction         //成功执行方法
    });
    $.ajax({
        url: getContextPath() + '/acl/menu/commonMenu',
        type: 'post',
        dataType: 'json',
        success: succMenuFunction         //成功执行方法
    });

    //监听右键事件，创建右键菜单
    $('#tt').tabs({
        onContextMenu: function (e, title, index) {
            e.preventDefault();
            if (index > 0) {
                $('#mm').menu('show', {
                    left: e.pageX,
                    top: e.pageY
                }).data("tabTitle", title);
            }
        }
    });
    //右键菜单click
    $("#mm").menu({
        onClick: function (item) {
            closeTab(this, item.name);
        }
    });
});


function succFunction(data) {
    var list = eval(data);
    var menu = "";
    menu += "";
    for (var navMenu in list) {
        menu += "<li class='sub-menu' id='" + list[navMenu].uid + "'><a href=\"javascript:";
        menu += list[navMenu].clickEvent + ";\">";
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
    $('#nav-accordion').html(menu);
    $('#nav-accordion').dcAccordion({
        eventType: 'click',
        autoClose: true,
        saveState: true,
        disableLink: true,
        speed: 'slow',
        showCount: false,
        autoExpand: true,
        classExpand: 'dcjq-current-parent'
    });

    $('#nav-accordion li').contextMenu('myMenu1', {
        bindings: {
            'save': function (t) {
                $.TS.messager.confirm('添加确认', '是否添加菜单[' + $(t).find("a").eq(0).text() + ']到常用功能', function (data) {
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
                                    success: succMenuFunction         //成功执行方法
                                });
                            }
                        });
                    }
                })
            },
            'delete': function (t) {
                alert('Trigger was ' + t.id + '\nAction was Delete');
                $(t).remove();
            }
        }
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
    })
}
function succMenuFunction(data) {
    var list = eval(data);
    var menu = "";
    menu += "";
    for (var navMenu in list) {
        menu += "<li class='sub-menu' id='" + list[navMenu].uid + "'><a href=\"javascript:";
        menu += list[navMenu].clickEvent + ";\">";
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
    $('#nav-commaccordion').html(menu);
    $('#nav-commaccordion').dcAccordion({
        eventType: 'click',
        autoClose: true,
        saveState: true,
        disableLink: true,
        speed: 'slow',
        showCount: false,
        autoExpand: true,
        classExpand: 'dcjq-current-parent'
    });

    $('#nav-commaccordion li').contextMenu('myMenu2', {
        bindings: {
            'delete': function (t) {
                $.TS.messager.confirm('取消确认', '是否取消常用功能[' + $(t).find("a").eq(0).text() + ']', function (data) {
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
        }
    });

}
function getSubMenu(menu, obj) {
    menu += "<ul class=\"sub\">";
    for (var subNavMenu in obj.subNavMenu) {
        var subMenu = obj.subNavMenu[subNavMenu];
        menu += "<li class='sub-menu' id='" + subMenu.uid + "'>";
        menu += "<a href=\"javascript:" + subMenu.clickEvent + ";\">";
        menu += "<span>" + subMenu.title + "</span></a>";
        if (subMenu.subNavMenu.length) {
            menu = getSubMenu(menu, subMenu);
        }
        menu += "</li>";
    }
    menu += "</ul>";
    return menu;
}

function searchMenuFun(data) {
    var list = eval(data);
    var menu = "";
    for (var navMenu in list) {
        menu += "<li class='sub-menu'><a href=\"javascript:";
        menu += list[navMenu].clickEvent + ";\">";
        menu += "<span>" + list[navMenu].title + "</span></a>";
        if (list[navMenu].subNavMenu.length > 0) {
            menu = getSubMenu(menu, list[navMenu]);
        }
        menu += "</li>";
    }
    if (menu === "") {
        menu = " 未查询到信息";
    }
    $('#nav-searchresult').html(menu);
    $('#nav-searchresult').dcAccordion({
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


//删除Tabs
function closeTab(menu, type) {
    var allTabs = $("#tt").tabs('tabs');
    var allTabtitle = [];
    $.each(allTabs, function (i, n) {
        var opt = $(n).panel('options');
        if (opt.closable)
            allTabtitle.push(opt.title);
    });
    var curTabTitle = $(menu).data("tabTitle");
    var curTabIndex = $("#tt").tabs("getTabIndex", $("#tt").tabs("getTab", curTabTitle));
    switch (type) {
        case 1:
            $("#tt").tabs("close", curTabIndex);
            return false;
            break;
        case 2:
            for (var i = 0; i < allTabtitle.length; i++) {
                $('#tt').tabs('close', allTabtitle[i]);
            }
            break;
        case 3:
            for (var i = 0; i < allTabtitle.length; i++) {
                if (curTabTitle != allTabtitle[i])
                    $('#tt').tabs('close', allTabtitle[i]);
            }
            $('#tt').tabs('select', curTabTitle);
            break;
        case 4:
            for (var i = curTabIndex; i < allTabtitle.length; i++) {
                $('#tt').tabs('close', allTabtitle[i]);
            }
            $('#tt').tabs('select', curTabTitle);
            break;
        case 5:
            for (var i = 0; i < curTabIndex - 1; i++) {
                $('#tt').tabs('close', allTabtitle[i]);
            }
            $('#tt').tabs('select', curTabTitle);
            break;
        case 6: //刷新
            var panel = $("#tt").tabs("getTab", curTabTitle).panel("refresh");
            break;
    }
}

function chooseGroup() {
    $.TS.window.getWindow({
        title: '<i class=\"fa fa-retweet\"> </i> 切换岗位',
        width: 400,
        height: 240,
        resizable:false,
        maximizable: false,
        href: getContextPath() + '/acl/menu/chooseGroup'
    });
}

function getContextPath() {
    var contextPath = document.location.pathname;
    var index = contextPath.substr(1).indexOf("/");
    contextPath = contextPath.substr(0, index + 1);
    delete index;
    return contextPath;
}

function logout() {
    $.post(getContextPath() + '/logout', function () {
        location.href = getContextPath() + "/login";
    })
}

function menuClick(title, url, id) {
    /*if ($('#tt').tabs('exists', title)) {
     $('#tt').tabs('select', title);
     } else {*/
    var content = '<div id="zc_ddd">' +
        '<iframe id="zc_eee"  frameborder="no" frameborder="0" scrolling="no"  src="' + url + '" style="width:100%;height:720px;"></iframe></div>';
    $('#tt').tabs('add', {
        title: title,
        content: content,
        closable: true
    });
    //}
}

function modifyPassword(userId) {
    $.TS.window.getWindow({
        title: '<i class=\"fa fa-edit\"> </i> 修改密码',
        width: 550,
        height: 330,
        resizable:false,
        maximizable: false,
        href: getContextPath() + '/acl/user/modifyPassword?userId=' + userId
    });
}
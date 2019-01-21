<%--
  Created by IntelliJ IDEA.
  User: PengWen Wang
  Date: 2018/12/29
  Time: 16:13
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<html>
<head>
    <title>新建文章</title>
    <meta name="description" content="simple and responsive tables"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link rel="shortcut icon" href="${ctx}/assets/img/favicon.png" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="${ctx}/bootstrap/bootstrap-3.3.7/css/bootstrap.css"/>
    <link rel="stylesheet" type="text/css" href="${ctx}/bootstrap/bootstrap-table/dist/bootstrap-table.css">
    <link rel="stylesheet" type="text/css" href="${ctx}/bootstrap/font-awesome-4.7.0/css/font-awesome.css">
    <link rel="stylesheet" type="text/css" href="${ctx}/bootstrap/bootstrap-wysiwyg/prettify.css">
    <link rel="stylesheet" type="text/css" href="${ctx}/bootstrap/bootstrap-wysiwyg/index.css">
</head>
<body>
<div class="container">
    <div class="hero-unit">
        <h1><small id="titleContent">新建文章</small></h1><hr/>
        <h3><br/><small>文章标题</small></h3>
        <input id="articleTitle" type="text" class="form-control"/>
        <h3><br/><small>文章简介</small></h3>
        <textarea id="introduce" class="form-control" style="width:100%;height:80px;"></textarea>
        <h3><br/><small>文章内容</small></h3>
        <div id="alerts"></div>
        <div class="btn-toolbar" data-role="editor-toolbar" data-target="#editor">
            <div class="btn-group">
                <a class="btn" data-edit="bold" title="加粗"><i class="glyphicon glyphicon-bold"></i></a>
                <a class="btn" data-edit="italic" title="倾斜"><i class="glyphicon glyphicon-italic"></i></a>
                <a class="btn" data-edit="strikethrough" title="删除线"><i class="glyphicon glyphicon-gbp"></i></a>
                <a class="btn" data-edit="underline" title="下划线"><i class="glyphicon glyphicon-text-width"></i></a>
            </div>
            <div class="btn-group">
                <a class="btn" data-edit="insertunorderedlist" title="项目符号"><i class="glyphicon glyphicon-list"></i></a>
                <a class="btn" data-edit="insertorderedlist" title="编号"><i class="glyphicon glyphicon-list"></i></a>
                <a class="btn" data-edit="outdent" title="减少缩进量"><i class="glyphicon glyphicon-sort-by-order"></i></a>
                <a class="btn" data-edit="indent" title="增加缩进量"><i class="glyphicon glyphicon-sort-by-order-alt"></i></a>
            </div>
            <div class="btn-group">
                <a class="btn" data-edit="justifyleft" title="左对齐"><i class="glyphicon glyphicon-align-left"></i></a>
                <a class="btn" data-edit="justifycenter" title="居中对齐"><i class="glyphicon glyphicon-align-center"></i></a>
                <a class="btn" data-edit="justifyright" title="右对齐"><i class="glyphicon glyphicon-align-right"></i></a>
                <a class="btn" data-edit="justifyfull" title="两端对齐"><i class="glyphicon glyphicon-align-justify"></i></a>
            </div>
            <div class="btn-group">
                <a class="btn" data-edit="undo" title="撤销"><i class="glyphicon glyphicon-step-backward"></i></a>
                <a class="btn" data-edit="redo" title="恢复"><i class="glyphicon glyphicon-step-forward"></i></a>
            </div>
        </div>
        <div id="editor">Go ahead&hellip;</div>
        <div id="fileTable" class="row">
            <div class="col-lg-12 col-sm-12 col-xs-12 col-md-12">
                <div class="widget">
                    <div class="widget-body">
                        <table id="tableid" data-height="360" data-classes="table table-no-bordered" class="table-hover"></table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<div class="modal-body">
    <div class="ibox-content">
        <div class="text-center">
            <button type="button" class="btn btn-default" onclick="window.location.href='${ctx}/zhcx/tzgg/initTzgg'">返&nbsp;&nbsp;&nbsp;回
            </button>&nbsp;&nbsp;&nbsp;
            <button id="saveText" type="button" class="btn btn-info" onclick="saveData()">提&nbsp;&nbsp;&nbsp;交</button>
        </div>
    </div>
</div>
</body>
<script src="${ctx}/bootstrap/js/jquery-3.3.1.js"></script>
<script src="${ctx}/bootstrap/bootstrap-3.3.7/js/bootstrap.js"></script>
<script src="${ctx}/bootstrap/bootstrap-table/dist/bootstrap-table.js"></script>
<script src="${ctx}/bootstrap/bootstrap-table/dist/locale/bootstrap-table-zh-CN.js"></script>
<script src="${ctx}/bootstrap/bootstrap-wysiwyg/jquery.hotkeys.js"></script>
<script src="${ctx}/bootstrap/bootstrap-wysiwyg/bootstrap-wysiwyg.js"></script>
</html>
<script>
    var xh = "${param.xh}";

    $(function () {
        if (xh){
            $.post("${ctx}/zhcx/tzgg/conditionQuery", {'svo.tzggxh': xh},function (results) {
                $("#titleContent").text("修改文章");$("#articleTitle").val(results[0].wzbt);
                $("#introduce").val(results[0].wzjj);$("#editor").html(results[0].wznr);
            });
        }
    });

    $(function () {
        function initToolbarBootstrapBindings() {
            var fonts = ['Serif', 'Sans', 'Arial', 'Arial Black', 'Courier',
                    'Courier New', 'Comic Sans MS', 'Helvetica', 'Impact', 'Lucida Grande', 'Lucida Sans', 'Tahoma', 'Times',
                    'Times New Roman', 'Verdana'],
                fontTarget = $('[title=Font]').siblings('.dropdown-menu');
            $.each(fonts, function (idx, fontName) {
                fontTarget.append($('<li><a data-edit="fontName ' + fontName + '" style="font-family:\'' + fontName + '\'">' + fontName + '</a></li>'));
            });
            $('a[title]').tooltip({container: 'body'});
            $('.dropdown-menu input').click(function () {
                return false;
            })
                .change(function () {
                    $(this).parent('.dropdown-menu').siblings('.dropdown-toggle').dropdown('toggle');
                })
                .keydown('esc', function () {
                    this.value = '';
                    $(this).change();
                });

            $('[data-role=magic-overlay]').each(function () {
                var overlay = $(this), target = $(overlay.data('target'));
                overlay.css('opacity', 0).css('position', 'absolute').offset(target.offset()).width(target.outerWidth()).height(target.outerHeight());
            });
            if ("onwebkitspeechchange" in document.createElement("input")) {
                var editorOffset = $('#editor').offset();
                $('#voiceBtn').css('position', 'absolute').offset({
                    top: editorOffset.top,
                    left: editorOffset.left + $('#editor').innerWidth() - 35
                });
            } else {
                $('#voiceBtn').hide();
            }
        };

        function showErrorAlert(reason, detail) {
            var msg = '';
            var ref = "";
            if (reason === 'unsupported-file-type') {
                msg = "不支持的格式" + detail;
            }
            else {
                console.log("error uploading file", reason, detail);
            }
            $('<div id="prompt" class="alert"> <button type="button" class="close" data-dismiss="alert">&times;</button>' +
                '<strong>文件上传错误</strong> ' + msg + ' </div>').prependTo('#alerts');
            ref = setInterval(function () {
                $("#prompt").remove();
            }, 3000);
        };
        initToolbarBootstrapBindings();
        $('#editor').wysiwyg({fileUploadError: showErrorAlert});
        window.prettyPrint && prettyPrint();
    });

    function saveData(){
        var articleTitle = $("#articleTitle").val();
        var introduce = $("#introduce").val();
        var thetext = $("#editor").html();

        if (xh){
            $.post("${ctx}/zhcx/tzgg/saveEdit", {
                'svo.wzbt': articleTitle, 'svo.wzjj': introduce,
                'svo.wznr': thetext, 'svo.tzggxh': xh
            }, function (results) {
                window.location.href = '${ctx}/zhcx/tzgg/initTzgg';
            });
        } else {
            $.post("${ctx}/zhcx/tzgg/saveData", {
                'svo.wzbt': articleTitle, 'svo.wzjj': introduce,
                'svo.wznr': thetext
            }, function (results) {
                window.location.href = '${ctx}/zhcx/tzgg/initTzgg';
            });
        }
    }
</script>

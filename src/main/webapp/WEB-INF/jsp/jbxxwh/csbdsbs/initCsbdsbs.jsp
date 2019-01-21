<%--
  Created by IntelliJ IDEA.
  User: PengWen Wang
  Date: 2018/12/21
  Time: 10:14
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<html>
<head>
    <title>初始化表底数报送</title>
    <meta name="description" content="simple and responsive tables"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link rel="shortcut icon" href="${ctx}/assets/img/favicon.png" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="${ctx}/bootstrap/bootstrap-3.3.7/css/bootstrap.css"/>
    <link rel="stylesheet" type="text/css" href="${ctx}/bootstrap/bootstrap-table/dist/bootstrap-table.css">
    <link rel="stylesheet" type="text/css" href="${ctx}/bootstrap/select2/dist/css/select2.css"/>
    <link rel="stylesheet" type="text/css" href="${ctx}/bootstrap/css/beyond.min.css"/>
    <link rel="stylesheet" type="text/css" href="${ctx}/bootstrap/bootstrap-fileinput/css/fileinput.css"/>
    <link rel="stylesheet" type="text/css" href="${ctx}/bootstrap/bootstrapvalidator/src/css/bootstrapValidator.css"/>
    <style type="text/css">
        .select2-container .select2-selection--single{
            height:32px;
            line-height: 32px;
        }
    </style>
</head>
<body>
<div class="page-body">
    <div class="row">
        <div class="col-lg-12 col-sm-12 col-xs-12 col-md-12">
            <div class="widget-header ">
                <span class="widget-caption">初始化表底数报送</span>
            </div>
            <div class="widget-body">
                <div id="toolbar">
                    <button id="add_mota" type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target="#report">
                        <i class="glyphicon glyphicon-plus"></i>初始化
                    </button> &nbsp;

                    <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#trade">
                        <i class="glyphicon glyphicon-repeat"></i>换表
                    </button>
                </div>
                <table id="table" data-height="543" class="table table-striped table-bordered table-hover"></table>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="report" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div style="width:700px ;" class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel">初始化</h4>
            </div>
            <div class="modal-body">
                <div class="ibox-content">
                    <form id="validationForm" method="post" class="form-horizontal">
                        <div class="form-group">
                            <label class="col-sm-3 control-label">取水口地点</label>
                            <div class="col-sm-8">
                                <select style="width: 100%;" class="select-sydd" id="sydd" name="syddjy"></select>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-3 control-label">水表位置编号</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="sbwzbh" name="sbwzbhjy" />
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-3 control-label">水表编号</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="sbbh" name="sbbhjy" />
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-3 control-label">表底数(m³)</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="bds" name="bdsjy" />
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-3 control-label">抄表日期</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="cbrq" name="cbrqjy" readonly/>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-3 control-label">附件</label>
                            <div class="col-sm-8">
                                <input id="fileinput" type="file" class="file-loading" name="fileinput" multiple/>
                            </div>
                        </div>

                        <div class="text-right">
                            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                            <button type="submit" class="btn btn-primary" onclick="submission()">确定</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="trade" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div style="width:700px ;" class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">换表</h4>
            </div>
            <div class="modal-body">
                <div class="ibox-content">
                    <form id="validationFormTrade" method="post" class="form-horizontal">
                        <div class="form-group">
                            <label class="col-sm-3 control-label">取水口地点</label>
                            <div class="col-sm-8">
                                <select style="width: 100%;" class="select-qskddhb" id="qskddhb" name="qskddhbjy"></select>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-3 control-label">水表位置编号</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="sbwzbhhb" name="sbwzbhhbjy" />
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-3 control-label">水表编号</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="sbbhhb" name="sbbhhbjy" />
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-3 control-label">表底数(m³)</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="bdshb" name="bdshbjy" />
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-3 control-label">抄表日期</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="cbrqhb" name="cbrqhbjy" readonly/>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-3 control-label">水表故障类型</label>
                            <div class="col-sm-8">
                                <select style="width: 100%;" class="select-sbgzlxdmhb" id="sbgzlxdmhb" name="sbgzlxdmhbjy"></select>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-3 control-label">水表故障原因</label>
                            <div class="col-sm-8">
                                <textarea class="form-control" rows="4" id="sbgzyyhb" name="sbgzyyhbjy"></textarea>
                            </div>
                        </div>

                        <div class="text-right">
                            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                            <button type="submit" class="btn btn-primary" onclick="change()">确定</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

</body>
<script src="${ctx}/bootstrap/bootstrap-fileinput/js/jquery-2.0.3.min.js"></script>
<script src="${ctx}/bootstrap/bootstrap-3.3.7/js/bootstrap.js"></script>
<script src="${ctx}/bootstrap/bootstrap-table/dist/bootstrap-table.js"></script>
<script src="${ctx}/bootstrap/bootstrap-table/dist/locale/bootstrap-table-zh-CN.js"></script>
<script src="${ctx}/bootstrap/select2/dist/js/select2.js"></script>
<script src="${ctx}/bootstrap/bootstrap-fileinput/js/fileinput.js"></script>
<script src="${ctx}/bootstrap/bootstrap-fileinput/js/locales/zh.js"></script>
<script src="${ctx}/laydate/laydate.js"></script>
<script src="${ctx}/bootstrap/js/digitCheck.js"></script>
<script src="${ctx}/bootstrap/bootstrapvalidator/dist/js/bootstrapValidator.js"></script>
</html>
<script>
    var filepath;

    $(function() {
        initTable();
        formValidator();
        tradeValidator();
        // 表底数校验
        $("#bds,#bdshb").digitcheck();

        $("#cbrq,#cbrqhb").attr('value', getNowFormatDate());

        laydate.render({
            elem: '#cbrq'
            ,format:'yyyy-MM-dd'
        });

        laydate.render({
            elem: '#cbrqhb'
            ,format:'yyyy-MM-dd'
        });

        // 水源地点(下拉菜单)
        $.post("${ctx}/jbxxwh/csbdsbs/syddcd",null,function(result){
            $(".select-sydd,.select-qskddhb").select2({
                data: result,
                placeholder: '请选择',
                allowClear: true
            });
        });

        // 水表故障(下拉菜单)
        $.post("${ctx}/jbxxwh/csbdsbs/sbgzcd",null,function(result){
            $(".select-sbgzlxdmhb").select2({
                data: result,
                placeholder: '请选择',
                allowClear: true
            });
        });

    });

    function initTable() {
        $('#table').bootstrapTable('destroy');
        $('#table').bootstrapTable({
            url: "${ctx}/jbxxwh/csbdsbs/userInitQuery", // 获取数据的Select地址
            sidePagination: "server", 				// 表示服务端请求(分页方式：client客户端分页，server服务端分页)
            queryParams: function(params) {
                return {
                    offset: (params.offset / params.limit) + 1,
                    limit: params.limit
                }
            },
            pagination: true, 						// 是否分页
            singleSelect: true, 					// 设置为true禁止多选
            pageNumber: 1, 							// 初始化加载第一页，默认第一页
            buttonsAlign: 'right', 					// 按钮对齐方式
            pageSize: 10, 							// 每页的记录行数
            pageList: [10, 20, 30, 50], 			// 可供选择的每页行数
            onlyInfoPagination: false, 				// 设置为true只显示总数据数，而不显示分页按钮
            toolbar: '#toolbar',					// 是否包含工具栏
            paginationLoop: true, 					// 设置为true启用分页条无线循环的功能
            clickToSelect: true, 					// 是否启用点击选中行
            uniqueIS: "jbid", 						// 每一行的唯一标识，一般为主键列
            ueryParamsType: 'limit',
            columns: [{
                field: 'ck',
                checkbox: true,
                align: 'center'
            }, {
                field: 'QSKSZD',
                align: 'center',
                title: '水源地点'
            }, {
                field: 'SBWZBH',
                align: 'center',
                title: '水表位置编号'
            }, {
                field: 'SBBH',
                align: 'center',
                title: '水表编号'
            }, {
                field: 'YBDS',
                align: 'center',
                title: '原表底数(m³)'
            }, {
                field: 'SBRQ',
                align: 'center',
                title: '上报日期'
            }, {
                field: 'SHZT_DM',
                align: 'center',
                title: '审核状态',
                sortatable: true,
                formatter: function (value, row, index) {
                    if (value == "01"){return '<span class="label label-warning">未审核</span>';}
                    else if(value == "02"){return '<span class="label label-danger">审核未通过</span>';}
                    else if(value == "03"){return '<span class="label label-success">审核已通过</span>';}
                }
            },{
                field: 'CZLX_DM',
                align: 'center',
                title: '水表状态',
                sortatable: true,
                formatter: function (value, row, index) {
                    if (value == "02" ){
                        return '<span class="label label-success">初始化</span>';
                    }else if(value == "01"){
                        return '<span class="label label-danger">换表</span>';
                    }
                }
            }]
        });
    }

    function submission(){
        // Start Validator
        $("#validationForm").data('bootstrapValidator').validate();
        if(!$("#validationForm").data('bootstrapValidator').isValid()) {
            return;
        }

        // 取水口地点
        var qskdd = $(".select-sydd").select2("data");
        var qskdds = "";
        if (qskdd != null && JSON.stringify(qskdd) != "{}" && typeof(qskdd) != "undefined" && qskdd.length > 0) {
            qskdds = qskdd[0].id;
        }
        // 水表位置编号
        var sbwzbh = $("#sbwzbh").val();
        // 水表编号
        var sbbh = $("#sbbh").val();
        // 表底数
        var bds = $("#bds").val();
        // 抄表日期
        var cbrq = $("#cbrq").val();

        $.post("${ctx}/jbxxwh/csbdsbs/submission", {
            'svo.sybh':qskdds,// 水源编号
            'svo.sbwzbh':sbwzbh,// 水表位置编号
            'svo.sbbh':sbbh, // 水表编号
            'svo.ybds':bds,// 原表底数
            'svo.xbcbrq':cbrq,// 抄表日期
            'svo.dszpurl':filepath// 底数照片URL
        }, function (result) {
            window.location.href = '${ctx}/jbxxwh/csbdsbs/initCsbdsbs';
        });
    }

    function change(){
        // Start Validator
        $("#validationFormTrade").data('bootstrapValidator').validate();
        if(!$("#validationFormTrade").data('bootstrapValidator').isValid()) {
            return;
        };

        // 取水口地点
        var qskdd = $(".select-qskddhb").select2("data");
        var qskdds = "";
        if (qskdd != null && JSON.stringify(qskdd) != "{}" && typeof(qskdd) != "undefined" && qskdd.length > 0) {
            qskdds = qskdd[0].id;
        }
        // 水表位置编号
        var sbwzbh = $("#sbwzbhhb").val();
        // 水表编号
        var sbbh = $("#sbbhhb").val();
        // 表底数
        var bds = $("#bdshb").val();
        // 抄表日期
        var cbrq = $("#cbrqhb").val();
        // 水表故障类型代码
        var sbgzlxdm = $("#sbgzlxdmhb").select2("data");
        var sbgzlxdms = "";
        if (sbgzlxdm != null && JSON.stringify(sbgzlxdm) != "{}" && typeof(sbgzlxdm) != "undefined" && sbgzlxdm.length > 0) {
            sbgzlxdms = sbgzlxdm[0].id;
        }
        // 水表故障原因
        var sbgzyy = $("#sbgzyyhb").val();

        $.post("${ctx}/jbxxwh/csbdsbs/change", {
            'svo.sybh':qskdds,// 水源编号(取水口地点)
            'svo.sbwzbh':sbwzbh,// 水表位置编号
            'svo.sbbh':sbbh, // 水表编号
            'svo.ybds':bds,// (原)表底数
            'svo.xbcbrq':cbrq,// 抄表日期
            'svo.sbgzlx_dm':sbgzlxdms,// 水表故障类型代码
            'svo.sbgzyy':sbgzyy// 水表故障原因
        }, function (result) {
            window.location.href = '${ctx}/jbxxwh/csbdsbs/initCsbdsbs';
        });
    }

    function getNowFormatDate() {
        var date = new Date();
        var tung = "-";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        if (month >= 1 && month <= 9) {month = "0" + month;}
        if (strDate >= 1 && strDate <= 9) {strDate = "0" + strDate}
        if (hours >= 1 && hours <= 9){hours = "0" + hours;}
        if (minutes >= 1 && minutes <= 9){minutes = "0" + minutes;}
        if (seconds >= 1 && seconds <= 9){seconds = "0" + seconds;}
        var currentTime = date.getFullYear() + tung + month + tung + strDate ;
        return currentTime;
    }

    function formValidator() {
        $('#validationForm').bootstrapValidator({
            message: '这个值无效',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                syddjy: {
                    validators: {
                        notEmpty: {
                            message: '取水口地点是必须的，不能是空的'
                        }
                    }
                },
                sbwzbhjy: {
                    validators: {
                        notEmpty: {
                            message: '水表位置编号是必须的，不能是空的'
                        }, stringLength: {
                            min: 1,
                            max: 10,
                            message: '水表位置编号必须大于1且小于10的字符组成'
                        }
                    }
                },
                sbbhjy: {
                    validators: {
                        notEmpty: {
                            message: '水表编号是必须的，不能是空的'
                        }, stringLength: {
                            min: 1,
                            max: 50,
                            message: '水表编号必须大于1且小于50的字符组成'
                        }, remote: {
                            url: "${ctx}/jbxxwh/csbdsbs/certifiedCheck",
                            message: '温馨提示：审核已通过或审核中水表，不能再次提交',
                            delay: 1000,
                            type: 'POST'
                        }
                    }
                },
                bdsjy: {
                    validators: {
                        notEmpty: {
                            message: '表底数是必须的，不能是空的'
                        }, stringLength: {
                            min: 0,
                            max: 11,
                            message: '表底数必须大于0且小于11的数字组成'
                        }
                    }
                }
            }
        });
    }

    function tradeValidator(){
        $('#validationFormTrade').bootstrapValidator({
            message: '这个值无效',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                qskddhbjy: {
                    validators: {
                        notEmpty: {
                            message: '取水口地点是必须的，不能是空的'
                        }
                    }
                },
                sbwzbhhbjy: {
                    validators: {
                        notEmpty: {
                            message: '水表位置编号是必须的，不能是空的'
                        }, stringLength: {
                            min: 1,
                            max: 10,
                            message: '水表位置编号必须大于1且小于10的字符组成'
                        }
                    }
                },
                sbbhhbjy: {
                    validators: {
                        notEmpty: {
                            message: '水表编号是必须的，不能是空的'
                        }, stringLength: {
                            min: 1,
                            max: 50,
                            message: '水表编号必须大于1且小于50的字符组成'
                        }
                    }
                },
                bdshbjy: {
                    validators: {
                        notEmpty: {
                            message: '表底数是必须的，不能是空的'
                        }, stringLength: {
                            min: 0,
                            max: 11,
                            message: '表底数必须大于0且小于11的数字组成'
                        }
                    }
                },
                sbgzlxdmhbjy: {
                    validators: {
                        notEmpty: {
                            message: '水表故障类型是必须的，不能是空的'
                        }
                    }
                },
                sbgzyyhbjy: {
                    validators: {
                        notEmpty: {
                            message: '水表故障原因是必须的，不能是空的'
                        }
                    }
                }
            }
        });
    }

    $("#report").on('hidden.bs.modal', function() {
        $("#validationForm").data('bootstrapValidator').destroy();
        $("#validationForm").data('bootstrapValidator', null);
        $("#sbwzbh,#sbbh,#bds").val("");
        formValidator();
    });

    $("#trade").on('hidden.bs.modal', function() {
        $("#validationFormTrade").data('bootstrapValidator').destroy();
        $("#validationFormTrade").data('bootstrapValidator', null);
        $("#sbwzbhhb,#sbbhhb,#bdshb,#sbgzyyhb").val("");
        tradeValidator();
    });

    $(document).on('ready', function () {
        $("#fileinput").fileinput({
            showUpload: true,                       // 是否显示上传按钮
            showPreview: true,                      // 是否显示预览
            dropZoneEnabled: false,                 // 是否显示拖拽区域
            layoutTemplates:{
                actionUpload:''                      // 移除文件缩略图小图标
            },
            maxFileCount: 1,                         // 最大文件数量
            mainClass: "input-group-lg",
            uploadAsync: true,                       // 默认异步上传
            language: "zh",                          // 语言
            allowedFileExtensions: ['jpg', 'png', 'jpeg'], //允许接受的文件后缀
            maxFileSize: 51200,                      //单位kb  最大文件大小   0 为不限制文件大小
            enctype: 'multipart/form-data',          //模拟form数据类型
            textEncoding:'UTF-8',
            uploadUrl: '${ctx}/jbxxwh/csbdsbs/fileUpload'//上传请求地址
        });
        // 异步上传返回结果处理
        $("#fileinput").on('filepreupload', function (event, data, previewId, index) {
            $.post("${ctx}/jbxxwh/csbdsbs/theFilePath", null, function (data) {
                var getFileName = $("#fileinput").val();
                var fileName = getFileName.substring(11);
                filepath = data + fileName;
            });
        });
    });
</script>

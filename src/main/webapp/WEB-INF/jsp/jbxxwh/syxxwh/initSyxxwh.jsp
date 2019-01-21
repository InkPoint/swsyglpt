<%--
  Created by IntelliJ IDEA.
  User: PengWen Wang
  Date: 2018/12/13
  Time: 11:20
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<html>
<head>
    <title>水源信息维护</title>
    <%@include file="../../common/include-head.jsp" %>
    <%@include file="../../common/include-head.amap.jsp" %>
    <meta name="description" content="simple and responsive tables"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link rel="shortcut icon" href="${ctx}/assets/img/favicon.png" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="${ctx}/bootstrap/bootstrap-3.3.7/css/bootstrap.css"/>
    <link rel="stylesheet" type="text/css" href="${ctx}/bootstrap/bootstrap-table/dist/bootstrap-table.css">
    <link rel="stylesheet" type="text/css" href="${ctx}/bootstrap/font-awesome-4.7.0/css/font-awesome.css"/>
    <link rel="stylesheet" type="text/css" href="${ctx}/bootstrap/select2/dist/css/select2.css"/>
    <link rel="stylesheet" type="text/css" href="${ctx}/bootstrap/css/beyond.min.css"/>
    <link rel="stylesheet" type="text/css" href="${ctx}/bootstrap/bootstrap-fileinput/css/fileinput.css"/>
    <link rel="stylesheet" type="text/css" href="${ctx}/bootstrap/viewer/css/viewer.css"/>
    <link rel="stylesheet" type="text/css" href="${ctx}/bootstrap/viewer/css/main.css"/>
    <style>
        *{
            font-family: "Arial", "Microsoft YaHei";
            font-size: 14px;
        }
        .th-inner{
            font-size: 12px;
        }
        .txinput{
            width: 100px;
            height: 30px;
        }
        select{
            width: 100px;
            height: 24px;
            border: 1px solid #ccc;
        }
    </style>
</head>
<body>

<div class="page-body">
    <div class="row">
        <div class="col-lg-12 col-sm-6 col-xs-12 col-md-12">
            <div class="widget">
                <div class="widget-header bg-blue">
                    <span class="widget-caption">查询条件</span>
                </div>
                <div class="widget-body">
                    <table class="table">
                        <tr>
                            <td style="vertical-align:middle; width:2.2cm;">水源区域:</td>
                            <td style="width: 6cm;">
                                <div class="col-sm-2" style="width: 190px;">
                                    <select id="area" class="select-syqys" style="width:100%;height: 35px;">
                                        <option/>
                                    </select>
                                </div>
                            </td>

                            <td style="vertical-align:middle; width:2.2cm;">水源类型:</td>
                            <td style="width: 6cm;">
                                <div class="col-sm-2" style="width: 190px;">
                                    <select id="querysylx" class="select-sylxs" style="width:100%;height: 35px;">
                                        <option/>
                                    </select>
                                </div>
                            </td>

                            <td style="vertical-align:middle; width:2.2cm;">水源状态:</td>
                            <td style="width: 6cm;">
                                <div class="col-sm-2" style="width: 190px;">
                                    <select id="querysyzt" class="select-syzts" style="width:100%;height: 35px;">
                                        <option/>
                                    </select>
                                </div>
                            </td>

                            <td style="vertical-align:middle; width:2.5cm;">取水所在地:</td>
                            <td>
                                <div class="col-sm-2" style="width: 190px;">
                                    <input id="site" align="left" type="text" class="form-control" placeholder="请输入名称">
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td colspan="12" align="center">
                                <button type="button" class="btn btn-info" style="width: 2cm;" onclick="namedQuery()">执行查询</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-12 col-sm-12 col-xs-12 col-md-12">
            <div class="widget">
                <div class="widget-header ">
                    <span class="widget-caption">查询结果</span>
                </div>
                <div class="widget-body">
                    <div id="toolbar">
                        <button type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target="#addModal">
                            <i class="glyphicon glyphicon-plus"></i>添加
                        </button>
                        <button type="button" class="btn btn-warning btn-sm" onclick="editData()">
                            <i class="glyphicon glyphicon-pencil"></i>编辑
                        </button>
                        <button type="button" class="btn btn-danger btn-sm" onclick="del()">
                            <i class="glyphicon glyphicon-remove"></i>删除
                        </button>
                    </div>
                    <table id="table" class="table table-striped table-bordered table-hover" data-height="605" style="white-space: nowrap;"></table>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="addModal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div style="width:1100px;" class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel">新增</h4>
            </div>
            <div id="elementManageTbody" class="modal-body">
                <table class="table table-bordered table-striped">
                    <tbody>
                    <tr>
                        <td>取水地点</td>
                        <td colspan="3"><input style="width: 420px" id="theLocation" type="text" class="txinput" name="qsddjy" maxlength="300"/></td>
                        <td>经度
                            <button type="button" class="btn btn-info btn-xs" onclick="fetchPosition()">
                                <i class="glyphicon glyphicon-map-marker"></i>地图
                            </button>
                        </td>
                        <td><input id="jd" type="text" class="txinput" name="jdjy" maxlength="20" /></td>
                        <td>维度</td>
                        <td><input id="wd" type="text" class="txinput" name="wdjy" maxlength="20" /></td>
                    </tr>
                    <tr>
                        <td>水源区域</td>
                        <td><select id="syqy" class="select-syqy" name="syqyjy"></select></td>
                        <td>水源状态</td>
                        <td><select id="syzt" class="select-syzt" name="syztjy"></select></td>
                        <td>取水许可状态</td>
                        <td><select id="qsxkzzt" class="select-qsxkzzt"></select></td>
                        <td>取水许可证编号</td>
                        <td><input id="qsxkzbh" type="text" class="txinput" name="qsxkzbhjy" maxlength="32"/></td>
                    </tr>
                    <tr>
                        <td>取水许可审批机关</td>
                        <td><input id="qsxkspjg" type="text" style="border: 0; text-align: center; color: #ccc"  class="txinput"  value="西安市水务局" readonly name="qsxkspjgjy" /></td>
                        <td>取水用途</td>
                        <td><select id="qsyt" class="select-qsyt" name="qsytjy"></select></td>
                        <td>取水口数量</td>
                        <td><input id="qsksl" type="text" class="txinput" name="qsksljy" title="请输入数字" maxlength="10" onkeyup="value=value.replace(/[^\d]/g,'')"/></td>
                        <td>分计量个数</td>
                        <td ><input id="fjlgs" type="text" class="txinput" name="fjlgsjy" title="请输入数字" onkeyup="value=value.replace(/[^\d]/g,'')"/></td>
                    </tr>
                    <tr>
                        <td>总计量个数</td>
                        <td><input id="zjlgs" type="text" class="txinput" name="zjlgsjy" title="请输入数字" maxlength="10" onkeyup="value=value.replace(/[^\d]/g,'')"/></td>
                        <td>是否在线监测</td>
                        <td><select id="sfzxjc" class="select-sfzxjc" name="sfzxjcjy"></select></td>
                        <td>水源类型</td>
                        <td><select id="sylx" class="select-sylx" name="sylxjy"></select></td>
                        <td>取用水行业</td>
                        <td><select id="qyshy" class="select-qyshy" name="qyshyjy"></select></td>
                    </tr>
                    <tr>
                        <td style="white-space: nowrap;">特殊用水类别</td>
                        <td><select id="tsyslb" class="select-tsyslb" name="tsyslbjy"></select></td>
                        <td style="white-space: nowrap;">取水许可证有效期限起</td>
                        <td><input id="xzkyxqxq" type="text" class="txinput" name="xzkyxqxqjy" readonly/></td>
                        <td style="white-space: nowrap;">取水许可证有效期限止</td>
                        <td><input id="xzkyxqxz" type="text"  class="txinput" name="xzkyxqxzjy" readonly/></td>
                        <td style="white-space: nowrap;">取水量核定机关</td>
                        <td><input id="qslhdjg" type="text" style="border: 0; text-align: center; color: #ccc"  class="txinput"  value="西安市水务局" readonly name="qslhdjg" /></td>
                    </tr>
                    <tr>
                        <td>年取用水计划</td>
                        <td><input id="nqysjh" type="text" class="txinput" name="nqysjhjy" title="请输入数字" maxlength="15" onkeyup="value=value.replace(/[^\d]/g,'')"/></td>
                        <td>地下水取水地点供水管网是否覆盖</td>
                        <td><select id="dxsqsddgsgwsffg" class="select-dxsqsddgsgwsffg" name="dxsqsddgsgwsffgjy"></select></td>
                        <td>地下水超采区类型</td>
                        <td><select id="dxsccqlx" class="select-dxsccqlx" name="dxsccqlxjy"></select></td>
                        <td>水资源费额标准(元/立方米)</td>
                        <td><input id="szyfebz" type="text" class="txinput" name="szyfebzjy"  title="请输入数字" maxlength="15" /></td>
                    </tr>
                    <tr>
                        <td>取水方式</td>
                        <td><select id="qsfs" class="select-qsfs" name="qsfsjy"></select></td>
                        <td>行政区划</td>
                        <td><select id="xzqh" class="select-xzqh" name="xzqhjy"></select></td>
                        <td>退水地点</td>
                        <td><input id="tsdd" type="text" class="txinput" name="tsddjy"  maxlength="300"/></td>
                        <td>退水方式</td>
                        <td><input id="tsfs" type="text"  class="txinput" name="tsfsjy"  maxlength="200"/></td>
                    </tr>
                    <tr>
                        <td>退水量</td>
                        <td><input id="tsl" type="text" class="txinput" name="tsljy" title="请输入数字" maxlength="13" onkeyup="value=value.replace(/[^\d]/g,'')"/></td>
                        <td>退水水质要求</td>
                        <td><input id="tsszyq" type="text" class="txinput" name="tsszyqjy" maxlength="300"/></td>
                        <td>用水户</td>
                        <td colspan="3"><select style="width: 250px;" id="ysh" class="select-ysh"></select></td>
                    </tr>
                    <tr>
                        <td>附件</td>
                        <td colspan="7">
                            <input id="fileinput" type="file" class="file-loading" name="fileinput" multiple>
                        </td>
                    </tr>
                    <tr align="center">
                        <td colspan="8"><button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                            <button type="button" class="btn btn-primary" onclick="addData()">确定</button>
                        </td>
                    </tr>
                </table>
                </tbody>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="editModal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div style="width:1100px;" class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 id="modifyTitle" class="modal-title">编辑</h4>
            </div>
            <div class="modal-body">
                <table class="table table-bordered table-striped">
                    <tbody>
                    <tr>
                        <td>取水地点</td>
                        <td colspan="3"><input style="width: 420px" id="editqsdd" type="text" class="txinput" name="qsddjy" maxlength="300"/></td>
                        <td>经度
                            <button type="button" class="btn btn-info btn-xs" onclick="fetchPosition()">
                                <i class="glyphicon glyphicon-map-marker"></i>地图
                            </button>
                        </td>
                        <td><input id="editjd" type="text" class="txinput" name="jdjy" maxlength="20"/></td>
                        <td>维度</td>
                        <td><input id="editwd" type="text" class="txinput" name="wdjy" maxlength="20"/></td>
                    </tr>
                    <tr>
                        <td>水源区域</td>
                        <td><select id="editsyqy" class="select-syqy editsyqy" name="syqyjy"></select></td>
                        <td>水源状态</td>
                        <td><select id="editsyzt" class="select-syzt editsyzt" name="syztjy"></select></td>
                        <td>取水许可状态</td>
                        <td><select id="editqsxkzzt" class="select-qsxkzzt editqsxkzzt"></select></td>
                        <td>取水许可证编号</td>
                        <td><input id="editqsxkzbh" type="text" class="txinput" name="qsxkzbhjy" maxlength="32"/></td>
                    </tr>
                    <tr>
                        <td>取水许可审批机关</td>
                        <td><input id="editqsxkspjg" type="text" style="border: 0; text-align: center; color: #ccc"  class="txinput"  value="西安市水务局" readonly name="qsxkspjgjy" /></td>
                        <td>取水用途</td>
                        <td><select id="editqsyt" class="select-qsyt editqsyt" name="qsytjy"></select></td>
                        <td>取水口数量</td>
                        <td><input id="editqsksl" type="text" class="txinput" name="qsksljy" title="请输入数字" maxlength="10" onkeyup="value=value.replace(/[^\d]/g,'')"/></td>
                        <td>分计量个数</td>
                        <td><input id="editfjlgs" type="text" class="txinput" name="fjlgsjy" title="请输入数字" onkeyup="value=value.replace(/[^\d]/g,'')"/></td>
                    </tr>
                    <tr>
                        <td>总计量个数</td>
                        <td><input id="editzjlgs" type="text" class="txinput" name="zjlgsjy"  title="请输入数字" maxlength="10" onkeyup="value=value.replace(/[^\d]/g,'')"/></td>
                        <td>是否在线监测</td>
                        <td><select id="editsfzxjc" class="select-sfzxjc editsfzxjc" name="sfzxjcjy"></select></td>
                        <td>水源类型</td>
                        <td><select id="editsylx" class="select-sylx editsylx" name="sylxjy"></select></td>
                        <td>取用水行业</td>
                        <td><select id="editqyshy" class="select-qyshy editqyshy" name="qyshyjy"></select></td>
                    </tr>
                    <tr>
                        <td style="white-space: nowrap;">特殊用水类别</td>
                        <td><select id="edittsyslb" class="select-tsyslb edittsyslb" name="tsyslbjy"></select></td>
                        <td style="white-space: nowrap;">取水许可证有效期限起</td>
                        <td><input id="editxzkyxqxq" type="text" class="txinput" name="xzkyxqxqjy" readonly/></td>
                        <td style="white-space: nowrap;">取水许可证有效期限止</td>
                        <td><input id="editxzkyxqxz" type="text"  class="txinput" name="xzkyxqxzjy" readonly/></td>
                        <td style="white-space: nowrap;">取水量核定机关</td>
                        <td><input id="editqslhdjg" type="text" style="border: 0; text-align: center; color: #ccc"  class="txinput"  value="西安市水务局" readonly name="qslhdjg" /></td>
                    </tr>
                    <tr>
                        <td>年取用水计划</td>
                        <td><input id="editnqysjh" type="text" class="txinput" name="nqysjhjy" title="请输入数字" maxlength="15" onkeyup="value=value.replace(/[^\d]/g,'')"/></td>
                        <td>地下水取水地点供水管网是否覆盖</td>
                        <td><select id="editdxsqsddgsgwsffg" class="select-dxsqsddgsgwsffg editdxsqsddgsgwsffg" name="dxsqsddgsgwsffgjy"></select></td>
                        <td>地下水超采区类型</td>
                        <td><select id="editdxsccqlx" class="select-dxsccqlx editdxsccqlx" name="dxsccqlxjy"></select></td>
                        <td>水资源费额标准(元/立方米)</td>
                        <td><input id="editszyfebz" type="text" class="txinput" name="szyfebzjy"  title="请输入数字" maxlength="15"/></td>
                    </tr>
                    <tr>
                        <td>取水方式</td>
                        <td><select id="editqsfs" class="select-qsfs editqsfs" name="qsfsjy"></select></td>
                        <td>行政区划</td>
                        <td><select id="editxzqh" class="select-xzqh editxzqh" name="xzqhjy"></select></td>
                        <td>退水地点</td>
                        <td><input id="edittsdd" type="text" class="txinput" name="tsddjy" maxlength="300"/></td>
                        <td>退水方式</td>
                        <td><input id="edittsfs" type="text"  class="txinput" name="tsfsjy" maxlength="200"/></td>
                    </tr>
                    <tr>
                        <td>退水量</td>
                        <td><input id="edittsl" type="text" class="txinput" name="tsljy" title="请输入数字" maxlength="13" onkeyup="value=value.replace(/[^\d]/g,'')"/></td>
                        <td>退水水质要求</td>
                        <td><input id="edittsszyq" type="text" class="txinput" name="tsszyqjy" maxlength="300"/></td>
                            <td>用水户</td>
                            <td colspan="3"><select style="width: 240px;" id="editysh" class="select-ysh editysh"></select></td>
                    </tr>
                    <tr align="center">
                        <td colspan="8"><button type="button" class="btn btn-default" data-dismiss="modal">取消</button>&nbsp;&nbsp;
                            <button type="button" class="btn btn-primary" onclick="saveEditData()">保存</button>
                        </td>
                    </tr>
                </table>
                </tbody>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="viewModal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div style="width:1100px;" class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">查看</h4>
            </div>
            <div class="modal-body">
                <table class="table table-bordered table-striped">
                    <tbody>
                    <tr>
                        <td>取水地点</td>
                        <td colspan="3"><input style="width: 420px" id="viewqsdd" type="text" class="txinput" disabled/></td>
                        <td>经度</td>
                        <td><input id="viewjd" type="text" class="txinput" disabled/></td>
                        <td>维度</td>
                        <td><input id="viewwd" type="text" class="txinput" disabled/></td>
                    </tr>
                    <tr>
                        <td>水源区域</td>
                        <td><select id="viewsyqy" class="select-syqy viewsyqy" disabled></select></td>
                        <td>水源状态</td>
                        <td><select id="viewsyzt" class="select-syzt viewsyzt" disabled></select></td>
                        <td>取水许可状态</td>
                        <td><select id="viewqsxkzzt" class="select-qsxkzzt viewqsxkzzt" disabled></select></td>
                        <td>取水许可证编号</td>
                        <td><input id="viewqsxkzbh" type="text" class="txinput" disabled/></td>
                    </tr>
                    <tr>
                        <td>取水许可审批机关</td>
                        <td><input id="viewqsxkspjg" type="text" style="border: 0; text-align: center; color: #ccc"  class="txinput"  value="西安市水务局" disabled/></td>
                        <td>取水用途</td>
                        <td><select id="viewqsyt" class="select-qsyt viewqsyt" disabled></select></td>
                        <td>取水口数量</td>
                        <td><input id="viewqsksl" type="text" class="txinput" disabled/></td>
                        <td>分计量个数</td>
                        <td><input id="viewfjlgs" type="text" class="txinput" disabled/></td>
                    </tr>
                    <tr>
                        <td>总计量个数</td>
                        <td><input id="viewzjlgs" type="text" class="txinput" disabled/></td>
                        <td>是否在线监测</td>
                        <td><select id="viewsfzxjc" class="select-sfzxjc viewsfzxjc" disabled></select></td>
                        <td>水源类型</td>
                        <td><select id="viewsylx" class="select-sylx viewsylx" disabled></select></td>
                        <td>取用水行业</td>
                        <td><select id="viewqyshy" class="select-qyshy viewqyshy" disabled></select></td>
                    </tr>
                    <tr>
                        <td style="white-space: nowrap;">特殊用水类别</td>
                        <td><select id="viewtsyslb" class="select-tsyslb viewtsyslb" disabled></select></td>
                        <td style="white-space: nowrap;">取水许可证有效期限起</td>
                        <td><input id="viewxzkyxqxq" type="text" class="txinput" disabled/></td>
                        <td style="white-space: nowrap;">取水许可证有效期限止</td>
                        <td><input id="viewxzkyxqxz" type="text"  class="txinput" disabled/></td>
                        <td style="white-space: nowrap;">取水量核定机关</td>
                        <td><input id="viewqslhdjg" type="text" style="border: 0; text-align: center; color: #ccc"  class="txinput"  value="西安市水务局" disabled/></td>
                    </tr>
                    <tr>
                        <td>年取用水计划</td>
                        <td><input id="viewnqysjh" type="text" class="txinput" disabled/></td>
                        <td>地下水取水地点供水管网是否覆盖</td>
                        <td><select id="viewdxsqsddgsgwsffg" class="select-dxsqsddgsgwsffg viewdxsqsddgsgwsffg" disabled></select></td>
                        <td>地下水超采区类型</td>
                        <td><select id="viewdxsccqlx" class="select-dxsccqlx viewdxsccqlx" disabled></select></td>
                        <td>水资源费额标准(元/立方米)</td>
                        <td><input id="viewszyfebz" type="text" class="txinput" disabled/></td>
                    </tr>
                    <tr>
                        <td>取水方式</td>
                        <td><select id="viewqsfs" class="select-qsfs viewqsfs" disabled></select></td>
                        <td>行政区划</td>
                        <td><select id="viewxzqh" class="select-xzqh viewxzqh" disabled></select></td>
                        <td>退水地点</td>
                        <td><input id="viewtsdd" type="text" class="txinput" disabled/></td>
                        <td>退水方式</td>
                        <td><input id="viewtsfs" type="text"  class="txinput" disabled/></td>
                    </tr>
                    <tr>
                        <td>退水量</td>
                        <td><input id="viewtsl" type="text" class="txinput" disabled/></td>
                        <td>退水水质要求</td>
                        <td><input id="viewtsszyq" type="text" class="txinput" disabled/></td>
                            <td>用水户</td>
                            <td colspan="3"><select style="width: 240px;" id="viewysh" class="select-ysh viewysh" disabled></select></td>
                    </tr>
                    <tr>
                        <td>附件</td>
                        <td colspan="7">
                            <ul class="docs-pictures clearfix">
                                <li>
                                    <img id="imgs" style="width: 60px;height: 60px;" alt="80x80" class="img-rounded">
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr align="center">
                        <td colspan="8"><button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                        </td>
                    </tr>
                </table>
                </tbody>
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
<script src="${ctx}/bootstrap/js/digitCheck.js"></script>
<script src="${ctx}/laydate/laydate.js"></script>
<script src="${ctx}/bootstrap/viewer/js/viewer.common.js"></script>
<script src="${ctx}/bootstrap/viewer/js/viewer.js"></script>
<script src="${ctx}/bootstrap/viewer/js/main.js"></script>
</html>
<script>
    var filepath;
    var djxh,sybh;

    $(function() {
        initTable();
        $("#site").focus();
        $(document).keydown(function (event) {
            if (event.keyCode == 13) {
                namedQuery();
            }
        });

        $(function() {
            // 水资源费额标准校验
            $("#szyfebz,#editszyfebz").digitcheck();
        });

        $("#xzkyxqxq,#xzkyxqxz").attr('value', getNowFormatDate());

        laydate.render({
            elem: '#xzkyxqxq'
            ,format:'yyyy-MM-dd'
        });

        laydate.render({
            elem: '#xzkyxqxz'
            ,format:'yyyy-MM-dd'
        });

        laydate.render({
            elem: '#editxzkyxqxq'
            ,format:'yyyy-MM-dd'
        });

        laydate.render({
            elem: '#editxzkyxqxz'
            ,format:'yyyy-MM-dd'
        });

        // 水源类型
        $.post("${ctx}/jbxxwh/syxxwh/sylxcd",null,function(result){
            $(".select-sylx").select2({
                data: result,
                placeholder: '请选择'
            });
        });

        // 取用水行业
        $.post("${ctx}/jbxxwh/syxxwh/qyshycd",null,function(result){
            $(".select-qyshy").select2({
                data: result,
                placeholder: '请选择'
            });
        });

        // 取水用途
        $.post("${ctx}/jbxxwh/syxxwh/qsytcd",null,function(result){
            $(".select-qsyt").select2({
                data: result,
                placeholder: '请选择'
            });
        });

        // 特殊用水类别
        $.post("${ctx}/jbxxwh/syxxwh/tsyslbcd",null,function(result){
            $(".select-tsyslb").select2({
                data: result,
                placeholder: '请选择'
            });
        });

        // 地下水取水地点供水管网是否覆盖
        $.post("${ctx}/jbxxwh/syxxwh/whether",null,function(result){
            $(".select-dxsqsddgsgwsffg").select2({
                data: result,
                placeholder: '请选择'
            });
        });

        // 是否在线监测
        $.post("${ctx}/jbxxwh/syxxwh/whether",null,function(result){
            $(".select-sfzxjc").select2({
                data: result,
                placeholder: '请选择'
            });
        });

        // 地下水超采区类型
        $.post("${ctx}/jbxxwh/syxxwh/dxsccqlxcd",null,function(result){
            $(".select-dxsccqlx").select2({
                data: result,
                placeholder: '请选择'
            });
        });

        // 取水方式
        $.post("${ctx}/jbxxwh/syxxwh/qsfscd",null,function(result){
            $(".select-qsfs").select2({
                data: result,
                placeholder: '请选择'
            });
        });

        // 行政区划
        $.post("${ctx}/jbxxwh/syxxwh/xzqhcd",null,function(result){
            $(".select-xzqh").select2({
                data: result,
                placeholder: '请选择'
            });
        });

        // 水源状态
        $.post("${ctx}/jbxxwh/syxxwh/syztcd",null,function(result){
            $(".select-syzt").select2({
                data: result,
                placeholder: '请选择'
            });
        });

        // 水源区域
        $.post("${ctx}/jbxxwh/syxxwh/syqycd",null,function(result){
            $(".select-syqy").select2({
                data: result,
                placeholder: '请选择'
            });
        });

        // 用水户
        $.post("${ctx}/jbxxwh/syxxwh/yshcd",null,function(result){
            $(".select-ysh").select2({
                data: result,
                placeholder: '请选择',
                allowClear: true
            });
        });

        // 取水许可证状态
        $.post("${ctx}/jbxxwh/syxxwh/qsxkzztcd",null,function(result){
            $(".select-qsxkzzt").select2({
                data: result,
                placeholder: '请选择'
            });
        });

        // 水源区域（检索）
        $.post("${ctx}/jbxxwh/syxxwh/syqycd",null,function(result){
            $(".select-syqys").select2({
                data: result,
                placeholder: '请选择',
                allowClear: true
            });
        });

        // 水源类型
        $.post("${ctx}/jbxxwh/syxxwh/sylxcd",null,function(result){
            $(".select-sylxs").select2({
                data: result,
                placeholder: '请选择',
                allowClear: true
            });
        });

        // 水源状态
        $.post("${ctx}/jbxxwh/syxxwh/syztcd",null,function(result){
            $(".select-syzts").select2({
                data: result,
                placeholder: '请选择',
                allowClear: true
            });
        });
    });

    function initTable(site,areas,sylxs,syzts) {
        $('#table').bootstrapTable('destroy');
        $('#table').bootstrapTable({
            url: "${ctx}/jbxxwh/syxxwh/initQuery", 	// 获取数据的Select地址
            sidePagination: "server", 				// 表示服务端请求(分页方式：client客户端分页，server服务端分页)
            queryParams: function(params) {
                return {
                    'svo.syqy_dm': areas,            // 水源区域代码
                    'svo.qskszd': site,              // 取水口所在地
                    'svo.sylx_dm': sylxs,            // 水源类型
                    'svo.syzt_dm': syzts,            // 水源状态
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
            uniqueIS: "CSBDJXH", 			        // 每一行的唯一标识，一般为主键列
            ueryParamsType: 'limit',
            columns: [{
                field: 'ck',
                checkbox: true,
                align: 'center'
            }, {
                field: 'SYQY_DM',
                align: 'left',
                halign: 'center',
                title: '水源区域'

            }, {
                field: 'QSKSZD',
                align: 'left',
                halign: 'center',
                title: '取水口所在地'
            }, {
                field: 'SYLX_DM',
                align: 'left',
                halign: 'center',
                title: '水源类型'
            }, {
                field: 'QSHY_DM',
                align: 'left',
                halign: 'center',
                title: '取用水行业'
            }, {
                field: 'SZYFEBZ',
                align: 'left',
                halign: 'center',
                title: '水资源费额标准',
                sortatable: true,
                formatter: function (value, row, index) {
                    return value +'元/立方米';
                }
            },{
                field: 'SYZT_DM',
                align: 'left',
                halign: 'center',
                title: '水源状态'
            }, {
                field: 'OPERATION',
                align: 'center',
                title: '操作',
                sortatable: true,
                formatter: function (value, row, index) {
                    return '<button type="button" class="btn btn-link btn-xs" onclick="detailsView(\''+ row.SYDJXH +'\')">查看</button>';
                }
            }]
        });
    }

    function addData() {
        // 水源区域
        var syqy = $(".select-syqy").select2("data");
        var syqys = "";
        if (syqy != null && JSON.stringify(syqy) != "{}" && typeof(syqy) != "undefined" && syqy.length > 0) {
            syqys = $("#syqy option:checked").val();
        }
        // 水源状态
        var syzt = $(".select-syzt").select2("data");
        var syzts = "";
        if (syzt != null && JSON.stringify(syzt) != "{}" && typeof(syzt) != "undefined" && syzt.length > 0) {
            syzts = $("#syzt option:checked").val();
        }

        // 取水许可证状态
        var qsxkzzt = $(".select-qsxkzzt").select2("data");
        var qsxkzzts = "";
        if (qsxkzzt != null && JSON.stringify(qsxkzzt) != "{}" && typeof(qsxkzzt) != "undefined" && qsxkzzt.length > 0) {
            qsxkzzts = $("#qsxkzzt option:checked").val();
        }

        // 取水许可证编号
        var qsxkzbh = $("#qsxkzbh").val();
        if (qsxkzbh == ''){layer.msg('请输入许可证编号', {icon: 0});return false;}
        // 取水许可审批机关
        var qsxkspjg = $("#qsxkspjg").val();
        // 取水用途
        var qsyt = $(".select-qsyt").select2("data");
        var qsyts = "";
        if (qsyt != null && JSON.stringify(qsyt) != "{}" && typeof(qsyt) != "undefined" && qsyt.length > 0) {
            qsyts = $("#qsyt option:checked").val();
        }
        // 取水口数量
        var qsksl = $("#qsksl").val();
        if (qsksl == ''){layer.msg('请输入取水口数量', {icon: 0});return false;}
        // 分计量个数
        var fjlgs = $("#fjlgs").val();
        if (fjlgs == ''){layer.msg('请输入分计量个数', {icon: 0});return false;}
        // 总计量个数
        var zjlgs = $("#zjlgs").val();
        if (zjlgs == ''){layer.msg('请输入总计量个数', {icon: 0});return false;}
        // 是否在线监测
        var sfzxjc = $(".select-sfzxjc").select2("data");
        var sfzxjcs = "";
        if (sfzxjc != null && JSON.stringify(sfzxjc) != "{}" && typeof(sfzxjc) != "undefined" && sfzxjc.length > 0) {
            sfzxjcs = $("#sfzxjc option:checked").val();
        }
        // 水源类型
        var sylx = $(".select-sylx").select2("data");
        var sylxs = "";
        if (sylx != null && JSON.stringify(sylx) != "{}" && typeof(sylx) != "undefined" && sylx.length > 0) {
            sylxs = $("#sylx option:checked").val();
        }
        // 取用水行业
        var qyshy = $(".select-qyshy").select2("data");
        var qyshys = "";
        if (qyshy != null && JSON.stringify(qyshy) != "{}" && typeof(qyshy) != "undefined" && qyshy.length > 0) {
            qyshys = $("#qyshy option:checked").val();
        }
        // 特殊用水类别
        var tsyslb = $(".select-tsyslb").select2("data");
        var tsyslbs = "";
        if (tsyslb != null && JSON.stringify(tsyslb) != "{}" && typeof(tsyslb) != "undefined" && tsyslb.length > 0) {
            tsyslbs = $("#tsyslb option:checked").val();
        }
        // 取水许可证有效期限起
        var xzkyxqxq = $("#xzkyxqxq").val();
        if (xzkyxqxq == ''){layer.msg('请选择取水许可证有效期起', {icon: 0});return false;}
        // 取水许可证有效期限止
        var xzkyxqxz = $("#xzkyxqxz").val();
        if (xzkyxqxz == ''){layer.msg('请选择取水许可证有效期至', {icon: 0});return false;}
        // 取水量核定机关
        var qslhdjg = $("#qslhdjg").val();
        // 年取用水计划
        var nqysjh = $("#nqysjh").val();
        if (nqysjh == ''){layer.msg('请输入年取用水计划', {icon: 0});return false;}
        // 地下水取水地点供水管网是否覆盖
        var dxsqsddgsgwsffg = $(".select-dxsqsddgsgwsffg").select2("data");
        var dxsqsddgsgwsffgs = "";
        if (dxsqsddgsgwsffg != null && JSON.stringify(dxsqsddgsgwsffg) != "{}" && typeof(dxsqsddgsgwsffg) != "undefined" && dxsqsddgsgwsffg.length > 0) {
            dxsqsddgsgwsffgs = $("#dxsqsddgsgwsffg option:checked").val();
        }
        // 地下水超采区类型
        var dxsccqlx = $(".select-dxsccqlx").select2("data");
        var dxsccqlxs = "";
        if (dxsccqlx != null && JSON.stringify(dxsccqlx) != "{}" && typeof(dxsccqlx) != "undefined" && dxsccqlx.length > 0) {
            dxsccqlxs = $("#dxsccqlx option:checked").val();
        }
        // 水资源费额标准(元/立方米)
        var szyfebz = $("#szyfebz").val();
        if (szyfebz == ''){layer.msg('请输入水资源费额标准(元/立方米)', {icon: 0});return false;}
        // 取水方式
        var qsfs = $(".select-qsfs").select2("data");
        var qsfss = "";
        if (qsfs != null && JSON.stringify(qsfs) != "{}" && typeof(qsfs) != "undefined" && qsfs.length > 0) {
            qsfss = $("#qsfs option:checked").val();
        }
        // 行政区划
        var xzqh = $(".select-xzqh").select2("data");
        var xzqhs = "";
        if (xzqh != null && JSON.stringify(xzqh) != "{}" && typeof(xzqh) != "undefined" && xzqh.length > 0) {
            xzqhs = $("#xzqh option:checked").val();
        }
        // 经度
        var jd = $("#jd").val();
        if (jd == ''){layer.msg('请输入经度', {icon: 0});return false;}
        // 维度
        var wd = $("#wd").val();
        if (wd == ''){layer.msg('请输入维度', {icon: 0});return false;}
        // 退水地点
        var tsdd = $("#tsdd").val();
        if (tsdd == ''){layer.msg('请输入退水地点', {icon: 0});return false;}
        // 退水方式
        var tsfs = $("#tsfs").val();
        if (tsfs == ''){layer.msg('请输入退水方式', {icon: 0});return false;}
        // 退水量
        var tsl = $("#tsl").val();
        if (tsl == ''){layer.msg('请输入退水量', {icon: 0});return false;}
        // 退水水质要求
        var tsszyq = $("#tsszyq").val();
        if (tsszyq == ''){layer.msg('请输入退水水质要求', {icon: 0});return false;}
        // 取水地点
        var qsdd = $("#theLocation").val();
        if (qsdd == ''){layer.msg('请输入取水地点', {icon: 0});return false;}
        // 用水户
        var ysh = $(".select-ysh").select2("data");
        var yshs = "";
        if (ysh != null && JSON.stringify(ysh) != "{}" && typeof(ysh) != "undefined" && ysh.length > 0) {
            yshs = $("#ysh option:checked").val();
        }
        // 附件
        var filePath = filepath;

        $.post("${ctx}/jbxxwh/syxxwh/addData", {
            'svo.syqy_dm':syqys,// 水源区域
            'svo.syzt_dm':syzts,// 水源状态
            // 'svo.qsxkzzt_dm':qsxkzh,// 取水许可证号(取水许可证代码)
            'svo.qsxkzzt_dm':qsxkzzts,// 取水水许可证状态(代码)
            'svo.qsxkzbh':qsxkzbh,// 取水许可证编号
            'svo.qsxkspjg_dm':qsxkspjg,// 取水许可审批机关
            'svo.qsyt_dm':qsyts,// 取水用途
            'svo.qsksl':qsksl,// 取水口数量
            'svo.qskszd':qsdd,// 取水地点
            'svo.zjlgs':zjlgs,// 总计量个数
            'svo.sfzxjc':sfzxjcs,// 是否在线监测
            'svo.sylx_dm':sylxs,// 水源类型
            'svo.qshy_dm':qyshys,// 取用水行业
            'svo.tsyslb_dm':tsyslbs,// 特殊用水类别
            'svo.qsxkyxqq':xzkyxqxq,// 取水许可证有效期限起
            'svo.qsxkyxqz':xzkyxqxz,// 取水许可证有效期限止
            'svo.qslhdjg_dm':qslhdjg,// 取水量核定机关
            'svo.nqsjh':nqysjh,// 年取用水计划
            'svo.dxsqsdgsgwsffg':dxsqsddgsgwsffgs,// 地下水取水地点供水管网是否覆盖
            'svo.dxsccqlx_dm':dxsccqlxs,// 地下水超采区类型
            'svo.szyfebz':szyfebz,// 水资源费额标准(元/立方米)
            'svo.qsfs_dm':qsfss,// 取水方式
            'svo.xzqh_dm':xzqhs,// 行政区划
            'svo.jd':jd,// 经度
            'svo.wd':wd,// 维度
            'svo.tsdd':tsdd,// 退水地点
            'svo.tsfs_dm':tsfs,// 退水方式
            'svo.tsl':tsl,// 退水量
            'svo.tsszyq':tsszyq,// 退水水质要求
            'svo.fjlgs':fjlgs, // 分计量个数
            'svo.yshdjxh':yshs, // 用水户登记序号
            'svo.qsxkzurl':filePath// 取水许可证URL
        }, function (result) {
            window.location.href = '${ctx}/jbxxwh/syxxwh/initSyxxwh';
        });

    }

    function editData(){
        var rows = $('#table').bootstrapTable('getSelections');
        if (rows.length == 0) {
            alert("请选择要编辑的记录！");
            return;
        }
        $.ajax({
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            url: '${ctx}/jbxxwh/syxxwh/backfillData',
            type: 'post',
            data: {
                'svo.sydjxh':rows[0].SYDJXH.trim()
            },success:function (results) {
                // 登记序号
                djxh = rows[0].SYDJXH.trim();
                // 水源编号
                sybh = rows[0].SYBH.trim();
                // 水源区域
                $(".editsyqy").val(results[0].SYQY_DM.toString().trim()).select2();
                // 水源状态
                $(".editsyzt").val(results[0].SYZT_DM.toString().trim()).select2();

                // 取水许可证号
                // $("#editqsxkzh").val(results[0].QSXKZZT_DM);

                // 取水许可证状态
                $("#editqsxkzzt").val(results[0].QSXKZZT_DM.toString().trim()).select2();

                // 取水许可证编号
                $("#editqsxkzbh").val(results[0].QSXKZBH);
                // 取水许可审批机关
                $("#qsxkspjg").val(results[0].QSXKSPJG_DM);
                // 取水用途
                $(".editqsyt").val(results[0].QSYT_DM.toString().trim()).select2();
                // 取水口数量
                $("#editqsksl").val(results[0].QSKSL);
                // 取水地点
                $("#editqsdd").val(results[0].QSKSZD);
                // 总计量个数
                $("#editzjlgs").val(results[0].ZJLGS);
                // 是否在线监测
                $(".editsfzxjc").val(results[0].SFZXJC.toString().trim()).select2();
                // 水源类型
                $(".editsylx").val(results[0].SYLX_DM.toString().trim()).select2();
                // 取用水行业
                $(".editqyshy").val(results[0].QSHY_DM.toString().trim()).select2();
                // 特殊用水类别
                $(".edittsyslb").val(results[0].TSYSLB_DM.toString().trim()).select2();
                // 取水许可证有效期限起
                $("#editxzkyxqxq").val(results[0].QSXKYXQQ);
                // 取水许可证有效期限止
                $("#editxzkyxqxz").val(results[0].QSXKYXQZ);
                // 取水量核定机关
                $("#editqslhdjg").val(results[0].QSLHDJG_DM);
                // 年取用水计划
                $("#editnqysjh").val(results[0].NQSJH);
                // 地下水取水地点供水管网是否覆盖
                $(".editdxsqsddgsgwsffg").val(results[0].DXSQSDGSGWSFFG.toString().trim()).select2();
                // 地下水超采区类型
                $(".editdxsccqlx").val(results[0].DXSCCQLX_DM.toString().trim()).select2();
                // 水资源费额标准(元/立方米)
                $("#editszyfebz").val(results[0].SZYFEBZ);
                // 取水方式
                $(".editqsfs").val(results[0].QSFS_DM.toString().trim()).select2();
                // 行政区划
                $(".editxzqh").val(results[0].XZQH_DM.toString().trim()).select2();
                // 经度
                $("#editjd").val(results[0].JD);
                // 维度
                $("#editwd").val(results[0].WD);
                // 退水地点
                $("#edittsdd").val(results[0].TSDD);
                // 退水方式
                $("#edittsfs").val(results[0].TSFS_DM);
                // 退水量
                $("#edittsl").val(results[0].TSL);
                // 退水水质要求
                $("#edittsszyq").val(results[0].TSSZYQ);
                // 分计量个数
                $("#editfjlgs").val(results[0].FJLGS);
                // 用水户
                $("#editysh").val(results[0].YSHDJXH.toString().trim()).select2();
                console.log("用水户登记序号=",results[0].YSHDJXH);
            }
        });

        $("#editModal").modal('show');
    }

    function saveEditData(){
        // 水源区域
        var syqy = $(".editsyqy").select2("data");
        var syqys = "";
        if (syqy != null && JSON.stringify(syqy) != "{}" && typeof(syqy) != "undefined" && syqy.length > 0) {
            syqys = $("#editsyqy option:checked").val();
        }
        // 水源状态
        var syzt = $(".editsyzt").select2("data");
        var syzts = "";
        if (syzt != null && JSON.stringify(syzt) != "{}" && typeof(syzt) != "undefined" && syzt.length > 0) {
            syzts = $("#editsyzt option:checked").val();
        }

        // 取水许可证状态
        var qsxkzzt = $(".editqsxkzzt").select2("data");
        var qsxkzzts = "";
        if (qsxkzzt != null && JSON.stringify(qsxkzzt) != "{}" && typeof(qsxkzzt) != "undefined" && qsxkzzt.length > 0) {
            qsxkzzts = $("#editqsxkzzt option:checked").val();
        }

        // 取水许可证编号
        var qsxkzbh = $("#editqsxkzbh").val();
        if (qsxkzbh == ''){layer.msg('请输入取水许可证编号', {icon: 0});return false;}
        // 取水许可审批机关
        var qsxkspjg = $("#editqsxkspjg").val();
        // 取水用途
        var qsyt = $(".editqsyt").select2("data");
        var qsyts = "";
        if (qsyt != null && JSON.stringify(qsyt) != "{}" && typeof(qsyt) != "undefined" && qsyt.length > 0) {
            qsyts = $("#editqsyt option:checked").val();
        }
        // 取水口数量
        var qsksl = $("#editqsksl").val();
        if (qsksl == ''){layer.msg('请输入取水口数量', {icon: 0});return false;}
        // 分计量个数
        var fjlgs = $("#editfjlgs").val();
        if (fjlgs == ''){layer.msg('请输入分计量个数', {icon: 0});return false;}
        // 总计量个数
        var zjlgs = $("#editzjlgs").val();
        if (zjlgs == ''){layer.msg('请输入总计量个数', {icon: 0});return false;}
        // 是否在线监测
        var sfzxjc = $(".editsfzxjc").select2("data");
        var sfzxjcs = "";
        if (sfzxjc != null && JSON.stringify(sfzxjc) != "{}" && typeof(sfzxjc) != "undefined" && sfzxjc.length > 0) {
            sfzxjcs = $("#editsfzxjc option:checked").val();
        }
        // 水源类型
        var sylx = $(".editsylx").select2("data");
        var sylxs = "";
        if (sylx != null && JSON.stringify(sylx) != "{}" && typeof(sylx) != "undefined" && sylx.length > 0) {
            sylxs = $("#editsylx option:checked").val();
        }
        // 取用水行业
        var qyshy = $(".editqyshy").select2("data");
        var qyshys = "";
        if (qyshy != null && JSON.stringify(qyshy) != "{}" && typeof(qyshy) != "undefined" && qyshy.length > 0) {
            qyshys = $("#editqyshy option:checked").val();
        }
        // 特殊用水类别
        var tsyslb = $(".edittsyslb").select2("data");
        var tsyslbs = "";
        if (tsyslb != null && JSON.stringify(tsyslb) != "{}" && typeof(tsyslb) != "undefined" && tsyslb.length > 0) {
            tsyslbs = $("#edittsyslb option:checked").val();
        }
        // 取水许可证有效期限起
        var xzkyxqxq = $("#editxzkyxqxq").val();
        if (xzkyxqxq == ''){layer.msg('请选择取水许可证有效期起', {icon: 0});return false;}
        // 取水许可证有效期限止
        var xzkyxqxz = $("#editxzkyxqxz").val();
        if (xzkyxqxz == ''){layer.msg('请选择取水许可证有效期止', {icon: 0});return false;}
        // 取水量核定机关
        var qslhdjg = $("#editqslhdjg").val();
        // 年取用水计划
        var nqysjh = $("#editnqysjh").val();
        if (nqysjh == ''){layer.msg('请输入年取用水计划', {icon: 0});return false;}
        // 地下水取水地点供水管网是否覆盖
        var dxsqsddgsgwsffg = $(".editdxsqsddgsgwsffg").select2("data");
        var dxsqsddgsgwsffgs = "";
        if (dxsqsddgsgwsffg != null && JSON.stringify(dxsqsddgsgwsffg) != "{}" && typeof(dxsqsddgsgwsffg) != "undefined" && dxsqsddgsgwsffg.length > 0) {
            dxsqsddgsgwsffgs = $("#editdxsqsddgsgwsffg option:checked").val();
        }
        // 地下水超采区类型
        var dxsccqlx = $(".editdxsccqlx").select2("data");
        var dxsccqlxs = "";
        if (dxsccqlx != null && JSON.stringify(dxsccqlx) != "{}" && typeof(dxsccqlx) != "undefined" && dxsccqlx.length > 0) {
            dxsccqlxs = $("#editdxsccqlx option:checked").val();
        }
        // 水资源费额标准(元/立方米)
        var szyfebz = $("#editszyfebz").val();
        if (szyfebz == ''){layer.msg('请输入水资源费额标准(元/立方米)', {icon: 0});return false;}
        // 取水方式
        var qsfs = $(".editqsfs").select2("data");
        var qsfss = "";
        if (qsfs != null && JSON.stringify(qsfs) != "{}" && typeof(qsfs) != "undefined" && qsfs.length > 0) {
            qsfss = $("#editqsfs option:checked").val();
        }
        // 行政区划
        var xzqh = $(".editxzqh").select2("data");
        var xzqhs = "";
        if (xzqh != null && JSON.stringify(xzqh) != "{}" && typeof(xzqh) != "undefined" && xzqh.length > 0) {
            xzqhs = $("#editxzqh option:checked").val();
        }
        // 经度
        var jd = $("#editjd").val();
        if (jd == ''){layer.msg('请输入经度', {icon: 0});return false;}
        // 维度
        var wd = $("#editwd").val();
        if (wd == ''){layer.msg('请输入维度', {icon: 0});return false;}
        // 退水地点
        var tsdd = $("#edittsdd").val();
        if (tsdd == ''){layer.msg('请输入退水地点', {icon: 0});return false;}
        // 退水方式
        var tsfs = $("#edittsfs").val();
        if (tsfs == ''){layer.msg('请输入退水方式', {icon: 0});return false;}
        // 退水量
        var tsl = $("#edittsl").val();
        if (tsl == ''){layer.msg('请输入退水量', {icon: 0});return false;}
        // 退水水质要求
        var tsszyq = $("#edittsszyq").val();
        if (tsszyq == ''){layer.msg('请输入退水水质要求', {icon: 0});return false;}
        // 取水地点
        var qsdd = $("#editqsdd").val();
        if (qsdd == ''){layer.msg('请输入取水地点', {icon: 0});return false;}
        // 用水户
        var ysh = $(".editysh").select2("data");
        var yshs = "";
        if (ysh != null && JSON.stringify(ysh) != "{}" && typeof(ysh) != "undefined" && ysh.length > 0) {
            yshs = $("#editysh option:checked").val();
        }

        $.post("${ctx}/jbxxwh/syxxwh/saveEditData", {
            'svo.syqy_dm':syqys,// 水源区域
            'svo.syzt_dm':syzts,// 水源状态
            // 'svo.qsxkzzt_dm':qsxkzh,// 取水许可证号(取水许可证代码)
            'svo.qsxkzzt_dm':qsxkzzts,// 取水许可证状态
            'svo.qsxkzbh':qsxkzbh,// 取水许可证编号
            'svo.qsxkspjg_dm':qsxkspjg,// 取水许可审批机关
            'svo.qsyt_dm':qsyts,// 取水用途
            'svo.qsksl':qsksl,// 取水口数量
            'svo.qskszd':qsdd,// 取水地点
            'svo.zjlgs':zjlgs,// 总计量个数
            'svo.sfzxjc':sfzxjcs,// 是否在线监测
            'svo.sylx_dm':sylxs,// 水源类型
            'svo.qshy_dm':qyshys,// 取用水行业
            'svo.tsyslb_dm':tsyslbs,// 特殊用水类别
            'svo.qsxkyxqq':xzkyxqxq,// 取水许可证有效期限起
            'svo.qsxkyxqz':xzkyxqxz,// 取水许可证有效期限止
            'svo.qslhdjg_dm':qslhdjg,// 取水量核定机关
            'svo.nqsjh':nqysjh,// 年取用水计划
            'svo.dxsqsdgsgwsffg':dxsqsddgsgwsffgs,// 地下水取水地点供水管网是否覆盖
            'svo.dxsccqlx_dm':dxsccqlxs,// 地下水超采区类型
            'svo.szyfebz':szyfebz,// 水资源费额标准(元/立方米)
            'svo.qsfs_dm':qsfss,// 取水方式
            'svo.xzqh_dm':xzqhs,// 行政区划
            'svo.jd':jd,// 经度
            'svo.wd':wd,// 维度
            'svo.tsdd':tsdd,// 退水地点
            'svo.tsfs_dm':tsfs,// 退水方式
            'svo.tsl':tsl,// 退水量
            'svo.tsszyq':tsszyq,// 退水水质要求
            'svo.fjlgs':fjlgs, // 分计量个数
            'svo.sydjxh':djxh, // 水源登记序号
            'svo.sybh':sybh,// 水源编号
            'svo.yshdjxh': yshs //用水户登记序号
        }, function (result) {
            $("#editModal").modal('hide');
            $("#table").bootstrapTable('destroy');
            initTable();
            layer.msg("修改成功",{icon:1});
        });
    }

    function namedQuery(){
        // 取水所在地
        var site = $("#site").val().trim();

        // 水源区域
        var area = $("#area").select2("data");
        var areas = "";
        if (area != null && JSON.stringify(area) != "{}" && typeof(area) != "undefined" && area.length > 0) {
            areas = $("#area option:checked").text().trim();
        }

        // 水源类型
        var sylx = $("#querysylx").select2("data");
        var sylxs = "";
        if (sylx != null && JSON.stringify(sylx) != "{}" && typeof(sylx) != "undefined" && sylx.length > 0) {
            sylxs = $("#querysylx option:checked").text().trim();
        }

        // 水源状态
        var syzt = $("#querysyzt").select2("data");
        var syzts = "";
        if (syzt != null && JSON.stringify(syzt) != "{}" && typeof(syzt) != "undefined" && syzt.length > 0) {
            syzts = $("#querysyzt option:checked").text().trim();
        }
        initTable(site,areas,sylxs,syzts);
    }

    function detailsView(sydjxh){
        if (sydjxh == "" || sydjxh == null || sydjxh == undefined){
            return;
        }
        $.ajax({
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            url: '${ctx}/jbxxwh/syxxwh/backfillData',
            type: 'post',
            data: {
                'svo.sydjxh':sydjxh.trim()
            },success:function (results) {
                // 水源区域
                $(".viewsyqy").val(results[0].SYQY_DM.toString().trim()).select2();
                // 水源状态
                $(".viewsyzt").val(results[0].SYZT_DM.toString().trim()).select2();

                // 取水许可证号
                // $("#viewqsxkzh").val(results[0].QSXKZZT_DM);

                $(".viewqsxkzzt").val(results[0].QSXKZZT_DM.toString().trim()).select2();

                // 取水许可证编号
                $("#viewqsxkzbh").val(results[0].QSXKZBH);
                // 取水许可审批机关
                $("#viewqsxkspjg").val(results[0].QSXKSPJG_DM);
                // 取水用途
                $(".viewqsyt").val(results[0].QSYT_DM.toString().trim()).select2();
                // 取水口数量
                $("#viewqsksl").val(results[0].QSKSL);
                // 取水地点
                $("#viewqsdd").val(results[0].QSKSZD);
                // 总计量个数
                $("#viewzjlgs").val(results[0].ZJLGS);
                // 是否在线监测
                $(".viewsfzxjc").val(results[0].SFZXJC.toString().trim()).select2();
                // 水源类型
                $(".viewsylx").val(results[0].SYLX_DM.toString().trim()).select2();
                // 取用水行业
                $(".viewqyshy").val(results[0].QSHY_DM.toString().trim()).select2();
                // 特殊用水类别
                $(".viewtsyslb").val(results[0].TSYSLB_DM.toString().trim()).select2();
                // 取水许可证有效期限起
                $("#viewxzkyxqxq").val(results[0].QSXKYXQQ);
                // 取水许可证有效期限止
                $("#viewxzkyxqxz").val(results[0].QSXKYXQZ);
                // 取水量核定机关
                $("#viewqslhdjg").val(results[0].QSLHDJG_DM);
                // 年取用水计划
                $("#viewnqysjh").val(results[0].NQSJH);
                // 地下水取水地点供水管网是否覆盖
                $(".viewdxsqsddgsgwsffg").val(results[0].DXSQSDGSGWSFFG.toString().trim()).select2();
                // 地下水超采区类型
                $(".viewdxsccqlx").val(results[0].DXSCCQLX_DM.toString().trim()).select2();
                // 水资源费额标准(元/立方米)
                $("#viewszyfebz").val(results[0].SZYFEBZ);
                // 取水方式
                $(".viewqsfs").val(results[0].QSFS_DM.toString().trim()).select2();
                // 行政区划
                $(".viewxzqh").val(results[0].XZQH_DM.toString().trim()).select2();
                // 经度
                $("#viewjd").val(results[0].JD);
                // 维度
                $("#viewwd").val(results[0].WD);
                // 退水地点
                $("#viewtsdd").val(results[0].TSDD);
                // 退水方式
                $("#viewtsfs").val(results[0].TSFS_DM);
                // 退水量
                $("#viewtsl").val(results[0].TSL);
                // 退水水质要求
                $("#viewtsszyq").val(results[0].TSSZYQ);
                // 分计量个数
                $("#viewfjlgs").val(results[0].FJLGS);
                // 用水户
                if (results[0].YSHDJXH == null || results[0].YSHDJXH =="" || results[0].YSHDJXH == undefined){
                    $(".viewysh").val("").select2();
                } else{
                    $(".viewysh").val(results[0].YSHDJXH.toString().trim()).select2();
                }
                if (results[0].QSXKZURL != null || results[0].QSXKZURL != "" || results[0].QSXKZURL != undefined){
                    $.post("${ctx}/jbxxwh/syxxwh/photoCopy", {'svo.sydjxh': sydjxh}, function (results) {
                        if (results != null || results != "" || results != null){
                            var src = '${ctx}/swimages/syxx/'+ results;
                            $("#imgs").attr("src",src);
                        }
                    });
                }
            }
        });

        $("#viewModal").modal('show');
    }

    function del() {
        var getRows = $('#table').bootstrapTable('getSelections');
        if(getRows.length == 0) {
            layer.alert("请选择要删除的记录！", {title: '提示', icon: 0, time: 3000});
            return;
        }

        layer.confirm("删除后无法恢复，确定删除吗？", {title: "提示", icon: 3}, function (index) {
            $.post("${ctx}/jbxxwh/syxxwh/del", {
                    'svo.sydjxh': getRows[0].SYDJXH,
                    'svo.sybh': getRows[0].SYBH},
                function (data) {
                    $('#table').bootstrapTable("destroy");
                    initTable();
                    layer.msg("删除成功",{icon:1});
                });
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
            uploadUrl: '${ctx}/jbxxwh/syxxwh/fileUpload'//上传请求地址
        });
        // 异步上传返回结果处理
        $("#fileinput").on('filepreupload', function (event, data, previewId, index) {
            $.post("${ctx}/jbxxwh/syxxwh/theFilePath", null, function (data) {
                var getFileName = $("#fileinput").val();
                var fileName = getFileName.substring(11);
                filepath = data + fileName;
            });
        });
    });

    function fetchPosition(){
        htlui.getAmapSearchLocation({searchAddress:$("#theLocation").val(),callback:function(obj){
                $("#jd").val(obj.lng);
                $("#wd").val(obj.lat);
            }});
    }
</script>
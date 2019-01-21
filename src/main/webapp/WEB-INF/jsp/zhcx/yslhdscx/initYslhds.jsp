<%--
  Created by IntelliJ IDEA.
  User: BoyiSun
  Date: 2018/3/26
  Time: 15:09
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@include file="../../common/taglibs.jsp" %>
<html>
<head>
    <title>用水量核定书</title>
    <%@include file="../../common/include-head.jsp" %>
    <style>
        /*Modal分割线*/
        .hr-line-dashed {
            border-top: 1px dashed #e7eaec;
            color: #fff;
            background-color: #fff;
            height: 1px;
            margin: 15px 0
        }
        .txinput{
            width: 180px;
            height: 29px;
        }
        .file-manager .hr-line-dashed {
            margin: 15px 0
        }
        .modal.fade.in{
            top:120px;
        }
        .table{
            margin-top: 35px;
            font-size: 14px;
        }
        .table td{
            vertical-align: middle!important;
        }
        .bgcolor{
            font-weight: bold;
        }
    </style>

</head>
<body>
<form id="tablevalidation" method="post" class="form-horizontal">
    <div>
        <table class="table table-bordered container table-striped" id="hds">
            <caption><h3 align="center">陕西省水资源税纳税人取用水量申报核定书</h3></caption>
            <tbody>
            <tr>
                <td colspan="9" >水行政主管部门（签章）：<c:out value="${sxzzgbmmc}"/>  <span style="float: right;">单位：立方米</span></td>
            </tr>
            <tr>
                <td>取水量所属期：</td>
                <td colspan="5"><c:out value="${qslssqq}"/> 至<c:out value="${qslssqq}"/> </td>
                <td>抄表日期：</td>
                <td colspan="4">&nbsp;<c:out value="${cbrq}"/> </td>
            </tr>
            <tr>
                <td>纳税人识别号：</td>
                <td colspan="2"><c:out value="${nsrsbh}"/> </td>
                <td>联系人：</td>
                <td colspan="2"><c:out value="${lxr}"/></td>
                <td >联系方式：</td>
                <td colspan="2"><c:out value="${lxfs}"/></td>
            </tr>
            <tr>
                <td>纳税人名称：</td>
                <td colspan="2"><c:out value="${nsrmc}"/> </td>
                <td>取水计划：</td>
                <td colspan="2"><c:out value="${qsjh}"/></td>
                <td>水源类型：</td>
                <td colspan="2"><c:out value="${sylxmc}"/></td>
            </tr>
            <tr>
                <td >取用水行业：</td>
                <td colspan="3"><c:out value="${qyshymc}"/></td>
                <td >地下水超采区类型：</td>
                <td colspan="6">
                    <c:out value="${dxsccqlxmc}"/>
                </td>
            </tr>
            <tr>
                <td>地下水取水地点供<br>水管网是否覆盖：</td>
                <td colspan="3"><c:out value="${sfmc}"/></td>
                <td >特殊用水类别：</td>
                <td  colspan="6"><c:out value="${tsyslbmc}"/>
            </tr>
            <tr align="center">
                <td>取水口地点</td>
                <td>编号</td>
                <td>上期表底数</td>
                <td>本期表底数</td>
                <td>本期取水量</td>
                <td>累计取水量</td>
                <td>计划取水量</td>
                <td>核定的计划内取水量</td>
                <td>核定的超计划取水量</td>
            </tr>
            <c:forEach items="${hdsmxList}" var="item">
            <tr align="center">
                <td><c:out value="${item.QSKDD}"/></td>
                <td><c:out value="${item.BH}"/></td>
                <td><c:out value="${item.SQBDS}"/></td>
                <td><c:out value="${item.BQBDS}"/></td>
                <td><c:out value="${item.BQQSL}"/></td>
                <td><c:out value="${item.LJQSL}"/></td>
                <td><c:out value="${item.JHQSL}"/></td>
                <td><c:out value="${item.HDDJHNQSL}"/></td>
                <td><c:out value="${item.HDDCJHQSL}"/></td>
            </tr>
            </c:forEach>
            <tr>
                <td colspan="2">纳税人签章：<c:out value="${nsrqz}"/></td>
                <td colspan="3">水量核定人签章：<c:out value="${slhdrqzmc}"/></td>
                <td colspan="2">税务机关受理人：<c:out value="${swjgslr}"/></td>
                <td colspan="2">受理日期：<c:out value="${slrq}"/></td>
            </tr>
            <tr>
                <td colspan="9">
                    1.本表由纳税人填报，水行政主管部门对填报内容审核并填写核定的计划内和超计划取水量。  <br>2.本表一式三份，一份水行政主管部门留存，一份纳税人留存，一份税务机关留存。
                </td>
            </tr>
            </tbody>
        </table>
    </div>
    <br/>
    <div align="center">
        <button type="button" class="btn btn-info"
                onclick="window.location.href='${ctx}/zhcx/yslhdscx/initYslhdscx'">返&nbsp;&nbsp;&nbsp;回
        </button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-info" onclick="tableToExcel();">导&nbsp;&nbsp;&nbsp;出</button>
    </div>
    </form>
</body>
</html>
<script>
    //导出文件名称
    var fileName = "${nsrmc}"+"核定书";
    function tableToExcel() {

        var a = document.createElement("a");
        a.download = fileName+".xlsx";
        a.href = '${ctx}/zhcx/yslhdscx/downExcel?xxcjid=${param.xxcjid}';
        a.click();
    }
</script>
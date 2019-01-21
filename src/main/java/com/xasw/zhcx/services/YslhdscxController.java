package com.xasw.zhcx.services;

import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.observer.download.Download;
import br.com.caelum.vraptor.observer.download.FileDownload;
import com.google.common.collect.Maps;
import com.ts.core.service.WebServiceSupport;
import com.ts.model.PaginatedVO;
import com.ts.persistence.dao.DelegateMapper;
import com.xasw.utils.CharCloudyUtil;
import com.xasw.zhcx.model.YslhdscxVO;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.slf4j.Logger;

import javax.inject.Inject;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author BoYi Sun
 * @date 2018/12/13 11:07
 * @description 用数量核定书查询
 */
@Controller
public class YslhdscxController extends WebServiceSupport {

    @Inject
    private Logger log;
    @Inject
    private CharCloudyUtil utils;
    //岗位代码
    private static String gwdm = "%";

    /**
     * 用水量核定书查询
     */
    public void initYslhdscx() {
        DelegateMapper mapper = getMapper();
        try {
            utils.addCloudydata(mapper, "用水量核定书查询", this.getUserPrincipal().getUserCode(), "zhcx/yslhdscx/initYslhdscx");
        } catch (Exception e) {

        }
    }

    /**
     * 水源类型 (下拉菜单)
     */

    public void sylxcd() {
        DelegateMapper mapper = getMapper();
        //数据载入数据加载
        List vo = mapper.selectList("com.xasw.zhcx.YslhdscxMapper.sylxcd");
        includeJson(vo);

    }

    /**
     * 水源区域 (下拉菜单)
     */

    public void syqycd() {
        DelegateMapper mapper = getMapper();
        //数据载入数据加载
        List vo = mapper.selectList("com.xasw.zhcx.YslhdscxMapper.syqycd");
        includeJson(vo);
    }

    /**
     * 用水量核定书
     */
    public void initYslhds(String xxcjid) {
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("xxcjid", xxcjid);
        List hdsList = mapper.selectList("com.xasw.zhcx.YslhdscxMapper.hdsxx", param);
        List hdsmxList = mapper.selectList("com.xasw.zhcx.YslhdscxMapper.hdsmx", param);
        if (hdsList != null && hdsList.size() > 0) {
            Map map = (HashMap) hdsList.get(0);
            include("sxzzgbmmc", map.get("SXZZGBMMC") == null ? "" : map.get("SXZZGBMMC").toString());
            include("qslssqq", map.get("QSLSSQQ") == null ? "" : map.get("QSLSSQQ").toString());
            include("qslssqz", map.get("QSLSSQZ") == null ? "" : map.get("QSLSSQZ").toString());
            include("cbrq", map.get("CBRQ") == null ? "" : map.get("CBRQ").toString());
            include("nsrsbh", map.get("NSRSBH") == null ? "" : map.get("NSRSBH").toString());
            include("nsrmc", map.get("NSRMC") == null ? "" : map.get("NSRMC").toString());
            include("lxr", map.get("LXR") == null ? "" : map.get("LXR").toString());
            include("lxfs", map.get("LXFS") == null ? "" : map.get("LXFS").toString());
            include("qsjh", map.get("QSJH") == null ? "" : map.get("QSJH").toString());
            include("sylxmc", map.get("SYLXMC") == null ? "" : map.get("SYLXMC").toString());
            include("qyshymc", map.get("QYSHYMC") == null ? "" : map.get("QYSHYMC").toString());
            include("dxsccqlxmc", map.get("DXSCCQLXMC") == null ? "" : map.get("DXSCCQLXMC").toString());
            include("sfmc", map.get("SFMC") == null ? "" : map.get("SFMC").toString());
            include("tsyslbmc", map.get("TSYSLBMC") == null ? "" : map.get("TSYSLBMC").toString());
            include("nsrqz", map.get("NSRQZ") == null ? "" : map.get("NSRQZ").toString());
            include("slhdrqzmc", map.get("SLHDRQZMC") == null ? "" : map.get("SLHDRQZMC").toString());
            include("swjgslr", map.get("SWJGSLR") == null ? "" : map.get("SWJGSLR").toString());
            include("slrq", map.get("SLRQ") == null ? "" : map.get("SLRQ").toString());
        }
        include("hdsmxList", hdsmxList);
    }

    /**
     * 信息采集表
     *
     * @param svo
     * @param limit
     * @param offset
     * @param sort
     * @param order
     */

    public void selectAll(YslhdscxVO svo, int limit, int offset, String sort, String order) {
        DelegateMapper delegateMapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("usercode", this.getUserPrincipal().getUserCode());
        List gwList = delegateMapper.selectList("com.xasw.zhcx.YslhdscxMapper.gwdm", param);
        if (gwList.size() == 1) {
            Map map = (HashMap) gwList.get(0);
            gwdm = map.get("GWDM") == null ? "" : map.get("GWDM").toString();
            if ("001".equals(gwdm)) {
                svo.setLrr(this.getUserPrincipal().getUserCode());
                svo.setShr_dm("%");
            } else if ("002".equals(gwdm)) {
                svo.setLrr("%");
                svo.setShr_dm(this.getUserPrincipal().getUserCode());
            }
        } else {
            svo.setLrr("%");
            svo.setShr_dm("%");
        }

        param.put("svo", svo);
        PaginatedVO vo = delegateMapper.selectPaginated("com.xasw.zhcx.YslhdscxMapper.selectAll", param, offset, limit);
        Map<String, Object> results = new HashMap<String, Object>();
        results.put("total", vo.getPageCount());
        results.put("rows", vo.getRows());
        includeJson(vo);
    }

    /**
     * 信息明细(表)
     *
     * @param svo
     * @param limit
     * @param offset
     * @param sort
     * @param order
     */
    public void viewthedata(YslhdscxVO svo, int limit, int offset, String sort, String order) {
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("svo", svo);
        PaginatedVO alldatas = mapper.selectPaginated("com.xasw.zhcx.YslhdscxMapper.querytab", param, offset, limit);
        includeJson(alldatas);
    }

    /**
     * 查看数据
     *
     * @param xxcjid
     */
    public void doQueryTable(String xxcjid) {
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("xxcjid", xxcjid);
        List hdsList = mapper.selectList("com.xasw.zhcx.YslhdscxMapper.hdsxx", param);
        includeJson(hdsList);
    }

    public void downExcel(String xxcjid) throws IOException {
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("xxcjid", xxcjid);
        Map<String, Object> hdsList = (Map<String, Object>) mapper.selectOne("com.xasw.zhcx.YslhdscxMapper.hdsxx", param);
        List hdsmxList = mapper.selectList("com.xasw.zhcx.YslhdscxMapper.hdsmx", param);
        InputStream tps = this.getClass().getClassLoader().getResourceAsStream("/xlsx/template/sxsszysnsrqyslsbhds.xls");
        HSSFWorkbook tpWorkbook = new HSSFWorkbook(tps);
        HSSFSheet hssfSheet = tpWorkbook.getSheet("Sheet1");
        //取水量所属期：
        String QSLSSQQ = hdsList.get("FORMAT_QSLSSQQ") != null ? (String) hdsList.get("FORMAT_QSLSSQQ") : "      年  月   日";
        String QSLSSQZ = hdsList.get("FORMAT_QSLSSQZ") != null ? (String) hdsList.get("FORMAT_QSLSSQZ") : "      年  月   日";
        hssfSheet.getRow(3).getCell(2).setCellValue("自" + QSLSSQQ + "至" + QSLSSQZ);
        //抄表时间
            String CBRQ = hdsList.get("FORMAT_CBRQ") != null ? (String) hdsList.get("FORMAT_CBRQ") : "    年  月  日";
        hssfSheet.getRow(3).getCell(5).setCellValue("抄表日期：" + CBRQ);
        //纳税人识别号
        hssfSheet.getRow(4).getCell(0).setCellValue("纳税人识别号：" + hdsList.get("NSRSBH"));
        //联系人
        hssfSheet.getRow(4).getCell(5).setCellValue((String) hdsList.get("LXR"));
        //联系方式
        hssfSheet.getRow(4).getCell(7).setCellValue((String) hdsList.get("LXFS"));
        //纳税人识别号
        hssfSheet.getRow(5).getCell(0).setCellValue("纳税人名称：" + hdsList.get("NSRMC"));
        //取水计划
        hssfSheet.getRow(5).getCell(5).setCellValue((String) hdsList.get("QSJH"));
        //水源类型
        String SYLX =(String) hdsList.get("SYLX_DM");
        hssfSheet.getRow(5).getCell(7).setCellValue(isXz(SYLX,"01" ) + "地表水 "+isXz(SYLX,"02" )+"地下水 "+isXz(SYLX,"03" )+"其他用水");
        //取水行业
        String QSHY =(String) hdsList.get("QYSHY_DM");
        hssfSheet.getRow(6).getCell(1).setCellValue(isXz(QSHY,"01" )+"农业  "+isXz(QSHY,"02" )+"特种行业  "+isXz(QSHY,"03" )+"其他");
        //地下水超采
        String DXSCC =(String) hdsList.get("DXSCCQLX_DM");
        hssfSheet.getRow(6).getCell(6).setCellValue(isXz(DXSCC,"01" )+"非超采区   "+isXz(DXSCC,"02" )+"一般超采区 "+isXz(DXSCC,"03" )+"严重超采区");
        //地下去睡地点供水管网是否覆盖
        String DXSGSFG =(String) hdsList.get("SF_DM");
        hssfSheet.getRow(7).getCell(2).setCellValue(isXz(DXSGSFG,"0" )+"是    "+isXz(DXSGSFG,"1" )+"否");
        //特殊用水类型
        String TSYS =(String) hdsList.get("TSYSLB_DM");
        hssfSheet.getRow(7).getCell(5).setCellValue(isXz(TSYS,"01" )+"疏干排水 "+isXz(TSYS,"02" )+"地源热泵 "+isXz(TSYS,"03" )+"水力发电 "+isXz(TSYS,"04" )+"农村集中饮水工程");

        for(int i=0;i<hdsmxList.size();i++){
            Map<String,Object> map= (Map<String, Object>) hdsmxList.get(i);
            HSSFRow hssfRow=null;
            if(i<6){
                hssfRow =hssfSheet.getRow(9+i);
            }else{
                hssfRow =hssfSheet.createRow(9+i+1);
            }
            hssfRow.getCell(0).setCellValue(String.valueOf(map.get("QSKDD")));
            hssfRow.getCell(1).setCellValue(String.valueOf(map.get("BH")));
            hssfRow.getCell(2).setCellValue(String.valueOf(map.get("SQBDS")));
            hssfRow.getCell(3).setCellValue(String.valueOf(map.get("BQBDS")));
            hssfRow.getCell(4).setCellValue(String.valueOf(map.get("BQQSL")));
            hssfRow.getCell(5).setCellValue(String.valueOf(map.get("LJQSL")));
            hssfRow.getCell(6).setCellValue(String.valueOf(map.get("JHQSL")));
            hssfRow.getCell(7).setCellValue(String.valueOf(map.get("HDDJHNQSL")));
            hssfRow.getCell(8).setCellValue(String.valueOf(map.get("HDDCJHQSL")));
        }

        getResponse().setHeader("content-disposition", "attachment;filename=" + new String(("陕西省水资源税纳税人取用水量申报核定书").getBytes("utf-8"), "ISO8859-1") + ".xls");
        tpWorkbook.write(getResponse().getOutputStream());
    }


    private String isXz(String str1, String str2) {
        String y = "■";
        String n = "□";
        if (str2.equals(str1)) {
            return y;
        } else {
            return n;
        }
    }
}

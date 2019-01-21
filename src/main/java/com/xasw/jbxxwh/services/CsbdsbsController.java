package com.xasw.jbxxwh.services;

import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.observer.upload.UploadSizeLimit;
import br.com.caelum.vraptor.observer.upload.UploadedFile;
import com.google.common.collect.Maps;
import com.ts.core.service.WebServiceSupport;
import com.ts.model.PaginatedVO;
import com.ts.persistence.dao.DelegateMapper;
import com.xasw.jbxxwh.model.CsbdsbsVO;
import com.xasw.utils.FileUtils;
import org.slf4j.Logger;

import javax.inject.Inject;
import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author PengWen Wang
 * @date 2018/12/14 9:21
 * 初始表底数报送
 */
@Controller
public class CsbdsbsController extends WebServiceSupport {

    @Inject
    private Logger log;

    public void initCsbdsbs(){};

    /**
     * 用户查询（个体）
     * @param svo
     * @param limit
     * @param offset
     * @param sort
     * @param order
     */
    public void userInitQuery(CsbdsbsVO svo, int limit, int offset, String sort, String order) {
        DelegateMapper delegateMapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        svo.setSbry_dm(this.getUserPrincipal().getUserCode());
        param.put("svo", svo);
        PaginatedVO vo = delegateMapper.selectPaginated("com.xasw.jbxxwh.dao.CsbdsbsMapper.userInitQuery", param, offset, limit);
        Map<String, Object> results = new HashMap<String, Object>();
        results.put("total", vo.getPageCount());
        results.put("rows", vo.getRows());
        includeJson(vo);
    }

    /**
     * @author PengWen Wang
     * 新增初始化表底数(报送)
     * @date 2018/12/21 15:46
     * @param svo
     */
    public void submission(CsbdsbsVO svo){
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        svo.setSbry_dm(this.getUserPrincipal().getUserCode());
        param.put("svo", svo);
        mapper.insert("com.xasw.jbxxwh.dao.CsbdsbsMapper.submission", param);
        includeJson("New success");
    }

    /**
     * @author PengWen Wang
     * 新增初始化表底数(换表)
     * @date 2018/12/24 09:54
     * @param svo
     */
    public void change(CsbdsbsVO svo){
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        svo.setSbry_dm(this.getUserPrincipal().getUserCode());
        param.put("svo", svo);
        mapper.insert("com.xasw.jbxxwh.dao.CsbdsbsMapper.change", param);
        includeJson("New success");
    }


    /**
     * @author PengWen Wang
     * @date 2018/12/19 11:15
     * 文件上传
     * 大小限制(sizeLImit)不超过100MB  （fileSizeLimit）文件大小不超过50MB
     *
     * @param fileinput
     * @throws Exception
     */
    @UploadSizeLimit(sizeLimit = 100 * 1024 * 1024, fileSizeLimit = 50 * 1024 * 1024)
    public void fileUpload(UploadedFile fileinput) throws Exception {
        String usercode = this.getUserPrincipal().getUserCode();
        File file = new File("D:\\TableBase" + "\\" + getDate() + "\\" + usercode);
        if (!file.exists() && !file.isDirectory()) {
            file.mkdirs();
        }
        FileOutputStream fos = null;
        try {
            InputStream inputStream = fileinput.getFile();
            fos = FileUtils.instreamTooutputstream(inputStream, file + File.separator + fileinput.getFileName());
            fos.close();
        } catch (NullPointerException e) {
            e.printStackTrace();
        }
        includeJson(file.toString());
    }

    /**
     * 文件路径
     */
    public void theFilePath() {
        String usercode = this.getUserPrincipal().getUserCode();
        String filePath = "D:" + File.separator + "TableBase" + File.separator + getDate() + File.separator + usercode;
        includeJson(filePath);
    }

    /**
     * 报送校验（水表编号）
     * @param svo
     * @param sbbhjy
     */
    public void certifiedCheck(CsbdsbsVO svo, String sbbhjy) {
        boolean result = true;
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        svo.setSbry_dm(this.getUserPrincipal().getUserCode());
        svo.setSbbh(sbbhjy);
        param.put("svo", svo);
        List vo = mapper.selectList("com.xasw.jbxxwh.dao.CsbdsbsMapper.certifiedCheck", param);
        if (vo != null && vo.size() > 0) {
            result = false;
        }
        Map<String, Boolean> map = new HashMap<>();
        map.put("valid", result);
        includeJson(map);
    }

    /**
     * 获得当前年月日
     *
     * @return
     */
    public static String getDate() {
        String year = "";
        String month = "";
        String day = "";
        Calendar now = Calendar.getInstance();
        year = String.valueOf(now.get(Calendar.YEAR));
        month = String.valueOf(now.get(Calendar.MONTH) + 1);
        day = String.valueOf(now.get(Calendar.DAY_OF_MONTH));
        return year + "年" + month + "月" + day + "日";
    }

    /**
     * 水源地点 (菜单)
     */

    public void syddcd(CsbdsbsVO svo) {
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        svo.setYshzh(this.getUserPrincipal().getUserCode());
        param.put("svo", svo);
        List list = mapper.selectList("com.xasw.jbxxwh.dao.CsbdsbsMapper.syddcd",param);
        includeJson(list);
    }

    /**
     * 水表故障 (菜单)
     */

    public void sbgzcd() {
        DelegateMapper mapper = getMapper();
        List list = mapper.selectList("com.xasw.jbxxwh.dao.CsbdsbsMapper.sbgzcd");
        includeJson(list);
    }
}

package com.xasw.jbxxwh.services;

import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.observer.upload.UploadSizeLimit;
import br.com.caelum.vraptor.observer.upload.UploadedFile;
import com.google.common.collect.Maps;
import com.ts.core.service.WebServiceSupport;
import com.ts.model.PaginatedVO;
import com.ts.persistence.dao.DelegateMapper;
import com.xasw.jbxxwh.model.SyxxwhVO;
import com.xasw.utils.CreateSepuence;
import com.xasw.utils.FileUtil;
import com.xasw.utils.FileUtils;
import org.slf4j.Logger;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author PengWen Wang
 * @date 2018/12/13 11:07
 * 水源信息维护
 */
@Controller
public class SyxxwhController extends WebServiceSupport {

    @Inject
    private Logger log;

    public void initSyxxwh() {}


    /**
     * @param svo
     * @param limit
     * @param offset
     * @param sort
     * @param order
     * @author PengWen Wang
     * 水源信息维护初始化查询
     * @date 2018/12/17 11:44
     */

    public void initQuery(SyxxwhVO svo, int limit, int offset, String sort, String order) {
        DelegateMapper delegateMapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        String userCode = this.getUserPrincipal().getUserCode();
        if (userCode.equals("36100010002")){      // 吴桐
            svo.setQydm("01");// 未央区
        }else if (userCode.equals("36100010003")){// 宫伟
            svo.setQydm("02");// 灞桥
        }else if (userCode.equals("36100010005")){// 陈建
            svo.setQydm("05");// 热水
        }
        param.put("svo", svo);
        // 核查岗(查看区域信息)
        String[] inspectOrgCode = {"002"};
        // 管理岗(查看所有)
        String[] manageOrgCode = {"003","004"};
        if (checkUserGw(this.getUserPrincipal().getUserId(),inspectOrgCode)){
            // 根据区域查询
            PaginatedVO vo = delegateMapper.selectPaginated("com.xasw.jbxxwh.dao.SyxxwhMapper.queryByRegion", param, offset, limit);
            Map<String, Object> results = new HashMap<String, Object>();
            results.put("total", vo.getPageCount());
            results.put("rows", vo.getRows());
            includeJson(vo);
        }else if (checkUserGw(this.getUserPrincipal().getUserId(),manageOrgCode)){
            PaginatedVO vo = delegateMapper.selectPaginated("com.xasw.jbxxwh.dao.SyxxwhMapper.initQuery", param, offset, limit);
            Map<String, Object> results = new HashMap<String, Object>();
            results.put("total", vo.getPageCount());
            results.put("rows", vo.getRows());
            includeJson(vo);
        }
    }

    /**
     * @param svo
     * @author PengWen Wang
     * 新增水源信息
     * @date 2018/12/17 15:11
     */
    public void addData(SyxxwhVO svo) {
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        svo.setLrry_dm(this.getUserPrincipal().getUserCode());
        svo.setSybh(CreateSepuence.getTwentyGuid());
        param.put("svo", svo);
        mapper.insert("com.xasw.jbxxwh.dao.SyxxwhMapper.addData", param);
        mapper.insert("com.xasw.jbxxwh.dao.SyxxwhMapper.addAttach", param);
        includeJson("New success");
    }

    /**
     * @param svo
     * @author PengWen Wang
     * 保存编辑后的(水源信息)
     * @date 2018/12/27 11:27
     */
    public void saveEditData(SyxxwhVO svo) {
        DelegateMapper delegateMapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        svo.setXgry_dm(this.getUserPrincipal().getUserCode());
        param.put("svo", svo);
        delegateMapper.update("com.xasw.jbxxwh.dao.SyxxwhMapper.saveEditData", param);
        delegateMapper.update("com.xasw.jbxxwh.dao.SyxxwhMapper.saveUserData", param);
        includeJson("Modify Successfully");
    }

    /**
     * @param svo
     * @author PengWen Wang
     * 根据水源登记序号（回填数据）
     * @date 2018/12/26 19:28
     */
    public void backfillData(SyxxwhVO svo) {
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("svo", svo);
        List list = mapper.selectList("com.xasw.jbxxwh.dao.SyxxwhMapper.backfillData", param);
        includeJson(list);
    }

    /**
     * 图片复制
     * @param svo
     * @param req
     * @throws Exception
     */
    public void photoCopy(SyxxwhVO svo, HttpServletRequest req){
        DelegateMapper delegateMapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("svo", svo);
        List filePathList = delegateMapper.selectList("com.xasw.jbxxwh.dao.SyxxwhMapper.queryPath",param);
        if(filePathList!=null && !filePathList.isEmpty()){
            String srcPath = filePathList.get(0).toString().substring(10,filePathList.get(0).toString().length()-1);
            String destPath = req.getSession().getServletContext().getRealPath("/swimages/syxx");
            File file = new File(destPath);
            if (!file.exists() && !file.isDirectory()) {
                file.mkdirs();
            }
            try {
                FileUtil.copyFile(srcPath,destPath);
            } catch (IOException e) {
                e.printStackTrace();
            }
            includeJson(new File(srcPath).getName());
        }
    }

    /**
     * 水源信息逻辑删除（注：包含附件）
     *
     * @param svo
     */

    public void del(SyxxwhVO svo) {
        DelegateMapper delegateMapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        svo.setXgry_dm(this.getUserPrincipal().getUserCode());
        param.put("svo", svo);
        delegateMapper.insert("com.xasw.jbxxwh.dao.SyxxwhMapper.del", param);
        delegateMapper.insert("com.xasw.jbxxwh.dao.SyxxwhMapper.delAttach", param);
        includeJson("Deleted successfully");
    }

    /**
     * @param fileinput
     * @throws Exception
     * @author PengWen Wang
     * @date 2018/12/19 11:15
     * 文件上传
     * 大小限制(sizeLImit)不超过100MB  （fileSizeLimit）文件大小不超过50MB
     */
    @UploadSizeLimit(sizeLimit = 100 * 1024 * 1024, fileSizeLimit = 50 * 1024 * 1024)
    public void fileUpload(UploadedFile fileinput) throws Exception {
        String usercode = this.getUserPrincipal().getUserCode();
        File file = new File("D:\\Accessory" + "\\" + getDate() + "\\" + usercode);
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
        String filePath = "D:" + File.separator + "Accessory" + File.separator + getDate() + File.separator + usercode;
        includeJson(filePath);
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
     * 取水用途 (菜单)
     */

    public void qsytcd() {
        DelegateMapper mapper = getMapper();
        List list = mapper.selectList("com.xasw.jbxxwh.dao.SyxxwhMapper.qsytcd");
        includeJson(list);
    }

    /**
     * 水源类型 (菜单)
     */

    public void sylxcd() {
        DelegateMapper mapper = getMapper();
        List list = mapper.selectList("com.xasw.jbxxwh.dao.SyxxwhMapper.sylxcd");
        includeJson(list);
    }

    /**
     * 取用水行业 (菜单)
     */

    public void qyshycd() {
        DelegateMapper mapper = getMapper();
        List list = mapper.selectList("com.xasw.jbxxwh.dao.SyxxwhMapper.qyshycd");
        includeJson(list);
    }

    /**
     * 特殊用水类别 (菜单)
     */

    public void tsyslbcd() {
        DelegateMapper mapper = getMapper();
        List list = mapper.selectList("com.xasw.jbxxwh.dao.SyxxwhMapper.tsyslbcd");
        includeJson(list);
    }

    /**
     * 是否 (菜单)
     */

    public void whether() {
        DelegateMapper mapper = getMapper();
        List list = mapper.selectList("com.xasw.jbxxwh.dao.SyxxwhMapper.whether");
        includeJson(list);
    }

    /**
     * 地下水超采区类型 (菜单)
     */

    public void dxsccqlxcd() {
        DelegateMapper mapper = getMapper();
        List list = mapper.selectList("com.xasw.jbxxwh.dao.SyxxwhMapper.dxsccqlxcd");
        includeJson(list);
    }

    /**
     * 取水方式 (菜单)
     */

    public void qsfscd() {
        DelegateMapper mapper = getMapper();
        List list = mapper.selectList("com.xasw.jbxxwh.dao.SyxxwhMapper.qsfscd");
        includeJson(list);
    }

    /**
     * 行政区划 (菜单)
     */

    public void xzqhcd() {
        DelegateMapper mapper = getMapper();
        List list = mapper.selectList("com.xasw.jbxxwh.dao.SyxxwhMapper.xzqhcd");
        includeJson(list);
    }

    /**
     * 水源状态 (菜单)
     */

    public void syztcd() {
        DelegateMapper mapper = getMapper();
        List list = mapper.selectList("com.xasw.jbxxwh.dao.SyxxwhMapper.syztcd");
        includeJson(list);
    }

    /**
     * 水源区域（菜单）
     */
    public void syqycd(SyxxwhVO svo) {
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        String userCode = this.getUserPrincipal().getUserCode();
        if (userCode.equals("36100010002")){      // 吴桐
            svo.setSyqy_dm("01");// 未央区
        }else if (userCode.equals("36100010003")){// 宫伟
            svo.setSyqy_dm("02");// 灞桥
        }else if (userCode.equals("36100010005")){// 陈建
            svo.setSyqy_dm("05");// 热水
        }
        // 核查岗(查看区域信息)
        String[] inspectOrgCode = {"002"};
        // 管理岗(查看所有)
        String[] manageOrgCode = {"003","004"};
        if(checkUserGw(this.getUserPrincipal().getUserId(),inspectOrgCode)){
            param.put("svo", svo);
            List list = mapper.selectList("com.xasw.jbxxwh.dao.SyxxwhMapper.syqycd",param);
            includeJson(list);
        }else if (checkUserGw(this.getUserPrincipal().getUserId(),manageOrgCode)){
            param.put("svo", svo);
            List list = mapper.selectList("com.xasw.jbxxwh.dao.SyxxwhMapper.waterAreaMenu",param);
            includeJson(list);
        }
    }

    /**
     * 用水户(菜单)
     */
    public void yshcd() {
        DelegateMapper mapper = getMapper();
        List list = mapper.selectList("com.xasw.jbxxwh.dao.SyxxwhMapper.yshcd");
        includeJson(list);
    }

    /**
     * 取水许可证状态(菜单)
     */
    public void qsxkzztcd(){
        DelegateMapper mapper = getMapper();
        List list = mapper.selectList("com.xasw.jbxxwh.dao.SyxxwhMapper.qsxkzztcd");
        includeJson(list);
    }

    /**
     *
     * @param userId 用户id
     * @param gwdms  岗位组 eg： "[001][002]"
     * @return
     */
    public boolean checkUserGw(String userId,String[] gwdms){
        DelegateMapper delegateMapper = getMapper();
        Map<String, Object> mp = new HashMap<String, Object>();
        mp.put("userid", userId);
        String gwdmStr="";
        for(int i=0;i<gwdms.length;i++){
            gwdmStr+="["+gwdms[i]+"]";
        }
        mp.put("gwdmstr",gwdmStr);
        List vo = delegateMapper.selectList("com.xasw.jbxxwh.dao.SyxxwhMapper.checkUserGw",mp);
        if (vo==null||vo.size()<1){
            return false;
        }else{
            return true;
        }
    }
}

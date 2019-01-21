package com.xasw.jbxxwh.services;

import br.com.caelum.vraptor.Controller;
import com.google.common.collect.Maps;
import com.ts.core.service.WebServiceSupport;
import com.ts.model.PaginatedVO;
import com.ts.persistence.dao.DelegateMapper;
import com.xasw.jbxxwh.model.CsbdsshVO;
import com.xasw.utils.FileUtil;
import org.slf4j.Logger;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import java.io.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author PengWen Wang
 * @date 2018/12/28 15:18
 * 初始表底数审核
 */
@Controller
public class CsbdsshController extends WebServiceSupport {

    @Inject
    private Logger log;

    public void initCsbdssh() {};

    public void initBdscx(){};

    /**
     * @param svo
     * @param limit
     * @param offset
     * @param sort
     * @param order
     * @author PengWen Wang
     * 初始化表底数审核
     * @date 2018/12/28 15:48
     */
    public void initQuery(CsbdsshVO svo, int limit, int offset, String sort, String order) {
        DelegateMapper delegateMapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        String userCode = this.getUserPrincipal().getUserCode();
        if (userCode.equals("36100010002")){      // 吴桐
            svo.setSyqy_dm("01");// 未央区
        }else if (userCode.equals("36100010003")){// 宫伟
            svo.setSyqy_dm("02");// 灞桥
        }else if (userCode.equals("36100010005")){// 陈建
            svo.setSyqy_dm("05");// 热水
        }
        param.put("svo", svo);
        PaginatedVO vo = delegateMapper.selectPaginated("com.xasw.jbxxwh.dao.CsbdsshMapper.initQuery", param, offset, limit);
        Map<String, Object> results = new HashMap<String, Object>();
        results.put("total", vo.getPageCount());
        results.put("rows", vo.getRows());
        includeJson(vo);
    }

    /**
     * 初始化表底数查询（根据权限查询）
     * @param svo
     * @param limit
     * @param offset
     * @param sort
     * @param order
     */
    public void queryByPermission(CsbdsshVO svo, int limit, int offset, String sort, String order){
        DelegateMapper delegateMapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        String userCode = this.getUserPrincipal().getUserCode();
        svo.setSbry_dm(this.getUserPrincipal().getUserCode());
        if (userCode.equals("36100010002")){// 吴桐
            svo.setSyqy_dm("01");// 未央区
        }else if (userCode.equals("36100010003")){// 宫伟
            svo.setSyqy_dm("02");// 灞桥
        }else if (userCode.equals("36100010005")){// 陈建
            svo.setSyqy_dm("05");// 热水
        }
        param.put("svo", svo);
        // 用水户(查看个人信息)
        String[] userOrgCode ={"001"};
        // 核查岗(查看区域信息)
        String[] inspectOrgCode = {"002"};
        // 管理岗(查看所有)
        String[] manageOrgCode = {"003","004"};
        if (checkUserGw(this.getUserPrincipal().getUserId(),userOrgCode)){
            PaginatedVO vo = delegateMapper.selectPaginated("com.xasw.jbxxwh.dao.CsbdsshMapper.userInitQuery", param, offset, limit);
            Map<String, Object> results = new HashMap<String, Object>();
            results.put("total", vo.getPageCount());
            results.put("rows", vo.getRows());
            includeJson(vo);
        }else if (checkUserGw(this.getUserPrincipal().getUserId(),inspectOrgCode)){
            PaginatedVO vo = delegateMapper.selectPaginated("com.xasw.jbxxwh.dao.CsbdsshMapper.inspectInitQuery", param, offset, limit);
            Map<String, Object> results = new HashMap<String, Object>();
            results.put("total", vo.getPageCount());
            results.put("rows", vo.getRows());
            includeJson(vo);
        }else if (checkUserGw(this.getUserPrincipal().getUserId(),manageOrgCode)){
            PaginatedVO vo = delegateMapper.selectPaginated("com.xasw.jbxxwh.dao.CsbdsshMapper.queryAll", param, offset, limit);
            Map<String, Object> results = new HashMap<String, Object>();
            results.put("total", vo.getPageCount());
            results.put("rows", vo.getRows());
            includeJson(vo);
        }
    }

    /**
     * 审核(回执信息)
     *
     * @param svo
     */
    public void audit(CsbdsshVO svo, String filePath)throws Exception {
        DelegateMapper delegateMapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("svo", svo);
        List list = delegateMapper.selectList("com.xasw.jbxxwh.dao.CsbdsshMapper.dataReceipt", param);
        includeJson(list);
    }

    /**
     * 保存(审核结果)
     *
     * @param svo
     */
    public void saveAudit(CsbdsshVO svo) {
        DelegateMapper delegateMapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        svo.setShry_dm(this.getUserPrincipal().getUserCode());
        svo.setShjg_dm(this.getUserPrincipal().getOrgCode());
        param.put("svo", svo);
        delegateMapper.update("com.xasw.jbxxwh.dao.CsbdsshMapper.saveAudit", param);
        includeJson("Save success");
    }

    /**
     * 图片复制
     * @param svo
     * @param req
     * @throws Exception
     */
    public void photoCopy(CsbdsshVO svo,HttpServletRequest req){
        DelegateMapper delegateMapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("svo", svo);
        List filePathList = delegateMapper.selectList("com.xasw.jbxxwh.dao.CsbdsshMapper.queryPath",param);
        if(filePathList!=null && !filePathList.isEmpty()){
            String srcPath = filePathList.get(0).toString().substring(9,filePathList.get(0).toString().length()-1);
            String destPath = req.getSession().getServletContext().getRealPath("/swimages/bdsbs");
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
        List vo = delegateMapper.selectList("com.xasw.jbxxwh.dao.CsbdsshMapper.checkUserGw",mp);
        if (vo==null||vo.size()<1){
            return false;
        }else{
            return true;
        }
    }

    /**
     *
     * @param userId 用户id
     * @param uri    访问链接
     * @return
     */
    public boolean checkPemission(String userId,String uri){
        DelegateMapper delegateMapper = getMapper();
        Map<String, Object> mp = new HashMap<String, Object>();
        mp.put("userid", userId);
        mp.put("uri",uri);
        List vo = delegateMapper.selectList("com.xasw.jbxxwh.dao.CsbdsshMapper.checkPemission",mp);
        if (vo==null||vo.size()<1){
            return false;
        }else{
            return true;
        }
    }

    /**
     * 审核(菜单)
     */
    public void auditStatus(){
        DelegateMapper mapper = getMapper();
        List list = mapper.selectList("com.xasw.jbxxwh.dao.CsbdsshMapper.auditStatus");
        includeJson(list);
    }
}

package com.xasw.zhcx.services;

import br.com.caelum.vraptor.Controller;
import com.google.common.collect.Maps;
import com.ts.core.service.WebServiceSupport;
import com.ts.model.PaginatedVO;
import com.ts.persistence.dao.DelegateMapper;
import com.xasw.utils.PermissionUtil;
import com.xasw.zhcx.model.YsljhcxVO;
import org.slf4j.Logger;

import javax.inject.Inject;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author PengWen Wang
 * @date 2018/12/14 15:50
 * 用水量计划查询
 */
@Controller
public class YsljhcxController extends WebServiceSupport {

    @Inject
    private Logger log;

    public void initYsljhcx(){};

    /**
     * @author PengWen Wang
     * 用水计划(初始化查询)
     * 1.核查岗查看区域信息
     * 2.用水户查看个人信息
     * 3.水务局综合分析岗、水务局管理岗可查询所有
     * @date 2018/12/27 18:17
     * @param svo
     * @param limit
     * @param offset
     * @param sort
     * @param order
     */
    public void initQuery(YsljhcxVO svo, int limit, int offset, String sort, String order) {
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
           PaginatedVO vo = delegateMapper.selectPaginated("com.xasw.zhcx.dao.YsljhcxMapper.userInitQuery", param, offset, limit);
           Map<String, Object> results = new HashMap<String, Object>();
           results.put("total", vo.getPageCount());
           results.put("rows", vo.getRows());
           includeJson(vo);
       }else if (checkUserGw(this.getUserPrincipal().getUserId(),inspectOrgCode)){
           PaginatedVO vo = delegateMapper.selectPaginated("com.xasw.zhcx.dao.YsljhcxMapper.inspectInitQuery", param, offset, limit);
           Map<String, Object> results = new HashMap<String, Object>();
           results.put("total", vo.getPageCount());
           results.put("rows", vo.getRows());
           includeJson(vo);
       }else if (checkUserGw(this.getUserPrincipal().getUserId(),manageOrgCode)){
            PaginatedVO vo = delegateMapper.selectPaginated("com.xasw.zhcx.dao.YsljhcxMapper.initQuery", param, offset, limit);
            Map<String, Object> results = new HashMap<String, Object>();
            results.put("total", vo.getPageCount());
            results.put("rows", vo.getRows());
            includeJson(vo);
        }
    }

    /**
     * @author Pengwen Wang
     * @date 2018/12/27 18:21
     * 根据用水量计划序号查询(用水户年度计划用水量)
     * @param svo
     */
    public void conditionQuery(YsljhcxVO svo){
        DelegateMapper delegateMapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("svo", svo);
        List list = delegateMapper.selectList("com.xasw.zhcx.dao.YsljhcxMapper.conditionQuery", param);
        includeJson(list);
    }

    /**
     * @author Pengwen Wang
     * @date 2018/12/27 19:40
     * 审核明细查询(已审核的用水户年度计划明细)
     * @param svo
     */
    public void auditDetailQuery(YsljhcxVO svo){
        DelegateMapper delegateMapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("svo", svo);
        List list = delegateMapper.selectList("com.xasw.zhcx.dao.YsljhcxMapper.auditDetailQuery", param);
        includeJson(list);
    }

    /**
     * 水源区域（菜单）
     */
    public void syqycd(YsljhcxVO svo) {
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
            List list = mapper.selectList("com.xasw.zhcx.dao.YsljhcxMapper.syqycd",param);
            includeJson(list);
        }else if (checkUserGw(this.getUserPrincipal().getUserId(),manageOrgCode)){
            param.put("svo", svo);
            List list = mapper.selectList("com.xasw.zhcx.dao.YsljhcxMapper.waterAreaMenu",param);
            includeJson(list);
        }
    }

    /**
     * 所属年度 (菜单)
     */

    public void yearMenu() {
        DelegateMapper mapper = getMapper();
        List list = mapper.selectList("com.xasw.zhcx.dao.YsljhcxMapper.yearMenu");
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
        List vo = delegateMapper.selectList("com.xasw.zhcx.dao.YsljhcxMapper.checkUserGw",mp);
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
        List vo = delegateMapper.selectList("com.xasw.zhcx.dao.YsljhcxMapper.checkPemission",mp);
        if (vo==null||vo.size()<1){
            return false;
        }else{
            return true;
        }
    }
}

package com.xasw.jbxxwh.services;

import br.com.caelum.vraptor.Controller;
import com.google.common.collect.Maps;
import com.ts.core.service.WebServiceSupport;
import com.ts.model.PaginatedVO;
import com.ts.persistence.dao.DelegateMapper;
import com.xasw.jbxxwh.model.YshxxwhVO;
import com.xasw.utils.CreateSepuence;
import org.slf4j.Logger;

import javax.inject.Inject;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author PengWen Wang
 * @date 2018/12/13 11:18
 * 用水户信息维护
 */
@Controller
public class YshxxwhController extends WebServiceSupport {

    @Inject
    private Logger log;

    public void initYshxxwh() {}

    public void initGrxxwh() {}

    /**
     * @param svo
     * @param limit
     * @param offset
     * @param sort
     * @param order
     * @author PengWen Wang
     * 用水户信息维护初始化查询
     * @date 2018/12/17 19:00
     */

    public void initQuery(YshxxwhVO svo, int limit, int offset, String sort, String order) {
        DelegateMapper delegateMapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("svo", svo);
        PaginatedVO vo = delegateMapper.selectPaginated("com.xasw.jbxxwh.dao.YshxxwhMapper.initQuery", param, offset, limit);
        Map<String, Object> results = new HashMap<String, Object>();
        results.put("total", vo.getPageCount());
        results.put("rows", vo.getRows());
        includeJson(vo);
    }

    /**
     * @param svo
     * @author PengWen Wang
     * 新增用水户信息
     * @date 2018/12/17 15:11
     */
    public void addData(YshxxwhVO svo) {
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        svo.setLrry_dm(this.getUserPrincipal().getUserCode());
        svo.setSybh(CreateSepuence.getTwentyGuid());
        param.put("svo", svo);
        mapper.insert("com.xasw.jbxxwh.dao.YshxxwhMapper.addData", param);
        includeJson("New success");
    }

    /**
     * @param svo
     * @author PengWen Wang
     * 根据用水户登记序号（回填数据）
     * @date 2018/12/26 19:28
     */
    public void backfillData(YshxxwhVO svo) {
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("svo", svo);
        List list = mapper.selectList("com.xasw.jbxxwh.dao.YshxxwhMapper.backfillData", param);
        includeJson(list);
    }

    /**
     * 保存编辑数据
     *
     * @param svo
     */
    public void saveEditData(YshxxwhVO svo) {
        DelegateMapper delegateMapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        svo.setXgry_dm(this.getUserPrincipal().getUserCode());
        param.put("svo", svo);
        delegateMapper.update("com.xasw.jbxxwh.dao.YshxxwhMapper.saveEditData", param);
        includeJson("ModifySuccessfully");
    }

    /**
     * 用水户信息逻辑删除
     *
     * @param svo
     */

    public void del(YshxxwhVO svo) {
        int flages = 1;
        DelegateMapper delegateMapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        svo.setXgry_dm(this.getUserPrincipal().getUserCode());
        param.put("svo", svo);
        // 是否在使用中
        Object object = delegateMapper.selectOne("com.xasw.jbxxwh.dao.YshxxwhMapper.whetherInUse", param);
        if (object != null) {
            Map map = (Map) object;
            Object userCode = map.get("YSHZH");
            if (userCode == null || "".equals(userCode)) {
                delegateMapper.insert("com.xasw.jbxxwh.dao.YshxxwhMapper.del", param);
            } else {
                flages = 0;
            }
        }else{
            delegateMapper.insert("com.xasw.jbxxwh.dao.YshxxwhMapper.del", param);
        }
        includeJson(flages);
    }

    /**
     * 注册校验
     *
     * @param svo
     * @param nsrsbhjy 纳税人识别号
     */
    public void certifiedCheck(YshxxwhVO svo, String nsrsbhjy) {
        boolean result = true;
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        svo.setNsrsbh(nsrsbhjy);
        param.put("svo", svo);
        List vo = mapper.selectList("com.xasw.jbxxwh.dao.YshxxwhMapper.certifiedCheck", param);
        if (vo != null && vo.size() > 0) {
            result = false;
        }
        Map<String, Boolean> map = new HashMap<>();
        map.put("valid", result);
        includeJson(map);
    }

    /**
     * 编辑校验
     *
     * @param svo
     * @param editnsrsbhjy 纳税人识别号
     */
    public void editCheck(YshxxwhVO svo, String editnsrsbhjy) {
        boolean result = true;
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        svo.setNsrsbh(editnsrsbhjy);
        param.put("svo", svo);
        List vo = mapper.selectList("com.xasw.jbxxwh.dao.YshxxwhMapper.editCheck", param);
        if (vo != null && vo.size() > 0) {
            result = false;
        }
        Map<String, Boolean> map = new HashMap<>();
        map.put("valid", result);
        includeJson(map);
    }

    /**
     * 水源地点 (菜单)
     */

    public void syddcd() {
        DelegateMapper mapper = getMapper();
        List list = mapper.selectList("com.xasw.jbxxwh.dao.YshxxwhMapper.syddcd");
        includeJson(list);
    }

    /**
     * 行政区划 (菜单)
     */

    public void xzqhcd() {
        DelegateMapper mapper = getMapper();
        List list = mapper.selectList("com.xasw.jbxxwh.dao.YshxxwhMapper.xzqhcd");
        includeJson(list);
    }

    /**
     * 用户查询（个体）
     * @param svo
     * @param limit
     * @param offset
     * @param sort
     * @param order
     */
    public void userQuery(YshxxwhVO svo, int limit, int offset, String sort, String order) {
        DelegateMapper delegateMapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        svo.setYshzh(this.getUserPrincipal().getUserCode());
        param.put("svo", svo);
        PaginatedVO vo = delegateMapper.selectPaginated("com.xasw.jbxxwh.dao.YshxxwhMapper.userQuery", param, offset, limit);
        Map<String, Object> results = new HashMap<String, Object>();
        results.put("total", vo.getPageCount());
        results.put("rows", vo.getRows());
        includeJson(vo);
    }

    /**
     * 保存用户编辑（个体）
     * @param svo
     */
    public void saveUserEdits(YshxxwhVO svo) {
        DelegateMapper delegateMapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        svo.setXgry_dm(this.getUserPrincipal().getUserCode());
        param.put("svo", svo);
        delegateMapper.update("com.xasw.jbxxwh.dao.YshxxwhMapper.saveUserEdits", param);
        includeJson("ModifySuccessfully");
    }
}

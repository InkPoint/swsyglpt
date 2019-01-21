package com.xasw.zhcx.services;

import br.com.caelum.vraptor.Controller;
import com.ts.core.UserPrincipal;
import com.ts.core.service.WebServiceSupport;
import com.ts.model.PaginatedVO;
import com.ts.persistence.dao.DelegateMapper;
import com.xasw.utils.CharCloudyUtil;
import com.xasw.utils.PermissionUtil;
import com.xasw.zhcx.model.SyxxcxVO;
import org.slf4j.Logger;

import javax.inject.Inject;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author He Mingchao
 * @date 2019/1/2 12:00
 * @desc 水源信息查询
 *
 */
@Controller
public class SyxxcxController extends WebServiceSupport {

    @Inject
    private Logger log;
    @Inject
    private CharCloudyUtil utils;

    public void initSyxxcx() {
    }
    /**
     * 税源列表查询
     * @param limit
     * @param offset
     * @param sort
     * @param order
     */
    public void syxxjhQuery(int limit, int offset, String sort, String order, SyxxcxVO svo) {

        DelegateMapper delegateMapper = getMapper();
        UserPrincipal userPrincipal= getUserPrincipal();
        log.debug("税源列表查询=>>"+ svo.toString());
        Map map=new HashMap();
        map.put("svo",svo);
        map.put("currUserCode",userPrincipal.getUserCode());
        map.put("isAll",PermissionUtil.checkUserGw(userPrincipal.getUserId(),new String[]{"003","004","005"},delegateMapper));
        log.debug("syxxjhQuery map.toString==>>"+map.toString());

        PaginatedVO vo = delegateMapper.selectPaginated("com.xasw.zhcx.dao.SyxxcxMapper.syxxjhQuery", map, offset, limit);
        Map<String, Object> results = new HashMap<String, Object>();
        results.put("total", vo.getPageCount());
        results.put("rows", vo.getRows());
        includeJson(vo);
    }
    /**
     * 税源详细查询
     */
    public void syxxdetailQuery( SyxxcxVO svo) {
        DelegateMapper delegateMapper = getMapper();
        Map map=new HashMap();
        map.put("svo",svo);
        Map<String,Object> vo = (Map<String, Object>) delegateMapper.selectOne("com.xasw.zhcx.dao.SyxxcxMapper.syxxdetailQuery", map);
        includeJson(vo);
    }


    /**
     * 税源列表查询
     */
    public void syxxjhampsQuery(SyxxcxVO svo) {
        DelegateMapper delegateMapper = getMapper();
        UserPrincipal userPrincipal= getUserPrincipal();
        Map map=new HashMap();
        map.put("svo",svo);
        map.put("currUserCode",userPrincipal.getUserCode());
        map.put("isAll",PermissionUtil.checkUserGw(userPrincipal.getUserId(),new String[]{"003","004","005"},delegateMapper));
        log.debug("syxxjhampsQuery map.toString==>>"+map.toString());

        List vo = delegateMapper.selectList("com.xasw.zhcx.dao.SyxxcxMapper.syxxjhQuery", map);
        includeJson(vo);
    }
    /**
     * 税源区域
     */
    public void syqyQuery() {
        DelegateMapper delegateMapper = getMapper();
        UserPrincipal userPrincipal= getUserPrincipal();
        Map map=new HashMap();
        map.put("currUserCode",userPrincipal.getUserCode());
        map.put("isAll",PermissionUtil.checkUserGw(userPrincipal.getUserId(),new String[]{"003","004","005"},delegateMapper));
        log.debug("syqyQuery map.toString==>>"+map.toString());
        List list = delegateMapper.selectList("com.xasw.zhcx.dao.SyxxcxMapper.syqyQuery",map);

        includeJson(list);
    }
    /**
     * 税源类型
     */
    public void sylxQuery() {
        DelegateMapper delegateMapper = getMapper();
        List list = delegateMapper.selectList("com.xasw.zhcx.dao.SyxxcxMapper.sylxQuery");

        includeJson(list);
    }
    /**
     * 税源状态
     */
    public void syztQuery() {
        DelegateMapper delegateMapper = getMapper();
        List list = delegateMapper.selectList("com.xasw.zhcx.dao.SyxxcxMapper.syztQuery");
        includeJson(list);
    }

}

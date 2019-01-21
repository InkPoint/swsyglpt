package com.xasw.jbxxwh.services;

import br.com.caelum.vraptor.Controller;
import com.google.common.collect.Maps;
import com.ts.core.service.WebServiceSupport;
import com.ts.model.PaginatedVO;
import com.ts.persistence.dao.DelegateMapper;
import com.xasw.jbxxwh.model.SyqywhVO;
import org.slf4j.Logger;

import javax.inject.Inject;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author: 贺明超
 * @date: 2019-01-02
 * @水源区域维护
 */
@Controller
public class SyqywhController extends WebServiceSupport {
    @Inject
    private Logger log;
    public  void initSyqywh(){

    }

    /**
     * 水源区域维护
     * @param limit
     * @param offset
     * @param sort
     * @param order
     */
    public void initQuery( int limit, int offset, String sort, String order) {
        log.debug("水源区域维护=>>"+ sort);
        DelegateMapper delegateMapper = getMapper();
        Map map=new HashMap();
        PaginatedVO vo = delegateMapper.selectPaginated("com.xasw.jbxxwh.dao.SyqywhMapper.initQuery", map, offset, limit);
        Map<String, Object> results = new HashMap<String, Object>();
        results.put("total", vo.getPageCount());
        results.put("rows", vo.getRows());
        includeJson(vo);
    }
    /**
     * @author 贺明超
     * 新增水利区域
     * @date 2018/12/17 15:11
     * @param svo
     */
    public void addData(SyqywhVO svo){
        log.debug("svo.toString==>>"+svo.toString());
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("svo", svo);
        param.put("currUserCode", this.getUserPrincipal().getUserCode());
        param.put("currOrgCode", this.getUserPrincipal().getOrgCode());
        mapper.insert("com.xasw.jbxxwh.dao.SyqywhMapper.addData", param);
        includeJson("New success");
    }
    /**
     * @author 贺明超
     * 新增水利区域
     * @date 2018/12/17 15:11
     * @param svo
     */
    public void modifyData(SyqywhVO svo){
        log.debug("svo.toString==>>"+svo.toString());
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("svo", svo);
        param.put("currUserCode", this.getUserPrincipal().getUserCode());
        param.put("currOrgCode", this.getUserPrincipal().getOrgCode());
        mapper.insert("com.xasw.jbxxwh.dao.SyqywhMapper.modifyData", param);
        includeJson("New success");
    }

    /**
     * 初始化负责人列表
     */
    public void fzrQuery() {
        DelegateMapper delegateMapper = getMapper();
        List list = delegateMapper.selectList("com.xasw.jbxxwh.dao.SyqywhMapper.fzrQuery");

        includeJson(list);
    }
    /**
     * 初始化税源状态列表
     */
    public void syztQuery() {
        DelegateMapper delegateMapper = getMapper();
        List list = delegateMapper.selectList("com.xasw.jbxxwh.dao.SyqywhMapper.syztQuery");

        includeJson(list);
    }

    /**
     * 删除税源区域
     *
     * @param svo
     */

    public void deleteList(SyqywhVO svo) {
        DelegateMapper delegateMapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("svo", svo);
        param.put("currUserCode", this.getUserPrincipal().getUserCode());
        param.put("currOrgCode", this.getUserPrincipal().getOrgCode());
        delegateMapper.insert("com.xasw.jbxxwh.dao.SyqywhMapper.deleteList", param);
        includeJson("Deleted successfully");
    }
}

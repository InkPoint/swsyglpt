package com.xasw.zhcx.services;

import br.com.caelum.vraptor.Controller;
import com.google.common.collect.Maps;
import com.ts.core.service.WebServiceSupport;
import com.ts.model.PaginatedVO;
import com.ts.persistence.dao.DelegateMapper;
import com.xasw.zhcx.model.TzggVO;
import org.slf4j.Logger;

import javax.inject.Inject;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author PengWen Wang
 * @date 2018/12/29 8:58
 * 通知公告
 */
@Controller
public class TzggController extends WebServiceSupport {

    @Inject
    private Logger log;

    public void initTzgg(){};

    public void initAdd(){};

    public void initView(){};

    public void initNotice(){};

    /**
     * @author PengWen Wang
     * 通知公告初始化查询
     * @date 2018/12/29 11:04
     * @param svo
     * @param limit
     * @param offset
     * @param sort
     * @param order
     */
    public void initQuery(TzggVO svo, int limit, int offset, String sort, String order) {
        DelegateMapper delegateMapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("svo", svo);
        PaginatedVO vo = delegateMapper.selectPaginated("com.xasw.zhcx.TzggMapper.initQuery", param, offset, limit);
        Map<String, Object> results = new HashMap<String, Object>();
        results.put("total", vo.getPageCount());
        results.put("rows", vo.getRows());
        includeJson(vo);
    }

    /**
     * 文章预览
     * @param svo
     */
    public void theArticlePreview(TzggVO svo){
        DelegateMapper delegateMapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("svo", svo);
        List list = delegateMapper.selectList("com.xasw.zhcx.TzggMapper.theArticlePreview", param);
        includeJson(list);
    }

    /**
     * 条件查询(所要编辑的文档的回置)
     * @param svo
     */
    public void conditionQuery(TzggVO svo){
        DelegateMapper delegateMapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("svo", svo);
        List list = delegateMapper.selectList("com.xasw.zhcx.TzggMapper.conditionQuery", param);
        includeJson(list);
    }

    /**
     * 保存编辑后文章
     * @param svo
     */
    public void saveEdit(TzggVO svo){
        DelegateMapper delegateMapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        svo.setXgr(this.getUserPrincipal().getUserCode());
        param.put("svo", svo);
        delegateMapper.update("com.xasw.zhcx.TzggMapper.saveEdit", param);
        includeJson("Save success");
    }

    /**
     * 删除文章(逻辑删除)
     * @date 2018/12/29 17:31
     * @param svo
     */

    public void del(TzggVO svo) {
        DelegateMapper delegateMapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        svo.setXgr(this.getUserPrincipal().getUserCode());
        param.put("svo", svo);
        delegateMapper.insert("com.xasw.zhcx.TzggMapper.del", param);
        includeJson("Deleted successfully");
    }

    /**
     * 新增文章
     * @param svo
     */
    public void saveData(TzggVO svo){
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        svo.setZz(this.getUserPrincipal().getUserCode());
        svo.setFbr(this.getUserPrincipal().getUserCode());
        param.put("svo", svo);
        mapper.insert("com.xasw.zhcx.TzggMapper.saveData", param);
        includeJson("New success");
    }

    /**
     * 发布
     * @param svo
     */
    public void issue(TzggVO svo){
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("svo", svo);
        mapper.insert("com.xasw.zhcx.TzggMapper.issue", param);
        includeJson("New issue");
    }

    /**
     * 取消发布
     * @param svo
     */
    public void unpublish(TzggVO svo){
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("svo", svo);
        mapper.insert("com.xasw.zhcx.TzggMapper.unpublish", param);
        includeJson("Unpublish");
    }

    /**
     * 公告列表
     * 初始化查询 5 条
     * @param svo
     */
    public void announceList(TzggVO svo){
        DelegateMapper delegateMapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("svo", svo);
        List list = delegateMapper.selectList("com.xasw.zhcx.TzggMapper.announceList", param);
        includeJson(list);
    }

    /**
     * 查看公告
     * @param svo
     * @param limit
     * @param offset
     * @param sort
     * @param order
     */
    public void viewNotice(TzggVO svo, int limit, int offset, String sort, String order) {
        DelegateMapper delegateMapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("svo", svo);
        PaginatedVO vo = delegateMapper.selectPaginated("com.xasw.zhcx.TzggMapper.viewNotice", param, offset, limit);
        Map<String, Object> results = new HashMap<String, Object>();
        results.put("total", vo.getPageCount());
        results.put("rows", vo.getRows());
        includeJson(vo);
    }
}

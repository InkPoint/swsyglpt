package com.xasw.yslsb.services;

import br.com.caelum.vraptor.Controller;
import com.google.common.collect.Maps;
import com.ts.core.service.WebServiceSupport;
import com.ts.model.PaginatedVO;
import com.ts.persistence.dao.DelegateMapper;
import com.xasw.yslsb.model.YsjhshxdVO;
import com.xasw.yslsb.model.YsljhbsVO;
import org.slf4j.Logger;

import javax.inject.Inject;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author PengWen Wang
 * @date 2018/12/25 14:40
 * 用水计划审核下达
 */
@Controller
public class YsjhshxdController extends WebServiceSupport {

    @Inject
    private Logger log;

    public void initYsjhshxd(){};

    /**
     * @author PengWen Wang
     * 用水计划审核下达(初始化查询)
     * @date 2018/12/25 17:13
     * @param svo
     * @param limit
     * @param offset
     * @param sort
     * @param order
     */
    public void initQuery(YsjhshxdVO svo, int limit, int offset, String sort, String order) {
        DelegateMapper delegateMapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("svo", svo);
        PaginatedVO vo = delegateMapper.selectPaginated("com.xasw.yslsb.dao.YsjhshxdMapper.initQuery", param, offset, limit);
        Map<String, Object> results = new HashMap<String, Object>();
        results.put("total", vo.getPageCount());
        results.put("rows", vo.getRows());
        includeJson(vo);
    }

    /**
     * @author Pengwen Wang
     * @date 2018/12/25 19:54
     * 根据用水量计划序号查询(用水户年度计划用水量)
     * @param svo
     */
    public void conditionQuery(YsjhshxdVO svo){
        DelegateMapper delegateMapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("svo", svo);
        List list = delegateMapper.selectList("com.xasw.yslsb.dao.YsjhshxdMapper.conditionQuery", param);
        includeJson(list);
    }

    /**
     * 用水量计划(报送)
     * @param svo
     */
    public void addData(YsljhbsVO svo){
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        svo.setShry_dm(this.getUserPrincipal().getUserCode());
        svo.setShjg_dm(this.getUserPrincipal().getOrgCode());
        param.put("svo", svo);
        mapper.update("com.xasw.yslsb.dao.YsjhshxdMapper.addData", param);
        mapper.insert("com.xasw.yslsb.dao.YsjhshxdMapper.addAttach", param);
        includeJson("New success");
    }
}

package com.xasw.yslsb.services;

import br.com.caelum.vraptor.Controller;
import com.google.common.collect.Maps;
import com.ts.core.service.WebServiceSupport;
import com.ts.persistence.dao.DelegateMapper;
import com.xasw.utils.CreateSepuence;
import com.xasw.yslsb.model.YsljhbsVO;
import org.slf4j.Logger;

import javax.inject.Inject;
import java.util.List;
import java.util.Map;

/**
 * @author PengWen Wang
 * @date 2018/12/25 10:40
 * 用水量计划报送
 */
@Controller
public class YsljhbsController extends WebServiceSupport {

    @Inject
    private Logger log;

    public void initYsljhbs(){

    };

    /**
     * 水源地点 (菜单)
     */

    public void syddcd() {
        DelegateMapper mapper = getMapper();
        List list = mapper.selectList("com.xasw.yslsb.dao.YsljhbsMapper.syddcd");
        includeJson(list);
    }

    /**
     * 用水户取水地点 (菜单)
     */

    public void yshqsddcd(YsljhbsVO svo) {
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        svo.setYshzh(this.getUserPrincipal().getUserCode());
        param.put("svo", svo);
        List list = mapper.selectList("com.xasw.yslsb.dao.YsljhbsMapper.yshqsddcd",param);
        includeJson(list);
    }

    /**
     * 用水量计划(报送)
     * @param svo
     */
    public void addData(YsljhbsVO svo){
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        svo.setSbry_dm(this.getUserPrincipal().getUserCode());
        svo.setYsljhxh(CreateSepuence.getUUID());
        param.put("svo", svo);
        mapper.insert("com.xasw.yslsb.dao.YsljhbsMapper.addData", param);
        mapper.insert("com.xasw.yslsb.dao.YsljhbsMapper.addAttach", param);
        includeJson("New success");
    }
}

package com.xasw.zhcx.services;

import br.com.caelum.vraptor.Controller;
import com.ts.core.service.WebServiceSupport;
import com.ts.persistence.dao.DelegateMapper;
import com.xasw.utils.CharCloudyUtil;
import com.xasw.zhcx.model.YslzhfxVO;
import org.slf4j.Logger;

import javax.inject.Inject;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author BoYi Sun
 * @date 2018/12/13 11:07
 * @desc 用水量台账
 */
@Controller
public class YslzhfxController extends WebServiceSupport {

    @Inject
    private Logger log;
    @Inject
    private CharCloudyUtil utils;

    /**
     * 用水量综合分析
     */
    public void initYslzhfx() {
        DelegateMapper mapper = getMapper();
    }
    /**
     * 查询用水量综合分析
     */
    public void yslzhfxQuery( YslzhfxVO svo) {
        DelegateMapper delegateMapper = getMapper();
        Map map=new HashMap();
        map.put("svo",svo);
        log.debug("map.toString==>>"+map.toString());
        Map<String,Object> vo = (Map<String, Object>) delegateMapper.selectOne("com.xasw.zhcx.dao.YslzhfxMapper.yslzhfxQuery", map);
        includeJson(vo);
    }

    /**
     * 税源用水量分析图
     */
    public void sylxyslQuery( YslzhfxVO svo) {
        DelegateMapper delegateMapper = getMapper();
        Map map=new HashMap();
        map.put("svo",svo);
        List<Map<String,Object>> vo = delegateMapper.selectList("com.xasw.zhcx.dao.YslzhfxMapper.sylxyslQuery", map);
        includeJson(vo);
    }
    /**
     * 地下水超采区类型查询
     */
    public void dxsccqlxQuery( YslzhfxVO svo) {
        DelegateMapper delegateMapper = getMapper();
        Map map=new HashMap();
        map.put("svo",svo);
        List<Map<String,Object>> vo = delegateMapper.selectList("com.xasw.zhcx.dao.YslzhfxMapper.dxsccqlxQuery", map);
        includeJson(vo);
    }
    /**
     * 特殊用水类型查询
     */
    public void tsyslxQuery( YslzhfxVO svo) {
        DelegateMapper delegateMapper = getMapper();
        Map map=new HashMap();
        map.put("svo",svo);
        List<Map<String,Object>> vo = delegateMapper.selectList("com.xasw.zhcx.dao.YslzhfxMapper.tsyslxQuery", map);
        includeJson(vo);
    }
    /**
     * 行业用水量
     */
    public void hyyslQuery( YslzhfxVO svo) {
        DelegateMapper delegateMapper = getMapper();
        Map map=new HashMap();
        map.put("svo",svo);
        List<Map<String,Object>> vo = delegateMapper.selectList("com.xasw.zhcx.dao.YslzhfxMapper.hyyslQuery", map);
        includeJson(vo);
    }
    /**
     * 年份用水量趋势
     */
    public void nfyslqsQuery( YslzhfxVO svo) {
        DelegateMapper delegateMapper = getMapper();
        Map map=new HashMap();
        map.put("svo",svo);
        List<Map<String,Object>> vo = delegateMapper.selectList("com.xasw.zhcx.dao.YslzhfxMapper.nfyslqsQuery", map);
        includeJson(vo);
    }


    /**
     * 地下水超采区类型代码查询
     */
    public void dxsccqlxdmQuery() {
        DelegateMapper delegateMapper = getMapper();
        List list = delegateMapper.selectList("com.xasw.zhcx.dao.YslzhfxMapper.dxsccqlxdmQuery");

        includeJson(list);
    }

    /**
     * 特殊用水类型代码查询
     */
    public void tsyslxdmQuery() {
        DelegateMapper delegateMapper = getMapper();
        List list = delegateMapper.selectList("com.xasw.zhcx.dao.YslzhfxMapper.tsyslxdmQuery");

        includeJson(list);
    }

}

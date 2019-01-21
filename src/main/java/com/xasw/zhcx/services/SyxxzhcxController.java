package com.xasw.zhcx.services;

import br.com.caelum.vraptor.Controller;
import com.ts.core.service.WebServiceSupport;
import com.ts.persistence.dao.DelegateMapper;
import com.xasw.utils.CharCloudyUtil;
import com.xasw.zhcx.model.SyxxzhcxVO;
import org.slf4j.Logger;

import javax.inject.Inject;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author He Mingchao
 * @date 2019/1/2 11:07
 * @desc 税源信息综合查询
 *
 */
@Controller
public class SyxxzhcxController extends WebServiceSupport {

    @Inject
    private Logger log;
    @Inject
    private CharCloudyUtil utils;

    /**
     * 税源信息综合查询初始化
     */
    public void initSyxxzhcx() {
    }
    /**
     * 税款金额同比环比
     */
    public void skjnjetbhbQuery( SyxxzhcxVO svo) {
        DelegateMapper delegateMapper = getMapper();
        Map map=new HashMap();
        map.put("svo",svo);
        Map<String,Object> vo = (Map<String, Object>) delegateMapper.selectOne("com.xasw.zhcx.dao.SyxxzhcxMapper.skjnjetbhbQuery", map);
        includeJson(vo);
    }
    /**
     * 年份用水量趋势
     */
    public void skjnjeqsQuery( SyxxzhcxVO svo) {
        DelegateMapper delegateMapper = getMapper();
        Map map=new HashMap();
        map.put("svo",svo);
        List<Map<String,Object>> vo = delegateMapper.selectList("com.xasw.zhcx.dao.SyxxzhcxMapper.skjnjeqsQuery", map);
        includeJson(vo);
    }


    /**
     * 税款税源类型分析图
     */
    public void sksylxQuery( SyxxzhcxVO svo) {
        DelegateMapper delegateMapper = getMapper();
        Map map=new HashMap();
        map.put("svo",svo);
        List<Map<String,Object>> vo = delegateMapper.selectList("com.xasw.zhcx.dao.SyxxzhcxMapper.sksylxQuery", map);
        includeJson(vo);
    }


    /**
     * 税款行业分析图
     */
    public void skhyQuery( SyxxzhcxVO svo) {
        DelegateMapper delegateMapper = getMapper();
        Map map=new HashMap();
        map.put("svo",svo);
        List<Map<String,Object>> vo = delegateMapper.selectList("com.xasw.zhcx.dao.SyxxzhcxMapper.skhyQuery", map);
        includeJson(vo);
    }

    /**
     * 税款地下水超采区类型分析图
     */
    public void skdxsccqlxQuery( SyxxzhcxVO svo) {
        DelegateMapper delegateMapper = getMapper();
        Map map=new HashMap();
        map.put("svo",svo);
        List<Map<String,Object>> vo = delegateMapper.selectList("com.xasw.zhcx.dao.SyxxzhcxMapper.skdxsccqlxQuery", map);
        includeJson(vo);
    }
    /**
     * 税款特殊用水类型分析图
     */
    public void sktsyslxQuery( SyxxzhcxVO svo) {
        DelegateMapper delegateMapper = getMapper();
        Map map=new HashMap();
        map.put("svo",svo);
        List<Map<String,Object>> vo = delegateMapper.selectList("com.xasw.zhcx.dao.SyxxzhcxMapper.sktsyslxQuery", map);
        includeJson(vo);
    }
}

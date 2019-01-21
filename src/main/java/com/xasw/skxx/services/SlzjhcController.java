package com.xasw.skxx.services;

import br.com.caelum.vraptor.Controller;
import com.google.common.collect.Maps;
import com.ts.core.service.WebServiceSupport;
import com.ts.model.PaginatedVO;
import com.ts.persistence.dao.DelegateMapper;
import com.xasw.skxx.model.SlzjhcVO;
import com.xasw.utils.CharCloudyUtil;
import com.xasw.utils.DateUtils;
import com.xasw.utils.SwGlUtils;
import org.slf4j.Logger;

import javax.inject.Inject;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author BoYi Sun
 * @date 2018/12/13 11:07
 * @desc  水量征缴核查
 */
@Controller
public class SlzjhcController extends WebServiceSupport {

    @Inject
    private Logger log;
    @Inject
    private CharCloudyUtil utils;
    /**
     * 用水量台账
     */
    public void initSlzjhc() {
        DelegateMapper mapper = getMapper();
        try{
            utils.addCloudydata(mapper,"水量征缴核查",this.getUserPrincipal().getUserCode(),"skxx/slzjhc/initSlzjhc");
        }catch (Exception e){
        }
    }

    /**
     *征缴核查
     */
    public void ylszjhc() {
        DelegateMapper mapper = getMapper();
        include("dqrq", SwGlUtils.getSqRq(mapper)[2]);
        include("username", this.getUserPrincipal().getUserName());
        include("usercode", this.getUserPrincipal().getUserCode());
    }

    /**
     * 核查结果类型
     */
    public void hcjglxcd() {
        //数据载入数据加载
        DelegateMapper mapper = getMapper();
        List vo = mapper.selectList("com.xasw.skxx.SlzjhcMapper.hcjglxcd");
        includeJson(vo);
    }

    /**
     * 编辑时候反馈税款信息初始化
     * @param hdsbh
     */
    public void doFkxxInit(String hdsbh) {
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("hdsbh", hdsbh);
        List fkxxList=mapper.selectList("com.xasw.skxx.SlzjhcMapper.fkxxInit", param);
        includeJson(fkxxList);
    }

    /**
     * 反馈信息编辑
     * @param svo
     */
    public void doFkxxEdit(SlzjhcVO svo) {
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("svo", svo);
        mapper.update("com.xasw.skxx.SlzjhcMapper.fkxxEdit", param);
        includeJson("修改成功！");
    }

    /**
     * 新增信息
     *
     * @param svo
     */

    public void newaddition(SlzjhcVO svo) {
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("svo", svo);
        mapper.insert("com.xasw.skxx.SlzjhcMapper.newaddition", param);
        includeJson("核查成功!");
    }

    /**
     * 信息采集表
     *
     * @param svo
     * @param limit
     * @param offset
     * @param sort
     * @param order
     */

    public void selectAll(SlzjhcVO svo, int limit, int offset, String sort, String order) {
        DelegateMapper delegateMapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        svo.setShrdm(this.getUserPrincipal().getUserCode());
        param.put("svo", svo);
        PaginatedVO vo = delegateMapper.selectPaginated("com.xasw.skxx.SlzjhcMapper.selectAll", param, offset, limit);
        Map<String, Object> results = new HashMap<String, Object>();
        results.put("total", vo.getPageCount());
        results.put("rows", vo.getRows());
        includeJson(vo);
    }
}

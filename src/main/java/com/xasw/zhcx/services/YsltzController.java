package com.xasw.zhcx.services;

import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.observer.download.Download;
import com.google.common.collect.Maps;
import com.ts.core.service.WebServiceSupport;
import com.ts.model.PaginatedVO;
import com.ts.persistence.dao.DelegateMapper;
import com.xasw.utils.CharCloudyUtil;
import com.xasw.utils.ExpertData;
import com.xasw.zhcx.model.YslhdscxVO;
import com.xasw.zhcx.model.YsltzVO;
import com.xasw.zhcx.model.YslzhfxVO;
import org.slf4j.Logger;

import javax.inject.Inject;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author BoYi Sun
 * @date 2018/12/13 11:07
 * @desc 用水量台账
 */
@Controller
public class YsltzController extends WebServiceSupport {

    @Inject
    private Logger log;
    @Inject
    private CharCloudyUtil utils;

    private static String gwdm="%";
    /**
     * 用水量台账
     */
    public void initYsltz() {
        DelegateMapper mapper = getMapper();
        try{
            utils.addCloudydata(mapper,"用水量台账",this.getUserPrincipal().getUserCode(),"zhcx/ysltz/initYsltz");
        }catch (Exception e){

        }
    }

    /**
     * 年度菜单 (下拉菜单)
     */
    public void ndcd() {
        DelegateMapper mapper = getMapper();
        //数据载入数据加载
        List vo = mapper.selectList("com.xasw.zhcx.YsltzMapper.ndcd");
        includeJson(vo);
    }

    /**
     * 水源类型 (下拉菜单)
     */

    public void sylxcd() {
        DelegateMapper mapper = getMapper();
        //数据载入数据加载
        List vo = mapper.selectList("com.xasw.zhcx.YsltzMapper.sylxcd");
        includeJson(vo);

    }

    /**
     * 水源区域 (下拉菜单)
     */

    public void syqycd() {
        DelegateMapper mapper = getMapper();
        //数据载入数据加载
        List vo = mapper.selectList("com.xasw.zhcx.YsltzMapper.syqycd");
        includeJson(vo);
    }

    /**
     *单户用水量总体情况
     */
    public void dhyslztqk() {
    }

        /**
     * 用水量总体情况
     * @param nsrsbh
     */
    public void doYslztqk(String nsrsbh) {
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("nsrsbh", nsrsbh);
        List hdsList = mapper.selectList("com.xasw.zhcx.YsltzMapper.lnyslztqk", param);
        includeJson(hdsList);
    }


    /**
     * 本年水源区域用水量分布情况
     * @param nsrsbh
     */
    public void doSyqyqk(String nsrsbh) {
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("nsrsbh", nsrsbh);
        List syqyList = mapper.selectList("com.xasw.zhcx.YsltzMapper.syqyqk", param);
        includeJson(syqyList);
    }

    /**
     * 本年水源类型用水量分布情况
     * @param nsrsbh
     */
    public void doSylxqk(String nsrsbh) {
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("nsrsbh", nsrsbh);
        List sylxList = mapper.selectList("com.xasw.zhcx.YsltzMapper.sylxqk", param);
        includeJson(sylxList);
    }



    /**
     * 用数量台账查询
     *
     * @param svo
     * @param limit
     * @param offset
     * @param sort
     * @param order
     */

    public void selectAll(YsltzVO svo, int limit, int offset, String sort, String order) {
        DelegateMapper delegateMapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("usercode", this.getUserPrincipal().getUserCode());
        List  gwList=delegateMapper.selectList("com.xasw.zhcx.YsltzMapper.gwdm", param);
        if(gwList.size()==1){
            Map map = (HashMap) gwList.get(0);
            gwdm  =map.get("GWDM")==null?"": map.get("GWDM").toString();
            if("001".equals(gwdm)){
                svo.setLrr(this.getUserPrincipal().getUserCode());
                svo.setShr_dm("%");
            }else if("002".equals(gwdm)){
                svo.setLrr("%");
                svo.setShr_dm(this.getUserPrincipal().getUserCode());
            }
        }else{
            svo.setLrr("%");
            svo.setShr_dm("%");
        }
        param.put("svo", svo);
        PaginatedVO vo = delegateMapper.selectPaginated("com.xasw.zhcx.YsltzMapper.selectAll", param, offset, limit);
        Map<String, Object> results = new HashMap<String, Object>();
        results.put("total", vo.getPageCount());
        results.put("rows", vo.getRows());
        includeJson(vo);
    }

    /**
     * excel导出
     * @param svo
     * @return
     */
    public Download doExcel(YsltzVO svo) {

        log.debug("doExcel ssnf==="+svo.getSsnf());
         DelegateMapper delegateMapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("usercode", this.getUserPrincipal().getUserCode());
        List  gwList=delegateMapper.selectList("com.xasw.zhcx.YsltzMapper.gwdm", param);
        if(gwList.size()==1){
            Map map = (HashMap) gwList.get(0);
            gwdm  =map.get("GWDM")==null?"": map.get("GWDM").toString();
            if("001".equals(gwdm)){
                svo.setLrr(this.getUserPrincipal().getUserCode());
                svo.setShr_dm("%");
            }else if("002".equals(gwdm)){
                svo.setLrr("%");
                svo.setShr_dm(this.getUserPrincipal().getUserCode());
            }
        }else{
            svo.setLrr("%");
            svo.setShr_dm("%");
        }
        param.put("svo", svo);


        List lists = delegateMapper.selectList("com.xasw.zhcx.YsltzMapper.doExcel", param);

        HttpServletResponse res = getResponse();
        String[] title = {"用水户名称", "用水户识别号", "年度", "年度用水量", "年度缴纳税款金额", "年度核查税款金额", "一季度用水量", "一季度缴纳税款"
                ,"一季度核查税款","二季度用水量","二季度缴纳税款","二季度核查税款","三季度用水量","三季度缴纳税款","三季度核查税款","四季度用水量","四季度缴纳税款","四季度核查税款"};
        String[] columnss = {"NSRMC", "NSRSBH", "SSNF", "NDQSL", "NDSKJE", "NDHCJE", "YHDQSL", "YSKJNJE", "YHCSKJE","EHDQSL","ESKJNJE","EHCSKJE","SHDQSL","SSKJNJE","SHCSKJE","FHDQSL","FSKJNJE","FHCSKJE"};
        return ExpertData.getDataToExcels("用水户台账清册", title, columnss, lists, res);
    }



    /**
     * 年份用水量趋势
     */
    public void nfyslqsQuery(YsltzVO svo) {
        DelegateMapper delegateMapper = getMapper();
        Map map=new HashMap();
        map.put("svo",svo);
        List<Map<String,Object>> vo = delegateMapper.selectList("com.xasw.zhcx.YsltzMapper.nfyslqsQuery", map);
        includeJson(vo);
    }


    /**
     * 用水量同比环比
     */
    public void ylstbhb(YsltzVO svo) {
        DelegateMapper delegateMapper = getMapper();
        Map map=new HashMap();
        map.put("svo",svo);
        log.debug("map.toString==>>"+map.toString());
        Map<String,Object> vo = (Map<String, Object>) delegateMapper.selectOne("com.xasw.zhcx.YsltzMapper.ylstbhb", map);
        includeJson(vo);
    }

}

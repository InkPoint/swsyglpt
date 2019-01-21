package com.xasw.yslhd.services;

import br.com.caelum.vraptor.Controller;
import com.google.common.collect.Maps;
import com.ts.core.service.WebServiceSupport;
import com.ts.model.PaginatedVO;
import com.ts.persistence.dao.DelegateMapper;
import com.xasw.utils.CharCloudyUtil;
import com.xasw.utils.DateUtils;
import com.xasw.utils.JsonObjectToJava;
import com.xasw.utils.SwGlUtils;
import com.xasw.yslhd.model.YslbsVO;
import com.xasw.yslhd.model.YslhdVO;
import org.slf4j.Logger;

import javax.inject.Inject;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author PengWen Wang
 * @date 2018/12/13 11:07
 * 水源信息维护
 */
@Controller
public class YslhdsController extends WebServiceSupport {
    @Inject
    private Logger log;

    @Inject
    private CharCloudyUtil utils;

    /**
     * 1.用水户核定初始化
     */
    public void initYslhd() {
        include("usercode", this.getUserPrincipal().getUserCode());
    }

    /**
     * 2.获取报送记录
     * @param svo
     * @param limit
     * @param offset
     * @param sort
     * @param order
     */
    public void selectAll(YslhdVO svo, int limit, int offset, String sort, String order) {
        DelegateMapper delegateMapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("svo", svo);
        PaginatedVO vo = delegateMapper.selectPaginated("com.xasw.yslhd.YslhdsMapper.selectAll", param, offset, limit);
        Map<String, Object> results = new HashMap<String, Object>();
        results.put("total", vo.getPageCount());
        results.put("rows", vo.getRows());
        includeJson(vo);
    }

    /**
     *3. 获取用水量明细数据
     * @param svo
     * @param limit
     * @param offset
     * @param sort
     * @param order
     */
    public void getYslbsMx(YslhdVO svo, int limit, int offset, String sort, String order) {
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("svo", svo);
        PaginatedVO vo = mapper.selectPaginated("com.xasw.yslhd.YslhdsMapper.getYslbsMx", param, offset, limit);
        includeJson(vo);
    }

    /**
     * 查看数据
     * @param xxcjid
     */
    public void doQueryTable(String xxcjid) {
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("xxcjid", xxcjid);
        List hdsList = mapper.selectList("com.xasw.yslhd.YslhdsMapper.hdsxx",param);
        includeJson(hdsList);
    }

    /**
     * 查看明细图片预览
     * @param mxxh
     */
    public void getPicView(String mxxh){
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("mxxh", mxxh);
        List hdsList = mapper.selectList("com.xasw.yslhd.YslhdsMapper.getPicView",param);
        includeJson(hdsList);
    }

    /**
     * 核定结果类型
     */
    public void hdjglx() {
        //数据载入数据加载
        DelegateMapper mapper = getMapper();
        List vo = mapper.selectList("com.xasw.yslhd.YslhdsMapper.hdjglx");
        includeJson(vo);
    }

    /**
     *用水量报送核定
     */
    public void initYslhdEdit(String xxcjid) {
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        include("username", this.getUserPrincipal().getUserName());
        include("usercode", this.getUserPrincipal().getUserCode());
        param.put("xxcjid",xxcjid);
        List listinfo = mapper.selectList("com.xasw.yslhd.YslhdsMapper.getEditData",param);
        Map map = (HashMap)listinfo.get(0);
        include("xxcjid",xxcjid);
        include("sxzzgbm", map.get("sxzzgbm".toUpperCase())==null?"":String.valueOf(map.get("sxzzgbm".toUpperCase())));
        include("sxzzgbmmc", map.get("sxzzgbmmc".toUpperCase())==null?"":String.valueOf(map.get("sxzzgbmmc".toUpperCase())));
        include("qslssqq", map.get("qslssqq".toUpperCase())==null?"":String.valueOf(map.get("qslssqq".toUpperCase())));
        include("qslssqz", map.get("qslssqz".toUpperCase())==null?"":String.valueOf(map.get("qslssqz".toUpperCase())));
        include("cbrq", map.get("cbrq".toUpperCase())==null?"":String.valueOf(map.get("cbrq".toUpperCase())));
        include("nsrsbh", map.get("nsrsbh".toUpperCase())==null?"":String.valueOf(map.get("nsrsbh".toUpperCase())));
        include("nsrmc", map.get("nsrmc".toUpperCase())==null?"":String.valueOf(map.get("nsrmc".toUpperCase())));
        include("qsjh", map.get("qsjh".toUpperCase())==null?"":String.valueOf(map.get("qsjh".toUpperCase())));
        include("lxr", map.get("lxr".toUpperCase())==null?"":String.valueOf(map.get("lxr".toUpperCase())));
        include("lxfs", map.get("lxfs".toUpperCase())==null?"":String.valueOf(map.get("lxfs".toUpperCase())));
        include("sylx", map.get("sylx".toUpperCase())==null?"":String.valueOf(map.get("sylx".toUpperCase())));
        include("sylxmc", map.get("sylxmc".toUpperCase())==null?"":String.valueOf(map.get("sylxmc".toUpperCase())));
        include("qyshy", map.get("qyshy".toUpperCase())==null?"":String.valueOf(map.get("qyshy".toUpperCase())));
        include("qyshymc", map.get("qyshymc".toUpperCase())==null?"":String.valueOf(map.get("qyshymc".toUpperCase())));
        include("syqy", map.get("syqy".toUpperCase())==null?"":String.valueOf(map.get("syqy".toUpperCase())));
        include("syqymc", map.get("syqymc".toUpperCase())==null?"":String.valueOf(map.get("syqymc".toUpperCase())));
        include("tsyslb", map.get("tsyslb".toUpperCase())==null?"":String.valueOf(map.get("tsyslb".toUpperCase())));
        include("tsyslbmc", map.get("tsyslbmc".toUpperCase())==null?"":String.valueOf(map.get("tsyslbmc".toUpperCase())));
        include("dxsccqlx", map.get("dxsccqlx".toUpperCase())==null?"":String.valueOf(map.get("dxsccqlx".toUpperCase())));
        include("dxsccqlxmc", map.get("dxsccqlxmc".toUpperCase())==null?"":String.valueOf(map.get("dxsccqlxmc".toUpperCase())));
        include("dxsqsddgsgw", map.get("dxsqsddgsgw".toUpperCase())==null?"":String.valueOf(map.get("dxsqsddgsgw".toUpperCase())));
        include("sfmc", map.get("sfmc".toUpperCase())==null?"":String.valueOf(map.get("sfmc".toUpperCase())));
        include("nsrqz", map.get("nsrqz".toUpperCase())==null?"":String.valueOf(map.get("nsrqz".toUpperCase())));
        include("slhdrqz", map.get("slhdrqz".toUpperCase())==null?"":String.valueOf(map.get("slhdrqz".toUpperCase())));
        include("slhdrqzmc", map.get("slhdrqzmc".toUpperCase())==null?"":String.valueOf(map.get("slhdrqzmc".toUpperCase())));
    }
    /**
     * 用数量核定
     * @param svo
     */
    public void doYslhd(YslhdVO svo) {
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        log.debug("this.getUserPrincipal().getUserCode()" + this.getUserPrincipal().getUserCode());
        svo.setShrdm(this.getUserPrincipal().getUserCode());
        param.put("svo", svo);
        mapper.update("com.xasw.yslhd.YslhdsMapper.yslhd", param);
        includeJson("核定完成");
    }




}

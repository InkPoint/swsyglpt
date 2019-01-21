package com.xasw.skxx.services;

import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.observer.upload.UploadSizeLimit;
import br.com.caelum.vraptor.observer.upload.UploadedFile;
import com.google.common.collect.Maps;
import com.ts.core.service.WebServiceSupport;
import com.ts.model.PaginatedVO;
import com.ts.persistence.dao.DelegateMapper;
import com.xasw.skxx.model.SkxxfkVO;
import com.xasw.utils.*;
import com.xasw.yslhd.model.YslbsVO;
import org.slf4j.Logger;

import javax.inject.Inject;
import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.util.*;

/**
 * @author BoYi Sun
 * @date 2018/12/13 11:07
 * @desc  水量征缴核查
 */
@Controller
public class SkxxfkController extends WebServiceSupport {

    @Inject
    private Logger log;
    @Inject
    private CharCloudyUtil utils;
    /**
     * 用水量台账
     */
    public void initSkxxfk() {
        DelegateMapper mapper = getMapper();
        try{
            utils.addCloudydata(mapper, "税款信息反馈", this.getUserPrincipal().getUserCode(), "skxx/skxxfk/initSkxxfk");
        }catch (Exception e){

        }
    }

    /**
     * 税款信息反馈添加
     */
    public void initSkxxAdd() {
        DelegateMapper mapper = getMapper();
        include("dqrq", SwGlUtils.getSqRq(mapper)[2]);
        include("username", this.getUserPrincipal().getUserName());
        include("usercode", this.getUserPrincipal().getUserCode());
    }


    /**
     *税款信息反馈编辑
     */
    public void initSkxxEdit() {
        include("username", this.getUserPrincipal().getUserName());
        include("usercode", this.getUserPrincipal().getUserCode());
    }

    /**
     * 编辑时候反馈税款信息初始化
     * @param hdsbh
     */
    public void doFkxxInit(String hdsbh) {
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("hdsbh", hdsbh);
        List list = new ArrayList();
        List  fkxxList=mapper.selectList("com.xasw.skxx.SkxxfkMapper.fkxxInit", param);
        includeJson(fkxxList);
    }

    /**
     * 反馈信息编辑
     * @param svo
     */
    public void doFkxxEdit(SkxxfkVO svo) {
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("svo", svo);
        mapper.update("com.xasw.skxx.SkxxfkMapper.fkxxEdit", param);
        includeJson("修改成功！");
    }

    /**
     * 新增信息
     *
     * @param svo
     */

    public void newaddition(SkxxfkVO svo) {
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("svo", svo);
        mapper.insert("com.xasw.skxx.SkxxfkMapper.newaddition", param);
        includeJson("反馈成功!");
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

    public void selectAll(SkxxfkVO svo, int limit, int offset, String sort, String order) {
        DelegateMapper delegateMapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("svo", svo);
        PaginatedVO vo = delegateMapper.selectPaginated("com.xasw.skxx.SkxxfkMapper.selectAll", param, offset, limit);
        Map<String, Object> results = new HashMap<String, Object>();
        results.put("total", vo.getPageCount());
        results.put("rows", vo.getRows());
        includeJson(vo);
    }

    /**
     * 信息明细(表)
     *
     * @param svo
     * @param limit
     * @param offset
     * @param sort
     * @param order
     */

    public void viewthedata(SkxxfkVO svo, int limit, int offset, String sort, String order) {
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("svo", svo);
        PaginatedVO alldatas = mapper.selectPaginated("com.xasw.skxx.SkxxfkMapper.querytab", param, offset, limit);
        includeJson(alldatas);
    }


    /**
     * 查看数据
     * @param xxcjid
     */
    public void doQueryTable(String xxcjid) {
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("xxcjid", xxcjid);
        List hdsList = mapper.selectList("com.xasw.skxx.SkxxfkMapper.hdsxx",param);
        includeJson(hdsList);
    }

}

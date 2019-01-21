package com.xasw.yslhd.services;

import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.environment.Environment;
import br.com.caelum.vraptor.observer.upload.UploadSizeLimit;
import br.com.caelum.vraptor.observer.upload.UploadedFile;
import com.google.common.base.Strings;
import com.xasw.utils.*;
import org.slf4j.Logger;
import br.com.caelum.vraptor.Controller;
import com.google.common.collect.Maps;
import com.ts.core.annotation.NoLoginValidate;
import com.ts.core.service.WebServiceSupport;
import com.ts.model.PaginatedVO;
import com.ts.persistence.dao.DelegateMapper;
import com.xasw.yslhd.model.*;
import org.slf4j.Logger;
import org.springframework.http.HttpRequest;

import javax.inject.Inject;
import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;

/**
 * @author PengWen Wang
 * @date 2018/12/13 11:07
 * 水源信息维护
 */
@Controller
public class YslbsController extends  WebServiceSupport {

    @Inject
    private Logger log;

    @Inject
    Environment environment;
    @Inject
    private CharCloudyUtil utils;


    /**
     * 用水户报送初始化
     */
    public void initYslbs() {
        include("usercode", this.getUserPrincipal().getUserCode());
    }

    /**
     * 获取报送记录
     * @param svo
     * @param limit
     * @param offset
     * @param sort
     * @param order
     */

    public void selectAll(YslbsVO svo, int limit, int offset, String sort, String order) {
        DelegateMapper delegateMapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("svo", svo);
        PaginatedVO vo = delegateMapper.selectPaginated("com.xasw.yslhd.YslbsMapper.selectAll", param, offset, limit);
        Map<String, Object> results = new HashMap<String, Object>();
        results.put("total", vo.getPageCount());
        results.put("rows", vo.getRows());
        includeJson(vo);
    }


    /**
     * 获取取水点多在地列表
     */
    public void getSyList() {
        DelegateMapper mapper = getMapper();
        //数据载入数据加载
        Map<String, Object> param = Maps.newHashMap();
        param.put("usercode", this.getUserPrincipal().getUserCode());
        List vo = mapper.selectList("com.xasw.yslhd.YslbsMapper.getSyList",param);
        includeJson(vo);
    }

    /**
     * 用水量报送新增
     */
    public void initYslbsAdd(String sybh){
        String yshzh = this.getUserPrincipal().getUserCode();
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        include("qslssqq", SwGlUtils.getSqRq(mapper)[0]);
        include("qslssqz", SwGlUtils.getSqRq(mapper)[1]);
        include("sxzzgbm", SwGlUtils.getSxzzgnm(mapper)[0]);
        include("sxzzgmc", SwGlUtils.getSxzzgnm(mapper)[1]);
        include("qsjh", SwGlUtils.getQsjh(mapper, this.getUserPrincipal().getUserCode()));
        param.put("yshzh", yshzh);
        param.put("sybh",sybh);
        List listinfo = mapper.selectList("com.xasw.yslhd.YslbsMapper.getBsxx",param);
        Map map = (HashMap)listinfo.get(0);
        include("nsrsbh", map.get("nsrsbh".toUpperCase())==null?"":String.valueOf(map.get("nsrsbh".toUpperCase())));
        include("nsrmc", map.get("nsrmc".toUpperCase())==null?"":String.valueOf(map.get("nsrmc".toUpperCase())));
        include("bsyxm", map.get("bsyxm".toUpperCase())==null?"":String.valueOf(map.get("bsyxm".toUpperCase())));
        include("bsylxdh", map.get("bsylxdh".toUpperCase())==null?"":String.valueOf(map.get("bsylxdh".toUpperCase())));
        include("sylx", map.get("sylx".toUpperCase())==null?"":String.valueOf(map.get("sylx".toUpperCase())));
        include("sylxmc", map.get("sylxmc".toUpperCase())==null?"":String.valueOf(map.get("sylxmc".toUpperCase())));
        include("qyshy", map.get("qyshy".toUpperCase())==null?"":String.valueOf(map.get("qyshy".toUpperCase())));
        include("qyshymc", map.get("qyshymc".toUpperCase())==null?"":String.valueOf(map.get("qyshymc".toUpperCase())));
        include("syqy", map.get("syqy".toUpperCase())==null?"":String.valueOf(map.get("syqy".toUpperCase())));
        include("syqysmc", map.get("syqysmc".toUpperCase())==null?"":String.valueOf(map.get("syqysmc".toUpperCase())));
        include("slhdrqz", map.get("slhdrqz".toUpperCase())==null?"":String.valueOf(map.get("slhdrqz".toUpperCase())));
        include("tsyslb", map.get("tsyslb".toUpperCase())==null?"":String.valueOf(map.get("tsyslb".toUpperCase())));
        include("tsyslbmc", map.get("tsyslbmc".toUpperCase())==null?"":String.valueOf(map.get("tsyslbmc".toUpperCase())));
        include("dxsccqlx", map.get("dxsccqlx".toUpperCase())==null?"":String.valueOf(map.get("dxsccqlx".toUpperCase())));
        include("dxsccqlxmc", map.get("dxsccqlxmc".toUpperCase())==null?"":String.valueOf(map.get("dxsccqlxmc".toUpperCase())));
        include("dxsqsddgsgw", map.get("dxsqsddgsgw".toUpperCase())==null?"":String.valueOf(map.get("dxsqsddgsgw".toUpperCase())));
        include("sfmc", map.get("sfmc".toUpperCase())==null?"":String.valueOf(map.get("sfmc".toUpperCase())));
        include("slhdrqzmc", map.get("slhdrqzmc".toUpperCase())==null?"":String.valueOf(map.get("slhdrqzmc".toUpperCase())));
    }


    /**
     * 获取报送明细
     * @param svo
     * @param limit
     * @param offset
     * @param sort
     * @param order
     */
    public void getBsmx(YslbsVO svo, int limit, int offset, String sort, String order) {
        DelegateMapper delegateMapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("sbry", this.getUserPrincipal().getUserCode());
        PaginatedVO vo = delegateMapper.selectPaginated("com.xasw.yslhd.YslbsMapper.getBsmx", param, offset, limit);
        Map<String, Object> results = new HashMap<String, Object>();
        results.put("total", vo.getPageCount());
        results.put("rows", vo.getRows());
        includeJson(vo);
    }
    /**
     * 新增信息
     *
     * @param datalist
     * @param svo
     */
    public void newaddition(String datalist, YslbsVO svo) {
        List<YslbsVO> list = JsonObjectToJava.getListByArray(YslbsVO.class, datalist);
        log.debug("list+++++"+list);
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        svo.setLrr(this.getUserPrincipal().getUserCode());
        param.put("svo", svo);
        mapper.update("com.xasw.yslhd.YslbsMapper.newaddition", param);
        //查询任务ID
        List<YslbsVO> xxcjlist = mapper.selectList("com.xasw.yslhd.YslbsMapper.getid");
        log.debug("xxcjlist"+xxcjlist.size());
        param.put("xxcjid", ((YslbsVO) xxcjlist.get(0)).getXxcjid());
        param.put("xxmxlist", list);
        //批量插入明细数据
        mapper.insert("com.xasw.yslhd.YslbsMapper.theDetailData", param);
        //删除空数据
        mapper.delete("com.xasw.yslhd.YslbsMapper.deleteNull", param);
        includeJson("报送成功!");
    }



    /**
     *用水量报送编辑
     */
    public void initYslbsEdit(String xxcjid) {
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        include("username", this.getUserPrincipal().getUserName());
        include("usercode", this.getUserPrincipal().getUserCode());
        include("dqrq", SwGlUtils.getSqRq(mapper)[2]);
        param.put("xxcjid",xxcjid);
        List listinfo = mapper.selectList("com.xasw.yslhd.YslbsMapper.getEditData",param);
        Map map = (HashMap)listinfo.get(0);
        include("xxcjid",xxcjid);

        log.debug("qyshy"+String.valueOf(map.get("qyshy".toUpperCase())));

        include("sxzzgbm", map.get("sxzzgbm".toUpperCase()) == null ? "" : String.valueOf(map.get("sxzzgbm".toUpperCase())));
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
     * 获取编辑明细数据
     * @param svo
     * @param limit
     * @param offset
     * @param sort
     * @param order
     */

    public void getEditMx(YslbsVO svo, int limit, int offset, String sort, String order) {
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("svo", svo);
        PaginatedVO vo = mapper.selectPaginated("com.xasw.yslhd.YslbsMapper.getEditMx", param, offset, limit);
        includeJson(vo);
    }


    /**
     * 报送编辑
     * @param datalist
     * @param svo
     */
    public void updateBsEdit(String datalist, YslbsVO svo) {
        List<YslbsVO> list = JsonObjectToJava.getListByArray(YslbsVO.class, datalist);
        log.debug("updateBsEdit+++++"+list);
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        svo.setLrr(this.getUserPrincipal().getUserCode());
        param.put("svo", svo);
        List<YslbsVO> xxcjlist = mapper.selectList("com.xasw.yslhd.YslbsMapper.getid");
        log.debug("xxcjlist"+xxcjlist.size());
        param.put("xxcjid", ((YslbsVO) xxcjlist.get(0)).getXxcjid());
        param.put("xxmxlist", list);
        mapper.update("com.xasw.yslhd.YslbsMapper.updateEdit", param);
        mapper.update("com.xasw.yslhd.YslbsMapper.updateEditMx", param);
        includeJson("编辑成功!");
    }


    /**
     * 查看数据
     * @param xxcjid
     */
    public void doQueryTable(String xxcjid) {
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("xxcjid", xxcjid);
        List hdsList = mapper.selectList("com.xasw.yslhd.YslbsMapper.hdsxx",param);
        includeJson(hdsList);
    }

    /**
     * @param fileinput
     * @throws Exception
     * @author PengWen Wang
     * @date 2018/12/19 11:15
     * 文件上传
     * 大小限制(sizeLImit)不超过100MB  （fileSizeLimit）文件大小不超过50MB
     */
    @UploadSizeLimit(sizeLimit = 100 * 1024 * 1024, fileSizeLimit = 50 * 1024 * 1024)
    public void fileUpload(UploadedFile fileinput) throws Exception {
        String usercode = this.getUserPrincipal().getUserCode();
        String fileuuid   = RandomUUID.getUUIDRandoms();
        File file = new File(this.environment.get("uploadPath") + getDate() + "/" + usercode+"/yslbs"+"/"+fileuuid);
        if (!file.exists() && !file.isDirectory()) {
            file.mkdirs();
        }
        FileOutputStream fos = null;
        try {
            InputStream inputStream = fileinput.getFile();
            fos = FileUtils.instreamTooutputstream(inputStream, file + File.separator + fileinput.getFileName());
            fos.close();
        } catch (NullPointerException e) {
            e.printStackTrace();
        }

        includeJson(getDate() + "/" + usercode+"/yslbs"+"/"+fileuuid);
    }

    /**
     * 查看明细图片预览
     * @param mxxh
     */
    public void getPicView(String mxxh){
        DelegateMapper mapper = getMapper();
        Map<String, Object> param = Maps.newHashMap();
        param.put("mxxh", mxxh);
        List hdsList = mapper.selectList("com.xasw.yslhd.YslbsMapper.getPicView",param);
        includeJson(hdsList);
    }


    /**
     * 获得当前年月日
     * @return
     */
    public static String getDate() {
        String year = "";
        String month = "";
        String day = "";
        Calendar now = Calendar.getInstance();
        year = String.valueOf(now.get(Calendar.YEAR));
        month = String.valueOf(now.get(Calendar.MONTH) + 1);
        day = String.valueOf(now.get(Calendar.DAY_OF_MONTH));
        return year + "-" + month + "-" + day;
    }

}

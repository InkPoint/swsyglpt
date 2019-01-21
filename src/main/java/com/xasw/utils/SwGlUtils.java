package com.xasw.utils;

import com.google.common.collect.Maps;
import com.ts.persistence.dao.DelegateMapper;
import org.slf4j.Logger;

import javax.inject.Inject;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


/**
 * Created with IntelliJ IDEA.
 * User: Boyi Sun
 * Date: 19-01-09
 * Time: PM 16:19
 */
public class SwGlUtils {
    /**
     * 获取属期日期
     * @param mapper
     * @return
     */
    public static String[] getSqRq(DelegateMapper mapper){
        List listinfo = mapper.selectList("com.xasw.utils.dao.UtilsMapper.getSqRq");
        Map map =(HashMap)listinfo.get(0);
        String data[] = {String.valueOf(map.get("SSQQ")),String.valueOf(map.get("SSQZ")),String.valueOf(map.get("DQRQ"))};
        return  data;
    }

    /**
     * 获取水行政主管部门
     * @param mapper
     * @return
     */
    public static String[] getSxzzgnm(DelegateMapper mapper){
        List listinfo = mapper.selectList("com.xasw.utils.dao.UtilsMapper.getSxzzgbm");
        Map map =(HashMap)listinfo.get(0);
        String data[] = {String.valueOf(map.get("SXZZGBM_DM")),String.valueOf(map.get("SXZZGBMMC"))};
        return  data;
    }

    /**
     * 获取取水计划
     * @param mapper:
     * @param bsry:报送人员
     * @return
     */
    public static String getQsjh(DelegateMapper mapper,String bsry){
        System.out.println("bsry"+bsry);
        Map<String, Object> param = Maps.newHashMap();
        param.put("bsry",bsry);
        List listinfo = mapper.selectList("com.xasw.utils.dao.UtilsMapper.getQsjh",param);
        Map map =(HashMap)listinfo.get(0);
        return  String.valueOf(map.get("jhz".toUpperCase()));
    }

}

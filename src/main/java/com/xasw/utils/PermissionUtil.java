package com.xasw.utils;

import com.ptf.exception.CommandException;
import com.ts.persistence.dao.DelegateMapper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by win7 on 2018-12-18.
 */
public class PermissionUtil {

    //检测用户岗位权限
    //userId:用户id
    //gwdms：岗位组 eg： "[001][002]"
    //mapper 数据连接
    public static boolean checkUserGw(String userId,String[] gwdms,DelegateMapper mapper){
        Map<String, Object> mp = new HashMap<String, Object>();
        mp.put("userid", userId);
        String gwdmStr="";
        for(int i=0;i<gwdms.length;i++){
            gwdmStr+="["+gwdms[i]+"]";
        }
        mp.put("gwdmstr",gwdmStr);
        List vo = mapper.selectList("com.xasw.utils.dao.UtilsMapper.checkUserGw",mp);
        if (vo==null||vo.size()<1){
            return false;
        }else{
            return true;
        }

    }

    //检测用户访问权限
    //userId:用户id
    //uri：访问地址
    //mapper 数据连接
    public static boolean checkPemission(String userId,String uri,DelegateMapper mapper){
        Map<String, Object> mp = new HashMap<String, Object>();
        mp.put("userid", userId);
        mp.put("uri",uri);
        List vo = mapper.selectList("com.xasw.utils.dao.UtilsMapper.checkPemission",mp);
        if (vo==null||vo.size()<1){
            return false;
        }else{
            return true;
        }

    }
}

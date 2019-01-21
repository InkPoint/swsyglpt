package com.xasw.main.services;

import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.environment.Environment;
import com.alibaba.fastjson.JSON;
import com.ts.core.annotation.NoLoginValidate;
import com.ts.core.service.WebServiceSupport;
import com.ts.model.PaginatedVO;
import com.ts.persistence.dao.DelegateMapper;
import com.xasw.main.model.BaseChartVo;
import com.xasw.utils.EchartsUtils;
import org.slf4j.Logger;

import javax.inject.Inject;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created with IntelliJ IDEA.
 * User: weijunyuan
 * Date: 2017-10-24
 * 首页消息提示查询
 * user controller
 */
@Controller
public class MainsController extends WebServiceSupport {
    @Inject
    private Logger log;

    @Inject
    Environment environment;

    //    获取权限控制数据
    public void permissionInfo(String mkid){
        DelegateMapper delegateMapper = getMapper();
        Map<String,Object> mm=new HashMap<>();
        Map<String,Object> results=new HashMap<>();
        mm.put("mkid",mkid);
        mm.put("usercode",this.getUserPrincipal().getUserCode());
        String orgid =this.getUserPrincipal().getOrgId()==null?"":this.getUserPrincipal().getOrgId();
        mm.put("orgid",orgid);
        //查询权限数据
        List permissions=delegateMapper.selectList("com.xasw.main.dao.MainsMapper.permissions",mm);
        includeJson(permissions);
    }

    // 主菜单查询
    public void querymodels(){
        DelegateMapper mapper = getMapper();
        Map<String, Object> mp = new HashMap<String, Object>();
        mp.put("usercode", this.getUserPrincipal().getUserCode());
        String orgid =this.getUserPrincipal().getOrgId()==null?"":this.getUserPrincipal().getOrgId();
        mp.put("orgid",orgid);
        List vo = mapper.selectList("com.xasw.main.dao.MainsMapper.querymodels",mp);
        includeJson(vo);
    }
}

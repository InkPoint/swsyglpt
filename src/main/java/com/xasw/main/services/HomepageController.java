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
 * 首页数据获取
 * Modifier: PengWen Wang
 * Date: 2018-5-16
 */
@Controller
public class HomepageController extends WebServiceSupport {
    @Inject
    private Logger log;

    @Inject
    Environment environment;



    /**
     * 当前登录的用户
     */
    @NoLoginValidate
    public void currentUserName() {
        String usercode=this.getUserPrincipal().getUserCode();;
        Map<String,Object> mm=new HashMap<String,Object>();
        mm.put("username",this.getUserPrincipal().getUserName());
        mm.put("orgname",this.getUserPrincipal().getOrgName());
        String[] aa= usercode.split("pt");
        if(aa.length==2){
            mm.put("upflages","Y");
        }else{
            mm.put("upflages","N");
        }
        mm.put("usercode",this.getUserPrincipal().getOrgName());
        includeJson(mm);
    }

}

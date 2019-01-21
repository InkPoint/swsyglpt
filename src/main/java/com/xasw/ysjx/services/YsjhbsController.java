package com.xasw.ysjx.services;

import br.com.caelum.vraptor.Controller;
import com.google.common.collect.Maps;
import com.ts.core.service.WebServiceSupport;
import com.ts.model.PaginatedVO;
import com.ts.persistence.dao.DelegateMapper;
import com.xasw.utils.CharCloudyUtil;
import com.xasw.utils.JsonObjectToJava;
import com.xasw.yslhd.model.YslbsVO;
import org.slf4j.Logger;

import javax.inject.Inject;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @desc:用水计划报送
 *
 */
@Controller
public class YsjhbsController extends  WebServiceSupport {

    @Inject
    private Logger log;


    @Inject
    private CharCloudyUtil utils;

    public void initYsjhsh() {
    }

}

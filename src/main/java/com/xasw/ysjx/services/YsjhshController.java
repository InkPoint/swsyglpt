package com.xasw.ysjx.services;

import br.com.caelum.vraptor.Controller;
import com.ts.core.service.WebServiceSupport;
import com.xasw.utils.CharCloudyUtil;
import org.slf4j.Logger;

import javax.inject.Inject;

/**
 * @desc:用水计划审核
 *
 */
@Controller
public class YsjhshController extends  WebServiceSupport {

    @Inject
    private Logger log;


    @Inject
    private CharCloudyUtil utils;

    public void initYsjhsh() {
    }

}

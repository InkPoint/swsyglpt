package com.xasw.common.services;

import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Path;
import br.com.caelum.vraptor.environment.Environment;
import br.com.caelum.vraptor.observer.download.Download;
import br.com.caelum.vraptor.observer.download.FileDownload;
import com.ts.core.annotation.NoLoginValidate;
import com.ts.core.service.WebServiceSupport;
import org.slf4j.Logger;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

@Controller
public class DownController  extends WebServiceSupport {
    @Inject
    private Logger log;
    @Inject
    HttpServletRequest httpServletRequest;
    @Inject
    HttpServletResponse httpServletResponse;
    @Inject
    Environment environment;
    @Path("down/*")
    @NoLoginValidate
    public Download down() throws IOException {
        String imagesPath=httpServletRequest.getServletPath().substring(6);
        log.debug("imagesPath==>>"+imagesPath);
        File file = new File(this.environment.get("uploadPath") + imagesPath);
        if (!file.exists()){
            httpServletResponse.sendError(404);
        }else{
            String contentType=Files.probeContentType(Paths.get(this.environment.get("uploadPath")  + imagesPath));
            return new FileDownload(file, contentType);
        }
        return null;
    }
}

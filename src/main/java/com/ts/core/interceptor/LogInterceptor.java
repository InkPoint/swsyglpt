//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package com.ts.core.interceptor;

import br.com.caelum.vraptor.Result;
import com.ts.core.UserPrincipal;
import com.ts.core.annotation.Logable;
import javax.inject.Inject;
import javax.interceptor.AroundInvoke;
import javax.interceptor.Interceptor;
import javax.interceptor.InvocationContext;
import javax.servlet.http.HttpServletRequest;

import com.ts.persistence.dao.DelegateMapper;
import com.xasw.utils.PermissionUtil;
import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;

import java.util.ArrayList;

@Interceptor
@Logable
public class LogInterceptor {
    @Inject
    Logger log;
    @Inject
    HttpServletRequest request;
    @Inject
    Result result;
    @Inject
    private SqlSession sqlSession;
    protected DelegateMapper getMapper() {
        return new DelegateMapper(this.sqlSession);
    }
    public LogInterceptor() {
    }

    @AroundInvoke
    public Object managerTransaction(InvocationContext ctx) throws Exception {
        String uri = request.getRequestURI();
        UserPrincipal principal = (UserPrincipal)request.getSession().getAttribute("aclSessionInfo");
        boolean checkPemission=false;
        if(principal!=null){
            ArrayList<String> urilist = new ArrayList<String>();
            urilist.add("/acl/user/checkcode");
            urilist.add("/acl/user/validate");
            urilist.add("/main/homepage/currentUserName");
            urilist.add("/main/mains/querymodels");
            urilist.add("/main/mains/permissionInfo");
            urilist.add("/acl/user/modifyPassword");
            urilist.add("/acl/user/savePassword");
            urilist.add("/login");
            urilist.add("/logout");

            if(urilist.contains(uri)||"admin".equals(principal.getUserCode())){
                checkPemission=true;
            }else{
                DelegateMapper mapper=getMapper();
                checkPemission = PermissionUtil.checkPemission(principal.getUserId(), uri, mapper);
            }
            checkPemission=true;
        }

        if(principal==null||checkPemission){
            this.log.info(" ==> 请求的Uri为 " + this.request.getRequestURI());
            String clazzName = ctx.getTarget().getClass().getSimpleName();
            clazzName = clazzName.substring(0, clazzName.indexOf("$"));
            String methodName = clazzName + "." + ctx.getMethod().getName() + "()";
            this.log.info(" ==> 开始执行方法 " + methodName);
            Object obj = ctx.proceed();
            this.log.info(" ==> 方法 " + methodName + " 执行结束.");
            this.result.include("request_menu_title", this.request.getParameter("request_menu_title"));
            return obj;
        }else {
            this.log.error("对不起，您无权访问：["+uri+"]");
            this.request.setAttribute("errormsg",uri);
            this.result.forwardTo("/notpemission.jsp");
            return "对不起，您无权访问！";
        }
    }
}

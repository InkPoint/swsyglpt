//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package com.ts.acl.services;

import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Path;
import br.com.caelum.vraptor.environment.Environment;
import br.com.caelum.vraptor.observer.download.Download;
import br.com.caelum.vraptor.observer.download.FileDownload;
import br.com.caelum.vraptor.observer.upload.UploadSizeLimit;
import br.com.caelum.vraptor.observer.upload.UploadedFile;
import com.google.common.base.Strings;
import com.google.common.collect.Lists;
import com.google.common.collect.Maps;
import com.google.common.io.Files;
import com.ts.acl.dao.AclOrganizeMapper;
import com.ts.acl.dao.AclUserMapper;
import com.ts.acl.model.AclOrganize;
import com.ts.acl.model.AclUser;
import com.ts.acl.model.AclUserCriteria;
import com.ts.acl.util.ByteInputStream;
import com.ts.acl.util.MenuUtil;
import com.ts.acl.util.NavMenu;
import com.ts.core.UserPrincipal;
import com.ts.core.annotation.NoLoginValidate;
import com.ts.core.service.WebServiceSupport;
import com.ts.model.PaginatedVO;
import com.ts.model.ResultMsg;
import com.ts.persistence.dao.DelegateMapper;
import com.ts.startup.mapping.upc.agent.UpcConfigManagerAgent;
import com.ts.startup.mapping.upc.vo.Menu;
import com.ts.startup.mapping.upc.vo.MenuItem;
import com.ts.util.uuid.UUID;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import javax.inject.Inject;
import org.slf4j.Logger;

@Controller
public class UserController extends WebServiceSupport {
    @Inject
    private Logger log;
    @Inject
    Environment environment;

    public UserController() {
    }

    public void manager() {
    }

    public void initView(String uuid) {
        AclUser dvo = new AclUser();
        if (!Strings.isNullOrEmpty(uuid)) {
            AclUserMapper mp = (AclUserMapper)this.getMapper(AclUserMapper.class);
            dvo = mp.selectByPrimaryKey(uuid);
        }

        this.include("dvo", dvo);
    }

    public void list(AclUser svo, int page, int rows, String sort, String order) {
        if (svo == null) {
            svo = new AclUser();
        }

        DelegateMapper delegateMapper = (DelegateMapper)this.getMapper();
        this.log.debug("===== svo {}", svo);
        HashMap param = Maps.newHashMap();
        param.put("svo", svo);
        PaginatedVO vo = delegateMapper.selectPaginated("com.ts.acl.dao.aclMapper.getUsers", param, page, rows);
        this.log.debug("PaginatedVO {}: {}", page, vo);
        this.includeJson(vo);
    }

    public void add(AclUser dvo) {
        AclUserMapper mp = (AclUserMapper)this.getMapper(AclUserMapper.class);
        AclUserCriteria cri = new AclUserCriteria();
        cri.createCriteria().andUserCodeEqualTo(dvo.getUserCode());
        int count = mp.countByExample(cri);
        if (count > 0) {
            this.includeJson(new ResultMsg(-1, "用户保存失败,用户代码已存在.", (Object)null));
        } else {
            dvo.setUserId(UUID.generateUUID());
            dvo.setStatusFlag("normal");
            mp.insert(dvo);
            this.includeJson(new ResultMsg(0, "保存用户成功", dvo));
        }

    }

    public void modify(AclUser dvo) {
        AclUserMapper mp = (AclUserMapper)this.getMapper(AclUserMapper.class);
        mp.updateByPrimaryKeySelective(dvo);
        this.includeJson(new ResultMsg(0, "保存用户成功", dvo));
    }

    public void delete(String uuid) {
        AclUserMapper mp = (AclUserMapper)this.getMapper(AclUserMapper.class);
        AclUser dvo = mp.selectByPrimaryKey(uuid);
        dvo.setStatusFlag("deleted");
        mp.updateByPrimaryKeySelective(dvo);
        this.includeJson(new ResultMsg(0, "用户删除成功", (Object)null));
    }

    public void modifyPassword(String userId) {
        AclUserMapper mapper = (AclUserMapper)this.getMapper(AclUserMapper.class);
        AclUser dvo = mapper.selectByPrimaryKey(this.getUserPrincipal().getUserId());
        this.include("dvo", dvo);
    }

    public void savePassword(String oldPassword,String userPassword) {
        DelegateMapper mapperold = (DelegateMapper)this.getMapper();
        HashMap userMap = Maps.newHashMap();
        userMap.put("userCode", this.getUserPrincipal().getUserCode());
        userMap.put("passWord", oldPassword);
        List list = mapperold.selectList("com.ts.acl.dao.aclMapper.getUsersByUserCodeAndPassWord", userMap);
        if(list.size()==1){
            AclUserMapper mapper = (AclUserMapper)this.getMapper(AclUserMapper.class);
            AclUser dvo = mapper.selectByPrimaryKey(this.getUserPrincipal().getUserId());
            dvo.setUserPassword(userPassword);
            mapper.updateByPrimaryKeySelective(dvo);
            this.includeJson(new ResultMsg(-1, "用户密码修改成功!", (Object)null));
        }else{
            this.includeJson(new ResultMsg(-1, "原用户密码不正确!", (Object)null));
        }
    }

    public void initImage(String userId) {
        AclUserMapper mapper = (AclUserMapper)this.getMapper(AclUserMapper.class);
        AclUser dvo = mapper.selectByPrimaryKey(userId);
        this.log.debug("============aclSessionInfo={}", "aclSessionInfo");
        UserPrincipal principal = (UserPrincipal)this.getSession().getAttribute("aclSessionInfo");
        this.log.debug("principal=={}", principal);
        this.include("dvo", dvo);
    }

    public void menu() {
        ArrayList menus = Lists.newArrayList();
        StringBuffer sb = new StringBuffer();
        this.log.debug("====getsession===");
        UserPrincipal principal = this.getUserPrincipal();
        if (this.isAdminUser(principal.getUserId())) {
            UpcConfigManagerAgent mapper = new UpcConfigManagerAgent();
            List param = mapper.getAdminMenus();
            Iterator list = param.iterator();

            while(list.hasNext()) {
                Menu menuList = (Menu)list.next();
                NavMenu i$ = new NavMenu();
                i$.setTitle(menuList.getName());
                i$.setLeftIconClass("icon-rocket");
                i$.setRightIconClass("arrow ");
                i$.setClickEvent("");
                Iterator menu = menuList.getItemList().iterator();

                while(menu.hasNext()) {
                    MenuItem item = (MenuItem)menu.next();
                    NavMenu subMenu = new NavMenu();
                    subMenu.setTitle(item.getName());
                    subMenu.setLeftIconClass("icon-doc");
                    subMenu.setClickEvent("menuClick('" + item.getName() + "', '" + item.getUri() + "')");
                    i$.getSubNavMenu().add(subMenu);
                }

                sb.append(i$.toString());
            }
        } else {
            DelegateMapper mapper1 = (DelegateMapper)this.getMapper();
            HashMap param1 = Maps.newHashMap();
            param1.put("userId", principal.getUserId());
            param1.put("orgId", principal.getOrgId());
            List list1 = mapper1.selectList("com.ts.acl.dao.rootMapper.getUserMenus", param1);
            List menuList1 = MenuUtil.getFirstLevelMenu(list1);
            Iterator i$1 = menuList1.iterator();

            while(i$1.hasNext()) {
                NavMenu menu1 = (NavMenu)i$1.next();
                sb.append(menu1.toString());
            }
        }

        this.log.info(sb.toString());
        this.include("menus", sb.toString());
    }

    public void cssMenu() {
        this.menu();
    }

    public void mutiLevelMenu() {
        this.menu();
    }
    @NoLoginValidate
    public void checkcode() {

    }

    public void clearCheckCode() {
        this.getRequest().getSession().setAttribute("CHECK_CODE_LOGIN",null);
    }
    @NoLoginValidate
    public void validate(String userCode, String password, String orgId, String checkcode) {
        DelegateMapper mapper = (DelegateMapper)this.getMapper();
        HashMap userMap = Maps.newHashMap();
        String session_checkcode = (String)this.getRequest().getSession().getAttribute("CHECK_CODE_LOGIN");
        if(Strings.isNullOrEmpty(session_checkcode)||!session_checkcode.equals(checkcode)){
            clearCheckCode();
            this.includeJson(new ResultMsg(-1, "验证码错误！", (Object)null));
            return;
        }
        userMap.put("userCode", userCode);
        userMap.put("passWord", password);
        List list = mapper.selectList("com.ts.acl.dao.aclMapper.getUsersByUserCodeAndPassWord", userMap);
        if (list.size() == 0) {
            clearCheckCode();
            this.includeJson(new ResultMsg(-1, "用户名或密码错误", (Object)null));
        } else {
            AclUser user = (AclUser)list.get(0);
            if ("suspend".equals(user.getStatusFlag())) {
                clearCheckCode();
                this.includeJson(new ResultMsg(-2, "用户已挂起,请联系系统管理员", (Object)null));
            } else if ("deleted".equals(user.getStatusFlag())) {
                clearCheckCode();
                this.includeJson(new ResultMsg(-3, "用户已删除,请联系系统管理员", (Object)null));
            } else if (this.isAdminUser(user.getUserId())) {
                clearCheckCode();
                this.includeJson(new ResultMsg(0, "系统管理员用户,无需选择机构", (Object)null));
                this.initUserSession(user, new AclOrganize());
            } else if (Strings.isNullOrEmpty(orgId)) {
                DelegateMapper organizeMapper = (DelegateMapper)this.getMapper();
                HashMap organize = Maps.newHashMap();
                organize.put("userId", user.getUserId());
                List organizeDomainList = organizeMapper.selectList("com.ts.acl.dao.aclMapper.getUserOrganizes", organize);
                this.log.debug("organize size ==>{}", organizeDomainList.size());
                if (organizeDomainList.size() == 0) {
                    clearCheckCode();
                    this.includeJson(new ResultMsg(-1, "用户未配置机构", (Object)null));
                } else if (organizeDomainList.size() == 1) {
                    clearCheckCode();
                    AclOrganize org = (AclOrganize)organizeDomainList.get(0);
                    this.initUserSession(user, org);
                    this.includeJson(new ResultMsg(0, "用户只有唯一的机构", (Object)null));
                } else {
                    this.includeJson(organizeDomainList);
                }
            } else {
                clearCheckCode();
                AclOrganizeMapper organizeMapper1 = (AclOrganizeMapper)this.getMapper(AclOrganizeMapper.class);
                AclOrganize organize1 = organizeMapper1.selectByPrimaryKey(orgId);
                this.initUserSession(user, organize1);
                this.includeJson(new ResultMsg(0, "用户已选择机构", (Object)null));
            }
        }

    }

    private void initUserSession(AclUser user, AclOrganize org) {
        UserPrincipal principal = new UserPrincipal();
        principal.setUserId(user.getUserId());
        principal.setUserCode(user.getUserCode());
        principal.setUserName(user.getUserName());
        principal.setOrgId(org.getOrgId());
        principal.setOrgCode(org.getOrgCode());
        principal.setOrgName(org.getOrgName());
        this.log.debug("=====set session========");
        this.getSession().setAttribute("aclSessionInfo", principal);
    }

    private boolean isAdminUser(String userId) {
        AclUserMapper mapper = (AclUserMapper)this.getMapper(AclUserMapper.class);
        AclUser user = mapper.selectByPrimaryKey(userId);
        return "admin".equals(user.getUserType());
    }

    @Path({"/login"})
    @NoLoginValidate
    public void login() {
    }

    @Path({"/logout"})
    @NoLoginValidate
    public void logout() {
        try{
            this.getSession().setAttribute("aclSessionInfo", (Object)null);
            this.getSession().invalidate();
        }catch (Exception e){
//            e.printStackTrace();
        }
//        this.includeJson(new ResultMsg(0, "用户成功退出", (Object)null));
        this.redirectTo("/login");
    }

    public void getUserTypeList() {
        ArrayList list = Lists.newArrayList();
        AclUser t1 = new AclUser();
        t1.setUserId("admin");
        t1.setUserType("系统管理员");
        list.add(t1);
        AclUser t2 = new AclUser();
        t2.setUserId("general");
        t2.setUserType("普通用户");
        list.add(t2);
        this.includeJson(list);
    }

    @UploadSizeLimit(
            sizeLimit = 41943040L,
            fileSizeLimit = 10485760L
    )
    @NoLoginValidate
    public void uploadImage(UploadedFile uploadedFile, String userId) {
        String savePath = this.environment.get("basePath") + "/user/image/";
        File f = new File(savePath);
        if (!f.exists()) {
            f.mkdirs();
        }

        this.log.debug("====>uploadImage");
        this.log.debug("====>basePath={}", savePath);
        if (uploadedFile != null) {
            this.log.debug("===>file is {}", uploadedFile.getFileName());
            String fileName = uploadedFile.getFileName();
            String extName = "";
            if (fileName.lastIndexOf(".") >= 0) {
                extName = fileName.substring(fileName.lastIndexOf("."));
            }

            String fullName = savePath + userId + extName;

            try {
                this.log.debug("==>文件{}保存成功!", fullName);
                Files.write(ByteInputStream.input2byte(uploadedFile.getFile()), new File(fullName));
                AclUserMapper e = (AclUserMapper)this.getMapper(AclUserMapper.class);
                AclUser user = e.selectByPrimaryKey(userId);
                user.setUserPhoto(extName);
                e.updateByPrimaryKeySelective(user);
            } catch (IOException var10) {
                var10.printStackTrace();
            }
        }

        this.includeJson(new ResultMsg(0, "文件上传成功", (Object)null));
    }

    public Download downloadImage(String userId) throws FileNotFoundException {
        this.log.debug("===>downloadImage");
        String savePath = this.environment.get("basePath") + "/user/image/";
        AclUserMapper mapper = (AclUserMapper)this.getMapper(AclUserMapper.class);
        AclUser user = mapper.selectByPrimaryKey(userId);
        String fullName = savePath + user.getUserId() + user.getUserPhoto();
        this.log.debug("===>file is {}", fullName);
        File file = new File(fullName);
        String contentType = "image/jpg";
        return new FileDownload(file, contentType, user.getUserId());
    }
}

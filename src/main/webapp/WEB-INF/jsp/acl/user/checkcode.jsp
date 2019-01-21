<%@ page contentType="text/html;charset=GB2312" language="java" %>
<%@ page import="java.awt.image.BufferedImage" %>
<%@ page import="javax.imageio.ImageIO" %>
<%@ page import="com.xasw.utils.CheckCodeUtil"%>
<%@ page import="java.io.OutputStream"%>
<%
   //设置页面不缓存
    out.clear();
    response.setHeader("Pragma", "No-cache");
    response.setHeader("Cache-Control", "no-cache");
    response.setDateHeader("Expires", 0);
    response.setContentType("image/png");
    BufferedImage img = CheckCodeUtil.getCheckImg(session,0);
    //输出图象到页面
    if(img!=null){
        OutputStream rp = response.getOutputStream();
        try{
            ImageIO.write(img, "PNG", rp);
        }finally{
            rp.close();
            img.getGraphics().finalize();
            img = null;
        }
    }
%>
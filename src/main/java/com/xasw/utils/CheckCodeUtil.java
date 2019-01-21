package com.xasw.utils;


import javax.servlet.http.HttpSession;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.util.Random;

/**
 * Created by IntelliJ IDEA.
 * User: Administrator
 * Date: 2009-11-4
 * Time: 8:57:56
 * 生成校验码
 * To change this template use File | Settings | File Templates.
 */
public class CheckCodeUtil {
    private final static String[] baselist = new String[]{
            "0123456789"
            , "abcdefghijklmnopqrstuvwxyz"
            , "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            , "一二三四五六七八九十"
            , "国庆节"
            , "年月日时分秒"
    };
    //备选字体
    private final static String[] fontTypeName = {"新宋体", "宋体", "新宋体", "楷体_GB2312", "仿宋_GB2312", "宋体", "新細明體"};
    private final static Font[] fontTypes = new Font[fontTypeName.length];

    static {
        for (int i = 0; i < fontTypeName.length; i++) {
            fontTypes[i] = null;
            fontTypes[i] = new Font(fontTypeName[i], Font.BOLD, 16);
        }
    }

    //生成随机颜色
    public static Color getRandColor(Random random, int fc, int bc) {
        if (fc > 255) fc = 255;
        if (bc > 255) bc = 255;
        int r = fc + random.nextInt(bc - fc);
        int g = fc + random.nextInt(bc - fc);
        int b = fc + random.nextInt(bc - fc);
        return new Color(r, g, b);
    }

    //生成随机颜色

    public static String getRandCode(int level//级别：字符范围
            , int codelength  //长度：结果长度
            , Random random
    ) {
        //随机生成20为字串
        if (level < 0)
            level = 0;
        if (level >= baselist.length)
            level = baselist.length - 1;
        String base = "";
        for (int i = 0; i <= level; i++) {
            base += baselist[i];
        }
        //备选汉字的长度
        int length = base.length();
        String sRand = "";
        for (int i = 0; i < codelength; i++) {
            int start = random.nextInt(length);
            sRand += base.substring(start, start + 1);
        }
        return sRand;
    }

    //生成随机颜色
    public static BufferedImage getCheckImg(HttpSession session, int basesize) {
        return getCheckImg(session, "CHECK_CODE_LOGIN", basesize);
    }

    //生成随机颜色,方法重载
    public static BufferedImage getCheckImg(HttpSession session, String codetype, int basesize) {
        //创建随机类的实例
        int checkCode = 4;
        Random random = new Random();
        if (basesize < 0) {
            basesize = 0;
        } else if (basesize > baselist.length) {
            basesize = baselist.length - 1;
        }
        //生成验证码
        String sRand = getRandCode(basesize, checkCode, random);
        /// 生成4位 数字或字母（区分大小写）2013-1-24
        /// String sRand = getRandCode(2, checkCode, random);
        //log.debug("============sRand"+sRand);
        session.setAttribute(codetype, sRand);

        // 设置图片的长宽
        int width = 17 * checkCode, height = 20;
        //创建内存图像
        BufferedImage image = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
        // 获取图形上下文
        Graphics g = image.getGraphics();
        // 设定图像背景色(因为是做背景，所以偏淡)
        g.setColor(getRandColor(random, 200, 250));
        g.fillRect(0, 0, width, height);
        // GraphicsEnvironment env = GraphicsEnvironment.getLocalGraphicsEnvironment();
        // Font [] fonts = env.getAllFonts();//从系统中获得所有的字体
        int fontTypesLength = fontTypes.length;
        //在图片背景上增加噪点
        g.setColor(getRandColor(random, 160, 200));
        g.setFont(new Font("Times New Roman", Font.PLAIN, 14));
        for (int i = 0; i < checkCode; i++) {
            g.drawString("*********************************************", 0, 5 * (i + 2));
        }
        //生成验证码
        String rand;
        for (int i = 0; i < checkCode; i++) {
            rand = sRand.substring(i, i + 1);
            //设置字体的颜色
            g.setColor(getRandColor(random, 9, 150));
            //设置字体
            g.setFont(fontTypes[random.nextInt(fontTypesLength)]);
            //将此汉字画到图片上
            g.drawString(rand, 15 * i + 6 + random.nextInt(6), 16);
        }
        g.dispose();
        random = null;
        g = null;
        return image;
    }
}
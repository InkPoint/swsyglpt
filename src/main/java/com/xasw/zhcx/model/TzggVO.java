package com.xasw.zhcx.model;

import com.ts.model.BaseVO;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

/**
 * @author PengWen Wang
 * @date 2018/12/29 9:00
 * 通知公告
 */
public class TzggVO extends BaseVO {

    private String id;
    private String text;
    private String tzggxh;
    private String wzbt;
    private String wzjj;
    private String wznr;
    private String zz;
    private String fbr;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date fbsj;
    private String fbzt;
    private String fjurl;
    private String xgr;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date xgsj;
    private String yxbz;
    private String fbztmc;
    private String author;
    private String username;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getTzggxh() {
        return tzggxh;
    }

    public void setTzggxh(String tzggxh) {
        this.tzggxh = tzggxh;
    }

    public String getWzbt() {
        return wzbt;
    }

    public void setWzbt(String wzbt) {
        this.wzbt = wzbt;
    }

    public String getWzjj() {
        return wzjj;
    }

    public void setWzjj(String wzjj) {
        this.wzjj = wzjj;
    }

    public String getWznr() {
        return wznr;
    }

    public void setWznr(String wznr) {
        this.wznr = wznr;
    }

    public String getZz() {
        return zz;
    }

    public void setZz(String zz) {
        this.zz = zz;
    }

    public String getFbr() {
        return fbr;
    }

    public void setFbr(String fbr) {
        this.fbr = fbr;
    }

    public Date getFbsj() {
        return fbsj;
    }

    public void setFbsj(Date fbsj) {
        this.fbsj = fbsj;
    }

    public String getFbzt() {
        return fbzt;
    }

    public void setFbzt(String fbzt) {
        this.fbzt = fbzt;
    }

    public String getFjurl() {
        return fjurl;
    }

    public void setFjurl(String fjurl) {
        this.fjurl = fjurl;
    }

    public String getXgr() {
        return xgr;
    }

    public void setXgr(String xgr) {
        this.xgr = xgr;
    }

    public Date getXgsj() {
        return xgsj;
    }

    public void setXgsj(Date xgsj) {
        this.xgsj = xgsj;
    }

    public String getYxbz() {
        return yxbz;
    }

    public void setYxbz(String yxbz) {
        this.yxbz = yxbz;
    }

    public String getFbztmc() {
        return fbztmc;
    }

    public void setFbztmc(String fbztmc) {
        this.fbztmc = fbztmc;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}

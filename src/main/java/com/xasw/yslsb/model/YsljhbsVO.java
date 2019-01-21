package com.xasw.yslsb.model;

import com.ts.model.BaseVO;
import org.springframework.format.annotation.DateTimeFormat;

/**
 * @author PengWen Wang
 * @date 2018/12/25 10:40
 * 用水量计划报送
 */
public class YsljhbsVO extends BaseVO {
    private String id;
    private String text;
    private String ysljhxh;
    private String ysljhz;
    private String yslshz;
    private String sbry_dm;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private String sbrq;
    private String sbnd;
    private String shjg_dm;
    private String shry_dm;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private String shrq;
    private String shzt_dm;
    private String yxbz;

    private String ysljhmxxh;
    private double jan;
    private double feb;
    private double mar;
    private double apr;
    private double may;
    private double jun;
    private double jul;
    private double aug;
    private double sept;
    private double oct;
    private double nov;
    private double dec;
    private String yshzh;
    private String sydjxh;

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

    public String getYsljhxh() {
        return ysljhxh;
    }

    public void setYsljhxh(String ysljhxh) {
        this.ysljhxh = ysljhxh;
    }

    public String getYsljhz() {
        return ysljhz;
    }

    public void setYsljhz(String ysljhz) {
        this.ysljhz = ysljhz;
    }

    public String getYslshz() {
        return yslshz;
    }

    public void setYslshz(String yslshz) {
        this.yslshz = yslshz;
    }

    public String getSbry_dm() {
        return sbry_dm;
    }

    public void setSbry_dm(String sbry_dm) {
        this.sbry_dm = sbry_dm;
    }

    public String getSbrq() {
        return sbrq;
    }

    public void setSbrq(String sbrq) {
        this.sbrq = sbrq;
    }

    public String getSbnd() {
        return sbnd;
    }

    public void setSbnd(String sbnd) {
        this.sbnd = sbnd;
    }

    public String getShjg_dm() {
        return shjg_dm;
    }

    public void setShjg_dm(String shjg_dm) {
        this.shjg_dm = shjg_dm;
    }

    public String getShry_dm() {
        return shry_dm;
    }

    public void setShry_dm(String shry_dm) {
        this.shry_dm = shry_dm;
    }

    public String getShrq() {
        return shrq;
    }

    public void setShrq(String shrq) {
        this.shrq = shrq;
    }

    public String getShzt_dm() {
        return shzt_dm;
    }

    public void setShzt_dm(String shzt_dm) {
        this.shzt_dm = shzt_dm;
    }

    public String getYxbz() {
        return yxbz;
    }

    public void setYxbz(String yxbz) {
        this.yxbz = yxbz;
    }

    public String getYsljhmxxh() {
        return ysljhmxxh;
    }

    public void setYsljhmxxh(String ysljhmxxh) {
        this.ysljhmxxh = ysljhmxxh;
    }

    public double getJan() {
        return jan;
    }

    public void setJan(double jan) {
        this.jan = jan;
    }

    public double getFeb() {
        return feb;
    }

    public void setFeb(double feb) {
        this.feb = feb;
    }

    public double getMar() {
        return mar;
    }

    public void setMar(double mar) {
        this.mar = mar;
    }

    public double getApr() {
        return apr;
    }

    public void setApr(double apr) {
        this.apr = apr;
    }

    public double getMay() {
        return may;
    }

    public void setMay(double may) {
        this.may = may;
    }

    public double getJun() {
        return jun;
    }

    public void setJun(double jun) {
        this.jun = jun;
    }

    public double getJul() {
        return jul;
    }

    public void setJul(double jul) {
        this.jul = jul;
    }

    public double getAug() {
        return aug;
    }

    public void setAug(double aug) {
        this.aug = aug;
    }

    public double getSept() {
        return sept;
    }

    public void setSept(double sept) {
        this.sept = sept;
    }

    public double getOct() {
        return oct;
    }

    public void setOct(double oct) {
        this.oct = oct;
    }

    public double getNov() {
        return nov;
    }

    public void setNov(double nov) {
        this.nov = nov;
    }

    public double getDec() {
        return dec;
    }

    public void setDec(double dec) {
        this.dec = dec;
    }

    public String getYshzh() {
        return yshzh;
    }

    public void setYshzh(String yshzh) {
        this.yshzh = yshzh;
    }

    public String getSydjxh() {
        return sydjxh;
    }

    public void setSydjxh(String sydjxh) {
        this.sydjxh = sydjxh;
    }
}

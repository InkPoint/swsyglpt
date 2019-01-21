package com.xasw.jbxxwh.model;

import com.ts.model.BaseVO;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

/**
 * @author PengWen Wang
 * @date 2018/12/14 9:22
 * 初始表底数报送
 */
public class CsbdsbsVO extends BaseVO {

    private String id;
    private String text;
    private String csbdjxh;
    private String yshdjxh;
    private String sybh;
    private String sbwzbh;
    private String ghhsbbh;
    private String sbbh;
    private String ybds;
    private String sbzt_dm;
    private String xbds;
    private String sbgzlx_dm;
    private String sbgzyy;
    private String sbry_dm;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date sbrq;
    private String czlx_dm;
    private String dszpurl;
    private String shzt_dm;
    private String shjg;
    private String shjg_dm;
    private String shry_dm;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date shrq;
    private String xgry_dm;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date xgrq;
    private String yxbz;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date ybcbrq;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date xbcbrq;
    private String sbztmc;
    private String yshzh;

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

    public String getCsbdjxh() {
        return csbdjxh;
    }

    public void setCsbdjxh(String csbdjxh) {
        this.csbdjxh = csbdjxh;
    }

    public String getYshdjxh() {
        return yshdjxh;
    }

    public void setYshdjxh(String yshdjxh) {
        this.yshdjxh = yshdjxh;
    }

    public String getSybh() {
        return sybh;
    }

    public void setSybh(String sybh) {
        this.sybh = sybh;
    }

    public String getSbwzbh() {
        return sbwzbh;
    }

    public void setSbwzbh(String sbwzbh) {
        this.sbwzbh = sbwzbh;
    }

    public String getGhhsbbh() {
        return ghhsbbh;
    }

    public void setGhhsbbh(String ghhsbbh) {
        this.ghhsbbh = ghhsbbh;
    }

    public String getSbbh() {
        return sbbh;
    }

    public void setSbbh(String sbbh) {
        this.sbbh = sbbh;
    }

    public String getYbds() {
        return ybds;
    }

    public void setYbds(String ybds) {
        this.ybds = ybds;
    }

    public String getSbzt_dm() {
        return sbzt_dm;
    }

    public void setSbzt_dm(String sbzt_dm) {
        this.sbzt_dm = sbzt_dm;
    }

    public String getXbds() {
        return xbds;
    }

    public void setXbds(String xbds) {
        this.xbds = xbds;
    }

    public String getSbgzlx_dm() {
        return sbgzlx_dm;
    }

    public void setSbgzlx_dm(String sbgzlx_dm) {
        this.sbgzlx_dm = sbgzlx_dm;
    }

    public String getSbgzyy() {
        return sbgzyy;
    }

    public void setSbgzyy(String sbgzyy) {
        this.sbgzyy = sbgzyy;
    }

    public String getSbry_dm() {
        return sbry_dm;
    }

    public void setSbry_dm(String sbry_dm) {
        this.sbry_dm = sbry_dm;
    }

    public Date getSbrq() {
        return sbrq;
    }

    public void setSbrq(Date sbrq) {
        this.sbrq = sbrq;
    }

    public String getCzlx_dm() {
        return czlx_dm;
    }

    public void setCzlx_dm(String czlx_dm) {
        this.czlx_dm = czlx_dm;
    }

    public String getDszpurl() {
        return dszpurl;
    }

    public void setDszpurl(String dszpurl) {
        this.dszpurl = dszpurl;
    }

    public String getShzt_dm() {
        return shzt_dm;
    }

    public void setShzt_dm(String shzt_dm) {
        this.shzt_dm = shzt_dm;
    }

    public String getShjg() {
        return shjg;
    }

    public void setShjg(String shjg) {
        this.shjg = shjg;
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

    public Date getShrq() {
        return shrq;
    }

    public void setShrq(Date shrq) {
        this.shrq = shrq;
    }

    public String getXgry_dm() {
        return xgry_dm;
    }

    public void setXgry_dm(String xgry_dm) {
        this.xgry_dm = xgry_dm;
    }

    public Date getXgrq() {
        return xgrq;
    }

    public void setXgrq(Date xgrq) {
        this.xgrq = xgrq;
    }

    public String getYxbz() {
        return yxbz;
    }

    public void setYxbz(String yxbz) {
        this.yxbz = yxbz;
    }

    public Date getYbcbrq() {
        return ybcbrq;
    }

    public void setYbcbrq(Date ybcbrq) {
        this.ybcbrq = ybcbrq;
    }

    public Date getXbcbrq() {
        return xbcbrq;
    }

    public void setXbcbrq(Date xbcbrq) {
        this.xbcbrq = xbcbrq;
    }

    public String getSbztmc() {
        return sbztmc;
    }

    public void setSbztmc(String sbztmc) {
        this.sbztmc = sbztmc;
    }

    public String getYshzh() {
        return yshzh;
    }

    public void setYshzh(String yshzh) {
        this.yshzh = yshzh;
    }
}

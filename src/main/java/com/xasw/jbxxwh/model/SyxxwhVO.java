package com.xasw.jbxxwh.model;

import com.ts.model.BaseVO;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

/**
 * @author PengWen Wang
 * @date 2018/12/17 11:25
 * 水源信息维护
 */
public class SyxxwhVO extends BaseVO {

    private String id;
    private String text;
    private String sydjxh;
    private String sybh;
    private String syqy_dm;
    private String syzt_dm;
    private String qskszd;
    private String qsxkzbh;
    private String qsxkzzt_dm;
    private String qsxkspjg_dm;
    private String qsyt_dm;
    private double qsksl;
    private double zjlgs;
    private String sfzxjc;
    private double fjlgs;
    private String sylx_dm;
    private String qshy_dm;
    private String tsyslb_dm;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date qsxkyxqq;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date qsxkyxqz;
    private String dxsqsdgsgwsffg;
    private String dxsccqlx_dm;
    private String xzqh_dm;
    private String yxbz;
    private double szyfebz;
    private String jd;
    private String lrry_dm;
    private Date lrrq;
    private String xgry_dm;
    private Date xgrq;
    private String wd;
    private String qslhdjg_dm;
    private String nqsjh;
    private String qsfs_dm;
    private String tsdd;
    private String tsfs_dm;
    private double tsl;
    private String tsszyq;

    private String qsytmc;
    private String sylxmc;
    private String qyshymc;
    private String tsyslbmc;
    private String xzqhmc;
    private String qsfsmc;
    private String dxsccqlxmc;

    // 用水户水源关系表
    private String sygxxh;
    private String qsxkzurl;

    private String yshdjxh;

    private String qydm;

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

    public String getSydjxh() {
        return sydjxh;
    }

    public void setSydjxh(String sydjxh) {
        this.sydjxh = sydjxh;
    }

    public String getSybh() {
        return sybh;
    }

    public void setSybh(String sybh) {
        this.sybh = sybh;
    }

    public String getSyqy_dm() {
        return syqy_dm;
    }

    public void setSyqy_dm(String syqy_dm) {
        this.syqy_dm = syqy_dm;
    }

    public String getSyzt_dm() {
        return syzt_dm;
    }

    public void setSyzt_dm(String syzt_dm) {
        this.syzt_dm = syzt_dm;
    }

    public String getQskszd() {
        return qskszd;
    }

    public void setQskszd(String qskszd) {
        this.qskszd = qskszd;
    }

    public String getQsxkzbh() {
        return qsxkzbh;
    }

    public void setQsxkzbh(String qsxkzbh) {
        this.qsxkzbh = qsxkzbh;
    }

    public String getQsxkzzt_dm() {
        return qsxkzzt_dm;
    }

    public void setQsxkzzt_dm(String qsxkzzt_dm) {
        this.qsxkzzt_dm = qsxkzzt_dm;
    }

    public String getQsxkspjg_dm() {
        return qsxkspjg_dm;
    }

    public void setQsxkspjg_dm(String qsxkspjg_dm) {
        this.qsxkspjg_dm = qsxkspjg_dm;
    }

    public String getQsyt_dm() {
        return qsyt_dm;
    }

    public void setQsyt_dm(String qsyt_dm) {
        this.qsyt_dm = qsyt_dm;
    }

    public double getQsksl() {
        return qsksl;
    }

    public void setQsksl(double qsksl) {
        this.qsksl = qsksl;
    }

    public double getZjlgs() {
        return zjlgs;
    }

    public void setZjlgs(double zjlgs) {
        this.zjlgs = zjlgs;
    }

    public String getSfzxjc() {
        return sfzxjc;
    }

    public void setSfzxjc(String sfzxjc) {
        this.sfzxjc = sfzxjc;
    }

    public double getFjlgs() {
        return fjlgs;
    }

    public void setFjlgs(double fjlgs) {
        this.fjlgs = fjlgs;
    }

    public String getSylx_dm() {
        return sylx_dm;
    }

    public void setSylx_dm(String sylx_dm) {
        this.sylx_dm = sylx_dm;
    }

    public String getQshy_dm() {
        return qshy_dm;
    }

    public void setQshy_dm(String qshy_dm) {
        this.qshy_dm = qshy_dm;
    }

    public String getTsyslb_dm() {
        return tsyslb_dm;
    }

    public void setTsyslb_dm(String tsyslb_dm) {
        this.tsyslb_dm = tsyslb_dm;
    }

    public Date getQsxkyxqq() {
        return qsxkyxqq;
    }

    public void setQsxkyxqq(Date qsxkyxqq) {
        this.qsxkyxqq = qsxkyxqq;
    }

    public Date getQsxkyxqz() {
        return qsxkyxqz;
    }

    public void setQsxkyxqz(Date qsxkyxqz) {
        this.qsxkyxqz = qsxkyxqz;
    }

    public String getDxsqsdgsgwsffg() {
        return dxsqsdgsgwsffg;
    }

    public void setDxsqsdgsgwsffg(String dxsqsdgsgwsffg) {
        this.dxsqsdgsgwsffg = dxsqsdgsgwsffg;
    }

    public String getDxsccqlx_dm() {
        return dxsccqlx_dm;
    }

    public void setDxsccqlx_dm(String dxsccqlx_dm) {
        this.dxsccqlx_dm = dxsccqlx_dm;
    }

    public String getXzqh_dm() {
        return xzqh_dm;
    }

    public void setXzqh_dm(String xzqh_dm) {
        this.xzqh_dm = xzqh_dm;
    }

    public String getYxbz() {
        return yxbz;
    }

    public void setYxbz(String yxbz) {
        this.yxbz = yxbz;
    }

    public double getSzyfebz() {
        return szyfebz;
    }

    public void setSzyfebz(double szyfebz) {
        this.szyfebz = szyfebz;
    }

    public String getJd() {
        return jd;
    }

    public void setJd(String jd) {
        this.jd = jd;
    }

    public String getLrry_dm() {
        return lrry_dm;
    }

    public void setLrry_dm(String lrry_dm) {
        this.lrry_dm = lrry_dm;
    }

    public Date getLrrq() {
        return lrrq;
    }

    public void setLrrq(Date lrrq) {
        this.lrrq = lrrq;
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

    public String getWd() {
        return wd;
    }

    public void setWd(String wd) {
        this.wd = wd;
    }

    public String getQslhdjg_dm() {
        return qslhdjg_dm;
    }

    public void setQslhdjg_dm(String qslhdjg_dm) {
        this.qslhdjg_dm = qslhdjg_dm;
    }

    public String getNqsjh() {
        return nqsjh;
    }

    public void setNqsjh(String nqsjh) {
        this.nqsjh = nqsjh;
    }

    public String getQsfs_dm() {
        return qsfs_dm;
    }

    public void setQsfs_dm(String qsfs_dm) {
        this.qsfs_dm = qsfs_dm;
    }

    public String getTsdd() {
        return tsdd;
    }

    public void setTsdd(String tsdd) {
        this.tsdd = tsdd;
    }

    public String getTsfs_dm() {
        return tsfs_dm;
    }

    public void setTsfs_dm(String tsfs_dm) {
        this.tsfs_dm = tsfs_dm;
    }

    public double getTsl() {
        return tsl;
    }

    public void setTsl(double tsl) {
        this.tsl = tsl;
    }

    public String getTsszyq() {
        return tsszyq;
    }

    public void setTsszyq(String tsszyq) {
        this.tsszyq = tsszyq;
    }

    public String getQsytmc() {
        return qsytmc;
    }

    public void setQsytmc(String qsytmc) {
        this.qsytmc = qsytmc;
    }

    public String getSylxmc() {
        return sylxmc;
    }

    public void setSylxmc(String sylxmc) {
        this.sylxmc = sylxmc;
    }

    public String getQyshymc() {
        return qyshymc;
    }

    public void setQyshymc(String qyshymc) {
        this.qyshymc = qyshymc;
    }

    public String getTsyslbmc() {
        return tsyslbmc;
    }

    public void setTsyslbmc(String tsyslbmc) {
        this.tsyslbmc = tsyslbmc;
    }

    public String getXzqhmc() {
        return xzqhmc;
    }

    public void setXzqhmc(String xzqhmc) {
        this.xzqhmc = xzqhmc;
    }

    public String getQsfsmc() {
        return qsfsmc;
    }

    public void setQsfsmc(String qsfsmc) {
        this.qsfsmc = qsfsmc;
    }

    public String getDxsccqlxmc() {
        return dxsccqlxmc;
    }

    public void setDxsccqlxmc(String dxsccqlxmc) {
        this.dxsccqlxmc = dxsccqlxmc;
    }

    public String getSygxxh() {
        return sygxxh;
    }

    public void setSygxxh(String sygxxh) {
        this.sygxxh = sygxxh;
    }

    public String getQsxkzurl() {
        return qsxkzurl;
    }

    public void setQsxkzurl(String qsxkzurl) {
        this.qsxkzurl = qsxkzurl;
    }

    public String getYshdjxh() {
        return yshdjxh;
    }

    public void setYshdjxh(String yshdjxh) {
        this.yshdjxh = yshdjxh;
    }

    public String getQydm() {
        return qydm;
    }

    public void setQydm(String qydm) {
        this.qydm = qydm;
    }

    @Override
    public String toString() {
        return "SyxxwhVO{" +
                "id='" + id + '\'' +
                ", text='" + text + '\'' +
                ", sydjxh='" + sydjxh + '\'' +
                ", sybh='" + sybh + '\'' +
                ", syqy_dm='" + syqy_dm + '\'' +
                ", syzt_dm='" + syzt_dm + '\'' +
                ", qskszd='" + qskszd + '\'' +
                ", qsxkzbh='" + qsxkzbh + '\'' +
                ", qsxkzzt_dm='" + qsxkzzt_dm + '\'' +
                ", qsxkspjg_dm='" + qsxkspjg_dm + '\'' +
                ", qsyt_dm='" + qsyt_dm + '\'' +
                ", qsksl=" + qsksl +
                ", zjlgs=" + zjlgs +
                ", sfzxjc='" + sfzxjc + '\'' +
                ", fjlgs=" + fjlgs +
                ", sylx_dm='" + sylx_dm + '\'' +
                ", qshy_dm='" + qshy_dm + '\'' +
                ", tsyslb_dm='" + tsyslb_dm + '\'' +
                ", qsxkyxqq=" + qsxkyxqq +
                ", qsxkyxqz=" + qsxkyxqz +
                ", dxsqsdgsgwsffg='" + dxsqsdgsgwsffg + '\'' +
                ", dxsccqlx_dm='" + dxsccqlx_dm + '\'' +
                ", xzqh_dm='" + xzqh_dm + '\'' +
                ", yxbz='" + yxbz + '\'' +
                ", szyfebz=" + szyfebz +
                ", jd='" + jd + '\'' +
                ", lrry_dm='" + lrry_dm + '\'' +
                ", lrrq=" + lrrq +
                ", xgry_dm='" + xgry_dm + '\'' +
                ", xgrq=" + xgrq +
                ", wd='" + wd + '\'' +
                ", qslhdjg_dm='" + qslhdjg_dm + '\'' +
                ", nqsjh='" + nqsjh + '\'' +
                ", qsfs_dm='" + qsfs_dm + '\'' +
                ", tsdd='" + tsdd + '\'' +
                ", tsfs_dm='" + tsfs_dm + '\'' +
                ", tsl=" + tsl +
                ", tsszyq='" + tsszyq + '\'' +
                ", qsytmc='" + qsytmc + '\'' +
                ", sylxmc='" + sylxmc + '\'' +
                ", qyshymc='" + qyshymc + '\'' +
                ", tsyslbmc='" + tsyslbmc + '\'' +
                ", xzqhmc='" + xzqhmc + '\'' +
                ", qsfsmc='" + qsfsmc + '\'' +
                ", dxsccqlxmc='" + dxsccqlxmc + '\'' +
                ", sygxxh='" + sygxxh + '\'' +
                ", qsxkzurl='" + qsxkzurl + '\'' +
                ", yshdjxh='" + yshdjxh + '\'' +
                '}';
    }
}

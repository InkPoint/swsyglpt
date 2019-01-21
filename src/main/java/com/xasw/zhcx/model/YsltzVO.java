package com.xasw.zhcx.model;
import com.ts.model.BaseVO;

/**
 * @author :BoYi Sun
 * @date:2018-12-19
 * @desc:用水量台账VO
 */
public class YsltzVO extends BaseVO {

    //菜单ID
    private String id;
    //菜单文本
    private String text;
    //年度
    private String  ssnf;
    //纳税人识别号
    private String nsrsbh;
    //纳税人名称
    private String nsrmc;
    //水源区域代码
    private String syqydm;
    //水源区域代码
    private String sylxdm;
    //录入人
    private String lrr;
    //审核人代码
    private String shr_dm;
    //年度用水量
    private String ndqsl;
    //一季度用水量
    private String yhdqsl;
    //二季度用水量
    private String ehdqsl;
    //三季度用水量
    private String shdqsl;
    //四季度用水量
    private String fhdqsl;
    //年度税款金额
    private String ndskje;
    //一季度税款缴纳金额
    private String yskjnje;
    //二季度税款缴纳金额
    private String eskjnje;
    //三季度税款交金额
    private String sskjnje;
    //四季度税款缴纳金额
    private String fskjnje;
    //年度核查金额
    private String ndhcje;
    //一季度核查税款金额
    private String yhcskje;
    //二季度核查税款金额
    private String ehcskje;
    //三季度核查税款金额
    private String shcskje;
    //四季度核查税款金额
    private String fhcskje;

    public String getFhcskje() {
        return fhcskje;
    }

    public void setFhcskje(String fhcskje) {
        this.fhcskje = fhcskje;
    }

    public String getShcskje() {
        return shcskje;
    }

    public void setShcskje(String shcskje) {
        this.shcskje = shcskje;
    }

    public String getEhcskje() {
        return ehcskje;
    }

    public void setEhcskje(String ehcskje) {
        this.ehcskje = ehcskje;
    }

    public String getYhcskje() {
        return yhcskje;
    }

    public void setYhcskje(String yhcskje) {
        this.yhcskje = yhcskje;
    }

    public String getNdhcje() {
        return ndhcje;
    }

    public void setNdhcje(String ndhcje) {
        this.ndhcje = ndhcje;
    }

    public String getFskjnje() {
        return fskjnje;
    }

    public void setFskjnje(String fskjnje) {
        this.fskjnje = fskjnje;
    }

    public String getSskjnje() {
        return sskjnje;
    }

    public void setSskjnje(String sskjnje) {
        this.sskjnje = sskjnje;
    }

    public String getEskjnje() {
        return eskjnje;
    }

    public void setEskjnje(String eskjnje) {
        this.eskjnje = eskjnje;
    }

    public String getYskjnje() {
        return yskjnje;
    }

    public void setYskjnje(String yskjnje) {
        this.yskjnje = yskjnje;
    }

    public String getNdskje() {
        return ndskje;
    }

    public void setNdskje(String ndskje) {
        this.ndskje = ndskje;
    }

    public String getFhdqsl() {
        return fhdqsl;
    }

    public void setFhdqsl(String fhdqsl) {
        this.fhdqsl = fhdqsl;
    }

    public String getShdqsl() {
        return shdqsl;
    }

    public void setShdqsl(String shdqsl) {
        this.shdqsl = shdqsl;
    }

    public String getEhdqsl() {
        return ehdqsl;
    }

    public void setEhdqsl(String ehdqsl) {
        this.ehdqsl = ehdqsl;
    }

    public String getYhdqsl() {
        return yhdqsl;
    }

    public void setYhdqsl(String yhdqsl) {
        this.yhdqsl = yhdqsl;
    }

    public String getNdqsl() {
        return ndqsl;
    }

    public void setNdqsl(String ndqsl) {
        this.ndqsl = ndqsl;
    }

    public String getSsnf() {
        return ssnf;
    }

    public void setSsnf(String ssnf) {
        this.ssnf = ssnf;
    }

    public String getShr_dm() {
        return shr_dm;
    }

    public void setShr_dm(String shr_dm) {
        this.shr_dm = shr_dm;
    }

    public String getLrr() {
        return lrr;
    }

    public void setLrr(String lrr) {
        this.lrr = lrr;
    }

    public String getSylxdm() {
        return sylxdm;
    }

    public void setSylxdm(String sylxdm) {
        this.sylxdm = sylxdm;
    }

    public String getSyqydm() {

        return syqydm;
    }

    public void setSyqydm(String syqydm) {
        this.syqydm = syqydm;
    }

    public String getNsrmc() {
        return nsrmc;
    }

    public void setNsrmc(String nsrmc) {
        this.nsrmc = nsrmc;
    }

    public String getNsrsbh() {
        return nsrsbh;
    }

    public void setNsrsbh(String nsrsbh) {
        this.nsrsbh = nsrsbh;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}

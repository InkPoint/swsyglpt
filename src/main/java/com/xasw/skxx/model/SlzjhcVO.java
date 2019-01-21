package com.xasw.skxx.model;
import com.ts.model.BaseVO;

/**
 * @author :BoYi Sun
 * @date:2018-12-19
 * @desc:水量征缴核查VO
 */
public class SlzjhcVO extends BaseVO {
    //菜单ID
    private String id;
    //菜单内容
    private String text;
    //信息采集ID
    private String xxcjid;
    //核定书编号
    private  String hdsbh;
    //登记序号
    private String djxh;
    //纳税人识别号
    private String nsrsbh;
    //纳税人名称
    private String nsrmc;
    //税款所属期起
    private String skssqq;
    //税款所属期止
    private String skssqz;
    //税款缴纳金额
    private String skjnje;
    //电子税票号码
    private String dzsphm;
    //反馈人
    private String fkr;
    //反馈时间
    private String fksj;
    //核查人
    private String hcr;
    //核查时间
    private String hcsj;
    //核查税款金额
    private String hcskje;
    //核查结果类型
    private String hcjglx;
    //核定结果类型
    private String hdjglxmc;
    //审核时间
    private String shsj;
    //反馈结果类型
    private String fkjglx;
    //反馈结果类型名称
    private String fkjglxmc;
    //核查结果类型名称
    private String hcjglxmc;
    //审核人代码
    private String shrdm;

    public String getShrdm() {
        return shrdm;
    }

    public void setShrdm(String shrdm) {
        this.shrdm = shrdm;
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

    public String getHcjglxmc() {
        return hcjglxmc;
    }

    public void setHcjglxmc(String hcjglxmc) {
        this.hcjglxmc = hcjglxmc;
    }

    public String getFkjglxmc() {
        return fkjglxmc;
    }

    public void setFkjglxmc(String fkjglxmc) {
        this.fkjglxmc = fkjglxmc;
    }

    public String getFkjglx() {
        return fkjglx;
    }

    public void setFkjglx(String fkjglx) {
        this.fkjglx = fkjglx;
    }

    public String getHdjglxmc() {
        return hdjglxmc;
    }

    public void setHdjglxmc(String hdjglxmc) {
        this.hdjglxmc = hdjglxmc;
    }

    public String getShsj() {
        return shsj;
    }

    public void setShsj(String shsj) {
        this.shsj = shsj;
    }

    public String getXxcjid() {
        return xxcjid;
    }

    public void setXxcjid(String xxcjid) {
        this.xxcjid = xxcjid;
    }

    public String getHdsbh() {
        return hdsbh;
    }

    public void setHdsbh(String hdsbh) {
        this.hdsbh = hdsbh;
    }

    public String getHcjglx() {
        return hcjglx;
    }

    public void setHcjglx(String hcjglx) {
        this.hcjglx = hcjglx;
    }

    public String getHcskje() {
        return hcskje;
    }

    public void setHcskje(String hcskje) {
        this.hcskje = hcskje;
    }

    public String getHcsj() {
        return hcsj;
    }

    public void setHcsj(String hcsj) {
        this.hcsj = hcsj;
    }

    public String getHcr() {
        return hcr;
    }

    public void setHcr(String hcr) {
        this.hcr = hcr;
    }

    public String getFksj() {
        return fksj;
    }

    public void setFksj(String fksj) {
        this.fksj = fksj;
    }

    public String getFkr() {
        return fkr;
    }

    public void setFkr(String fkr) {
        this.fkr = fkr;
    }

    public String getDzsphm() {
        return dzsphm;
    }

    public void setDzsphm(String dzsphm) {
        this.dzsphm = dzsphm;
    }

    public String getSkjnje() {
        return skjnje;
    }

    public void setSkjnje(String skjnje) {
        this.skjnje = skjnje;
    }

    public String getSkssqz() {
        return skssqz;
    }

    public void setSkssqz(String skssqz) {
        this.skssqz = skssqz;
    }

    public String getSkssqq() {
        return skssqq;
    }

    public void setSkssqq(String skssqq) {
        this.skssqq = skssqq;
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

    public String getDjxh() {
        return djxh;
    }

    public void setDjxh(String djxh) {
        this.djxh = djxh;
    }
}

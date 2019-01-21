package com.xasw.zhcx.model;
import com.ts.model.BaseVO;

/**
 * @author He Mingchao
 * @date 2019/1/2 12:00
 * @desc 税源信息综合查询
 */
public class SyxxcxVO extends BaseVO {
    private String syqydm;
    private String sylxdm;
    private String syztdm;
    private String sydjxh;
    private String qsdd;

    public String getSyqydm() {
        return syqydm;
    }

    public void setSyqydm(String syqydm) {
        this.syqydm = syqydm;
    }

    public String getSylxdm() {
        return sylxdm;
    }

    public void setSylxdm(String sylxdm) {
        this.sylxdm = sylxdm;
    }

    public String getSyztdm() {
        return syztdm;
    }

    public void setSyztdm(String syztdm) {
        this.syztdm = syztdm;
    }

    public String getSydjxh() {
        return sydjxh;
    }

    public void setSydjxh(String sydjxh) {
        this.sydjxh = sydjxh;
    }

    public String getQsdd() {
        return qsdd;
    }

    public void setQsdd(String qsdd) {
        this.qsdd = qsdd;
    }

    @Override
    public String toString() {
        return "SyxxcxVO{" +
                "syqydm='" + syqydm + '\'' +
                ", sylxdm='" + sylxdm + '\'' +
                ", syztdm='" + syztdm + '\'' +
                ", sydjxh='" + sydjxh + '\'' +
                ", qsdd='" + qsdd + '\'' +
                '}';
    }
}

package com.xasw.zhcx.model;
import com.ts.model.BaseVO;

/**
 * @author He Mingchao
 * @date 2019/1/2 11:07
 * @desc 税源信息综合查询
 */
public class SyxxzhcxVO extends BaseVO {
    private String syqydm;
    private String sylxdm;
    private String ssnf;
    private String dxsccqkxdm;
    private String tsyslxdm;

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

    public String getSsnf() {
        return ssnf;
    }

    public void setSsnf(String ssnf) {
        this.ssnf = ssnf;
    }

    public String getDxsccqkxdm() {
        return dxsccqkxdm;
    }

    public void setDxsccqkxdm(String dxsccqkxdm) {
        this.dxsccqkxdm = dxsccqkxdm;
    }

    public String getTsyslxdm() {
        return tsyslxdm;
    }

    public void setTsyslxdm(String tsyslxdm) {
        this.tsyslxdm = tsyslxdm;
    }

    @Override
    public String toString() {
        return "SyxxzhcxVO{" +
                "syqydm='" + syqydm + '\'' +
                ", sylxdm='" + sylxdm + '\'' +
                ", ssnf='" + ssnf + '\'' +
                ", dxsccqkxdm='" + dxsccqkxdm + '\'' +
                ", tsyslxdm='" + tsyslxdm + '\'' +
                '}';
    }
}

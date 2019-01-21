package com.xasw.zhcx.model;
import com.ts.model.BaseVO;

/**
 * @author :BoYi Sun
 * @date:2018-12-19
 * @desc:用水量综合分析VO
 */
public class YslzhfxVO extends BaseVO {

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
        return "YslzhfxVO{" +
                "syqydm='" + syqydm + '\'' +
                ", sylxdm='" + sylxdm + '\'' +
                ", ssnf='" + ssnf + '\'' +
                ", dxsccqkxdm='" + dxsccqkxdm + '\'' +
                ", tsyslxdm='" + tsyslxdm + '\'' +
                '}';
    }
}

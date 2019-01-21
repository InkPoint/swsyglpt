package com.xasw.jbxxwh.model;

import com.ts.model.BaseVO;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Arrays;
import java.util.Date;

/**
 * @author: He Mingchao
 * @date: 2019/01/02 9:22
 * @desc: 水源区域维护
 */
public class SyqywhVO extends BaseVO {
    private String syqydm;
    private String syqymc;
    private String syztdm;
    private String fzrdm;
    private String [] syqydmArray;

    public String getSyqydm() {
        return syqydm;
    }

    public void setSyqydm(String syqydm) {
        this.syqydm = syqydm;
    }

    public String getSyqymc() {
        return syqymc;
    }

    public void setSyqymc(String syqymc) {
        this.syqymc = syqymc;
    }

    public String getSyztdm() {
        return syztdm;
    }

    public void setSyztdm(String syztdm) {
        this.syztdm = syztdm;
    }

    public String getFzrdm() {
        return fzrdm;
    }

    public void setFzrdm(String fzrdm) {
        this.fzrdm = fzrdm;
    }

    public String[] getSyqydmArray() {
        return syqydmArray;
    }

    public void setSyqydmArray(String[] syqydmArray) {
        this.syqydmArray = syqydmArray;
    }

    @Override
    public String toString() {
        return "SyqywhVO{" +
                "syqydm='" + syqydm + '\'' +
                ", syqymc='" + syqymc + '\'' +
                ", syztdm='" + syztdm + '\'' +
                ", fzrdm='" + fzrdm + '\'' +
                ", syqydmArray=" + Arrays.toString(syqydmArray) +
                '}';
    }
}

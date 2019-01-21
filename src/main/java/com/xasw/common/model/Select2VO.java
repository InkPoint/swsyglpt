package com.xasw.common.model;

import java.io.Serializable;

public class Select2VO implements Serializable {
    private String id;
    private String text;

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

    @Override
    public String toString() {
        return "Select2VO{" +
                "id='" + id + '\'' +
                ", text='" + text + '\'' +
                '}';
    }
}

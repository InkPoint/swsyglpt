package com.xasw.utils;


import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

/**
 * @author PengWen Wang
 * @date 2019/1/8 14:26
 */
public class FileUtil {

    public static void copyFile(String srcPath, String destPath) throws IOException {
        FileInputStream fis = new FileInputStream(srcPath);
        FileOutputStream fos = new FileOutputStream(destPath + "/" + new File(srcPath).getName());

        int len = 0;
        byte[] b = new byte[1024];
        while ((len = fis.read(b)) != -1) {
            fos.write(b);
        }
        fos.close();
        fis.close();
    }
}

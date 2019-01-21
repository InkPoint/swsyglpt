package com.xasw.utils;

import java.text.SimpleDateFormat;
import java.util.UUID;

/**
 * UUID
 *
 * @author PengWen Wang
 * @date 2019/1/5 17:39
 */
public class CreateSepuence {

    public static String[] chars = new String[]{"0", "1", "2", "3", "4", "5",
            "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I",
            "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",
            "W", "X", "Y", "Z"};
    public static int Guid = 100;

    // 16 位UUID
    public static String getSixteenUuid() {
        StringBuffer shortBuffer = new StringBuffer();
        String uuid = UUID.randomUUID().toString().replace("-", "");
        for (int i = 0; i < 16; i++) {
            String str = uuid.substring(i * 2, i * 2 + 2);
            int x = Integer.parseInt(str, 16);
            shortBuffer.append(chars[x % 36]);
        }
        return shortBuffer.toString();
    }

    // 20 位UUID
    public static String getTwentyGuid() {
        CreateSepuence.Guid += 1;
        long now = System.currentTimeMillis();
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy");
        String time = dateFormat.format(now);
        String info = now + "";
        int ran = 0;
        if (CreateSepuence.Guid > 999) {
            CreateSepuence.Guid = 100;
        }
        ran = CreateSepuence.Guid;

        return time + info.substring(2, info.length()) + ran;
    }

    // 32 位UUID
    public static String getUUID() {
        String uuid = UUID.randomUUID().toString();
        return uuid.replaceAll("-", "");
    }
}

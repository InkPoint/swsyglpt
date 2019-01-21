package com.xasw.common;

import org.apache.poi.hssf.usermodel.*;
import org.apache.poi.ss.util.CellRangeAddress;

import java.util.Iterator;

public class PoiUtils {
    /**  

           * 行复制功能  
           * @param fromRow  
           * @param toRow  
           */   
                 public static void copyRow(HSSFWorkbook wb, HSSFSheet sheet, HSSFRow fromRow, HSSFRow toRow, boolean copyValueFlag){
      toRow.setHeight(fromRow.getHeight());
      for(int i = 0; i < sheet.getNumMergedRegions(); i++) {
                  CellRangeAddress cellRangeAddress = sheet.getMergedRegion(i);
                  if(cellRangeAddress.getFirstRow() == fromRow.getRowNum()) {
                        CellRangeAddress newCellRangeAddress = new CellRangeAddress(toRow.getRowNum(), (toRow.getRowNum() +
                                                            (cellRangeAddress.getLastRow() - cellRangeAddress.getFirstRow())), cellRangeAddress
                                    .getFirstColumn(), cellRangeAddress.getLastColumn());
                        sheet.addMergedRegion(newCellRangeAddress);
                  }
            }
      for (Iterator cellIt = fromRow.cellIterator(); cellIt.hasNext();) {
                 HSSFCell tmpCell = (HSSFCell) cellIt.next();
                 HSSFCell newCell = toRow.createCell(tmpCell.getColumnIndex());
                 copyCell(wb,tmpCell, newCell, copyValueFlag);   
      }   
           
     }  
                 /**  
           * 复制单元格  
           *   
           * @param srcCell  
           * @param distCell  
           * @param copyValueFlag  
           *                  true则连同cell的内容一起复制  
           */   
                 public static void copyCell(HSSFWorkbook wb,HSSFCell srcCell, HSSFCell distCell,   
                             boolean copyValueFlag) {   
           HSSFCellStyle newstyle=wb.createCellStyle();
           newstyle.cloneStyleFrom(srcCell.getCellStyle());  
           //样式     
           distCell.setCellStyle(newstyle);   
           //评论     
           if (srcCell.getCellComment() != null) {   
                 distCell.setCellComment(srcCell.getCellComment());   
           }   
           // 不同数据类型处理     
           int srcCellType = srcCell.getCellType();   
           distCell.setCellType(srcCellType);   
           if (copyValueFlag) {   
                 if (srcCellType == HSSFCell.CELL_TYPE_NUMERIC) {   
                       if (HSSFDateUtil.isCellDateFormatted(srcCell)) {   
                             distCell.setCellValue(srcCell.getDateCellValue());   
                       } else {   
                             distCell.setCellValue(srcCell.getNumericCellValue());   
                       }   
                 } else if (srcCellType == HSSFCell.CELL_TYPE_STRING) {   
                       distCell.setCellValue(srcCell.getRichStringCellValue());   
                 } else if (srcCellType == HSSFCell.CELL_TYPE_BLANK) {   
                       // nothing21     
                 } else if (srcCellType == HSSFCell.CELL_TYPE_BOOLEAN) {   
                       distCell.setCellValue(srcCell.getBooleanCellValue());   
                 } else if (srcCellType == HSSFCell.CELL_TYPE_ERROR) {   
                       distCell.setCellErrorValue(srcCell.getErrorCellValue());   
                 } else if (srcCellType == HSSFCell.CELL_TYPE_FORMULA) {   
                       distCell.setCellFormula(srcCell.getCellFormula());   
                 } else { // nothing29   
                 }   
           }   
     }
}

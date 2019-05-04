import { Injectable } from "@angular/core";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts.js";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const EXCEL_TYPE: string = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const EXCEL_EXTENSION: string = ".xlsx";

@Injectable({
  providedIn: "root"
})
export class ExportService {

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION);
  }

  public exportAsPdfFile(json: any[], pdfFileName: string): void {

    let table = [];
    let tableHead = [];

    for (let key in json[0]) {
      tableHead.push(key);
    }
    tableHead.length = 5;
    table.push(tableHead);

    json.forEach(row => {
      let tableRowArray = [];
      for (let key in row) {
        tableRowArray.push(row[key].toString());
      }
      tableRowArray.length = 5;
      table.push(tableRowArray);
    });

    let docInfo = {
      pageSize: "A4",
      pageMargins: [50, 40, 40, 10],
      content: [
        {
          table: {
            widths: ["10%", "20%", "20%", "20%", "*"],
            body: table,
            headerRows: 1
          }
        }
      ]
    };

    pdfMake.createPdf(docInfo).download(pdfFileName);
  }

  public exportAsExcelFile(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = { Sheets: { "data": worksheet }, SheetNames: ["data"] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }
}

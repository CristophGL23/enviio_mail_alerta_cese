import xl from "excel4node";
import {
  HEADERS,
  STYLE_CABECERAS,
  STYLE_CELLS,
  styleStatusCells,
} from "../arreglos/dataLayoutExcel.js";
import * as url from "url";
import path from "path";
import loggerconfig from "../configs/loggerconfig.js";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
export async function createExcel(data, empresaData) {
  if (data.length > 0) {
    new Promise((resolve, reject) => {
      const NAME_PATH = `${empresaData.abbreviation} - CUMPLIMIENTO CESE.xlsx`;
      const PATH_EXCEL = path.join(`${__dirname}/../files/${NAME_PATH}`);

      const wb = new xl.Workbook();
      const ws = wb.addWorksheet(`CUMPLIMIENTO ${empresaData.prefix}`);
      const style = wb.createStyle(STYLE_CELLS);
      const STYLE_STATUS = (status) => wb.createStyle(styleStatusCells(status));
      const HEADERS_STYLE = wb.createStyle(STYLE_CABECERAS);

      for (const [index, value] of HEADERS.entries()) {
        ws.cell(1, index + 1)
          .string(value)
          .style(HEADERS_STYLE);
      }

      for (let a = 0; a < data.length; a++) {
        ws.cell(a + 2, 1)
          .string(data[a].RFC_EMPRESA)
          .style(style);
        ws.cell(a + 2, 2)
          .string(data[a].EMPRESA_CONTRATANTE)
          .style(style);
        ws.cell(a + 2, 3)
          .string(data[a].RFC_PROVEEDOR)
          .style(style);
        ws.cell(a + 2, 4)
          .string(data[a].RAZON_SOCIAL)
          .style(style);
        ws.cell(a + 2, 5)
          .string(data[a].CORREO_ELEC)
          .style(style);
        ws.cell(a + 2, 6)
          .number(data[a].AÑO)
          .style(style);
        ws.cell(a + 2, 7)
          .string(data[a].MES)
          .style(style);
        ws.cell(a + 2, 8)
          .string(data[a].MES_CUMPLIMIENTO)
          .style(style);
        ws.cell(a + 2, 9)
          .string(data[a].Score)
          .style(style);

        ws.cell(a + 2, 10)
          .number(data[a].Contrato)
          .style(STYLE_STATUS(data[a].Contrato));

        ws.cell(a + 2, 11)
          .string(data[a].ODC ? data[a].ODC : "Null")
          .style(style);

        ws.cell(a + 2, 12)
          .number(data[a]["CFDI Servicio"])
          .style(STYLE_STATUS(data[a]["CFDI Servicio"]));

        ws.cell(a + 2, 13)
          .number(data[a]["Registro STPS"])
          .style(STYLE_STATUS(data[a]["Registro STPS"]));

        ws.cell(a + 2, 14)
          .number(data[a]["Estatus de Registro"])
          .style(STYLE_STATUS(data[a]["Estatus de Registro"]));

        ws.cell(a + 2, 15)
          .number(data[a]["Acuse IMSS"])
          .style(STYLE_STATUS(data[a]["Acuse IMSS"]));

        ws.cell(a + 2, 16)
          .number(data[a]["Acuse INFONAVIT"])
          .style(STYLE_STATUS(data[a]["Acuse INFONAVIT"]));

        ws.cell(a + 2, 17)
          .number(data[a]["CFDI Nomina"])
          .style(STYLE_STATUS(data[a]["CFDI Nomina"]));

        ws.cell(a + 2, 18)
          .number(data[a]["Pago ISR (Retenciones por Salarios)"])
          .style(STYLE_STATUS(data[a]["Pago ISR (Retenciones por Salarios)"]));

        ws.cell(a + 2, 19)
          .number(data[a]["Pago COP"])
          .style(STYLE_STATUS(data[a]["Pago COP"]));

        ws.cell(a + 2, 20)
          .number(data[a]["Pago INFONAVIT"])
          .style(STYLE_STATUS(data[a]["Pago INFONAVIT"]));

        ws.cell(a + 2, 21)
          .number(data[a]["Acuse IVA"])
          .style(STYLE_STATUS(data[a]["Acuse IVA"]));

        ws.cell(a + 2, 22)
          .number(data[a]["Pago IVA"])
          .style(STYLE_STATUS(data[a]["Pago IVA"]));

        ws.cell(a + 2, 23)
          .number(data[a]["Complemento de Pago"])
          .style(STYLE_STATUS(data[a]["Complemento de Pago"]));

        ws.cell(a + 2, 24)
          .number(data[a]["Listado de Trabajadores"])
          .style(STYLE_STATUS(data[a]["Listado de Trabajadores"]));

        ws.cell(a + 2, 25)
          .number(data[a]["Declaracion de IVA"])
          .style(STYLE_STATUS(data[a]["Declaracion de IVA"]));
      }
      
      wb.write(PATH_EXCEL, (error, stats) => {
        if (error) {
          notificationMailError(`Error al crear excel femco ${error}`);
          reject(error);
        } else {
          loggerconfig.info(
            `El excel de la empresa ${empresaData.abbreviation} se creo correctamente.`
          );
          resolve([PATH_EXCEL, NAME_PATH]);
        }
      });
    });
  } else {
    loggerconfig.info(
      `La empresa ${empresaData.abbreviation} no tiene proveedor con SCORE menor a 100%`
    );
  }
}

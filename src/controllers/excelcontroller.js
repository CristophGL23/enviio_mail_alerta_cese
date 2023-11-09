import xl from "excel4node";
import {
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
      const style0 = wb.createStyle(styleStatusCells(0));
      const style1 = wb.createStyle(styleStatusCells(1));
      const style2 = wb.createStyle(styleStatusCells(2));
      const style3 = wb.createStyle(styleStatusCells(3));
      const style4 = wb.createStyle(styleStatusCells(4));
      const HEADERS_STYLE = wb.createStyle(STYLE_CABECERAS);

      ws.cell(1, 1).string("RFC_EMPRESA").style(HEADERS_STYLE);
      ws.cell(1, 2).string("EMPRESA_CONTRATANTE").style(HEADERS_STYLE);
      ws.cell(1, 3).string("RFC_PROVEEDOR").style(HEADERS_STYLE);
      ws.cell(1, 4).string("RAZON_SOCIAL").style(HEADERS_STYLE);
      ws.cell(1, 5).string("EMAIL").style(HEADERS_STYLE);
      ws.cell(1, 6).string("AÑO").style(HEADERS_STYLE);
      ws.cell(1, 7).string("MES").style(HEADERS_STYLE);
      ws.cell(1, 8).string("MES_CUMPLIMIENTO").style(HEADERS_STYLE);
      ws.cell(1, 9).string("Score").style(HEADERS_STYLE);
      ws.cell(1, 10).string("Contrato").style(HEADERS_STYLE);
      ws.cell(1, 11).string("ODC").style(HEADERS_STYLE);
      ws.cell(1, 12).string("[CFDI Servicio]").style(HEADERS_STYLE);
      ws.cell(1, 13).string("[Registro STPS]").style(HEADERS_STYLE);
      ws.cell(1, 14).string("[Estatus de Registro]").style(HEADERS_STYLE);
      ws.cell(1, 15).string("[Acuse IMSS]").style(HEADERS_STYLE);
      ws.cell(1, 16).string("[Acuse INFONAVIT]").style(HEADERS_STYLE);
      ws.cell(1, 17).string("[CFDI Nomina]").style(HEADERS_STYLE);
      ws.cell(1, 18).string("[Pago Ret - ISR]").style(HEADERS_STYLE);
      ws.cell(1, 19).string("[Pago COP]").style(HEADERS_STYLE);
      ws.cell(1, 20).string("[Pago INFONAVIT]").style(HEADERS_STYLE);
      ws.cell(1, 21).string("[Acuse IVA]").style(HEADERS_STYLE);
      ws.cell(1, 22).string("[Pago IVA]").style(HEADERS_STYLE);
      ws.cell(1, 23).string("[Complemento de Pago]").style(HEADERS_STYLE);
      ws.cell(1, 24).string("[Listado de Trabajadores]").style(HEADERS_STYLE);
      ws.cell(1, 25).string("[Declaracion de IVA]").style(HEADERS_STYLE);

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

        if (data[a].Contrato === 0) {
          ws.cell(a + 2, 10)
            .number(data[a].Contrato)
            .style(style0);
        } else if (data[a].Contrato === 1) {
          ws.cell(a + 2, 10)
            .number(data[a].Contrato)
            .style(style1);
        } else if (data[a].Contrato === 2) {
          ws.cell(a + 2, 10)
            .number(data[a].Contrato)
            .style(style2);
        } else if (data[a].Contrato === 3) {
          ws.cell(a + 2, 10)
            .number(data[a].Contrato)
            .style(style3);
        } else if (data[a].Contrato === 4) {
          ws.cell(a + 2, 10)
            .number(data[a].Contrato)
            .style(style4);
        }

        ws.cell(a + 2, 11)
          .string(data[a].ODC ? data[a].ODC : "Null")
          .style(style);

        if (data[a]["CFDI Servicio"] === 0) {
          ws.cell(a + 2, 12)
            .number(data[a]["CFDI Servicio"])
            .style(style0);
        } else if (data[a]["CFDI Servicio"] === 1) {
          ws.cell(a + 2, 12)
            .number(data[a]["CFDI Servicio"])
            .style(style1);
        } else if (data[a]["CFDI Servicio"] === 2) {
          ws.cell(a + 2, 12)
            .number(data[a]["CFDI Servicio"])
            .style(style2);
        } else if (data[a]["CFDI Servicio"] === 3) {
          ws.cell(a + 2, 12)
            .number(data[a]["CFDI Servicio"])
            .style(style3);
        } else if (data[a]["CFDI Servicio"] === 4) {
          ws.cell(a + 2, 12)
            .number(data[a]["CFDI Servicio"])
            .style(style4);
        }

        if (data[a]["Registro STPS"] === 0) {
          ws.cell(a + 2, 13)
            .number(data[a]["Registro STPS"])
            .style(style0);
        } else if (data[a]["Registro STPS"] === 1) {
          ws.cell(a + 2, 13)
            .number(data[a]["Registro STPS"])
            .style(style1);
        } else if (data[a]["Registro STPS"] === 2) {
          ws.cell(a + 2, 13)
            .number(data[a]["Registro STPS"])
            .style(style2);
        } else if (data[a]["Registro STPS"] === 3) {
          ws.cell(a + 2, 13)
            .number(data[a]["Registro STPS"])
            .style(style3);
        } else if (data[a]["Registro STPS"] === 4) {
          ws.cell(a + 2, 13)
            .number(data[a]["Registro STPS"])
            .style(style4);
        }

        if (data[a]["Estatus de Registro"] === 0) {
          ws.cell(a + 2, 14)
            .number(data[a]["Estatus de Registro"])
            .style(style0);
        } else if (data[a]["Estatus de Registro"] === 1) {
          ws.cell(a + 2, 14)
            .number(data[a]["Estatus de Registro"])
            .style(style1);
        } else if (data[a]["Estatus de Registro"] === 2) {
          ws.cell(a + 2, 14)
            .number(data[a]["Estatus de Registro"])
            .style(style2);
        } else if (data[a]["Estatus de Registro"] === 3) {
          ws.cell(a + 2, 14)
            .number(data[a]["Estatus de Registro"])
            .style(style3);
        } else if (data[a]["Estatus de Registro"] === 4) {
          ws.cell(a + 2, 14)
            .number(data[a]["Estatus de Registro"])
            .style(style4);
        }

        if (data[a]["Acuse IMSS"] === 0) {
          ws.cell(a + 2, 15)
            .number(data[a]["Acuse IMSS"])
            .style(style0);
        } else if (data[a]["Acuse IMSS"] === 1) {
          ws.cell(a + 2, 15)
            .number(data[a]["Acuse IMSS"])
            .style(style1);
        } else if (data[a]["Acuse IMSS"] === 2) {
          ws.cell(a + 2, 15)
            .number(data[a]["Acuse IMSS"])
            .style(style2);
        } else if (data[a]["Acuse IMSS"] === 3) {
          ws.cell(a + 2, 15)
            .number(data[a]["Acuse IMSS"])
            .style(style3);
        } else if (data[a]["Acuse IMSS"] === 4) {
          ws.cell(a + 2, 15)
            .number(data[a]["Acuse IMSS"])
            .style(style4);
        }

        if (data[a]["Acuse INFONAVIT"] === 0) {
          ws.cell(a + 2, 16)
            .number(data[a]["Acuse INFONAVIT"])
            .style(style0);
        } else if (data[a]["Acuse INFONAVIT"] === 1) {
          ws.cell(a + 2, 16)
            .number(data[a]["Acuse INFONAVIT"])
            .style(style1);
        } else if (data[a]["Acuse INFONAVIT"] === 2) {
          ws.cell(a + 2, 16)
            .number(data[a]["Acuse INFONAVIT"])
            .style(style2);
        } else if (data[a]["Acuse INFONAVIT"] === 3) {
          ws.cell(a + 2, 16)
            .number(data[a]["Acuse INFONAVIT"])
            .style(style3);
        } else if (data[a]["Acuse INFONAVIT"] === 4) {
          ws.cell(a + 2, 16)
            .number(data[a]["Acuse INFONAVIT"])
            .style(style4);
        }

        if (data[a]["CFDI Nomina"] === 0) {
          ws.cell(a + 2, 17)
            .number(data[a]["CFDI Nomina"])
            .style(style0);
        } else if (data[a]["CFDI Nomina"] === 1) {
          ws.cell(a + 2, 17)
            .number(data[a]["CFDI Nomina"])
            .style(style1);
        } else if (data[a]["CFDI Nomina"] === 2) {
          ws.cell(a + 2, 17)
            .number(data[a]["CFDI Nomina"])
            .style(style2);
        } else if (data[a]["CFDI Nomina"] === 3) {
          ws.cell(a + 2, 17)
            .number(data[a]["CFDI Nomina"])
            .style(style3);
        } else if (data[a]["CFDI Nomina"] === 4) {
          ws.cell(a + 2, 17)
            .number(data[a]["CFDI Nomina"])
            .style(style4);
        }

        if (data[a]["Pago Ret - ISR"] === 0) {
          ws.cell(a + 2, 18)
            .number(data[a]["Pago Ret - ISR"])
            .style(style0);
        } else if (data[a]["Pago Ret - ISR"] === 1) {
          ws.cell(a + 2, 18)
            .number(data[a]["Pago Ret - ISR"])
            .style(style1);
        } else if (data[a]["Pago Ret - ISR"] === 2) {
          ws.cell(a + 2, 18)
            .number(data[a]["Pago Ret - ISR"])
            .style(style2);
        } else if (data[a]["Pago Ret - ISR"] === 3) {
          ws.cell(a + 2, 18)
            .number(data[a]["Pago Ret - ISR"])
            .style(style3);
        } else if (data[a]["Pago Ret - ISR"] === 4) {
          ws.cell(a + 2, 18)
            .number(data[a]["Pago Ret - ISR"])
            .style(style4);
        }

        if (data[a]["Pago COP"] === 0) {
          ws.cell(a + 2, 19)
            .number(data[a]["Pago COP"])
            .style(style0);
        } else if (data[a]["Pago COP"] === 1) {
          ws.cell(a + 2, 19)
            .number(data[a]["Pago COP"])
            .style(style1);
        } else if (data[a]["Pago COP"] === 2) {
          ws.cell(a + 2, 19)
            .number(data[a]["Pago COP"])
            .style(style2);
        } else if (data[a]["Pago COP"] === 3) {
          ws.cell(a + 2, 19)
            .number(data[a]["Pago COP"])
            .style(style3);
        } else if (data[a]["Pago COP"] === 4) {
          ws.cell(a + 2, 19)
            .number(data[a]["Pago COP"])
            .style(style4);
        }

        if (data[a]["Pago INFONAVIT"] === 0) {
          ws.cell(a + 2, 20)
            .number(data[a]["Pago INFONAVIT"])
            .style(style0);
        } else if (data[a]["Pago INFONAVIT"] === 1) {
          ws.cell(a + 2, 20)
            .number(data[a]["Pago INFONAVIT"])
            .style(style1);
        } else if (data[a]["Pago INFONAVIT"] === 2) {
          ws.cell(a + 2, 20)
            .number(data[a]["Pago INFONAVIT"])
            .style(style2);
        } else if (data[a]["Pago INFONAVIT"] === 3) {
          ws.cell(a + 2, 20)
            .number(data[a]["Pago INFONAVIT"])
            .style(style3);
        } else if (data[a]["Pago INFONAVIT"] === 4) {
          ws.cell(a + 2, 20)
            .number(data[a]["Pago INFONAVIT"])
            .style(style4);
        }

        if (data[a]["Acuse IVA"] === 0) {
          ws.cell(a + 2, 21)
            .number(data[a]["Acuse IVA"])
            .style(style0);
        } else if (data[a]["Acuse IVA"] === 1) {
          ws.cell(a + 2, 21)
            .number(data[a]["Acuse IVA"])
            .style(style1);
        } else if (data[a]["Acuse IVA"] === 2) {
          ws.cell(a + 2, 21)
            .number(data[a]["Acuse IVA"])
            .style(style2);
        } else if (data[a]["Acuse IVA"] === 3) {
          ws.cell(a + 2, 21)
            .number(data[a]["Acuse IVA"])
            .style(style3);
        } else if (data[a]["Acuse IVA"] === 4) {
          ws.cell(a + 2, 21)
            .number(data[a]["Acuse IVA"])
            .style(style4);
        }

        if (data[a]["Pago IVA"] === 0) {
          ws.cell(a + 2, 22)
            .number(data[a]["Pago IVA"])
            .style(style0);
        } else if (data[a]["Pago IVA"] === 1) {
          ws.cell(a + 2, 22)
            .number(data[a]["Pago IVA"])
            .style(style1);
        } else if (data[a]["Pago IVA"] === 2) {
          ws.cell(a + 2, 22)
            .number(data[a]["Pago IVA"])
            .style(style2);
        } else if (data[a]["Pago IVA"] === 3) {
          ws.cell(a + 2, 22)
            .number(data[a]["Pago IVA"])
            .style(style3);
        } else if (data[a]["Pago IVA"] === 4) {
          ws.cell(a + 2, 22)
            .number(data[a]["Pago IVA"])
            .style(style4);
        }

        if (data[a]["Complemento de Pago"] === 0) {
          ws.cell(a + 2, 23)
            .number(data[a]["Complemento de Pago"])
            .style(style0);
        } else if (data[a]["Complemento de Pago"] === 1) {
          ws.cell(a + 2, 23)
            .number(data[a]["Complemento de Pago"])
            .style(style1);
        } else if (data[a]["Complemento de Pago"] === 2) {
          ws.cell(a + 2, 23)
            .number(data[a]["Complemento de Pago"])
            .style(style2);
        } else if (data[a]["Complemento de Pago"] === 3) {
          ws.cell(a + 2, 23)
            .number(data[a]["Complemento de Pago"])
            .style(style3);
        } else if (data[a]["Complemento de Pago"] === 4) {
          ws.cell(a + 2, 23)
            .number(data[a]["Complemento de Pago"])
            .style(style4);
        }

        if (data[a]["Listado de Trabajadores"] === 0) {
          ws.cell(a + 2, 24)
            .number(data[a]["Listado de Trabajadores"])
            .style(style0);
        } else if (data[a]["Listado de Trabajadores"] === 1) {
          ws.cell(a + 2, 24)
            .number(data[a]["Listado de Trabajadores"])
            .style(style1);
        } else if (data[a]["Listado de Trabajadores"] === 2) {
          ws.cell(a + 2, 24)
            .number(data[a]["Listado de Trabajadores"])
            .style(style2);
        } else if (data[a]["Listado de Trabajadores"] === 3) {
          ws.cell(a + 2, 24)
            .number(data[a]["Listado de Trabajadores"])
            .style(style3);
        } else if (data[a]["Listado de Trabajadores"] === 4) {
          ws.cell(a + 2, 24)
            .number(data[a]["Listado de Trabajadores"])
            .style(style4);
        }

        if (data[a]["Declaracion de IVA"] === 0) {
          ws.cell(a + 2, 25)
            .number(data[a]["Declaracion de IVA"])
            .style(style0);
        } else if (data[a]["Declaracion de IVA"] === 1) {
          ws.cell(a + 2, 25)
            .number(data[a]["Declaracion de IVA"])
            .style(style1);
        } else if (data[a]["Declaracion de IVA"] === 2) {
          ws.cell(a + 2, 25)
            .number(data[a]["Declaracion de IVA"])
            .style(style2);
        } else if (data[a]["Declaracion de IVA"] === 3) {
          ws.cell(a + 2, 25)
            .number(data[a]["Declaracion de IVA"])
            .style(style3);
        } else if (data[a]["Declaracion de IVA"] === 4) {
          ws.cell(a + 2, 25)
            .number(data[a]["Declaracion de IVA"])
            .style(style4);
        }
      }
      wb.write(PATH_EXCEL, (error, stats) => {
        if (error) {
          notificationMailError(`Error al crear excel femco ${error}`);
          reject(error);
        } else {
          loggerconfig.info(`El excel de la empresa ${empresaData.abbreviation} se creo correctamente.`);
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

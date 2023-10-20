import sendAlertMain from "../mails/send_mail";
import xl from "excel4node";
import { getSuppliers } from "./Operador.controller";
import Empresa from "../database/models/Empresa.model";
import { prefijoEmpresa } from "../arreglos/prefixempresas.js";

export const createExcel = async (EmpresaId) => {
  let API_RESPONSE = await getSuppliers(EmpresaId);
  const extraData = await prefijoEmpresa.filter(
    (element) => element.UUID === EmpresaId
  );
  const namePath = `${extraData[0].abbreviation} - CUMPLIMIENTO CESE.xlsx`;
  let pathExcel = path.join(`${__dirname}/../files/${namePath}`);


  if (API_RESPONSE) {
    let wb = new xl.Workbook();
    let ws = wb.addWorksheet(`CUMPLIMIENTO ${extraData[0].prefix}`);
    let style = wb.createStyle({
      font: {
        color: "#000000",
        size: 11,
      },
      border: {
        left: {
          style: "thin",
          color: "black",
        },
        right: {
          style: "thin",
          color: "black",
        },
        top: {
          style: "thin",
          color: "black",
        },
        bottom: {
          style: "thin",
          color: "black",
        },
        outline: false,
      },
    });
    let style0 = wb.createStyle({
      font: {
        color: "#000000",
        bold: true,
        size: 10,
      },
      border: {
        left: {
          style: "thin",
          color: "black",
        },
        right: {
          style: "thin",
          color: "black",
        },
        top: {
          style: "thin",
          color: "black",
        },
        bottom: {
          style: "thin",
          color: "black",
        },
        outline: false,
      },
      alignment: {
        horizontal: "center",
        vertical: "center",
      },
      fill: {
        type: "pattern",
        patternType: "solid",
        bgColor: "#FF0000",
        fgColor: "#FF0000",
      },
    });
    let style1 = wb.createStyle({
      font: {
        color: "#000000",
        bold: true,
        size: 10,
      },
      alignment: {
        horizontal: "center",
        vertical: "center",
      },
      border: {
        left: {
          style: "thin",
          color: "black",
        },
        right: {
          style: "thin",
          color: "black",
        },
        top: {
          style: "thin",
          color: "black",
        },
        bottom: {
          style: "thin",
          color: "black",
        },
        outline: false,
      },
      fill: {
        type: "pattern",
        patternType: "solid",
        bgColor: "#C65911",
        fgColor: "#C65911",
      },
    });
    let style2 = wb.createStyle({
      font: {
        color: "#000000",
        bold: true,
        size: 10,
      },
      alignment: {
        horizontal: "center",
        vertical: "center",
      },
      border: {
        left: {
          style: "thin",
          color: "black",
        },
        right: {
          style: "thin",
          color: "black",
        },
        top: {
          style: "thin",
          color: "black",
        },
        bottom: {
          style: "thin",
          color: "black",
        },
        outline: false,
      },
      fill: {
        type: "pattern",
        patternType: "solid",
        bgColor: "#3A3838",
        fgColor: "#3A3838",
      },
    });
    let style3 = wb.createStyle({
      font: {
        color: "#000000",
        bold: true,
        size: 10,
      },
      alignment: {
        horizontal: "center",
        vertical: "center",
      },
      border: {
        left: {
          style: "thin",
          color: "black",
        },
        right: {
          style: "thin",
          color: "black",
        },
        top: {
          style: "thin",
          color: "black",
        },
        bottom: {
          style: "thin",
          color: "black",
        },
        outline: false,
      },
      fill: {
        type: "pattern",
        patternType: "solid",
        bgColor: "#FFFF00",
        fgColor: "#FFFF00",
      },
    });
    let style4 = wb.createStyle({
      font: {
        color: "#000000",
        bold: true,
        size: 10,
      },
      alignment: {
        horizontal: "center",
        vertical: "center",
      },
      border: {
        left: {
          style: "thin",
          color: "black",
        },
        right: {
          style: "thin",
          color: "black",
        },
        top: {
          style: "thin",
          color: "black",
        },
        bottom: {
          style: "thin",
          color: "black",
        },
        outline: false,
      },
      fill: {
        type: "pattern",
        patternType: "solid",
        bgColor: "#00B050",
        fgColor: "#00B050",
      },
    });
    let style_cabeceras = wb.createStyle({
      font: {
        color: "#ffffff",
        size: 11,
        bold: true,
      },
      fill: {
        type: "pattern",
        patternType: "solid",
        bgColor: "#4472C4",
        fgColor: "#4472C4",
      },
      border: {
        left: {
          style: "thin",
          color: "black",
        },
        right: {
          style: "thin",
          color: "black",
        },
        top: {
          style: "thin",
          color: "black",
        },
        bottom: {
          style: "thin",
          color: "black",
        },
        outline: false,
      },
    });
    ws.cell(1, 1).string("RFC_EMPRESA").style(style_cabeceras);
    ws.cell(1, 2).string("EMPRESA_CONTRATANTE").style(style_cabeceras);
    ws.cell(1, 3).string("RFC_PROVEEDOR").style(style_cabeceras);
    ws.cell(1, 4).string("RAZON_SOCIAL").style(style_cabeceras);
    ws.cell(1, 5).string("EMAIL").style(style_cabeceras);
    ws.cell(1, 6).string("AÑO").style(style_cabeceras);
    ws.cell(1, 7).string("MES").style(style_cabeceras);
    ws.cell(1, 8).string("MES_CUMPLIMIENTO").style(style_cabeceras);
    ws.cell(1, 9).string("Score").style(style_cabeceras);
    ws.cell(1, 10).string("Contrato").style(style_cabeceras);
    ws.cell(1, 11).string("ODC").style(style_cabeceras);
    ws.cell(1, 12).string("[CFDI Servicio]").style(style_cabeceras);
    ws.cell(1, 13).string("[Registro STPS]").style(style_cabeceras);
    ws.cell(1, 14).string("[Estatus de Registro]").style(style_cabeceras);
    ws.cell(1, 15).string("[Acuse IMSS]").style(style_cabeceras);
    ws.cell(1, 16).string("[Acuse INFONAVIT]").style(style_cabeceras);
    ws.cell(1, 17).string("[CFDI Nomina]").style(style_cabeceras);
    ws.cell(1, 18).string("[Pago Ret - ISR]").style(style_cabeceras);
    ws.cell(1, 19).string("[Pago COP]").style(style_cabeceras);
    ws.cell(1, 20).string("[Pago INFONAVIT]").style(style_cabeceras);
    ws.cell(1, 21).string("[Acuse IVA]").style(style_cabeceras);
    ws.cell(1, 22).string("[Pago IVA]").style(style_cabeceras);
    ws.cell(1, 23).string("[Complemento de Pago]").style(style_cabeceras);
    ws.cell(1, 24).string("[Listado de Trabajadores]").style(style_cabeceras);
    ws.cell(1, 25).string("[Declaracion de IVA]").style(style_cabeceras);

    for (let a = 0; a < API_RESPONSE.length; a++) {
      ws.cell(a + 2, 1)
        .string(API_RESPONSE[a].RFC_EMPRESA)
        .style(style);
      ws.cell(a + 2, 2)
        .string(API_RESPONSE[a].EMPRESA_CONTRATANTE)
        .style(style);
      ws.cell(a + 2, 3)
        .string(API_RESPONSE[a].RFC_PROVEEDOR)
        .style(style);
      ws.cell(a + 2, 4)
        .string(API_RESPONSE[a].RAZON_SOCIAL)
        .style(style);
      ws.cell(a + 2, 5)
        .string(API_RESPONSE[a].CORREO_ELEC)
        .style(style);
      ws.cell(a + 2, 6)
        .number(API_RESPONSE[a].AÑO)
        .style(style);
      ws.cell(a + 2, 7)
        .string(API_RESPONSE[a].MES)
        .style(style);
      ws.cell(a + 2, 8)
        .string(API_RESPONSE[a].MES_CUMPLIMIENTO)
        .style(style);
      ws.cell(a + 2, 9)
        .string(API_RESPONSE[a].Score)
        .style(style);

      if (API_RESPONSE[a].Contrato === 0) {
        ws.cell(a + 2, 10)
          .number(API_RESPONSE[a].Contrato)
          .style(style0);
      } else if (API_RESPONSE[a].Contrato === 1) {
        ws.cell(a + 2, 10)
          .number(API_RESPONSE[a].Contrato)
          .style(style1);
      } else if (API_RESPONSE[a].Contrato === 2) {
        ws.cell(a + 2, 10)
          .number(API_RESPONSE[a].Contrato)
          .style(style2);
      } else if (API_RESPONSE[a].Contrato === 3) {
        ws.cell(a + 2, 10)
          .number(API_RESPONSE[a].Contrato)
          .style(style3);
      } else if (API_RESPONSE[a].Contrato === 4) {
        ws.cell(a + 2, 10)
          .number(API_RESPONSE[a].Contrato)
          .style(style4);
      }

      ws.cell(a + 2, 11)
        .string(API_RESPONSE[a].ODC ? API_RESPONSE[a].ODC : "Null")
        .style(style);

      if (API_RESPONSE[a]["CFDI Servicio"] === 0) {
        ws.cell(a + 2, 12)
          .number(API_RESPONSE[a]["CFDI Servicio"])
          .style(style0);
      } else if (API_RESPONSE[a]["CFDI Servicio"] === 1) {
        ws.cell(a + 2, 12)
          .number(API_RESPONSE[a]["CFDI Servicio"])
          .style(style1);
      } else if (API_RESPONSE[a]["CFDI Servicio"] === 2) {
        ws.cell(a + 2, 12)
          .number(API_RESPONSE[a]["CFDI Servicio"])
          .style(style2);
      } else if (API_RESPONSE[a]["CFDI Servicio"] === 3) {
        ws.cell(a + 2, 12)
          .number(API_RESPONSE[a]["CFDI Servicio"])
          .style(style3);
      } else if (API_RESPONSE[a]["CFDI Servicio"] === 4) {
        ws.cell(a + 2, 12)
          .number(API_RESPONSE[a]["CFDI Servicio"])
          .style(style4);
      }

      if (API_RESPONSE[a]["Registro STPS"] === 0) {
        ws.cell(a + 2, 13)
          .number(API_RESPONSE[a]["Registro STPS"])
          .style(style0);
      } else if (API_RESPONSE[a]["Registro STPS"] === 1) {
        ws.cell(a + 2, 13)
          .number(API_RESPONSE[a]["Registro STPS"])
          .style(style1);
      } else if (API_RESPONSE[a]["Registro STPS"] === 2) {
        ws.cell(a + 2, 13)
          .number(API_RESPONSE[a]["Registro STPS"])
          .style(style2);
      } else if (API_RESPONSE[a]["Registro STPS"] === 3) {
        ws.cell(a + 2, 13)
          .number(API_RESPONSE[a]["Registro STPS"])
          .style(style3);
      } else if (API_RESPONSE[a]["Registro STPS"] === 4) {
        ws.cell(a + 2, 13)
          .number(API_RESPONSE[a]["Registro STPS"])
          .style(style4);
      }

      if (API_RESPONSE[a]["Estatus de Registro"] === 0) {
        ws.cell(a + 2, 14)
          .number(API_RESPONSE[a]["Estatus de Registro"])
          .style(style0);
      } else if (API_RESPONSE[a]["Estatus de Registro"] === 1) {
        ws.cell(a + 2, 14)
          .number(API_RESPONSE[a]["Estatus de Registro"])
          .style(style1);
      } else if (API_RESPONSE[a]["Estatus de Registro"] === 2) {
        ws.cell(a + 2, 14)
          .number(API_RESPONSE[a]["Estatus de Registro"])
          .style(style2);
      } else if (API_RESPONSE[a]["Estatus de Registro"] === 3) {
        ws.cell(a + 2, 14)
          .number(API_RESPONSE[a]["Estatus de Registro"])
          .style(style3);
      } else if (API_RESPONSE[a]["Estatus de Registro"] === 4) {
        ws.cell(a + 2, 14)
          .number(API_RESPONSE[a]["Estatus de Registro"])
          .style(style4);
      }

      if (API_RESPONSE[a]["Acuse IMSS"] === 0) {
        ws.cell(a + 2, 15)
          .number(API_RESPONSE[a]["Acuse IMSS"])
          .style(style0);
      } else if (API_RESPONSE[a]["Acuse IMSS"] === 1) {
        ws.cell(a + 2, 15)
          .number(API_RESPONSE[a]["Acuse IMSS"])
          .style(style1);
      } else if (API_RESPONSE[a]["Acuse IMSS"] === 2) {
        ws.cell(a + 2, 15)
          .number(API_RESPONSE[a]["Acuse IMSS"])
          .style(style2);
      } else if (API_RESPONSE[a]["Acuse IMSS"] === 3) {
        ws.cell(a + 2, 15)
          .number(API_RESPONSE[a]["Acuse IMSS"])
          .style(style3);
      } else if (API_RESPONSE[a]["Acuse IMSS"] === 4) {
        ws.cell(a + 2, 15)
          .number(API_RESPONSE[a]["Acuse IMSS"])
          .style(style4);
      }

      if (API_RESPONSE[a]["Acuse INFONAVIT"] === 0) {
        ws.cell(a + 2, 16)
          .number(API_RESPONSE[a]["Acuse INFONAVIT"])
          .style(style0);
      } else if (API_RESPONSE[a]["Acuse INFONAVIT"] === 1) {
        ws.cell(a + 2, 16)
          .number(API_RESPONSE[a]["Acuse INFONAVIT"])
          .style(style1);
      } else if (API_RESPONSE[a]["Acuse INFONAVIT"] === 2) {
        ws.cell(a + 2, 16)
          .number(API_RESPONSE[a]["Acuse INFONAVIT"])
          .style(style2);
      } else if (API_RESPONSE[a]["Acuse INFONAVIT"] === 3) {
        ws.cell(a + 2, 16)
          .number(API_RESPONSE[a]["Acuse INFONAVIT"])
          .style(style3);
      } else if (API_RESPONSE[a]["Acuse INFONAVIT"] === 4) {
        ws.cell(a + 2, 16)
          .number(API_RESPONSE[a]["Acuse INFONAVIT"])
          .style(style4);
      }

      if (API_RESPONSE[a]["CFDI Nomina"] === 0) {
        ws.cell(a + 2, 17)
          .number(API_RESPONSE[a]["CFDI Nomina"])
          .style(style0);
      } else if (API_RESPONSE[a]["CFDI Nomina"] === 1) {
        ws.cell(a + 2, 17)
          .number(API_RESPONSE[a]["CFDI Nomina"])
          .style(style1);
      } else if (API_RESPONSE[a]["CFDI Nomina"] === 2) {
        ws.cell(a + 2, 17)
          .number(API_RESPONSE[a]["CFDI Nomina"])
          .style(style2);
      } else if (API_RESPONSE[a]["CFDI Nomina"] === 3) {
        ws.cell(a + 2, 17)
          .number(API_RESPONSE[a]["CFDI Nomina"])
          .style(style3);
      } else if (API_RESPONSE[a]["CFDI Nomina"] === 4) {
        ws.cell(a + 2, 17)
          .number(API_RESPONSE[a]["CFDI Nomina"])
          .style(style4);
      }

      if (API_RESPONSE[a]["Pago Ret - ISR"] === 0) {
        ws.cell(a + 2, 18)
          .number(API_RESPONSE[a]["Pago Ret - ISR"])
          .style(style0);
      } else if (API_RESPONSE[a]["Pago Ret - ISR"] === 1) {
        ws.cell(a + 2, 18)
          .number(API_RESPONSE[a]["Pago Ret - ISR"])
          .style(style1);
      } else if (API_RESPONSE[a]["Pago Ret - ISR"] === 2) {
        ws.cell(a + 2, 18)
          .number(API_RESPONSE[a]["Pago Ret - ISR"])
          .style(style2);
      } else if (API_RESPONSE[a]["Pago Ret - ISR"] === 3) {
        ws.cell(a + 2, 18)
          .number(API_RESPONSE[a]["Pago Ret - ISR"])
          .style(style3);
      } else if (API_RESPONSE[a]["Pago Ret - ISR"] === 4) {
        ws.cell(a + 2, 18)
          .number(API_RESPONSE[a]["Pago Ret - ISR"])
          .style(style4);
      }

      if (API_RESPONSE[a]["Pago COP"] === 0) {
        ws.cell(a + 2, 19)
          .number(API_RESPONSE[a]["Pago COP"])
          .style(style0);
      } else if (API_RESPONSE[a]["Pago COP"] === 1) {
        ws.cell(a + 2, 19)
          .number(API_RESPONSE[a]["Pago COP"])
          .style(style1);
      } else if (API_RESPONSE[a]["Pago COP"] === 2) {
        ws.cell(a + 2, 19)
          .number(API_RESPONSE[a]["Pago COP"])
          .style(style2);
      } else if (API_RESPONSE[a]["Pago COP"] === 3) {
        ws.cell(a + 2, 19)
          .number(API_RESPONSE[a]["Pago COP"])
          .style(style3);
      } else if (API_RESPONSE[a]["Pago COP"] === 4) {
        ws.cell(a + 2, 19)
          .number(API_RESPONSE[a]["Pago COP"])
          .style(style4);
      }

      if (API_RESPONSE[a]["Pago INFONAVIT"] === 0) {
        ws.cell(a + 2, 20)
          .number(API_RESPONSE[a]["Pago INFONAVIT"])
          .style(style0);
      } else if (API_RESPONSE[a]["Pago INFONAVIT"] === 1) {
        ws.cell(a + 2, 20)
          .number(API_RESPONSE[a]["Pago INFONAVIT"])
          .style(style1);
      } else if (API_RESPONSE[a]["Pago INFONAVIT"] === 2) {
        ws.cell(a + 2, 20)
          .number(API_RESPONSE[a]["Pago INFONAVIT"])
          .style(style2);
      } else if (API_RESPONSE[a]["Pago INFONAVIT"] === 3) {
        ws.cell(a + 2, 20)
          .number(API_RESPONSE[a]["Pago INFONAVIT"])
          .style(style3);
      } else if (API_RESPONSE[a]["Pago INFONAVIT"] === 4) {
        ws.cell(a + 2, 20)
          .number(API_RESPONSE[a]["Pago INFONAVIT"])
          .style(style4);
      }

      if (API_RESPONSE[a]["Acuse IVA"] === 0) {
        ws.cell(a + 2, 21)
          .number(API_RESPONSE[a]["Acuse IVA"])
          .style(style0);
      } else if (API_RESPONSE[a]["Acuse IVA"] === 1) {
        ws.cell(a + 2, 21)
          .number(API_RESPONSE[a]["Acuse IVA"])
          .style(style1);
      } else if (API_RESPONSE[a]["Acuse IVA"] === 2) {
        ws.cell(a + 2, 21)
          .number(API_RESPONSE[a]["Acuse IVA"])
          .style(style2);
      } else if (API_RESPONSE[a]["Acuse IVA"] === 3) {
        ws.cell(a + 2, 21)
          .number(API_RESPONSE[a]["Acuse IVA"])
          .style(style3);
      } else if (API_RESPONSE[a]["Acuse IVA"] === 4) {
        ws.cell(a + 2, 21)
          .number(API_RESPONSE[a]["Acuse IVA"])
          .style(style4);
      }

      if (API_RESPONSE[a]["Pago IVA"] === 0) {
        ws.cell(a + 2, 22)
          .number(API_RESPONSE[a]["Pago IVA"])
          .style(style0);
      } else if (API_RESPONSE[a]["Pago IVA"] === 1) {
        ws.cell(a + 2, 22)
          .number(API_RESPONSE[a]["Pago IVA"])
          .style(style1);
      } else if (API_RESPONSE[a]["Pago IVA"] === 2) {
        ws.cell(a + 2, 22)
          .number(API_RESPONSE[a]["Pago IVA"])
          .style(style2);
      } else if (API_RESPONSE[a]["Pago IVA"] === 3) {
        ws.cell(a + 2, 22)
          .number(API_RESPONSE[a]["Pago IVA"])
          .style(style3);
      } else if (API_RESPONSE[a]["Pago IVA"] === 4) {
        ws.cell(a + 2, 22)
          .number(API_RESPONSE[a]["Pago IVA"])
          .style(style4);
      }

      if (API_RESPONSE[a]["Complemento de Pago"] === 0) {
        ws.cell(a + 2, 23)
          .number(API_RESPONSE[a]["Complemento de Pago"])
          .style(style0);
      } else if (API_RESPONSE[a]["Complemento de Pago"] === 1) {
        ws.cell(a + 2, 23)
          .number(API_RESPONSE[a]["Complemento de Pago"])
          .style(style1);
      } else if (API_RESPONSE[a]["Complemento de Pago"] === 2) {
        ws.cell(a + 2, 23)
          .number(API_RESPONSE[a]["Complemento de Pago"])
          .style(style2);
      } else if (API_RESPONSE[a]["Complemento de Pago"] === 3) {
        ws.cell(a + 2, 23)
          .number(API_RESPONSE[a]["Complemento de Pago"])
          .style(style3);
      } else if (API_RESPONSE[a]["Complemento de Pago"] === 4) {
        ws.cell(a + 2, 23)
          .number(API_RESPONSE[a]["Complemento de Pago"])
          .style(style4);
      }

      if (API_RESPONSE[a]["Listado de Trabajadores"] === 0) {
        ws.cell(a + 2, 24)
          .number(API_RESPONSE[a]["Listado de Trabajadores"])
          .style(style0);
      } else if (API_RESPONSE[a]["Listado de Trabajadores"] === 1) {
        ws.cell(a + 2, 24)
          .number(API_RESPONSE[a]["Listado de Trabajadores"])
          .style(style1);
      } else if (API_RESPONSE[a]["Listado de Trabajadores"] === 2) {
        ws.cell(a + 2, 24)
          .number(API_RESPONSE[a]["Listado de Trabajadores"])
          .style(style2);
      } else if (API_RESPONSE[a]["Listado de Trabajadores"] === 3) {
        ws.cell(a + 2, 24)
          .number(API_RESPONSE[a]["Listado de Trabajadores"])
          .style(style3);
      } else if (API_RESPONSE[a]["Listado de Trabajadores"] === 4) {
        ws.cell(a + 2, 24)
          .number(API_RESPONSE[a]["Listado de Trabajadores"])
          .style(style4);
      }

      if (API_RESPONSE[a]["Declaracion de IVA"] === 0) {
        ws.cell(a + 2, 25)
          .number(API_RESPONSE[a]["Declaracion de IVA"])
          .style(style0);
      } else if (API_RESPONSE[a]["Declaracion de IVA"] === 1) {
        ws.cell(a + 2, 25)
          .number(API_RESPONSE[a]["Declaracion de IVA"])
          .style(style1);
      } else if (API_RESPONSE[a]["Declaracion de IVA"] === 2) {
        ws.cell(a + 2, 25)
          .number(API_RESPONSE[a]["Declaracion de IVA"])
          .style(style2);
      } else if (API_RESPONSE[a]["Declaracion de IVA"] === 3) {
        ws.cell(a + 2, 25)
          .number(API_RESPONSE[a]["Declaracion de IVA"])
          .style(style3);
      } else if (API_RESPONSE[a]["Declaracion de IVA"] === 4) {
        ws.cell(a + 2, 25)
          .number(API_RESPONSE[a]["Declaracion de IVA"])
          .style(style4);
      }
    }
    wb.write(pathExcel);
    console.log("Se descargo correctamente el archivo.");
  }
};

export const getCompany = async (id) => {
  const companie = await Empresa.findByPk(id);
  return companie;
};

export const sendMailTest = async (EmpresaId) => {
  const data = await getSuppliers(EmpresaId);
  const companie = await getCompany(EmpresaId);
  const extraData = await prefijoEmpresa.filter(
    (element) => element.UUID === EmpresaId
  );
  for (const element of data) {
    try {
      await sendAlertMain(
        element.CORREO_ELEC,
        EmpresaId,
        extraData[0].abbreviation,
        element.RAZON_SOCIAL,
        element.Score,
        element.MES_CUMPLIMIENTO,
        element.MES,
        element.AÑO,
        companie.nombre
      );
    } catch (error) {
      console.log(error);
    }
  }

  console.log("Mail Enviado");
};

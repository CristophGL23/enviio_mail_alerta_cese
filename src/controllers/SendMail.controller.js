import sendAlertMain from "../mails/send_mail";
import xl from "excel4node";
import path from "path";
import axios from "axios";
import { getSupplier } from "./Operador.controller";

const API_SAMPLE_URL =
  "https://samples.openweathermap.org/data/2.5/forecast/hourly?id=524901&appid=b6907d289e10d714a6e88b30761fae22";

const getWeatherData = async () => {
  try {
    return await axios.get(API_SAMPLE_URL);
  } catch (error) {
    console.error(error);
  }
};

export const createExcel = async (req, res) => {
  const weatherData = await getWeatherData();
  if (weatherData.data) {
    let API_RESPONSE = await getSupplier();
    let wb = new xl.Workbook();
    let ws = wb.addWorksheet("Weather Data");
    let style = wb.createStyle({
      font: {
        color: "#000000",
      },
    });
    let style_cabeceras = wb.createStyle({
      font: {
        color: "#ffffff",
      },
      fill: {
        type: "pattern",
        patternType: "solid",
        bgColor: "#4472C4",
        fgColor: "#4472C4",
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
      ws.cell(a + 2, 10)
        .number(API_RESPONSE[a].Contrato)
        .style(style);
      ws.cell(a + 2, 11)
        .string(API_RESPONSE[a].ODC ? API_RESPONSE[a].ODC : "Null")
        .style(style);
      ws.cell(a + 2, 12)
        .string(API_RESPONSE[a]['CFDI Servicio'])
        .style(style);
      ws.cell(a + 2, 13)
        .string(API_RESPONSE[a][12])
        .style(style);
      ws.cell(a + 2, 14)
        .string(API_RESPONSE[a][13])
        .style(style);
    }
    wb.write("WeatherData.xlsx");
    res.json("Se descargo correctamente el archivo.");
  }
};
export const sendMailTest = async (req, res) => {
  await sendAlertMain("crodriguez@glwinba.com");

  res.json("Mail Enviado");
};

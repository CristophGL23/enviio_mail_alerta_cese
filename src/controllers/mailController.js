import transporter from "../configs/mailconfig.js";
import fs from "fs";
import handlebars from "handlebars";
import config from "../config.js";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const HTML_FILE_ERROR = `${__dirname}/../templates/error.html`;
const HTML_FILE_LAUREATE = `${__dirname}/../templates/layout_alertas_laureate.html`;
const HTML_FILE_ALERT = `${__dirname}/../templates/layout_alertas.html`;

export const sendMailAlert = (
  dataProveedor = [],
  dataEmpresa
) => {
  for (const data of dataProveedor) {
    new Promise((resolve, reject) => {
      const score = data.Score; 
      const MES_CUMPLIMIENTO = data.MES_CUMPLIMIENTO; 
      const MES = data.MES;
      const razon_social = data.RAZON_SOCIAL;
      const AÑO = data.AÑO;
      const correo = data.CORREO_ELEC;
      const EMPRESA_CONTRATANTE = data.EMPRESA_CONTRATANTE;
      const abreviacion = dataEmpresa.abbreviation;
      const subject = (dataEmpresa.UUID === 935 || dataEmpresa.UUID === 950) ? `LAUREATE / ALERTA CUMPLIMIENTO REPSE` : `${abreviacion} / ALERTA CUMPLIMIENTO REPSE`;
      const HTML_FILE = (dataEmpresa.UUID === 935 || dataEmpresa.UUID === 950) ? HTML_FILE_LAUREATE : HTML_FILE_ALERT;
      

      const HTML_SYNC = fs.readFileSync(HTML_FILE, { encoding: "utf-8" });
      const template = handlebars.compile(HTML_SYNC);
      
      const replacements = {
        correo,
        abreviacion,
        razon_social,
        score,
        MES_CUMPLIMIENTO,
        MES,
        AÑO,
        EMPRESA_CONTRATANTE
      };
      const HTML_TO_SEND = template(replacements);

      const MAIL_OPTIONS = {
        from: config.MAIL_USER,
        to: correo,
        subject: subject,
        html: HTML_TO_SEND,
      };

      transporter.sendMail(MAIL_OPTIONS, (error, info) => {
        if (error) {
          logger.error(`Error en el envio de mail ${error}`);
          reject(error);
        } else resolve(info);
      });
    });
  }
};

export const sendMailError = (contenido) =>
  new Promise((resolve, reject) => {
    const htmlSync = fs.readFileSync(HTML_FILE_ERROR, { encoding: "utf-8" });
    const template = handlebars.compile(htmlSync);
    const replacements = {
      contenido,
    };

    const htmlToSend = template(replacements);

    const mailConfigs = {
      from: config.MAIL_USER,
      to: "crodriguez@glwinba.com",
      subject: `GLWINBA / ¡ERROR! ENVIO DE ALERTAS`,
      html: htmlToSend,
      cc: [
        "cfonseca@glwinba.com",
        "eavelar@garridolicona.com",
        "dbetanzos@glwinba.com",
        "afernandez@glwinba.com",
      ],
    };

    transporter.sendMail(mailConfigs, (error, info) => {
      if (error) {
        logger.error(`Error en el envio de mail ${error}`);
        reject(error);
      } else resolve(info);
    });
  });

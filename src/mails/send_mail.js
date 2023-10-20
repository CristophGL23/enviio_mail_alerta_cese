import transporter from "./config.js";
import fs from "fs";
import handlebars from "handlebars";
import config from "../config.js";

const sendAlertMain = (correo, EmpresaId, abreviacion, razon_social, score, MES_CUMPLIMIENTO, MES, AÑO, NombreEmpresa) =>
  new Promise((resolve, reject) => {
    let subject;
    let htmlFile;

    if (EmpresaId === 935 && EmpresaId === 950) {
      subject = `LAUREATE / ALERTA CUMPLIMIENTO REPSE`;
      htmlFile = `${__dirname}/layout_alertas_laureate.html`;
    } else {
      subject = `${abreviacion} / ALERTA CUMPLIMIENTO REPSE`;
      htmlFile = `${__dirname}/layout_alertas.html`;
    }
    const htmlSync = fs.readFileSync(htmlFile, { encoding: "utf-8" });
    const template = handlebars.compile(htmlSync);
    const replacements = {
      correo,
      abreviacion,
      razon_social,
      score,
      MES_CUMPLIMIENTO,
      MES,
      AÑO,
      NombreEmpresa
    };
    const htmlToSend = template(replacements);

    let mailOptions = {
      from: config.MAIL_USER,
      to: correo,
      subject: subject,
      html: htmlToSend,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else resolve(info);
    });
  });


  const sendLuareateCumplimiento = (correo, EmpresaId, abreviacion, razon_social, score, MES_CUMPLIMIENTO, MES, AÑO, NombreEmpresa) =>
  new Promise((resolve, reject) => {
    let subject;
    let htmlFile;

    if (EmpresaId === 935 && EmpresaId === 950) {
      subject = `LAUREATE / ALERTA CUMPLIMIENTO REPSE`;
      htmlFile = `${__dirname}/layout_alertas_laureate.html`;
    } else {
      subject = `${abreviacion} / ALERTA CUMPLIMIENTO REPSE`;
      htmlFile = `${__dirname}/layout_alertas.html`;
    }
    const htmlSync = fs.readFileSync(htmlFile, { encoding: "utf-8" });
    const template = handlebars.compile(htmlSync);
    const replacements = {
      correo,
      abreviacion,
      razon_social,
      score,
      MES_CUMPLIMIENTO,
      MES,
      AÑO,
      NombreEmpresa
    };
    const htmlToSend = template(replacements);

    let mailOptions = {
      from: config.MAIL_USER,
      to: correo,
      subject: subject,
      html: htmlToSend,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else resolve(info);
    });
  });

export default sendAlertMain;

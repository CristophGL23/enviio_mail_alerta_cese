import transporter from "./config.js";
import fs from "fs";
import handlebars from "handlebars";
import config from "../config.js";

const sendAlertMain = (correo, EmpresaId, abreviacion) =>
  new Promise((resolve, reject) => {
    let subject;
    let htmlFile;

    if (EmpresaId === 935 && EmpresaId === 950) {
      subject = `LAUREATE / CONTROL DE EMPRESAS DE SERVICIOS ESPECIALIZADOS`;
      htmlFile = `${__dirname}/layout_alertas_laureate.html`;
    } else {
      subject = `${abreviacion} / CONTROL DE EMPRESAS DE SERVICIOS ESPECIALIZADOS`;
      htmlFile = `${__dirname}/layout_alertas.html`;
    }
    const htmlSync = fs.readFileSync(htmlFile, { encoding: "utf-8" });
    const template = handlebars.compile(htmlSync);
    const replacements = {
      correo,
      abreviacion
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

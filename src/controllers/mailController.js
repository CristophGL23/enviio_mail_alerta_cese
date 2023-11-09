import transporter from "../configs/mailconfig.js";
import fs from "fs";
import handlebars from "handlebars";
import config from "../config.js";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const HTML_FILE_ERROR = `${__dirname}/../templates/error.html`;

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
      // cc: [
      //   "cfonseca@glwinba.com",
      //   "eavelar@garridolicona.com",
      //   "dbetanzos@glwinba.com",
      //   "afernandez@glwinba.com",
      // ],
    };

    transporter.sendMail(mailConfigs, (error, info) => {
      if (error) {
        logger.error(`Error en el envio de mail ${error}`);
        reject(error);
      } else resolve(info);
    });
  });

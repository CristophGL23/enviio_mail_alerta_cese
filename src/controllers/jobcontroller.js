import { prefijoEmpresa } from "../arreglos/prefixempresas.js";
import loggerconfig from "../configs/loggerconfig.js";
import { createExcel } from "./excelcontroller.js";
import { notificationMailError } from "./notificationcontroller.js";
import { execSpData } from "./spcontroller.js";

export async function sendAlerts() {
  try {
    loggerconfig.info('******************** Se comenzó a ejecutar la automatización de envió de alertas ************************')
    for (const empresa of prefijoEmpresa) {
      const DATA = await execSpData(empresa.UUID);
      const EXCEL = await createExcel(DATA, empresa);
    }

    loggerconfig.info('******************** Se termino de ejecutar la automatización de envió de alertas ************************')
  } catch (error) {
    notificationMailError(`Error en el envió de alertas ${error}`);
  }
}

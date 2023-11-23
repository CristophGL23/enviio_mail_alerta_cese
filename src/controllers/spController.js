import loggerconfig from "../configs/loggerconfig.js";
import sequelize from "../database/connection.js";
import { getMonthLetter } from "../helpers/dateHelper.js";
import { notificationMailError } from "./notificationcontroller.js";

export async function execSpData(EmpresaId) {
  let supplier = [];
  const month = getMonthLetter(EmpresaId);
  try {
    loggerconfig.info(`Se comenzo a ejecutar el SP de la Empresa con el Id: ${EmpresaId}`)
    if (EmpresaId === 935 || EmpresaId === 950) {
      supplier = await sequelize.query(
        `EXEC [BM_SERV_ESP].[SP_MAILS_PROVEEDORES] @OPCION = 10, @EMPRESA_ID = '${EmpresaId}'`
      );
    } else {
      supplier = await sequelize.query(
        `EXEC [BM_SERV_ESP].[SP_MAILS_PROVEEDORES] @OPCION = 9, @EMPRESA_ID = '${EmpresaId}'`
      );
    }
    
    if (EmpresaId === 871) {
      return supplier[0].filter(
        (element) =>
          element.MES === month &&
          element.AÑO === 2023 &&
          element.Score != "100.00 %" &&
          element.RFC_PROVEEDOR != "CSC070517G79" &&
          element.RFC_PROVEEDOR != "FSE920910CC6"
      );
    }
    
    return supplier[0].filter(
      (element) =>
        element.MES === month &&
        element.AÑO === 2023 &&
        element.Score != "100.00 %"
    );
  } catch (error) {
    notificationMailError(`Error al ejecutar SP de la empresa con el Id: ${EmpresaId} error:${error}`);
  }
}



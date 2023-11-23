import loggerconfig from "../configs/loggerconfig.js";
import sequelize from "../database/connection.js";
import { getMonthLetter } from "../helpers/dateHelper.js";
import { notificationMailError } from "./notificationcontroller.js";

export async function execSpData(EmpresaId) {
  const month = getMonthLetter(EmpresaId);
  try {
    loggerconfig.info(
      `Se comenzo a ejecutar el SP de la Empresa con el Id: ${EmpresaId}`
    );
    const OPTION = EmpresaId === 935 || EmpresaId === 950 ? 10 : 9;

    const [DATA_SUPPLIER_ALERTS, ROW_AFFECTS] = await sequelize.query(
      `EXEC [BM_SERV_ESP].[SP_MAILS_PROVEEDORES] @OPCION = ${OPTION}, @EMPRESA_ID = '${EmpresaId}'`
    );

    if (EmpresaId === 871) {
      return DATA_SUPPLIER_ALERTS.filter(
        (element) =>
          element.MES === month &&
          element.AÑO === 2023 &&
          element.Score != "100.00 %" &&
          element.RFC_PROVEEDOR != "CSC070517G79" &&
          element.RFC_PROVEEDOR != "FSE920910CC6"
      );
    }

    return DATA_SUPPLIER_ALERTS.filter(
      (element) =>
        element.MES === month &&
        element.AÑO === 2023 &&
        element.Score != "100.00 %"
    );
  } catch (error) {
    notificationMailError(
      `Error al ejecutar SP de la empresa con el Id: ${EmpresaId} error:${error}`
    );
  }
}

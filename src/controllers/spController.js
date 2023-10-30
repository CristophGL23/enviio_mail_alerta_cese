import { sequelizeBMServEsp as sequelize } from "../database/connection.js";
import { getMonthLetter } from "../helpers/dateHelper.js";

export async function execSpData(EmpresaId) {
  const month = getMonthLetter();
  try {
    let supplier = await sequelize.query(
      `EXEC [BM_SERV_ESP].[SP_MAILS_PROVEEDORES] @OPCION = 9, @EMPRESA_ID = '${EmpresaId}'`
    );
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
    console.log(error);
  }
}

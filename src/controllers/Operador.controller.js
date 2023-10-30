import { sequelizeBMServEsp as sequelize } from "../database/connection.js";

export const getSuppliers = async (EmpresaId) => {
  let mes = Date.now()
  let filterArray;
  let supplier;
  try {
    supplier = await sequelize.query(`EXEC [BM_SERV_ESP].[SP_MAILS_PROVEEDORES] @OPCION = 9, @EMPRESA_ID = '${EmpresaId}'`);
  } catch (error) {
    console.log(error)
  }

  if (EmpresaId === 871) {
    filterArray = supplier[0].filter(element => element.MES === "OCTUBRE" && element.AÑO === 2023 && element.Score != "100.00 %" && element.RFC_PROVEEDOR != "CSC070517G79" && element.RFC_PROVEEDOR != "FSE920910CC6")
  } else {
    filterArray = supplier[0].filter(element => element.MES === "OCTUBRE" && element.AÑO === 2023 && element.Score != "100.00 %")
  }

  return filterArray;
};

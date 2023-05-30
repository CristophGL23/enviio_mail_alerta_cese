import { sequelizeBMServEsp as sequelize } from "../database/connection.js";

export const getSupplier = async () => {
  const supplier = await sequelize.query(`EXEC [BM_SERV_ESP].[SP_MAILS_PROVEEDORES] @OPCION = 9, @EMPRESA_ID = '888'`);
  let filterArray = supplier[0].filter(element => element.MES === "MAYO" && element.AÑO === 2023 && element.Score != "100.00 %")
  return filterArray;
};

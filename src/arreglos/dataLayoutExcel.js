const colors = ["#FF0000", "#C65911", "#3A3838", "#FFFF00", "#00B050"];

export const STYLE_CELLS = {
  font: {
    color: "#000000",
    size: 11,
  },
  border: {
    left: {
      style: "thin",
      color: "black",
    },
    right: {
      style: "thin",
      color: "black",
    },
    top: {
      style: "thin",
      color: "black",
    },
    bottom: {
      style: "thin",
      color: "black",
    },
    outline: false,
  },
};

export function styleStatusCells(status) {
  const COLOR_STATUS = colors[status];
  return {
    font: {
      color: "#000000",
      bold: true,
      size: 10,
    },
    border: {
      left: {
        style: "thin",
        color: "black",
      },
      right: {
        style: "thin",
        color: "black",
      },
      top: {
        style: "thin",
        color: "black",
      },
      bottom: {
        style: "thin",
        color: "black",
      },
      outline: false,
    },
    alignment: {
      horizontal: "center",
      vertical: "center",
    },
    fill: {
      type: "pattern",
      patternType: "solid",
      bgColor: COLOR_STATUS,
      fgColor: COLOR_STATUS,
    },
  };
}

export const STYLE_CABECERAS = {
  font: {
    color: "#ffffff",
    size: 11,
    bold: true,
  },
  fill: {
    type: "pattern",
    patternType: "solid",
    bgColor: "#4472C4",
    fgColor: "#4472C4",
  },
  border: {
    left: {
      style: "thin",
      color: "black",
    },
    right: {
      style: "thin",
      color: "black",
    },
    top: {
      style: "thin",
      color: "black",
    },
    bottom: {
      style: "thin",
      color: "black",
    },
    outline: false,
  },
};

export const HEADERS = [
  "RFC_EMPRESA",
  "EMPRESA_CONTRATANTE",
  "RFC_PROVEEDOR",
  "RAZON_SOCIAL",
  "EMAIL",
  "AÑO",
  "MES",
  "MES_CUMPLIMIENTO",
  "Score",
  "Contrato",
  "ODC",
  "[CFDI Servicio]",
  "[Registro STPS]",
  "[Estatus de Registro]",
  "[Acuse IMSS]",
  "[Acuse INFONAVIT]",
  "[CFDI Nomina]",
  "Pago ISR (Retenciones por salarios)",
  "[Pago COP]",
  "[Pago INFONAVIT]",
  "[Acuse IVA]",
  "[Pago IVA]",
  "[Complemento de Pago]",
  "[Listado de Trabajadores]",
  "[Declaracion de IVA]",
];

const letter_month = [
  "ENERO",
  "FEBRERO",
  "MARZO",
  "ABRIL",
  "MAYO",
  "JUNIO",
  "JULIO",
  "AGOSTO",
  "SEPTIEMBRE",
  "OCTUBRE",
  "NOVIEMBRE",
  "DICIEMBRE",
];

export function getMonthLetter(EmpresaId) {
  const DATE = new Date();
  if (EmpresaId === 935 || EmpresaId === 950) {
    return letter_month[DATE.getMonth() - 1];
  }

  return letter_month[DATE.getMonth()]
}

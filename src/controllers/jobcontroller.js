import { notificationMailError } from "./notificationcontroller.js";
import { execSpData } from "./spcontroller.js";

export async function sendAlerts() {
    try {
      const data = execSpData();
    } catch (error) {
      notificationMailError(`Error en el envió de alertas ${error}`);
    }
  }
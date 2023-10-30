import { execSpData } from "./spcontroller.js";

export async function sendAlerts() {
  try {
    const data = execSpData();
  } catch (error) {
    console.log(error);
  }
}

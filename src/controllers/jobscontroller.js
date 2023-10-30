import { execSpData } from "./spController";

export async function sendAlerts() {
  try {
    const data = execSpData();
  } catch (error) {
    console.log(error);
  }
}

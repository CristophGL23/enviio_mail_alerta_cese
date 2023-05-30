import express  from "express";
import config from './config.js';
import cors from 'cors';
import router from "./routers/routes.js";

const app = express();

// Settings
app.set('PORT', config.PORT);
app.set('DB_NAME_USER', config.DB_NAME_USER);
app.set('DB_PASSWORD', config.DB_PASSWORD);
app.set('DB_PORT', config.DB_PORT);
app.set('DB_NAME_SCHEMA', config.DB_NAME_SCHEMA);
app.set('DB_SERVER', config.DB_SERVER);

app.use(cors()); // Aceptar peticiones desde otros servidores
app.use(express.json()); // Aceptar formato json 
app.use(express.urlencoded({extended: false}));



app.use(router)
export default app
const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http')
const app = express();  
const asistenciaroutes = require("../../backend/routes/asistenciaroutes.js");

app.use(express.json());
app.use(cors());

const router = express.Router();
router.use ("/asistencias",asistenciaroutes);


const handler = app.use ('/.netlify/functions',router);
exports.handler = serverless (app);
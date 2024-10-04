const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http')
const app = express();  
const cursosroutes = require("../../backend/routes/cursosroutes.js");

app.use(express.json());
app.use(cors());

const router = express.Router();
router.use ("/cursos",cursosroutes);
/*
router.use ("/profesores",profesoresroutes);
router.use ("/cursos",cursosroutes);
*/

const handler = app.use ('/.netlify/functions',router);
exports.handler = serverless (app);
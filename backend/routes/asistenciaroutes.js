const express = require("express");
const router = express.Router();
const asistenciacontrollers = require("../controllers/asistenciacontrollers.js");

router.get("/",asistenciacontrollers.consultar);
router.post("/",asistenciacontrollers.ingresar);

 router.route("/:numerodedocumentodelestudiante")
 .get(asistenciacontrollers.consultarDetalle)
 .put(asistenciacontrollers.actualizar)
 .delete(asistenciacontrollers.borrar);

module.exports = router;

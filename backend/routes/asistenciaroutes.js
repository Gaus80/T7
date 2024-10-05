const express = require("express");
const router = express.Router();
const asistenciacontrollers = require("../controllers/asistenciacontrollers.js");

router.get("/",asistenciacontrollers.consultar);
router.post("/",asistenciacontrollers.ingresar);

//  router.route("/:codigodelcurso")
//  .get(sesionescontrollers.consultarDetalle)
//  .put(sesionescontrollers.actualizar)
//  .delete(sesionescontrollers.borrar);

module.exports = router;

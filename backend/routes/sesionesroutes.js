const express = require("express");
const router = express.Router();
const sesionescontrollers = require("../controllers/sesionescontrollers.js");

router.get("/",sesionescontrollers.consultar);
router.post("/",sesionescontrollers.ingresar);

// router.route("/:codigodelcurso")
// .get(estudiantescontroller.consultarDetalle)
// .put(estudiantescontroller.actualizar)
// .delete(estudiantescontroller.borrar);

module.exports = router;

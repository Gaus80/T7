const express = require("express");
const router = express.Router();
const sesionescontrollers = require("../controllers/sesionescontrollers.js");

router.get("/",sesionescontrollers.consultar);
router.post("/",sesionescontrollers.ingresar);

// router.route("/:codigodelcurso")
// .get(sesionescontrollers.consultarDetalle)
// .put(sesionescontrollers.actualizar)
// .delete(sesionescontrollers.borrar);

module.exports = router;

const express = require("express");
const router = express.Router();
const cursoscontrollers = require("../controllers/cursoscontrollers.js");

router.get("/",cursoscontrollers.consultar);
router.post("/",cursoscontrollers.ingresar);

// router.route("/:codigodelcurso")
// .get(estudiantescontroller.consultarDetalle)
// .put(estudiantescontroller.actualizar)
// .delete(estudiantescontroller.borrar);

module.exports = router;

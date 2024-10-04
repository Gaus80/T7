const express = require("express");
const router = express.Router();
const cursoscontrollers = require("../controllers/cursoscontrollers.js");

router.get("/",cursoscontrollers.consultar);
router.post("/",cursoscontrollers.ingresar);

router.route("/:codigodelcurso")
.get(cursoscontrollers.consultarDetallecursos)
.put(cursoscontrollers.actualizar)
.delete(cursoscontrollers.borrar);

module.exports = router;

const db= require("../bd/conexion.js");


class SesionesController{
    constructor(){

    }

    consultar(req,res){
        try{
            db.query('SELECT  * FROM sesiones',
            [],(err,rows) => {
                if(err) {
                    res.status (400).send(err.message);
                }
                res.status(200).json(rows);
            });
        }catch (err){
            res.status(500).send(err.message);
        }
    }


ingresar(req,res){
    try{
        const myJSON = JSON.stringify(req.body);
        console.log ("la información que llega es " + myJSON );

        const {sesionesCurso, fecha,horaInicio, horaFinal} = req.body;
        //console.log ("el dni que llega es de " + dni);

        db.query('INSERT INTO sesiones (numerodesecuencia,codigodelcurso,fecha,horadeinicio,horafinal) VALUES (0, ?, ?, ?, ?);',
        [sesionesCurso,fecha, horaInicio,horaFinal],(err,rows) => {
            if(err) {
                res.status (400).send(err.message);
            }else{
                res.status(201).json({id: rows.insertId});
            }
        });

    }catch (err){
        res.status(500).send(err.message);
    }
}

actualizar(req, res) {
    const { codigoCurso } = req.params;  // Get codigoCurso from URL
    try {
        const { fecha, horaInicio, horaFinal } = req.body;  // Get body parameters
        db.query(
            'UPDATE sistema_asistencia.sesiones SET codigodelcurso=?, fecha=?, horadeinicio=?, horafinal=? WHERE codigodelcurso=?',
            [codigoCurso, fecha, horaInicio, horaFinal, codigoCurso],  // Pass codigoCurso again for the WHERE clause
            (err, rows) => {
                if (err) {
                    res.status(400).send(err.message);
                    return;
                }
                if (rows.affectedRows == 1) {
                    res.status(200).json({ respuesta: "Registro actualizado correctamente" });
                } else {
                    res.status(404).json({ respuesta: "Sesion no encontrado" });
                }
            }
        );
    } catch (err) {
        res.status(500).send(err.message);
    }
}


consultarDetalle(req,res){
    const {numerodedocumentodelestudiante} = req.params;
    try{

        db.query('SELECT  * FROM estudiantes WHERE numerodedocumentodelestudiante=?',
        [numerodedocumentodelestudiante],(err,rows) => {
            if(err) {
                res.status (400).send(err.message);
            }
            res.status(200).json(rows[0]);
        });
    }catch (err){
        res.status(500).send(err.message);
    }

}

borrar(req,res){
    const {numerodedocumentodelestudiante} = req.params;
    try{
        req.body;
        db.query('DELETE FROM sistema_asistencia.estudiantes WHERE numerodedocumentodelestudiante=?;',
        [numerodedocumentodelestudiante],(err,rows) => {
            if(err) {
                res.status (400).send(err.message);
            }
            if (rows.affectedRows == 1)
                res.status(200).json({respuesta:"Registro borrado correctamente"});
        });
    }catch (err){
        res.status(500).send(err.message);
    }
}
}


}

module.exports = new SesionesController();

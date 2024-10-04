const db= require("../bd/conexion.js");


class EstudiantesController{
    constructor(){

    }

    consultar(req,res){
        try{
            db.query('SELECT  * FROM estudiantes',
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

    actualizar(req, res) {
        const { numerodedocumentodelestudiante } = req.params;  // Get dni from URL
        try {
            const { nombre } = req.body;  // Get new name from request body
            db.query(
                'UPDATE sistema_asistencia.estudiantes SET nombrescompletosdelestudiante=? WHERE numerodedocumentodelestudiante=?',
                [nombre, numerodedocumentodelestudiante],  // Update the name where dni matches
                (err, rows) => {
                    if (err) {
                        res.status(400).send(err.message);z
                        return;
                    }
                    if (rows.affectedRows == 1) {
                        res.status(200).json({ respuesta: "Registro actualizado correctamente" });
                    } else {
                        res.status(404).json({ respuesta: "Estudiante no encontrado" });
                    }
                }
            );
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
    ingresar(req,res){
        try{
            const myJSON = JSON.stringify(req.body);
            console.log ("la información que llega es " + myJSON );

            const {dni,nombre} = req.body;
            //console.log ("el dni que llega es de " + dni);

            db.query('INSERT INTO estudiantes (numerodedocumentodelestudiante ,nombrescompletosdelestudiante) VALUES (?, ?);',
            [dni,nombre],(err,rows) => {
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

}

module.exports = new EstudiantesController();

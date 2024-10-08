const db= require("../bd/conexion.js");


class AsistenciasController{
    constructor(){

    }

    consultar(req,res){
        try{
            db.query('SELECT * FROM asistencias',
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

            const {numerodesesion, documentoEstudiante, multadeasistencia,multadenorma} = req.body;
            //console.log ("el dni que llega es de " + dni);

            db.query('INSERT INTO asistencias (numerodesecuencia,numerodesesion ,numerodedocumentodelestudiante, multadeasistencia, multadenorma) VALUES (0,?, ?, ?, ?);',
            [numerodesesion, documentoEstudiante, multadeasistencia,multadenorma],(err,rows) => {
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
        const { numerodedocumentodelestudiante } = req.params; 
        try {
            const { numerodesesion,  multadeasistencia, multadenorma, } = req.body;  
            db.query(
                'UPDATE sistema_asistencia.asistencias SET numerodesesion=?, multadeasistencia=?,  multadenorma=? WHERE numerodedocumentodelestudiante=?',
                [numerodesesion,multadeasistencia, multadenorma, numerodedocumentodelestudiante],  
                (err, rows) => {
                    if (err) {
                        res.status(400).send(err.message);
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
   

    consultarDetalle(req,res){
        const {numerodedocumentodelestudiante} = req.params;
        try{

            db.query('SELECT * FROM asistencias WHERE numerodedocumentodelestudiante=?',
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
            db.query('DELETE FROM sistema_asistencia.asistencias WHERE numerodedocumentodelestudiante=?;',
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

module.exports = new AsistenciasController();

const db= require("../bd/conexion.js");


class CursosController{
    constructor(){

    }
    

    consultar(req,res){
        try{
            db.query('SELECT  * FROM cursos',
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

            const {codigoCurso,nombreCurso} = req.body;
            //console.log ("el dni que llega es de " + dni);

            db.query('INSERT INTO cursos (	codigodelcurso,nombredelcurso) VALUES (?, ?);',
            [codigoCurso,nombreCurso],(err,rows) => {
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
        const { codigodelcurso } = req.params;  // Get dni from URL
        try {
            const { nombreCurso} = req.body;  // Get new name from request body
            db.query(
                'UPDATE sistema_asistencia.cursos SET nombredelcurso=? WHERE codigodelcurso=?',
                [nombreCurso, codigodelcurso],  // Update the name where dni matches
                (err, rows) => {
                    if (err) {
                        res.status(400).send(err.message);
                        return;
                    }
                    if (rows.affectedRows == 1) {
                        res.status(200).json({ respuesta: "Registro actualizado correctamente" });
                    } else {
                        res.status(404).json({ respuesta: "Curso no encontrado" });
                    }
                }
            );
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    borrar(req,res){
        const {codigodelcurso} = req.params;
        try{
            req.body;
            db.query('DELETE FROM sistema_asistencia.cursos WHERE codigodelcurso=?;',
            [codigodelcurso],(err,rows) => {
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

}

    

module.exports = new CursosController();

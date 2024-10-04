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


}

module.exports = new SesionesController();

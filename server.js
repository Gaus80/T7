const express = require('express');
const cors = require("cors");
const serverless = require('serverless-http');

const app = express();
const estudiantesroutes = require("./backend/routes/estudiantesroutes.js");

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
    res.send("Hola mundo");
});

app.use("/estudiantes", estudiantesroutes);

app.listen(6500, () =>{
    console.log("Server listening on port http://localhost:6500")
})
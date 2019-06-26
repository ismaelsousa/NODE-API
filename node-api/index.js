const express = require("express")
const mongoose = require("mongoose")
const requireDir = require("require-dir")
const cors = require("cors")

//iniciando o app
const app = express()
//diz para o express que pode receber json
app.use(express.json());
app.use(cors());

//iniciar o BD
mongoose.connect("mongodb+srv://ismael:senha@nodecluster-imcru.mongodb.net/nodeapi?retryWrites=true&w=majority", {useNewUrlParser: true,useFindAndModify: false}, (err)=>{
    console.log('conectado');
});

requireDir("./src/models");

const Product = mongoose.model('Product');

// rotas
app.use('/api', require("./src/routes"))


app.listen(3001, ()=>{
    console.log("rodando");
});
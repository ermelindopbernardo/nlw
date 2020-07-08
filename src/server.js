const express = require('express')

const server = express()




server.use(express.static("public"))

//Utilizado template engine 
//Erro aqui
const nunjucks = require('nunjucks')
nunjucks.configure("/views",{
    autoescape: true,
    express: server,
    onCache: true
})

//req requisicao
//res resposta

server.get("/", (req, res) =>{
    return res.render("index.html")
})

server.get("/create-point", (req, res) =>{
    return res.render("create-poit.html")
})

server.get("/resultado", (req, res) =>{
    return res.render("result.html")
})

server.listen(3000)

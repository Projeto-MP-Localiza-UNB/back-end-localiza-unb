import express from "express"
import lojasRotas from "./loja/loja.controll.js"
import rotas from "./home/home.controll.js"


const app = express()
app.use(express.json())
app.use(lojasRotas)
app.use(rotas)
app.listen(3000, () => {console.log("Servidor rodando na porta 3000")})

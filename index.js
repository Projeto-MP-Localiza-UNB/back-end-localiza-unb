import express from "express"
import lojasRotas from "./loja/loja.controll.js"

const app = express()
app.use(express.json())
app.use(lojasRotas)
app.listen(3000, () => {console.log("Servidor rodando na porta 3000")})

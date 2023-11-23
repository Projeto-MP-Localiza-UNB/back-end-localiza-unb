import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

class Loja{
    async criarLoja(email,nome,senha,imagem,longitude_fixa,latitude_fixa){
        return await prisma.loja.create({
            data: {
                email,
                senha,
                nome,
                imagem,
                longitude_fixa,
                latitude_fixa,
            }
        })
    }
}

export default Loja
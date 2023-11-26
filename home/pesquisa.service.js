// pesquisa.service.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class Pesquisa {
  async buscarLojasPorPalavraChave(palavraChave) {
    try {
      const lojasEncontradas = await prisma.loja.findMany({
        where: {
          tags: {
            some: {
              tag: {
                contains: palavraChave,
              },
            },
          },
        },
      });

      return lojasEncontradas;
    } catch (error) {
      console.error('Erro ao buscar lojas:', error.message);
      throw new Error('Erro interno do servidor');
    }
  }
}

export default Pesquisa;

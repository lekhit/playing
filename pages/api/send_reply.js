import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default  async function handler  (req, res){
  const answer = await prisma.answer.findOne(
    {where:{
      id:1
    }});
    
}
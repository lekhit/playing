import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default  async function handler  (req, res){
  const {body}=req;
  res.status()
  const user = await prisma.question.findUnique(
    {
      where:{
        state:"active"
      }
  });
    res.status(200).json(user)
}
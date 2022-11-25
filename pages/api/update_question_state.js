import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default  async function handler  (req, res){
  const {body}=req;

  
  const user = await prisma.question.update(
    {
      where:{
        number:req.number
      },
      data:{
        state:body.state,
        time:body.time
      }
  });
    res.status(200).json(user)
}
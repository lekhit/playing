import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default  async function handler  (req, res){
  const {body}=req;
  const user = await prisma.questions.create(
    {
      data:{
        question:body.question,
        number:body.number,
        state:"inactive",
        time:"",
        option:{
          create:body.options
        }
      }
  });
    res.status(200).json(user)
}
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default  async function handler  (req, res){
  const {body}=req;
  const user = await prisma.question.create(
    {
      data:{
        question:body.question,
        number:body.number,
        option:{
          create:{
            data:[
              ...body.option
            ]
          }
        }
      }
  });
    res.status(200).json(user)
}
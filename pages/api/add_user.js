import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default  async function handler  (req, res){
  const {body}=req;
  const user = await prisma.user.upsert(
    {
      where:{
        email:body.email
      },
      update:{
        name:body.nickname
      },
      create:{
        name:body.nickname,
        email:body.email
      }
  });
    res.status(200).json(user)
}
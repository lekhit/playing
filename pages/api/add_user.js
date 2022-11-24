import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default  async function handler  (req, res){
  const {body}=req;
  const user = await prisma.user.create(
    {
      data:{
        name:body.nickname,
        email:body.email
      }
  });
    res.status(200).json(user)
}
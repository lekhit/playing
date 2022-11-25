import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default  async function handler  (req, res){
  const {body}=req;
  body.data.map(async (data)=>{
    const user=await prisma.user.create({
      data:data
    });
  })
res.status(200).json({result:"success"});
}
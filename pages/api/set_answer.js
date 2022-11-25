import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default  async function handler  (req, res){
  const {body}=req.body;
  body.a="hello";
  console.log(body.timestamp);
  const usersWithPosts = await prisma.answer.update(

    {where:{id:1},

    data:{
        "ans":body.ans,
        "time":body.time,
        "timestamp":body.timestamp
    }
});
res.status(200).json(body);

}
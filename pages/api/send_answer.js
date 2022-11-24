// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export default  async function handler  (req, res) {
  const body=req.body;

  const getAnswer=await prisma.answers.findUnique({
    where:{
    question:parseInt(body.number)},
  })

  if(getAnswer.option===parseInt(body.select)){

  const getuser = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  })
  
  const updateUser = await prisma.user.update({
    where: {
      email: body.email,
    },
    data: {
      name: body.user,
      score:getuser.score+body.time
    },
  });
  console.log(getuser);
}
  console.log(getAnswer);
  res.status(200).json({answer:getAnswer,body:body})
}

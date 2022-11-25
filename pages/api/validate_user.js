import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default  async function handler  (req, res){
  const {body}=req;
  let user;
  try {
    // body of try
     user = await prisma.user.findUniqueOrThrow(
      {
        where:{
          email:body.email
        },
       
    });
    console.log(body)
    console.log(user);
} 
catch(error) {
  res.status(200).json({result:"failed"});return;
}


  
  if(user===null){
    res.status(200).json({result:"failed"});
    return;
  }
  else if(user.opt === body.opt)
   { res.status(200).json({result:"success"}); return;}
  else
  {user.result="failed";
  res.status(200).json(user);}
}
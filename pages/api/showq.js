// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export default async function handler(req, res) {
  const getQ=await prisma.questions.findMany({include:{option:{select:{choise:true}}}});
  const getq=[];
  getQ.map((data,idx)=>{
    const options=[];
    data.option.map((d,id)=>{
      options.push(d.choise)
    })
    getq.push({number:data.number,options:options,question:data.question})
  })
  res.status(200).json(getq)
  
}

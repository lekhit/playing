import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

  const questions=[
    {number:1,question:'What the fastest train in the India and what is its maximum speed or operating speed?',options:['Vande Bharat,130','Rajdhani Express ,120','Duranto Express,130','Bulllet Train,230']},
    {number:2,question:'hat the fastest train in the India and what is its maximum speed or operating speed?',options:['Vande Bharat,130','Rajdhani Express ,120','Duranto Express,130','Bulllet Train,230']},
    {number:3,question:'at the fastest train in the India and what is its maximum speed or operating speed?',options:['Vande Bharat,130','Rajdhani Express ,120','Duranto Express,130','Bulllet Train,230']},
  ]
  for(let item in questions){
    await prisma.questions.createMany({
      data:{
        number:item.number,

      }
    })
  }
  
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default  async function handler  (req, res){
  const usersWithPosts = await prisma.user.findMany(
    {
    take:8,
    orderBy:[{score:'desc'}]});
    res.status(200).json(usersWithPosts)
}
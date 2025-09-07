// import { PrismaClient } from "@prisma/client";
import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient({
   log:['query'],
});

export default prisma;
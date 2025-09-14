import { PrismaClient } from "@prisma/client/extension";

const globalPrisma = globalThis as unknown as {primsa?: PrismaClient}

export const prisma = globalPrisma.primsa ?? new PrismaClient({
  log: ['query', 'error', 'warn']
})

if(process.env.NODE_ENV !== 'production') globalPrisma.primsa = prisma; 
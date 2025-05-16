// lib/prisma.ts
import { PrismaClient } from '../lib/generated/prisma'

const PrismaClientSingleton = () => {
    return new  PrismaClient()
}

declare global {
    var prisma: undefined | ReturnType<typeof PrismaClientSingleton> 
}

const prisma = globalThis.prisma ??  PrismaClientSingleton()

export default prisma // ✅ Exporting as default

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma



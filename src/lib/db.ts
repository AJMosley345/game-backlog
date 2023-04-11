// const mysql = require('mysql2/promise')
// // require('dotenv').config();
// const connectionString = 'mysql://lo3whoexjtm6mvkm7jh2:pscale_pw_JW6rTc5HLCCRmWXgdOPcZQBMlDNVQFcKQYUSbJC0pPz@us-east.connect.psdb.cloud/game-backlog?ssl={"rejectUnauthorized":true}'
// const connection = mysql.createConnection(connectionString);
// export default connection;
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as {
    prisma: PrismaClient | undefined
}

export const prisma = 
    globalForPrisma.prisma ??
    new PrismaClient({
        log: ['query'],
    })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
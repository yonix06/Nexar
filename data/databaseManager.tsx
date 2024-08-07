// Pour executer le fichier: "npx tsx .\data\databaseManager.tsx"

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// async function main() {
//   const user = await prisma.user.create({
//     data: {
//       name: 'Yo',
//       email: 'yo@localhost',
//     },
//   })
//   console.log(user),
//   const ldap_user as user = await prisma.user.create({
//     data: {
//       name: 'Ldap',
//       email: 'ldap@localhost',
//     },
//   })
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })

//TODO: le but du fichier est de faire un pré seed de la base de donnée des utilisateurs avec un appel sur le ldap

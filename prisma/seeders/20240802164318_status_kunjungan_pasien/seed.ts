/* eslint-disable @typescript-eslint/no-unused-vars */

import { PrismaClient } from '@prisma/client';
import dayjs from 'dayjs';
const prisma = new PrismaClient();

async function main() {
  await prisma.$transaction(
    async (tx) => {
      const who = {
        createdAt: dayjs().toDate(),
        updatedAt: dayjs().toDate(),
      };

      await tx.statusKunjunganPasien.createMany({
        data: [
          { ...who, kode: 'PENDAFTARAN' },
          { ...who, kode: 'SKRINING' },
        ],
      });
    },
    { timeout: 30 * 1000 }
  );
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());

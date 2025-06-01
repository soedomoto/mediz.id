/* eslint-disable @typescript-eslint/no-unused-vars */

import { PrismaClient } from '@prisma/client';
import dayjs from 'dayjs';
import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { read, utils } from 'xlsx';

let _dirname = '';
try {
  _dirname = dirname(__filename);
} catch (_err) {
  _dirname = fileURLToPath(dirname(import.meta.url));
}

const prisma = new PrismaClient();

async function main() {
  await prisma.$transaction(
    async (tx) => {
      const who = {
        createdAt: dayjs().toDate(),
        updatedAt: dayjs().toDate(),
      };

      await Promise.all(
        ['primer', 'sekunder', 'komplikasi'].map((jenis) =>
          tx.jenisPenyakit.create({
            data: { ...who, deskripsi: jenis },
          })
        )
      );

      await Promise.all(
        ['baru', 'lama'].map((kasus) =>
          tx.kasusPenyakit.create({
            data: { ...who, deskripsi: kasus },
          })
        )
      );

      await Promise.all(
        [
          'WD (Working Diagnosis / Diagnosis Kerja)',
          'DD (Differential Diagnosis - Diagnosis Banding)',
        ].map((kasus) =>
          tx.statusDiagnosis.create({
            data: { ...who, deskripsi: kasus },
          })
        )
      );

      await Promise.all(
        [
          'Sanam (Sembuh)',
          'Bonam (Baik)',
          'Malam (Buruk/Jelek)',
          'Dubia ad Sanam/Bolam (Tidak tentu/ragu-ragu, Cenderung sembuh/baik)',
          'Dubia ad Malam (Tidak tentu/ragu-ragu, Cenderung sembuh/baik)',
        ].map((kasus) =>
          tx.prognosa.create({
            data: { ...who, deskripsi: kasus },
          })
        )
      );

      const xlsxData = readFileSync(join(_dirname, 'icd10_2019.xlsx'));
      const workbook = read(xlsxData);
      const sheet = workbook.Sheets['Sheet3'];
      const xlsxJson: { Code: string; ShortDesc: string; Desc: string }[] =
        utils.sheet_to_json(sheet);

      await tx.penyakit.createMany({
        data: xlsxJson.map((row) => ({
          ...who,
          kode: row['Code'],
          deskripsi_singkat: row['ShortDesc'],
          deskripsi: row['Desc'],
        })),
      });
    },
    { timeout: 30 * 60 * 1000 }
  );
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());

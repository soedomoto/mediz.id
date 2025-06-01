/* eslint-disable @typescript-eslint/no-unused-vars */

import { PrismaClient } from '@prisma/client';
import dayjs from 'dayjs';
import { readFileSync } from 'fs';
import _ from 'lodash';
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
  await prisma.$transaction(async (tx) => {
    const who = {
      createdAt: dayjs().toDate(),
      updatedAt: dayjs().toDate(),
    };

    const xlsxData = readFileSync(join(_dirname, 'laboratorium.xlsx'));
    const workbook = read(xlsxData);

    const shLab = workbook.Sheets['Laboratorium'];
    type ShLabJsonType = {
      FaskesID: string;
      Kategori: string;
      Laboratorium: string;
    };
    const shLabJson: ShLabJsonType[] = utils.sheet_to_json(shLab, {
      range: 0,
    });

    const jenises = await Promise.all(
      _.uniq(
        shLabJson.map((r) =>
          tx.laboratoriumJenis.create({
            data: { ...who, faskesId: r.FaskesID, label: r.Kategori },
          })
        )
      )
    );

    const labs = await Promise.all(
      _.uniq(
        shLabJson.map((r) =>
          tx.laboratorium.create({
            data: {
              ...who,
              faskesId: r.FaskesID,
              laboratoriumJenisId:
                jenises.find((j) => j.label == r.Kategori)?.id || '',
              label: r.Laboratorium,
            },
          })
        )
      )
    );
  });
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());

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

    const xlsxData = readFileSync(join(_dirname, 'obat.xlsx'));
    const workbook = read(xlsxData);

    const shJenis = workbook.Sheets['Jenis'];
    type ShJenisJsonType = { No: number; Nama: string; Kode: string };
    const shJenisJson: ShJenisJsonType[] = utils.sheet_to_json(shJenis, {
      range: 1,
    });

    const shSatuan = workbook.Sheets['Satuan Besar, Kecil & Terkecil'];
    type ShSatuanJsonType = { No: number; Nama: string; Kode: string };
    const shSatuanJson: ShSatuanJsonType[] = utils.sheet_to_json(shSatuan, {
      range: 1,
    });

    const shObatAlkes = workbook.Sheets['Template Master Obat & Alkes'];
    type ShObatAlkesJsonType = {
      No: number;
      'ID Item': string;
      Kategori: string;
      Golongan: string;
      'Nama Item': string;
      Komposisi: string;
      Kekuatan: string;
      'Bentuk Sediaan': string;
      'Jumlah Satuan Besar': number;
      'Satuan Kecil': string;
      'Jumlah Satuan Terkecil': number;
      Status: string;
    };
    const shObatAlkesJson: ShObatAlkesJsonType[] = utils.sheet_to_json(
      shObatAlkes,
      { range: 4 }
    );

    const cats = await Promise.all(
      shJenisJson.map((j) =>
        tx.obatAlkesCategory.create({
          data: { ...who, code: j.Kode, name: j.Nama },
        })
      )
    );

    const gols = await Promise.all(
      _.uniq(shObatAlkesJson.map((o) => o.Golongan))
        .filter((j) => !!j)
        .map((j) => tx.obatAlkesGolongan.create({ data: { ...who, name: j } }))
    );

    const sats = await Promise.all(
      _.uniq([
        ...shObatAlkesJson.map((o) => o['Satuan Kecil']),
        ...shObatAlkesJson.map((o) => o['Bentuk Sediaan']),
      ])
        .filter((j) => !!j)
        .map((j) => tx.obatAlkesSatuan.create({ data: { ...who, name: j } }))
    );

    const obats = await Promise.all(
      shObatAlkesJson.map((j) =>
        tx.obatAlkes.create({
          data: {
            ...who,
            kekuatan: j.Kekuatan || '',
            komposisi: j.Komposisi || '',
            name: j['Nama Item'],
            categoryId:
              cats.find((c) => c.name == j.Kategori)?.id || cats[0].id || '',
            golonganId:
              gols.find((c) => c.name == j.Golongan)?.id || gols[0].id || '',
            satuanKecilId:
              sats.find((c) => c.name == j['Satuan Kecil'])?.id ||
              sats[0].id ||
              '',
            sediaanId:
              sats.find((c) => c.name == j['Bentuk Sediaan'])?.id ||
              sats[0].id ||
              '',
            code: j['ID Item'],
            satuanTerkecilJumlah: j['Jumlah Satuan Terkecil'],
            isUsed: j.Status == '1',
            faskesId: 'cm0sdveit0001qmvngwsj90mg',
          },
        })
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

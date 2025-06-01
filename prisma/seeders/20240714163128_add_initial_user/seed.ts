/* eslint-disable @typescript-eslint/no-unused-vars */

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import dayjs from 'dayjs';
const prisma = new PrismaClient();

async function main() {
  await prisma.$transaction(
    async (tx) => {
      const password = await bcrypt.hash('password', 10);

      const [_admin, _bps, _admin_daftar, _pasien] = await Promise.all([
        tx.user.create({
          data: {
            email: 'admin@faskes.id',
            password: password,
            createdAt: dayjs().toDate(),
            updatedAt: dayjs().toDate(),
          },
        }),
        tx.user.create({
          data: {
            email: 'admin@klinik.bps.go.id',
            password: password,
            createdAt: dayjs().toDate(),
            updatedAt: dayjs().toDate(),
          },
        }),
        tx.user.create({
          data: {
            email: 'admin-pendaftaran@klinik.bps.go.id',
            password: password,
            createdAt: dayjs().toDate(),
            updatedAt: dayjs().toDate(),
          },
        }),
        tx.user.create({
          data: {
            email: 'pasien@faskes.id',
            password: password,
            createdAt: dayjs().toDate(),
            updatedAt: dayjs().toDate(),
          },
        }),
      ]);

      const [_radmin, _rklinik, _radmin_daftar, _rdokter, _rperawat, _rpasien] =
        await Promise.all([
          tx.role.create({
            data: {
              name: 'Admin',
              code: 'admin',
              createdAt: dayjs().toDate(),
              updatedAt: dayjs().toDate(),
            },
          }),
          tx.role.create({
            data: {
              name: 'Admin faskes',
              code: 'admin-faskes',
              createdAt: dayjs().toDate(),
              updatedAt: dayjs().toDate(),
            },
          }),
          tx.role.create({
            data: {
              name: 'Admin pendaftaran',
              code: 'admin-pendaftaran',
              createdAt: dayjs().toDate(),
              updatedAt: dayjs().toDate(),
            },
          }),
          tx.role.create({
            data: {
              name: 'Dokter',
              code: 'dokter',
              createdAt: dayjs().toDate(),
              updatedAt: dayjs().toDate(),
            },
          }),
          tx.role.create({
            data: {
              name: 'Perawat',
              code: 'perawat',
              createdAt: dayjs().toDate(),
              updatedAt: dayjs().toDate(),
            },
          }),
          tx.role.create({
            data: {
              name: 'Pasien',
              code: 'pasien',
              createdAt: dayjs().toDate(),
              updatedAt: dayjs().toDate(),
            },
          }),
        ]);

      await Promise.all([
        tx.userRole.createMany({
          data: [
            {
              userId: _admin.id,
              roleId: _radmin.id,
              createdAt: dayjs().toDate(),
              updatedAt: dayjs().toDate(),
            },
            {
              userId: _admin.id,
              roleId: _rklinik.id,
              createdAt: dayjs().toDate(),
              updatedAt: dayjs().toDate(),
            },
            {
              userId: _admin.id,
              roleId: _radmin_daftar.id,
              createdAt: dayjs().toDate(),
              updatedAt: dayjs().toDate(),
            },
            {
              userId: _admin.id,
              roleId: _rdokter.id,
              createdAt: dayjs().toDate(),
              updatedAt: dayjs().toDate(),
            },
            {
              userId: _admin.id,
              roleId: _rperawat.id,
              createdAt: dayjs().toDate(),
              updatedAt: dayjs().toDate(),
            },
            {
              userId: _admin.id,
              roleId: _rpasien.id,
              createdAt: dayjs().toDate(),
              updatedAt: dayjs().toDate(),
            },
            {
              userId: _bps.id,
              roleId: _rklinik.id,
              createdAt: dayjs().toDate(),
              updatedAt: dayjs().toDate(),
            },
            {
              userId: _admin_daftar.id,
              roleId: _radmin_daftar.id,
              createdAt: dayjs().toDate(),
              updatedAt: dayjs().toDate(),
            },
            {
              userId: _pasien.id,
              roleId: _rpasien.id,
              createdAt: dayjs().toDate(),
              updatedAt: dayjs().toDate(),
            },
          ],
        }),
      ]);
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

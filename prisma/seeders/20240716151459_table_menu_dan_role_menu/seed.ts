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

      // Level 1
      const [l1_master, l1_system, l1_layanan] = await Promise.all([
        tx.menu.create({ data: { ...who, label: 'Master' } }),
        tx.menu.create({ data: { ...who, label: 'System' } }),
        tx.menu.create({ data: { ...who, label: 'Layanan' } }),
      ]);

      // Level 2
      const [
        l2_obat,
        l2_ruangan,
        l2_wilayah,
        l2_kel_peg,
        l2_peg,
        l2_penyakit,
        l2_dokumen,
        l2_jen_pemeriksaan,
        l2_panduan,
        l2_faskes,
        l2_instalasi,
        l2_poli,
        l2_skrining,
        l2_menu,
        l2_role,
        l2_user,
        l2_mshift,
        l2_shift_dokter,
        l2_pendaftaran,
        l2_l_skrining,
      ] = await Promise.all([
        tx.menu.create({
          data: { ...who, parentId: l1_master?.id, label: 'Obat' },
        }),
        tx.menu.create({
          data: { ...who, parentId: l1_master?.id, label: 'Ruangan' },
        }),
        tx.menu.create({
          data: { ...who, parentId: l1_master?.id, label: 'Wilayah' },
        }),
        tx.menu.create({
          data: { ...who, parentId: l1_master?.id, label: 'Kelompok Pegawai' },
        }),
        tx.menu.create({
          data: { ...who, parentId: l1_master?.id, label: 'User' },
        }),
        tx.menu.create({
          data: { ...who, parentId: l1_master?.id, label: 'Daftar Penyakit' },
        }),
        tx.menu.create({
          data: { ...who, parentId: l1_master?.id, label: 'Dokumen' },
        }),
        tx.menu.create({
          data: { ...who, parentId: l1_master?.id, label: 'Jenis Pemeriksaan' },
        }),
        tx.menu.create({
          data: { ...who, parentId: l1_master?.id, label: 'Panduan Pengguna' },
        }),
        tx.menu.create({
          data: {
            ...who,
            parentId: l1_master?.id,
            label: 'Faskes',
            path: '/master/faskes',
          },
        }),
        tx.menu.create({
          data: {
            ...who,
            parentId: l1_master?.id,
            label: 'Instalasi',
            path: '/master/instalasi',
          },
        }),
        tx.menu.create({
          data: {
            ...who,
            parentId: l1_master?.id,
            label: 'Poli',
            path: '/master/poli',
          },
        }),
        tx.menu.create({
          data: {
            ...who,
            parentId: l1_master?.id,
            label: 'Skrining',
          },
        }),
        tx.menu.create({
          data: {
            ...who,
            parentId: l1_system?.id,
            label: 'Menu',
            path: '/system/menu',
          },
        }),
        tx.menu.create({
          data: {
            ...who,
            parentId: l1_system?.id,
            label: 'Hak Akses',
            path: '/system/role',
          },
        }),
        tx.menu.create({
          data: {
            ...who,
            parentId: l1_system?.id,
            label: 'Pengguna',
            path: '/system/user',
          },
        }),
        tx.menu.create({
          data: {
            ...who,
            parentId: l1_layanan?.id,
            label: 'Master Shift Dokter',
            path: '/layanan/shift/dokter/master',
          },
        }),
        tx.menu.create({
          data: {
            ...who,
            parentId: l1_layanan?.id,
            label: 'Shift Dokter',
            path: '/layanan/shift/dokter',
          },
        }),
        tx.menu.create({
          data: {
            ...who,
            parentId: l1_layanan?.id,
            label: 'Kunjungan',
            path: '/layanan/kunjungan',
          },
        }),
        tx.menu.create({
          data: {
            ...who,
            parentId: l1_layanan?.id,
            label: 'Skrining',
            path: '/layanan/skrining',
          },
        }),
      ]);

      // Level 3
      const [
        l2_obat_1,
        l2_obat_2,
        l2_obat_3,
        l2_obat_4,
        l3_skrining_visual,
        l2_ruangan_1,
        l2_ruangan_2,
        l2_wilayah_1,
        l2_wilayah_2,
        l2_wilayah_3,
        l2_wilayah_4,
        l2_wilayah_5,
        l2_kel_peg_1,
        l2_kel_peg_2,
        l2_kel_peg_3,
        l2_peg_1,
        l2_penyakit_1,
        l2_dokumen_1,
        l2_jen_pemeriksaan_1,
        l2_panduan_1,
      ] = await Promise.all([
        tx.menu.create({
          data: {
            ...who,
            parentId: l2_obat?.id,
            label: 'Master Obat',
            path: '/master/obat',
          },
        }),
        tx.menu.create({
          data: {
            ...who,
            parentId: l2_obat?.id,
            label: 'Kategori Obat',
            path: '/master/obat/kategori',
          },
        }),
        tx.menu.create({
          data: {
            ...who,
            parentId: l2_obat?.id,
            label: 'Satuan Obat',
            path: '/master/obat/satuan',
          },
        }),
        tx.menu.create({
          data: {
            ...who,
            parentId: l2_obat?.id,
            label: 'Golongan Obat',
            path: '/master/obat/golongan',
          },
        }),
        tx.menu.create({
          data: {
            ...who,
            parentId: l2_skrining?.id,
            label: 'Skrining Visual',
            path: '/master/skrining/visual',
          },
        }),
        tx.menu.create({
          data: {
            ...who,
            parentId: l2_ruangan?.id,
            label: 'Master Ruangan',
            path: '/master/ruangan',
          },
        }),
        tx.menu.create({
          data: {
            ...who,
            parentId: l2_ruangan?.id,
            label: 'Poli Ruangan',
            path: '/master/ruangan/poli',
          },
        }),

        tx.menu.create({
          data: {
            ...who,
            parentId: l2_wilayah?.id,
            label: 'Master Wilayah',
            path: '/master/wilayah',
          },
        }),
        tx.menu.create({
          data: {
            ...who,
            parentId: l2_wilayah?.id,
            label: 'Provinsi',
            path: '/master/wilayah/provinsi',
          },
        }),
        tx.menu.create({
          data: {
            ...who,
            parentId: l2_wilayah?.id,
            label: 'Kabupaten',
            path: '/master/wilayah/kabkot',
          },
        }),
        tx.menu.create({
          data: {
            ...who,
            parentId: l2_wilayah?.id,
            label: 'Kecamatan',
            path: '/master/wilayah/kecamatan',
          },
        }),
        tx.menu.create({
          data: {
            ...who,
            parentId: l2_wilayah?.id,
            label: 'Kelurahan/Desa',
            path: '/master/wilayah/desakel',
          },
        }),

        tx.menu.create({
          data: {
            ...who,
            parentId: l2_kel_peg?.id,
            label: 'Master Kelompok Pegawai',
            path: '/master/kelpegawai',
          },
        }),
        tx.menu.create({
          data: {
            ...who,
            parentId: l2_kel_peg?.id,
            label: 'Kelompok Jabatan',
            path: '/master/kelpegawai/keljabatan',
          },
        }),
        tx.menu.create({
          data: {
            ...who,
            parentId: l2_kel_peg?.id,
            label: 'Jabatan',
            path: '/master/kelpegawai/jabatan',
          },
        }),

        tx.menu.create({
          data: {
            ...who,
            parentId: l2_peg?.id,
            label: 'User',
            path: '/master/user',
          },
        }),

        tx.menu.create({
          data: {
            ...who,
            parentId: l2_penyakit?.id,
            label: 'Daftar Penyakit',
            path: '/master/penyakit',
          },
        }),

        tx.menu.create({
          data: {
            ...who,
            parentId: l2_dokumen?.id,
            label: 'Dokumen',
            path: '/master/dokumen',
          },
        }),

        tx.menu.create({
          data: {
            ...who,
            parentId: l2_jen_pemeriksaan?.id,
            label: 'Jenis Pemeriksaan',
            path: '/master/jenispemeriksaan',
          },
        }),

        tx.menu.create({
          data: {
            ...who,
            parentId: l2_panduan?.id,
            label: 'Panduan Pengguna',
            path: '/master/panduan',
          },
        }),
      ]);

      // Assign menu to role
      const [rAdmin, rAdminFaskes, rAdminDaftar, rDokter, rPerawat, rPasien] =
        await Promise.all([
          tx.role.findFirst({ where: { code: 'admin' } }),
          tx.role.findFirst({ where: { code: 'admin-faskes' } }),
          tx.role.findFirst({ where: { code: 'admin-pendaftaran' } }),
          tx.role.findFirst({ where: { code: 'dokter' } }),
          tx.role.findFirst({ where: { code: 'perawat' } }),
          tx.role.findFirst({ where: { code: 'pasien' } }),
        ]);

      await Promise.all([
        tx.roleMenu.createMany({
          data: [
            ...(rAdmin
              ? [
                  l2_obat_1,
                  l2_obat_2,
                  l2_obat_3,
                  l2_obat_4,
                  l2_ruangan_1,
                  l2_ruangan_2,
                  l2_wilayah_1,
                  l2_wilayah_2,
                  l2_wilayah_3,
                  l2_wilayah_4,
                  l2_wilayah_5,
                  l2_kel_peg_1,
                  l2_kel_peg_2,
                  l2_kel_peg_3,
                  l2_peg_1,
                  l2_penyakit_1,
                  l2_dokumen_1,
                  l2_jen_pemeriksaan_1,
                  l2_panduan_1,
                  l2_faskes,
                  l2_menu,
                  l2_role,
                  l2_user,
                  l2_l_skrining,
                ].map((m) => ({ ...who, roleId: rAdmin?.id, menuId: m?.id }))
              : []),
            ...(rAdminFaskes
              ? [
                  l2_obat_1,
                  l2_obat_2,
                  l2_obat_3,
                  l2_obat_4,
                  l3_skrining_visual,
                  l2_ruangan_1,
                  l2_ruangan_2,
                  l2_wilayah_1,
                  l2_wilayah_2,
                  l2_wilayah_3,
                  l2_wilayah_4,
                  l2_wilayah_5,
                  l2_kel_peg_1,
                  l2_kel_peg_2,
                  l2_kel_peg_3,
                  l2_peg_1,
                  l2_penyakit_1,
                  l2_dokumen_1,
                  l2_jen_pemeriksaan_1,
                  l2_panduan_1,
                  l2_instalasi,
                  l2_poli,
                  l2_menu,
                  l2_role,
                  l2_user,
                  l2_mshift,
                  l2_shift_dokter,
                ].map((m) => ({
                  ...who,
                  roleId: rAdminFaskes?.id,
                  menuId: m?.id,
                }))
              : []),
            ...(rAdminDaftar
              ? [l2_l_skrining].map((m) => ({
                  ...who,
                  roleId: rAdminDaftar?.id,
                  menuId: m?.id,
                }))
              : []),
            ...(rDokter
              ? [
                  l2_obat_1,
                  l2_obat_2,
                  l2_obat_3,
                  l2_obat_4,
                  l2_ruangan_1,
                  l2_ruangan_2,
                  l2_wilayah_1,
                  l2_wilayah_2,
                  l2_wilayah_3,
                  l2_wilayah_4,
                  l2_wilayah_5,
                  l2_kel_peg_1,
                  l2_kel_peg_2,
                  l2_kel_peg_3,
                  l2_peg_1,
                  l2_penyakit_1,
                  l2_dokumen_1,
                  l2_jen_pemeriksaan_1,
                  l2_panduan_1,
                ].map((m) => ({ ...who, roleId: rDokter?.id, menuId: m?.id }))
              : []),
            ...(rPerawat
              ? [
                  l2_obat_1,
                  l2_obat_2,
                  l2_obat_3,
                  l2_obat_4,
                  l2_ruangan_1,
                  l2_ruangan_2,
                  l2_wilayah_1,
                  l2_wilayah_2,
                  l2_wilayah_3,
                  l2_wilayah_4,
                  l2_wilayah_5,
                  l2_kel_peg_1,
                  l2_kel_peg_2,
                  l2_kel_peg_3,
                  l2_peg_1,
                  l2_penyakit_1,
                  l2_dokumen_1,
                  l2_jen_pemeriksaan_1,
                  l2_panduan_1,
                ].map((m) => ({ ...who, roleId: rPerawat?.id, menuId: m?.id }))
              : []),
            ...(rPasien
              ? [
                  l2_kel_peg_1,
                  l2_kel_peg_2,
                  l2_kel_peg_3,
                  l2_peg_1,
                  l2_panduan_1,
                  l2_pendaftaran,
                ].map((m) => ({ ...who, roleId: rPasien?.id, menuId: m?.id }))
              : []),
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

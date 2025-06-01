-- CreateTable
CREATE TABLE "seeders" (
    "id" TEXT NOT NULL,
    "seeder_name" TEXT NOT NULL,
    "started_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finished_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "seeders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "nik" VARCHAR(255),
    "email" VARCHAR(255),
    "handphone" VARCHAR(255),
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT,
    "nip" VARCHAR(255),
    "nama" VARCHAR(255),
    "golongan" VARCHAR(255),
    "tanggal_lahir" TIMESTAMP(3),
    "pasien_registrasi" VARCHAR(255),
    "jk" VARCHAR(2),
    "profile_wil_id" TEXT,
    "profile_prov_id" TEXT,
    "profile_kab_id" TEXT,
    "profile_kec_id" TEXT,
    "profile_kel_id" TEXT,

    CONSTRAINT "profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dokter" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "dokter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "perawat" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "perawat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pasien" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "noRm" VARCHAR(255),
    "noRmLama" VARCHAR(255),
    "asuransiPenjamin" VARCHAR(255),
    "noAsuransi" VARCHAR(255),
    "noKk" VARCHAR(255),
    "kewarganegaraan" VARCHAR(255),
    "tdkBawaKtp" VARCHAR(1),
    "nama" VARCHAR(255),
    "jk" VARCHAR(255),
    "tglLahir" VARCHAR(255),
    "tempatLahir" VARCHAR(255),
    "umur" VARCHAR(255),
    "golDarah" VARCHAR(255),
    "noHp" VARCHAR(255),
    "prov" VARCHAR(255),
    "kab" VARCHAR(255),
    "kec" VARCHAR(255),
    "kel" VARCHAR(255),
    "alamat" VARCHAR(255),
    "pekerjaan" VARCHAR(255),
    "agama" VARCHAR(255),
    "pendidikan" VARCHAR(255),
    "statusPerkawinan" VARCHAR(255),
    "email" VARCHAR(255),
    "penanggungJawab" VARCHAR(255),
    "hubunganDgPasien" VARCHAR(255),
    "noHpPenanggungJwb" VARCHAR(255),
    "user_id" TEXT NOT NULL,

    CONSTRAINT "pasien_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "role" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "code" VARCHAR(100),
    "name" VARCHAR(255),

    CONSTRAINT "role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_role" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,
    "role_id" TEXT NOT NULL,

    CONSTRAINT "user_role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "menu" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "parentId" TEXT,
    "isUnderMaintenance" BOOLEAN NOT NULL DEFAULT false,
    "order" INTEGER NOT NULL DEFAULT 1,
    "path" TEXT,
    "icon" TEXT,
    "label" TEXT NOT NULL,

    CONSTRAINT "menu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "role_menu" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "role_id" TEXT NOT NULL,
    "menu_id" TEXT NOT NULL,

    CONSTRAINT "role_menu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "faskes" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "faskes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "faskes_profile" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "faskes_id" TEXT,
    "mappingPoli" VARCHAR(255),
    "satuSehatId" VARCHAR(255),

    CONSTRAINT "faskes_profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admin_faskes" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,
    "faskes_id" TEXT NOT NULL,

    CONSTRAINT "admin_faskes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admin_pendaftaran_faskes" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,
    "faskes_id" TEXT NOT NULL,

    CONSTRAINT "admin_pendaftaran_faskes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dokter_faskes" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "faskes_id" TEXT NOT NULL,
    "dokter_id" TEXT NOT NULL,

    CONSTRAINT "dokter_faskes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "perawat_faskes" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "faskes_id" TEXT NOT NULL,
    "perawat_id" TEXT NOT NULL,

    CONSTRAINT "perawat_faskes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "instalasi" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "kode" VARCHAR(50) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "faskes_id" TEXT NOT NULL,

    CONSTRAINT "instalasi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "poli" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "kodePoli" VARCHAR(50) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "instalasi_id" TEXT NOT NULL,

    CONSTRAINT "poli_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ruangan" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "ruangan_poli" TEXT NOT NULL,
    "kodeSuara" VARCHAR(20),
    "instalasi" VARCHAR(50) NOT NULL,
    "namaRuangan" VARCHAR(255) NOT NULL,
    "jenisKunjungan" VARCHAR(1) NOT NULL,
    "mappingPcare" VARCHAR(50) NOT NULL,
    "panggilPoli" VARCHAR(1) NOT NULL,
    "panggilApotek" VARCHAR(1) NOT NULL,
    "panggilLab" VARCHAR(1) NOT NULL,
    "notifSkriningLansia" VARCHAR(1) NOT NULL,
    "stRuanganTujuanResep" VARCHAR(1) NOT NULL,
    "promotifPreventif" VARCHAR(1) NOT NULL,
    "mcu" VARCHAR(1) NOT NULL,
    "defaultRuanganApotek" VARCHAR(50),
    "defaultRuanganAlkes" VARCHAR(50),
    "iconRuangan" VARCHAR(100) NOT NULL,
    "ruanganAkses" VARCHAR(255),

    CONSTRAINT "ruangan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dokter_poli" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "poli_id" TEXT NOT NULL,
    "dokter_faskes_id" TEXT NOT NULL,

    CONSTRAINT "dokter_poli_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "perawat_poli" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "poli_id" TEXT NOT NULL,
    "perawat_faskes_id" TEXT NOT NULL,

    CONSTRAINT "perawat_poli_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shift_poli" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "poli_id" TEXT NOT NULL,
    "kode_hari" INTEGER NOT NULL,
    "mulai" VARCHAR(20) NOT NULL,
    "selesai" VARCHAR(20) NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "shift_poli_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shift_dokter_poli" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "dokter_poli_id" TEXT NOT NULL,
    "shift_poli_id" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "shift_dokter_poli_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "obat_alkes_category" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "code" VARCHAR(100) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "color" VARCHAR(50),
    "faskes_id" TEXT NOT NULL,

    CONSTRAINT "obat_alkes_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "obat_alkes_satuan" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "code" VARCHAR(100) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "color" VARCHAR(50),
    "faskes_id" TEXT NOT NULL,

    CONSTRAINT "obat_alkes_satuan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "obat_alkes_golongan" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "code" VARCHAR(100) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "color" VARCHAR(50),
    "faskes_id" TEXT NOT NULL,

    CONSTRAINT "obat_alkes_golongan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "obat_alkes" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "is_used" BOOLEAN NOT NULL DEFAULT true,
    "faskes_id" TEXT NOT NULL,
    "code" VARCHAR(100),
    "category_id" TEXT,
    "code_kfa" VARCHAR(100),
    "code_atc_kbki" VARCHAR(100),
    "nie_bpom" VARCHAR(100),
    "code_mims" VARCHAR(100),
    "name" VARCHAR(255) NOT NULL,
    "komposisi" TEXT,
    "kekuatan" VARCHAR(100),
    "sediaan_id" TEXT,
    "satuan_besar_id" TEXT,
    "satuan_kecil_jumlah" INTEGER,
    "satuan_kecil_id" TEXT,
    "satuan_terkecil_jumlah" INTEGER,
    "satuan_terkecil_id" TEXT,
    "produsen" VARCHAR(255),
    "golongan_id" TEXT,
    "stok_minimal" INTEGER,
    "indikasi" VARCHAR(255),
    "kontra_indikasi" VARCHAR(255),
    "efek_samping" VARCHAR(255),
    "interaksi_obat" VARCHAR(255),
    "penyimpanan_barang" VARCHAR(255),

    CONSTRAINT "obat_alkes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "m_wil" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "kode_prov" TEXT NOT NULL,
    "kode_kab" TEXT,
    "kode_kec" TEXT,
    "kode_kel" TEXT,
    "kode_wil" TEXT NOT NULL,

    CONSTRAINT "m_wil_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "m_prov" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "kode_prov" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "m_prov_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "m_kab" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "kode_prov" TEXT NOT NULL,
    "kode_kab" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "m_kab_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "m_kec" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "kode_prov" TEXT NOT NULL,
    "kode_kab" TEXT NOT NULL,
    "kode_kec" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "m_kec_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "m_kel" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "kode_prov" TEXT NOT NULL,
    "kode_kab" TEXT NOT NULL,
    "kode_kec" TEXT NOT NULL,
    "kode_kel" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "m_kel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kelompok_pegawai" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "kode_kel_jabatan" TEXT NOT NULL,
    "kode_jabatan" TEXT NOT NULL,

    CONSTRAINT "kelompok_pegawai_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kelompok_jabatan" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "kode_kelompok_jabatan" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "kelompok_jabatan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jabatan" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "kode_kel_jabatan" TEXT NOT NULL,
    "kode_jabatan" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "jabatan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_pegawai" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,
    "kelompok_pegawai_id" TEXT,

    CONSTRAINT "user_pegawai_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dokumen" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "dokumen_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jenis_pemeriksaan" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "jenis_pemeriksaan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_guide" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "user_guide_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kuota_harian" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "date" DATE NOT NULL,
    "jenis_pemeriksaan_id" TEXT NOT NULL,
    "kuota" TEXT NOT NULL,

    CONSTRAINT "kuota_harian_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jadwal_klinik" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "tanggal" DATE NOT NULL,
    "buka" TIMESTAMP(3) NOT NULL,
    "tutup" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "jadwal_klinik_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jadwal_rutin_dokter" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "faskes_id" TEXT NOT NULL,
    "dokter_id" TEXT NOT NULL,
    "minggu" BOOLEAN NOT NULL DEFAULT false,
    "senin" BOOLEAN NOT NULL DEFAULT true,
    "selasa" BOOLEAN NOT NULL DEFAULT true,
    "rabu" BOOLEAN NOT NULL DEFAULT true,
    "kamis" BOOLEAN NOT NULL DEFAULT true,
    "jumat" BOOLEAN NOT NULL DEFAULT true,
    "sabtu" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "jadwal_rutin_dokter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jadwal_libur_dokter" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "faskes_id" TEXT NOT NULL,
    "dokter_id" TEXT NOT NULL,
    "libur" DATE NOT NULL,

    CONSTRAINT "jadwal_libur_dokter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jadwal_piket_dokter" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "faskes_id" TEXT NOT NULL,
    "dokter_id" TEXT NOT NULL,
    "piket" DATE NOT NULL,

    CONSTRAINT "jadwal_piket_dokter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "status_kunjungan_pasien" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "kode" TEXT NOT NULL,
    "label" TEXT,

    CONSTRAINT "status_kunjungan_pasien_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kunjungan_pasien" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "jenis" TEXT,
    "tanggal" DATE,
    "shift_poli_id" TEXT,
    "keluhan_utama" TEXT,
    "status_id" TEXT,
    "pasien_id" TEXT,
    "skrining_visual_awal_id" TEXT,
    "dokter_poli_id" TEXT,
    "perawat_poli_id" TEXT,
    "keluhan_tambahan" TEXT,
    "lama_sakit_tahun" INTEGER DEFAULT 0,
    "lama_sakit_bulan" INTEGER DEFAULT 0,
    "lama_sakit_hari" INTEGER DEFAULT 0,
    "rps" TEXT,
    "rpd" TEXT,
    "rpk" TEXT,
    "alergi_makanan" TEXT,
    "alergi_lainnya" TEXT,
    "kesadaran_id" TEXT,
    "sistole" INTEGER,
    "diastole" INTEGER,
    "tinggi_badan" INTEGER,
    "cara_ukur_id" TEXT,
    "berat_badan" INTEGER,
    "imt" DOUBLE PRECISION,
    "label_imt" TEXT,
    "lingkar_perut" INTEGER,
    "detak_nadi" INTEGER,
    "nafas" INTEGER,
    "saturasi_oksigen" DOUBLE PRECISION,
    "suhu" DOUBLE PRECISION,
    "detak_jantung_id" TEXT,
    "triage_id" TEXT,
    "psikologi_spiritual" TEXT,
    "keterangan" TEXT,
    "disabilitas" BOOLEAN DEFAULT false,
    "ambulasi" TEXT,
    "hambatan_komunikasi" BOOLEAN DEFAULT false,
    "tidak_seimbang" BOOLEAN DEFAULT false,
    "alat_bantu" BOOLEAN DEFAULT false,
    "menopang_saat_duduk" BOOLEAN DEFAULT false,
    "skala_nyeri" INTEGER DEFAULT 0,
    "waktu_nyeri_berulang" TEXT,
    "sifat_nyeri" TEXT,
    "penurunan_berat_badan" INTEGER DEFAULT 0,
    "resiko_malnutrisi" INTEGER DEFAULT 0,
    "diagnosis_khusus" BOOLEAN DEFAULT false,
    "diagnosis_khusus_nama_penyakit" TEXT,
    "terapi_dilakukan" TEXT,
    "rencana_tindakan" TEXT,
    "tindakan_keperawatan" TEXT,
    "observasi" TEXT,
    "merokok" BOOLEAN DEFAULT false,
    "alkohol" BOOLEAN DEFAULT false,
    "kurang_sayur_buah" BOOLEAN DEFAULT false,
    "obat_steroid" TEXT,
    "pengencer_darah" TEXT,
    "obat_pengencer_dahak" TEXT,
    "obat_penyakit_kronik" TEXT,
    "obat_lainnya" TEXT,
    "obat_sering_dikonsumsi" TEXT,
    "prognosa_id" TEXT,
    "skrining_visual_akhir" TEXT,

    CONSTRAINT "kunjungan_pasien_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kunjungan_pasien_alergi_obat" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "kunjungan_pasien_id" TEXT NOT NULL,
    "obat_alkes_id" TEXT NOT NULL,

    CONSTRAINT "kunjungan_pasien_alergi_obat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skrining_visual" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "kode" TEXT,
    "label" TEXT NOT NULL,
    "warna" TEXT NOT NULL,
    "faskes_id" TEXT NOT NULL,

    CONSTRAINT "skrining_visual_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kesadaran" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "label" TEXT,

    CONSTRAINT "kesadaran_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cara_ukur_tinggi_badan" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "label" TEXT,

    CONSTRAINT "cara_ukur_tinggi_badan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "detak_jantung" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "label" TEXT,
    "color" TEXT NOT NULL DEFAULT '000000',

    CONSTRAINT "detak_jantung_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "triage" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "label" TEXT,
    "color" TEXT NOT NULL DEFAULT '000000',

    CONSTRAINT "triage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pemeriksaan_anatomi_tubuh" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "bagian" TEXT,
    "keterangan" TEXT,
    "koordinat_x" DOUBLE PRECISION,
    "koordinat_y" DOUBLE PRECISION,
    "kunjungan_pasien_id" TEXT NOT NULL,

    CONSTRAINT "pemeriksaan_anatomi_tubuh_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pemeriksaan_keadaan_fisik" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "indikator_pemeriksaan_keadaan_fisik_id" TEXT NOT NULL,
    "keterangan" TEXT,
    "kunjungan_pasien_id" TEXT NOT NULL,

    CONSTRAINT "pemeriksaan_keadaan_fisik_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "indikator_pemeriksaan_keadaan_fisik" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "jenis_pemeriksaan" TEXT,
    "indikator" TEXT,
    "default_value" TEXT,

    CONSTRAINT "indikator_pemeriksaan_keadaan_fisik_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "diagnosis_keperawatan" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "kode" TEXT,
    "diagnosis" TEXT,

    CONSTRAINT "diagnosis_keperawatan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "diagnosis_keperawatan_kriteria" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "diagnosis_keperawatan_id" TEXT NOT NULL,
    "kriteria" TEXT,

    CONSTRAINT "diagnosis_keperawatan_kriteria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "diagnosis_keperawatan_intervensi" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "diagnosis_keperawatan_id" TEXT NOT NULL,
    "intervensi" TEXT,

    CONSTRAINT "diagnosis_keperawatan_intervensi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "diagnosis_keperawatan_intervensi_tambahan" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "diagnosis_keperawatan_id" TEXT NOT NULL,
    "intervensi" TEXT,

    CONSTRAINT "diagnosis_keperawatan_intervensi_tambahan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kunjungan_diagnosis_keperawatan" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "kunjungan_pasien_id" TEXT NOT NULL,
    "diagnosis_keperawatan_id" TEXT NOT NULL,

    CONSTRAINT "kunjungan_diagnosis_keperawatan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kunjungan_diagnosis_keperawatan_kriteria" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "kunjungan_diagnosis_keperawatan_id" TEXT NOT NULL,
    "diagnosis_keperawatan_kriteria_id" TEXT,

    CONSTRAINT "kunjungan_diagnosis_keperawatan_kriteria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kunjungan_diagnosis_keperawatan_intervensi" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "kunjungan_diagnosis_keperawatan_id" TEXT NOT NULL,
    "diagnosis_keperawatan_intervensi_id" TEXT,

    CONSTRAINT "kunjungan_diagnosis_keperawatan_intervensi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kunjungan_diagnosis_keperawatan_intervensi_tambahan" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "kunjungan_diagnosis_keperawatan_id" TEXT NOT NULL,
    "diagnosis_keperawatan_intervensi_tambahan_id" TEXT,

    CONSTRAINT "kunjungan_diagnosis_keperawatan_intervensi_tambahan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "penyakit" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "kode" TEXT,
    "deskripsi_singkat" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "penyakit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jenis_penyakit" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deskripsi" TEXT,

    CONSTRAINT "jenis_penyakit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kasus_penyakit" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deskripsi" TEXT,

    CONSTRAINT "kasus_penyakit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "status_diagnosis" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deskripsi" TEXT,

    CONSTRAINT "status_diagnosis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kunjungan_diagnosis_dokter" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "kunjungan_pasien_id" TEXT NOT NULL,
    "penyakit_id" TEXT NOT NULL,
    "jenis_penyakit_id" TEXT,
    "kasus_penyakit_id" TEXT,
    "status_diagnosis_id" TEXT,

    CONSTRAINT "kunjungan_diagnosis_dokter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prognosa" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deskripsi" TEXT,

    CONSTRAINT "prognosa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "laboratorium_jenis" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "label" TEXT,
    "faskes_id" TEXT,

    CONSTRAINT "laboratorium_jenis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "laboratorium" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "label" TEXT,
    "jenis_id" TEXT NOT NULL,
    "faskes_id" TEXT,

    CONSTRAINT "laboratorium_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kunjungan_laboratorium" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "kunjungan_id" TEXT NOT NULL,
    "laboratorium_id" TEXT NOT NULL,

    CONSTRAINT "kunjungan_laboratorium_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "seeders_seeder_name_key" ON "seeders"("seeder_name");

-- CreateIndex
CREATE UNIQUE INDEX "user_nik_email_handphone_key" ON "user"("nik", "email", "handphone");

-- CreateIndex
CREATE UNIQUE INDEX "profile_user_id_key" ON "profile"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "dokter_user_id_key" ON "dokter"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "perawat_user_id_key" ON "perawat"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "role_code_key" ON "role"("code");

-- CreateIndex
CREATE UNIQUE INDEX "user_role_user_id_role_id_key" ON "user_role"("user_id", "role_id");

-- CreateIndex
CREATE UNIQUE INDEX "faskes_profile_faskes_id_key" ON "faskes_profile"("faskes_id");

-- CreateIndex
CREATE UNIQUE INDEX "admin_faskes_user_id_faskes_id_key" ON "admin_faskes"("user_id", "faskes_id");

-- CreateIndex
CREATE UNIQUE INDEX "admin_pendaftaran_faskes_user_id_faskes_id_key" ON "admin_pendaftaran_faskes"("user_id", "faskes_id");

-- CreateIndex
CREATE UNIQUE INDEX "dokter_faskes_faskes_id_dokter_id_key" ON "dokter_faskes"("faskes_id", "dokter_id");

-- CreateIndex
CREATE UNIQUE INDEX "perawat_faskes_faskes_id_perawat_id_key" ON "perawat_faskes"("faskes_id", "perawat_id");

-- CreateIndex
CREATE UNIQUE INDEX "dokter_poli_poli_id_dokter_faskes_id_key" ON "dokter_poli"("poli_id", "dokter_faskes_id");

-- CreateIndex
CREATE UNIQUE INDEX "perawat_poli_poli_id_perawat_faskes_id_key" ON "perawat_poli"("poli_id", "perawat_faskes_id");

-- CreateIndex
CREATE UNIQUE INDEX "shift_poli_poli_id_kode_hari_mulai_selesai_key" ON "shift_poli"("poli_id", "kode_hari", "mulai", "selesai");

-- CreateIndex
CREATE UNIQUE INDEX "shift_dokter_poli_dokter_poli_id_shift_poli_id_key" ON "shift_dokter_poli"("dokter_poli_id", "shift_poli_id");

-- CreateIndex
CREATE UNIQUE INDEX "obat_alkes_category_faskes_id_code_key" ON "obat_alkes_category"("faskes_id", "code");

-- CreateIndex
CREATE UNIQUE INDEX "obat_alkes_satuan_faskes_id_code_key" ON "obat_alkes_satuan"("faskes_id", "code");

-- CreateIndex
CREATE UNIQUE INDEX "obat_alkes_golongan_faskes_id_code_key" ON "obat_alkes_golongan"("faskes_id", "code");

-- CreateIndex
CREATE UNIQUE INDEX "m_wil_kode_wil_key" ON "m_wil"("kode_wil");

-- CreateIndex
CREATE UNIQUE INDEX "m_prov_kode_prov_key" ON "m_prov"("kode_prov");

-- CreateIndex
CREATE UNIQUE INDEX "m_kab_kode_kab_key" ON "m_kab"("kode_kab");

-- CreateIndex
CREATE UNIQUE INDEX "m_kec_kode_kec_key" ON "m_kec"("kode_kec");

-- CreateIndex
CREATE UNIQUE INDEX "m_kel_kode_kel_key" ON "m_kel"("kode_kel");

-- CreateIndex
CREATE UNIQUE INDEX "kelompok_jabatan_kode_kelompok_jabatan_key" ON "kelompok_jabatan"("kode_kelompok_jabatan");

-- CreateIndex
CREATE UNIQUE INDEX "jabatan_kode_jabatan_key" ON "jabatan"("kode_jabatan");

-- CreateIndex
CREATE UNIQUE INDEX "jadwal_rutin_dokter_dokter_id_faskes_id_key" ON "jadwal_rutin_dokter"("dokter_id", "faskes_id");

-- CreateIndex
CREATE UNIQUE INDEX "status_kunjungan_pasien_kode_key" ON "status_kunjungan_pasien"("kode");

-- CreateIndex
CREATE UNIQUE INDEX "skrining_visual_faskes_id_kode_key" ON "skrining_visual"("faskes_id", "kode");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_profile_wil_id_fkey" FOREIGN KEY ("profile_wil_id") REFERENCES "m_wil"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_profile_prov_id_fkey" FOREIGN KEY ("profile_prov_id") REFERENCES "m_prov"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_profile_kab_id_fkey" FOREIGN KEY ("profile_kab_id") REFERENCES "m_kab"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_profile_kec_id_fkey" FOREIGN KEY ("profile_kec_id") REFERENCES "m_kec"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_profile_kel_id_fkey" FOREIGN KEY ("profile_kel_id") REFERENCES "m_kel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "dokter" ADD CONSTRAINT "dokter_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "dokter" ADD CONSTRAINT "dokter_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "dokter" ADD CONSTRAINT "dokter_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "perawat" ADD CONSTRAINT "perawat_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "perawat" ADD CONSTRAINT "perawat_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "perawat" ADD CONSTRAINT "perawat_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pasien" ADD CONSTRAINT "pasien_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pasien" ADD CONSTRAINT "pasien_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pasien" ADD CONSTRAINT "pasien_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "role" ADD CONSTRAINT "role_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "role" ADD CONSTRAINT "role_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_role" ADD CONSTRAINT "user_role_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_role" ADD CONSTRAINT "user_role_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_role" ADD CONSTRAINT "user_role_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_role" ADD CONSTRAINT "user_role_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "menu" ADD CONSTRAINT "menu_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "menu" ADD CONSTRAINT "menu_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "menu" ADD CONSTRAINT "menu_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "menu"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "role_menu" ADD CONSTRAINT "role_menu_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "role_menu" ADD CONSTRAINT "role_menu_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "role_menu" ADD CONSTRAINT "role_menu_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "role_menu" ADD CONSTRAINT "role_menu_menu_id_fkey" FOREIGN KEY ("menu_id") REFERENCES "menu"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "faskes" ADD CONSTRAINT "faskes_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "faskes" ADD CONSTRAINT "faskes_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "faskes_profile" ADD CONSTRAINT "faskes_profile_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "faskes_profile" ADD CONSTRAINT "faskes_profile_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "faskes_profile" ADD CONSTRAINT "faskes_profile_faskes_id_fkey" FOREIGN KEY ("faskes_id") REFERENCES "faskes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "admin_faskes" ADD CONSTRAINT "admin_faskes_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "admin_faskes" ADD CONSTRAINT "admin_faskes_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "admin_faskes" ADD CONSTRAINT "admin_faskes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "admin_faskes" ADD CONSTRAINT "admin_faskes_faskes_id_fkey" FOREIGN KEY ("faskes_id") REFERENCES "faskes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "admin_pendaftaran_faskes" ADD CONSTRAINT "admin_pendaftaran_faskes_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "admin_pendaftaran_faskes" ADD CONSTRAINT "admin_pendaftaran_faskes_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "admin_pendaftaran_faskes" ADD CONSTRAINT "admin_pendaftaran_faskes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "admin_pendaftaran_faskes" ADD CONSTRAINT "admin_pendaftaran_faskes_faskes_id_fkey" FOREIGN KEY ("faskes_id") REFERENCES "faskes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "dokter_faskes" ADD CONSTRAINT "dokter_faskes_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "dokter_faskes" ADD CONSTRAINT "dokter_faskes_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "dokter_faskes" ADD CONSTRAINT "dokter_faskes_faskes_id_fkey" FOREIGN KEY ("faskes_id") REFERENCES "faskes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "dokter_faskes" ADD CONSTRAINT "dokter_faskes_dokter_id_fkey" FOREIGN KEY ("dokter_id") REFERENCES "dokter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "perawat_faskes" ADD CONSTRAINT "perawat_faskes_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "perawat_faskes" ADD CONSTRAINT "perawat_faskes_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "perawat_faskes" ADD CONSTRAINT "perawat_faskes_faskes_id_fkey" FOREIGN KEY ("faskes_id") REFERENCES "faskes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "perawat_faskes" ADD CONSTRAINT "perawat_faskes_perawat_id_fkey" FOREIGN KEY ("perawat_id") REFERENCES "perawat"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "instalasi" ADD CONSTRAINT "instalasi_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "instalasi" ADD CONSTRAINT "instalasi_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "instalasi" ADD CONSTRAINT "instalasi_faskes_id_fkey" FOREIGN KEY ("faskes_id") REFERENCES "faskes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "poli" ADD CONSTRAINT "poli_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "poli" ADD CONSTRAINT "poli_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "poli" ADD CONSTRAINT "poli_instalasi_id_fkey" FOREIGN KEY ("instalasi_id") REFERENCES "instalasi"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ruangan" ADD CONSTRAINT "ruangan_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ruangan" ADD CONSTRAINT "ruangan_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ruangan" ADD CONSTRAINT "ruangan_ruangan_poli_fkey" FOREIGN KEY ("ruangan_poli") REFERENCES "poli"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "dokter_poli" ADD CONSTRAINT "dokter_poli_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "dokter_poli" ADD CONSTRAINT "dokter_poli_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "dokter_poli" ADD CONSTRAINT "dokter_poli_poli_id_fkey" FOREIGN KEY ("poli_id") REFERENCES "poli"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "dokter_poli" ADD CONSTRAINT "dokter_poli_dokter_faskes_id_fkey" FOREIGN KEY ("dokter_faskes_id") REFERENCES "dokter_faskes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "perawat_poli" ADD CONSTRAINT "perawat_poli_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "perawat_poli" ADD CONSTRAINT "perawat_poli_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "perawat_poli" ADD CONSTRAINT "perawat_poli_poli_id_fkey" FOREIGN KEY ("poli_id") REFERENCES "poli"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "perawat_poli" ADD CONSTRAINT "perawat_poli_perawat_faskes_id_fkey" FOREIGN KEY ("perawat_faskes_id") REFERENCES "perawat_faskes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "shift_poli" ADD CONSTRAINT "shift_poli_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "shift_poli" ADD CONSTRAINT "shift_poli_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "shift_poli" ADD CONSTRAINT "shift_poli_poli_id_fkey" FOREIGN KEY ("poli_id") REFERENCES "poli"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "shift_dokter_poli" ADD CONSTRAINT "shift_dokter_poli_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "shift_dokter_poli" ADD CONSTRAINT "shift_dokter_poli_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "shift_dokter_poli" ADD CONSTRAINT "shift_dokter_poli_dokter_poli_id_fkey" FOREIGN KEY ("dokter_poli_id") REFERENCES "dokter_poli"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "shift_dokter_poli" ADD CONSTRAINT "shift_dokter_poli_shift_poli_id_fkey" FOREIGN KEY ("shift_poli_id") REFERENCES "shift_poli"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "obat_alkes_category" ADD CONSTRAINT "obat_alkes_category_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "obat_alkes_category" ADD CONSTRAINT "obat_alkes_category_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "obat_alkes_category" ADD CONSTRAINT "obat_alkes_category_faskes_id_fkey" FOREIGN KEY ("faskes_id") REFERENCES "faskes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "obat_alkes_satuan" ADD CONSTRAINT "obat_alkes_satuan_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "obat_alkes_satuan" ADD CONSTRAINT "obat_alkes_satuan_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "obat_alkes_satuan" ADD CONSTRAINT "obat_alkes_satuan_faskes_id_fkey" FOREIGN KEY ("faskes_id") REFERENCES "faskes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "obat_alkes_golongan" ADD CONSTRAINT "obat_alkes_golongan_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "obat_alkes_golongan" ADD CONSTRAINT "obat_alkes_golongan_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "obat_alkes_golongan" ADD CONSTRAINT "obat_alkes_golongan_faskes_id_fkey" FOREIGN KEY ("faskes_id") REFERENCES "faskes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "obat_alkes" ADD CONSTRAINT "obat_alkes_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "obat_alkes" ADD CONSTRAINT "obat_alkes_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "obat_alkes" ADD CONSTRAINT "obat_alkes_faskes_id_fkey" FOREIGN KEY ("faskes_id") REFERENCES "faskes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "obat_alkes" ADD CONSTRAINT "obat_alkes_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "obat_alkes_category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "obat_alkes" ADD CONSTRAINT "obat_alkes_sediaan_id_fkey" FOREIGN KEY ("sediaan_id") REFERENCES "obat_alkes_satuan"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "obat_alkes" ADD CONSTRAINT "obat_alkes_satuan_besar_id_fkey" FOREIGN KEY ("satuan_besar_id") REFERENCES "obat_alkes_satuan"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "obat_alkes" ADD CONSTRAINT "obat_alkes_satuan_kecil_id_fkey" FOREIGN KEY ("satuan_kecil_id") REFERENCES "obat_alkes_satuan"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "obat_alkes" ADD CONSTRAINT "obat_alkes_satuan_terkecil_id_fkey" FOREIGN KEY ("satuan_terkecil_id") REFERENCES "obat_alkes_satuan"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "obat_alkes" ADD CONSTRAINT "obat_alkes_golongan_id_fkey" FOREIGN KEY ("golongan_id") REFERENCES "obat_alkes_golongan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "m_wil" ADD CONSTRAINT "m_wil_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "m_wil" ADD CONSTRAINT "m_wil_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "m_wil" ADD CONSTRAINT "m_wil_kode_prov_fkey" FOREIGN KEY ("kode_prov") REFERENCES "m_prov"("kode_prov") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "m_wil" ADD CONSTRAINT "m_wil_kode_kab_fkey" FOREIGN KEY ("kode_kab") REFERENCES "m_kab"("kode_kab") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "m_wil" ADD CONSTRAINT "m_wil_kode_kec_fkey" FOREIGN KEY ("kode_kec") REFERENCES "m_kec"("kode_kec") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "m_wil" ADD CONSTRAINT "m_wil_kode_kel_fkey" FOREIGN KEY ("kode_kel") REFERENCES "m_kel"("kode_kel") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "m_prov" ADD CONSTRAINT "m_prov_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "m_prov" ADD CONSTRAINT "m_prov_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "m_kab" ADD CONSTRAINT "m_kab_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "m_kab" ADD CONSTRAINT "m_kab_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "m_kab" ADD CONSTRAINT "m_kab_kode_prov_fkey" FOREIGN KEY ("kode_prov") REFERENCES "m_prov"("kode_prov") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "m_kec" ADD CONSTRAINT "m_kec_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "m_kec" ADD CONSTRAINT "m_kec_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "m_kec" ADD CONSTRAINT "m_kec_kode_prov_fkey" FOREIGN KEY ("kode_prov") REFERENCES "m_prov"("kode_prov") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "m_kec" ADD CONSTRAINT "m_kec_kode_kab_fkey" FOREIGN KEY ("kode_kab") REFERENCES "m_kab"("kode_kab") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "m_kel" ADD CONSTRAINT "m_kel_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "m_kel" ADD CONSTRAINT "m_kel_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "m_kel" ADD CONSTRAINT "m_kel_kode_prov_fkey" FOREIGN KEY ("kode_prov") REFERENCES "m_prov"("kode_prov") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "m_kel" ADD CONSTRAINT "m_kel_kode_kab_fkey" FOREIGN KEY ("kode_kab") REFERENCES "m_kab"("kode_kab") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "m_kel" ADD CONSTRAINT "m_kel_kode_kec_fkey" FOREIGN KEY ("kode_kec") REFERENCES "m_kec"("kode_kec") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kelompok_pegawai" ADD CONSTRAINT "kelompok_pegawai_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kelompok_pegawai" ADD CONSTRAINT "kelompok_pegawai_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kelompok_pegawai" ADD CONSTRAINT "kelompok_pegawai_kode_kel_jabatan_fkey" FOREIGN KEY ("kode_kel_jabatan") REFERENCES "kelompok_jabatan"("kode_kelompok_jabatan") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kelompok_pegawai" ADD CONSTRAINT "kelompok_pegawai_kode_jabatan_fkey" FOREIGN KEY ("kode_jabatan") REFERENCES "jabatan"("kode_jabatan") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kelompok_jabatan" ADD CONSTRAINT "kelompok_jabatan_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kelompok_jabatan" ADD CONSTRAINT "kelompok_jabatan_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "jabatan" ADD CONSTRAINT "jabatan_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "jabatan" ADD CONSTRAINT "jabatan_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "jabatan" ADD CONSTRAINT "jabatan_kode_kel_jabatan_fkey" FOREIGN KEY ("kode_kel_jabatan") REFERENCES "kelompok_jabatan"("kode_kelompok_jabatan") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "jabatan" ADD CONSTRAINT "jabatan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_pegawai" ADD CONSTRAINT "user_pegawai_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_pegawai" ADD CONSTRAINT "user_pegawai_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_pegawai" ADD CONSTRAINT "user_pegawai_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_pegawai" ADD CONSTRAINT "user_pegawai_kelompok_pegawai_id_fkey" FOREIGN KEY ("kelompok_pegawai_id") REFERENCES "kelompok_pegawai"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dokumen" ADD CONSTRAINT "dokumen_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "dokumen" ADD CONSTRAINT "dokumen_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "jenis_pemeriksaan" ADD CONSTRAINT "jenis_pemeriksaan_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "jenis_pemeriksaan" ADD CONSTRAINT "jenis_pemeriksaan_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_guide" ADD CONSTRAINT "user_guide_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_guide" ADD CONSTRAINT "user_guide_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kuota_harian" ADD CONSTRAINT "kuota_harian_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kuota_harian" ADD CONSTRAINT "kuota_harian_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kuota_harian" ADD CONSTRAINT "kuota_harian_jenis_pemeriksaan_id_fkey" FOREIGN KEY ("jenis_pemeriksaan_id") REFERENCES "jenis_pemeriksaan"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "jadwal_klinik" ADD CONSTRAINT "jadwal_klinik_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "jadwal_klinik" ADD CONSTRAINT "jadwal_klinik_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "jadwal_rutin_dokter" ADD CONSTRAINT "jadwal_rutin_dokter_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "jadwal_rutin_dokter" ADD CONSTRAINT "jadwal_rutin_dokter_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "jadwal_rutin_dokter" ADD CONSTRAINT "jadwal_rutin_dokter_faskes_id_fkey" FOREIGN KEY ("faskes_id") REFERENCES "faskes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "jadwal_rutin_dokter" ADD CONSTRAINT "jadwal_rutin_dokter_dokter_id_fkey" FOREIGN KEY ("dokter_id") REFERENCES "dokter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "jadwal_libur_dokter" ADD CONSTRAINT "jadwal_libur_dokter_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "jadwal_libur_dokter" ADD CONSTRAINT "jadwal_libur_dokter_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "jadwal_libur_dokter" ADD CONSTRAINT "jadwal_libur_dokter_faskes_id_fkey" FOREIGN KEY ("faskes_id") REFERENCES "faskes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "jadwal_libur_dokter" ADD CONSTRAINT "jadwal_libur_dokter_dokter_id_fkey" FOREIGN KEY ("dokter_id") REFERENCES "dokter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "jadwal_piket_dokter" ADD CONSTRAINT "jadwal_piket_dokter_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "jadwal_piket_dokter" ADD CONSTRAINT "jadwal_piket_dokter_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "jadwal_piket_dokter" ADD CONSTRAINT "jadwal_piket_dokter_faskes_id_fkey" FOREIGN KEY ("faskes_id") REFERENCES "faskes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "jadwal_piket_dokter" ADD CONSTRAINT "jadwal_piket_dokter_dokter_id_fkey" FOREIGN KEY ("dokter_id") REFERENCES "dokter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "status_kunjungan_pasien" ADD CONSTRAINT "status_kunjungan_pasien_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "status_kunjungan_pasien" ADD CONSTRAINT "status_kunjungan_pasien_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_pasien" ADD CONSTRAINT "kunjungan_pasien_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_pasien" ADD CONSTRAINT "kunjungan_pasien_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_pasien" ADD CONSTRAINT "kunjungan_pasien_shift_poli_id_fkey" FOREIGN KEY ("shift_poli_id") REFERENCES "shift_poli"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_pasien" ADD CONSTRAINT "kunjungan_pasien_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "status_kunjungan_pasien"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_pasien" ADD CONSTRAINT "kunjungan_pasien_pasien_id_fkey" FOREIGN KEY ("pasien_id") REFERENCES "pasien"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_pasien" ADD CONSTRAINT "kunjungan_pasien_skrining_visual_awal_id_fkey" FOREIGN KEY ("skrining_visual_awal_id") REFERENCES "skrining_visual"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_pasien" ADD CONSTRAINT "kunjungan_pasien_dokter_poli_id_fkey" FOREIGN KEY ("dokter_poli_id") REFERENCES "dokter_poli"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_pasien" ADD CONSTRAINT "kunjungan_pasien_perawat_poli_id_fkey" FOREIGN KEY ("perawat_poli_id") REFERENCES "perawat_poli"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_pasien" ADD CONSTRAINT "kunjungan_pasien_kesadaran_id_fkey" FOREIGN KEY ("kesadaran_id") REFERENCES "kesadaran"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_pasien" ADD CONSTRAINT "kunjungan_pasien_cara_ukur_id_fkey" FOREIGN KEY ("cara_ukur_id") REFERENCES "cara_ukur_tinggi_badan"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_pasien" ADD CONSTRAINT "kunjungan_pasien_detak_jantung_id_fkey" FOREIGN KEY ("detak_jantung_id") REFERENCES "detak_jantung"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_pasien" ADD CONSTRAINT "kunjungan_pasien_triage_id_fkey" FOREIGN KEY ("triage_id") REFERENCES "triage"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_pasien" ADD CONSTRAINT "kunjungan_pasien_prognosa_id_fkey" FOREIGN KEY ("prognosa_id") REFERENCES "prognosa"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_pasien" ADD CONSTRAINT "kunjungan_pasien_skrining_visual_akhir_fkey" FOREIGN KEY ("skrining_visual_akhir") REFERENCES "skrining_visual"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_pasien_alergi_obat" ADD CONSTRAINT "kunjungan_pasien_alergi_obat_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_pasien_alergi_obat" ADD CONSTRAINT "kunjungan_pasien_alergi_obat_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_pasien_alergi_obat" ADD CONSTRAINT "kunjungan_pasien_alergi_obat_kunjungan_pasien_id_fkey" FOREIGN KEY ("kunjungan_pasien_id") REFERENCES "kunjungan_pasien"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_pasien_alergi_obat" ADD CONSTRAINT "kunjungan_pasien_alergi_obat_obat_alkes_id_fkey" FOREIGN KEY ("obat_alkes_id") REFERENCES "obat_alkes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "skrining_visual" ADD CONSTRAINT "skrining_visual_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "skrining_visual" ADD CONSTRAINT "skrining_visual_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "skrining_visual" ADD CONSTRAINT "skrining_visual_faskes_id_fkey" FOREIGN KEY ("faskes_id") REFERENCES "faskes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kesadaran" ADD CONSTRAINT "kesadaran_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kesadaran" ADD CONSTRAINT "kesadaran_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "cara_ukur_tinggi_badan" ADD CONSTRAINT "cara_ukur_tinggi_badan_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "cara_ukur_tinggi_badan" ADD CONSTRAINT "cara_ukur_tinggi_badan_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "detak_jantung" ADD CONSTRAINT "detak_jantung_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "detak_jantung" ADD CONSTRAINT "detak_jantung_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "triage" ADD CONSTRAINT "triage_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "triage" ADD CONSTRAINT "triage_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pemeriksaan_anatomi_tubuh" ADD CONSTRAINT "pemeriksaan_anatomi_tubuh_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pemeriksaan_anatomi_tubuh" ADD CONSTRAINT "pemeriksaan_anatomi_tubuh_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pemeriksaan_anatomi_tubuh" ADD CONSTRAINT "pemeriksaan_anatomi_tubuh_kunjungan_pasien_id_fkey" FOREIGN KEY ("kunjungan_pasien_id") REFERENCES "kunjungan_pasien"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pemeriksaan_keadaan_fisik" ADD CONSTRAINT "pemeriksaan_keadaan_fisik_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pemeriksaan_keadaan_fisik" ADD CONSTRAINT "pemeriksaan_keadaan_fisik_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pemeriksaan_keadaan_fisik" ADD CONSTRAINT "pemeriksaan_keadaan_fisik_indikator_pemeriksaan_keadaan_fi_fkey" FOREIGN KEY ("indikator_pemeriksaan_keadaan_fisik_id") REFERENCES "indikator_pemeriksaan_keadaan_fisik"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pemeriksaan_keadaan_fisik" ADD CONSTRAINT "pemeriksaan_keadaan_fisik_kunjungan_pasien_id_fkey" FOREIGN KEY ("kunjungan_pasien_id") REFERENCES "kunjungan_pasien"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "indikator_pemeriksaan_keadaan_fisik" ADD CONSTRAINT "indikator_pemeriksaan_keadaan_fisik_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "indikator_pemeriksaan_keadaan_fisik" ADD CONSTRAINT "indikator_pemeriksaan_keadaan_fisik_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "diagnosis_keperawatan" ADD CONSTRAINT "diagnosis_keperawatan_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "diagnosis_keperawatan" ADD CONSTRAINT "diagnosis_keperawatan_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "diagnosis_keperawatan_kriteria" ADD CONSTRAINT "diagnosis_keperawatan_kriteria_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "diagnosis_keperawatan_kriteria" ADD CONSTRAINT "diagnosis_keperawatan_kriteria_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "diagnosis_keperawatan_kriteria" ADD CONSTRAINT "diagnosis_keperawatan_kriteria_diagnosis_keperawatan_id_fkey" FOREIGN KEY ("diagnosis_keperawatan_id") REFERENCES "diagnosis_keperawatan"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "diagnosis_keperawatan_intervensi" ADD CONSTRAINT "diagnosis_keperawatan_intervensi_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "diagnosis_keperawatan_intervensi" ADD CONSTRAINT "diagnosis_keperawatan_intervensi_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "diagnosis_keperawatan_intervensi" ADD CONSTRAINT "diagnosis_keperawatan_intervensi_diagnosis_keperawatan_id_fkey" FOREIGN KEY ("diagnosis_keperawatan_id") REFERENCES "diagnosis_keperawatan"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "diagnosis_keperawatan_intervensi_tambahan" ADD CONSTRAINT "diagnosis_keperawatan_intervensi_tambahan_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "diagnosis_keperawatan_intervensi_tambahan" ADD CONSTRAINT "diagnosis_keperawatan_intervensi_tambahan_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "diagnosis_keperawatan_intervensi_tambahan" ADD CONSTRAINT "diagnosis_keperawatan_intervensi_tambahan_diagnosis_kepera_fkey" FOREIGN KEY ("diagnosis_keperawatan_id") REFERENCES "diagnosis_keperawatan"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_diagnosis_keperawatan" ADD CONSTRAINT "kunjungan_diagnosis_keperawatan_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_diagnosis_keperawatan" ADD CONSTRAINT "kunjungan_diagnosis_keperawatan_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_diagnosis_keperawatan" ADD CONSTRAINT "kunjungan_diagnosis_keperawatan_kunjungan_pasien_id_fkey" FOREIGN KEY ("kunjungan_pasien_id") REFERENCES "kunjungan_pasien"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_diagnosis_keperawatan" ADD CONSTRAINT "kunjungan_diagnosis_keperawatan_diagnosis_keperawatan_id_fkey" FOREIGN KEY ("diagnosis_keperawatan_id") REFERENCES "diagnosis_keperawatan"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_diagnosis_keperawatan_kriteria" ADD CONSTRAINT "kunjungan_diagnosis_keperawatan_kriteria_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_diagnosis_keperawatan_kriteria" ADD CONSTRAINT "kunjungan_diagnosis_keperawatan_kriteria_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_diagnosis_keperawatan_kriteria" ADD CONSTRAINT "kunjungan_diagnosis_keperawatan_kriteria_kunjungan_diagnos_fkey" FOREIGN KEY ("kunjungan_diagnosis_keperawatan_id") REFERENCES "kunjungan_diagnosis_keperawatan"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_diagnosis_keperawatan_kriteria" ADD CONSTRAINT "kunjungan_diagnosis_keperawatan_kriteria_diagnosis_keperaw_fkey" FOREIGN KEY ("diagnosis_keperawatan_kriteria_id") REFERENCES "diagnosis_keperawatan_kriteria"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_diagnosis_keperawatan_intervensi" ADD CONSTRAINT "kunjungan_diagnosis_keperawatan_intervensi_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_diagnosis_keperawatan_intervensi" ADD CONSTRAINT "kunjungan_diagnosis_keperawatan_intervensi_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_diagnosis_keperawatan_intervensi" ADD CONSTRAINT "kunjungan_diagnosis_keperawatan_intervensi_kunjungan_diagn_fkey" FOREIGN KEY ("kunjungan_diagnosis_keperawatan_id") REFERENCES "kunjungan_diagnosis_keperawatan"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_diagnosis_keperawatan_intervensi" ADD CONSTRAINT "kunjungan_diagnosis_keperawatan_intervensi_diagnosis_keper_fkey" FOREIGN KEY ("diagnosis_keperawatan_intervensi_id") REFERENCES "diagnosis_keperawatan_intervensi"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_diagnosis_keperawatan_intervensi_tambahan" ADD CONSTRAINT "kunjungan_diagnosis_keperawatan_intervensi_tambahan_create_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_diagnosis_keperawatan_intervensi_tambahan" ADD CONSTRAINT "kunjungan_diagnosis_keperawatan_intervensi_tambahan_update_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_diagnosis_keperawatan_intervensi_tambahan" ADD CONSTRAINT "kunjungan_diagnosis_keperawatan_intervensi_tambahan_kunjun_fkey" FOREIGN KEY ("kunjungan_diagnosis_keperawatan_id") REFERENCES "kunjungan_diagnosis_keperawatan"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_diagnosis_keperawatan_intervensi_tambahan" ADD CONSTRAINT "kunjungan_diagnosis_keperawatan_intervensi_tambahan_diagno_fkey" FOREIGN KEY ("diagnosis_keperawatan_intervensi_tambahan_id") REFERENCES "diagnosis_keperawatan_intervensi_tambahan"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "penyakit" ADD CONSTRAINT "penyakit_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "penyakit" ADD CONSTRAINT "penyakit_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "jenis_penyakit" ADD CONSTRAINT "jenis_penyakit_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "jenis_penyakit" ADD CONSTRAINT "jenis_penyakit_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kasus_penyakit" ADD CONSTRAINT "kasus_penyakit_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kasus_penyakit" ADD CONSTRAINT "kasus_penyakit_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "status_diagnosis" ADD CONSTRAINT "status_diagnosis_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "status_diagnosis" ADD CONSTRAINT "status_diagnosis_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_diagnosis_dokter" ADD CONSTRAINT "kunjungan_diagnosis_dokter_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_diagnosis_dokter" ADD CONSTRAINT "kunjungan_diagnosis_dokter_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_diagnosis_dokter" ADD CONSTRAINT "kunjungan_diagnosis_dokter_kunjungan_pasien_id_fkey" FOREIGN KEY ("kunjungan_pasien_id") REFERENCES "kunjungan_pasien"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_diagnosis_dokter" ADD CONSTRAINT "kunjungan_diagnosis_dokter_penyakit_id_fkey" FOREIGN KEY ("penyakit_id") REFERENCES "penyakit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_diagnosis_dokter" ADD CONSTRAINT "kunjungan_diagnosis_dokter_jenis_penyakit_id_fkey" FOREIGN KEY ("jenis_penyakit_id") REFERENCES "jenis_penyakit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_diagnosis_dokter" ADD CONSTRAINT "kunjungan_diagnosis_dokter_kasus_penyakit_id_fkey" FOREIGN KEY ("kasus_penyakit_id") REFERENCES "kasus_penyakit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_diagnosis_dokter" ADD CONSTRAINT "kunjungan_diagnosis_dokter_status_diagnosis_id_fkey" FOREIGN KEY ("status_diagnosis_id") REFERENCES "status_diagnosis"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "prognosa" ADD CONSTRAINT "prognosa_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "prognosa" ADD CONSTRAINT "prognosa_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "laboratorium_jenis" ADD CONSTRAINT "laboratorium_jenis_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "laboratorium_jenis" ADD CONSTRAINT "laboratorium_jenis_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "laboratorium_jenis" ADD CONSTRAINT "laboratorium_jenis_faskes_id_fkey" FOREIGN KEY ("faskes_id") REFERENCES "faskes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "laboratorium" ADD CONSTRAINT "laboratorium_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "laboratorium" ADD CONSTRAINT "laboratorium_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "laboratorium" ADD CONSTRAINT "laboratorium_jenis_id_fkey" FOREIGN KEY ("jenis_id") REFERENCES "laboratorium_jenis"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "laboratorium" ADD CONSTRAINT "laboratorium_faskes_id_fkey" FOREIGN KEY ("faskes_id") REFERENCES "faskes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_laboratorium" ADD CONSTRAINT "kunjungan_laboratorium_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_laboratorium" ADD CONSTRAINT "kunjungan_laboratorium_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_laboratorium" ADD CONSTRAINT "kunjungan_laboratorium_kunjungan_id_fkey" FOREIGN KEY ("kunjungan_id") REFERENCES "kunjungan_pasien"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "kunjungan_laboratorium" ADD CONSTRAINT "kunjungan_laboratorium_laboratorium_id_fkey" FOREIGN KEY ("laboratorium_id") REFERENCES "laboratorium"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

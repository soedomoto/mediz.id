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

      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0001',
          diagnosis: 'Bersihan Jalan Napas Tidak Efektif',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Produksi sputum menuruun' },
              { ...who, kriteria: 'Mengi menurun' },
              { ...who, kriteria: 'Wheezing menurun' },
              { ...who, kriteria: 'Mekonium (pada neonatus) menurun' },
              { ...who, kriteria: 'Frekuensi napas membaik' },
              { ...who, kriteria: 'Pola napas membaik' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Kaji fungsi pernafasan (bunyi nafas,kecepatan,irama,kedalaman dan penggunaan otot bantu pernafasan',
              },
              {
                ...who,
                intervensi:
                  'Catat kemampuan pasien mengeluarkan dahak,catat karakter,jumlah dahak dan adanya hemoptisis',
              },
              { ...who, intervensi: 'Ajarkan fisioterapi dada' },
              {
                ...who,
                intervensi: 'Ajarkan posisi semi fowler dan nafas dalam',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan pasien untuk banyak minum air sedikitnya 2500ml perhari',
              },
              { ...who, intervensi: 'Manajemen asma' },
              { ...who, intervensi: 'Manajemen alergi' },
              { ...who, intervensi: 'Manajemen anafilaksis' },
              {
                ...who,
                intervensi: 'Berikan dukungan kepatuhan program pengobatan',
              },
              {
                ...who,
                intervensi:
                  'Kolaborasi pemberian mukolitik atau ekspektoran jika perlu',
              },
              {
                ...who,
                intervensi: 'Kolaborasi pemeberian terapi oksigen jika perlu',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0002',
          diagnosis: 'Gangguan Penyapihan Ventilator',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Kesinkronan bantuan ventilator meningkat' },
              { ...who, kriteria: 'Penggunaan otot bantu napas menurun' },
              { ...who, kriteria: 'Napas megap-megap (gasping) menurun' },
              { ...who, kriteria: 'Napas dangkal menurun' },
              { ...who, kriteria: 'Agitasi menurun' },
              { ...who, kriteria: 'Frekuensi napas membaik' },
              { ...who, kriteria: 'Nilai gas darah arteri membaik' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Periksa kemampuan untuk disapih (meliputi: hemodinamik stabil, kondisi optimal, bebas infeksi)',
              },
              {
                ...who,
                intervensi:
                  'Monitor predictor kemampuan untuk mentolerir penyapihan (mis. Tingkat kemampuan bernapas, kapasitas vital, Vd/Vt, MVV, kekuatan inspirasi, FEV1, tekanan inspirasi negatif)',
              },
              {
                ...who,
                intervensi:
                  'Monitor tanda-tanda kelelahan otot pernapasan (misal: kenaikan PaCO2 mendadak, napas cepat dan dangkal, Gerakan dinding abdomen paradoks), hipoksemia, dan hipoksia jaringan saat penyapihan)',
              },
              { ...who, intervensi: 'Monitor status cairan dan elektrolit' },
              { ...who, intervensi: 'Posisikan semi-fowler (30 – 45 derajat)' },
              {
                ...who,
                intervensi: 'Lakukan pengisapan jalan napas, jika perlu',
              },
              { ...who, intervensi: 'Berikan fisioterapi dada, jika perlu' },
              {
                ...who,
                intervensi:
                  'Lakukan ujicoba penyapihan (30 – 120 menit dengan napas spontan yang dibantu ventilator)',
              },
              { ...who, intervensi: 'Gunakan Teknik relaksasi, jika perlu' },
              {
                ...who,
                intervensi:
                  'Hindari pemberian sedasi farmakologis selama percobaan penyapihan',
              },
              { ...who, intervensi: 'Berikan dukungan psikologis' },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0003',
          diagnosis: 'Gangguan Pertukaran Gas',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Sesak berkurang' },
              { ...who, kriteria: 'Tidak gelisah' },
              { ...who, kriteria: 'Frekuensi napas membaik' },
              { ...who, kriteria: 'Pola napas membaik' },
              { ...who, kriteria: 'Saturasi oksigen membaik' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Observasi monitoring pola nafas ( frekuensi , kedalaman , usaha nafas )',
              },
              {
                ...who,
                intervensi:
                  'Monitoring bunyi nafas ( gurgling , mengi, wheezing, ronkhi kering )',
              },
              { ...who, intervensi: 'Monitoring sputum' },
              { ...who, intervensi: 'Monitoring adanya sumbatan jalan napas' },
              { ...who, intervensi: 'Posisikan Semi fowler atau fowler' },
              { ...who, intervensi: 'Anjurkan untuk minum hangat' },
              { ...who, intervensi: 'Lakukan fisioterapi dada jika perlu' },
              {
                ...who,
                intervensi: 'Kolaborasi pemberian terapi oksigen jika perlu',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0004',
          diagnosis: 'Gangguan ventilasi spontan',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Dispnea menurun' },
              { ...who, kriteria: 'Penggunaan otot bantu nafas menurun' },
              { ...who, kriteria: 'Saturasi oksigen membaik' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Kaji fungsi pernafasan (bunyi nafas,kecepatan,irama,kedalaman dan penggunaan otot bantu pernafasan',
              },
              { ...who, intervensi: 'Pertahankan kepatenan jalan nafas' },
              { ...who, intervensi: 'Berikan posisi semi fowler atau fowler' },
              {
                ...who,
                intervensi:
                  'Anjurkan pasien untuk minum hangat dan banyak minum air sedikitnya 2500ml perhari',
              },
              {
                ...who,
                intervensi: 'Ajarkan melakukan tehnik relaksasi nafas dalam',
              },
              {
                ...who,
                intervensi:
                  'Lakukan fisioterapi dada dan ajarkan tehnik batuk efektif jika perlu',
              },
              {
                ...who,
                intervensi:
                  'Kolaborasi pemberian oksigenasi sesuai kebutuhan (misal: nasal kanul, masker wajah, masker rebreathing atau non-rebreathing)',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0005',
          diagnosis: 'Pola Napas Tidak Efektif',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Dispnea menurun' },
              { ...who, kriteria: 'Penggunaan otot bantu napas menurun' },
              { ...who, kriteria: 'Pemanjangan fase ekspirasi menurun' },
              { ...who, kriteria: 'Pernapasan cuping hidung menurun' },
              { ...who, kriteria: 'Kedalaman napas membaik' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Kaji fungsi pernapasan (bunyi napas,kecepatan,irama,kedalaman dan penggunaan otot bantu pernapasan',
              },
              {
                ...who,
                intervensi:
                  'Catat kemampuan pasien mengeluarkan dahak,catat karakter,jumlah dahak dan adanya hemoptisis',
              },
              { ...who, intervensi: 'Pertahankan kepatenan jalan napas' },
              { ...who, intervensi: 'Ajarkan posisi semi fowler' },
              {
                ...who,
                intervensi:
                  'Anjurkan pasien untuk minum hangat dan banyak minum air sedikitnya 2500ml perhari',
              },
              { ...who, intervensi: 'Lakukan fisioterapi dada' },
              { ...who, intervensi: 'Lakukan pengisapan (suction) lendir' },
              {
                ...who,
                intervensi: 'Kolaborasi pemberian bronkodilator jika perlu',
              },
              {
                ...who,
                intervensi: 'Kolaborasi pemeberian terapi oksigen jika perlu',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0006',
          diagnosis: 'Risiko Aspirasi',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Tingkat kesadaran meningkat' },
              { ...who, kriteria: 'Kemampuan menelan meningkat' },
              { ...who, kriteria: 'Frekuensi napas membaik' },
              { ...who, kriteria: 'Akumulasi secret menurun' },
              { ...who, kriteria: 'Kedalaman nafas membaik' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Kaji fungsi pernafasan (bunyi nafas,kecepatan,irama,kedalaman dan penggunaan otot bantu pernafasan',
              },
              { ...who, intervensi: 'Pertahankan kepatenan jalan nafas' },
              { ...who, intervensi: 'Ajarkan posisi semi fowler' },
              {
                ...who,
                intervensi:
                  'Anjurkan pasien untuk minum hangat dan banyak minum air sedikitnya 2500ml perhari',
              },
              { ...who, intervensi: 'Lakukan fisioterapi dada' },
              { ...who, intervensi: 'Lakukan pengisapan (suction) lendir' },
              { ...who, intervensi: 'Anjurkan teknik batuk efektif' },
              { ...who, intervensi: 'Anjurkan makan secara perlahan' },
              {
                ...who,
                intervensi:
                  'Anjurkan teknik mengunyah atau menelan, jika perlu',
              },
              { ...who, intervensi: 'Kolaborasi pemberian obat-obatan' },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0007',
          diagnosis: 'Gangguan Sirkulasi Spontan',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Tingkat kesadaran meningkat' },
              { ...who, kriteria: 'Frekuensi nadi membaik' },
              { ...who, kriteria: 'Frekuensi napas membaik' },
              { ...who, kriteria: 'Kelistrikan jantung' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi: 'Kaji fungsi jantung dengan melakukan EKG',
              },
              { ...who, intervensi: 'Kaji tingkat kesadaran' },
              { ...who, intervensi: 'Kolaborasi manajemen defibrilasi' },
              { ...who, intervensi: 'Kolaborasi resusitasi cairan' },
              {
                ...who,
                intervensi: 'Kolaborasi tim medis untuk bantuan hidup lanjut',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0008',
          diagnosis: 'Penurunan curah jantung',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Kekuatan perrifer meningkat' },
              { ...who, kriteria: 'Bradikardia menurun' },
              { ...who, kriteria: 'Takikardia menurun' },
              { ...who, kriteria: 'Lelah menurun' },
              { ...who, kriteria: 'Edema menurun' },
              { ...who, kriteria: 'Batuk menurun' },
              { ...who, kriteria: 'Pucat/sianosis menurun' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi: 'Monitor tekanan darah dan saturasi oksigen',
              },
              { ...who, intervensi: 'Monitor intake dan output cairan' },
              {
                ...who,
                intervensi:
                  'Monitor berat badan setiap hari pada waktu yang sama',
              },
              { ...who, intervensi: 'Monitor aritmia' },
              { ...who, intervensi: 'Posisikan semi fowler' },
              { ...who, intervensi: 'Berikan diet jantung yang sesuai' },
              {
                ...who,
                intervensi:
                  'Fasilitasi pasien dan keluarga untuk memodifikasi gaya hidup sehat',
              },
              {
                ...who,
                intervensi: 'Anjurkan beraktivitas fisik sesuai toleransi',
              },
              {
                ...who,
                intervensi: 'Anjurkan beraktivitas fisik secara bertahap',
              },
              { ...who, intervensi: 'Anjurkan berhenti merokok' },
              {
                ...who,
                intervensi: 'Kolaborasi pemberian antiaritmia, jika perlu',
              },
              { ...who, intervensi: 'Rujuk ke program rehabiltasi jantung' },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0009',
          diagnosis: 'Perfusi Perifer Tidak Efektif',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Denyut nad perifer meningkat' },
              { ...who, kriteria: 'Penyembuhan luka meningkat' },
              { ...who, kriteria: 'Warna kulit pucat menurun' },
              { ...who, kriteria: 'Edema perifer menurun' },
              { ...who, kriteria: 'Nyeri ekstremitas menurun' },
              { ...who, kriteria: 'Parastesia menurun' },
              { ...who, kriteria: 'Kelemahan otot menurun' },
              { ...who, kriteria: 'Kram otot menurun' },
              { ...who, kriteria: 'Nekrosis menurun' },
              { ...who, kriteria: 'Pengisian kapiler membaik' },
              { ...who, kriteria: 'Akral membaik' },
              { ...who, kriteria: 'Turgor kulit membaik' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Monitor status kardiopulmonal (frekuensi dan kekuatan nadi, frekuesni nafas, Tekanan Darah, MAP)',
              },
              {
                ...who,
                intervensi: 'Monitor status oksigenasi (Oksimetri, AGD)',
              },
              {
                ...who,
                intervensi:
                  'Monitor statsus cairan (masukan dan hauaran, turgor kulit, CRT)',
              },
              {
                ...who,
                intervensi: 'Monitor tingkat kesadaran dan respon pupil',
              },
              { ...who, intervensi: 'Periksa Riwayat alergi' },
              {
                ...who,
                intervensi:
                  'Berikan oksigen untuk mempertahankan saturasi oksigen >94%',
              },
              {
                ...who,
                intervensi:
                  'Persiapkan intubasi dan ventilasi mekanis, jika perlu',
              },
              { ...who, intervensi: 'Pasang jalur IV, jika perlu' },
              {
                ...who,
                intervensi:
                  'Pasang kateter urine untuk menilai produksi urin, jika perlu',
              },
              {
                ...who,
                intervensi: 'Lakukan skin test untuk mencegah reaksi alergi',
              },
              { ...who, intervensi: 'Jelaskan penyebab/factor risiko syok' },
              { ...who, intervensi: 'Jelaskan tada dan gejala awal syok' },
              {
                ...who,
                intervensi:
                  'Anjurkan melapor jika menemukan/merasakan tanda dan gejala awal syok',
              },
              {
                ...who,
                intervensi: 'Anjurkan memperbanyak asupan cairan oral',
              },
              { ...who, intervensi: 'Anjurkan menghindari alergen' },
              { ...who, intervensi: 'Kolaborasi pemberian IV, jika perlu' },
              {
                ...who,
                intervensi: 'Kolaborasi pemberian transfusi darah, jika perlu',
              },
              {
                ...who,
                intervensi: 'Kolaborasi pemberian antiinflamasi, jika perlu',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0010',
          diagnosis: 'Risiko Gangguan Sirkulasi Spontan',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Kekuatan nadi meningkat' },
              { ...who, kriteria: 'Output urine meningkat' },
              { ...who, kriteria: 'Saturasi oksigen meningkat' },
              { ...who, kriteria: 'PaO2 meningkat' },
              { ...who, kriteria: 'Pucat menurun' },
              { ...who, kriteria: 'Akral dingin menurun' },
              { ...who, kriteria: 'PaCO2 menurun' },
              { ...who, kriteria: 'Tekanan darah sistolik membaik' },
              { ...who, kriteria: 'Tekanan darah diastolik membaik' },
              { ...who, kriteria: 'Tekanan nadi membaik' },
              { ...who, kriteria: 'Mean arteriat pressure membaik' },
              { ...who, kriteria: 'Pengisian kapiler membaik' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi karakteristik nyeri dada (meliputi faktor pemicu dan Pereda, kualitas, lokasi, radiasi, skala, durasi, dan frekuensi)',
              },
              {
                ...who,
                intervensi: 'Monitor aritmia (kelainan irama dan frekuensi)',
              },
              {
                ...who,
                intervensi: 'Monitor EKG 12 sadapan untuk perubahan ST dan T',
              },
              {
                ...who,
                intervensi:
                  'Monitor elektrolit yang dapat meningkatkan risiko aritmia (mis: kalium, magnesium serum)',
              },
              {
                ...who,
                intervensi:
                  'Monitor enzim jantung (mis: CK, CK-MB, Troponin T, Troponin I)',
              },
              { ...who, intervensi: 'Monitor saturasi oksigen' },
              {
                ...who,
                intervensi:
                  'Identifikasi stratifikasi pada sindrom koroner akut (mis: skor TIMI, Killip, Crusade)',
              },
              { ...who, intervensi: 'Pertahankan tirah baring minimal 12 jam' },
              { ...who, intervensi: 'Pasang akses intravena' },
              { ...who, intervensi: 'Puasakan hingga bebas nyeri' },
              {
                ...who,
                intervensi:
                  'Berikan terapi relaksasi untuk mengurangi ansietas dan stress',
              },
              {
                ...who,
                intervensi:
                  'Sediakan lingkungan yang kondusif untuk beristirahat dan pemulihan',
              },
              {
                ...who,
                intervensi:
                  'Siapkan menjalani intervensi koroner perkutan, jika perlu',
              },
              {
                ...who,
                intervensi: 'Berikan dukungan emosional dan spiritual',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0011',
          diagnosis: 'Risiko Penurunan Curah Jantung',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Perfusi perifer' },
              { ...who, kriteria: 'Perfusi Mekokard' },
              { ...who, kriteria: 'Status cairan' },
              { ...who, kriteria: 'Status Neurologis' },
              { ...who, kriteria: 'Status sirkulasi' },
              { ...who, kriteria: 'Tingkat keletihan' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              { ...who, intervensi: 'Perawatan Jantung' },
              { ...who, intervensi: 'Edukasi Pengukuran Nadi Radialis' },
              { ...who, intervensi: 'Edukasi Rehabilitasi Jantung' },
              { ...who, intervensi: 'Manajemen alat pacu permanen' },
              { ...who, intervensi: 'Manajemen alat pacu sementara' },
              { ...who, intervensi: 'Manajemen Aritmia' },
              { ...who, intervensi: 'Manajemen Cairan' },
              { ...who, intervensi: 'Manajemen Elektrolit' },
              { ...who, intervensi: 'Manajemen Syok' },
              { ...who, intervensi: 'Pemantauan Hemodinamik invansif' },
              { ...who, intervensi: 'Pemantauan tanda vital' },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0012',
          diagnosis: 'Risiko Perdarahan',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Tingkat perdarahan' },
              { ...who, kriteria: 'Kontrol resiko' },
              { ...who, kriteria: 'Penyembuhan luka' },
              { ...who, kriteria: 'Status cairan' },
              { ...who, kriteria: 'Status Antepartum' },
              { ...who, kriteria: 'Status Intrapartum' },
              { ...who, kriteria: 'Status Pasca Partum' },
              { ...who, kriteria: 'Status sirkulasi' },
              { ...who, kriteria: 'Tingkat cedera' },
              { ...who, kriteria: 'Tingkat jatuh' },
              { ...who, kriteria: 'Tingkat kepatuhan' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              { ...who, intervensi: 'Pencegahan perdarahan' },
              { ...who, intervensi: 'Balut tekan' },
              { ...who, intervensi: 'Edukasi keamanan anak' },
              { ...who, intervensi: 'Edukasi keamanan bayi' },
              { ...who, intervensi: 'Edukasi kemoterapi' },
              { ...who, intervensi: 'Edukasi proses penyakit' },
              { ...who, intervensi: 'Identifikasi resiko' },
              { ...who, intervensi: 'Manajemen kemoterapi' },
              { ...who, intervensi: 'Manajemen keselamatan lingkungan' },
              { ...who, intervensi: 'Manajemen medikasi' },
              { ...who, intervensi: 'Manajemen Trombolitik' },
              { ...who, intervensi: 'Pemantauan cairan' },
              { ...who, intervensi: 'Pemantauan tanda vital' },
              { ...who, intervensi: 'Pencegahan cedera' },
              { ...who, intervensi: 'Pencegahan syok' },
              { ...who, intervensi: 'Perawatan persalinan' },
              { ...who, intervensi: 'Perawatan sirkumsisi' },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0013',
          diagnosis: 'Risiko Perfusi Gastrointestinal Tidak Efektif',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Nafsu makan meningkat' },
              { ...who, kriteria: 'Mual menurun' },
              { ...who, kriteria: 'Muntah menurun' },
              { ...who, kriteria: 'Nyeri abdomen menurun' },
              { ...who, kriteria: 'Asites menurun' },
              { ...who, kriteria: 'Diare menurun' },
              { ...who, kriteria: 'Konstipasi menurun' },
              { ...who, kriteria: 'Bising usus membaik' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              { ...who, intervensi: 'Identifikasi penyebab perdarahan' },
              {
                ...who,
                intervensi:
                  'Periksa adanya darah pada muntah, sputus, fese, urin, pengeluaran NGT, dan drainase luka, jika perlu',
              },
              {
                ...who,
                intervensi:
                  'Periksa ukuran dan karakteristikhematoma, jika ada',
              },
              {
                ...who,
                intervensi: 'Monitor terjadinya perdarahan (sifat dan jumlah)',
              },
              {
                ...who,
                intervensi:
                  'Monitor nilai hemoglobin dan hematokrit sebelum dan setelah kehilangan darah',
              },
              {
                ...who,
                intervensi:
                  'Monitor tekanan darah parameter hemodinamik (tekanan vena sentral dan tekanan kapiler atau arteri pulmonal), jika ada',
              },
              { ...who, intervensi: 'Monitor intake dan output cairan' },
              {
                ...who,
                intervensi:
                  'Monitor koagulasi darah (prothrombin time (PT), partial tromboplatin time (PTT), fibrinogen, degradasi fibrin, dan jumlah trombosit), jika ada',
              },
              {
                ...who,
                intervensi:
                  'Monitor deliveri oksigen jaringan (mis: PaO2, SaO2, hemoglobin, dan surah jantung)',
              },
              {
                ...who,
                intervensi: 'Monitor tanda dan gejala perdarahan masif',
              },
              {
                ...who,
                intervensi: 'Istirahatkan area yang mengalami perdarahan',
              },
              { ...who, intervensi: 'Berikan kompres dingin, jika perlu' },
              {
                ...who,
                intervensi: 'Lakukan penekanan atatu balut tekan, jika perlu',
              },
              {
                ...who,
                intervensi: 'Tinggikan ekstremitas yang mengalami perdarahan',
              },
              { ...who, intervensi: 'Pertahankan akses IV' },
              {
                ...who,
                intervensi:
                  'Pertimbangkan factor factor yang memepengaruhi pemenuhan kebutuhan gizi',
              },
              { ...who, intervensi: 'Jelaskan tanda-tanda perdarahan' },
              {
                ...who,
                intervensi:
                  'Anjurkan melapor jika menemukan tanda-tanda perdarahan',
              },
              { ...who, intervensi: 'Anjurkan membatasi aktivitas' },
              { ...who, intervensi: 'Kolaborasi pemberian cairan, jika perlu' },
              {
                ...who,
                intervensi: 'Kolaborasi pemberian transfusi darah, jika perlu',
              },
              { ...who, intervensi: 'Rujuk pada ahli gizi, jika perlu' },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0014',
          diagnosis: 'Risiko Perfusi Miokard Tidak Efektif',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Jumlah urine meningkat' },
              { ...who, kriteria: 'Nyeri abdomen menurun' },
              { ...who, kriteria: 'Mual menurun' },
              { ...who, kriteria: 'Muntah menurun' },
              { ...who, kriteria: 'Tekanan arteri rata rata membaik' },
              {
                ...who,
                kriteria: 'Tekanan darah sistolik dan diastolic membaik',
              },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              { ...who, intervensi: 'Periksa onset dan pemicu aritmia' },
              { ...who, intervensi: 'Identifikasi jenis aritmia' },
              { ...who, intervensi: 'Monitor frekuensi dan durasi aritmia' },
              {
                ...who,
                intervensi:
                  'Monitor keluhan nyeri dada (intensitas, lokasi, factor pencetus, dan factor Pereda)',
              },
              {
                ...who,
                intervensi: 'Monitor respon hemodinamik kibat aritmia',
              },
              { ...who, intervensi: 'Monitor satirasi oksigen' },
              { ...who, intervensi: 'Monitor kadar elektrolit' },
              {
                ...who,
                intervensi: 'Monitor tingkat kesadaran dan respon pupil',
              },
              { ...who, intervensi: 'Monitor status oksigenasi' },
              { ...who, intervensi: 'Berikan lingkungan yang tenang' },
              { ...who, intervensi: 'Pasang jalan napas buatan, jika perlu' },
              { ...who, intervensi: 'Pasang akses intravena' },
              { ...who, intervensi: 'Pasang monitor jantung' },
              { ...who, intervensi: 'Rekam EKG 12 sadapan' },
              {
                ...who,
                intervensi:
                  'Periksa interval QT sebelum dan sesudah pemberian obat yang dapat memeperpanjang intervensi QT',
              },
              { ...who, intervensi: 'Lakukan maneuver valsava' },
              { ...who, intervensi: 'Lakukan masase karotis unilateral' },
              { ...who, intervensi: 'Berikan oksigen, sesuai indikasi' },
              {
                ...who,
                intervensi: 'Kolaborasi pemberian antiaritmia, jika perlu',
              },
              {
                ...who,
                intervensi: 'Kolaborasi pemberian kardioversi, jika perlu',
              },
              {
                ...who,
                intervensi: 'Kolaborasi pemberian defibrilasi, jika perlu',
              },
              {
                ...who,
                intervensi:
                  'Kolaborasi pemberian inotropic (mis: dobutamine), jika TDS 70-100 mmHg tanpa disertai tanda/gejala syok',
              },
              {
                ...who,
                intervensi:
                  'Kolaborasi pemberian vasopressor (mis: dopamine), jika TDS 70-100 mmHg disertai tanda/gejala syok',
              },
              {
                ...who,
                intervensi:
                  'Kolaborasi pemberian vasopressor (mis: norefinefrin), jika TDS <70 mmHg',
              },
              {
                ...who,
                intervensi: 'Kolaborasi pompa intra-aorta, jika perlu',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0015',
          diagnosis: 'Risiko Perfusi Perifer Tidak Efektif',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Denyut nadi perifer meningkat' },
              { ...who, kriteria: 'Penyembuhan luka meningkat' },
              { ...who, kriteria: 'Warna kulit pucat menurun' },
              { ...who, kriteria: 'Edema perifer menurun' },
              { ...who, kriteria: 'Nyeri ekstremitas menurun' },
              { ...who, kriteria: 'Parastesia menurun' },
              { ...who, kriteria: 'Kelemahan otot menurun' },
              { ...who, kriteria: 'Kram otot menurun' },
              { ...who, kriteria: 'Nekrosis menurun' },
              { ...who, kriteria: 'Pengisian kapiler membaik' },
              { ...who, kriteria: 'Akral membaik' },
              { ...who, kriteria: 'Turgor kulit membaik' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Monitor status kardiopulmonal (frekuensi dan kekuatan nadi, frekuesni nafas, Tekanan Darah, MAP)',
              },
              {
                ...who,
                intervensi: 'Monitor status oksigenasi (Oksimetri, AGD)',
              },
              {
                ...who,
                intervensi:
                  'Monitor statsus cairan (masukan dan hauaran, turgor kulit, CRT)',
              },
              {
                ...who,
                intervensi: 'Monitor tingkat kesadaran dan respon pupil',
              },
              { ...who, intervensi: 'Periksa Riwayat alergi' },
              {
                ...who,
                intervensi:
                  'Berikan oksigen untuk mempertahankan saturasi oksigen >94%',
              },
              {
                ...who,
                intervensi:
                  'Persiapkan intubasi dan ventilasi mekanis, jika perlu',
              },
              { ...who, intervensi: 'Pasang jalur IV, jika perlu' },
              {
                ...who,
                intervensi:
                  'Pasang kateter urine untuk menilai produksi urin, jika perlu',
              },
              {
                ...who,
                intervensi: 'Lakukan skin test untuk mencegah reaksi alergi',
              },
              { ...who, intervensi: 'Jelaskan penyebab/faktor risiko syok' },
              { ...who, intervensi: 'Jelaskan tada dan gejala awal syok' },
              {
                ...who,
                intervensi:
                  'Anjurkan melapor jika menemukan/merasakan tanda dan gejala awal syok',
              },
              {
                ...who,
                intervensi: 'Anjurkan memperbanyak asupan cairan oral',
              },
              { ...who, intervensi: 'Anjurkan menghindari alergen' },
              { ...who, intervensi: 'Kolaborasi pemberian IV, jika perlu' },
              {
                ...who,
                intervensi: 'Kolaborasi pemberian transfusi darah, jika perlu',
              },
              {
                ...who,
                intervensi: 'Kolaborasi pemberian antiinflamasi, jika perlu',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0016',
          diagnosis: 'Risiko Perfusi Renal Tidak Efektif',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Jumlah urine meningkat' },
              { ...who, kriteria: 'Nyeri abdomen menurun' },
              { ...who, kriteria: 'Mual menurun' },
              { ...who, kriteria: 'Muntah menurun' },
              { ...who, kriteria: 'Distensi abdomen menurun' },
              {
                ...who,
                kriteria:
                  'Tekanan arteri rata-rata (mean arterial pressure/MAP) membaik',
              },
              {
                ...who,
                kriteria: 'Tekanan darah sistolik dan diastolic membaik',
              },
              { ...who, kriteria: 'Bising usus membaik' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Monitor status kardiopulmonal (frekuensi dan kekuatan nadi, frekuesni nafas, Tekanan Darah, MAP)',
              },
              {
                ...who,
                intervensi: 'Monitor status oksigenasi (Oksimetri, AGD)',
              },
              {
                ...who,
                intervensi:
                  'Monitor statsus cairan (masukan dan hauaran, turgor kulit, CRT)',
              },
              {
                ...who,
                intervensi: 'Monitor tingkat kesadaran dan respon pupil',
              },
              { ...who, intervensi: 'Periksa Riwayat alergi' },
              {
                ...who,
                intervensi:
                  'Berikan oksigen untuk mempertahankan saturasi oksigen >94%',
              },
              {
                ...who,
                intervensi:
                  'Persiapkan intubasi dan ventilasi mekanis, jika perlu',
              },
              { ...who, intervensi: 'Pasang jalur IV, jika perlu' },
              {
                ...who,
                intervensi:
                  'Pasang kateter urine untuk menilai produksi urin, jika perlu',
              },
              {
                ...who,
                intervensi: 'Lakukan skin test untuk mencegah reaksi alergi',
              },
              { ...who, intervensi: 'Jelaskan penyebab/faktor risiko syok' },
              { ...who, intervensi: 'Jelaskan tada dan gejala awal syok' },
              {
                ...who,
                intervensi:
                  'Anjurkan melapor jika menemukan/merasakan tanda dan gejala awal syok',
              },
              {
                ...who,
                intervensi: 'Anjurkan memperbanyak asupan cairan oral',
              },
              { ...who, intervensi: 'Anjurkan menghindari alergen' },
              { ...who, intervensi: 'Kolaborasi pemberian IV, jika perlu' },
              {
                ...who,
                intervensi: 'Kolaborasi pemberian transfusi darah, jika perlu',
              },
              {
                ...who,
                intervensi: 'Kolaborasi pemberian antiinflamasi, jika perlu',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0017',
          diagnosis: 'Risiko Perfusi Serebral Tidak Efektif',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Tingkat kesadaran meningkat' },
              { ...who, kriteria: 'Sakit kepala menurun' },
              { ...who, kriteria: 'Gelisah menurun' },
              {
                ...who,
                kriteria:
                  'Tekanan arteri rata-rata (mean arterial pressure/MAP) membaik',
              },
              { ...who, kriteria: 'Tekanan intra kranial membaik' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi penyebab peningkatan TIK (misalnya: lesi, gangguan metabolism, edema serebral)',
              },
              {
                ...who,
                intervensi:
                  'Monitor tanda/gejala peningkatan TIK (misalnya: tekanan darah meningkat, tekanan nadi melebar, bradikardia, pola napas ireguler, kesadaran menurun)',
              },
              {
                ...who,
                intervensi:
                  'Monitor MAP (mean arterial pressure) (LIHAT: Kalkulator MAP)',
              },
              { ...who, intervensi: 'Monitor CVP (central venous pressure)' },
              { ...who, intervensi: 'Monitor PAWP, jika perlu' },
              { ...who, intervensi: 'Monitor PAP, jika perlu' },
              { ...who, intervensi: 'Monitor ICP (intra cranial pressure)' },
              { ...who, intervensi: 'Monitor gelombang ICP' },
              { ...who, intervensi: 'Monitor status pernapasan' },
              { ...who, intervensi: 'Monitor intake dan output cairan' },
              {
                ...who,
                intervensi:
                  'Monitor cairan serebro-spinalis (mis. Warna, konsistensi',
              },
              {
                ...who,
                intervensi:
                  'Minimalkan stimulus dengan menyediakan lingkungan yang tenang',
              },
              { ...who, intervensi: 'Berikan posisi semi fowler' },
              { ...who, intervensi: 'Hindari manuver valsava' },
              { ...who, intervensi: 'Cegah terjadinya kejang' },
              { ...who, intervensi: 'Hindari penggunaan PEEP' },
              { ...who, intervensi: 'Hindari pemberian cairan IV hipotonik' },
              { ...who, intervensi: 'Atur ventilator agar PaCO2 optimal' },
              { ...who, intervensi: 'Pertahankan suhu tubuh normal' },
              {
                ...who,
                intervensi:
                  'Kolaborasi pemberian sedasi dan antikonvulsan, jika perlu',
              },
              {
                ...who,
                intervensi: 'Kolaborasi pemberian diuretik osmosis, jika perlu',
              },
              {
                ...who,
                intervensi: 'Kolaborasi pemberian pelunak tinja, jika perlu',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0018',
          diagnosis: 'Berat Badan Lebih',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Berat badan membaik' },
              { ...who, kriteria: 'Tebal lipatan kulit membaik' },
              { ...who, kriteria: 'Indeks massa tubuh membaik' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              { ...who, intervensi: 'Konseling nutrisi' },
              { ...who, intervensi: 'Manajemen berat badan' },
              { ...who, intervensi: 'Promosi Latihan fisik' },
              {
                ...who,
                intervensi:
                  'Identifikasi kebiasaan makan dan perilaku makan yang akan diubah',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi kemajuan modifikasi diet secara regular',
              },
              {
                ...who,
                intervensi:
                  'Monitor intake dan output cairan, nilai hemoglobin, tekanan darah, kenaikan berat badan, dan kebiasaan membeli makanan',
              },
              { ...who, intervensi: 'Bina hubungan terapeutik' },
              { ...who, intervensi: 'Sepakati lama waktu pemberian konseling' },
              {
                ...who,
                intervensi:
                  'Tetapkan tujuan jangka pendek dan jangka Panjang yang realistis',
              },
              {
                ...who,
                intervensi:
                  'Gunakan standar nutrisi sesuai program diet dalam mengevaluasi kecukupan asupan makanan',
              },
              {
                ...who,
                intervensi:
                  'Pertimbangkan faktor-faktor yang mempengaruhi pemenuhan kebutuhan gizi (mis. Usia, tahap pertumbuhan dan perkembangan, penyakit)',
              },
              {
                ...who,
                intervensi:
                  'Informasikan perlunya modifikasi diet (misal: penurunan atau penambahan berat badan, pembatasan natrium atau cairan, pengurangan kolesterol',
              },
              {
                ...who,
                intervensi:
                  'Jelaskan program gizi dan persepsi pasien terhadap diet yang diprogramkan',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0019',
          diagnosis: 'Defisit Nutrisi',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Status nutrisi' },
              { ...who, kriteria: 'Berat badan' },
              { ...who, kriteria: 'Eliminasi fekal' },
              { ...who, kriteria: 'Fungsi gastrointestinal' },
              { ...who, kriteria: 'Nafsu makan' },
              { ...who, kriteria: 'Perilaku meningkatkan berat badan' },
              { ...who, kriteria: 'Status menelan' },
              { ...who, kriteria: 'Tingkat depresi' },
              { ...who, kriteria: 'Tingkat nyeri' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              { ...who, intervensi: 'Identifikasi status nutrisi' },
              {
                ...who,
                intervensi: 'Identifikasi alergi dan intoleransi makanan',
              },
              { ...who, intervensi: 'Identifikasi makanan yang disukai' },
              {
                ...who,
                intervensi: 'Identifikasi kebutuhan kalori dan jenis nutrien',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi perlunya penggunaan selang nasogastrik',
              },
              { ...who, intervensi: 'Monitor asupan makanan' },
              { ...who, intervensi: 'Monitor berat badan' },
              { ...who, intervensi: 'Monitor hasil pemeriksaan laboratorium' },
              {
                ...who,
                intervensi: 'Lakukan oral hygiene sebelum makan, jika perlu',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan menyajikan makanan dalam bentuk yang menarik dan suhu yang sesuai',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan makan makanan tinggi serat, tinggi kalori dan tinggi protein',
              },
              { ...who, intervensi: 'Anjurkan posisi duduk, jika mampu' },
              { ...who, intervensi: 'Ajarkan diet yang diprogramkan' },
              {
                ...who,
                intervensi:
                  'Kolaborasi pemberian medikasi sebelum makan (missal pereda nyeri, antimimetik) jika perlu',
              },
              {
                ...who,
                intervensi:
                  'Kolaborasi dengan ahli gizi untuk menentukan jumlah kalori dan jenis nutrien yang dibutuhkan jika perlu',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0020',
          diagnosis: 'Diare',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Integritas kulit membaik' },
              { ...who, kriteria: 'Kulit lembab,elastisitas baik' },
              {
                ...who,
                kriteria:
                  'Tidak ada tanda tanda pigmentasi abnormal pada kulit',
              },
              { ...who, kriteria: 'Hidrasi cukup' },
              {
                ...who,
                kriteria: 'Tidak ada tanda tanda perdarahan,kemerahan,hematoma',
              },
              { ...who, kriteria: 'Nekrosis membaik/berkurang' },
              { ...who, kriteria: 'Suhu kulit membaik' },
              { ...who, kriteria: 'Sensasi dan tekstur kulit membaik' },
              { ...who, kriteria: 'Tingkat nyeri berkurang' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi penyebab diare (inflamasi gastrointestinal,iritasi gastrointertinal,proses infeksi,malabsorpsi,ansietas,stress,efek obat obatan,pemberian botol susu)',
              },
              { ...who, intervensi: 'Identifikasi riwayat pemberian makanan' },
              {
                ...who,
                intervensi:
                  'Identifikasi gejala invaginasi (tangisan keras,kepucatan pada bayi)',
              },
              {
                ...who,
                intervensi:
                  'Monitor warna,volume,frekwensi,dan konsistensi tinja',
              },
              {
                ...who,
                intervensi:
                  'Monitor tanda gejala hipovolemia (takikardi,nadi teraba lemah,tekanan darah turun,turgor kulit turun,mukosa mulut kering,CRT melambat,berat badan menurun)',
              },
              {
                ...who,
                intervensi:
                  'Monitor iritasi dan ulcerasi kulit di daerah perianal',
              },
              { ...who, intervensi: 'Monitor jumlah pengeluaran diare' },
              { ...who, intervensi: 'Monitor keamanan penyiapan makanan' },
              {
                ...who,
                intervensi:
                  'Berikan asupan cairan oral (larutan gula garam,oralit,renalyte,pedialyte)',
              },
              {
                ...who,
                intervensi:
                  'Berikan cairan intravena (ringer asetat,ringer laktat) jika perlu.',
              },
              {
                ...who,
                intervensi:
                  'Ambil sampel darah untuk pemeriksaan darah lengkap dan elektrolit',
              },
              {
                ...who,
                intervensi: 'Ambil sampel feses untuk kultur jika perlu.',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan makanan porsi kecil dan sering secara bertahap',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan menghindari makanan pembentuk gas,pedas dan mengandung laktosa',
              },
              {
                ...who,
                intervensi: 'Anjurkan melanjutkan pemberian ASI untuk bayi',
              },
              {
                ...who,
                intervensi:
                  'Kolaborasi pemberian obat antimotilitas (loperamid,difeknosilat)',
              },
              {
                ...who,
                intervensi:
                  'Kolaborasi pemberian obat antispasmodic/spasmolitik (papaverin,ekstrak belladonna,mebeverine)',
              },
              {
                ...who,
                intervensi:
                  'Kolaborasi pemberian obat pengeras feses (atapulgit,smektit,kaolin pektin)',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0021',
          diagnosis: 'Disfungsi Motilitas Gastrointestinal',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Motilitas gastrointestinal membaik' },
              { ...who, kriteria: 'Eliminasi fekal' },
              { ...who, kriteria: 'Fungsi gastrointestinal membaik' },
              { ...who, kriteria: 'Keseimbangan cairan dan elektrolit' },
              { ...who, kriteria: 'Pemulihan pasca bedah' },
              { ...who, kriteria: 'Tingkat nyeri' },
              { ...who, kriteria: 'Tingkat infeksi' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              { ...who, intervensi: 'Manajemen nutrisi' },
              { ...who, intervensi: 'Pengontrolan infeksi' },
              {
                ...who,
                intervensi: 'Dukungan pengontrolan program pengobatan',
              },
              {
                ...who,
                intervensi: 'Manajemen pemberian obat oral dan intravena',
              },
              { ...who, intervensi: 'Edukasi diet dan proses penyakit' },
              { ...who, intervensi: 'Konseling nutrisi' },
              { ...who, intervensi: 'Insersi selang nasogastric' },
              { ...who, intervensi: 'Irigasi kolostromi' },
              { ...who, intervensi: 'Manajemen mual muntah' },
              {
                ...who,
                intervensi: 'Manajemen diare,eliminasi fekal,konstipasi',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0022',
          diagnosis: 'Hipervolemia',
          diagnosisKeperawatanKriterias: {
            create: [
              {
                ...who,
                kriteria: 'Tidak terjadi edema anasarka dan edema perifer',
              },
              {
                ...who,
                kriteria:
                  'Tidak terjadi peningkatan berat badan dalam waktu singkat',
              },
              { ...who, kriteria: 'Jugular Venous Pressure (JVP) menurun' },
              { ...who, kriteria: 'Refleks hepatojugular negatif' },
              { ...who, kriteria: 'Tidak ada tanda asites' },
              { ...who, kriteria: 'Balance cairan seimbang' },
              { ...who, kriteria: 'Vena jugularis normal' },
              { ...who, kriteria: 'Tidak ada suara nafas tambahan' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Periksa tanda dan gejala hypervolemia(missal ortopnea,dyspnea,edema,JVP/CVP meningkat,reflex hepatojugular positif,suara nafas tambahan)',
              },
              { ...who, intervensi: 'Identifikasi penyebab hypervolemia' },
              {
                ...who,
                intervensi:
                  'Monitor status hemodinamik (frekuensi jantung,tekanan darah,MAP,CVP,PAP,PCWP,CO,CI)',
              },
              { ...who, intervensi: 'Monitor intake dan output cairan' },
              {
                ...who,
                intervensi:
                  'Monitor tanda hemokonsentrasi (misal kadar natrium,BUN,hematocrit,berat jenis urine)',
              },
              {
                ...who,
                intervensi: 'Monitor tanda peningkatan tekanan onkotik plasma',
              },
              { ...who, intervensi: 'Monitor kecepatan infus secara ketat' },
              { ...who, intervensi: 'Monitor efek samping diuretik' },
              {
                ...who,
                intervensi:
                  'Timbang berat badan setiap hari pada waktu yang sama',
              },
              { ...who, intervensi: 'Batasi asupan cairan dan garam' },
              {
                ...who,
                intervensi: 'Tinggikan kepala tempat tidur 30-40 derajad',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan melapor jika haluaran urin <0.5 mL/kg/jam dalam 6 jam',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan melapor jika BB bertambah > 1kg dalam sehari',
              },
              { ...who, intervensi: 'Anjurkan meningkatkan asupan nutrisi' },
              {
                ...who,
                intervensi: 'Anjurkan meningkatkan asupan buah dan sayur',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan cara mengukur dan mencatat asupan dan haluaran cairan',
              },
              { ...who, intervensi: 'Ajarkan cara membatasi cairan' },
              { ...who, intervensi: 'Kolaborasi pemberian diuretic' },
              {
                ...who,
                intervensi:
                  'Kolaborasi penggantian kehilangan kalium akibat diuretic',
              },
              {
                ...who,
                intervensi:
                  'Kolaborasi pemberian continuous renal replacement therapy (CRRT),jika perlu',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0023',
          diagnosis: 'Hipovolemia',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Integritas kulit dan jaringan' },
              { ...who, kriteria: 'Keseimbangan asam basa' },
              { ...who, kriteria: 'Keseimbangan cairan dan elektrolit' },
              { ...who, kriteria: 'Penyembuhan luka' },
              { ...who, kriteria: 'Perfusi perifer' },
              { ...who, kriteria: 'Termoregulasi' },
              { ...who, kriteria: 'Tingkat perdarahan' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Periksa tanda dan gejala hipovolemia(misal frekwensi nadi meningkat,nadi teraba lemah,tekanan darah menurun,tekanan nadi menyempit,turgor kulit menurun,membrane mukosa kering,volume urin menurun,hematocrit meningkat,haus,lemah)',
              },
              { ...who, intervensi: 'Monitor intake dan output cairan.' },
              { ...who, intervensi: 'Hitung kebutuhan cairan' },
              { ...who, intervensi: 'Berikan posisi trendelenburg' },
              { ...who, intervensi: 'Berikan asupan cairan oral' },
              { ...who, intervensi: 'Anjurkan memeperbanyak cairan oral' },
              {
                ...who,
                intervensi: 'Anjurkan menghindari perubahan posisi mendadak',
              },
              {
                ...who,
                intervensi: 'Kolaborasi pemberian cairan isotonis (NaCl,RL)',
              },
              {
                ...who,
                intervensi:
                  'Kolaborasi pemberian cairan hipotonis (dektrose 2,5%,NaCL 0,4%',
              },
              {
                ...who,
                intervensi:
                  'Kolaborasi pemberian cairan koloid (albumin,plasmanate)',
              },
              { ...who, intervensi: 'Kolaborasi pemberian produk darah' },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0024',
          diagnosis: 'Ikterik Neonatus',
          diagnosisKeperawatanKriterias: {
            create: [
              {
                ...who,
                kriteria: 'Monitor ikterik pada sklera dan kulit bayi',
              },
              {
                ...who,
                kriteria:
                  'Monitor suhu tubuh dan tanda vital setiap 4 jam sekali',
              },
              {
                ...who,
                kriteria:
                  'Monitor identifikasi kebutuhan cairan sesuai dengan usia gestasi dan berat badan',
              },
              {
                ...who,
                kriteria:
                  'Monitor efek samping fototerapi : misal hipetermi, diare, rush pada kulit, penurunan berat badan lebih dari 8-10%',
              },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              { ...who, intervensi: 'Edukasi orang tua : fase bayi' },
              { ...who, intervensi: 'Edukasi pemantauan tanda vital' },
              { ...who, intervensi: 'Edukasi perawatan neonatus' },
              {
                ...who,
                intervensi: 'Edukasi skrining bayi sebelum pemulangan',
              },
              { ...who, intervensi: 'Edukasi pemberian obat oral' },
              {
                ...who,
                intervensi: 'Monitor ikterik pada sklera dan kulit bayi',
              },
              {
                ...who,
                intervensi:
                  'Monitor suhu tubuh dan tanda vital setiap 4 jam sekali',
              },
              {
                ...who,
                intervensi:
                  'Monitor identifikasi kebutuhan cairan sesuai dengan usia gestasi dan berat badan',
              },
              {
                ...who,
                intervensi:
                  'Monitor efek samping fototerapi : misal hipetermi, diare, rush pada kulit, penurunan berat badan lebih dari 8-10%',
              },
              {
                ...who,
                intervensi:
                  'Siapkan lampu fototerapi dan incubator atau kotak bayi',
              },
              { ...who, intervensi: 'Lepaskan pakaian bayi kecuali popok' },
              {
                ...who,
                intervensi:
                  'Ukur jarak antar lampu dan permukaan kulit bayi (30 cm atau tergantung spesifikasi lampu fototerapi)',
              },
              {
                ...who,
                intervensi:
                  'Biarkan tubuh bayi terpapar sinar fototerapi secara berkelanjutan',
              },
              {
                ...who,
                intervensi: 'Ganti segara alas dan popok bayi jika BAK/BAB',
              },
              {
                ...who,
                intervensi:
                  'Gunakan linen berwarna putih agar memantulkan cahaya sebanyak mungkin',
              },
              {
                ...who,
                intervensi: 'Anjurkan ibu menyusui sekitar 20-30 menit',
              },
              { ...who, intervensi: 'Anjurkan bu menyusui sesering mungkin' },
              {
                ...who,
                intervensi:
                  'Kolaborasi pemberiaan darah vena bilirubin direk dan indirek',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0025',
          diagnosis: 'Kesiapan Peningkatan Keseimbangan Cairan',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Integritas kulit membaik' },
              { ...who, kriteria: 'Kulit lembab,elastisitas baik' },
              {
                ...who,
                kriteria:
                  'Tidak ada tanda tanda pigmentasi abnormal pada kulit',
              },
              { ...who, kriteria: 'Hidrasi cukup' },
              {
                ...who,
                kriteria: 'Tidak ada tanda tanda perdarahan,kemerahan,hematoma',
              },
              { ...who, kriteria: 'Nekrosis membaik/berkurang' },
              { ...who, kriteria: 'Suhu kulit membaik' },
              { ...who, kriteria: 'Sensasi dan tekstur kulit membaik' },
              { ...who, kriteria: 'Tingkat nyeri berkurang' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Monitor status hidrasi (mis: frekuensi nadi, kekuatan nadi,akral, pengisian kapiler, kelembaban mukosa, turgor kulit, tekanan darah)',
              },
              { ...who, intervensi: 'Monitor berat badan harian' },
              {
                ...who,
                intervensi: 'Monitor berat badan sebelum dan sesudah dialysis',
              },
              {
                ...who,
                intervensi:
                  'Monitor hasil pemeriksaan laboratorium (mis: hematokrit, Na, K, Cl, berat jenis urin, BUN)',
              },
              {
                ...who,
                intervensi:
                  'Monitor status hemodinamik (mis: MAP, CVP, PAP, PCWP, jika tersedia)',
              },
              {
                ...who,
                intervensi:
                  'Catat intake-output dan hitung balans cairan 24 jam',
              },
              { ...who, intervensi: 'Berikan asupan cairan, sesuai kebutuhan' },
              { ...who, intervensi: 'Berikan cairan intravena, jika perlu' },
              { ...who, intervensi: 'Jelaskan tujuan dan prosedur pemantauan' },
              { ...who, intervensi: 'Dokumentasikan hasil pemantauan' },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0026',
          diagnosis: 'Kesiapan Peningkatan Nutrisi',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Integritas kulit membaik' },
              { ...who, kriteria: 'Kulit lembab,elastisitas baik' },
              {
                ...who,
                kriteria:
                  'Tidak ada tanda tanda pigmentasi abnormal pada kulit',
              },
              { ...who, kriteria: 'Hidrasi cukup' },
              {
                ...who,
                kriteria: 'Tidak ada tanda tanda perdarahan,kemerahan,hematoma',
              },
              { ...who, kriteria: 'Nekrosis membaik/berkurang' },
              { ...who, kriteria: 'Suhu kulit membaik' },
              { ...who, kriteria: 'Sensasi dan tekstur kulit membaik' },
              { ...who, kriteria: 'Tingkat nyeri berkurang' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi kebiasaan makan dan perilaku makan yang akan diubah',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi kemajuan modifikasi diet secara regular',
              },
              {
                ...who,
                intervensi:
                  'Monitor intake dan output cairan, nilai hemoglobin, tekanan darah, kenaikan berat badan, dan kebiasaan membeli makanan',
              },
              { ...who, intervensi: 'Bina hubungan terapeutik' },
              { ...who, intervensi: 'Sepakati lama waktu pemberian konseling' },
              {
                ...who,
                intervensi:
                  'Tetapkan tujuan jangka pendek dan jangka Panjang yang realistis',
              },
              {
                ...who,
                intervensi:
                  'Gunakan standar nutrisi sesuai program diet dalam mengevaluasi kecukupan asupan makanan',
              },
              {
                ...who,
                intervensi:
                  'Pertimbangkan faktor-faktor yang mempengaruhi pemenuhan kebutuhan gizi (mis. Usia, tahap pertumbuhan dan perkembangan, penyakit)',
              },
              {
                ...who,
                intervensi:
                  'Informasikan perlunya modifikasi diet (misal: penurunan atau penambahan berat badan, pembatasan natrium atau cairan, pengurangan kolesterol 3.8.1.3.2 Anjurkan minum air yang cukup',
              },
              {
                ...who,
                intervensi:
                  'Jelaskan program gizi dan persepsi pasien terhadap diet yang diprogramkan',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0027',
          diagnosis: 'Ketidakstabilan Kadar Glukosa Darah',
          diagnosisKeperawatanKriterias: {
            create: [
              {
                ...who,
                kriteria: 'Kadar glukosa darah berada dalam rentang normal',
              },
              {
                ...who,
                kriteria: 'Tidak ada tanda gejala hiperglikemia/hipoglikemia',
              },
              { ...who, kriteria: 'Tidak ada tanda tanda penurunan kesadaran' },
              { ...who, kriteria: 'Pusing,ngantuk berkurang' },
              { ...who, kriteria: 'Gemetar,berkeringat,mulut kering menurun' },
              { ...who, kriteria: 'Sensasi lemah lesu dan haus berkurang' },
              { ...who, kriteria: 'Denyut nadi normal' },
              { ...who, kriteria: 'Kemampuan bicara baik' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi tanda gejala dan kemungkinan faktor penyebab hiperglikemia/hipoglikemia',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi situasi yangmenyebabkan kebutuhan insulin meningkat',
              },
              { ...who, intervensi: 'Monitor kadar glukosa darah' },
              { ...who, intervensi: 'Monitor intake dan output cairan' },
              {
                ...who,
                intervensi:
                  'Monitor keton urin,kadar analisa gas darah,elektrolit,tekanan darah dan frekuensi nadi',
              },
              { ...who, intervensi: 'Berikan asupan oral' },
              {
                ...who,
                intervensi:
                  'Konsultasi dengan medis jika tanda gejala hiperglikemia/hipoglikemia tetap ada atau memburuk',
              },
              {
                ...who,
                intervensi: 'Fasilitasi ambulasi jika ada hipotensi ortostatik',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan menghindari olahraga saat kadar glukosa darah lebih dari 250mg/dl',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan monitor kadar glukosa darah secara mandiri',
              },
              {
                ...who,
                intervensi: 'Anjurkan kepatuhan terhadap diet dan olahraga',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan indikasi dan pentingnya pengujian keton urine jika perlu',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan pengelolaan diabetes(penggunaan insulin,obat oral,monitor asupan cairan,penggantian karbohidrat dan bantuan professional kesehatan)',
              },
              { ...who, intervensi: 'Kolaborasi pemberian insulin' },
              { ...who, intervensi: 'Kolaborasi pemberian cairan intravena' },
              { ...who, intervensi: 'Kolaborasi pemberian glucagon,kalium' },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0028',
          diagnosis: 'Menyusui Efektif',
          diagnosisKeperawatanKriterias: {
            create: [
              {
                ...who,
                kriteria: 'Bayi melekat pada payudara ibu dengan benar',
              },
              { ...who, kriteria: 'Ibu mampu memposisikan bayi dengan benar' },
              { ...who, kriteria: 'Miksi bayi lebih dari 8 kali dalam 24 jam' },
              { ...who, kriteria: 'Berat badan bayi meningkat' },
              { ...who, kriteria: 'ASI menetes/memancar' },
              { ...who, kriteria: 'Suplai ASI adekuat' },
              { ...who, kriteria: 'Puting tidak lecet setelah minggu kedua' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi keadaan emosional ibu saat akan dilakukan konseling menyusui',
              },
              {
                ...who,
                intervensi: 'Identifikasi keinginan dan tujuan menyusui',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi permasalahan yang ibu alami selama proses menyusui',
              },
              {
                ...who,
                intervensi:
                  'Gunakan Teknik mendengarkan aktif (misal: duduk sama tinggi, dengarkan permasalahan ibu)',
              },
              {
                ...who,
                intervensi: 'Berikan pujian terhadap perilaku ibu yang benar',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan Teknik menyusui yang tepat sesuai kebutuhan ibu',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0029',
          diagnosis: 'Menyusui Tidak Efektif',
          diagnosisKeperawatanKriterias: {
            create: [
              {
                ...who,
                kriteria: 'Bayi melekat pada payudara ibu dengan benar',
              },
              { ...who, kriteria: 'Ibu mampu memposisikan bayi dengan benar' },
              { ...who, kriteria: 'Miksi bayi lebih dari 8 kali dalam 24 jam' },
              { ...who, kriteria: 'Berat badan bayi meningkat' },
              { ...who, kriteria: 'ASI menetes/memancar' },
              { ...who, kriteria: 'Suplai ASI adekuat' },
              { ...who, kriteria: 'Puting tidak lecet setelah minggu kedua' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi kesiapan dan kemampuan menerima informasi',
              },
              {
                ...who,
                intervensi: 'Identifikasi tujuan atau keinginan menyusui',
              },
              {
                ...who,
                intervensi: 'Sediakan materi dan media Pendidikan Kesehatan',
              },
              {
                ...who,
                intervensi:
                  'Libatkan sistem pendukung: suami, keluarga, tenaga Kesehatan, dan masyarakat',
              },
              { ...who, intervensi: 'Berikan konseling menyusui' },
              {
                ...who,
                intervensi:
                  'Identifikasi keadaan emosional ibu saat akan dilakukan konseling menyusui',
              },
              {
                ...who,
                intervensi: 'Identifikasi keinginan dan tujuan menyusui',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi permasalahan yang ibu alami selama proses menyusui',
              },
              {
                ...who,
                intervensi:
                  'Gunakan Teknik mendengarkan aktif (mis: duduk sama tinggi, dengarkan permasalahan ibu)',
              },
              {
                ...who,
                intervensi: 'Berikan pujian terhadap perilaku ibu yang benar',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0030',
          diagnosis: 'Obesitas',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Berat badan turun' },
              { ...who, kriteria: 'Tebal lipatan tubuh berkurang' },
              { ...who, kriteria: 'Indeks massa tubuh membaik' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi: 'Jadwalkan Pendidikan Kesehatan sesuai kesepakatan',
              },
              {
                ...who,
                intervensi:
                  'Jelaskan hubungan asupan makanan, Latihan, peningkatan, dan penurunan berat badan',
              },
              {
                ...who,
                intervensi:
                  'Jelaskan kondisi medis yang dapat mempengaruhi berat badan',
              },
              {
                ...who,
                intervensi:
                  'Jelaskan risiko kondisi kegemukan (overweight) dan kurus (underweight)',
              },
              {
                ...who,
                intervensi:
                  'Jelaskan kebiasaan, tradisi dan budaya, serta faktor genetic yang mempengaruhi berat badan',
              },
              { ...who, intervensi: 'Hitung berat badan ideal pasien' },
              { ...who, intervensi: 'Hitung persentase lemak dan otot pasien' },
              {
                ...who,
                intervensi:
                  'Fasilitasi menentukan target berat badan yang realistis',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0031',
          diagnosis: 'Risiko Berat Badan Lebih',
          diagnosisKeperawatanKriterias: {
            create: [
              {
                ...who,
                kriteria:
                  'Mampu menentukan target berat badan dalam rentang normal',
              },
              {
                ...who,
                kriteria: 'Memiliki komitmen pada rencana makan yang sehat',
              },
              {
                ...who,
                kriteria: 'Mampu menghindari makanan dan minuman tinggi kalori',
              },
              { ...who, kriteria: 'Mampu memilih makanan dan minuman bergizi' },
              { ...who, kriteria: 'Berhasil mengontrol porsi makan' },
              { ...who, kriteria: 'Bisa menetapkan latihan rutin' },
              { ...who, kriteria: 'Bisa memonitor IMT' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi kebiasaan pola makan saat ini dan masa lalu',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi persepsi pasien dan keluarga tentang diet yang diprogramkan',
              },
              {
                ...who,
                intervensi: 'Sediakan rencana makan tertulis, jika perlu',
              },
              {
                ...who,
                intervensi:
                  'Informasikan makanan yang diperbolehkan dan dilarang',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan pertahankan posisi semi fowler (30 – 45 derajat) 20 – 30 menit setelah makan',
              },
              {
                ...who,
                intervensi: 'Anjurkan melakukan olahraga sesuai toleransi',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan cara membaca label dan memilih makanan yang sesuai',
              },
              {
                ...who,
                intervensi:
                  'Monitor intake dan output cairan, nilai hemoglobin, tekanan darah, kenaikan berat badan, dan kebiasaan membeli makanan',
              },
              {
                ...who,
                intervensi:
                  'Tetapkan tujuan jangka pendek dan jangka Panjang yang realistis',
              },
              {
                ...who,
                intervensi:
                  'Informasikan perlunya modifikasi diet (misal: penurunan atau penambahan berat badan, pembatasan natrium atau cairan, pengurangan kolesterol',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0032',
          diagnosis: 'Risiko Defisit Nutrisi',
          diagnosisKeperawatanKriterias: {
            create: [
              {
                ...who,
                kriteria:
                  'Bisa mengidentifikasi penyebab penurunan berai bacian',
              },
              {
                ...who,
                kriteria: 'Bisa menetapkan target berat badan yang sehat',
              },
              { ...who, kriteria: 'Bisa mengidentifikasi kebutuhan kalori' },
              {
                ...who,
                kriteria:
                  'Bisa mengidentifikasi makanan yang disukai dan tidak disukai',
              },
              {
                ...who,
                kriteria:
                  'Bisa memilih makanan dan minuman yang berprotein dan berkalori tinggi',
              },
              {
                ...who,
                kriteria:
                  'Bisa mempertahankan asupan makanan dan minuman yang bernutrisi',
              },
              { ...who, kriteria: 'Bisa memonitor IMT' },
              { ...who, kriteria: 'Bisa memonitor berat badan' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Monitor asupan dan keluarnya makanan dan cairan serta kebutuhan kalori',
              },
              { ...who, intervensi: 'Timbang berat badan secara rutin' },
              {
                ...who,
                intervensi:
                  'Diskusikan perilaku makan dan jumlah aktivitas fisik (termasuk olahraga) yang sesuai',
              },
              {
                ...who,
                intervensi:
                  'Damping ke kamar mandi untuk pengamatan perilaku memuntahkan Kembali makanan',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan membuat catatan harian tentang perasaan dan situasi pemicu pengeluaran makanan (mis: pengeluaran yang disengaja, muntah, aktivitas berlebihan)',
              },
              { ...who, intervensi: 'Ajarkan pengaturan diet yang tepat' },
              {
                ...who,
                intervensi:
                  'Ajarkan keterampilan koping untuk penyelesaian masalah perilaku makan',
              },
              {
                ...who,
                intervensi:
                  'Kolaborasi dengan ahli gizi tentang target berat badan, kebutuhan kalori dan pilihan makanan',
              },
              { ...who, intervensi: 'Identifikasi status nutrisi' },
              {
                ...who,
                intervensi: 'Identifikasi alergi dan intoleransi makanan',
              },
              {
                ...who,
                intervensi: 'Identifikasi kebutuhan kalori dan jenis nutrien',
              },
              { ...who, intervensi: 'Monitor asupan makanan' },
              { ...who, intervensi: 'Monitor berat badan' },
              { ...who, intervensi: 'Monitor hasil pemeriksaan laboratorium' },
              { ...who, intervensi: 'Berikan suplemen makanan, jika perlu' },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0033',
          diagnosis: 'Risiko Disfungsi Motilitas Gastrointestinal',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Tingkat nyeri' },
              { ...who, kriteria: 'Kram abdomen menurun' },
              { ...who, kriteria: 'Tidak neusea' },
              { ...who, kriteria: 'Tidak vomitus' },
              { ...who, kriteria: 'Distensi abdomen' },
              { ...who, kriteria: 'Diare' },
              { ...who, kriteria: 'Suara peristaltik' },
              { ...who, kriteria: 'Pengosongan lambung' },
              { ...who, kriteria: 'Flatus' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi kemampuan pasien dan keluarga menerima informasi',
              },
              {
                ...who,
                intervensi: 'Identifikasi tingkat pengetahuan saat ini',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi kebiasaan pola makan saat ini dan masa lalu',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi keterbatasan finansial untuk menyediakan makanan',
              },
              {
                ...who,
                intervensi: 'Persiapkan meteri, media dan alat peraga',
              },
              {
                ...who,
                intervensi:
                  'Jadwalkan waktu yang tepat untuk memberikan pendidikan kesehatan',
              },
              {
                ...who,
                intervensi: 'Berikan kesempatan pasien dan keluarga bertanya',
              },
              {
                ...who,
                intervensi: 'Sediakan rencana makan tertulis, jika perlu',
              },
              {
                ...who,
                intervensi: 'Jelaskan tujuan kepatuhan diet terhadap kesehatan',
              },
              {
                ...who,
                intervensi:
                  'Informasikan makanan yang diperbolehkan dan dilarang',
              },
              {
                ...who,
                intervensi:
                  'Informasikan kemungkinan interaksi obat dan makanan, jika perlu',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan pertahanan posisi semifowler (30-45 derajat) 20-30 menit setelah makan',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan mengganti bahan makan sesuai dengan diet yang diprogramkan',
              },
              {
                ...who,
                intervensi: 'Anjurkan melakukan olahraga sesuai toleransi',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan cara membaca lebel dan memilih makanan yang sesuai',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan cara merencanakan makanan yang sesuai program',
              },
              {
                ...who,
                intervensi:
                  'Rekomendasikan resep makanan yang sesuai ddengan diet, jika perlu',
              },
              {
                ...who,
                intervensi:
                  'Rujuk ke ahli gizi dan sertakan keluarga, jika perlu',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0034',
          diagnosis: 'Risiko Hipovolemia',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Kekuatan nadi meningkat' },
              { ...who, kriteria: 'Output urine meningkat' },
              { ...who, kriteria: 'Membrane mukosa lembab' },
              { ...who, kriteria: 'Pengisian vena meningkat' },
              { ...who, kriteria: 'Frekuensi nadi dalam batas normal' },
              { ...who, kriteria: 'Tekanan darah dalam batas normal' },
              { ...who, kriteria: 'Turgor kulit elastis' },
              { ...who, kriteria: 'Haemoglobin dalam batas normal' },
              { ...who, kriteria: 'Hematokrit dalam batas normal' },
              { ...who, kriteria: 'Suhu tubuh dalam batas normal' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Periksa tanda dan gejala hipovolemia (mis. Frekuensi nadi meningkat, nadi teraba lemah, tekanan darah menurun, tekanan nadi menyempit , turgor kulit menurun , membrane mukosa kering, volume urine menurun, ht meningkat, haus , lemah)',
              },
              { ...who, intervensi: 'Monitor intake dan output cairan' },
              { ...who, intervensi: 'Hitung kebutuhan cairan' },
              { ...who, intervensi: 'Berikan posisi modified trendelengburg' },
              { ...who, intervensi: 'Berikan asupan cairan oral.' },
              {
                ...who,
                intervensi: 'Anjurkan memperbanyak asupan cairan oral',
              },
              {
                ...who,
                intervensi: 'Anjurkan menghindari perubahan posisi mendadak',
              },
              {
                ...who,
                intervensi:
                  'Kolaborasi pemberian cairan iv isotonik (mis. Nacl, rl)',
              },
              {
                ...who,
                intervensi:
                  'Kolaborasi pemberian cairan iv hipotonik (mis. Glukosa 2,5%, nacl 0,4%)',
              },
              {
                ...who,
                intervensi:
                  'Kolaborasi pemberian cairan koloid (mis. Albumin, plasmanate)',
              },
              { ...who, intervensi: 'Kolaborasi pemberian produk darah.' },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0035',
          diagnosis: 'Risiko Ikterik Neonatus',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Menurunnya kerusakan jaringan' },
              { ...who, kriteria: 'Kerusakan lapisan kulit menurun' },
              { ...who, kriteria: 'Tingkat nyeri menurun' },
              { ...who, kriteria: 'Perdarahan menurun' },
              { ...who, kriteria: 'Kemerahan menurun' },
              { ...who, kriteria: 'Hemetoma menurun' },
              { ...who, kriteria: 'Elastisitas meningkat' },
              { ...who, kriteria: 'Hidrasi meningkat' },
              { ...who, kriteria: 'Perfusi jaringan meningkat' },
              { ...who, kriteria: 'Suhu kulit membaik' },
              { ...who, kriteria: 'Sensasi membaik' },
              { ...who, kriteria: 'Tekstur membaik' },
              { ...who, kriteria: 'Pertumbuhan rambut membaik' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi kondisi awal bayi setelah lahir (mis. Kecukupan bulan, air ketuban jernih/ bercampur mekonium, menangis spontan , tonus otot)',
              },
              {
                ...who,
                intervensi: 'Monitor tanda vital bayi (terutama suhu)',
              },
              {
                ...who,
                intervensi:
                  'Lakukan inisiasi menyusui dini (ind) segera bayi lahir',
              },
              {
                ...who,
                intervensi:
                  'Berikan vitamin k 1 mg intramuskuler untuk mencegah pendarahan',
              },
              {
                ...who,
                intervensi: 'Mandikan selama 5-10 menit, minimal 1x sehari',
              },
              {
                ...who,
                intervensi:
                  'Mandikan dengan air hangat ( 36-37 derajat celcius)',
              },
              {
                ...who,
                intervensi: 'Gunakan sabun yang mengandung provitain b5',
              },
              {
                ...who,
                intervensi: 'Oleskan baby oil mempertahankan kelembapan kulit',
              },
              {
                ...who,
                intervensi: 'Rawat tali pusat secara terbuka (tidak dibungkus)',
              },
              {
                ...who,
                intervensi:
                  'Bersihkan tali pusat dengan air steril atau matang',
              },
              { ...who, intervensi: 'Kenakan pakaian dari bahan katun' },
              {
                ...who,
                intervensi:
                  'Selimuti untuk mempertehankan kehangatan dan mencegah hipotermia',
              },
              { ...who, intervensi: 'Ganti popok segera jika basah' },
              {
                ...who,
                intervensi: 'Anjurkan tidak membubuhi apapun dari tali pusat',
              },
              { ...who, intervensi: 'Anjurkan ibu menyusui bayi setiap 2 jam' },
              {
                ...who,
                intervensi: 'Anjurkan menyendawakan bayi setelah disusui',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan ibu mencuci tangan sebelum menyentuh bayi',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0036',
          diagnosis: 'Risiko Ketidakseimbangan Cairan',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Asupan cairan meningkat' },
              { ...who, kriteria: 'Haluaran urin meningkat' },
              { ...who, kriteria: 'Kelembaban membran mukosa meningkat' },
              { ...who, kriteria: 'Edema menurun' },
              { ...who, kriteria: 'Dehidrasi menurun' },
              { ...who, kriteria: 'Tekanan darah membaik' },
              { ...who, kriteria: 'Denyut nadi radial membaik' },
              { ...who, kriteria: 'Tekanan arteri rata-rata membaik' },
              { ...who, kriteria: 'Membran mukosa membaik' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Monitor status hidrasi (mis: frekuensi nadi, kekuatan nadi, akral, pengisian kapiler, kelembaban mukosa, turgor kulit, tekanan darah)',
              },
              { ...who, intervensi: 'Monitor berat badan harian' },
              {
                ...who,
                intervensi: 'Monitor berat badan sebelum dan sesudah dialisis',
              },
              {
                ...who,
                intervensi:
                  'Catat intake-output dan hitung balans cairan 24 jam',
              },
              { ...who, intervensi: 'Berikan asupan cairan, sesuai kebutuhan' },
              { ...who, intervensi: 'Berikan cairan intravena, jika perlu' },
              {
                ...who,
                intervensi: 'Kolaborasi pemberian diuretik, jika perlu',
              },
              { ...who, intervensi: 'Monitor frekuensi dan kekuatan nadi' },
              { ...who, intervensi: 'Monitor frekuensi napas' },
              { ...who, intervensi: 'Monitor tekanan darah' },
              { ...who, intervensi: 'Monitor waktu pengisian kapiler' },
              { ...who, intervensi: 'Monitor elastisitas atau turgor kulit' },
              {
                ...who,
                intervensi: 'Monitor jumlah, warna, dan berat jenis urin',
              },
              { ...who, intervensi: 'Monitor kadar albumin dan protein total' },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0037',
          diagnosis: 'Risiko Ketidakseimbangan Elektrolit',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Eleminasi fekal' },
              { ...who, kriteria: 'Fungsi gastrointestinal' },
              { ...who, kriteria: 'Keseimbangan cairan' },
              { ...who, kriteria: 'Penyembuhan luka' },
              { ...who, kriteria: 'Status nutrisi' },
              { ...who, kriteria: 'Tingkat mual muntah' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Monitor kemungkinan penyebab ketidak seimbangan elektrolit',
              },
              { ...who, intervensi: 'Monitor kadar elektrolit serum' },
              { ...who, intervensi: 'Monitor Mual,muntah, diare' },
              { ...who, intervensi: 'Monitor kehilangan cairan jikaperlu' },
              { ...who, intervensi: 'Monitor tanda dan gejala hipokalemia' },
              { ...who, intervensi: 'Monitor tanda dan gejala hiperkalemia' },
              { ...who, intervensi: 'Monitor tanda dan gejala Hiponatremia' },
              { ...who, intervensi: 'Monitor tanda dan gejala hiperkalsemia' },
              {
                ...who,
                intervensi:
                  'Atur interval waktu pemantauan sesuai dengan kondisi pasien',
              },
              { ...who, intervensi: 'Dokumentasikan hasil pemantauan' },
              { ...who, intervensi: 'Jelaskan tujuan dan prosedur pemantauan' },
              {
                ...who,
                intervensi: 'Informasikan hasil pemantauan jika perlu',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0038',
          diagnosis: 'Risiko Ketidakstabilan Kadar Glukosa Darah',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Kontrol risiko' },
              { ...who, kriteria: 'Prilaku mempertahankan beratbadan' },
              { ...who, kriteria: 'Prilaku menurunkan berat badan' },
              { ...who, kriteria: 'Status antrapartum' },
              { ...who, kriteria: 'Status Intra partum' },
              { ...who, kriteria: 'Status nutrisi' },
              { ...who, kriteria: 'Status pasca partum' },
              { ...who, kriteria: 'Tingkat pengetahuan' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi: 'Identifikasi kemungkinan penyebab hiperglikemia',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi situasi yang menyebabkan kebutuhan insulin meningkat',
              },
              { ...who, intervensi: 'Monitor kadar glukosa darah jika perlu' },
              { ...who, intervensi: 'Monitor tanda dan gejala hiperglikemia' },
              { ...who, intervensi: 'Monitor intake dan output cairan' },
              {
                ...who,
                intervensi:
                  'Monitor keton urin kadar analisa gas darah elektrolit tekanan darah ortostatik dan frekuensi nadi',
              },
              { ...who, intervensi: 'Berikan asupan cairan oral' },
              {
                ...who,
                intervensi:
                  'Konsultasi dengan medis jika tanda dan gejala hi[erglikemia tetap ada atau memburuk',
              },
              {
                ...who,
                intervensi: 'Fasilitasi ambulasi jika ada hipotensi ortostatik',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan menghindari olahraga saat kadar glukosa darah lebih dari 250 mg/dl',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan monitor kadar glukosa darah secara mandii',
              },
              {
                ...who,
                intervensi: 'Anjurkan kepatuhan terhadap diet dan olahraga',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan indikasi dan dan pentingnya pengujian keton urin,jika perlu',
              },
              {
                ...who,
                intervensi: 'Kolaborasi pemberian insulin ,jika perlu',
              },
              {
                ...who,
                intervensi: 'Kolaborasi pemberian cairan IV jika perlu',
              },
              { ...who, intervensi: 'Kolaborasi pemberian kalium jika perlu' },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0039',
          diagnosis: 'Risiko Syok',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Keseimbangan asam basa' },
              { ...who, kriteria: 'Perfusi Perifer' },
              { ...who, kriteria: 'Respon alergi sistemik' },
              { ...who, kriteria: 'Status cairan' },
              { ...who, kriteria: 'Status Sirkulasi' },
              { ...who, kriteria: 'Tingkat infeksi' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Monitor status kardiopulmonal Frekuensi dan kekuatan nadi ,nafas dan tekanan darah',
              },
              {
                ...who,
                intervensi: 'Monitor status oksigenasi (oksimetrinadi AGD)',
              },
              { ...who, intervensi: 'Monitor status cairan' },
              {
                ...who,
                intervensi: 'Monitor tingkat kesadaran dan respon pupil',
              },
              { ...who, intervensi: 'Periksa riwayat alergi' },
              {
                ...who,
                intervensi:
                  'Berikan oksigen untuk mempertahankan saturasi oksigen >94%',
              },
              {
                ...who,
                intervensi:
                  'Persiapkan intubasi dan ventilasi mekanis jika perlu',
              },
              { ...who, intervensi: 'Pasang jalur IV' },
              {
                ...who,
                intervensi:
                  'Pasang kateter urin untuk menilai produksi urin bila perlu',
              },
              {
                ...who,
                intervensi: 'Lakukan Skin Tes untuk mencegah reaksi alergi',
              },
              { ...who, intervensi: 'Jelaskan penyebab risiko syok' },
              { ...who, intervensi: 'Jelaskan tanda dan gejala awal syok' },
              {
                ...who,
                intervensi: 'Anjurkan memperbanyak asupan cairan oral',
              },
              { ...who, intervensi: 'Anjurkan menghindari Alergen' },
              {
                ...who,
                intervensi: 'Kolaborasi pemberian tranfusi darah jika perlu',
              },
              {
                ...who,
                intervensi: 'Kolaborasi pemberian cairan IV jika perlu',
              },
              {
                ...who,
                intervensi: 'Kolaborasi pemberian antiinflamasi jika perlu',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0040',
          diagnosis: 'Gangguan Eliminasi Urin',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Kontinensia urin' },
              { ...who, kriteria: 'Kontrol gejala' },
              { ...who, kriteria: 'Status neurologis' },
              { ...who, kriteria: 'Tingkat infeksi' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi: 'Identifikasi kebiasaan BAB/BAK sesuai usia',
              },
              { ...who, intervensi: 'Monitor integritas kulit pasien' },
              {
                ...who,
                intervensi:
                  'Buka pakaian yang diperlukan untuk memudahkan eliminasi',
              },
              {
                ...who,
                intervensi:
                  'Dukung penggunaan toilet commode/pispot/urinal secara konsisten',
              },
              { ...who, intervensi: 'Jaga privasi selama eliminasi' },
              {
                ...who,
                intervensi: 'Ganti pakaian pasien setelah eliminasi jika perlu',
              },
              {
                ...who,
                intervensi: 'Bersihkan alat bantu BAK/BAB setelah digunakan',
              },
              { ...who, intervensi: 'Latih BAB /BAK sesuai jadwal jika perlu' },
              { ...who, intervensi: 'Anjurkan BAB/BAK secara rutin' },
              {
                ...who,
                intervensi: 'Anjurkan ke kamar mandi /toilet jika perlu',
              },
              {
                ...who,
                intervensi:
                  'Kolaborasi pemberian obat supositoria uretra jika perlu',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0041',
          diagnosis: 'Inkontinensia Fekal',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Frekuensi buang air besar menurun' },
              { ...who, kriteria: 'Pengontrolan pengeluaran feses meningkat' },
              { ...who, kriteria: 'Kondisi kulit perianal meningkat' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              { ...who, intervensi: 'Monitor kondisi kulit perianal' },
              { ...who, intervensi: 'Monitor keadekuatan evakuasi feses' },
              { ...who, intervensi: 'Monitor diet dan kebutuhan cairan' },
              { ...who, intervensi: 'Monitor efek samping pemberian obat' },
              {
                ...who,
                intervensi: 'Jaga kebersihan tempat tidur dan pakaian',
              },
              { ...who, intervensi: 'Hindari makanan yang menyebabkan diare' },
              { ...who, intervensi: 'Anjurkan mencatat karakteristik feses' },
              { ...who, intervensi: 'Kolaborasi pemberian obat diare' },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0042',
          diagnosis: 'Inkontinensia Urin Berlanjut',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Kemampuan mengontrol urin meningkat' },
              { ...who, kriteria: 'Nocturia menurun' },
              {
                ...who,
                kriteria: 'Residu volume urine setelah berkemih menurun',
              },
              { ...who, kriteria: 'Dribbling menurun' },
              { ...who, kriteria: 'Hesistancy menurun' },
              { ...who, kriteria: 'Enuresis menurun' },
              {
                ...who,
                kriteria: 'Kemampuan menunda pengeluaran urin membaik',
              },
              { ...who, kriteria: 'Frekuensi berkemih membaik' },
              { ...who, kriteria: 'Sensasi berkemih membaik' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi penyebab inkontinensia urin (mis: disfungsi neurologis, gangguan medulla spinalis, gangguan refleks destrusor, obat-obatan, usia, Riwayat operasi, gangguan fungsi kognitif)',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi perasaan dan persepsi pasien terhadap inkontinensia urin yang dialaminya',
              },
              {
                ...who,
                intervensi:
                  'Monitor keefektifan obat, pembedahan, dan terapi modalitas berkemih.',
              },
              {
                ...who,
                intervensi:
                  'Jelaskan definisi, jenis inkontinensia, penyebab inkontinensia urin',
              },
              {
                ...who,
                intervensi: 'Jelaskan program penanganan inkontinensia urin',
              },
              {
                ...who,
                intervensi:
                  'Jelaskan jenis pakaian dan lingkungan yang mendukung proses berkemih',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan membatasi konsumsi cairan 2-3 jam menjelang tidur',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan memantau cairan keluar dan masuk serta pola eliminasi urin',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan minum minimal 1500 cc/hari, jika tidak ada kontraindikasi',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan menghindari kopi, minuman bersoda, teh dan cokelat',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0043',
          diagnosis: 'Inkontinensia Urin Fungsional',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Kemampuan mengontrol urin meningkat' },
              { ...who, kriteria: 'Nokturia menurun' },
              {
                ...who,
                kriteria: 'Residu volume urine setelah berkemih menurun',
              },
              { ...who, kriteria: 'Dribbling menurun' },
              { ...who, kriteria: 'Hesistancy menurun' },
              { ...who, kriteria: 'Enuresis menurun' },
              {
                ...who,
                kriteria: 'Kemampuan menunda pengeluaran urin membaik',
              },
              { ...who, kriteria: 'Frekuensi berkemih membaik' },
              { ...who, kriteria: 'Sensasi berkemih membaik' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Periksa kembali penyebab gangguan berkemih (mis: kognitif, kehilangan ekstremitas/fungsi ekstremitas, kehilangan penglihatan)',
              },
              { ...who, intervensi: 'Monitor pola dan kemampuan berkemih.' },
              { ...who, intervensi: 'Hindari penggunaan kateter indwelling' },
              { ...who, intervensi: 'Siapkan area toilet yang aman' },
              {
                ...who,
                intervensi:
                  'Sediakan peralatan yang dibutuhkan dekat dan mudah dijangkau (mis: kursi komode, pispot, urinal). Jelaskan arah-arah menuju kamar mandi/toilet pada pasien dengan gangguan penglihatan',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan intake cairan adekuat untuk mendukung output urin',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan aliminasi normal dengan beraktivitas dan olahraga sesuai kemampuan.',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0044',
          diagnosis: 'Inkontinensia Urin Berlebih',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Kemampuan mengontrol urin meningkat' },
              { ...who, kriteria: 'Nokturia menurun' },
              {
                ...who,
                kriteria: 'Residu volume urine setelah berkemih menurun',
              },
              { ...who, kriteria: 'Dribbling menurun' },
              { ...who, kriteria: 'Hesistancy menurun' },
              { ...who, kriteria: 'Enuresis menurun' },
              {
                ...who,
                kriteria: 'Kemampuan menunda pengeluaran urin membaik',
              },
              { ...who, kriteria: 'Frekuensi berkemih membaik' },
              { ...who, kriteria: 'Sensasi berkemih membaik' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Periksa kondisi pasien (mis: kesadaran, tanda-tanda vital, daerah perineal, distensi kandung kemih, inkontinensia urin, refleks berkemih)',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi penyebab inkontinensia urin (mis: disfungsi neurologis, gangguan medulla spinalis, gangguan refleks destrusor, obat-obatan, usia, Riwayat operasi, gangguan fungsi kognitif)',
              },
              { ...who, intervensi: 'Buat jadwal konsumsi obat-obat diuretik' },
              {
                ...who,
                intervensi:
                  'Ambil sampel urin untuk pemeriksaan urin lengkap atau kultur',
              },
              {
                ...who,
                intervensi:
                  'Jelaskan definisi, jenis inkontinensia, penyebab inkontinensia urin',
              },
              {
                ...who,
                intervensi: 'Jelaskan program penanganan inkontinensia urin',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan minum minimal 1500 cc/hari, jika tidak ada kontraindikasi',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan menghindari kopi, minuman bersoda, teh dan cokelat',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0045',
          diagnosis: 'Inkontinensia Urin Refleks',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Frekuensi buang air kecil menurun' },
              { ...who, kriteria: 'Pengontrolan pengeluaran urin meningkat' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi Penyebab Inkontinensia urin ( mis , gg fungsi kognitif , cedera tulang belakang , usia , Riwayat operasi )',
              },
              {
                ...who,
                intervensi:
                  'Jelaskan definisi , jenis , penyebab inkontinensia urine',
              },
              {
                ...who,
                intervensi:
                  'Diskusikan program inkontinensia urine ( mis : jadwal minum berkemih , konsumsi obat dieuretik , Latihan otot perkemihan',
              },
              {
                ...who,
                intervensi:
                  'Kolaborasi dengan medis ntuk mengatasi masalah inkotinensia urin',
              },
              {
                ...who,
                intervensi:
                  'Kolaborasi bagian penunjang medik untuk pemeriksaan urine jika perlu',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0046',
          diagnosis: 'Inkontinensia Urin Stres',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Kemampuan mengontrol urin meningkat' },
              { ...who, kriteria: 'Nokturia menurun' },
              {
                ...who,
                kriteria: 'Residu volume urine setelah berkemih menurun',
              },
              { ...who, kriteria: 'Dribbling menurun' },
              { ...who, kriteria: 'Hesistancy menurun' },
              { ...who, kriteria: 'Enuresis menurun' },
              {
                ...who,
                kriteria: 'Kemampuan menunda pengeluaran urin membaik',
              },
              { ...who, kriteria: 'Frekuensi berkemih membaik' },
              { ...who, kriteria: 'Sensasi berkemih membaik' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Anjurkan tidak mengkontraksikan perut, kaki, dan bokong saat melakukan Latihan otot panggul',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan menambah durasi kontraksi-relaksasi 10 detik dengan siklus 10-20 kali, dilakukan 3-4 kali sehari',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan mengkontraksikan sekitar otot uretra dan anus seperti menahan BAB/BAK selama 5 detik kemudian dikendurkan dan direlaksasikan dengan siklus 10 kali',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan mengevaluasi Latihan yang dilakukan dengan cara menghentikan urin sesaat saat BAK, seminggu sekali.',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi penyebab inkontinensia urin (mis: disfungsi neurologis, gangguan medulla spinalis, gangguan refleks destrusor, obat-obatan, usia, Riwayat operasi, gangguan fungsi kognitif)',
              },
              { ...who, intervensi: 'Buat jadwal konsumsi obat-obat diuretik' },
              {
                ...who,
                intervensi:
                  'Ambil sampel urin untuk pemeriksaan urin lengkap atau kultur',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan membatasi konsumsi cairan 2-3 jam menjelang tidur',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan minum minimal 1500 cc/hari, jika tidak ada kontraindikasi',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan menghindari kopi, minuman bersoda, teh dan cokelat',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0047',
          diagnosis: 'Inkontinensia Urine Urgensi',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Kemampuan mengontrol urin meningkat' },
              { ...who, kriteria: 'Nokturia menurun' },
              {
                ...who,
                kriteria: 'Residu volume urine setelah berkemih menurun',
              },
              { ...who, kriteria: 'Dribbling menurun' },
              { ...who, kriteria: 'Hesistancy menurun' },
              { ...who, kriteria: 'Enuresis menurun' },
              {
                ...who,
                kriteria: 'Kemampuan menunda pengeluaran urin membaik',
              },
              { ...who, kriteria: 'Frekuensi berkemih membaik' },
              { ...who, kriteria: 'Sensasi berkemih membaik' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Periksa kembali penyebab gangguan berkemih (mis: kognitif, kehilangan ekstremitas/fungsi ekstremitas, kehilangan penglihatan)',
              },
              { ...who, intervensi: 'Monitor pola dan kemampuan berkemih' },
              {
                ...who,
                intervensi:
                  'Identifikasi penyebab inkontinensia urin (mis: disfungsi neurologis, gangguan medulla spinalis, gangguan refleks destrusor, obat-obatan, usia, Riwayat operasi, gangguan fungsi kognitif)',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi perasaan dan persepsi pasien terhadap inkontinensia urin yang dialaminya',
              },
              {
                ...who,
                intervensi:
                  'Monitor keefektifan obat, pembedahan, dan terapi modalitas berkemih',
              },
              { ...who, intervensi: 'Hindari penggunaan kateter indwelling' },
              { ...who, intervensi: 'Siapkan area toilet yang aman' },
              {
                ...who,
                intervensi:
                  'Sediakan peralatan yang dibutuhkan dekat dan mudah dijangkau (mis: kursi komode, pispot, urinal)',
              },
              {
                ...who,
                intervensi:
                  'Bersihkan daerah genital dan kulit sekitar secara rutin',
              },
              {
                ...who,
                intervensi:
                  'Berikan pujian atas keberhasilan mencegah inkontinensia',
              },
              { ...who, intervensi: 'Buat jadwal konsumsi obat-obat diuretik' },
              {
                ...who,
                intervensi:
                  'Ambil sampel urin untuk pemeriksaan urin lengkap atau kultur',
              },
              {
                ...who,
                intervensi:
                  'Jelaskan arah-arah menuju kamar mandi/toilet pada pasien dengan gangguan penglihatan',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan intake cairan adekuat untuk mendukung output urin',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan aliminasi normal dengan beraktivitas dan olahraga sesuai kemampuan',
              },
              {
                ...who,
                intervensi:
                  'Jelaskan definisi, jenis inkontinensia, penyebab inkontinensia urin',
              },
              {
                ...who,
                intervensi: 'Jelaskan program penanganan inkontinensia urin',
              },
              {
                ...who,
                intervensi:
                  'Jelaskan jenis pakaian dan lingkungan yang mendukung proses berkemih',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan membatasi konsumsi cairan 2-3 jam menjelang tidur',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan memantau cairan keluar dan masuk serta pola eliminasi urin',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan minum minimal 1500 cc/hari, jika tidak ada kontraindikasi',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan menghindari kopi, minuman bersoda, teh dan cokelat',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan konsumsi buah dan sayur untuk menghindari konstipasi',
              },
              { ...who, intervensi: 'Rujuk ke ahli inkontinensia, jika perlu' },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0048',
          diagnosis: 'Kesiapan Peningkatan Eliminasi Urin',
          diagnosisKeperawatanKriterias: {
            create: [
              {
                ...who,
                kriteria: 'Melakukan Tindakan untuk mengurangi factor resiko',
              },
              { ...who, kriteria: 'Menerapkan program perawatan' },
              {
                ...who,
                kriteria:
                  'Aktivitas hidup sehari hari efektif memenuhi tujuan kesehatan',
              },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi metode penyelesaian masalah yang biasa digunakan',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi kemungkinan perkembangan atau krisis situasional yang akan terjadi serta dampaknya pada individu dan keluarga.',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi memutuskan bagaimana masalah akan diselesaikan',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi memutuskan siapa yang akan dilibatkan dalammenyelesaikan masalah.',
              },
              {
                ...who,
                intervensi:
                  'Gunakan contoh kasus untuk meningkatkan keterampilan menyelesaikan masalah.',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi mengidentifikasi sumber daya yang tersedia',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi menyeseuaikan diri dengan perubahan peran',
              },
              {
                ...who,
                intervensi:
                  'Jadwalkan kunjungan pada setiap tahap perkembangan atau sesuai kebutuhan',
              },
              {
                ...who,
                intervensi:
                  'Jadwalkan tindak lanjut untuk memantau atau memberi dukungan',
              },
              {
                ...who,
                intervensi: 'Berikan nomor kontak yang dapat di hubungi',
              },
              { ...who, intervensi: 'Lihatkan keluarga dan pihak terkait' },
              {
                ...who,
                intervensi: 'Berikan referensi baik cetak ataupun elektronik',
              },
              {
                ...who,
                intervensi: 'Jelaskan perekembangan dan perilaku normal',
              },
              {
                ...who,
                intervensi:
                  'Informasikan harapan yang realisasi terkait perilaku pasien',
              },
              {
                ...who,
                intervensi:
                  'Latih Teknik koping yang di butuhkan untyuk mengatasi perkembangan atau krisis situasional',
              },
              {
                ...who,
                intervensi: 'Rujuk ke Lembaga pelayanan masyarakat,jika perlu',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0049',
          diagnosis: 'Konstipasi',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Kontrol pengeluaran feses meningkat' },
              { ...who, kriteria: 'Keluhan defekasi lama dan sulit menurun' },
              { ...who, kriteria: 'Mengejan saat defekasi menurun' },
              { ...who, kriteria: 'Konsistensi feses membaik' },
              { ...who, kriteria: 'Frekuensi BAB membaik' },
              { ...who, kriteria: 'Peristaltik usus membaik' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              { ...who, intervensi: 'Periksa tanda dan gejala konstipasi' },
              {
                ...who,
                intervensi:
                  'Periksa pergerakan usus, karakteristik feses (konsistensi, bentuk, volume, dan warna)',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi faktor resiko konstipasi (mis.Obat-obatan, tirah baring, dan diet rendah serat)',
              },
              {
                ...who,
                intervensi:
                  'Monitor tanda dan gejala ruptur usus dan atau peritonitis',
              },
              { ...who, intervensi: 'Anjurkan diet tinggi serat' },
              { ...who, intervensi: 'Lakukan masase abdomen, jika perlu' },
              {
                ...who,
                intervensi: 'Lakukan evaluasi feses secara manual, jika perlu',
              },
              { ...who, intervensi: 'Berikan enema atau irigasi, jika perlu' },
              {
                ...who,
                intervensi: 'Jelaskan etiologi masalah dan alasan tindakan',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan peningkatan asupan cairan, jika tidak ada kontraindikasi',
              },
              { ...who, intervensi: 'Latih buang air besar secara teratur' },
              {
                ...who,
                intervensi:
                  'Ajarkan cara mengatasi konstipasi/impaksi kolaborasi',
              },
              {
                ...who,
                intervensi: 'Anjurkan berjalan 15 – 20 menit 1 – 2 kali/hari',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan berjongkok untuk memfasilitasi proses BAB',
              },
              { ...who, intervensi: 'Kolaborasi dengan ahli gizi, jika perlu' },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0050',
          diagnosis: 'Retensi Urin',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Sensasi berkemih meningkat' },
              { ...who, kriteria: 'Desakan berkemih (urgensi) menurun' },
              { ...who, kriteria: 'Distensi kandung kemih menurun' },
              {
                ...who,
                kriteria: 'Berkemih tidak tuntas (hesistancy) menurun',
              },
              { ...who, kriteria: 'Volume residu urin menurun' },
              { ...who, kriteria: 'Urin menetes (dribbling) menurun' },
              { ...who, kriteria: 'Nokturia menurun' },
              { ...who, kriteria: 'Mengompol menurun' },
              { ...who, kriteria: 'Enuresis menurun' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Periksa kondisi pasien (mis: kesadaran, tanda-tanda vital, daerah perineal, distensi kandung kemih, inkontinensia urin, refleks berkemih)',
              },
              {
                ...who,
                intervensi:
                  'Siapkan peralatan, bahan-bahan, dan ruangan Tindakan',
              },
              {
                ...who,
                intervensi:
                  'Siapkan pasien: bebaskan pakaian bawah dan posisikan dorsal rekumben (untuk Wanita) dan supine (untuk laki-laki)',
              },
              {
                ...who,
                intervensi:
                  'Bersihkan daerah perineal atau preposium dengan cairan NaCl atau aquades',
              },
              {
                ...who,
                intervensi:
                  'Lakukan insersi kateter urin dengan menerapkan prinsip aseptic',
              },
              { ...who, intervensi: 'Sambungkan kateter urin dengan urin bag' },
              {
                ...who,
                intervensi: 'Isi balon dengan NaCl 0,9% sesuai anjuran pabrik',
              },
              {
                ...who,
                intervensi:
                  'Fiksasi selang kateter diatas simpisis atau di paha',
              },
              {
                ...who,
                intervensi:
                  'Pastikan urin bag ditempatkan lebih rendah dari kandung kemih',
              },
              { ...who, intervensi: 'Berikan label waktu pemasangan' },
              {
                ...who,
                intervensi:
                  'Jelaskan tujuan dan prosedur pemasangan kateter urin',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan menarik napas saat insersi selang kateter',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0051',
          diagnosis: 'Risiko Inkontinensia Urin Urgensi',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Kemampuan mengontrol urin meningkat' },
              { ...who, kriteria: 'Nokturia menurun' },
              {
                ...who,
                kriteria: 'Residu volume urine setelah berkemih menurun',
              },
              { ...who, kriteria: 'Dribbling menurun' },
              { ...who, kriteria: 'Hesistancy menurun' },
              { ...who, kriteria: 'Enuresis menurun' },
              {
                ...who,
                kriteria: 'Kemampuan menunda pengeluaran urin membaik',
              },
              { ...who, kriteria: 'Frekuensi berkemih membaik' },
              { ...who, kriteria: 'Sensasi berkemih membaik' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Periksa kembali penyebab gangguan berkemih (mis: kognitif, kehilangan ekstremitas/fungsi ekstremitas, kehilangan penglihatan)',
              },
              { ...who, intervensi: 'Monitor pola dan kemampuan berkemih' },
              {
                ...who,
                intervensi:
                  'Identifikasi penyebab inkontinensia urin (mis: disfungsi neurologis, gangguan medulla spinalis, gangguan refleks destrusor, obat-obatan, usia, Riwayat operasi, gangguan fungsi kognitif)',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi perasaan dan persepsi pasien terhadap inkontinensia urin yang dialaminya',
              },
              {
                ...who,
                intervensi:
                  'Monitor keefektifan obat, pembedahan, dan terapi modalitas berkemih',
              },
              { ...who, intervensi: 'Hindari penggunaan kateter indwelling' },
              { ...who, intervensi: 'Siapkan area toilet yang aman' },
              {
                ...who,
                intervensi:
                  'Sediakan peralatan yang dibutuhkan dekat dan mudah dijangkau (mis: kursi komode, pispot, urinal)',
              },
              {
                ...who,
                intervensi:
                  'Bersihkan daerah genital dan kulit sekitar secara rutin',
              },
              {
                ...who,
                intervensi:
                  'Berikan pujian atas keberhasilan mencegah inkontinensia',
              },
              { ...who, intervensi: 'Buat jadwal konsumsi obat-obat diuretik' },
              {
                ...who,
                intervensi:
                  'Ambil sampel urin untuk pemeriksaan urin lengkap atau kultur',
              },
              {
                ...who,
                intervensi:
                  'Jelaskan arah-arah menuju kamar mandi/toilet pada pasien dengan gangguan penglihatan',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan intake cairan adekuat untuk mendukung output urin',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan aliminasi normal dengan beraktivitas dan olahraga sesuai kemampuan',
              },
              {
                ...who,
                intervensi:
                  'Jelaskan definisi, jenis inkontinensia, penyebab inkontinensia urin',
              },
              {
                ...who,
                intervensi: 'Jelaskan program penanganan inkontinensia urin',
              },
              {
                ...who,
                intervensi:
                  'Jelaskan jenis pakaian dan lingkungan yang mendukung proses berkemih',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan membatasi konsumsi cairan 2-3 jam menjelang tidur',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan memantau cairan keluar dan masuk serta pola eliminasi urin',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan minum minimal 1500 cc/hari, jika tidak ada kontraindikasi',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan menghindari kopi, minuman bersoda, teh dan cokelat',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan konsumsi buah dan sayur untuk menghindari konstipasi',
              },
              { ...who, intervensi: 'Rujuk ke ahli inkontinensia, jika perlu' },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0052',
          diagnosis: 'Risiko Konstipasi',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Kontrol pengeluaran feses meningkat' },
              { ...who, kriteria: 'Keluhan defekasi lama dan sulit menurun' },
              { ...who, kriteria: 'Mengejan saat defekasi menurun' },
              { ...who, kriteria: 'Konsistensi feses membaik' },
              { ...who, kriteria: 'Frekuensi BAB membaik' },
              { ...who, kriteria: 'Peristaltik usus membaik' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi faktor risiko konstipasi (mis: asupan serat tidak adekuat, asupan cairan tidak adekuat, aganglionik, kelemahan otot abdomen, aktivitas fisik kurang).',
              },
              {
                ...who,
                intervensi:
                  'Monitor tanda dan gejala konstipasi (mis: defekasi kurang 2 kali seminggu, defekasi lama/sulit, feses keras, peristaltik menurun)',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi status kognitif untuk mengkomunikasikan kebutuhan',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi penggunaan obat-obatan yang menyebabkan konstipasi',
              },
              {
                ...who,
                intervensi: 'Batasi minuman yang mengandung kafein dan alkohol',
              },
              { ...who, intervensi: 'Jadwalkan rutinitas BAK' },
              { ...who, intervensi: 'Lakukan masase abdomen' },
              { ...who, intervensi: 'Berikan terapi akupresur' },
              {
                ...who,
                intervensi: 'Jelaskan penyebab dan faktor risiko konstipasi',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan minum air putih sesuai kebutuhan (1500 – 2000 ml/hari)',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan mengkonsumsi makanan berserat (25 – 30 gram/hari)',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan meningkatkan aktivitas fisik sesuai kebutuhan',
              },
              {
                ...who,
                intervensi: 'Anjurkan berjalan 15 – 20 menit 1 – 2 kali/hari',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan berjongkok untuk memfasilitasi proses BAB',
              },
              { ...who, intervensi: 'Kolaborasi dengan ahli gizi, jika perlu' },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0053',
          diagnosis: 'Disorganisasi Perilaku Bayi',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Gerakan pada ekstremitas meningkat' },
              { ...who, kriteria: 'Kemampuan jari-jari menggenggam meningkat' },
              { ...who, kriteria: 'Gerakan terkoordinasi meningkat' },
              {
                ...who,
                kriteria: 'Respon normal terhadap stimulus sensorik meningkat',
              },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Monitor tanda-tanda vital bayi (terutama suhu 36°C – 37°C)',
              },
              {
                ...who,
                intervensi: 'Mandikan bayi dengan suhu ruangan 21 – 24°C',
              },
              {
                ...who,
                intervensi:
                  'Mandikan bayi dalam waktu 5 – 10 menit dan 2 kali dalam sehari',
              },
              {
                ...who,
                intervensi:
                  'Rawat tali pusat secara terbuka (tali pusat tidak dibungkus apapun)',
              },
              {
                ...who,
                intervensi:
                  'Bersihkan pangkal tali pusat dengan lidi kapas yang telah diberi air matang',
              },
              {
                ...who,
                intervensi:
                  'Kenakan popok bayi di bawah umbilicus jika tali pusat belum terlepas',
              },
              { ...who, intervensi: 'Lakukan pemijatan bayi' },
              { ...who, intervensi: 'Ganti popok bayi jika basah' },
              { ...who, intervensi: 'Kenakan pakaian bayi dari bahan katun' },
              {
                ...who,
                intervensi: 'Anjurkan ibu menyusui sesuai kebutuhan bayi',
              },
              { ...who, intervensi: 'Ajarkan ibu cara merawat bayi di rumah' },
              {
                ...who,
                intervensi:
                  'Ajarkan cara pemberian makanan pendamping ASI pada bayi >6 bulan',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0054',
          diagnosis: 'Gangguan Mobilitas Fisik',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Pergerakan ekstremitas meningkat.' },
              { ...who, kriteria: 'Kekuatan otot cukup meningkat.' },
              { ...who, kriteria: 'Rentang gerak (ROM) meningkat.' },
              { ...who, kriteria: 'Nyeri menurun .' },
              { ...who, kriteria: 'Kekakuan sendi cukup menurun.' },
              { ...who, kriteria: 'Kelemahan fisik cukup menurun.' },
              { ...who, kriteria: 'Kecemasan menurun.' },
              { ...who, kriteria: 'Gerakan terbatas cukup menurun.' },
              {
                ...who,
                kriteria: 'Gerakan tidak terkoordinasi cukup menurun.',
              },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi adanya nyeri atau keluhan fisik lainnya.',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi toleransi fisik melakukan pergerakan.',
              },
              {
                ...who,
                intervensi:
                  'Monitor frekuensi jantung dan tekanan darah sebelum memulai mobilisasi.',
              },
              { ...who, intervensi: 'Fasilitasi melakukan pergerakan.' },
              {
                ...who,
                intervensi: 'Jelaskan tujuan dan prosedur mobilisasi.',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi aktivitas mobilisasi dengan alat bantu (mis: Pagar Tempat tidur)',
              },
              {
                ...who,
                intervensi: 'Fasilitasi melakukan pergerakan, jika perlu',
              },
              {
                ...who,
                intervensi:
                  'Libatkan keluarga untuk membantu pasien dalam meningkatkan pergerakan',
              },
              { ...who, intervensi: 'Jelaskan tujuan dan prosedur mobilisasi' },
              { ...who, intervensi: 'Anjurkan melakukan mobilisasi dini' },
              {
                ...who,
                intervensi:
                  'Ajarkan mobilisasi sederhana yang harus dilakukan (mis: duduk di tempat tidur, duduk di sisi tempat tidur, pindah dari tempat tidur ke kursi)',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0055',
          diagnosis: 'Gangguan Pola Tidur',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Keluhan sulit tidur menurun' },
              { ...who, kriteria: 'Keluhan sering terjaga menurun' },
              { ...who, kriteria: 'Keluhan tidak puas tidur menurun' },
              { ...who, kriteria: 'Keluhan pola tidur berubah menurun' },
              { ...who, kriteria: 'Keluhan istirahat tidak cukup menurun' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              { ...who, intervensi: 'Identifikasi pola aktivitas dan tidur' },
              {
                ...who,
                intervensi:
                  'Identifikasi faktor pengganggu tidur (fisik dan/atau psikologis)',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi makanan dan minuman yang mengganggu tidur (mis: kopi, teh, alcohol, makan mendekati waktu tidur, minum banyak air sebelum tidur)',
              },
              { ...who, intervensi: 'Identifikasi obat tidur yang dikonsumsi' },
              {
                ...who,
                intervensi:
                  'Modifikasi lingkungan (mis: pencahayaan, kebisingan, suhu, matras, dan tempat tidur)',
              },
              { ...who, intervensi: 'Batasi waktu tidur siang, jika perlu' },
              {
                ...who,
                intervensi: 'Fasilitasi menghilangkan stress sebelum tidur',
              },
              { ...who, intervensi: 'Tetapkan jadwal tidur rutin' },
              {
                ...who,
                intervensi:
                  'Lakukan prosedur untuk meningkatkan kenyamanan (mis: pijat pengaturan posisi, terapi akupresur)',
              },
              {
                ...who,
                intervensi:
                  'Sesuaikan jadwal pemberian obat dan/atau Tindakan untuk menunjang siklus tidur-terjaga',
              },
              {
                ...who,
                intervensi: 'Jelaskan pentingnya tidur cukup selama sakit',
              },
              { ...who, intervensi: 'Anjurkan menepati kebiasaan waktu tidur' },
              {
                ...who,
                intervensi:
                  'Anjurkan menghindari makanan/minuman yang mengganggu tidur',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan penggunaan obat tidur yang tidak mengandung supresor terhadap tidur REM',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan faktor-faktor yang berkontribusi terhadap gangguan pola tidur (mis: psikologis, gaya hidup, sering berubah shift bekerja).',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan relaksasi otot autogenic atau cara nonfarmakologi lainnya.',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0056',
          diagnosis: 'Intoleransi Aktivitas',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Keluhan Lelah menurun' },
              { ...who, kriteria: 'Dispnea saat aktivitas menurun' },
              { ...who, kriteria: 'Dispnea setelah aktivitas menurun' },
              { ...who, kriteria: 'Frekuensi nadi membaik' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi gangguan fungsi tubuh yang mengakibatkan kelelahan',
              },
              { ...who, intervensi: 'Monitor kelelahan fisik dan emosional' },
              { ...who, intervensi: 'Monitor pola dan jam tidur' },
              {
                ...who,
                intervensi:
                  'Monitor lokasi dan ketidaknyamanan selama melakukan aktivitas',
              },
              {
                ...who,
                intervensi:
                  'Sediakan lingkungan nyaman dan rendah stimulus (mis: cahaya, suara, kunjungan)',
              },
              {
                ...who,
                intervensi:
                  'Lakukan latihan rentang gerak pasif dan/atau aktif',
              },
              {
                ...who,
                intervensi: 'Berikan aktivitas distraksi yang menenangkan',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi duduk di sisi tempat tidur, jika tidak dapat berpindah atau berjalan',
              },
              { ...who, intervensi: 'Anjurkan tirah baring' },
              {
                ...who,
                intervensi: 'Anjurkan melakukan aktivitas secara bertahap',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan menghubungi perawat jika tanda dan gejala kelelahan Tidak berkurang',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan strategi koping untuk mengurangi kelelahan',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0057',
          diagnosis: 'Keletihan',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Kriteria Evaluasi' },
              { ...who, kriteria: 'Verbalisasi kepulihan energi meningkat' },
              { ...who, kriteria: 'Tenaga meningkat' },
              {
                ...who,
                kriteria: 'Kemampuan melakukan aktivitas rutin meningkat',
              },
              { ...who, kriteria: 'Verbalisasi lelah menurun' },
              { ...who, kriteria: 'Lesu menurun' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi kesiapan dan kemampuan menerima informasi',
              },
              {
                ...who,
                intervensi:
                  'Sediakan materi dan media pengatiran aktivitas dan istirahat',
              },
              {
                ...who,
                intervensi:
                  'Jadwalkan pemberian Pendidikan Kesehatan sesuai kesepakatan',
              },
              {
                ...who,
                intervensi:
                  'Berikan kesempatan kepada pasien dan keluarga untuk bertanya',
              },
              {
                ...who,
                intervensi:
                  'Jelaskan pentingnya melakukan aktivitas fisik/olahraga secara rutin',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan terlibat dalam aktivitas kelompok, aktivitas bermain atau aktivitas lainnya',
              },
              {
                ...who,
                intervensi: 'Anjurkan Menyusun jadwal aktivitas dan istirahat',
              },
              {
                ...who,
                intervensi:
                  'Akarkan cara mengidentifikasi kebutuhan istirahat (mis: kelelahan, sesak napas saat aktivitas)',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan cara mengidentifikasi target dan jenis aktivitas sesuai kemampuan',
              },
              {
                ...who,
                intervensi:
                  'Kolaborasi dengan ahli gizi tentang cara meningkatkan asupan makanan',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0058',
          diagnosis: 'Kesiapan Peningkatan Tidur',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Kriteria Evaluasi' },
              { ...who, kriteria: 'Keluhan sulit tidur menurun' },
              { ...who, kriteria: 'Keluhan sering terjaga menurun' },
              { ...who, kriteria: 'Keluhan tidak puas tidur menurun' },
              { ...who, kriteria: 'Keluhan pola tidur berubah menurun' },
              { ...who, kriteria: 'Keluhan istirahat tidak cukup menurun' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              { ...who, intervensi: 'Identifikasi pola aktivitas dan tidur' },
              {
                ...who,
                intervensi:
                  'Identifikasi faktor pengganggu tidur (fisik dan/atau psikologis)',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi makanan dan minuman yang menganggu tidur (mis: kopi . teh, alcohol, makan mendekati waktu tidur, minum banyak air sebelum tidur)',
              },
              {
                ...who,
                intervensi: 'Identifikasi obat tidur yang di konsumsi',
              },
              {
                ...who,
                intervensi:
                  'Modifikasi lingkungan (mis: pencahayaan , kebisingan , suhu, matras, dan tempat tidur)',
              },
              { ...who, intervensi: 'Batasi waktu tidur siang' },
              {
                ...who,
                intervensi: 'Fasilitasi menghilangkan stress sebelum tidur',
              },
              { ...who, intervensi: 'Tetapkan jadwal tidur rutin' },
              {
                ...who,
                intervensi:
                  'Lakukan prosedur untuk meningkatkan kenyamanan (mis: pijat, pengaturan posisi, terapi akupresur)',
              },
              {
                ...who,
                intervensi:
                  'Sesuaikan jadwak pemberian obat dan/atau Tindakan untuk menunjang siklus menunjang siklus tidur terjaga',
              },
              {
                ...who,
                intervensi: 'Jelaskan pentingnya tidur cukup selama sakit',
              },
              { ...who, intervensi: 'Anjurkan menepati kebiasaan waktu tidur' },
              {
                ...who,
                intervensi:
                  'Anjurkan menghindari makanan/minuman yang menganggu tidur',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan penggunaan obat tidur yang tidak mengandung supresor terhadap tidur REM',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan faktor-faktor yang berkontribusi terhadap gangguan pola tidur (mis : psikologis, gaya hidup, sering berubah shift bekerja)',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan relaksasi otot autogeric atau cara nonfarmakolohi lainnya',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0059',
          diagnosis: 'Risiko Disorganisasi Perilaku Bayi',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Gerakan pada ekstremitas meningkat' },
              { ...who, kriteria: 'Kemampuan jari-jari menggenggam meningkat' },
              { ...who, kriteria: 'Gerakan terkoordinasi meningkat' },
              {
                ...who,
                kriteria: 'Respon normal terhadap stimulus sensorik meningkat',
              },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Monitor tanda-tanda vital bayi (terutama suhu 36°C 37°C',
              },
              {
                ...who,
                intervensi: 'Mandikan bayi dengan suhu ruangan 21 – 24°C',
              },
              {
                ...who,
                intervensi:
                  'Mandikan bayi dalam waktu 5 – 10 menit dan 2 kali dalam sehari',
              },
              {
                ...who,
                intervensi:
                  'Rawat tali pusat secara terbuka (tali pusat tidak dibungkus apapun)',
              },
              {
                ...who,
                intervensi:
                  'Bersihkan pangkal tali pusat dengan lidi kapas yang telah diberi air matang',
              },
              {
                ...who,
                intervensi:
                  'Kenakan popok bayi di bawah umbilicus jika tali pusat belum terlepas',
              },
              { ...who, intervensi: 'Lakukan pemijatan bayi' },
              { ...who, intervensi: 'Ganti popok bayi jika basah' },
              { ...who, intervensi: 'Kenakan pakaian bayi dari bahan katun' },
              {
                ...who,
                intervensi: 'Anjurkan ibu menyusui sesuai kebutuhan bayi',
              },
              { ...who, intervensi: 'Ajarkan ibu cara merawat bayi di rumah' },
              {
                ...who,
                intervensi:
                  'Ajarkan cara pemberian makanan pendamping ASI pada bayi> 6 bulan',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0060',
          diagnosis: 'Risiko Intoleransi Aktivitas',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Keluhan Lelah menurun' },
              { ...who, kriteria: 'Dispnea saat aktivitas menurun' },
              { ...who, kriteria: 'Dispnea setelah aktivitas menurun' },
              { ...who, kriteria: 'Frekuensi nadi membaik' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi gangguan fungsi tubuh yang mengakibatkan kelelahan',
              },
              { ...who, intervensi: 'Monitor kelelahan fisik dan emosional' },
              { ...who, intervensi: 'Monitor pola dan jam tidur' },
              {
                ...who,
                intervensi:
                  'Monitor lokasi dan ketidaknyamanan selama melakukan aktivitas',
              },
              {
                ...who,
                intervensi:
                  'Sediakan lingkungan nyaman dan rendah stimulus (mis: cahaya, suara, kunjungan)',
              },
              {
                ...who,
                intervensi:
                  'Lakukan latihan rentang gerak pasif dan/atau aktif',
              },
              {
                ...who,
                intervensi: 'Berikan aktivitas distraksi yang menenangkan',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi duduk di sisi tempat tidur, jika tidak dapat berpindah atau berjalan',
              },
              { ...who, intervensi: 'Anjurkan tirah baring' },
              {
                ...who,
                intervensi: 'Anjurkan melakukan aktivitas secara bertahap',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan menghubungi perawat jika tanda dan gejala kelelahan tidak berkurang',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan strategi koping untuk mengurangi kelelahan',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0061',
          diagnosis: 'Disrefleksia Otonom',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Tingkat kesadaran membaik' },
              { ...who, kriteria: 'Orientasi kognitif membaik' },
              { ...who, kriteria: 'Fungsi sensorik membaik' },
              { ...who, kriteria: 'Frekuensi kejang menurun' },
              { ...who, kriteria: 'Tanda - tanda vital dalam batas normal' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi rangsangan yang dapat memicu disrefleksia (distensi kandung kemih, impaksi feses)',
              },
              {
                ...who,
                intervensi:
                  'Monitor tanda dan gejala disrefleksia otonom (hipertensi, bradikardi, takikardi)',
              },
              {
                ...who,
                intervensi: 'Monitor kepatenan kateter urin, jika terpasang',
              },
              { ...who, intervensi: 'Monitor tanda - tanda vital' },
              {
                ...who,
                intervensi:
                  'Minimalkan rangsangan yang dapat memicu disrefleksia',
              },
              { ...who, intervensi: 'Berikan posisi fowler jika diperlukan' },
              { ...who, intervensi: 'Pasang kateter urin jika diperlukan' },
              {
                ...who,
                intervensi: 'Jelaskan penyebab dan gejala disrefleksia',
              },
              {
                ...who,
                intervensi: 'Jelaskan penanganan dan pencegahan disrefleksia',
              },
              {
                ...who,
                intervensi:
                  'kolaborasi pemberian antihipertensi dan cairan intravena sesuai indikasi',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0062',
          diagnosis: 'Gangguan Memori',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Berorientasi secara kognitif' },
              { ...who, kriteria: 'Tidak terjadi hambatan perfusi serebral' },
              { ...who, kriteria: 'Menerima proses informasi dengan tepat' },
              { ...who, kriteria: 'Status neurologis dalam rentang normal' },
              { ...who, kriteria: 'Status kognitif pasien meningkat' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              { ...who, intervensi: 'Pantau tanda - tanda vital' },
              {
                ...who,
                intervensi: 'Beri dukungan emosional dan motivasi pasien',
              },
              {
                ...who,
                intervensi:
                  'Manajemen lingkungan, ciptakan lingkungan aman di sekitar pasien untuk mencegah terjadinya bahaya dan cedera',
              },
              {
                ...who,
                intervensi: 'Hitung masukan dan haluaran cairan tubuh pasien',
              },
              {
                ...who,
                intervensi:
                  'Kolaborasi dengan dokter terkait perlu tidaknya penambahan cairan elektrolit pasien',
              },
              { ...who, intervensi: 'Kolaborasi pemberian oksigen' },
              {
                ...who,
                intervensi:
                  'Kolaborasi perlunya pemeriksaan elektroensefalografi',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0063',
          diagnosis: 'Gangguan Menelan',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Reflek menelan membaik' },
              { ...who, kriteria: 'Frekuensi tersedaj menurun' },
              { ...who, kriteria: 'Kemampuan mengunyah membaik' },
              { ...who, kriteria: 'Refluks lambung menurun dan tidak ada' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Monitor tingkat kesadaran, batuk, muntah dan kemampuan menelan',
              },
              { ...who, intervensi: 'Monitor status pernapasan' },
              { ...who, intervensi: 'Monitor bunyi napas' },
              {
                ...who,
                intervensi: 'Periksa residu gaster sebelum memberi asupan oral',
              },
              { ...who, intervensi: 'Periksa kepatenan selang nasogastrik' },
              {
                ...who,
                intervensi: 'Posisikan semi fowler sebelum memberi asupan oral',
              },
              { ...who, intervensi: 'Pertahankan kepatenan jalan napas' },
              {
                ...who,
                intervensi:
                  'Lakukan penghisapan jalan napas, jika produksi sekret meningkat',
              },
              {
                ...who,
                intervensi: 'Berikan makanan dengan ukuran kecil dan lunak',
              },
              { ...who, intervensi: 'Berikan obat dalam bentuk cair' },
              { ...who, intervensi: 'Anjurkan makan secara perlahan' },
              { ...who, intervensi: 'Ajarkan strategi mencegah aspirasi' },
              {
                ...who,
                intervensi: 'Ajarkan teknik mengunyah atau menelan jika perlu',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0064',
          diagnosis: 'Konfusi Akut',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Fungsi kognitif pasien meningkat' },
              { ...who, kriteria: 'Tingkat kesadaran pasien meningkat' },
              { ...who, kriteria: 'Aktivitas psikomotorik pasien meningkat' },
              {
                ...who,
                kriteria:
                  'Pasien memiliki motivasi untuk memulai dan menyelesaikan prilaku secara terarah',
              },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              { ...who, intervensi: 'Identifikasi faktor risiko konfusi akut' },
              { ...who, intervensi: 'Identifikasi tipe konfusi akut' },
              {
                ...who,
                intervensi: 'Monitor status neurologis dan tingkat delirium',
              },
              { ...who, intervensi: 'Berikan pencahayaan yang baik' },
              {
                ...who,
                intervensi:
                  'Hindari stimulus sensorik yang berlebihan (televisi, radio)',
              },
              {
                ...who,
                intervensi: 'Lakukan pengekangan fisik, sesuai indikasi',
              },
              {
                ...who,
                intervensi:
                  'Beri informasi tentang apa yang terjadi dan apa yang dapat terjadi selanjutnya',
              },
              {
                ...who,
                intervensi:
                  'Sediakan lingkungan fisik dan rutinitas harian yang konsisten',
              },
              { ...who, intervensi: 'Anjurkan kunjungan keluarga' },
              {
                ...who,
                intervensi:
                  'Anjurkan penggunaan alat bantu sensorik bila di perlukan (kacamata, alat bantu dengar)',
              },
              {
                ...who,
                intervensi: 'Kolaborasi pemberian obat ansietas atau agitasi',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0065',
          diagnosis: 'Konfusi Kronis',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Fungsi kognitif meningkat' },
              { ...who, kriteria: 'Tingkat kesadaran meningkat' },
              { ...who, kriteria: 'Aktivitas psikomotorik meningkat' },
              {
                ...who,
                kriteria:
                  'Motivasi memulai/menyelesaikan perilaku terarah meningkat',
              },
              { ...who, kriteria: 'Memori jangka pendek meningkat' },
              { ...who, kriteria: 'Memori Jangka Panjang meningkat' },
              { ...who, kriteria: 'Interpretasi membaik' },
              { ...who, kriteria: 'Fungsi sosial membaik' },
              { ...who, kriteria: 'Respon terhadap stimulus membaik' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              { ...who, intervensi: 'Identifikasi faktor risiko delirium' },
              { ...who, intervensi: 'Identifikasi tipe delirium' },
              {
                ...who,
                intervensi: 'Monitor status neurologis dan tingkat delirium',
              },
              { ...who, intervensi: 'Anjurkan kunjungan keluarga, jika perlu' },
              {
                ...who,
                intervensi:
                  'Kolaborasi pemberian obat ansietas atau agitasi,jika perlu',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi Riwayat fisik,sosial,psikologis dan kebiasaan',
              },
              { ...who, intervensi: 'Identifikasi pola aktivitas' },
              { ...who, intervensi: 'Anjurkan perbanyak istirahat' },
              {
                ...who,
                intervensi: 'Anjurkan keluarga cara perawatan demensia',
              },
              { ...who, intervensi: 'Identifikasi tahap gangguan kognitif' },
              { ...who, intervensi: 'Monitor dan reflesikan gestur' },
              {
                ...who,
                intervensi: 'Anjurkan mengekspresikan emosi sesuai pengalaman',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan melaukan kegitan bernyanyi dan bermain music yang familiar',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan mengenan peristiwa sebelumnya unutk mengidentifikasi metode koping yang pernah digunakan sebelumnya',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0066',
          diagnosis: 'Penurunan Kapasitas Adaptif Intrakranial',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Tingkat kesadaran meningkat' },
              { ...who, kriteria: 'Sakit kepala menurun' },
              { ...who, kriteria: 'Bradikardia menurun' },
              { ...who, kriteria: 'Tekanan darah membaik' },
              { ...who, kriteria: 'Tekanan nadi membaik' },
              { ...who, kriteria: 'Pola napas membaik' },
              { ...who, kriteria: 'Respon pupil membaik' },
              { ...who, kriteria: 'Refleks neurologis membaik' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              { ...who, intervensi: 'Identifikasi penyebab peningkatan TIK' },
              { ...who, intervensi: 'Monitor tanda/gejala peningkatan TIK' },
              { ...who, intervensi: 'Monitor MAP (mean arterial pressure)' },
              { ...who, intervensi: 'Monitor CVP' },
              { ...who, intervensi: 'Monitor PAWP,jika perlu' },
              { ...who, intervensi: 'Moniitor PAP, jika perlu' },
              { ...who, intervensi: 'Monitor ICP (intra cranial pressure)' },
              { ...who, intervensi: 'Monitor status pernapasan' },
              { ...who, intervensi: 'Monitor intake dan output cairan' },
              { ...who, intervensi: 'Monitor cairan serebro-spinalis' },
              {
                ...who,
                intervensi:
                  'Kolaborasi pemberian sedasi dan antikonvulsan,jika perlu',
              },
              {
                ...who,
                intervensi: 'Kolaborasi pemberian diuretic osmosis,jika perlu',
              },
              {
                ...who,
                intervensi: 'Kolaborasi pemberian pelunak tinja,jika perlu',
              },
              { ...who, intervensi: 'Identifikasi penyebab peningkatan TIK' },
              { ...who, intervensi: 'Monitor peningkatan TS' },
              { ...who, intervensi: 'Monitor pelebaran tekanan nadi' },
              { ...who, intervensi: 'Monitor penurunan frekuensi jantung' },
              { ...who, intervensi: 'Monitor ireguleritas irama napas' },
              { ...who, intervensi: 'Monitor penurunan tingkat kesadaran' },
              {
                ...who,
                intervensi:
                  'Monitor perlambatan atau ketidakseimbangan respon pupil',
              },
              {
                ...who,
                intervensi:
                  'Monitor kadar CO2 dan pertahankan dalam rentang yang diindikasikan',
              },
              { ...who, intervensi: 'Monitor tekanan perfusi serebral' },
              {
                ...who,
                intervensi:
                  'Monitor jumla,keceptan dan karakteristik drainase cairan serebrospinal',
              },
              {
                ...who,
                intervensi: 'Monitor efek stimulus lingkungan terhadap TIK',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0067',
          diagnosis: 'Risiko Disfungsi Neurovaskuler Perifer',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Sirkulasi arteri meningkat' },
              { ...who, kriteria: 'Sirkulasi vena meningkat' },
              { ...who, kriteria: 'Nyeri menurun' },
              { ...who, kriteria: 'Nadi membaik' },
              { ...who, kriteria: 'Suhu tubuh membaik' },
              { ...who, kriteria: 'Warna kulit membaik' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              { ...who, intervensi: 'Manajemen sensai perifer' },
              { ...who, intervensi: 'Identifikasi penyebab perubahan sensasi' },
              {
                ...who,
                intervensi:
                  'Identifikasi penggunaan alat pengikat,protesis,sepatu dan pakaian',
              },
              {
                ...who,
                intervensi: 'Periksa perbedaan sensasi tajam atau tumpul',
              },
              {
                ...who,
                intervensi: 'Periksa perbedaan sensasi panas atau dingin',
              },
              {
                ...who,
                intervensi:
                  'Periksa kemampuan mengidentifikasi lokasi dan tekstur benda',
              },
              { ...who, intervensi: 'Monitor terjadinya parestesia' },
              { ...who, intervensi: 'Monitor perubahan kulit' },
              {
                ...who,
                intervensi:
                  'Monitor adanya trombopleubitis dan tromboemboli vena',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan memakai sepatu lembut dan bertumit rendah',
              },
              { ...who, intervensi: 'Pengaturan posisi' },
              {
                ...who,
                intervensi:
                  'Monitor status oksigenasi sebelum dan sesudah mengubah posisi',
              },
              { ...who, intervensi: 'Monitor alat traksi agar selalu tepat' },
              {
                ...who,
                intervensi:
                  'Ajarkan ara menggunakan postur yang baik dan mekanika tubuh yang baik selama melakukan perubahan posisi',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0068',
          diagnosis: 'Risiko Konfusi Akut',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Fungsi kognitif meningkat' },
              { ...who, kriteria: 'Tingkat kesadaran meningkat' },
              { ...who, kriteria: 'Aktivitas psikomotorik meningkat' },
              {
                ...who,
                kriteria:
                  'Motivasi memulai/menyelesaikan perilaku terarah meningkat',
              },
              { ...who, kriteria: 'Memori jangka pendek meningkat' },
              { ...who, kriteria: 'Memori jangka Panjang meningkat' },
              { ...who, kriteria: 'Interpretasi membaik' },
              { ...who, kriteria: 'Fungsi sosial membaik' },
              { ...who, kriteria: 'Respon terhadap stimulus membaik' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi lokasi,karakteristik durasi,frekuensi,kualitas,intensitas nyeri',
              },
              { ...who, intervensi: 'Identifikasi skala nyeri' },
              { ...who, intervensi: 'Identifikasi respon nyeri nonverbal' },
              {
                ...who,
                intervensi:
                  'Identifikasi factor yang memperberat dan memperingan nyeri',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi pengetahuan dan keyakinaan tentang nyeri',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi pengaruh budaya terhadap respon nyeri',
              },
              {
                ...who,
                intervensi: 'Identifikasi pengaruh nyeri pada kualitas hidup',
              },
              {
                ...who,
                intervensi:
                  'Monitor keberhasilan terapi komplementer yang sudah diberikan',
              },
              {
                ...who,
                intervensi: 'Monitor efek samping penggunaan analgetik',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan Teknik farmakologis untuk mengurangi nyeri',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0069',
          diagnosis: 'Disfungsi Seksual',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Keluhan Lelah menurun' },
              { ...who, kriteria: 'Dispnea saat aktivitas menurun' },
              { ...who, kriteria: 'Dispnea setelah aktivitas menurun' },
              { ...who, kriteria: 'Frekuensi nadi membaik' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi gangguan fungsi tubuh yang mengakibatkan kelelahan',
              },
              { ...who, intervensi: 'Monitor kelelahan fisik dan emosional' },
              { ...who, intervensi: 'Monitor pola dan jam tidur' },
              {
                ...who,
                intervensi:
                  'Monitor lokasi dan ketidaknyamanan selama melakukan aktivitas',
              },
              {
                ...who,
                intervensi:
                  'Sediakan lingkungan nyaman dan rendah stimulus (mis: cahaya, suara, kunjungan)',
              },
              {
                ...who,
                intervensi:
                  'Lakukan latihan rentang gerak pasif dan/atau aktif',
              },
              {
                ...who,
                intervensi: 'Berikan aktivitas distraksi yang menenangkan',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi duduk di sisi tempat tidur, jika tidak dapat berpindah atau berjalan',
              },
              { ...who, intervensi: 'Anjurkan tirah baring' },
              {
                ...who,
                intervensi: 'Anjurkan melakukan aktivitas secara bertahap',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan menghubungi perawat jika tanda dan gejala kelelahan Tidak berkurang',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan strategi koping untuk mengurangi kelelahan',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0070',
          diagnosis: 'Kesiapan Persalinan',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Keluhan Lelah menurun' },
              { ...who, kriteria: 'Dispnea saat aktivitas menurun' },
              { ...who, kriteria: 'Dispnea setelah aktivitas menurun' },
              { ...who, kriteria: 'Frekuensi nadi membaik' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi gangguan fungsi tubuh yang mengakibatkan kelelahan',
              },
              { ...who, intervensi: 'Monitor kelelahan fisik dan emosional' },
              { ...who, intervensi: 'Monitor pola dan jam tidur' },
              {
                ...who,
                intervensi:
                  'Monitor lokasi dan ketidaknyamanan selama melakukan aktivitas',
              },
              {
                ...who,
                intervensi:
                  'Sediakan lingkungan nyaman dan rendah stimulus (mis: cahaya, suara, kunjungan)',
              },
              {
                ...who,
                intervensi:
                  'Lakukan latihan rentang gerak pasif dan/atau aktif',
              },
              {
                ...who,
                intervensi: 'Berikan aktivitas distraksi yang menenangkan',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi duduk di sisi tempat tidur, jika tidak dapat berpindah atau berjalan',
              },
              { ...who, intervensi: 'Anjurkan tirah baring' },
              {
                ...who,
                intervensi: 'Anjurkan melakukan aktivitas secara bertahap',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan menghubungi perawat jika tanda dan gejala kelelahan Tidak berkurang',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan strategi koping untuk mengurangi kelelahan',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0071',
          diagnosis: 'Pola Seksual Tidak Efektif',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Keluhan Lelah menurun' },
              { ...who, kriteria: 'Dispnea saat aktivitas menurun' },
              { ...who, kriteria: 'Dispnea setelah aktivitas menurun' },
              { ...who, kriteria: 'Frekuensi nadi membaik' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi gangguan fungsi tubuh yang mengakibatkan kelelahan',
              },
              { ...who, intervensi: 'Monitor kelelahan fisik dan emosional' },
              { ...who, intervensi: 'Monitor pola dan jam tidur' },
              {
                ...who,
                intervensi:
                  'Monitor lokasi dan ketidaknyamanan selama melakukan aktivitas',
              },
              {
                ...who,
                intervensi:
                  'Sediakan lingkungan nyaman dan rendah stimulus (mis: cahaya, suara, kunjungan)',
              },
              {
                ...who,
                intervensi:
                  'Lakukan latihan rentang gerak pasif dan/atau aktif',
              },
              {
                ...who,
                intervensi: 'Berikan aktivitas distraksi yang menenangkan',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi duduk di sisi tempat tidur, jika tidak dapat berpindah Atau berjalan',
              },
              { ...who, intervensi: 'Anjurkan tirah baring' },
              {
                ...who,
                intervensi: 'Anjurkan melakukan aktivitas secara bertahap',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan menghubungi perawat jika tanda dan gejala Kelelahan Tidak berkurang',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan strategi koping untuk mengurangi kelelahan',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0072',
          diagnosis: 'Risiko Disfungsi Seksual',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Keluhan Lelah menurun' },
              { ...who, kriteria: 'Dispnea saat aktivitas menurun' },
              { ...who, kriteria: 'Dispnea setelah aktivitas menurun' },
              { ...who, kriteria: 'Frekuensi nadi membaik' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi gangguan fungsi tubuh yang mengakibatkan kelelahan',
              },
              { ...who, intervensi: 'Monitor kelelahan fisik dan emosional' },
              { ...who, intervensi: 'Monitor pola dan jam tidur' },
              {
                ...who,
                intervensi:
                  'Monitor lokasi dan ketidaknyamanan selama melakukan aktivitas',
              },
              {
                ...who,
                intervensi:
                  'Sediakan lingkungan nyaman dan rendah stimulus (mis: cahaya, suara, kunjungan)',
              },
              {
                ...who,
                intervensi:
                  'Lakukan latihan rentang gerak pasif dan/atau aktif',
              },
              {
                ...who,
                intervensi: 'Berikan aktivitas distraksi yang menenangkan',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi duduk di sisi tempat tidur, jika tidak dapat berpindah Atau berjalan',
              },
              { ...who, intervensi: 'Anjurkan tirah baring' },
              {
                ...who,
                intervensi: 'Anjurkan melakukan aktivitas secara bertahap',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan menghubungi perawat jika tanda dan gejala kelelahan Tidak berkurang',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan strategi koping untuk mengurangi kelelahan',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0073',
          diagnosis: 'Risiko Kehamilan Tidak Dikehendaki',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Penerimaan kehamilan meningkat' },
              {
                ...who,
                kriteria: 'Verbalisasi perasaan yang dialami meningkat',
              },
              {
                ...who,
                kriteria: 'Perilaku mencari perwatan kehamilan meningkat',
              },
              { ...who, kriteria: 'Menyusun perencanaan kehamilan meningkat' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi kesiapan dan kemampuan menerima informasi',
              },
              {
                ...who,
                intervensi: 'Identifikasi pengetahuan tentang alat kontrasepsi',
              },
              {
                ...who,
                intervensi: 'Sediakan materi dan media pendidikan kesehatan',
              },
              {
                ...who,
                intervensi: 'Jadwalkan pendidikan kesehatan sesuai kesepakatan',
              },
              { ...who, intervensi: 'Berikan kesempatan untuk bertanya' },
              {
                ...who,
                intervensi:
                  'Lakukan penapisanpada ibu dan pasangan untuk menggunakan alat kontrasepsi',
              },
              { ...who, intervensi: 'Lakukan pemeriksaan fisik' },
              {
                ...who,
                intervensi:
                  'Fasilitasi ibu dan pasangan dalam mengambil keputusan menggunakan alat kontrasepsi',
              },
              {
                ...who,
                intervensi:
                  'Diskusikan perimbangan agama,sosial ekonomi terhadap pemilihan alat kontrasepsi',
              },
              { ...who, intervensi: 'Edukasi keluarga berencana' },
              { ...who, intervensi: 'Menejemen kehamilan tidak dikehendaki' },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0074',
          diagnosis: 'Gangguan Rasa Nyaman',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Rasa nyaman meningkat' },
              { ...who, kriteria: 'Frekuensi tidak nyaman berkurang' },
              { ...who, kriteria: 'Pasien terlihat lebih rileks' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              { ...who, intervensi: 'Monitor tingkat kenyamanan' },
              { ...who, intervensi: 'Monitor pola dan jam tidur' },
              {
                ...who,
                intervensi:
                  'Monitor lokasi dan ketidaknyamanan selama beraktivitas',
              },
              {
                ...who,
                intervensi:
                  'Sediakan lingkungan yang nyaman dan rendah stimulus',
              },
              { ...who, intervensi: 'Lakukan tehnik relaksasi' },
              {
                ...who,
                intervensi: 'Berikan aktivitas dritaksi yang menenangkan',
              },
              { ...who, intervensi: 'Anjurkan tirah baring' },
              { ...who, intervensi: 'Ajarkan tehnik relaksasi' },
              {
                ...who,
                intervensi:
                  'Anjurkan melakukakan aktivitas fisik secara bertahap',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0075',
          diagnosis: 'Ketidaknyamanan Pasca Partum',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Keluhan ketidaknyamanan menurun' },
              { ...who, kriteria: 'Rasa nyaman meningkat' },
              { ...who, kriteria: 'Pasien terlihat lebih rileks' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi gangguan fungsi tubuh yang bisa mengakibatkan ketidaknyamanan',
              },
              { ...who, intervensi: 'Monitor rasa nyaman pasien' },
              { ...who, intervensi: 'Monitor pola dan jam tidur' },
              {
                ...who,
                intervensi:
                  'Monitor lokasi dan ketidaknyamanan selama melakukan aktivitas',
              },
              {
                ...who,
                intervensi:
                  'Sediakan lingkungan yang nyaman dan rendah stimulus ( misal : cahaya,suara,kunjungan )',
              },
              { ...who, intervensi: 'Lakukan latihan tehnik relaksasi' },
              {
                ...who,
                intervensi: 'Berikan aktivitas distraksi yang menenangkan',
              },
              { ...who, intervensi: 'Anjurkan tirah baring' },
              {
                ...who,
                intervensi:
                  'Anjurkan melakukan aktivitas fisik secara bertahap',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan menghubungi perawat jika ketidaknyamanan tidak berkurang',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan strategi koping untuk mengurangi ketidaknyamanan',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0076',
          diagnosis: 'Nausea',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Nafsu makan membaik' },
              { ...who, kriteria: 'Tidak pucat' },
              { ...who, kriteria: 'Dilatasi pupil normal' },
              { ...who, kriteria: 'Tidak ada hipersaliva' },
              { ...who, kriteria: 'Takikardi berkurang' },
              { ...who, kriteria: 'Sensasi dingin dan panas menurun' },
              { ...who, kriteria: 'Sensasi asam di mulut berkurang' },
              { ...who, kriteria: 'Diaforesis menurun' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              { ...who, intervensi: 'Identifikasi pengalaman mual' },
              {
                ...who,
                intervensi:
                  'Identifikasi isyarat nonverbal ketidaknyamanan (missal pada bayi,anak-anak karena mereka tidak dapat berkomunikasi secara efektif)',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi dampak mual terhadap kualitas hidup (nafsu makan,aktivitas,konerja,tanggung ajawab peran dan tidur)',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi factor penyebab mual (pengobatan dan prosedur)',
              },
              {
                ...who,
                intervensi:
                  'Monitor mual (frekuensi,durasi dan tingkat keparahan)',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi antiemetic untuk mencegah mual (kecuali mual pada kehamilan)',
              },
              { ...who, intervensi: 'Monitor asupan nutria dan kalori' },
              {
                ...who,
                intervensi:
                  'Kendalikan faktor lingkungan penyebab mual (bau tak sedap,suara dan rangsangan visual yang tidak menyenangkan)',
              },
              {
                ...who,
                intervensi:
                  'Kurangi atau hilangkan keadaan penyebab mual (kecemasan,ketakutan,kelelahan)',
              },
              {
                ...who,
                intervensi: 'Berikan makanan dalam jumlah kecil dan menarik',
              },
              {
                ...who,
                intervensi:
                  'Berikan makanan dan sayuran yang bening,tidak berbau dan tidak berwarna',
              },
              { ...who, intervensi: 'Anjurkan istirahat dan tidur yang cukup' },
              {
                ...who,
                intervensi:
                  'Anjurkan sering membersihkan mulut,kecuali jika merangsang mual',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan makan makanan yang tinggi karbohidrat dan rendah lemak',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan penggunaan tehnik non farmakologis untuk mengatasi mual (hypnosis,terapi musik,relaksasi,akupresur',
              },
              { ...who, intervensi: 'Kolaborasi pemberian obat anti emetik' },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0077',
          diagnosis: 'Nyeri Akut',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Tingkat nyeri' },
              { ...who, kriteria: 'Fungsi gastrointestinal' },
              { ...who, kriteria: 'Kontrol nyeri' },
              { ...who, kriteria: 'Mobilitas fisik' },
              { ...who, kriteria: 'Penyembuhan luka' },
              { ...who, kriteria: 'Perfusi miokard' },
              { ...who, kriteria: 'Perfusi perifer' },
              { ...who, kriteria: 'Pola tidur' },
              { ...who, kriteria: 'Status kenyamanan3' },
              { ...who, kriteria: 'Tingkat cidera' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              { ...who, intervensi: 'Identifikasi PQRST nyeri.' },
              { ...who, intervensi: 'Identifikasi respon nyeri non verbal' },
              {
                ...who,
                intervensi:
                  'Identifikasi factor yang memperberat dan memperingan nyeri',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi pengaruh budaya terhadap respon nyeri',
              },
              {
                ...who,
                intervensi: 'Identifikasi pengaruh nyeri pada kualitas hidup',
              },
              {
                ...who,
                intervensi:
                  'Monitor keberhasilan terapi komplementer yang sudah diberikan',
              },
              {
                ...who,
                intervensi: 'Monitor efeksamping penggunaan analgetik',
              },
              {
                ...who,
                intervensi:
                  'Pertimbangkan jenis dan sumber nyeri dalam pemilihan strategi meredakan nyeri',
              },
              {
                ...who,
                intervensi:
                  'Kontrol lingkungan yang dapat memperberat rasa nyeri (suhu ruangan, pencahayaan, kebisingan dan lain-lain)',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan terapi relaksasi, guide imagery imajinasi terpimpin atau hypnosis',
              },
              {
                ...who,
                intervensi:
                  'Kolaborasi dengan dokter dalam pemberian analgetik oral atau injeksi',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0078',
          diagnosis: 'Nyeri Kronis',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Tingkat nyeri' },
              { ...who, kriteria: 'Kontrol gejala' },
              { ...who, kriteria: 'Kontrol nyeri' },
              { ...who, kriteria: 'Mobilitas fisik' },
              { ...who, kriteria: 'Status kenyamanan' },
              { ...who, kriteria: 'Pola tidur' },
              { ...who, kriteria: 'Tingkat agitasi' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              { ...who, intervensi: 'Identifikasi PQRST nyeri.' },
              { ...who, intervensi: 'Identifikasi respon nyeri non verbal' },
              {
                ...who,
                intervensi:
                  'Identifikasi factor yang memperberat dan memperingan nyeri',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi pengaruh budaya terhadap respon nyeri',
              },
              {
                ...who,
                intervensi: 'Identifikasi pengaruh nyeri pada kualitas hidup',
              },
              {
                ...who,
                intervensi:
                  'Monitor keberhasilan terapi komplementer yang sudah diberikan',
              },
              {
                ...who,
                intervensi: 'Monitor efeksamping penggunaan analgetik',
              },
              {
                ...who,
                intervensi:
                  'Kolaborasi dengan dokter dalam pemberian analgetik oral atau injeksi',
              },
              {
                ...who,
                intervensi:
                  'Kontrol lingkungan yang dapat memperberat rasa nyeri (suhu ruangan, pencahayaan, kebisingan dan lain-lain)',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan terapi relaksasi, guide imagery imajinasi terpimpin atau hypnosis',
              },
              {
                ...who,
                intervensi:
                  'Pertimbangkan jenis dan sumber nyeri dalam pemilihan strategi meredakan nyeri',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0079',
          diagnosis: 'Nyeri Melahirkan',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Keluhan nyeri menurun' },
              { ...who, kriteria: 'Perineum terasa tertekan menurun' },
              { ...who, kriteria: 'Meringis menurun' },
              { ...who, kriteria: 'Berfokus pada diri sendiri menurun' },
              { ...who, kriteria: 'Uterus teraba membulat menurun' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              { ...who, intervensi: 'Manajemen nyeri' },
              { ...who, intervensi: 'Pengaturan posisi' },
              { ...who, intervensi: 'Terapi relaksasi' },
              { ...who, intervensi: 'Promosi Latihan fisik' },
              {
                ...who,
                intervensi:
                  'Identifikasi lokasi, karakteristik, durasi, frekuensi, kualitas, intensitas nyeri',
              },
              { ...who, intervensi: 'Identifikasi skala nyeri' },
              { ...who, intervensi: 'Idenfitikasi respon nyeri non verbal' },
              {
                ...who,
                intervensi:
                  'Identifikasi faktor yang memperberat dan memperingan nyeri',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi pengetahuan dan keyakinan tentang nyeri',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi pengaruh budaya terhadap respon nyeri',
              },
              {
                ...who,
                intervensi: 'Identifikasi pengaruh nyeri pada kualitas hidup',
              },
              {
                ...who,
                intervensi:
                  'Monitor keberhasilan terapi komplementer yang sudah diberikan',
              },
              {
                ...who,
                intervensi: 'Monitor efek samping penggunaan analgetik',
              },
              {
                ...who,
                intervensi:
                  'Berikan Teknik nonfarmakologis untuk mengurangi nyeri (mis: TENS, hypnosis, akupresur, terapi music, biofeedback, terapi pijat, aromaterapi, Teknik imajinasi terbimbing, kompres hangat/dingin, terapi bermain)',
              },
              {
                ...who,
                intervensi:
                  'Kontrol lingkungan yang memperberat rasa nyeri (mis: suhu ruangan, pencahayaan, kebisingan)',
              },
              { ...who, intervensi: 'Fasilitasi istirahat dan tidur' },
              {
                ...who,
                intervensi:
                  'Pertimbangkan jenis dan sumber nyeri dalam pemilihan strategi meredakan nyeri',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0080',
          diagnosis: 'Ansietas',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Verbalisasi kebingungan menurun' },
              {
                ...who,
                kriteria:
                  'Verbalisasi khawatir akibat kondisi yang dihadapi menurun',
              },
              { ...who, kriteria: 'Perilaku gelisah menurun' },
              { ...who, kriteria: 'Perilaku tegang menurun' },
              { ...who, kriteria: 'Konsentrasi membaik' },
              { ...who, kriteria: 'Pola tidur membaik' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi saat tingkat ansietas berubah (mis: kondisi, waktu, stresor)',
              },
              {
                ...who,
                intervensi: 'Identifikasi kemampuan mengambil keputusan',
              },
              {
                ...who,
                intervensi:
                  'Monitor tanda-tanda ansietas (verbal dan nonverbal',
              },
              {
                ...who,
                intervensi:
                  'Ciptakan suasana terapeutik untuk menumbuhkan kepercayaan',
              },
              {
                ...who,
                intervensi:
                  'Temani pasien untuk mengurangi kecemasan, jika memungkinkan',
              },
              { ...who, intervensi: 'Pahami situasi yang membuat ansietas' },
              { ...who, intervensi: 'Dengarkan dengan penuh perhatian' },
              {
                ...who,
                intervensi: 'Gunakan pendekatan yang tenang dan meyakinkan',
              },
              {
                ...who,
                intervensi:
                  'Tempatkan barang pribadi yang memberikan kenyamanan',
              },
              {
                ...who,
                intervensi:
                  'Motivasi mengidentifikasi situasi yang memicu kecemasan',
              },
              {
                ...who,
                intervensi:
                  'Diskusikan perencanaan realistis tentang peristiwa yang akan datang',
              },
              {
                ...who,
                intervensi:
                  'Jelaskan prosedur, termasuk sensasi yang mungkin dialami',
              },
              {
                ...who,
                intervensi:
                  'Informasikan secara faktual mengenai diagnosis, pengobatan, dan prognosis',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan keluarga untuk tetap Bersama pasien, jika perlu',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan melakukan kegiatan yang tidak kompetitif, sesuai kebutuhan',
              },
              {
                ...who,
                intervensi: 'Anjurkan mengungkapkan perasaan dan persepsi',
              },
              {
                ...who,
                intervensi:
                  'Latih kegiatan pengalihan untuk mengurangi ketegangan',
              },
              {
                ...who,
                intervensi:
                  'Latih penggunaan mekanisme pertahanan diri yang tepat',
              },
              { ...who, intervensi: 'Latih Teknik relaksasi' },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0081',
          diagnosis: 'Berduka',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Verbalisasi menerima kehilangan meningkat' },
              {
                ...who,
                kriteria:
                  'Verbalisasi harapan meningkat dan perasaan sedih menurun',
              },
              {
                ...who,
                kriteria:
                  'Verbalisasi perasaan bersalah atau menyalahkan orang lain menurun',
              },
              {
                ...who,
                kriteria: 'Pola tidur membaik dan konsentrasi membaik',
              },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Intervensi keperawatan dengan pendekatan strategi pelaksanaan (SP) pada pasien',
              },
              { ...who, intervensi: 'Bina hubungan saling percaya' },
              { ...who, intervensi: 'Identifikasi kehilangan yang dihadapi' },
              {
                ...who,
                intervensi: 'Identifikasi proses berduka yang dialami',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi sifat keterikatan pada benda yang hilang atau orang yang meninggal',
              },
              {
                ...who,
                intervensi: 'Identifikasi reaksi awal terhadap kehilangan',
              },
              {
                ...who,
                intervensi:
                  'Motivasi agar mau mengungkapkan perasaan kehilangan',
              },
              {
                ...who,
                intervensi:
                  'Motivasi untuk menguatkan dukungan keluarga atau orang terdekat',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi mengekspresikan perasaan dengan cara yang nyaman (mis: membaca buku, menulis, menggambar, atau bermain)',
              },
              {
                ...who,
                intervensi:
                  'Intervensi Keperawatan dengan pendekatan Strategi Pelaksanaan (SP) pada keluarga',
              },
              {
                ...who,
                intervensi:
                  'Diskusikan masalah yang dirasakan keluarga dalam merawat pasien',
              },
              {
                ...who,
                intervensi:
                  'Jelaskan pengertian, tanda dan gejala berduka yang dialami pasien beserta prosesnya.',
              },
              {
                ...who,
                intervensi:
                  'Berikan kesempatan keluarga untuk memutuskan perawatan pasien',
              },
              {
                ...who,
                intervensi:
                  'Jelaskan cara merawat dan melatih dua cara merawat : berkenalan dan melakukan kegiatan harian.',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0082',
          diagnosis: 'Distres Spiritual',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Mampu beristirahat dengan tenang' },
              {
                ...who,
                kriteria: 'Mengekspresikan rasa damai berhubungan dengan Tuhan',
              },
              {
                ...who,
                kriteria:
                  'Menunjukkan hubungan yang hangat dan terbuka dengan pemuka agama',
              },
              {
                ...who,
                kriteria:
                  'Mengekspresikan arti positif terhadap situasi dan keberadaannya',
              },
              {
                ...who,
                kriteria:
                  'Menunjukkan afeksi positif, tanpa rasa bersalah, dan kecemasan',
              },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              { ...who, intervensi: 'Identifikasi pola aktivitas dan tidur' },
              {
                ...who,
                intervensi: 'Memonitor pola berdoa dan beribadah pasien',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi pandangan tentang hubungan antaran spiritual dan kesehatan',
              },
              {
                ...who,
                intervensi: 'Identifikasi harapan dan kekuatan pasien',
              },
              {
                ...who,
                intervensi:
                  'Berikan kesempatan mengekspresikan perasaan tentang penyakit dan kematian',
              },
              {
                ...who,
                intervensi:
                  'Berikan kesempatan mengekspresikan dan meredakan marah secara tepat.',
              },
              {
                ...who,
                intervensi:
                  'Yakinkan bahwa perawat bersedia mendukung selama masa ketidakberdayaan',
              },
              {
                ...who,
                intervensi:
                  'Sediakan privasi dan waktu tentang untuk aktivitas spiritual',
              },
              {
                ...who,
                intervensi:
                  'Diskusikan keyakinan tentang makna dan tujuan hidup, jika perlu',
              },
              { ...who, intervensi: 'Fasilitasi melakukan kegiatan ibadah' },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0083',
          diagnosis: 'Gagguan Citra Tubuh',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Tanda dan gejala gangguan citra tubuh' },
              { ...who, kriteria: 'Kemampuan dalam berinteraksi' },
              { ...who, kriteria: 'Kemampuan dalam mengungkapkan perasaanya' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Intervensi keperawatan dengan pendekatan strategi pelaksanaan (SP) pada pasien',
              },
              { ...who, intervensi: 'Bina hubungan saling percaya' },
              {
                ...who,
                intervensi:
                  'Bantu pasien mengatasi bagian tubuh yang tidak ia sukai',
              },
              {
                ...who,
                intervensi:
                  'Latih bercakap cakap secara bertahap antara pasien dan anggota keluarga',
              },
              {
                ...who,
                intervensi:
                  'Diskusikan perasaan, harapan dan persepi pasien terhadap citra tubuh',
              },
              {
                ...who,
                intervensi:
                  'Motivasi klien untuk merawat dan meningkatkan citra',
              },
              { ...who, intervensi: 'tubuh' },
              {
                ...who,
                intervensi:
                  'Motivasi klien untuk melakukan latihan meningkatkan citra tubuh sesuai jadwal.',
              },
              { ...who, intervensi: 'Beri puijian' },
              {
                ...who,
                intervensi:
                  'BIntervensi Keperawatan dengan pendekatan Strategi Pelaksanaan (SP) pada keluarga',
              },
              {
                ...who,
                intervensi:
                  'Diskusikan masalah yang dirasakan keluarga dalam merawat pasien',
              },
              {
                ...who,
                intervensi:
                  'Jelaskan pengertian, tanda dan gejala gangguan citra tubuh yang dialami pasien beserta prosesnya.',
              },
              {
                ...who,
                intervensi:
                  'Berikan kesempatan keluarga untuk memutuskan perawatan pasien',
              },
              {
                ...who,
                intervensi:
                  'Jelaskan cara merawat gangguan citra tubuh dan melatih dua cara merawat : berkenalan dan melakukan kegiatan harian.',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0084',
          diagnosis: 'Gangguan Identitas Diri',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Persepsi terhadap diri membaik' },
              {
                ...who,
                kriteria: 'Kebingungan dengan nilai-nilai budaya menurun',
              },
              { ...who, kriteria: 'Kebingungan dengan tujuan hidup menurun' },
              { ...who, kriteria: 'Kebingungan dengan jenis kelamin menurun' },
              {
                ...who,
                kriteria: 'Kebingungan dengan nilai-nilai ideal menurun',
              },
              { ...who, kriteria: 'Perasaan fluktuatif terhadap diri menurun' },
              { ...who, kriteria: 'Perilaku konsisten meningkat' },
              { ...who, kriteria: 'Hubungan yang efektif meningkat' },
              { ...who, kriteria: 'Strategi koping efektif meningkat' },
              { ...who, kriteria: 'Penampilan peran efektif meningkat' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              { ...who, intervensi: 'Monitor perubahan orientasi' },
              { ...who, intervensi: 'Monitor perubahan kognitif dan perilaku' },
              { ...who, intervensi: 'Perkenalkan nama saat memulai interaksi' },
              { ...who, intervensi: 'Orientasikan orang, tempat, dan waktu' },
              {
                ...who,
                intervensi:
                  'Hadirkan realita (mis: beri penjelasan alternatif, hindari perdebatan)',
              },
              {
                ...who,
                intervensi:
                  'Sediakan lingkungan dan rutinitas secara konsisten',
              },
              {
                ...who,
                intervensi:
                  'Atur stimulus sensorik dan lingkungan (mis: kunjungan, pemandangan, suara, pencahayaan, bau, dan sentuhan)',
              },
              {
                ...who,
                intervensi:
                  'Gunakan simbol dalam mengorientasikan lingkungan (mis: tanda, gambar, warna)',
              },
              {
                ...who,
                intervensi: 'Libatkan dalam terapi kelompok orientasi',
              },
              {
                ...who,
                intervensi:
                  'Berikan waktu istirahat dan tidur yang cukup, sesuai kebutuhan',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi akses informasi (mis: televisi, surat kabad, radio), jika perlu',
              },
              { ...who, intervensi: 'Anjurkan perawatan diri secara mandiri' },
              {
                ...who,
                intervensi:
                  'Anjurkan penggunaan alat bantu (mis: kacamata, alat bantu dengar, gigi palsu)',
              },
              {
                ...who,
                intervensi: 'Ajarkan keluarga dalam perawatan orientasi lansia',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0085',
          diagnosis: 'Gangguan Persepsi Sensori',
          diagnosisKeperawatanKriterias: {
            create: [
              {
                ...who,
                kriteria: 'Ketajaman pendengaran dan penglihatan membaik',
              },
              {
                ...who,
                kriteria:
                  'Identifikasi diri sendiri dan orang terdekat meningkat',
              },
              { ...who, kriteria: 'Memahami kalimat dan paragraf meningkat' },
              { ...who, kriteria: 'Menjelaskan perbedaan antara dua item' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Anjurkan memonitor sendiri situasi terjadinya halusinasi',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan bicara pada orang yang dipercaya untuk memberi dukungan dan umpan balik korektif terhadap halusinasi',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan pasien dan keluarga cara mengontrol halusinasi',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan melakukan distraksi (mis. Mendengarkan musik,melakukan aktifitas dan tehnik relaksasi)',
              },
              { ...who, intervensi: 'Ajarkan cara meminimalisasi stimulus' },
              {
                ...who,
                intervensi:
                  'Periksa status mental, status sensori dan tingkat kenyamanan',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi kebutuhan untuk dilakukan pengekangan',
              },
              {
                ...who,
                intervensi:
                  'Libatkan pasien dan /atau keluarga dalam membuat keputusan',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0086',
          diagnosis: 'Harga Diri Rendah Kronis',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Perasaan negatif harga diri rendah' },
              { ...who, kriteria: 'Penilaian diri positif meningkat' },
              {
                ...who,
                kriteria:
                  'Verbalisasi harapan yang positif antar anggota keluarga',
              },
              {
                ...who,
                kriteria: 'Dukungan kemandirian antar anggota keluarga',
              },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Jelaskan kepada keluarga pentingnya dukungan dalam perkembangan konsep positif diri pasien',
              },
              {
                ...who,
                intervensi: 'Anjurkan mengidentifikasi kekuatan yang di miliki',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan mempertahankan kontak mata saat berkomunikasi dengan orang lain',
              },
              {
                ...who,
                intervensi: 'Anjurkan membuka diri terhadap kritik negatif',
              },
              { ...who, intervensi: 'Anjurkan mengevaluasi perilaku' },
              {
                ...who,
                intervensi:
                  'Latih peningkatan tanggung jawab untuk diri sendiri',
              },
              {
                ...who,
                intervensi: 'Latih cara berpikir dan berperilaku positif',
              },
              {
                ...who,
                intervensi:
                  'Latih meningkatkan kepercayaan pada kemampuan dalam menangani situasi',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0087',
          diagnosis: 'Harga Diri Rendah Situasional',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Penilaian diri positif' },
              {
                ...who,
                kriteria: 'Penerimaan penilaian positif terhadap diri sendiri',
              },
              { ...who, kriteria: 'Postur tubuh menampakkan wajah' },
              { ...who, kriteria: 'Perasaan malu' },
              { ...who, kriteria: 'Perasaan bersalah' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi berbagai peran dan periodetransisi sesuai tingkat perkembangan',
              },
              {
                ...who,
                intervensi: 'Identifikasi peran yang ada dalam keluarga',
              },
              {
                ...who,
                intervensi: 'Identifikasi adanya peran yang tidak terpenuhi',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi adaptasi peran keluarga terhadap perubahan peran yang tidak diinginkan',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi bermain peran dalam mengantisipaso reaksi orang lain terhadap perilaku',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi diskusi perubahan peran anak terhadap bayi baru lahir, jika perlu',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi diskusi tentang peran orangtua, jika perlu',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi diskusi harapan adaptasi peran saat anak meninggalkan rumah, jika perlu',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi diskusi harapan dengan keluarga dalam peran timbal balik',
              },
              {
                ...who,
                intervensi:
                  'Diskusikan perilaku yang di butuhkan untuk pengembangan peran',
              },
              {
                ...who,
                intervensi:
                  'Diskusikan perubahan peran yang di perlukan akibat penyakit atau ketidakmampuan',
              },
              {
                ...who,
                intervensi:
                  'Diskusikan perubahan peran dalam menerima ketergantungan orang tua',
              },
              {
                ...who,
                intervensi:
                  'Diskusikan strategi positif untuk mengelola perubahan peran',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0088',
          diagnosis: 'Keputusasaan',
          diagnosisKeperawatanKriterias: {
            create: [
              {
                ...who,
                kriteria:
                  'Verbalisasi kekhawatiran pada penolakan/reaksi orang lain menurun',
              },
              {
                ...who,
                kriteria: 'Mempertahanan kesadaran terhadap perasaan meningkat',
              },
              {
                ...who,
                kriteria: 'Mempertahankan kebiasaan rutin keluarga meningkat',
              },
              {
                ...who,
                kriteria:
                  'Mencari dukungan emosional dari anggota keluarga lain',
              },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Jelaskan konsekuensi tidak menghadapi rasa bersalah dan malu',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan mengumgkapkan perasaan yg dialami (misal ansietas, sedih,marah)',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan mengungkapkan emosional sebeumnya dan pola respon yg biasa digunakan',
              },
              {
                ...who,
                intervensi:
                  'Anjukan mengungkapkan perasaan Idterhadap kondisi realistis',
              },
              { ...who, intervensi: 'Latih cara mengembangkan spiritual diri' },
              {
                ...who,
                intervensi: 'Latih menyusun tujuan yang sesuai dengan harapan',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan mempertahankan hubungan (misal menyebutkan nama yang di cintai)',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0089',
          diagnosis: 'Kesiapan Peningkatan Konsep Diri',
          diagnosisKeperawatanKriterias: {
            create: [
              {
                ...who,
                kriteria: 'Verbalisasi kepuasan terhadap diri meningkat',
              },
              {
                ...who,
                kriteria: 'Verbalisasi kepuasan terhadap harga diri meningkat',
              },
              {
                ...who,
                kriteria:
                  'Verbalisasi kepuasan terhadap penampilan peran meningkat',
              },
              {
                ...who,
                kriteria: 'Verbalisasi kepuasan terhadap citra tubuh meningkat',
              },
              {
                ...who,
                kriteria:
                  'Verbalisasi kepuasan terhadap identitas diri meningkat',
              },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              { ...who, intervensi: 'Identifikasi keadaan emosional saat ini' },
              {
                ...who,
                intervensi:
                  'Identifikasi respons yang ditunjukkan berbagai situasi',
              },
              {
                ...who,
                intervensi:
                  'Diskusikan nilai-nilai yang berkontribusi terhadap konsep diri',
              },
              {
                ...who,
                intervensi:
                  'Diskusikan tentang pikiran, perilaku, atau respons terhadap kondisi',
              },
              {
                ...who,
                intervensi: 'Diskusikan dampak penyakit pada konsep diri',
              },
              {
                ...who,
                intervensi: 'Ungkapkan penyangkalan tentang kenyataan',
              },
              {
                ...who,
                intervensi: 'Motivasi dalam meningkatkan kemampuan belajar',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan mengenali pikiran dan perasaan tentang diri',
              },
              {
                ...who,
                intervensi: 'Anjurkan menyadari bahwa setiap orang unik',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan mengungkapkan perasaan (mis: marah atau depresi)',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan meminta bantuan orang lain, sesuai kebutuhan',
              },
              {
                ...who,
                intervensi: 'Anjurkan mengubah pandangan diri sebagai korban',
              },
              {
                ...who,
                intervensi: 'Anjurkan mengidentifikasi perasaan bersalah',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan mengidentifikasi situasi yang memicu kecemasan',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan mengevaluasi Kembali persepsi negative tentang diri',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan dalam mengekspresikan diri dengan kelompok sebaya',
              },
              { ...who, intervensi: 'Ajarkan cara membuat priotritas hidup' },
              {
                ...who,
                intervensi: 'Latih kemampuan positif diri yang dimiliki',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0090',
          diagnosis: 'Kesiapan Peningkatan Koping Keluarga',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Perilaku bertujuan membaik' },
              { ...who, kriteria: 'Perilaku sehat membaik' },
              {
                ...who,
                kriteria: 'Komitmen pada perawatan/pengobatan meningkat',
              },
              {
                ...who,
                kriteria: 'Komunikasi antara anggota keluarga meningkat',
              },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi kesiapan keluarga untuk terlibat dalam perawatan',
              },
              {
                ...who,
                intervensi:
                  'Ciptakan hubungan terapeutik pasien dengan keluarga dalam perawatan',
              },
              {
                ...who,
                intervensi:
                  'Diskusikan cara perawatan di rumah (mis: kelompok, perawatan di rumah, atau rumah singgah)',
              },
              {
                ...who,
                intervensi:
                  'Motivasi keluarga mengembangkan aspek positif rencana perawatan',
              },
              {
                ...who,
                intervensi: 'Fasilitasi keluarga membuat keputusan perawatan',
              },
              { ...who, intervensi: 'Jelaskan kondisi pasien kepada keluarga' },
              {
                ...who,
                intervensi:
                  'Informasikan tingkat ketergantungan pasien kepada keluarga',
              },
              {
                ...who,
                intervensi: 'Informasikan harapan pasien kepada keluarga',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan keluarga bersikap asertif dalam perawatan',
              },
              {
                ...who,
                intervensi: 'Anjurkan keluarga terlibat dalam perawatan',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0091',
          diagnosis: 'Kesiapan Peningkatan Koping Komunitas',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Keberdayaan komunitas meningkat' },
              { ...who, kriteria: 'Perencanaan komunitas meningkat' },
              { ...who, kriteria: 'Pemecahan masalah komunitas meningkat' },
              { ...who, kriteria: 'Sumber daya komunitas meningkat' },
              { ...who, kriteria: 'Partisipasi masyarakat meningkat' },
              {
                ...who,
                kriteria: 'Insiden masalah Kesehatan dalam komunitas menurun',
              },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi respon psikologis terhadap situasi dan ketersedian sistem pendukung',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi sumber daya untuk ketersediaan pengasuh',
              },
              {
                ...who,
                intervensi:
                  'Monitor situasi keluarga saat ini dan sistem pendukung',
              },
              {
                ...who,
                intervensi: 'Berikan dukungan dan caring dalam pelayanan',
              },
              {
                ...who,
                intervensi:
                  'Motivasi berpartisipasi dalam kegiatan sosial dan masyarakat',
              },
              {
                ...who,
                intervensi:
                  'Motivasi membina hubungan dengan pihak yang memiliki kebutuhan yang sama',
              },
              {
                ...who,
                intervensi:
                  'Libatkan keluarga, orang penting, dan teman dalam perawatan',
              },
              { ...who, intervensi: 'Jelaskan hambatan pada sistem pendukung' },
              {
                ...who,
                intervensi: 'Informasikan jaringan sosial yang tersedia',
              },
              {
                ...who,
                intervensi:
                  'Informasikan tingkat sistem pendukung (mis: keluarga, teman, dan masyarakat)',
              },
              {
                ...who,
                intervensi: 'Anjurkan keluarga terlibat dalam perawatan',
              },
              { ...who, intervensi: 'Rujuk ke kelompok swadaya' },
              {
                ...who,
                intervensi:
                  'Kolaborasi dengan program pencegahan atau pengobatan berbasis masyarakat, jika perlu',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0092',
          diagnosis: 'Ketidakberdayaan',
          diagnosisKeperawatanKriterias: {
            create: [
              {
                ...who,
                kriteria: 'Verbalisasi mampu melaksanakan aktivitas meningkat',
              },
              { ...who, kriteria: 'Verbalisasi frustasi menurun' },
              { ...who, kriteria: 'Ketergantungan pada orang lain menurun' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi harapan pasien dan keluarga dalam pencapaian hidup',
              },
              {
                ...who,
                intervensi:
                  'Sadarkan bahwa kondisi yang dialami memiliki nilai penting',
              },
              {
                ...who,
                intervensi:
                  'Pandu mengingat Kembali kenangan yang menyenangkan',
              },
              {
                ...who,
                intervensi: 'Libatkan pasien secara aktif dalam perawatan',
              },
              {
                ...who,
                intervensi:
                  'Kembangkan rencana perawatan yang melibatkan tingkat pencapaian tujuan sederhana sampai dengan kompleks',
              },
              {
                ...who,
                intervensi:
                  'Berikan kesempatan kepada pasien dan keluarga terlibat dengan dukungan kelompok',
              },
              {
                ...who,
                intervensi:
                  'Ciptakan lingkungan yang memudahkan mempraktikkankebutuhan spiritual',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan mengungkapkan perasaan terhdap kondisi dengan realistis',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan mempertahankan hubungan (mis: menyebutkan nama orang yang dicintai)',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan mempertahankan hubungan terapeutik dengan orang lain',
              },
              {
                ...who,
                intervensi: 'Latih menyusun tujuan yang sesuai dengan harapan',
              },
              { ...who, intervensi: 'Latih cara mengembangkan spiritual diri' },
              {
                ...who,
                intervensi:
                  'Latih cara mengenang dan menikmati masa lalu (mis: prestasi, pengalaman)',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0093',
          diagnosis: 'Ketidakmampuan Koping Keluarga',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Perasaan diabaikan menurun' },
              {
                ...who,
                kriteria: 'Kekhawatiran tentang anggota keluarga menurun',
              },
              {
                ...who,
                kriteria: 'Perilaku mengabaikan anggota keluarga menurun',
              },
              {
                ...who,
                kriteria:
                  'Kemampuan memenuhi kebutuhan anggota keluarga meningkat',
              },
              {
                ...who,
                kriteria: 'Komunikasi antara anggota keluarga membaik',
              },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi: 'Identifikasi pemahaman keluarga terhadap masalah',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi adanya konflik prioritas antar anggota keluarga',
              },
              { ...who, intervensi: 'Identifikasi mekanisme kopiing keluarga' },
              { ...who, intervensi: 'Monitor hubungan antar anggota keluarga' },
              { ...who, intervensi: 'Identifikasi tipe proses keluarga' },
              {
                ...who,
                intervensi:
                  'Identifikasi masalah atau gangguan dalam proses keluarga',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi kebutuhan perawatan mandiri dirumah untuk pasien dan tetap beradaptasi dengan pola hidup keluarga',
              },
              { ...who, intervensi: 'Hargai privasi keluarga' },
              { ...who, intervensi: 'Fasilitasi kunjungan keluarga.' },
              {
                ...who,
                intervensi:
                  'Fasilitasi keluarga melakukan pengambilan keputusan dan pemecahan masalah',
              },
              {
                ...who,
                intervensi:
                  'Pertahankan interaksi yang berkelanjutan dengan anggota keluarga',
              },
              {
                ...who,
                intervensi:
                  'Motivasi anggota keluarga untuk melakukan aktivitas Bersama seperti makan Bersama, diskusi Bersama keluarga',
              },
              {
                ...who,
                intervensi:
                  'Susun jadwal aktivitas perawatan mandiri dirumah untuk mengurangi gangguan rutinitas keluarga',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi komunikasi terbuka antara setiap anggota keluarga',
              },
              {
                ...who,
                intervensi:
                  'Informasikan kondisi pasien secara berkala kepada keluarga',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan anggota keluarga mempertahankan keharmonisan keluarga',
              },
              { ...who, intervensi: 'Rujuk untuk terapi keluarga, jika perlu' },
              {
                ...who,
                intervensi:
                  'Jelaskan strategi mengembalikan kehidupan keluarga yang normal kepala anggota keluarga',
              },
              {
                ...who,
                intervensi: 'Diskusi dukungan social dari sekitar keluarga',
              },
              {
                ...who,
                intervensi:
                  'Latih keluarga menajemen waktu jika perawatan dirumah dibutuhkan',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0094',
          diagnosis: 'Koping Defensif',
          diagnosisKeperawatanKriterias: {
            create: [
              {
                ...who,
                kriteria: 'Kemampuan memenuhi peran sesuai usia meningkat',
              },
              { ...who, kriteria: 'Perilaku koping adaptif meningkat' },
              {
                ...who,
                kriteria: 'Verbalisasi kemampuan mengatasi masalah meningkat',
              },
              { ...who, kriteria: 'Perilaku asertif meningkat' },
              {
                ...who,
                kriteria: 'Verbalisasi menyalahkan orang lain menurun',
              },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi: 'Identifikasi pemahaman keluarga terhadap masalah',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi adanya konflik prioritas antar anggota keluarga',
              },
              { ...who, intervensi: 'Identifikasi mekanisme kopiing keluarga' },
              { ...who, intervensi: 'Monitor hubungan antar anggota keluarga' },
              { ...who, intervensi: 'Hargai privasi keluarga' },
              { ...who, intervensi: 'Fasilitasi kunjungan keluarga.' },
              {
                ...who,
                intervensi:
                  'Fasilitasi keluarga melakukan pengambilan keputusan dan pemecahan masalah',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi komunikasi terbuka antara setiap anggota keluarga',
              },
              {
                ...who,
                intervensi:
                  'Informasikan kondisi pasien secara berkala kepada keluarga',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan anggota keluarga mempertahankan keharmonisan keluarga',
              },
              { ...who, intervensi: 'Rujuk untuk terapi keluarga, jika perlu' },
              { ...who, intervensi: 'Identifikasi tipe proses keluarga' },
              {
                ...who,
                intervensi:
                  'Identifikasi masalah atau gangguan dalam proses keluarga',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi kebutuhan perawatan mandiri dirumah untuk pasien dan tetap beradaptasi dengan pola hidup keluarga',
              },
              {
                ...who,
                intervensi:
                  'Pertahankan interaksi yang berkelanjutan dengan anggota keluarga',
              },
              {
                ...who,
                intervensi:
                  'Motivasi anggota keluarga untuk melakukan aktivitas Bersama seperti makan Bersama, diskusi Bersama keluarga',
              },
              {
                ...who,
                intervensi:
                  'Susun jadwal aktivitas perawatan mandiri dirumah untuk mengurangi gangguan rutinitas keluarga',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0095',
          diagnosis: 'Koping Komunitas Tidak Efektif',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Kebedayaan komunitas meningkat' },
              { ...who, kriteria: 'perencanaan komunitas meningkat' },
              { ...who, kriteria: 'pemecahan masalah komunitas meningkat' },
              { ...who, kriteria: 'Partisipasi masyarakat meningkat' },
              {
                ...who,
                kriteria: 'insiden masalah kesehatan dalam komunitas meurun',
              },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi kesiapan dan kemampuan menerima informasi',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi faktor-faktor yang dapat meningkatkan dan menurunkan motivas perilakuhidup bersih dan sehat',
              },
              {
                ...who,
                intervensi:
                  'Libatkan Partisipasi masyarakat dalam memelihara keamanan lingkugan',
              },
              {
                ...who,
                intervensi:
                  'Promosikan kebijakan pemerintah untuk mengurangi resiko penyakit',
              },
              {
                ...who,
                intervensi:
                  'Informasikan layanan kesehatan ke individu. Keluarga. kelompok bereiko dan masyarakat',
              },
              {
                ...who,
                intervensi:
                  'Kolaborasi dengan tim kesehatan dalam program kesehatan komunitas untuk menghadapi resiko yang diketahui',
              },
              { ...who, intervensi: 'Identifikasi tipe proses komunitas' },
              {
                ...who,
                intervensi:
                  'Identifikasi masalah atau gangguan dalam proses komunitas',
              },
              {
                ...who,
                intervensi:
                  'Pertahankan interaksi yang berkelanjutan dengan anggota keluarga dan komunitas',
              },
              {
                ...who,
                intervensi:
                  'Motivasi anggota keluarga untuk melakukan aktivitas Bersama seperti makan Bersama, diskusi Bersama keluarga dan komunitas',
              },
              {
                ...who,
                intervensi:
                  'Jelaskan strategi mengembalikan kehidupan keluarga yang normal kepala anggota keluarga',
              },
              {
                ...who,
                intervensi: 'Diskusi dukungan social dari sekitar keluarga',
              },
              {
                ...who,
                intervensi:
                  'Latih keluarga menajemen waktu jika perawatan dirumah dibutuhkan',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0096',
          diagnosis: 'Koping Tidak Efektif',
          diagnosisKeperawatanKriterias: {
            create: [
              {
                ...who,
                kriteria: 'Kemampuan memenuhi peran sesuai usia meningkat',
              },
              { ...who, kriteria: 'Perilaku koping adaftif meningkat' },
              {
                ...who,
                kriteria: 'Verbalisasi kemampuan mengatasi masalah meningkat',
              },
              { ...who, kriteria: 'Verbalisasi pengakuan masalah meningkat' },
              { ...who, kriteria: 'Perilaku asertif meningkat' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi persepsi mengenaimasalah dan informasi yang memicu konflik',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi mengklarifikasi nilai dan harapan yang membantu membuat pilihan',
              },
              {
                ...who,
                intervensi:
                  'Diskusikankelebihan dan kekurangan dari setiapsolusi',
              },
              {
                ...who,
                intervensi:
                  'Motivasi mengungkapkan tujuan perawatan yang diharapkan',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi komunikasi terbuka antara setiap anggota keluarga',
              },
              { ...who, intervensi: 'Jelaskan alternatif solusi secara jelas' },
              {
                ...who,
                intervensi:
                  'Anjurkan anggota keluarga mempertahankan keharmonisan keluarga',
              },
              { ...who, intervensi: 'Rujuk untuk terapi keluarga, jika perlu' },
              {
                ...who,
                intervensi:
                  'Identifikasi berbagai peran dan periode transisi sesuai tingkat perkembangan',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi masalah atau gangguan dalam proses keluarga',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi kebutuhan perawatan mandiri dirumah untuk pasien dan tetap beradaptasi dengan pola hidup keluarga',
              },
              {
                ...who,
                intervensi:
                  'Pertahankan interaksi yang berkelanjutan dengan anggota keluarga',
              },
              {
                ...who,
                intervensi:
                  'Motivasi anggota keluarga untuk melakukan aktivitas Bersama seperti makan Bersama, diskusi Bersama keluarga',
              },
              {
                ...who,
                intervensi:
                  'Susun jadwal aktivitas perawatan mandiri dirumah untuk mengurangi gangguan rutinitas keluarga',
              },
              {
                ...who,
                intervensi:
                  'Jelaskan strategi mengembalikan kehidupan keluarga yang normal kepala anggota keluarga',
              },
              {
                ...who,
                intervensi: 'Diskusi dukungan social dari sekitar keluarga',
              },
              {
                ...who,
                intervensi:
                  'Latih keluarga menajemen waktu jika perawatan dirumah dibutuhkan',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0097',
          diagnosis: 'Penurunan Koping Keluarga',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Menyadarikebutuhan pasien' },
              {
                ...who,
                kriteria:
                  'Mulai menunjukan keterampilan interpersonal yang efektif',
              },
              {
                ...who,
                kriteria:
                  'Mengekspresikan peningkatan kemampuan untuk mengatasi perubahan dalam struktur dan dinamika keluarga',
              },
              {
                ...who,
                kriteria: 'Mengekspresikan perasaan yang tidak terselesaikan',
              },
              {
                ...who,
                kriteria:
                  'Menggunakan strategi penyelesaian masalah yang lebih fleksibel',
              },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi respons emosional terhadap kondisi saat ini',
              },
              {
                ...who,
                intervensi: 'Identifikasi beban prognosis secara psikologis',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi kesesuaian antara harapan pasien, keluarga, dan tenaga kesehatan',
              },
              {
                ...who,
                intervensi:
                  'Dengarkan masalah, perasaan, dan pernyataan keluarga',
              },
              {
                ...who,
                intervensi:
                  'Terima nilai-nilai keluarga dengan cara tidak menghakimi',
              },
              {
                ...who,
                intervensi:
                  'Hargai dan dukung mekanisme koping adaptif yang digunakan',
              },
              {
                ...who,
                intervensi:
                  'Berikan kesempatan berkunjung bagi anggota keluarga',
              },
              { ...who, intervensi: 'Kolaborasi terapi keluarga , jika perlu' },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0098',
          diagnosis: 'Penyangkalan Tidak Efektif',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Verbalisasi perasaan meningkat' },
              {
                ...who,
                kriteria: 'Verbalisasi perasaan yang di alami meningkat',
              },
              {
                ...who,
                kriteria: 'Perilaku mencari perawatan/pengobatan meningkat',
              },
              { ...who, kriteria: 'Menyusun perencanaan masa depan' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              { ...who, intervensi: 'Identifikasi keadaan emosional saat ini' },
              {
                ...who,
                intervensi:
                  'Identifikasi respons yang ditunjukan berbagai situasi',
              },
              { ...who, intervensi: 'Identifikasi kemampuan yang dimiliki' },
              {
                ...who,
                intervensi:
                  'Identifikasi sumber daya yang tersedia untuk memenuhi tujuan',
              },
              { ...who, intervensi: 'Identifikasi pemahaman proses penyakit' },
              { ...who, intervensi: 'Diskusikan perubahan peran yang dialami' },
              {
                ...who,
                intervensi: 'Gunakan pendekatan yang tennag dan meyakinkan',
              },
              {
                ...who,
                intervensi: 'Diskusikan alas am mengkritik diri sendiri',
              },
              {
                ...who,
                intervensi:
                  'Diskusikan risiko yang menimbulkan bahaya pada diri sendiri',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi dalam memperoleh informasi yang dibutuhkan',
              },
              {
                ...who,
                intervensi: 'Motivasi untuk menentukan harapan yang realistis',
              },
              {
                ...who,
                intervensi:
                  'Tinjau kembali kemampuan dalam pengambilan keputusan',
              },
              { ...who, intervensi: 'Motivasi terlibat dalam kegiatan sosial' },
              { ...who, intervensi: 'Anjurkan keterlibatan keluarga' },
              {
                ...who,
                intervensi:
                  'Ajarkan cara memecahkan masalah secara konstruktif',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0099',
          diagnosis: 'Perilaku Kesehatan Cenderung Berisiko',
          diagnosisKeperawatanKriterias: {
            create: [
              {
                ...who,
                kriteria:
                  'Penerimaan terhadap perubahan status kesehatan meningkat',
              },
              {
                ...who,
                kriteria:
                  'Kemampuan melakukan tindakan pencegahan masalah kesehatan meningkat',
              },
              { ...who, kriteria: 'Kemampuan peningkatan kesehatan meningkat' },
              { ...who, kriteria: 'Pola koping sebelumnya dan sekarang' },
              { ...who, kriteria: 'Fungsi Status sebelumnya dan sekarang' },
              {
                ...who,
                kriteria:
                  'Respon terhadap terapi medis dan tindakan keperawatan',
              },
              { ...who, kriteria: 'Resiko untuk masalah potensial' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi perilaku upaya kesehatan yang ditingkatkan',
              },
              {
                ...who,
                intervensi: 'Berikan lingkungan yang mendukung kesehatan',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan persalinan ditolong oleh tenaga kesehatan',
              },
              { ...who, intervensi: 'Anjurkan menggunakan air bersih' },
              {
                ...who,
                intervensi:
                  'Anjurkan mencuci tangan dengan air bersih dan sabun',
              },
              { ...who, intervensi: 'Anjurkan menggunakan jamban sehat' },
              {
                ...who,
                intervensi:
                  'Anjurkan memberantas jentik dirumah seminggu sekali',
              },
              {
                ...who,
                intervensi: 'Anjurkan makan buah dan sayur setiap hari',
              },
              {
                ...who,
                intervensi: 'Anjurkan melakukan aktivitas fisik setiap hari',
              },
              { ...who, intervensi: 'Anjurkan tidak merokok didalam rumah' },
              {
                ...who,
                intervensi: 'Berikan lingkungan yang mendukung kesehatan',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0100',
          diagnosis: 'Risiko Distres Spiritual',
          diagnosisKeperawatanKriterias: {
            create: [
              {
                ...who,
                kriteria: 'Mengekspresikan rasa damai berhubungan dengan Tuhan',
              },
              {
                ...who,
                kriteria:
                  'Menunjukan hubungan yang hangat dan terbuka dengan pemuka agama',
              },
              {
                ...who,
                kriteria:
                  'Menumjukam efek positif tanpa rasa bersalah dan marah',
              },
              { ...who, kriteria: 'Menunjukan perilaku positif' },
              {
                ...who,
                kriteria:
                  'Mengekspresikan arti positif terhadap situasi dan keberadaannya',
              },
              {
                ...who,
                kriteria: 'Menyatakan penerimaan keputusan moral/etika',
              },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Sediakan lingkungan yang tenang untuk refleksi diri',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi keyakinan tentang makna dan tujuan hidup, sesuai kebutuhan',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi perspektif spiritual, sesuai kebutuhan',
              },
              {
                ...who,
                intervensi: 'Perlakukan klien dengan bermartabat dan terhormat',
              },
              {
                ...who,
                intervensi:
                  'Tunjukan keterbukaan, empati, dan kesediaan mendengarkan perasaan pasien',
              },
              {
                ...who,
                intervensi:
                  'Motivasi meninjau kehidupan masa lalu dan focus pada hal yang memberikan kekuatan spiritual',
              },
              {
                ...who,
                intervensi:
                  'Motivasi berinteraksi dengan anggota keluarga, teman, dan lainnya.',
              },
              {
                ...who,
                intervensi:
                  'Dorong Privasi dan waktu tenang untuk aktivitas spiritual',
              },
              {
                ...who,
                intervensi:
                  'Motivasi berpartisipasi dengan kelompok pendukung.',
              },
              { ...who, intervensi: 'Motivasi mengekspresikan perasaan' },
              {
                ...who,
                intervensi: 'Motivasi penggunaan sumber spiritual, jika perlu',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan berpatisipasi dalam kegiatan Ibadah (hari raya, ritual) dan meditasi',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan membuat komitmen spiritual berdasarkan keyakinan yang dinilai',
              },
              {
                ...who,
                intervensi:
                  'Kolaborasi kepada kelompok pendukung atau program spiritual, jika perlu',
              },
              {
                ...who,
                intervensi:
                  'Kolaborasi dengan pemuka agama/kelompok agama, jika perlu',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0101',
          diagnosis: 'Risiko Harga Diri Rendah Kronis',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Penilaian diri positif' },
              {
                ...who,
                kriteria: 'Penerimaan penilaian positif terhadap diri sendiri',
              },
              { ...who, kriteria: 'Postur tubuh menampakkan wajah' },
              { ...who, kriteria: 'Perasaan malu' },
              { ...who, kriteria: 'Perasaan bersalah' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi: 'Monitor verbalisasi merendahkan diri sendiri',
              },
              {
                ...who,
                intervensi:
                  'Monitor tingkat harga diri setiap waktu, sesuai kebutuhan terapeutik',
              },
              {
                ...who,
                intervensi:
                  'Motivasi terlibat dalam vervalisasi positif untuk diri sendiri',
              },
              { ...who, intervensi: 'Diskusikan persepsi negative diri' },
              {
                ...who,
                intervensi:
                  'Jelaskan kepada keluarga pentingnya dukungan dalam perkembangan positif diri pasien',
              },
              {
                ...who,
                intervensi: 'Latih cara berpikir dan berperilaku positif',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0102',
          diagnosis: 'Risiko Harga Diri Rendah Situasional',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Penilaian diri positif' },
              {
                ...who,
                kriteria: 'Penerimaan penilaian positif terhadap diri sendiri',
              },
              { ...who, kriteria: 'Postur tubuh menampakkan wajah' },
              { ...who, kriteria: 'Perasaan malu' },
              { ...who, kriteria: 'Perasaan bersalah' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi berbagai peran dan periodetransisi sesuai tingkat perkembangan',
              },
              {
                ...who,
                intervensi: 'Identifikasi peran yang ada dalam keluarga',
              },
              {
                ...who,
                intervensi: 'Identifikasi adanya peran yang tidak terpenuhi',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi adaptasi peran keluarga terhadap perubahan peran yang tidak diinginkan',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi bermain peran dalam mengantisipaso reaksi orang lain terhadap perilaku',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi diskusi perubahan peran anak terhadap bayi baru lahir, jika perlu',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi diskusi tentang peran orangtua, jika perlu',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi diskusi harapan adaptasi peran saat anak meninggalkan rumah, jika perlu',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi diskusi harapan dengan keluarga dalam peran timbal balik',
              },
              {
                ...who,
                intervensi:
                  'Diskusikan perilaku yang di butuhkan untuk pengembangan peran',
              },
              {
                ...who,
                intervensi:
                  'Diskusikan perubahan peran yang di perlukan akibat penyakit atau ketidakmampuan',
              },
              {
                ...who,
                intervensi:
                  'Diskusikan perubahan peran dalam menerima ketergantungan orang tua',
              },
              {
                ...who,
                intervensi:
                  'Diskusikan strategi positif untuk mengelola perubahan peran',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0103',
          diagnosis: 'Risiko Ketidakberdayaan',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Pernyataan mampu melaksanakan aktivitas' },
              { ...who, kriteria: 'Pernyataan frustasi' },
              { ...who, kriteria: 'Ketergantungan pada orang lain' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi harapan pasien dan keluarga dalam pencapaian hidup.',
              },
              {
                ...who,
                intervensi:
                  'Sadarkan bahwa kondisi yang dialami memiliki nilai penting',
              },
              {
                ...who,
                intervensi:
                  'Pandu mengingat Kembali kenangan yang menyenangkan',
              },
              {
                ...who,
                intervensi: 'Libatkan pasien secara aktif dalam perawatan',
              },
              {
                ...who,
                intervensi:
                  'Kembangkan rencana perawatan yang melibatkan tingkat pencapaian tujuan sederhana sampai dengan kompleks',
              },
              {
                ...who,
                intervensi:
                  'Berikan kesempatan kepada pasien dan keluarga terlibat dengan dukungan kelompok',
              },
              {
                ...who,
                intervensi:
                  'Ciptakan linkungan yang memudahkan mempraktikan kebutuhan spiritual',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan mengungkapkan perasaan terhadap kondisi dengan realistis',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan mempertahankan hubungan (mis: menyebutkan nama orang yang kita cintai)',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan mempertahankan hubungan terapeutik dengan orang lain',
              },
              {
                ...who,
                intervensi: 'Latih menyusun tujuan yang sesuai dengan harapan',
              },
              { ...who, intervensi: 'Latih cara mengembangkan spiritual diri' },
              {
                ...who,
                intervensi:
                  'Latih cara mengenang dan menikmati masa lalu (mis: prestasi, pengalaman)',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0104',
          diagnosis: 'Sindrom Pasca Trauma',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Verbalisasi harapan yang positif' },
              {
                ...who,
                kriteria: 'Mengungkapkan strategi koping yang efektif',
              },
              { ...who, kriteria: 'Verbalisasi perasaan' },
              { ...who, kriteria: 'Menunjukan harga diri yang positif' },
              { ...who, kriteria: 'Mengambil tanggung jawab' },
              { ...who, kriteria: 'Mencari dukungan emosional' },
              {
                ...who,
                kriteria: 'Menganggap kesulitan sebagai dari tantangan',
              },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              { ...who, intervensi: 'Identifikasi kehilangan yang di hadapi' },
              {
                ...who,
                intervensi: 'Identifikasi proses berduka yang dialami',
              },
              {
                ...who,
                intervensi:
                  'Indentifikasi sifat keterikatan pada benda yang hilang atau orang yang meninggal',
              },
              {
                ...who,
                intervensi: 'Identifikasi reaksi awal terhadap kehilangan',
              },
              { ...who, intervensi: 'Tunjukan sikap menerima dan empati' },
              {
                ...who,
                intervensi:
                  'Motivasi agar mau mengungkapkan perasaan kehilangan',
              },
              {
                ...who,
                intervensi:
                  'Motivasi untuk menguatkan dukungan keluarga atau orang terdekat',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi melakukan kebiasaan sesuai dengan budaya, agama dan norma sosial',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi mengekspresikan perasaan dengan cara yang nyaman (mis: membaca buku, menulus, menggambar dan bermain)',
              },
              {
                ...who,
                intervensi: 'Diskusikan strategi koping yang dapat di gunakan',
              },
              {
                ...who,
                intervensi:
                  'Jelaskan kepada pasien dan keluarga bahwa sikap mengingkari, marah, tawar menawar,depresi dan menerima adalah wajar dalam menghadapi kehilangan',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan mengidentifikasi ketakutan terbesar pada kehilangan',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan mengekspresikan perasaan tentang kehilangan',
              },
              {
                ...who,
                intervensi: 'Ajarkan melewati proses berduka secara bertahap',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0105',
          diagnosis: 'Waham',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Produktivitas meningkat' },
              { ...who, kriteria: 'Verbalisasi waham menurun' },
              { ...who, kriteria: 'Perilaku waham menurun' },
              { ...who, kriteria: 'Perilaku sesuai realita membaik' },
              { ...who, kriteria: 'Isi pikiran sesuai realita membaik' },
              { ...who, kriteria: 'Pembicaraan membaik' },
              {
                ...who,
                kriteria:
                  'Kemampuan mengenali halusinasi  dan delusi meningkat',
              },
              {
                ...who,
                kriteria:
                  'Kemampuan menahan diri mengikuti halusinasi dan delusi meningkat',
              },
              {
                ...who,
                kriteria:
                  'Kemampuan menjelaskan isi halusinasi dan delusi meningkat',
              },
              {
                ...who,
                kriteria:
                  'Melaporkan penurunan halusinasi dan delusi meningkat',
              },
              { ...who, kriteria: 'Kesesuain afek membaik' },
              {
                ...who,
                kriteria: 'Memandang lingkungan secara akurat membaik',
              },
              {
                ...who,
                kriteria: 'Menunjukan pola berfikir yang logis membaik',
              },
              {
                ...who,
                kriteria:
                  'Menunjukan pemikiran yang berdasarkan kenyataan membaik',
              },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Monitor waham yang isinya membahayakan diri sendiri, orang lain, dan lingkungan',
              },
              {
                ...who,
                intervensi: 'Bina hubungan interpersonal saling percaya',
              },
              {
                ...who,
                intervensi: 'Tunjukkan sikap tidak menghakimi secara konsisten',
              },
              {
                ...who,
                intervensi:
                  'Diskusikan waham dengan berfokus pada perasaan yang mendasari waham (“Anda terlihat seperti sedang merasa ketakutan”)',
              },
              {
                ...who,
                intervensi:
                  'Hindari perdebatan tentang keyakinan yang keliru, nyatakan keraguan sesuai fakta',
              },
              { ...who, intervensi: 'Hindari memperkuat gagasan waham' },
              { ...who, intervensi: 'Sediakan lingkungan aman dan nyaman' },
              {
                ...who,
                intervensi:
                  'Berikan aktivitas rekreasi dan pengalihan sesuai kebutuhan',
              },
              {
                ...who,
                intervensi:
                  'Lakukan intervensi pengontrolan perilaku waham (Mis: limit setting, pembatasan wilayah, pengekangan fisik, atau seklusi)',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan mengungkapkan dan memvalidasi waham (uji realitas) dengan orang yang dipercaya (pemberi asuhan/keluarga)',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan melakukan rutinitas harian secara konsisten',
              },
              { ...who, intervensi: 'Latih manajemen stres' },
              {
                ...who,
                intervensi:
                  'Jelaskan tentang waham serta penyakit terkait (mis: delirium, skizofrenia, atau depresi), cara mengatasi dan obat yang diberikan',
              },
              {
                ...who,
                intervensi:
                  'Hadirkan realita (mis: beri penjelasan alternatif, hindari perdebatan)',
              },
              {
                ...who,
                intervensi:
                  'Atur stimulus sensorik dan lingkungan (mis: kunjungan, pemandangan, suara, pencahayaan, bau, dan sentuhan)',
              },
              {
                ...who,
                intervensi:
                  'Gunakan simbol dalam mengorientasikan lingkungan (mis: tanda, gambar, warna)',
              },
              {
                ...who,
                intervensi: 'Libatkan dalam terapi kelompok orientasi',
              },
              {
                ...who,
                intervensi:
                  'Berikan waktu istirahat dan tidur yang cukup, sesuai kebutuhan',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0106',
          diagnosis: 'Gangguan Tumbuh Kembang',
          diagnosisKeperawatanKriterias: {
            create: [
              {
                ...who,
                kriteria: 'Keterampilan / perilaku sesuai usia meningkat',
              },
              {
                ...who,
                kriteria: 'Kemampuan melakukan perawatan diri meningkat',
              },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi: 'Identifikasi pencapaian tugas perkembangan',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi isyarat perilaku dan fisiologis yang ditunjukkan (Mis: lapar, tidak nyaman)',
              },
              {
                ...who,
                intervensi:
                  'Pertahankan sentuhan seminimal mungkin terutama pada bayi premature',
              },
              {
                ...who,
                intervensi:
                  'Berikan sentuhan yang bersifat gentle dan tidak ragu ragu',
              },
              { ...who, intervensi: 'Minimalkan nyeri' },
              { ...who, intervensi: 'Minimalkan kebisingan ruangan' },
              {
                ...who,
                intervensi:
                  'Pertahankan lingkungan yang mendukung perkembangan optimal',
              },
              {
                ...who,
                intervensi: 'Motivasi anak berinteraksi dengan anak lain',
              },
              {
                ...who,
                intervensi:
                  'Sediakan aktivitas yang memotivasi anak berinteraksi dengan anak lainnya',
              },
              {
                ...who,
                intervensi: 'Fasilitasi anak berbagi dan bergantian/bergilir',
              },
              { ...who, intervensi: 'Pertahankan kenyamanan anak' },
              {
                ...who,
                intervensi:
                  'Fasilitasi anak melatih keterampilan pemenuhankebutuhan secara mandiri (Mis: makan, sikat gigi, cuci tangan, memakai baju)',
              },
              {
                ...who,
                intervensi: 'Bernyanyi bersama anak lagu-lagu yang disukai',
              },
              { ...who, intervensi: 'Bacakan cerita atau dongeng' },
              {
                ...who,
                intervensi:
                  'Dukung partisipas anak disekolah, ekstrakulikuler dan aktivitas komunitas',
              },
              {
                ...who,
                intervensi:
                  'Jelaskan orang tua dan/ atau pengasuh tentang milestone perkembangan anak dan perilaku anak',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan orang tua menyentuh dan menggendong bayinya',
              },
              {
                ...who,
                intervensi: 'Anjurkan orang tua berinteraksi dengan anaknya',
              },
              { ...who, intervensi: 'Ajarkan anak keterampilan berinteraksi' },
              { ...who, intervensi: 'Ajarkan anak dan remaja Teknik asertif' },
              { ...who, intervensi: 'Rujuk untuk konseling, jika perlu' },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0107',
          diagnosis: 'Risiko Gangguan Perkembangan',
          diagnosisKeperawatanKriterias: {
            create: [
              {
                ...who,
                kriteria: 'Keterampilan atau perilaku sesuai usia meningkat',
              },
              {
                ...who,
                kriteria: 'Kemampuan melakukan perawatan diri meningkat',
              },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              { ...who, intervensi: 'Promosi Perkembangan Anak (I.10340)' },
              {
                ...who,
                intervensi:
                  'Identifikasi kebutuhan khusus anak dan kemampuan adaptasi anak',
              },
              {
                ...who,
                intervensi: 'Fasilitasi hubungan anak dengan teman sebaya',
              },
              {
                ...who,
                intervensi: 'Dukung anak berinteraksi dengan anak lain',
              },
              {
                ...who,
                intervensi:
                  'Dukung anak mengekspresikan perasaanya secara positif',
              },
              {
                ...who,
                intervensi:
                  'Dukung anak dalam bermimpu atau berfantasi sewajarnya',
              },
              {
                ...who,
                intervensi:
                  'Dukung partisipasi anak di sekolah, ekstrakulikuler dan aktivitas komunitas',
              },
              {
                ...who,
                intervensi: 'Berikan mainan yang sesuai dengan usia anak',
              },
              {
                ...who,
                intervensi:
                  'Bernyanyi Bersama anak lagu-lagu yang disukai anak',
              },
              { ...who, intervensi: 'Bacakan cerita / dongeng untuk anak' },
              {
                ...who,
                intervensi: 'Diskusikan Bersama remaja tujuan dan harapannya',
              },
              {
                ...who,
                intervensi:
                  'Sediakan kesempatan dan alat – alat untuk menggambar, melukis, dan mewarnai',
              },
              { ...who, intervensi: 'Sedikama mainan berupa puzzle dan maze' },
              {
                ...who,
                intervensi:
                  'Jelaskan nama – nama benda objek yang ada dilingkungan sekitar',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan pengasuh milestones perkembangan dan perilaku yang dibentuk',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan sikap kooperatif, bukan kompetisi diantara anak',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan anak cara meminta bantuan dari anak lain, jika perlu',
              },
              {
                ...who,
                intervensi: 'Ajarkan Teknik asertif pada anak dan remaja',
              },
              {
                ...who,
                intervensi:
                  'Demonstrasikan kegiatan yang meningkatkan perkembang pada orang tua dan/ atau pengasuh',
              },
              { ...who, intervensi: 'Rujuk untuk konseling, jika perlu' },
              { ...who, intervensi: 'Promosi Perkembangan Remaja (I.10341)' },
              { ...who, intervensi: 'Identifikasi tahap perkembangan remaja' },
              {
                ...who,
                intervensi:
                  'Sediakan bimbingan dan konseling Kesehatan remajapada remaja dan keluarga / orang tua / pengasuh',
              },
              {
                ...who,
                intervensi: 'Tingkatkan personal hygiene dan penampilan diri',
              },
              {
                ...who,
                intervensi:
                  'Dukung partisipasi dalam olahraga yang aman secara teratur',
              },
              {
                ...who,
                intervensi: 'Fasilitasi kemampuan pembuatan keputusan',
              },
              { ...who, intervensi: 'Dukung keterampilan komunikasi' },
              { ...who, intervensi: 'Dukung keterampilan sikap asertif' },
              {
                ...who,
                intervensi:
                  'Fasilitasi rasa tanggung jawab pada diri dan orang lain',
              },
              {
                ...who,
                intervensi:
                  'Dukung respons anti – kekerasan dalam menyelesaikan konflik',
              },
              {
                ...who,
                intervensi:
                  'Dukung perkembangan dan pertahankan hubungan sosial',
              },
              { ...who, intervensi: 'Dukung aktivitas ekstrakulikuler' },
              { ...who, intervensi: 'Jelaksan perkembangan normal remaja' },
              {
                ...who,
                intervensi:
                  'Ajarkan untuk mengenali masalah Kesehatan dan penyimpangan pada remaja (mis: anemia, masalah Kesehatan gigi, kematangan seksual adnormal, alcohol, rokok, penyalahgunaan obat-obatan, gangguan citra tubuh, harga diri rendah)',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan strategi pencegahan penyalahgunaan obat, alcohol, dan rokok',
              },
              {
                ...who,
                intervensi:
                  'Rujuk untuk konseling atau hipnoterapi, jika perlu',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0108',
          diagnosis: 'Risiko Gangguan Pertumbuhan',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Berat badan sesuai dengan usia' },
              { ...who, kriteria: 'Panjang/tinggi badan sesuai usia' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi: 'Identifikasi target populasi skrining kesehatan',
              },
              {
                ...who,
                intervensi: 'Lakukan informed consent skrining Kesehatan',
              },
              {
                ...who,
                intervensi:
                  'Sediakan akses layanan skrining (mis: waktu dan tempat)',
              },
              { ...who, intervensi: 'Jadwalkan waktu skrining kesehatan' },
              {
                ...who,
                intervensi: 'Gunakan instrument skrining yang valid dan akurat',
              },
              {
                ...who,
                intervensi:
                  'Sediakan lingkungan yang nyaman selama prosedur skrining Kesehatan',
              },
              {
                ...who,
                intervensi:
                  'Lakukan anamnesa, Riwayat Kesehatan, faktor risiko, pengobatan, jika perlu',
              },
              {
                ...who,
                intervensi: 'Lakukan pemeriksaan fisik, sesuai indikasi',
              },
              {
                ...who,
                intervensi: 'Jelaskan tujuan dan prosedur skrining kesehatan',
              },
              { ...who, intervensi: 'Informasi hasil skrining kesehatan' },
              {
                ...who,
                intervensi:
                  'Rujuk untuk pemeriksaan diagnostic lanjut (mis: pap smear, mamografi, prostat, EKG), jika perlu',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0109',
          diagnosis: 'Defisit Perawatan Diri',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Kemampuan mandi meningkat' },
              { ...who, kriteria: 'Kemampuan mengenakan pakaian meningkat' },
              { ...who, kriteria: 'Kemampuan makan meningkat' },
              { ...who, kriteria: 'Kemampuan ke toilet (BAB/BAK) meningkat' },
              {
                ...who,
                kriteria:
                  'Verbalisasi keinginan melakukan perawatan diri meningkat',
              },
              { ...who, kriteria: 'Minat melakukan perawatan diri meningkat' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi kebiasaan aktivitas perawatan diri sesuai usia',
              },
              { ...who, intervensi: 'Monitor tingkat kemandirian' },
              {
                ...who,
                intervensi:
                  'Identifikasi kebutuhan alat bantu kebersihan diri, berpakaian, berhias, dan makan',
              },
              {
                ...who,
                intervensi:
                  'Sediakan lingkungan yang terapeutik (mis: suasana hangat, rileks, privasi)',
              },
              {
                ...who,
                intervensi:
                  'Siapkan keperluan pribadi (mis: parfum sikat gigi, dan sabun mandi)',
              },
              {
                ...who,
                intervensi:
                  'Dampingi dalam melakukan perawatan diri sampai mandiri',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi kemandirian, bantu jika tidak mampu melakukan perawatan diri',
              },
              { ...who, intervensi: 'Jadwalkan rutinitas perawatan diri' },
              {
                ...who,
                intervensi:
                  'Anjurkan melakukan perawatan diri secara konsistensesuai kemampuan',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0110',
          diagnosis: 'Defisit Kesehatan Komunitas',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Ketersediaan program promosi kesehatan' },
              { ...who, kriteria: 'Ketersediaan program proteksi kesehatan' },
              {
                ...who,
                kriteria: 'Partisipasi dalam program Kesehatan komunitas',
              },
              { ...who, kriteria: 'Keikutsertaan asuransi/jaminan Kesehatan' },
              {
                ...who,
                kriteria: 'Kepatuhan terhadap standar Kesehatan lingkungan',
              },
              { ...who, kriteria: 'Sistem Survailent Kesehatan' },
              { ...who, kriteria: 'Pemantauan standar Kesehatan komunitas' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi masalah atau isu Kesehatan dan prioritasnya',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi potensi atau asset dalam masyarakat terkait isu yang dihadapi',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi kekuatan dan partner dalam pengembangan kesehatan',
              },
              {
                ...who,
                intervensi: 'Identifikasi pemimpin/tokoh dalam masyarakat',
              },
              {
                ...who,
                intervensi:
                  'Berikan kesempatan kepada setiap anggota masyarakat untuk berpartisipasi sesuai asset yang dimiliki',
              },
              {
                ...who,
                intervensi:
                  'Libatkan anggota masyarakat untuk meningkatkan kesadaran terhadap isu Kesehatan mengembangkan rencana kerja',
              },
              {
                ...who,
                intervensi:
                  'Libatkan masyarakat dalam proses perencanaan dan implentasi serta revisinya',
              },
              {
                ...who,
                intervensi:
                  'Libatkan anggota masyarakat dalam mengembangkan jaringan kesehatan',
              },
              {
                ...who,
                intervensi:
                  'Pertahankan komunikasi yang terbuka dengan anggota masyarakat dan pihak pihak yang terlibat',
              },
              {
                ...who,
                intervensi:
                  'Perkuat komunikasi antara individu dan kelompok untuk bermusyawarah terkait daya Tarik yang sama',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi srtuktur organisasi untuk meningkatkan kemampuan berkomunikasi dan berorganisasi',
              },
              {
                ...who,
                intervensi: 'Kembangkan strategi dalam manajemen konflik',
              },
              {
                ...who,
                intervensi:
                  'Persatukan anggota masyarakat dengan cita cita komunitas yang sama',
              },
              {
                ...who,
                intervensi:
                  'Kembangkan mekanisme keterlibatan tatanan local,regional, bahkan nasional terkait isu Kesehatan komunitas',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0111',
          diagnosis: 'Defisit Pengetahuan',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Perilaku sesuai anjuran' },
              { ...who, kriteria: 'Verbalisasi minat dalam belajar' },
              {
                ...who,
                kriteria:
                  'Kemampuan menjelaskan pengetahuan tentang suatu topik',
              },
              {
                ...who,
                kriteria:
                  'Menggambarkan pengalaman sebelumnya yang sesuai dengan topik',
              },
              { ...who, kriteria: 'Perilaku sesuai dengan pengetahuan' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi Kesiapan dan kemampuan menerima informasi',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi faktor-faktor yang dapat meningkatkan dan menurunkan motivasi perilaku hidup bersih dan sehat',
              },
              {
                ...who,
                intervensi: 'Sediakan materi dan media Pendidikan kesehatan',
              },
              {
                ...who,
                intervensi: 'Jadwalkan Pendidikan Kesehatan sesuai kesepakatan',
              },
              { ...who, intervensi: 'Berikan kesempatan untuk bertanya' },
              {
                ...who,
                intervensi:
                  'Jelaskan factor resiko yang dapat mempengaruhi kesehatan',
              },
              { ...who, intervensi: 'Ajarkan perilaku hidup bersih dan sehat' },
              {
                ...who,
                intervensi:
                  'Ajarkan strategi yang dapat digunakan untuk meningkatkan perilaku hidup bersih dan sehat',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0112',
          diagnosis: 'Kesiapan Peningkatan Manajemen Kesehatan',
          diagnosisKeperawatanKriterias: {
            create: [
              {
                ...who,
                kriteria: 'Melakukan Tindakan untuk mengurangi factor resiko',
              },
              { ...who, kriteria: 'Menerapkan program perawatan' },
              {
                ...who,
                kriteria:
                  'Aktivitas hidup sehari hari efektif memenuhi tujuan kesehatan',
              },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi metode penyelesaian masalah yang biasa digunakan',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi kemungkinan perkembangan atau krisis situasional yang akan terjadi serta dampaknya pada individu dan keluarga.',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi memutuskan bagaimana masalah akan diselesaikan',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi memutuskan siapa yang akan dilibatkan dalam menyelesaikan masalah.',
              },
              {
                ...who,
                intervensi:
                  'Gunakan contoh kasus untuk meningkatkan keterampilan menyelesaikan masalah.',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi mengidentifikasi sumber daya yang tersedia',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi menyeseuaikan diri dengan perubahan peran',
              },
              {
                ...who,
                intervensi:
                  'Jadwalkan kunjungan pada setiap tahap perkembangan atau sesuai kebutuhan',
              },
              {
                ...who,
                intervensi:
                  'Jadwalkan tindak lanjut untuk memantau atau memberi dukungan',
              },
              {
                ...who,
                intervensi: 'Berikan nomor kontak yang dapat di hubungi',
              },
              { ...who, intervensi: 'Lihatkan keluarga dan pihak terkait' },
              {
                ...who,
                intervensi: 'Berikan referensi baik cetak ataupun elektronik',
              },
              {
                ...who,
                intervensi: 'Jelaskan perekembangan dan perilaku normal',
              },
              {
                ...who,
                intervensi:
                  'Informasikan harapan yang realisasi terkait perilaku pasien',
              },
              {
                ...who,
                intervensi:
                  'Latih Teknik koping yang di butuhkan untyuk mengatasi perkembangan atau krisis situasional',
              },
              {
                ...who,
                intervensi: 'Rujuk ke Lembaga pelayanan masyarakat,jika perlu',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0113',
          diagnosis: 'Kesiapan Peningkatan Pengetahuan',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Komunikasi jelas sesuai usia' },
              { ...who, kriteria: 'Pemahaman makna situasi' },
              { ...who, kriteria: 'Kemampuan membuat keputusan' },
              { ...who, kriteria: 'Perhatian' },
              { ...who, kriteria: 'Konsertasi' },
              { ...who, kriteria: 'Orientasi kognitif' },
              { ...who, kriteria: 'Memori segera' },
              { ...who, kriteria: 'Memori saat ini' },
              { ...who, kriteria: 'Memori jangka Panjang' },
              { ...who, kriteria: 'Proses informasi' },
              { ...who, kriteria: 'Pertimbangan alternatif saat memutuskan' },
              { ...who, kriteria: 'Kemampuan berhitung' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi: 'Identifikasi infomasi yang akan di sampaikan',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi pemahaman tentang kondisi Kesehatan saat ini',
              },
              {
                ...who,
                intervensi: 'Identifikasi kesiapan menerima informasi',
              },
              {
                ...who,
                intervensi:
                  'Lakukan penguatan potensi pasien dan keliuarga untuk menerima informasi',
              },
              {
                ...who,
                intervensi:
                  'Lakukan pengambil keputusan dalam keluarga untuk menerima informasi',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi mengenali kondisi tubuh yang membutuhkan layanan keperawatan',
              },
              {
                ...who,
                intervensi:
                  'Dahulukan menyampaikan informasi baik(positip) sebelum menyampaikan informasi yang tidak baik(negatip)',
              },
              {
                ...who,
                intervensi:
                  'Berikan nomor kontak yang dapat di hubungi jika pasien membutuhkan bantuan',
              },
              {
                ...who,
                intervensi:
                  'Catat identitas dan nomor kontak pasien untuk mengingatkan atau follow up kondisi pasien',
              },
              {
                ...who,
                intervensi: 'Fasilitasi akses pelayanan pada saat di butuhkan',
              },
              {
                ...who,
                intervensi:
                  'Berikan informasi berupa alur,leaflet atau gambar untuk memudahkan pasien mendapatkan informasi Kesehatan',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan keluarga mendampingi pasien selama fase akut, progresif atau terminal, jika memungkinkan',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0114',
          diagnosis: 'Ketidakpatuhan',
          diagnosisKeperawatanKriterias: {
            create: [
              {
                ...who,
                kriteria:
                  'Verbalisasi kemauan mematuhi program perawatan atau pengobatan meningkat',
              },
              { ...who, kriteria: 'Verbalisasi mengikuti anjuran meningkat' },
              {
                ...who,
                kriteria:
                  'Perilaku mengikuti program perawatan/pengobatan meningkat',
              },
              { ...who, kriteria: 'Perilaku menjalankan anjuran meningkat' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Buat komitmen menjalani program pengobatan dengan baik',
              },
              {
                ...who,
                intervensi:
                  'Buat jadwal pendampingan keluarga untuk bergantian menemani pasien selama menjalani program pengobatan, jika perlu',
              },
              {
                ...who,
                intervensi:
                  'Dokumentasikan aktivitas selama menjalani program pengobatan',
              },
              {
                ...who,
                intervensi:
                  'Diskusikan hal-hal yang dapat mendukung atau menghambat berjalannya program pengobatan',
              },
              {
                ...who,
                intervensi:
                  'Informasikan program pengobatan yang harus dijalani',
              },
              {
                ...who,
                intervensi:
                  'Berikan kesempatan merasakan memiliki tanggung jawab',
              },
              {
                ...who,
                intervensi:
                  'Tingkatkan rasa tanggung jawab atas perilaku sendiri',
              },
              {
                ...who,
                intervensi:
                  'Hindari berdebat atau tawar menawar tentang perannya di ruang perawatan',
              },
              {
                ...who,
                intervensi: 'Anjurkan menyadari bahwa setiap orang unik',
              },
              {
                ...who,
                intervensi: 'Anjurkan mengidentifikasi perasaan bersalah',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi kebutuhan dan keinginan terhadap dukungan sosial',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0115',
          diagnosis: 'Manajemen Kesehatan Keluarga Tidak Efektif',
          diagnosisKeperawatanKriterias: {
            create: [
              {
                ...who,
                kriteria:
                  'Kemampuan menjelaskan masalah kesehatan yang dialami meningkat',
              },
              {
                ...who,
                kriteria:
                  'Aktivitas keluarga mengatasi masalah kesehatan yang tepat meningkat',
              },
              {
                ...who,
                kriteria: 'Tindakan untuk mengurangi faktor resiko meningkat',
              },
              {
                ...who,
                kriteria:
                  'Verbalisasi kesulitan menjalankan perawatan yang ditetapkan menurun',
              },
              { ...who, kriteria: 'Gejala penyakit anggota keluarga menurun' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi respons emosional terhadap kondisi saat ini',
              },
              {
                ...who,
                intervensi:
                  'Dengarkan masalah, perasaan, dan pertanyaan keluarga',
              },
              {
                ...who,
                intervensi:
                  'Terima nilai-nilai keluarga dengan cara yang tidak menghakimi',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi pengungkapan perasaan antara pasien dan keluarga atau antar anggota keluarga',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi Tindakan yang dapat dilakukan keluarga',
              },
              {
                ...who,
                intervensi:
                  'Motivasi pengembangan sikap dan emosi yang mendukung upaya Kesehatan',
              },
              {
                ...who,
                intervensi:
                  'Ciptakan suasana rumah yang sehat dan mendukung perkembangan kepribadian anggota keluarga',
              },
              {
                ...who,
                intervensi: 'Bina hubungan saling percaya dengan keluarga',
              },
              {
                ...who,
                intervensi: 'Dengarkan keinginan dan perasaan keluarga',
              },
              {
                ...who,
                intervensi:
                  'Dukung mekanisme koping adaptif yang digunakan keluarga',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0116',
          diagnosis: 'Manajemen Kesehatan Tidak Efektif',
          diagnosisKeperawatanKriterias: {
            create: [
              {
                ...who,
                kriteria:
                  'Melakukan tindakan untuk mengurangi faktor resiko meningkat',
              },
              { ...who, kriteria: 'Menetapkan program keperawatan meningkat' },
              {
                ...who,
                kriteria:
                  'Aktivitas hidup sehari-hari efektif memenuhi tujuan kesehatan meningkat',
              },
              {
                ...who,
                kriteria:
                  'Verbalisasi kesulitan dalam menjalani program perawatan/pengobatan menurun',
              },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi persepsi mengenai masalah dan informasi yang memicu konflik',
              },
              {
                ...who,
                intervensi:
                  'Motivasi mengungkapkan tujuan perawatan yang diharapkan',
              },
              {
                ...who,
                intervensi:
                  'Tingkatkan rasa tanggung jawab atas perilaku sendiri',
              },
              {
                ...who,
                intervensi:
                  'Berikan penguatan dan umpan balik positif jika melaksanakan tanggung jawab atau mengubah perilaku',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0117',
          diagnosis: 'Pemeliharaan Kesehatan Tidak Efektif',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Menunjukan perilaku adaptif meningkat' },
              {
                ...who,
                kriteria: 'Menunjukan pemahaman perilaku sehat meningkat',
              },
              {
                ...who,
                kriteria: 'Kemampuan menjalankan perilaku sehat meningkat',
              },
              { ...who, kriteria: 'Perilaku mencari bantuan meningkat' },
              {
                ...who,
                kriteria:
                  'Menunjukan minat meningkatan perilaku sehat meningkat',
              },
              { ...who, kriteria: 'Memiliki sistem pendukung meningkat' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Diskusikan cara mengamati perilaku (mis: tabel kemajuan perilaku)',
              },
              {
                ...who,
                intervensi:
                  'Tetapkan batas waktu yang dibutuhkan untuk pelaksanaan Tindakan yang realistis',
              },
              {
                ...who,
                intervensi: 'Tetapkan skala pencapaian tujuan, jika perlu',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi memecah tujuan kompleks menjadi langkah kecil yang mudah dilakukan',
              },
              {
                ...who,
                intervensi:
                  'Diskusikan pengembangan rencana untuk memenuhi tujuan',
              },
              {
                ...who,
                intervensi:
                  'Prioritaskan aktivitas yang dapat membantu pencapaian tujuan',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0118',
          diagnosis: 'Gangguan Interaksi Sosial',
          diagnosisKeperawatanKriterias: {
            create: [
              {
                ...who,
                kriteria: 'Perasaan nyaman dengan situasi sosial meningkat',
              },
              {
                ...who,
                kriteria: 'Perasaan mudah menerima mengkomunikasikan perasaan',
              },
              { ...who, kriteria: 'Responsif pada orang lain meningkat' },
              { ...who, kriteria: 'Minat melakukan kontak emosi meningkat' },
              { ...who, kriteria: 'Minat melakukan kontak fisik meningkat' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi penyebab kurangnya keterampilan sosial',
              },
              {
                ...who,
                intervensi: 'Identifikasi focus pelatihan keterampilan sosial',
              },
              {
                ...who,
                intervensi: 'Motivasi untuk berlatih keterampilan sosial',
              },
              {
                ...who,
                intervensi:
                  'Beri umpan balik positif (mis: pujian atau penghargaan) terhadap kemampuan sosialisasi',
              },
              {
                ...who,
                intervensi:
                  'Libatkan keluarga selama Latihan keterampilan sosial',
              },
              {
                ...who,
                intervensi: 'Jelaskan tujuan melatih keterampilan sosial',
              },
              {
                ...who,
                intervensi:
                  'Jelaskan respons dan konsekuensi keterampilan sosial',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan mengungkapkan perasaan akibat masalah yang dialami',
              },
              {
                ...who,
                intervensi: 'Anjurkan mengevaluasi pencapaian setiap interaksi',
              },
              {
                ...who,
                intervensi:
                  'Edukasi keluarga untuk dukungan keterampilan sosial',
              },
              {
                ...who,
                intervensi: 'Latih keterampilan sosial secara bertahap',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0119',
          diagnosis: 'Gangguan Komunikasi Verbal',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Kemampuan berbicara meningkat' },
              { ...who, kriteria: 'Kemampuan mendengar meningkat' },
              { ...who, kriteria: 'Kesesuaian ekspresi wajah/tubuh meningkat' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Monitor kecepatan, tekanan, kuantitias, volume, dan diksi bicara',
              },
              {
                ...who,
                intervensi:
                  'Monitor progress kognitif, anatomis, dan fisiologis yang berkaitan dengan bicara (mis: memori, pendengaran, dan Bahasa)',
              },
              {
                ...who,
                intervensi:
                  'Monitor frustasi, marah, depresi, atau hal lain yang mengganggu bicara',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi perilaku emosional dan fisik sebagai bentuk komunikasi',
              },
              {
                ...who,
                intervensi:
                  'Gunakan metode komunikasi alternatif (mis: menulis, mata berkedip, papan komunikasi dengan gambar dan huruf, isyarat tangan, dan komputer)',
              },
              {
                ...who,
                intervensi:
                  'Sesuaikan gaya komunikasi dengan kebutuhan (mis: berdiri di depan pasien, dengarkan dengan seksama, tunjukkan satu gagasan atau pemikiran sekaligus, bicaralah dengan perlahan sambal menghindari teriakan, gunakan komunikasi tertulis,atau meminta bantuan k',
              },
              {
                ...who,
                intervensi: 'Modifikasi lingkungan untuk meminimalkan bantuan',
              },
              { ...who, intervensi: 'Ulangi apa yang disampaikan pasien' },
              { ...who, intervensi: 'Berikan dukungan psikologis' },
              { ...who, intervensi: 'Gunakan juru bicara, jika perlu' },
              { ...who, intervensi: 'Anjurkan berbicara perlahan' },
              {
                ...who,
                intervensi:
                  'Ajarkan pasien dan keluarga proses kognitif, anatomis, dan fisiologis yang berhubungan dengan kemampuan bicara',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0120',
          diagnosis: 'Gangguan Proses Keluarga',
          diagnosisKeperawatanKriterias: {
            create: [
              {
                ...who,
                kriteria: 'Adaptasi keluarga terhadap situasi meningkat',
              },
              {
                ...who,
                kriteria:
                  'Kemampuan keluarga berkomunikasi secara terbuka diantara anggota keluarga meningkat',
              },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi respons emosional terhadap kondisi saat ini',
              },
              {
                ...who,
                intervensi: 'Identifikasi beban prognosis secara psikologis',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi pemahaman tentang keputusan perawatan setelah pulang',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi kesesuaian antara harapan pasien, keluarga, dan tenaga kesehatan',
              },
              {
                ...who,
                intervensi:
                  'Dengarkan masalah, perasaan, dan pertanyaan keluarga',
              },
              {
                ...who,
                intervensi:
                  'Terima nilai-nilai keluarga dengan cara yang tidak menghakimi',
              },
              { ...who, intervensi: 'Diskusikan rencana medis dan perawatan' },
              {
                ...who,
                intervensi:
                  'Fasilitasi pengungkapan perasaan antara pasien dan keluarga atau antar anggota keluarga',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi pengambilan keputusan dalam merencanakan perawatan jangka Panjang, jika perlu',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi anggota keluarga dalam mengidentifikasi dan menyelesaikan konflik nilai',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi pemenuhan kebutuhan dasar keluarga (mis: tempat tinggal, makanan, pakaian)',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi anggota keluarga melalui proses kematian dan berduka, jika perlu',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi memperoleh pengetahuan, keterampilan, dan peralatan yang diperlukan untuk mempertahankan keputusan perawatan pasien',
              },
              {
                ...who,
                intervensi:
                  'Bersikap sebagai pengganti keluarga untuk menenangkan pasien dan/atau jika keluarga tidak dapat memberikan perawatan',
              },
              {
                ...who,
                intervensi:
                  'Hargai dan dukung mekanisme koping adaptif yang digunakan',
              },
              {
                ...who,
                intervensi:
                  'Berikan kesempatan berkunjung bagi anggota keluarga',
              },
              {
                ...who,
                intervensi: 'Informasikan kemajuan pasien secara berkala',
              },
              {
                ...who,
                intervensi:
                  'Informasikan fasilitas perawatan Kesehatan yang tersedia',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0121',
          diagnosis: 'Isoloasi Sosial',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Kriteria Evaluasi' },
              { ...who, kriteria: 'Tanda dan gejala isolasi sosial' },
              { ...who, kriteria: 'Kemampuan dalam berinteraksi' },
              { ...who, kriteria: 'Kemampuan dalam mengungkapkan perasaanya' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Intervensi keperawatan dengan pendekatan strategi pelaksanaan (SP) pada pasien',
              },
              { ...who, intervensi: 'Bina hubungan saling percaya' },
              {
                ...who,
                intervensi: 'Bantu pasien menyadari masalah isolasi sosial',
              },
              {
                ...who,
                intervensi:
                  'Latih bercakap cakap secara bertahap antara pasien dan anggota keluarga',
              },
              { ...who, intervensi: 'Tanyakan perasaan' },
              { ...who, intervensi: 'Beri pujian, melatih cara berbicara' },
              { ...who, intervensi: 'Validasi kemampuan berkenalan' },
              {
                ...who,
                intervensi: 'Evaluasi tanda dan gejala isolasi social',
              },
              {
                ...who,
                intervensi:
                  'Intervensi Keperawatan dengan pendekatan Strategi Pelaksanaan (SP) pada keluarga',
              },
              {
                ...who,
                intervensi:
                  'Diskusikan masalah yang dirasakan keluarga dalam merawat pasien',
              },
              {
                ...who,
                intervensi:
                  'Jelaskan pengertian, tanda dan gejala isolasi social yang dialami pasien beserta prosesnya.',
              },
              {
                ...who,
                intervensi:
                  'Berikan kesempatan keluarga untuk memutuskan perawatan pasien',
              },
              {
                ...who,
                intervensi:
                  'Jelaskan cara merawat isolasi social dan melatih dua cara merawat : berkenalan dan melakukan kegiatan harian.',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0122',
          diagnosis: 'Keseiapan Peningkatan Menjadi Orang Tua',
          diagnosisKeperawatanKriterias: {
            create: [
              {
                ...who,
                kriteria:
                  'Mampu mengekspresikan keinginan untuk meningkatkan peran menjadi orang tua',
              },
              {
                ...who,
                kriteria:
                  'Tampak adanya dukungan emosi dan pengertian pada anak atau anggota keluarga',
              },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi kemungkinan krisis situasi atau masalah perkembangan serta dampak pada kehidupan pasien dan keluarga',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi metode pemecahan masalah yang sering digunakan keluarga',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi dalam memutus strategi pemecahan masalah yang dihadapi keluarga',
              },
              {
                ...who,
                intervensi:
                  'Libatkan seluruh anggota keluarga dalam upaya antisipasi masalah Kesehatan jika memungkinkan.',
              },
              {
                ...who,
                intervensi:
                  'Buat jadwal aktivitas Bersama keluarga terkait Kesehatan yang dihadapi',
              },
              {
                ...who,
                intervensi:
                  'Jelaskan perkembangan dan perilaku yang normal pada keluarga',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi keluarga risiko tinggo dalam proses tindak lanjut',
              },
              {
                ...who,
                intervensi:
                  'Monitor status Kesehatan anak dan status iminisasi anak',
              },
              {
                ...who,
                intervensi:
                  'Dukung ibu menerima dan melakukan perawatan prenatal secara teratur dan sedini mungkin',
              },
              {
                ...who,
                intervensi:
                  'Lakukan kunjungan rumah sesuai dengan tingkat risiko',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi orang tua dalam memiliki harapan yang realistis sesuai tingkat kemampuan dan perkembangan anak',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi orang tua dalam mengembangkan dan memelihara system dukungan social',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi orang tua dalam menerima transisi peran',
              },
              {
                ...who,
                intervensi:
                  'Berikan bimbingan antisipasi yang diperlukan sesuai dengan tahapan usia perkembangan anak',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi orang tua dalam mendapatkan dukungan dan berpartisipasi dalam paret group programs',
              },
              { ...who, intervensi: 'Fasilitasi penggunaan kontrasepsi' },
              {
                ...who,
                intervensi:
                  'Kerjasama dengan tenaga Kesehatan terkait lainya jika perlu',
              },
              {
                ...who,
                intervensi: 'Ajarkan orang tua untuk menanggapi isyarat bayi',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0123',
          diagnosis: 'Kesiapan Peningkatan Proses Keluarga',
          diagnosisKeperawatanKriterias: {
            create: [
              {
                ...who,
                kriteria:
                  'Mengekspresikan keinginan untuk meningkatkan dinamika keluarga',
              },
              {
                ...who,
                kriteria:
                  'Menunjukan fungsi keluarga dalam memenuhi kebutuhab fisik, social, dan psikologis anggota keluarga',
              },
              {
                ...who,
                kriteria:
                  'Menunjukan aktivitas untuk mendukung keselamatan dan pertumbuhan anggota keluarga',
              },
              {
                ...who,
                kriteria:
                  'Peran keluarga fleksbel dan tepat dengan tahap perkembangan',
              },
              {
                ...who,
                kriteria: 'Terlihat adanya respek dengan anggota keluarga',
              },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi: 'Identifikasi pemahaman keluarga terhadap masalah',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi adanya konflik prioritas antar anggota keluarga',
              },
              { ...who, intervensi: 'Identifikasi mekanisme kopiing keluarga' },
              { ...who, intervensi: 'Monitor hubungan antar anggota keluarga' },
              { ...who, intervensi: 'Identifikasi tipe proses keluarga' },
              {
                ...who,
                intervensi:
                  'Identifikasi masalah atau gangguan dalam proses keluarga',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi kebutuhan perawatan mandiri dirumah untuk pasien dan tetap beradaptasi dengan pola hidup keluarga',
              },
              { ...who, intervensi: 'Hargai privasi keluarga' },
              { ...who, intervensi: 'Fasilitasi kunjungan keluarga.' },
              {
                ...who,
                intervensi:
                  'Fasilitasi keluarga melakukan pengambilan keputusan dan pemecahan masalah',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi komunikasi terbuka antara setiap anggota keluarga',
              },
              {
                ...who,
                intervensi:
                  'Pertahankan interaksi yang berkelanjutan dengan anggota keluarga',
              },
              {
                ...who,
                intervensi:
                  'Motivasi anggota keluarga untuk melakukan aktivitas Bersama seperti makan Bersama, diskusi Bersama keluarga',
              },
              {
                ...who,
                intervensi:
                  'Susun jadwal aktivitas perawatan mandiri dirumah untuk mengurangi gangguan rutinitas keluarga',
              },
              {
                ...who,
                intervensi:
                  'Informasikan kondisi pasien secara berkala kepada keluarga',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan anggota keluarga mempertahankan keharmonisan keluarga',
              },
              {
                ...who,
                intervensi:
                  'Jelaskan strategi mengembalikan kehidupan keluarga yang normal kepala anggota keluarga',
              },
              {
                ...who,
                intervensi: 'Diskusi dukungan social dari sekitar keluarga',
              },
              {
                ...who,
                intervensi:
                  'Latih keluarga menajemen waktu jika perawatan dirumah dibutuhkan',
              },
              {
                ...who,
                intervensi:
                  'Latih keluarga menajemen waktu jika perawatan dirumah dibutuhkan',
              },
              { ...who, intervensi: 'Rujuk untuk terapi keluarga, jika perlu' },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0124',
          diagnosis: 'Ketegangan Peran Pemberi Asuhan',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Kemampuan memberi asuhan meningkat' },
              { ...who, kriteria: 'Kemampuan merawat pasien meningkat' },
              { ...who, kriteria: 'Kekhawatiran dirawat kembali menurun' },
              { ...who, kriteria: 'Kekhawatiran kelanjutan perawatan menurun' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi pemahaman dan kesiapan peran pengasuh.',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi sumber dukungan dan kebutuhan istirahat pengasuh.',
              },
              {
                ...who,
                intervensi:
                  'Berikan dukungan pada pengasuh selama pasien mengalami kemunduran.',
              },
              {
                ...who,
                intervensi:
                  'Dukung keterbatasan pengasuh dan diskusikan dengan pasien.',
              },
              { ...who, intervensi: 'Fasilitasi pengasuh untuk bertanya.' },
              {
                ...who,
                intervensi:
                  'Jelaskan dampak ketergantungan anak pada pengasuh.',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan pengasuh mengeksplorasi kekuatan dan kelemahannya.',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan pengasuh cara memberikan dukungan perawatan diri (mis: mandi, BAB/BAK, berpakaian/berhias, makan/minum).',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0125',
          diagnosis: 'Penampilan Peran Tidak Efektif',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Verbalisasi harapan terpenuhi' },
              { ...who, kriteria: 'Verbalisasi kepuasan peran' },
              { ...who, kriteria: 'Adaptasi peran' },
              { ...who, kriteria: 'Strategi koping yang efektif' },
              { ...who, kriteria: 'Dukungan sosial' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi berbagai peran dan periode transaksi sesuai tingkat perkembanagan.',
              },
              {
                ...who,
                intervensi: 'Identifikasi peran yang ada dalam keluarga.',
              },
              {
                ...who,
                intervensi: 'Identifikasi adanya peran yang tidak terpenuhi.',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi adaptasi peran keluarga terhadap perubahan peran yang tidak diinginkan.',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi bermain peran dalam mengantisipasi reaksi orang lain terhadap perilaku.',
              },
              {
                ...who,
                intervensi: 'Fasilitasi diskusi tentang perubahan peran.',
              },
              {
                ...who,
                intervensi:
                  'Diskusikan perilaku yang dibutuhkan untuk pengembangan peran.',
              },
              {
                ...who,
                intervensi:
                  'Diskusikan perubahan peran yang diperlukan akibat penyakit atau ketidakmampuan.',
              },
              {
                ...who,
                intervensi:
                  'Diskusikan strategi positif untuk mengelola perubahan peran.',
              },
              {
                ...who,
                intervensi:
                  'Kolaborasi rujuk dalam kelompok untuk mempelajari peran baru.',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0126',
          diagnosis: 'Pencapaian Peran Menjadi Orang Tua',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Bounding attachment meningkat' },
              {
                ...who,
                kriteria: 'Perilaku positif menjadi orang tua meningkat',
              },
              { ...who, kriteria: 'Interaksi perawatan bayi meningkat' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi kemungkinan krisis situasi atau masalah perkembangan serta dampaknya pada kehidupan pasien dan keluarga',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi metode pemecahan masalah yang sering digunakan keluarga',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi dalam memutus strategi pemecahan masalah yang dihadapi keluarga',
              },
              {
                ...who,
                intervensi:
                  'Libatkan seluruh anggota keluarga dalam upaya antisipasi masalah Kesehatan, jika memungkinkan',
              },
              {
                ...who,
                intervensi:
                  'Buat jadwal aktivitas bersama keluarga terkait masalah kesehatan yang dihadapi',
              },
              {
                ...who,
                intervensi:
                  'Jelaskan perkembangan dan perilaku yang normal pada keluarga',
              },
              {
                ...who,
                intervensi:
                  'Kerjasama dengan tenaga Kesehatan terkait lainnya, jika perlu',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0127',
          diagnosis: 'Risiko Gangguan Perlekatan',
          diagnosisKeperawatanKriterias: {
            create: [
              {
                ...who,
                kriteria: 'Mempratikkan perilaku sehat selama hamil meningkat',
              },
              {
                ...who,
                kriteria:
                  'Menyiapkan perlengkapan bayi sebelum kelahiran meningkat',
              },
              {
                ...who,
                kriteria: 'Verbalisasi perasaan positif pada bayi meningkat',
              },
              { ...who, kriteria: 'Mencium bayi meningkat' },
              { ...who, kriteria: 'Tersenyum kepada bayi meningkat' },
              {
                ...who,
                kriteria: 'Melakukan kontak mata dengan bayi meningkat',
              },
              { ...who, kriteria: 'Berbicara kepada bayi meningkat' },
              { ...who, kriteria: 'Bermain dengan bayi meningkat' },
              { ...who, kriteria: 'Berespons pada isyarat bayi meningkat' },
              {
                ...who,
                kriteria: 'Kekhawatiran menjalankan peran orang tua menurun',
              },
              {
                ...who,
                kriteria: 'Konflik hubungan orangtua dan bayi/anak menurun',
              },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Diskusikan dengan ibu masalah selama proses menyusui',
              },
              { ...who, intervensi: 'Ajarkan ibu menopang seluruh tubuh bayi' },
              {
                ...who,
                intervensi:
                  'Identifikasi kemampuan bayi menghisap dan menelan ASI',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi payudara ibu (mis: bengkak, puting lecet, mastitis, nyeri pada payudara)',
              },
              {
                ...who,
                intervensi:
                  'Monitor perlekatan saat menyusui (mis: areola bagian bawah lebih kecil daripada areola bagian atas, mulut bayi terbuka lebar, bibir bayi berputar keluar dan dagu bayi menempel pada payudara ibu)',
              },
              { ...who, intervensi: 'Ajarkan ibu menopang seluruh tubuh bayi' },
              {
                ...who,
                intervensi:
                  'Anjurkan ibu melepas pakaian bagian atas agar bayi dapat menyentuh payudara ibu',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan bayi yang mendekati kearah payudara ibu dari bagian bawah',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan ibu untuk memegang payudara menggunakan jarinya seperti huruf “C” pada posisi jam 12-6 atau 3-9 saat mengarahkan ke mulut bayi',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan ibu untuk menyusui menunggu mulut bayi terbuka lebar sehingga areola bagian bawah dapat masuk sempurna',
              },
              {
                ...who,
                intervensi: 'Ajarkan ibu mengenali tanda bayi siap menyusu',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0128',
          diagnosis: 'Risiko Proses Pengasuhan Tidak Efektif',
          diagnosisKeperawatanKriterias: {
            create: [{ ...who, kriteria: 'Proses pengasuhan efektif' }],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi: 'Identifikasi pemahaman keluarga terhadap masalah',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi adanya konflik prioritas antar anggota keluarga',
              },
              { ...who, intervensi: 'Identifikasi mekanisme koping keluarga' },
              {
                ...who,
                intervensi: 'Monitor hubungan anatara anggota keluarga',
              },
              { ...who, intervensi: 'Hargai privasi keluarga' },
              { ...who, intervensi: 'Fasilitasi kunjungan keluarga' },
              {
                ...who,
                intervensi:
                  'Fasilitasi keluarga melakukan pengambilan keputusan dan',
              },
              { ...who, intervensi: 'pemecahan masalah' },
              {
                ...who,
                intervensi:
                  'Fasilitasi komunikasi terbuka antar setiap anggota keluarga',
              },
              {
                ...who,
                intervensi:
                  'Informasikan kondisi pasien secara berkala kepada keluarga',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan anggota keluarga mempertahankan keharmonisan keluarga',
              },
              { ...who, intervensi: 'Rujuk untuk terapi keluarga, jika perlu' },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0129',
          diagnosis: 'Gangguan Integritas Kulit/Jaringan',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Integritas kulit membaik' },
              { ...who, kriteria: 'Kulit lembab,elastisitas baik' },
              {
                ...who,
                kriteria:
                  'Tidak ada tanda tanda pigmentasi abnormal pada kulit',
              },
              { ...who, kriteria: 'Hidrasi cukup' },
              {
                ...who,
                kriteria: 'Tidak ada tanda tanda perdarahan,kemerahan,hematoma',
              },
              { ...who, kriteria: 'Nekrosis membaik/berkurang' },
              { ...who, kriteria: 'Suhu kulit membaik' },
              { ...who, kriteria: 'Sensasi dan tekstur kulit membaik' },
              { ...who, kriteria: 'Tingkat nyeri berkurang' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi penyebab gangguan integritas kulit (perubahan sirkulasi,perubahan status nutrisi,penurunan kelembaban,suhu lingkungan ekstrem,penurunan mobilitas)',
              },
              {
                ...who,
                intervensi: 'Ubah posisi tiap 2 jam jika tirah baring',
              },
              {
                ...who,
                intervensi:
                  'Lakukan pemijatan pada area penonjolan tulang jika perlu',
              },
              {
                ...who,
                intervensi:
                  'Bersihkan perineal dengan air hangat,terutama selama periode diare',
              },
              {
                ...who,
                intervensi:
                  'Gunakan produk berbahan petroleum atau minyak pada kulit kering',
              },
              {
                ...who,
                intervensi:
                  'Gunakan produk berbahan ringan/alami dan hipoalergik pada kulit sensitive',
              },
              {
                ...who,
                intervensi:
                  'Hindari produk berbahan dasar alcohol pada kulit kering',
              },
              {
                ...who,
                intervensi: 'Anjurkan menggunakan pelembab (lotion,serum)',
              },
              { ...who, intervensi: 'Anjurkan minum air yang cukup' },
              { ...who, intervensi: 'Anjurkan meningkatkan asupan nutrisi' },
              {
                ...who,
                intervensi: 'Anjurkan meningkatkan asupan buah dan sayur',
              },
              {
                ...who,
                intervensi: 'Anjurkan menghindari terpapar suhu ekstrem',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan menggunakan tabir surya SPF minimal 30 saat berada diluar rumah',
              },
              {
                ...who,
                intervensi: 'Anjurkan mandi dan menggunakan sabun secukupnya',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0130',
          diagnosis: 'Hipertermia',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Mengigil menurun' },
              { ...who, kriteria: 'Kulit merah menurun' },
              { ...who, kriteria: 'Pucat menurun' },
              { ...who, kriteria: 'Suhu tubuh membaik' },
              { ...who, kriteria: 'Suhu kulit membaik' },
              { ...who, kriteria: 'Tekanan darah membaik' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              { ...who, intervensi: 'Monitor suhu tubuh' },
              { ...who, intervensi: 'Sediakan lingkungan yang dingin' },
              { ...who, intervensi: 'Longgarkan atau lepaskan pakaian' },
              { ...who, intervensi: 'Basahi dan kipasi permukaan tubuh' },
              { ...who, intervensi: 'Berikan cairan oral' },
              { ...who, intervensi: 'Anjurkan tirah baring' },
              {
                ...who,
                intervensi:
                  'Kolaborasi pemberian cairan dan elektrolit intravena',
              },
              { ...who, intervensi: 'Monitor warna dan suhu kulit' },
              {
                ...who,
                intervensi: 'Tingkatkan asupan cairan dan nutrisi yang adekuat',
              },
              {
                ...who,
                intervensi: 'Kolaborasi pemberian antipiretik jika perlu',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0131',
          diagnosis: 'Hipotermia',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Kriteria Evaluasi' },
              {
                ...who,
                kriteria: 'Suhu tubuh diharapkan normal 36,0 0 C – 37,5 0C',
              },
              { ...who, kriteria: 'Tidak ada tanda gejala hipotermia' },
              { ...who, kriteria: 'Tidak ada tanda tanda penurunan kesadaran' },
              { ...who, kriteria: 'Tidak ada perubahan warna kulit' },
              { ...who, kriteria: 'Pernapasan dalam rentang normal' },
              { ...who, kriteria: 'Sensasi lemah lesu berkurang' },
              { ...who, kriteria: 'Denyut nadi normal' },
              { ...who, kriteria: 'Kemampuan bicara baik' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi tanda gejala dan kemungkinan faktor penyebab hipotermia',
              },
              {
                ...who,
                intervensi: 'Identifikasi situasi yang menyebabkan hipotermia',
              },
              {
                ...who,
                intervensi: 'Monitor suhu dengan alat ukur secara berkala',
              },
              {
                ...who,
                intervensi:
                  'Monitor adanya gejala-gejala yang berhubungan dengan hipotermia (takipnea, menggigil, dan diuresis)',
              },
              { ...who, intervensi: 'Monitor warna kulit' },
              { ...who, intervensi: 'Bebaskan dari lingkungan yang dingin' },
              {
                ...who,
                intervensi:
                  'Berikan pakaian yang hangat, selimut, dan penutup kepala',
              },
              {
                ...who,
                intervensi:
                  'Konsultasi dengan medis jika tanda dan gejala hipotermia tetap ada atau memburuk',
              },
              {
                ...who,
                intervensi: 'Anjurkan monitor suhu secara mandiri dan berkala',
              },
              {
                ...who,
                intervensi: 'Anjurkan monitor intake output secara mandiri',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan mengenal tanda dan gejala hipotermia ( menggigil, warna kulit berubah, diuresis, suhu kurang dari 36,00C )',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan indikasi dan pentingnya pengujian keton urine jika perlu',
              },
              { ...who, intervensi: 'Kolaborasi pemberian cairan intravena' },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0132',
          diagnosis: 'Perilaku Kekerasan',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Ketidakmampuan mengontrol dorongan marah' },
              { ...who, kriteria: 'Kemampuan dalam berinteraksi' },
              { ...who, kriteria: 'Kemampuan dalam mengungkapkan perasaannya' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              { ...who, intervensi: 'Manajemen keselamatan lingkungan' },
              {
                ...who,
                intervensi:
                  'Identifikasi kebutuhan keselamatan (mis: kondisi fisik, fungsi kognitif, dan Riwayat perilaku)',
              },
              {
                ...who,
                intervensi:
                  'Monitor perubahan status keselamatan lingkunganHilangkan bahaya keselamatan lingkungan (mis: fisik, biologi, kimia), jika memungkinkan',
              },
              {
                ...who,
                intervensi:
                  'Modifikasi lingkungan untuk meminimalkan bahaya dan risiko',
              },
              {
                ...who,
                intervensi:
                  'Sediakan alat bantu keamanan lingkungan (mis: commode chair dan pegangan tangan)',
              },
              {
                ...who,
                intervensi:
                  'Gunakan perangkat pelindung (mis: pengekangan fisik, rel samping, pintu terkunci, pagar)',
              },
              {
                ...who,
                intervensi:
                  'Hubungi pihak berwenang sesuai masalah komunitas (mis: puskesmas, polisi, damkar)',
              },
              {
                ...who,
                intervensi: 'Fasilitasi relokasi ke lingkungan yang aman',
              },
              {
                ...who,
                intervensi:
                  'Lakukan program skrining bahaya lingkungan (mis: timbal)',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan individu, keluarga, dan kelompok risiko tinggi bahaya lingkungan',
              },
              { ...who, intervensi: 'Manajemen mood' },
              {
                ...who,
                intervensi:
                  'Identifikasi mood (mis: tanda, gejala, Riwayat penyakit)',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi risiko keselamatan diri atau orang lain',
              },
              {
                ...who,
                intervensi:
                  'Monitor fungsi kognitif (mis: konsentrasi, memori, kemampuan membuat keputusan)',
              },
              {
                ...who,
                intervensi:
                  'Monitor aktivitas dan tingkat stimulasi lingkungan',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi pengisian kuesioner self-report (mis: beck depression inventory, skala status fungsional), jika perlu',
              },
              {
                ...who,
                intervensi:
                  'Berikan kesempatan untuk menyampaikan perasaan dengan cara yang tepat (mis: sandsack, terapi seni, aktivitas fisik)',
              },
              {
                ...who,
                intervensi: 'Jelaskan tentang gangguan mood dan penanganannya',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan berperan aktif dalam pengobatan dan rehabilitasi, jika perlu',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan rawat inap sesuai indikasi (mis: risiko keselamatan, deficit perawatan diri, sosial)',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan mengenali pemicu gangguan mood (mis: situasi stres, masalah fisik)',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan memonitor mood secara mandiri (mis: skala tingkat 1 – 10, membuat jurnal)',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan keterampilan koping dan penyelesaian masalah baru',
              },
              { ...who, intervensi: 'Kolaborasi pemberian obat, jika perlu' },
              {
                ...who,
                intervensi:
                  'Rujuk untuk psikoterapi (mis: perilaku, hubungan interpersonal, keluarga, kelompok), jika perlu',
              },
              { ...who, intervensi: 'Manajemen pengendalian marah' },
              { ...who, intervensi: 'Identifikasi penyebab/pemicu kemarahan' },
              {
                ...who,
                intervensi:
                  'Identifikasi harapan perilaku terhadap ekspresi kemaharan',
              },
              {
                ...who,
                intervensi:
                  'Monitor potensi agresi tidak konstruktif dan lakukan Tindakan sebelum agresif',
              },
              {
                ...who,
                intervensi:
                  'Monitor kemajuan dengna membuat grafik, jika perlu',
              },
              {
                ...who,
                intervensi: 'Gunakan pendekatan yang tenang dan meyakinkan',
              },
              {
                ...who,
                intervensi: 'Fasilitasi mengekpresikan marah secara adaptif',
              },
              {
                ...who,
                intervensi:
                  'Cegah kerusakan fisik akibat ekspresi marah (mis: menggunakan senjata)',
              },
              {
                ...who,
                intervensi:
                  'Cegah aktivitas pemicu agresi (mis: meninju tas, mondar-mandir, berolahraga berlebihan)',
              },
              {
                ...who,
                intervensi:
                  'Lakukan kontrol eksternal (mis: pengekangan, time-out, dan seklusi), jika perlu',
              },
              {
                ...who,
                intervensi:
                  'Dukung menerapkan strategi pengendalian marah dan ekspresi amarah adaptif',
              },
              {
                ...who,
                intervensi:
                  'Berikan penguatan atas keberhasilan penerapan strategi pengendalian marah',
              },
              {
                ...who,
                intervensi:
                  'Jelaskan makna, fungsi marah, frustasi, dan respons marah',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan meminta bantuan perawat atau keluarga selama ketegangan meningkat',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan strategi untuk mencegah ekspresi marah maladaptif',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan metode untuk memodulasi pengalaman emosi yang kuat (mis: latihan asertif, Teknik relaksasi, jurnal, aktivitas penyaluran energy',
              },
              { ...who, intervensi: 'Kolaborasi pemberian obat, jika perlu' },
              { ...who, intervensi: 'Manajemen perilaku' },
              {
                ...who,
                intervensi: 'Identifikasi harapan untuk mengendalikan perilaku',
              },
              {
                ...who,
                intervensi: 'Diskusikan tanggung jawab terhadap perilaku',
              },
              { ...who, intervensi: 'Jadwalkan kegiatan terstruktur' },
              {
                ...who,
                intervensi:
                  'Ciptakan dan pertahankan lingkungan dan kegiatan perawatan konsisten setiap dinas',
              },
              {
                ...who,
                intervensi: 'Tingkatkan aktivitas fisik sesuai kemampuan',
              },
              { ...who, intervensi: 'Batasi jumlah pengunjung' },
              { ...who, intervensi: 'Bicara dengan nada rendah dan tenang' },
              {
                ...who,
                intervensi:
                  'Lakukan kegiatan pengalihan terhadap sumber agitasi',
              },
              { ...who, intervensi: 'Cegah perilaku pasif dan agresif' },
              {
                ...who,
                intervensi:
                  'Beri penguatan positif terhadap keberhasilan mengendalikan perilaku',
              },
              {
                ...who,
                intervensi: 'Lakukan pengekangan fisik sesuai indikasi',
              },
              {
                ...who,
                intervensi:
                  'Hindari bersikap menyudutkan dan menghentikan pembicaraan',
              },
              { ...who, intervensi: 'Hindari sikap mengancam atau berdebat' },
              {
                ...who,
                intervensi:
                  'Hindari berdebat atau menawar batas perilaku yang telah ditetapkan',
              },
              {
                ...who,
                intervensi:
                  'Informasikan keluarga bahwa keluarga sebagai dasar pembentukan kognitif',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0133',
          diagnosis: 'Perlambatan Pemulihan Pascabedah',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Kenyamanan meningkat' },
              { ...who, kriteria: 'Waktu penyembuhan menurun' },
              { ...who, kriteria: 'Area luka operasi membaik' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi kebiasaan aktivitas perawatan diri sesuai usia',
              },
              { ...who, intervensi: 'Monitor tingkat kemandirian' },
              {
                ...who,
                intervensi:
                  'Identifikasi kebutuhan alat bantu kebersihan diri, berpakaian, berhias, dan makan',
              },
              {
                ...who,
                intervensi:
                  'Sediakan lingkungan yang terapeutik (mis: suasana hangat, rileks, privasi)',
              },
              {
                ...who,
                intervensi:
                  'Siapkan keperluan pribadi (mis: parfum sikat gigi, dan sabun mandi)',
              },
              {
                ...who,
                intervensi:
                  'Dampingi dalam melakukan perawatan diri sampai mandiri',
              },
              {
                ...who,
                intervensi: 'Fasilitasi untuk menerima keadaan ketergantungan',
              },
              {
                ...who,
                intervensi:
                  'Fasilitasi kemandirian, bantu jika tidak mampu melakukan perawatan diriJadwalkan rutinitas perawatan diri',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan melakukan perawatan diri secara konsisten sesuai Identifikasi lokasi, karakteristik, durasi, frekuensi, kualitas, intensitas nyeri',
              },
              { ...who, intervensi: 'Identifikasi skala nyeri' },
              { ...who, intervensi: 'Idenfitikasi respon nyeri non verbal' },
              {
                ...who,
                intervensi:
                  'Identifikasi faktor yang memperberat dan memperingan nyeri',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi pengetahuan dan keyakinan tentang nyeri',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi pengaruh budaya terhadap respon nyeri',
              },
              {
                ...who,
                intervensi: 'Identifikasi pengaruh nyeri pada kualitas hidup',
              },
              {
                ...who,
                intervensi:
                  'Monitor keberhasilan terapi komplementer yang sudah diberikan',
              },
              {
                ...who,
                intervensi: 'Monitor efek samping penggunaan analgetik',
              },
              {
                ...who,
                intervensi:
                  'Berikan Teknik nonfarmakologis untuk mengurangi nyeri (mis: TENS, hypnosis, akupresur, terapi music, biofeedback, terapi pijat, aromaterapi, Teknik imajinasi terbimbing, kompres hangat/dingin, terapi bermain)',
              },
              {
                ...who,
                intervensi:
                  'Kontrol lingkungan yang memperberat rasa nyeri (mis: suhu ruangan, pencahayaan, kebisingan)',
              },
              { ...who, intervensi: 'Fasilitasi istirahat dan tidur' },
              {
                ...who,
                intervensi:
                  'Pertimbangkan jenis dan sumber nyeri dalam pemilihan strategi meredakan nyeri',
              },
              {
                ...who,
                intervensi: 'Jelaskan penyebab, periode, dan pemicu nyeri',
              },
              { ...who, intervensi: 'Jelaskan strategi meredakan nyeri' },
              { ...who, intervensi: 'Anjurkan memonitor nyeri secara mandiri' },
              {
                ...who,
                intervensi: 'Anjurkan menggunakan analgesik secara tepat',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0134',
          diagnosis: 'Risiko Alergi',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Respon alergi lokal menurun' },
              { ...who, kriteria: 'Respon alergi sistemik menurun' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi kesiapan dan kemampuan menerima informasi',
              },
              {
                ...who,
                intervensi:
                  'Monitor pemahaman pasien dan keluarga tentang alergi',
              },
              {
                ...who,
                intervensi: 'Sediakan materi dan media pendidikan kesehatan',
              },
              {
                ...who,
                intervensi: 'Jadwalkan pendidikan kesehatan sesuai kesepakatan',
              },
              { ...who, intervensi: 'Fasilitasi mengenali penyebab alergi' },
              {
                ...who,
                intervensi: 'Berikan kesempatan pasien dan keluarga bertanya',
              },
              {
                ...who,
                intervensi:
                  'Jelaskan definisi, penyebab, gejala, dan tanda alergi',
              },
              {
                ...who,
                intervensi:
                  'Jelaskan cara menghindari allergen (mis: tidak menggunakan karpet, menggunakan masker)',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan pasien dan keluarga menyediakan obat alergi',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0135',
          diagnosis: 'Risiko Bunuh Diri',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Verbalisasi keinginan bunuh diri menurun' },
              { ...who, kriteria: 'Verbalisasi isyarat bunuh diri menurun' },
              { ...who, kriteria: 'Verbalisasi ancaman bunuh diri menurun' },
              { ...who, kriteria: 'Verbalisasi rencana bunuh diri menurun' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              { ...who, intervensi: 'Identifikasi gejala risiko bunuh diri' },
              {
                ...who,
                intervensi:
                  'Identifikasi keinginan dan pikiran rencana bunuh diri',
              },
              {
                ...who,
                intervensi: 'Monitor lingkungan bebas bahaya secara rutin',
              },
              {
                ...who,
                intervensi: 'Monitor adanya perubahan mood atau perilaku',
              },
              {
                ...who,
                intervensi:
                  'Libatkan pasien dan keluarga dalam perencanaan perawatan mandiri',
              },
              {
                ...who,
                intervensi:
                  'Libatkan pasien dan keluarga dalam perencanaan perawatan',
              },
              {
                ...who,
                intervensi:
                  'Lakukan pendekatan langsung dan tidak menghakimi saat membahas bunuh diri',
              },
              {
                ...who,
                intervensi:
                  'Berikan lingkungan dengan pengamanan ketat dan mudah dipantau',
              },
              {
                ...who,
                intervensi: 'Tingkatkan pengawasan pada kondisi tertentu',
              },
              { ...who, intervensi: 'Lakukan intervensi perlindungan' },
              {
                ...who,
                intervensi:
                  'Hindari diskusi berulang tentang bunuh diri sebelumnya, diskusi berorientasi pada masa sekarang dan masa depan',
              },
              {
                ...who,
                intervensi:
                  'Diskusikan rencana menghadapi ide bunuh diri di masa depan',
              },
              { ...who, intervensi: 'Pastikan obat ditelan' },
              {
                ...who,
                intervensi:
                  'Anjurkan mendiskusikan perasaan yang dialami kepada orang lain',
              },
              { ...who, intervensi: 'Anjurkan menggunakan sumber pendukung' },
              {
                ...who,
                intervensi:
                  'Jelaskan tindakan pencegahan bunuh diri kepada keluarga atau orang terdekat',
              },
              {
                ...who,
                intervensi:
                  'Informasikan sumber daya masyarakat dan program yang tersedia',
              },
              { ...who, intervensi: 'Latih pencegahan risiko bunuh diri' },
              {
                ...who,
                intervensi:
                  'Kolaborasi pemberian obat antiansietas, atau antipsikotik, sesuai indikasi',
              },
              {
                ...who,
                intervensi: 'Rujuk ke pelayanan kesehatan mental, jika perlu',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0136',
          diagnosis: 'Risiko Cedera',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Kejadian Cedera Menurun' },
              { ...who, kriteria: 'Luka/lecet menurun' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              { ...who, intervensi: 'Manajemen Keselamatan Lingkungan' },
              { ...who, intervensi: 'Identifikasi kebutuhan keselamatan' },
              {
                ...who,
                intervensi: 'Monitor perubahan status keselamatan lingkungan',
              },
              { ...who, intervensi: 'Hilangkan bahaya keselamatan lingkungan' },
              {
                ...who,
                intervensi:
                  'Modifikasi lingkungan untuk meminimalkan bahaya dan risiko',
              },
              { ...who, intervensi: 'Sediakan alat bantu keamanan lingkungan' },
              { ...who, intervensi: 'Gunakan perangkat pelindung' },
              {
                ...who,
                intervensi: 'Hubungi pihak berwenang sesuai masalah komunitas',
              },
              {
                ...who,
                intervensi: 'Fasilitasi relokasi ke lingkungan yang aman',
              },
              {
                ...who,
                intervensi: 'Lakukan program skrining bahaya lingkungan',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan individu, keluarga dan kelompok risiko tinggi bahaya lingkungan',
              },
              { ...who, intervensi: 'Pencegahan Cedera' },
              {
                ...who,
                intervensi:
                  'Identifikasi area lingkungan yang berpotensi menyebabkan cedera',
              },
              {
                ...who,
                intervensi: 'Identifikasi obat yang berpotensi cedera',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi kesesuaian alas kaki atau stocking elastis pada ekstrekmitas bawah',
              },
              { ...who, intervensi: 'Tersedianya pencahayaan yang memadai' },
              { ...who, intervensi: 'Penggunaan lampu tidur selama jam tidur' },
              {
                ...who,
                intervensi:
                  'Sosialisasi pasien dan keluarga dengan lingkungan ruang rawat',
              },
              {
                ...who,
                intervensi:
                  'Penggunaan alas kaki jika berisiko mengalami cedera serius',
              },
              { ...who, intervensi: 'Ketersediaan alas kaki antislip' },
              {
                ...who,
                intervensi:
                  'Ketersediaan pispot dan urinal untuk eliminasi ditempat tidur',
              },
              {
                ...who,
                intervensi: 'Ketermudaan akses terhadap barang barang pribadi',
              },
              {
                ...who,
                intervensi:
                  'Pertahankan posisi tempat tidur diposisi terendah saat digunakan',
              },
              {
                ...who,
                intervensi:
                  'Roda tempat tidur atau kursi roda dalam kondisi terkunci',
              },
              {
                ...who,
                intervensi:
                  'Penggunaan pengaman tempat tidur sesuai dengan kebijakan fasilitas pelayanan kesehatan',
              },
              {
                ...who,
                intervensi:
                  'Pertimbangkan penggunaan alarm elektronik pribadi atau alarm sensor pada tempat tidur atau kursi',
              },
              {
                ...who,
                intervensi: 'Latihan dan terapi fisik yang diperlukan',
              },
              { ...who, intervensi: 'Alat bantu mobiltas yang sesuai' },
              {
                ...who,
                intervensi: 'Pendampingan pasien bagi anggota keluarga',
              },
              {
                ...who,
                intervensi:
                  'Penjelasan alasan intervensi pencegahan jatuh ke pasien dan keluarga',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan berganti posisi secara perlahan dan duduk selama beberapa menit sebelum berdiri',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0137',
          diagnosis: 'Risiko Cedera Pada Ibu',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Kejadian Cedera Menurun' },
              { ...who, kriteria: 'Luka/lecet menurun' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              { ...who, intervensi: 'Mencegah Cedera' },
              {
                ...who,
                intervensi:
                  'Identifikasi area lingkungan yang berpotensi menyebabkan cedera',
              },
              {
                ...who,
                intervensi: 'Identifikasi obat yang berpotensi cedera',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi kesesuaian alas kaki atau stocking elastis pada ekstrekmitas bawah',
              },
              { ...who, intervensi: 'Tersedianya pencahayaan yang memadai' },
              { ...who, intervensi: 'Penggunaan lampu tidur selama jam tidur' },
              {
                ...who,
                intervensi:
                  'Sosialisasi pasien dan keluarga dengan lingkungan ruang rawat',
              },
              {
                ...who,
                intervensi:
                  'Penggunaan alas kaki jika berisiko mengalami cedera serius',
              },
              { ...who, intervensi: 'Ketersediaan alas kaki antislip' },
              {
                ...who,
                intervensi:
                  'Ketersediaan pispot dan urinal untuk eliminasi ditempat tidur',
              },
              {
                ...who,
                intervensi: 'Ketermudaan akses terhadap barang barang pribadi',
              },
              {
                ...who,
                intervensi:
                  'Pertahankan posisi tempat tidur diposisi terendah saat digunakan',
              },
              {
                ...who,
                intervensi:
                  'Roda tempat tidur atau kursi roda dalam kondisi terkunci',
              },
              {
                ...who,
                intervensi:
                  'Penggunaan pengaman tempat tidur sesuai dengan kebijakan fasilitas pelayanan kesehatan',
              },
              {
                ...who,
                intervensi:
                  'Pertimbangkan penggunaan alarm elektronik pribadi atau alarm sensor pada tempat tidur atau kursi',
              },
              {
                ...who,
                intervensi: 'Latihan dan terapi fisik yang diperlukan',
              },
              { ...who, intervensi: 'Alat bantu mobiltas yang sesuai' },
              {
                ...who,
                intervensi: 'Pendampingan pasien bagi anggota keluarga',
              },
              {
                ...who,
                intervensi:
                  'Penjelasan alasan intervensi pencegahan jatuh ke pasien dan keluarga',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan berganti posisi secara perlahan dan duduk selama beberapa menit sebelum berdiri',
              },
              { ...who, intervensi: 'Perawatan Persalinan Risiko Tinggi' },
              { ...who, intervensi: 'Identifikasi kondisi umum pasien' },
              { ...who, intervensi: 'Monitor tanda tanda vital' },
              {
                ...who,
                intervensi: 'Monitor kelainan tanda vital pada ibu dan janin',
              },
              { ...who, intervensi: 'Monitor tanda-tanda persalinan' },
              { ...who, intervensi: 'Monitor denyut jantung janin' },
              { ...who, intervensi: 'Identifikasi posisi janin dengan USG' },
              {
                ...who,
                intervensi: 'identifikasi perdarahan pasca persalinan',
              },
              { ...who, intervensi: 'Tersedianya peralatan yang sesuai' },
              { ...who, intervensi: 'Pendampingan orang terdekat bagi pasien' },
              { ...who, intervensi: 'Tindakan pencegahan universal' },
              { ...who, intervensi: 'Lakukan perineal scrub' },
              {
                ...who,
                intervensi:
                  'Fasilitasi rotasi manual kepala janin dari oksiput posterior ke posisi anterior',
              },
              { ...who, intervensi: 'Lakukan amniotomy selaput ketuban' },
              {
                ...who,
                intervensi: 'Fasilitasi tindakan forceps atau ekstraksi vakum',
              },
              { ...who, intervensi: 'Lakukan resusitasi neonatal' },
              { ...who, intervensi: 'Fasilitasi ibu pulih dari anestesi' },
              {
                ...who,
                intervensi:
                  'Motivasi interaksi orang tua dengan bayi baru lahir segera setelah persalinan',
              },
              { ...who, intervensi: 'Dokumentasikan prosedur' },
              {
                ...who,
                intervensi: 'Penjelasan prosedur tindakan yang dilakukan',
              },
              {
                ...who,
                intervensi:
                  'Penjelasan karakteristik bayi baru lahir yang terkait dengan kelahiran berisiko tingg',
              },
              { ...who, intervensi: 'Koordinasi dengan tim untuk stand by' },
              { ...who, intervensi: 'kolaborasi pemberian anestesi' },
              { ...who, intervensi: 'Perawatan Kehamilan Risiko Tinggi' },
              { ...who, intervensi: 'Identifikasi faktor risiko kehamilan' },
              { ...who, intervensi: 'Identifikasi riwayat obtetris' },
              { ...who, intervensi: 'Identifikasi sosial dan demografi' },
              {
                ...who,
                intervensi: 'Monitor status fisik dan psikososial selama hamil',
              },
              { ...who, intervensi: 'Pendampingan ibu saat cemas' },
              { ...who, intervensi: 'Diskusi seksualitas aman selama hamil' },
              { ...who, intervensi: 'Diskusi ketidaknyamanan selama hamil' },
              {
                ...who,
                intervensi: 'Diskusi persiapan persalinan dan kelahiran',
              },
              {
                ...who,
                intervensi:
                  'Penjelasan risiko janin mengalai kelainan prematur',
              },
              {
                ...who,
                intervensi:
                  'Informasi kemingkinan intervensi selama proses kelahiran',
              },
              {
                ...who,
                intervensi:
                  'Anjuran perawatan diri untuk meningkatakan kesehatan',
              },
              {
                ...who,
                intervensi:
                  'Anjuran ibu untuk beraktivitas dan beristirahat cukup',
              },
              { ...who, intervensi: 'Ajarkan cara menghitung gerakan janin' },
              {
                ...who,
                intervensi: 'Ajarkan aktivitas yang aman selama hamil',
              },
              { ...who, intervensi: 'Ajarkan mengenali tanda bahaya' },
              {
                ...who,
                intervensi:
                  'Kolaborasi dengan sepesialis jika ditemukan tanda dan bahaya kehamilan',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0138',
          diagnosis: 'Risiko Cedera Pada Janin',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Kejadian Cedera Menurun' },
              { ...who, kriteria: 'Luka/lecet menurun' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              { ...who, intervensi: 'Pemantauan denyut jantung janin' },
              { ...who, intervensi: 'Identifikasi status obstetric' },
              { ...who, intervensi: 'Identifikasi Riwayat obstetric' },
              {
                ...who,
                intervensi:
                  'Identifikasi adanya penggunaan obat, diet dan merokok',
              },
              {
                ...who,
                intervensi: 'Identifikadi pemeriksaan kehamilan sebelumnya',
              },
              {
                ...who,
                intervensi: 'Pemeriksaan denyut jantung janin selama 1 menit',
              },
              { ...who, intervensi: 'Monitor denyut jantung Ibu' },
              { ...who, intervensi: 'Monitor tanda vital ibu' },
              { ...who, intervensi: 'Atur posisi pasien' },
              {
                ...who,
                intervensi:
                  'Lakukan manuver leopold untuk menetukan posisi janin',
              },
              {
                ...who,
                intervensi: 'Penjelasan tujuan dan prosedur pemantauan',
              },
              { ...who, intervensi: 'Informasi hasil pemantauan' },
              { ...who, intervensi: 'Pengukuran Gerakan Janin' },
              {
                ...who,
                intervensi:
                  'Identifikasi pengetahuan dan kemampuan ibu menghitung gerakan janin',
              },
              { ...who, intervensi: 'Monitor Gerakan Janin' },
              { ...who, intervensi: 'Hitung dan catat gerakan janin' },
              { ...who, intervensi: 'Pemeriksaan CTG (Cardiotocography)' },
              {
                ...who,
                intervensi:
                  'Pencatatan jumlah gerakan janin dalam 12 jam perhari',
              },
              {
                ...who,
                intervensi:
                  'Pemberian Oksigen 2-3 liter per menit jika gerakan janin belum mencapai 10 kali dalam 12 jam',
              },
              {
                ...who,
                intervensi:
                  'Penjelasan manfaat mengitung gerakan janin dapat meningkatkan hubungan ibu dan janin',
              },
              {
                ...who,
                intervensi:
                  'Anjuran ibu memenuhi kebutuhan nutrisu sebelum menghitung gerakan janin',
              },
              {
                ...who,
                intervensi:
                  'Anjuran posisi miring kiri saat menghitung gerakan janin',
              },
              {
                ...who,
                intervensi:
                  'Anjuran ibu segera memberitahu perawat jika gerakan janin tidak mencapai 10 kali dalam 12 jam',
              },
              {
                ...who,
                intervensi: 'Ajarkan ibu cara menghitung gerakan janin',
              },
              {
                ...who,
                intervensi:
                  'Kolaborasi dengan tim medis jika ditemukan gawat janin',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0139',
          diagnosis: 'Risiko Gangguan Integritas Kulit/Jaringan',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Integritas kulit membaik' },
              { ...who, kriteria: 'Kulit lembab,elastisitas baik' },
              {
                ...who,
                kriteria:
                  'Tidak ada tanda tanda pigmentasi abnormal pada kulit',
              },
              { ...who, kriteria: 'Hidrasi cukup' },
              {
                ...who,
                kriteria: 'Tidak ada tanda tanda perdarahan,kemerahan,hematoma',
              },
              { ...who, kriteria: 'Nekrosis membaik/berkurang' },
              { ...who, kriteria: 'Suhu kulit membaik' },
              { ...who, kriteria: 'Sensasi dan tekstur kulit membaik' },
              { ...who, kriteria: 'Tingkat nyeri berkurang' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi penyebab gangguan integritas kulit (mis: perubahan sirkulasi, perubahan status nutrisi, penurunan kelembaban, suhu lingkungan ekstrim, penurunan mobilitas)',
              },
              {
                ...who,
                intervensi: 'Ubah posisi setiap 2 jam jika tirah baring',
              },
              {
                ...who,
                intervensi:
                  'Lakukan pemijatan pada area penonjolan tulang, jika perlu',
              },
              {
                ...who,
                intervensi:
                  'Bersihkan perineal dengan air hangat, terutama selama periode diare',
              },
              {
                ...who,
                intervensi:
                  'Gunakan produk berbahan petroleum atau minyak pada kulit kering',
              },
              {
                ...who,
                intervensi:
                  'Gunakan produk berbahan ringan/alami dan hipoalergik pada kulit sensitive',
              },
              {
                ...who,
                intervensi:
                  'Hindari produk berbahan dasar alkohol pada kulit kering',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan menggunakan pelembab (mis: lotion, serum)',
              },
              { ...who, intervensi: 'Anjurkan minum air yang cukup' },
              { ...who, intervensi: 'Anjurkan meningkatkan asupan nutrisi' },
              {
                ...who,
                intervensi: 'Anjurkan meningkatkan asupan buah dan sayur',
              },
              {
                ...who,
                intervensi: 'Anjurkan menghindari terpapar suhu ekstrim',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan menggunakan tabir surya SPF minimal 30 saat berada diluar rumah',
              },
              {
                ...who,
                intervensi: 'Anjurkan mandi dan menggunakan sabun secukupnya',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0140',
          diagnosis: 'Risiko Hipotermia',
          diagnosisKeperawatanKriterias: {
            create: [
              {
                ...who,
                kriteria: 'Suhu tubuh diharapkan normal 36,0 0C – 37,5 0C',
              },
              { ...who, kriteria: 'Tidak ada tanda gejala hipotermia' },
              { ...who, kriteria: 'Tidak ada tanda tanda penurunan kesadaran' },
              { ...who, kriteria: 'Tidak ada perubahan warna kulit' },
              { ...who, kriteria: 'pernapasan dalam rentang normal' },
              { ...who, kriteria: 'Sensasi lemah lesu berkurang' },
              { ...who, kriteria: 'Denyut nadi normal' },
              { ...who, kriteria: 'Kemampuan bicara baik' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi tanda gejala dan kemungkinan faktor penyebab risiko hipotermia',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi situasi yang menyebabkan risiko hipotermia',
              },
              {
                ...who,
                intervensi: 'Monitor suhu dengan alat ukur secara berkala',
              },
              {
                ...who,
                intervensi:
                  'Monitor adanya gejala-gejala yang berhubungan dengan risiko hipotermia (takipnea, menggigil, dan diuresis)',
              },
              { ...who, intervensi: 'Monitor warna kulit' },
              {
                ...who,
                intervensi:
                  'Bebaskan dari lingkungan yang nyaman bagi klien (22 derajat celcius)',
              },
              {
                ...who,
                intervensi:
                  'Berikan pakaian yang hangat, selimut penghangat (conventive warmer), dan penutup kepala',
              },
              {
                ...who,
                intervensi:
                  'Konsultasi dengan medis jika tanda dan gejala hipotermia tetap ada atau memburuk',
              },
              {
                ...who,
                intervensi:
                  'Penggunaan penghangat cairan intravena dan penghangat darah',
              },
              { ...who, intervensi: 'Kompres dengan Hot -Pack' },
              { ...who, intervensi: 'Penyinaran dengan lampu panas' },
              { ...who, intervensi: 'Buli-buli panas' },
              {
                ...who,
                intervensi: 'Anjurkan monitor suhu secara mandiri dan berkala',
              },
              {
                ...who,
                intervensi: 'Anjurkan monitor intake output secara mandiri',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan mengenal tanda dan gejala hipotermia ( menggigil, warna kulit berubah, diuresis, suhu kurang dari 36,00C )',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan indikasi dan pentingnya pengujian keton urine jika perlu',
              },
              { ...who, intervensi: 'Kolaborasi pemberian cairan intravena' },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0141',
          diagnosis: 'Risiko Hipotermia Perioperatif',
          diagnosisKeperawatanKriterias: {
            create: [
              {
                ...who,
                kriteria: 'Suhu tubuh diharapkan normal 36,0 0C – 37,5 0C',
              },
              { ...who, kriteria: 'Tidak ada tanda gejala hipotermia' },
              { ...who, kriteria: 'Tidak ada tanda tanda penurunan kesadaran' },
              { ...who, kriteria: 'Tidak ada perubahan warna kulit' },
              { ...who, kriteria: 'pernapasan dalam rentang normal' },
              { ...who, kriteria: 'Sensasi lemah lesu berkurang' },
              { ...who, kriteria: 'Denyut nadi normal' },
              { ...who, kriteria: 'Kemampuan bicara baik' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Identifikasi tanda gejala dan kemungkinan faktor penyebab risiko hipotermia',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi situasi yang menyebabkan risiko hipotermia',
              },
              {
                ...who,
                intervensi: 'Monitor suhu dengan alat ukur secara berkala',
              },
              {
                ...who,
                intervensi:
                  'Monitor adanya gejala-gejala yang berhubungan dengan risiko hipotermia (takipnea, menggigil, dan diuresis)',
              },
              { ...who, intervensi: 'Monitor warna kulit' },
              {
                ...who,
                intervensi:
                  'Bebaskan dari lingkungan yang nyaman bagi klien (22 derajat celcius)',
              },
              {
                ...who,
                intervensi:
                  'Berikan pakaian yang hangat, selimut penghangat (conventive warmer), dan penutup kepala',
              },
              {
                ...who,
                intervensi:
                  'Konsultasi dengan medis jika tanda dan gejala hipotermia tetap ada atau memburuk',
              },
              {
                ...who,
                intervensi:
                  'Penggunaan penghangat cairan intravena dan penghangat darah',
              },
              { ...who, intervensi: 'Kompres dengan Hot -Pack' },
              { ...who, intervensi: 'Penyinaran dengan lampu panas' },
              { ...who, intervensi: 'Buli-buli panas' },
              {
                ...who,
                intervensi: 'Anjurkan monitor suhu secara mandiri dan berkala',
              },
              {
                ...who,
                intervensi: 'Anjurkan monitor intake output secara mandiri',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan mengenal tanda dan gejala hipotermia ( menggigil, warna kulit berubah, diuresis, suhu kurang dari 36,00C )',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan indikasi dan pentingnya pengujian keton urine jika perlu',
              },
              { ...who, intervensi: 'Kolaborasi pemberian cairan intravena' },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0142',
          diagnosis: 'Risiko Infeksi',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Kebersihan tangan meningkat' },
              { ...who, kriteria: 'Kebersihan badan meningkat' },
              { ...who, kriteria: 'Nafsu makan meningkat' },
              { ...who, kriteria: 'Demam menurun' },
              { ...who, kriteria: 'Kemerahan menurun' },
              { ...who, kriteria: 'Nyeri menurun' },
              { ...who, kriteria: 'Bengkak menurun' },
              { ...who, kriteria: 'Kadar sel darah putih membaik' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi: 'Identifikasi Riwayat Kesehatan dan Riwayat alergi',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi kontraindikasi pemberian imunisasi (mis: reaksi anafilaksis terhadap vaksin sebelumnya dan/atau sakit parah dengan atau tanpa demam)',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi status imunisasi setiap kunjungan ke pelayanan kesehatan',
              },
              {
                ...who,
                intervensi:
                  'Jelaskan tujuan, manfaat, reaksi yang terjadi, jadwal, dan efek samping',
              },
              {
                ...who,
                intervensi:
                  'Informasikan imunisasi yang diwajibkan pemerintah (mis: hepatitis B, BCG, difteri, tetanus, pertussis, H. influenza, polio, campak, measles, rubela)',
              },
              {
                ...who,
                intervensi:
                  'Infromasikan imunisasi yang melindungi terhadap penyakit namun saat ini tidak diwajibkan pemerintah (mis: influenza, pneumokokus)',
              },
              {
                ...who,
                intervensi:
                  'Informasikan vaksinasi untuk kejadian khusus (mis: rabies, tetanus)',
              },
              {
                ...who,
                intervensi:
                  'Informasikan penundaan pemberian imunisasi tidak berarti mengulang jadwal imunisasi Kembali',
              },
              { ...who, intervensi: 'Jelaskan tanda dan gejala infeksi' },
              {
                ...who,
                intervensi: 'Ajarkan cara mencuci tangan dengan benar',
              },
              { ...who, intervensi: 'Ajarkan etika batuk' },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0143',
          diagnosis: 'Risiko Jatuh',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Monitor Pencegahan jatuh' },
              { ...who, kriteria: 'Monitor pasang handrail tempat tidur' },
              {
                ...who,
                kriteria:
                  'Monitor identifikasi resiko jatuh setidaknya sekali setiap shift',
              },
              { ...who, kriteria: 'Monitor menggunakan alat bantu jalan' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              { ...who, intervensi: 'Edukasi Pencegahan jatuh' },
              {
                ...who,
                intervensi: 'Edukasi Manajemen keselamatan lingkungan',
              },
              {
                ...who,
                intervensi:
                  'Monitor kemampuan berpindah dari tempat tidur ke kursi roda dan sebaliknya',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi faktor lingkungan yang mengakibatkan jatuh',
              },
              {
                ...who,
                intervensi:
                  'identifikasi resiko jatuh setidaknya sekali setiap shift',
              },
              {
                ...who,
                intervensi: 'Orientasikan ruangan pada pasien dan keluarga',
              },
              { ...who, intervensi: 'Pasang handrail tempat tidur' },
              {
                ...who,
                intervensi: 'Atur tempat tidur mekanis pada posisi terendah',
              },
              { ...who, intervensi: 'Gunakan alat bantu jalan' },
              {
                ...who,
                intervensi: 'Dekatkan bel pemanggil dalam jangkauan pasien',
              },
              {
                ...who,
                intervensi:
                  'Pastikan roda tempat tidur dan kursi roda dalam keadaan terkunci',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan memanggil perawat jika membutuhkan bantuan untuk berpindah',
              },
              {
                ...who,
                intervensi: 'Anjurkan menggunakan alas kaki yang tidak licin',
              },
              {
                ...who,
                intervensi:
                  'Kolaborasi dengan tim untuk menimalisir terjadinya resiko jatuh',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0144',
          diagnosis: 'Risiko Luka Tekan',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Kerusakan lapisan kulit' },
              { ...who, kriteria: 'Monitor perubahan kulit' },
              {
                ...who,
                kriteria: 'Monitor adanya trombopebitis dan tromboemboli vena',
              },
              {
                ...who,
                kriteria: 'Monitor perbedaan sensasi tajam atau tumpul',
              },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              { ...who, intervensi: 'Manajemen sensasi perifer' },
              { ...who, intervensi: 'Pencegahan luka tekan' },
              { ...who, intervensi: 'Identifikasi penyebab perubahan sesasi' },
              { ...who, intervensi: 'Monitor perubahan kulit' },
              {
                ...who,
                intervensi:
                  'Monitor adanya tromboplebitis dan tromboemboli vena',
              },
              {
                ...who,
                intervensi: 'Monitor perbedaan sensi tajam atau tumpul',
              },
              { ...who, intervensi: 'Berikan bantalan pada titik tekan' },
              { ...who, intervensi: 'Jaga sprai tetap kering,dan bersih' },
              {
                ...who,
                intervensi:
                  'Pastikan asupan makanan yang cukup terutama protein',
              },
              {
                ...who,
                intervensi:
                  'Keringkan daerah luka yang lembab akibat keringat dan caira luka',
              },
              { ...who, intervensi: 'Jelaskan tanda tanda kerukan kulit' },
              { ...who, intervensi: 'Ajarkan cara merawat kulit' },
              { ...who, intervensi: 'Kolaborasi pemberian analgesik' },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0145',
          diagnosis: 'Risiko Mutilasi Diri',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Tanda dan gejala resiko mutilasi diri' },
              { ...who, kriteria: 'Kemampuan dalam berinteraksi' },
              { ...who, kriteria: 'Kemampuan dalam mengungkapkan perasaanya' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Intervensi keperawatan dengan pendekatan strategi pelaksanaan (SP) pada pasien',
              },
              { ...who, intervensi: 'Bina hubungan saling percaya' },
              {
                ...who,
                intervensi:
                  'Bantu pasien menyadari masalah resiko mutilasi diri',
              },
              {
                ...who,
                intervensi:
                  'Latihan bercakap cakap secara bertahap antara pasien dan anggota keluarga',
              },
              { ...who, intervensi: 'Tanya perasaan' },
              { ...who, intervensi: 'Beri pujian, melatih cara berbicara' },
              { ...who, intervensi: 'Validasi kemampuan berkenalan' },
              { ...who, intervensi: 'Evaluasi tanda dan gejala resiko' },
              {
                ...who,
                intervensi:
                  'Intervensi Keperawatan dengan pendekatan Strategi Pelaksanaan (SP) pada keluarga',
              },
              {
                ...who,
                intervensi:
                  'Diskusikan masalah yang dirasakan keluarga dalam merawat pasien',
              },
              {
                ...who,
                intervensi:
                  'Jelaskan pengertian, tanda dan resiko mutilasi diri yang dialami pasien beserta prosesnya.',
              },
              {
                ...who,
                intervensi:
                  'Berikan kesempatan keluarga untuk memutuskan perawatan pasien',
              },
              {
                ...who,
                intervensi:
                  'Jelaskan cara merawat resiko mutilasi diri dan melatih dua cara merawat : berkenalan dan melakukan kegiatan harian.',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0146',
          diagnosis: 'Risiko Perilaku Kekerasan',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Verbalisasi ancaman kepada orang lain' },
              { ...who, kriteria: 'Vebalisasi umpatan' },
              { ...who, kriteria: 'Perilaku menyerang' },
              { ...who, kriteria: 'Perilaku melukai diri sendiri/orang lain' },
              { ...who, kriteria: 'Perilaku merusak lingkungan sekitar' },
              { ...who, kriteria: 'Perilaku agresif/amuk' },
              { ...who, kriteria: 'Suara keras' },
              { ...who, kriteria: 'Bicara ketus' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Monitor adanya benda yang berpotensi membahayakan (mis: benda tajam, tali)',
              },
              {
                ...who,
                intervensi:
                  'Monitor selama penggunaan barang yang dapat membahayakan (mis: pisau cukur)',
              },
              {
                ...who,
                intervensi:
                  'Pertahankan lingkungan bebas dari bahaya secara rutin',
              },
              {
                ...who,
                intervensi: 'Latih cara mengungkapkan perasaan secara asertif',
              },
              {
                ...who,
                intervensi:
                  'Latih mengurangi kemarahan secara verbal dan nonverbal (mis: relaksasi, bercerita)',
              },
              {
                ...who,
                intervensi: 'Identifikasi metode penyelesaian masalah',
              },
              {
                ...who,
                intervensi:
                  'Identifikasi kebutuhan dan keinginan terhadap dukungan sosial',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan menjalin hubungan yang memiliki kepentingan dan tujuan sama',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan cara memecahkan masalah secara konstruktif',
              },
              {
                ...who,
                intervensi: 'Latih keterampilan sosial, sesuai kebutuhan',
              },
              { ...who, intervensi: 'Latih mengembangkan penilaian obyektif' },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0147',
          diagnosis: 'Risiko Perlambatan Pemulihan Pascabedah',
          diagnosisKeperawatanKriterias: {
            create: [
              { ...who, kriteria: 'Tanda dan gejala pemulihan pasca bedah' },
              { ...who, kriteria: 'Kemampuan dalam berinteraksi' },
              { ...who, kriteria: 'Kemampuan dalam mengungkapkan perasaanya' },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              {
                ...who,
                intervensi:
                  'Intervensi keperawatan dengan pendekatan strategi pelaksanaan (SP) pada pasien',
              },
              { ...who, intervensi: 'Bina hubungan saling percaya' },
              {
                ...who,
                intervensi: 'Bantu pasien menyadari masalah pasca bedah',
              },
              {
                ...who,
                intervensi:
                  'Latih bercakap cakap secara bertahap antara pasien dan anggota keluarga',
              },
              { ...who, intervensi: 'Tanyakan perasaan' },
              { ...who, intervensi: 'Beri pujian, melatih cara berbicara' },
              { ...who, intervensi: 'Validasi kemampuan berkenalan' },
              { ...who, intervensi: 'Evaluasi tanda dan gejala pasca bedah' },
              {
                ...who,
                intervensi:
                  'Intervensi Keperawatan dengan pendekatan Strategi Pelaksanaan (SP) pada keluarga',
              },
              {
                ...who,
                intervensi:
                  'Diskusikan masalah yang dirasakan keluarga dalam merawat pasien',
              },
              {
                ...who,
                intervensi:
                  'Jelaskan pengertian, tanda dan pasca bedah yang dialami pasien beserta prosesnya.',
              },
              {
                ...who,
                intervensi:
                  'Berikan kesempatan keluarga untuk memutuskan perawatan pasien',
              },
              {
                ...who,
                intervensi:
                  'Jelaskan cara pasca pembedahan dan melatih dua cara merawat : berkenalan dan melakukan kegiatan harian.',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0148',
          diagnosis: 'Risiko Termoregulasi Tidak Efektif',
          diagnosisKeperawatanKriterias: {
            create: [
              {
                ...who,
                kriteria: 'Monitor suhu sampai setabil 36.5°C – 37.5°C',
              },
              {
                ...who,
                kriteria: 'Monitor suhu tubuh tiap dua jam, jika perlu',
              },
              {
                ...who,
                kriteria:
                  'Monitor tekanan darah, frekuensi pernafasan dan nadi',
              },
              {
                ...who,
                kriteria:
                  'Monitor dan catat tanda dan gejala hipotermia atau hipertermia',
              },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              { ...who, intervensi: 'Edukasi Aktivitas / istirahat' },
              { ...who, intervensi: 'Edukasi berat badan efektif' },
              { ...who, intervensi: 'Edukasi dehidrasi' },
              { ...who, intervensi: 'Edukasi pengukuran suhu tubuh' },
              { ...who, intervensi: 'Edukasi terapi cairan' },
              { ...who, intervensi: 'edukasi termoregulasi' },
              {
                ...who,
                intervensi: 'Monitor suhu tubuh sampai setabil 36,5°C – 37,5°C',
              },
              {
                ...who,
                intervensi:
                  'Monitor tekanan darah, frekuensi pernafasan dan nadi',
              },
              { ...who, intervensi: 'Monitor suhu tubuh tiap dua jam' },
              {
                ...who,
                intervensi:
                  'Monitor dan catat tanda dan gejala hipotermia atau hipertermia',
              },
              { ...who, intervensi: 'Monitor warna dan suhu kulit' },
              {
                ...who,
                intervensi: 'Pasang alat pemantau suhu kontinu, jika perlu',
              },
              {
                ...who,
                intervensi: 'Sesuaikan suhu lingkungan dengan kebutuhan pasien',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan penggunaan pakaian yang dapat menyerap keringat',
              },
              { ...who, intervensi: 'Anjurkan memperbanyak minum' },
              {
                ...who,
                intervensi: 'Anjurkan penggunaan pakaian yang longgar',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan pencegahan hipotermi karena terpapar udara dingin',
              },
              {
                ...who,
                intervensi: 'Kolaborasi pemberian antipiretik jika perlu',
              },
            ],
          },
        },
      });
      await tx.diagnosisKeperawatan.create({
        data: {
          ...who,
          kode: 'D.0149',
          diagnosis: 'Termoregulasi Tidak Efektif',
          diagnosisKeperawatanKriterias: {
            create: [
              {
                ...who,
                kriteria: 'Monitor suhu sampai setabil 36.5°C – 37.5°C',
              },
              {
                ...who,
                kriteria: 'Monitor suhu tubuh tiap dua jam, jika perlu',
              },
              {
                ...who,
                kriteria:
                  'Monitor tekanan darah, frekuensi pernafasan dan nadi',
              },
              {
                ...who,
                kriteria:
                  'Monitor dan catat tanda dan gejala hipotermia atau hipertermia',
              },
            ],
          },
          diagnosisKeperawatanIntervensis: {
            create: [
              { ...who, intervensi: 'Edukasi Aktivitas / istirahat' },
              { ...who, intervensi: 'Edukasi berat badan efektif' },
              { ...who, intervensi: 'Edukasi dehidrasi' },
              { ...who, intervensi: 'Edukasi pengukuran suhu tubuh' },
              { ...who, intervensi: 'Edukasi terapi cairan' },
              { ...who, intervensi: 'Edukasi termoregulasi' },
              {
                ...who,
                intervensi: 'Monitor suhu tubuh sampai setabil 36,5°C – 37,5°C',
              },
              {
                ...who,
                intervensi:
                  'Monitor tekanan darah, frekuensi pernafasan dan nadi',
              },
              { ...who, intervensi: 'Monitor suhu tubuh tiap dua jam' },
              {
                ...who,
                intervensi:
                  'Monitor dan catat tanda dan gejala hipotermia atau hipertermia',
              },
              { ...who, intervensi: 'Monitor warna dan suhu kulit' },
              {
                ...who,
                intervensi: 'Pasang alat pemantau suhu kontinu, jika perlu',
              },
              {
                ...who,
                intervensi: 'Sesuaikan suhu lingkungan dengan kebutuhan pasien',
              },
              {
                ...who,
                intervensi:
                  'Anjurkan penggunaan pakaian yang dapat menyerap keringat',
              },
              { ...who, intervensi: 'Anjurkan memperbanyak minum' },
              {
                ...who,
                intervensi: 'Anjurkan penggunaan pakaian yang longgar',
              },
              {
                ...who,
                intervensi:
                  'Ajarkan pencegahan hipotermi karena terpapar udara dingin',
              },
              {
                ...who,
                intervensi: 'Kolaborasi pemberian antipiretik jika perlu',
              },
            ],
          },
        },
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

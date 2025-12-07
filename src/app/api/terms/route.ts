import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  try {
    const termsAndConditions = {
      title: "Syarat & Ketentuan",
      company: "PT PUTRA PETIR PERKASA",
      lastUpdated: new Date().toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      sections: [
        {
          title: "Pendahuluan",
          content: "Selamat datang di PT PUTRA PETIR PERKASA. Syarat dan Ketentuan ini mengatur penggunaan layanan jasa instalasi tenaga listrik yang kami sediakan. Dengan menggunakan layanan kami, Anda menyetujui untuk terikat oleh syarat dan ketentuan yang berlaku."
        },
        {
          title: "Lingkup Layanan",
          content: "PT PUTRA PETIR PERKASA menyediakan layanan instalasi tenaga listrik untuk gedung, instalasi tenaga listrik untuk pabrik, perawatan dan perbaikan sistem listrik, konsultasi teknis instalasi listrik, survey dan perencanaan instalasi, serta testing dan commissioning sistem."
        },
        {
          title: "Kewajiban Klien",
          content: "Sebagai klien, Anda setuju untuk memberikan informasi yang akurat dan lengkap tentang proyek, menyediakan akses yang memadai ke lokasi kerja, memastikan lokasi proyek aman untuk dikerjakan, memberikan izin kerja yang diperlukan, melakukan pembayaran sesuai kesepakatan, memberikan konfirmasi atas pekerjaan yang selesai, dan melaporkan masalah atau keluhan secara tertulis."
        },
        {
          title: "Kewajiban Perusahaan",
          content: "PT PUTRA PETIR PERKASA berkomitmen untuk menyediakan tenaga ahli yang berpengalaman dan bersertifikat, menggunakan material berkualitas sesuai standar, mengerjakan proyek sesuai spesifikasi yang disepakati, mematuhi standar keselamatan kerja (K3), menyelesaikan proyek sesuai jadwal yang ditetapkan, memberikan garansi untuk pekerjaan yang dilakukan, dan menyediakan dokumentasi lengkap setelah selesai."
        },
        {
          title: "Syarat Pembayaran",
          content: "Ketentuan pembayaran yang berlaku: uang muka (DP) minimal 30% dari total nilai kontrak, pembayaran tahapan sesuai progress pekerjaan, pelunasan sebelum serah terima akhir, pembayaran dilakukan melalui transfer ke rekening perusahaan, biaya tambahan akan disepakati terlebih dahulu, keterlambatan pembayaran dikenakan bunga 2% per bulan."
        },
        {
          title: "Garansi",
          content: "Kami memberikan garansi untuk pekerjaan instalasi: 12 bulan, material (sesuai ketentuan pabrikan), service purna jual: 3 kali kunjungan dalam 3 bulan pertama. Garansi tidak berlaku untuk kerusakan akibat bencana alam, kesalahan penggunaan, atau modifikasi tidak resmi."
        },
        {
          title: "Pembatasan Tanggung Jawab",
          content: "PT PUTRA PETIR PERKASA tidak bertanggung jawab atas kerugian tidak langsung atau konsekuensial, kerusakan akibat force majeure (bencana alam, kerusuhan, dll), keterlambatan akibat faktor di luar kontrol kami, kesalahan yang disebabkan oleh pihak ketiga, kerusakan yang terjadi setelah serah terima proyek."
        },
        {
          title: "Penghentian Kontrak",
          content: "Kontrak dapat dihentikan jika ada kesepakatan bersama antara kedua belah pihak, salah satu pihak melanggar syarat dan ketentuan, terjadi force majeure yang menghambat pelaksanaan proyek, atau pihak ketiga (klien) melakukan pembatalan sepihak. Pembatalan sepihak oleh klien akan dikenakan biaya sesuai pekerjaan yang telah dilakukan dan material yang telah dibeli."
        },
        {
          title: "Penyelesaian Sengketa",
          content: "Setiap sengketa yang timbul dari atau berhubungan dengan syarat dan ketentuan ini akan diselesaikan secara musyawarah terlebih dahulu. Jika tidak tercapai kesepakatan, sengketa akan diselesaikan melalui pengadilan negeri di Denpasar, Bali."
        },
        {
          title: "Hak Kekayaan Intelektual",
          content: "Semua desain, rencana kerja, dokumentasi, dan metode kerja yang dikembangkan oleh PT PUTRA PETIR PERKASA merupakan hak milik intelektual perusahaan dan tidak boleh digunakan atau disalin tanpa izin tertulis."
        },
        {
          title: "Hukum yang Berlaku",
          content: "Syarat dan ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum yang berlaku di Republik Indonesia."
        }
      ],
      contact: {
        email: "legal@putrapetirperkasa.com",
        phone: "0823-8246-6248",
        address: "Jl. Ahmad Yani Gg. V No. Br Lumintang, Dauh Puri Kaja, Denpasar Utara, Denpasar City, Bali 80111"
      }
    }

    return NextResponse.json({
      success: true,
      data: termsAndConditions
    })

  } catch (error) {
    console.error('Error fetching terms and conditions:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
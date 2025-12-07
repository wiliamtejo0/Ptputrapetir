import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  try {
    const privacyPolicy = {
      title: "Kebijakan Privasi",
      company: "PT PUTRA PETIR PERKASA",
      lastUpdated: new Date().toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      sections: [
        {
          title: "Pendahuluan",
          content: "Selamat datang di PT PUTRA PETIR PERKASA. Kami sangat memahami pentingnya privasi dan keamanan data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi Anda ketika menggunakan layanan jasa instalasi tenaga listrik kami."
        },
        {
          title: "Pengumpulan Data",
          content: "Data yang kami kumpulkan meliputi: nama lengkap dan informasi kontak, alamat lengkap untuk lokasi proyek, informasi perusahaan, detail kebutuhan instalasi listrik, informasi teknis terkait proyek, dan data komunikasi dengan tim kami."
        },
        {
          title: "Penggunaan Data",
          content: "Kami menggunakan data pribadi Anda untuk memberikan penawaran harga dan konsultasi layanan, menjadwalkan survey dan pelaksanaan proyek, komunikasi terkait progress proyek, penagihan dan administrasi keuangan, memberikan layanan purna jual dan maintenance, meningkatkan kualitas layanan kami, serta memenuhi kewajiban hukum dan peraturan."
        },
        {
          title: "Perlindungan Data",
          content: "PT PUTRA PETIR PERKASA berkomitmen untuk melindungi data pribadi Anda dengan enkripsi data digital dan fisik, akses terbatas untuk authorized personnel, system keamanan berlapis, regular security audit, dan training tim tentang keamanan data."
        },
        {
          title: "Pembagian Data",
          content: "Kami tidak menjual atau menyewakan data pribadi Anda kepada pihak ketiga. Data hanya akan dibagikan dengan persetujuan explisit dari Anda, kepada mitra kerja untuk pelaksanaan proyek, untuk memenuhi kewajiban hukum, atau untuk melindungi hak dan keamanan perusahaan."
        },
        {
          title: "Hak Pengguna",
          content: "Anda memiliki hak untuk mengakses data pribadi yang kami simpan, memperbaiki data yang tidak akurat, menghapus data pribadi (dengan syarat dan ketentuan), menolak penggunaan data untuk tujuan tertentu, dan meminta salinan data pribadi Anda."
        },
        {
          title: "Kebijakan Cookies",
          content: "Website kami menggunakan cookies untuk meningkatkan pengalaman pengguna. Cookies membantu kami mengingat preferensi Anda dan menganalisis traffic website. Anda dapat mengatur cookies melalui browser settings."
        },
        {
          title: "Pembaruan Kebijakan",
          content: "Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan diinformasikan melalui website atau email. Penggunaan layanan kami setelah perubahan berarti Anda menyetujui kebijakan yang diperbarui."
        }
      ],
      contact: {
        email: "privacy@putrapetirperkasa.com",
        phone: "0823-8246-6248",
        address: "Jl. Ahmad Yani Gg. V No. Br Lumintang, Dauh Puri Kaja, Denpasar Utara, Denpasar City, Bali 80111"
      }
    }

    return NextResponse.json({
      success: true,
      data: privacyPolicy
    })

  } catch (error) {
    console.error('Error fetching privacy policy:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
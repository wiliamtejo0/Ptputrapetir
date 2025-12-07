'use client'

import { Shield, Eye, Lock, UserCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPolicy() {
  const currentDate = new Date().toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
              <Shield className="w-8 h-8 text-orange-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Kebijakan Privasi
            </h1>
            <p className="text-lg text-gray-600">
              PT PUTRA PETIR PERKASA - Jasa Instalasi Tenaga Listrik Professional
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Terakhir diperbarui: {currentDate}
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Eye className="w-6 h-6 text-orange-600 mr-3" />
                Pendahuluan
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Selamat datang di PT PUTRA PETIR PERKASA. Kami sangat memahami pentingnya 
                privasi dan keamanan data pribadi Anda. Kebijakan Privasi ini menjelaskan 
                bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi 
                pribadi Anda ketika menggunakan layanan jasa instalasi tenaga listrik kami.
              </p>
            </section>

            {/* Data Collection */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <UserCheck className="w-6 h-6 text-orange-600 mr-3" />
                Pengumpulan Data
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Data yang Kami Kumpulkan:
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Nama lengkap dan informasi kontak (telepon, email)</li>
                    <li>Alamat lengkap untuk lokasi proyek</li>
                    <li>Informasi perusahaan (jika berlaku)</li>
                    <li>Detail kebutuhan instalasi listrik</li>
                    <li>Informasi teknis terkait proyek</li>
                    <li>Data komunikasi dengan tim kami</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Cara Pengumpulan:
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Formulir kontak di website</li>
                    <li>Komunikasi langsung (telepon, email, WhatsApp)</li>
                    <li>Survey lokasi proyek</li>
                    <li>Dokumentasi proyek</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Usage */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Lock className="w-6 h-6 text-orange-600 mr-3" />
                Penggunaan Data
              </h2>
              <p className="text-gray-600 mb-4">
                Kami menggunakan data pribadi Anda untuk:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Memberikan penawaran harga dan konsultasi layanan</li>
                <li>Menjadwalkan survey dan pelaksanaan proyek</li>
                <li>Komunikasi terkait progress proyek</li>
                <li>Penagihan dan administrasi keuangan</li>
                <li>Memberikan layanan purna jual dan maintenance</li>
                <li>Meningkatkan kualitas layanan kami</li>
                <li>Memenuhi kewajiban hukum dan peraturan</li>
              </ul>
            </section>

            {/* Data Protection */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Shield className="w-6 h-6 text-orange-600 mr-3" />
                Perlindungan Data
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  PT PUTRA PETIR PERKASA berkomitmen untuk melindungi data pribadi Anda dengan:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Enkripsi data digital dan fisik</li>
                  <li>Akses terbatas untuk authorized personnel</li>
                  <li>System keamanan berlapis</li>
                  <li>Regular security audit</li>
                  <li>Training tim tentang keamanan data</li>
                </ul>
              </div>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Pembagian Data
              </h2>
              <p className="text-gray-600 mb-4">
                Kami tidak menjual atau menyewakan data pribadi Anda kepada pihak ketiga. 
                Data hanya akan dibagikan dalam kondisi berikut:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Dengan persetujuan explisit dari Anda</li>
                <li>Kepada mitra kerja untuk pelaksanaan proyek</li>
                <li>Untuk memenuhi kewajiban hukum</li>
                <li>Untuk melindungi hak dan keamanan perusahaan</li>
              </ul>
            </section>

            {/* User Rights */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Hak Anda sebagai Pengguna
              </h2>
              <p className="text-gray-600 mb-4">
                Anda memiliki hak untuk:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Mengakses data pribadi yang kami simpan</li>
                <li>Memperbaiki data yang tidak akurat</li>
                <li>Menghapus data pribadi (dengan syarat dan ketentuan)</li>
                <li>Menolak penggunaan data untuk tujuan tertentu</li>
                <li>Meminta salinan data pribadi Anda</li>
              </ul>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Kebijakan Cookies
              </h2>
              <p className="text-gray-600">
                Website kami menggunakan cookies untuk meningkatkan pengalaman pengguna. 
                Cookies membantu kami mengingat preferensi Anda dan menganalisis traffic website. 
                Anda dapat mengatur cookies melalui browser settings.
              </p>
            </section>

            {/* Policy Updates */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Pembaruan Kebijakan
              </h2>
              <p className="text-gray-600">
                Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. 
                Perubahan akan diinformasikan melalui website atau email. 
                Penggunaan layanan kami setelah perubahan berarti Anda menyetujui kebijakan yang diperbarui.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Hubungi Kami
              </h2>
              <p className="text-gray-600 mb-4">
                Jika Anda memiliki pertanyaan tentang kebijakan privasi kami atau 
                ingin melaksanakan hak Anda sebagai pengguna, silakan hubungi:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="font-semibold text-gray-900 mb-2">PT PUTRA PETIR PERKASA</p>
                <p className="text-gray-600 mb-1">Email: privacy@putrapetirperkasa.com</p>
                <p className="text-gray-600 mb-1">Telepon: 0823-8246-6248</p>
                <p className="text-gray-600">
                  Alamat: Jl. Ahmad Yani Gg. V No. Br Lumintang, Dauh Puri Kaja, 
                  Denpasar Utara, Denpasar City, Bali 80111
                </p>
              </div>
            </section>
          </div>

          {/* Action */}
          <div className="text-center mt-12">
            <Button 
              onClick={() => window.history.back()} 
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Kembali ke Halaman Utama
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
'use client'

import { FileText, Shield, AlertCircle, CheckCircle, Scale } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function TermsAndConditions() {
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
              <FileText className="w-8 h-8 text-orange-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Syarat & Ketentuan
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
                <FileText className="w-6 h-6 text-orange-600 mr-3" />
                Pendahuluan
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Selamat datang di PT PUTRA PETIR PERKASA. Syarat dan Ketentuan ini 
                mengatur penggunaan layanan jasa instalasi tenaga listrik yang kami 
                sediakan. Dengan menggunakan layanan kami, Anda menyetujui untuk 
                terikat oleh syarat dan ketentuan yang berlaku.
              </p>
            </section>

            {/* Service Scope */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 text-orange-600 mr-3" />
                Lingkup Layanan
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  PT PUTRA PETIR PERKASA menyediakan layanan:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Instalasi tenaga listrik untuk gedung</li>
                  <li>Instalasi tenaga listrik untuk pabrik</li>
                  <li>Perawatan dan perbaikan sistem listrik</li>
                  <li>Konsultasi teknis instalasi listrik</li>
                  <li>Survey dan perencanaan instalasi</li>
                  <li>Testing dan commissioning sistem</li>
                </ul>
              </div>
            </section>

            {/* Client Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Shield className="w-6 h-6 text-orange-600 mr-3" />
                Kewajiban Klien
              </h2>
              <p className="text-gray-600 mb-4">
                Sebagai klien, Anda setuju untuk:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Memberikan informasi yang akurat dan lengkap tentang proyek</li>
                <li>Menyediakan akses yang memadai ke lokasi kerja</li>
                <li>Memastikan lokasi proyek aman untuk dikerjakan</li>
                <li>Memberikan izin kerja yang diperlukan (jika ada)</li>
                <li>Melakukan pembayaran sesuai kesepakatan</li>
                <li>Memberikan konfirmasi atas pekerjaan yang selesai</li>
                <li>Melaporkan masalah atau keluhan secara tertulis</li>
              </ul>
            </section>

            {/* Company Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 text-orange-600 mr-3" />
                Kewajiban Perusahaan
              </h2>
              <p className="text-gray-600 mb-4">
                PT PUTRA PETIR PERKASA berkomitmen untuk:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Menyediakan tenaga ahli yang berpengalaman dan bersertifikat</li>
                <li>Menggunakan material berkualitas sesuai standar</li>
                <li>Mengerjakan proyek sesuai spesifikasi yang disepakati</li>
                <li>Mematuhi standar keselamatan kerja (K3)</li>
                <li>Menyelesaikan proyek sesuai jadwal yang ditetapkan</li>
                <li>Memberikan garansi untuk pekerjaan yang dilakukan</li>
                <li>Menyediakan dokumentasi lengkap setelah selesai</li>
              </ul>
            </section>

            {/* Payment Terms */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Scale className="w-6 h-6 text-orange-600 mr-3" />
                Syarat Pembayaran
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Ketentuan pembayaran yang berlaku:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Uang muka (DP) minimal 30% dari total nilai kontrak</li>
                  <li>Pembayaran tahapan sesuai progress pekerjaan</li>
                  <li>Pelunasan sebelum serah terima akhir</li>
                  <li>Pembayaran dilakukan melalui transfer ke rekening perusahaan</li>
                  <li>Biaya tambahan akan disepakati terlebih dahulu</li>
                  <li>Keterlambatan pembayaran dikenakan bunga 2% per bulan</li>
                </ul>
              </div>
            </section>

            {/* Warranty */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Garansi
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Kami memberikan garansi untuk:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Pekerjaan instalasi: 12 bulan</li>
                  <li>Material (sesuai ketentuan pabrikan)</li>
                  <li>Service purna jual: 3 kali kunjungan dalam 3 bulan pertama</li>
                </ul>
                <p className="text-gray-600 text-sm italic">
                  Garansi tidak berlaku untuk kerusakan akibat bencana alam, 
                  kesalahan penggunaan, atau modifikasi tidak resmi.
                </p>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertCircle className="w-6 h-6 text-orange-600 mr-3" />
                Pembatasan Tanggung Jawab
              </h2>
              <p className="text-gray-600 mb-4">
                PT PUTRA PETIR PERKASA tidak bertanggung jawab atas:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Kerugian tidak langsung atau konsekuensial</li>
                <li>Kerusakan akibat force majeure (bencana alam, kerusuhan, dll)</li>
                <li>Keterlambatan akibat faktor di luar kontrol kami</li>
                <li>Kesalahan yang disebabkan oleh pihak ketiga</li>
                <li>Kerusakan yang terjadi setelah serah terima proyek</li>
              </ul>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Penghentian Kontrak
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Kontrak dapat dihentikan jika:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Ada kesepakatan bersama antara kedua belah pihak</li>
                  <li>Salah satu pihak melanggar syarat dan ketentuan</li>
                  <li>Terjadi force majeure yang menghambat pelaksanaan proyek</li>
                  <li>Pihak ketiga (klien) melakukan pembatalan sepihak</li>
                </ul>
                <p className="text-gray-600 text-sm">
                  Pembatalan sepihak oleh klien akan dikenakan biaya 
                  sesuai pekerjaan yang telah dilakukan dan material yang telah dibeli.
                </p>
              </div>
            </section>

            {/* Dispute Resolution */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Penyelesaian Sengketa
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Setiap sengketa yang timbul dari atau berhubungan dengan syarat dan 
                ketentuan ini akan diselesaikan secara musyawarah terlebih dahulu. 
                Jika tidak tercapai kesepakatan, sengketa akan diselesaikan melalui 
                pengadilan negeri di Denpasar, Bali.
              </p>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Hak Kekayaan Intelektual
              </h2>
              <p className="text-gray-600">
                Semua desain, rencana kerja, dokumentasi, dan metode kerja yang 
                dikembangkan oleh PT PUTRA PETIR PERKASA merupakan hak milik intelektual 
                perusahaan dan tidak boleh digunakan atau disalin tanpa izin tertulis.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Hukum yang Berlaku
              </h2>
              <p className="text-gray-600">
                Syarat dan ketentuan ini diatur oleh dan ditafsirkan sesuai dengan 
                hukum yang berlaku di Republik Indonesia.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Hubungi Kami
              </h2>
              <p className="text-gray-600 mb-4">
                Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini, 
                silakan hubungi kami:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="font-semibold text-gray-900 mb-2">PT PUTRA PETIR PERKASA</p>
                <p className="text-gray-600 mb-1">Email: legal@putrapetirperkasa.com</p>
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
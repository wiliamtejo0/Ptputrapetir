import { MapPin, Phone, Mail, Clock, Zap, Shield, Award } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.png"
                  alt="PT PUTRA PETIR PERKASA Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-orange-500">
                  PT PUTRA PETIR PERKASA
                </h3>
                <p className="text-sm text-gray-400">
                  Jasa Instalasi Tenaga Listrik Professional
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Perusahaan professional yang bergerak dalam bidang jasa pelaksana instalasi 
              tenaga listrik untuk gedung dan pabrik. Kami menyediakan layanan pembangunan 
              dengan mutu prima dan standar keamanan tinggi.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Shield className="w-4 h-4 text-orange-500" />
                <span>Standar Keamanan Tinggi</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Award className="w-4 h-4 text-orange-500" />
                <span>Mutu Prima</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-500">
              Informasi Kontak
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">
                    Jl. Ahmad Yani Gg. V No. Br Lumintang
                  </p>
                  <p className="text-sm text-gray-300">
                    Dauh Puri Kaja, Denpasar Utara
                  </p>
                  <p className="text-sm text-gray-300">
                    Denpasar City, Bali 80111
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <p className="text-sm text-gray-300">0823-8246-6248</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <p className="text-sm text-gray-300">info@putrapetirperkasa.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Senin - Jumat: 08:00 - 17:00</p>
                  <p className="text-sm text-gray-300">Sabtu: 08:00 - 12:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-500">
              Link Cepat
            </h4>
            <div className="space-y-2">
              <a
                href="#home"
                className="block text-sm text-gray-300 hover:text-orange-500 transition-all duration-300 hover:translate-x-1"
              >
                Beranda
              </a>
              <a
                href="#services"
                className="block text-sm text-gray-300 hover:text-orange-500 transition-all duration-300 hover:translate-x-1"
              >
                Layanan Kami
              </a>
              <a
                href="#about"
                className="block text-sm text-gray-300 hover:text-orange-500 transition-all duration-300 hover:translate-x-1"
              >
                Tentang Perusahaan
              </a>
              <a
                href="#contact"
                className="block text-sm text-gray-300 hover:text-orange-500 transition-all duration-300 hover:translate-x-1"
              >
                Kontak
              </a>
              <a
                href="/privacy"
                className="block text-sm text-gray-300 hover:text-orange-500 transition-all duration-300 hover:translate-x-1"
              >
                Kebijakan Privasi
              </a>
              <a
                href="/terms"
                className="block text-sm text-gray-300 hover:text-orange-500 transition-all duration-300 hover:translate-x-1"
              >
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} PT PUTRA PETIR PERKASA. Hak Cipta Dilindungi.
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Zap className="w-4 h-4 text-orange-500" />
              <span>Powered by Professional Electrical Installation Services</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
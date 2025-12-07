'use client'

import { useState, useEffect } from 'react'
import { 
  Zap, 
  Shield, 
  Award, 
  Users, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Wrench,
  Factory,
  Building,
  Lightbulb,
  Bolt,
  HardHat
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'

export default function Home() {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0)

  const services = [
    {
      icon: Building,
      title: "Instalasi Listrik Gedung",
      description: "Pemasangan sistem tenaga listrik untuk gedung perkantoran, komersial, dan residensial dengan standar keamanan tertinggi.",
      features: ["Instalasi Baru", "Peningkatan Kapasitas", "Sistem Darurat", "Penerangan"]
    },
    {
      icon: Factory,
      title: "Instalasi Listrik Pabrik",
      description: "Solusi lengkap untuk kebutuhan tenaga listrik industri dengan sistem yang handal dan efisien.",
      features: ["Panel Kontrol", "Sistem 3 Phase", "Grounding System", "Maintenance"]
    },
    {
      icon: Wrench,
      title: "Maintenance & Repair",
      description: "Layanan perawatan dan perbaikan sistem listrik untuk memastikan operasional yang optimal.",
      features: ["Inspeksi Berkala", "Troubleshooting", "Preventive Maintenance", "Emergency Service"]
    }
  ]

  const benefits = [
    {
      icon: Shield,
      title: "Standar Keamanan Tinggi",
      description: "Mengikuti standar keselamatan internasional dan regulasi lokal yang berlaku."
    },
    {
      icon: Award,
      title: "Mutu Prima",
      description: "Menggunakan material berkualitas tinggi dan tenaga ahli berpengalaman."
    },
    {
      icon: Clock,
      title: "Tepat Waktu",
      description: "Proyek selesai sesuai jadwal yang telah ditetapkan tanpa mengurangi kualitas."
    },
    {
      icon: Users,
      title: "Tim Profesional",
      description: "Tenaga ahli bersertifikasi dan berpengalaman dalam instalasi listrik."
    }
  ]

  const projects = [
    {
      title: "Gedung Perkantoran",
      description: "Instalasi listrik lengkap untuk gedung perkantoran 5 lantai",
      type: "Commercial"
    },
    {
      title: "Pabrik Manufaktur",
      description: "Sistem tenaga listrik 3 phase untuk pabrik produksi",
      type: "Industrial"
    },
    {
      title: "Ruko Komersial",
      description: "Instalasi listrik untuk kompleks ruko 3 unit",
      type: "Commercial"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveServiceIndex((prev) => (prev + 1) % services.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [services.length])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <SmoothScroll />
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-blue-600/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center p-3 bg-orange-100 rounded-full mb-6">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              PT <span className="text-orange-600">PUTRA PETIR</span> PERKASA
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Jasa Pelaksana Instalasi Tenaga Listrik Gedung dan Pabrik
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto">
              Solusi professional dengan mutu prima dan standar keamanan tinggi untuk 
              kebutuhan instalasi tenaga listrik Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <Phone className="w-5 h-5 mr-2" />
                Hubungi Kami Sekarang
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Lihat Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Layanan <span className="text-orange-600">Unggulan</span> Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solusi lengkap untuk kebutuhan instalasi tenaga listrik profesional
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer ${
                  activeServiceIndex === index ? 'ring-2 ring-orange-500 scale-105' : ''
                }`}
                onMouseEnter={() => setActiveServiceIndex(index)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6 transition-all duration-300 group-hover:bg-orange-200">
                    <service.icon className="w-8 h-8 text-orange-600 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Mengapa Memilih <span className="text-orange-600">Kami</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                PT PUTRA PETIR PERKASA adalah perusahaan professional yang bergerak dalam bidang 
                jasa pelaksana instalasi tenaga listrik untuk gedung dan pabrik. Kami berkomitmen 
                untuk memberikan layanan pembangunan dengan mutu prima dan standar keamanan tinggi.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-full flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-400 to-blue-600 rounded-2xl p-8 text-white">
                <HardHat className="w-16 h-16 mb-6" />
                <h3 className="text-2xl font-bold mb-4">
                  Pengalaman & Keahlian
                </h3>
                <p className="mb-6">
                  Tim kami terdiri dari tenaga ahli profesional yang telah berpengalaman 
                  dalam berbagai proyek instalasi listrik skala besar.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">100+</div>
                    <div className="text-sm opacity-90">Proyek Selesai</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">15+</div>
                    <div className="text-sm opacity-90">Tahun Pengalaman</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proyek <span className="text-orange-600">Terbaru</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai proyek instalasi listrik yang telah kami kerjakan dengan hasil memuaskan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-orange-400 to-blue-600 group-hover:scale-105 transition-transform duration-500"></div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                      {project.type}
                    </span>
                    <Bolt className="w-5 h-5 text-orange-600 group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Hubungi <span className="text-orange-500">Kami</span>
            </h2>
            <p className="text-xl text-gray-300">
              Siap membantu kebutuhan instalasi listrik Anda
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-orange-500">
                Informasi Kontak
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-orange-600 rounded-full">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Alamat</p>
                    <p className="text-gray-300">
                      Jl. Ahmad Yani Gg. V No. Br Lumintang, Dauh Puri Kaja, 
                      Denpasar Utara, Denpasar City, Bali 80111
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-orange-600 rounded-full">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Telepon</p>
                    <p className="text-gray-300">0823-8246-6248</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-orange-600 rounded-full">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-300">info@putrapetirperkasa.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-orange-500">
                Kirim Pesan
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nama Lengkap</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500 text-white"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500 text-white"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Pesan</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500 text-white"
                    placeholder="Jelaskan kebutuhan Anda..."
                  ></textarea>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  Kirim Pesan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
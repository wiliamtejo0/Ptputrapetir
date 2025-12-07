import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PT PUTRA PETIR PERKASA - Jasa Instalasi Tenaga Listrik Professional",
  description: "Perusahaan professional yang bergerak dalam bidang jasa pelaksana instalasi tenaga listrik untuk gedung dan pabrik dengan mutu prima dan standar keamanan tinggi.",
  keywords: ["PT PUTRA PETIR PERKASA", "instalasi listrik", "tenaga listrik", "gedung", "pabrik", "jasa listrik", "electrical installation", "Denpasar", "Bali"],
  authors: [{ name: "PT PUTRA PETIR PERKASA" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "PT PUTRA PETIR PERKASA - Jasa Instalasi Tenaga Listrik",
    description: "Solusi professional dengan mutu prima dan standar keamanan tinggi untuk kebutuhan instalasi tenaga listrik gedung dan pabrik.",
    url: "https://putrapetirperkasa.com",
    siteName: "PT PUTRA PETIR PERKASA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT PUTRA PETIR PERKASA - Jasa Instalasi Tenaga Listrik",
    description: "Solusi professional dengan mutu prima dan standar keamanan tinggi untuk kebutuhan instalasi tenaga listrik gedung dan pabrik.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta name="facebook-domain-verification" content="0mperqq0eioyrooeec338voh4shr3s" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

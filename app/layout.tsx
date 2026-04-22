// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

// Metadata terpisah (tanpa viewport)
export const metadata: Metadata = {
  title: "AI Construction Solutions | Otomasi Data Proyek Konstruksi Indonesia",
  description: "Solusi AI untuk kontraktor Indonesia: estimasi RAB otomatis, review kontrak, monitoring proyek via visi komputer, dan generator laporan harian.",
  keywords: "AI konstruksi, estimasi RAB otomatis, review kontrak AI, monitoring proyek, kontraktor Indonesia",
  icons: {
    icon: "/favicon.ico",
  },
};

// Viewport dipisah ke ekspor terpisah
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
  // themeColor: "white", // opsional, bisa ditambahkan
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
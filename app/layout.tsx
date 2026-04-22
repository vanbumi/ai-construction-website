import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Construction Solutions | Otomasi Data Proyek Konstruksi Indonesia",
  description: "Solusi AI untuk kontraktor Indonesia: estimasi RAB otomatis, review kontrak, monitoring proyek via visi komputer, dan generator laporan harian.",
  keywords: "AI konstruksi, estimasi RAB otomatis, review kontrak AI, monitoring proyek, kontraktor Indonesia",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
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
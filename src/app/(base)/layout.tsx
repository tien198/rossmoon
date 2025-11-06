import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Footer from "@/component/layout/Footer";
import Header from "@/component/layout/Header/Header";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const revalidate = false

export const metadata: Metadata = {
  title: "Rossmoon",
  description: "Thời trang thời thượng, tinh tế trong từng đường khâu mũi chỉ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

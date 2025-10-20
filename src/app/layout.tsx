import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TanProvider from "./TanProvider";
import ReduxProvider from "./ReduxProviderr";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

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
        <div id="modal"></div>
        <ReduxProvider>
          {/* Tanstack Provider */}
          <TanProvider>{children}</TanProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}

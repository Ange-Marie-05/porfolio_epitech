import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layouts/Sidebar";

const fontSans = Space_Grotesk({
  variable: "--font-space-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const fontMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "ange_marie_portfolio",
  description: "made by sir_lorand/soldier_76/ange-marie",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${fontSans.variable} ${fontMono.variable} antialiased bg-background`}>
        <Sidebar />

        <main className="md:ml-[200px] lg:ml-[250px] xl:ml-[300px] mt-15 md:mt-0 p-4 md:p-6 overflow-y-auto min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}

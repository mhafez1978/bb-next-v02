import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "./components/custom/header/Header";
import Footer from "./components/tailGrids/footer/Footer";
import Script from "next/script";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });


// app/components/Logo.tsx
import { Playfair_Display } from '@next/font/google'; // Import Playfair Display

// Initialize Playfair Display font
const playfair = Playfair_Display({
  weight: ['700'], // Use the desired weight
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Blooming Brands LLC | Next Generation Web Development",
  description: "Online Marketing Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.css"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playwrite+CU:wght@100..400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <Script
          strategy="lazyOnload"
          src="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js"
        />
      </body>
    </html>
  );
}

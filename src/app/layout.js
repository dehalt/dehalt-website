import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

import SmoothScroll from "@/components/SmoothScroll";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dehalt",
  description: "Automate marketing reports, dashboards, and PowerPoint presentations for ecommerce agencies. Turn campaign data into polished, client-ready reports automatically.",

  openGraph: {
    title: "Dehalt",
    description:
      "Automate marketing reports and dashboards for ecommerce businesses",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/dehaltad.ico",
    apple: "/images/logo.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18017065552"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18017065552');
          `}
        </Script>
        <Script id="gtag-conversion" strategy="afterInteractive">
          {`gtag('event', 'conversion', {'send_to': 'AW-18017065552/sFGKCKq01IocENC0mo9D'});`}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <SmoothScroll>
          {children}
        </SmoothScroll>

      </body>
    </html>
  );
}


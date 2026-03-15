import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}


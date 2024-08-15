import type { Metadata } from "next";
import "./globals.css";
import { plus_jakarta } from "./fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Descipr | Become a 360-degree AI Professional",
    default: "Decipr",
    absolute: "Decipr",
  },
  description:
    "Unlock your AI potential with our Fellowships led by Hiring managers. Gain personalized guidance, tackle job-simulation projects, and join a supportive community. Start now to fast-track your AI career!",
  metadataBase: new URL("https://deciphr.vercel.app/"),
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    title: "Decipr | Become a 360-degree AI Professional",
    description:
      "Unlock your AI potential with our Fellowships led by Hiring managers. Gain personalized guidance, tackle job-simulation projects, and join a supportive community. Start now to fast-track your AI career!",
    url: "https://deciphr.vercel.app/",
    images: [
      {
        url: "https://deciphr.vercel.app/your-opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Decipr - Become a 360-degree AI Professional",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plus_jakarta.className} bg-gradient-custom bg-fixed bg-cover`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

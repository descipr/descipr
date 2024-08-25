import type { Metadata } from "next";
import "./globals.css";
import { plus_jakarta } from "./fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HorizontalLine from "@/components/ui/HorizontalLine";
import FloatingButton from "@/components/FloatingButton";
import PageLoader from "@/components/PageLoader";

export const metadata: Metadata = {
  title: {
    template: "%s | Descipr ",
    default: "Descipr ",
    absolute: "Descipr | Become a 360-degree AI Professional ",
  },
  description:
    "Unlock your AI potential with our Fellowships led by Hiring managers. Gain personalized guidance, tackle job-simulation projects, and join a supportive community. Start now to fast-track your AI career!",
  metadataBase: new URL("https://www.descipr.com"),
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    title: "Descipr | Become a 360-degree AI Professional",
    description:
      "Unlock your AI potential with our Fellowships led by Hiring managers. Gain personalized guidance, tackle job-simulation projects, and join a supportive community. Start now to fast-track your AI career!",
    url: "https://www.descipr.com",
    images: [
      {
        url: "https://www.descipr.com/your-opengraph-image.jpg",
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
        className={`${plus_jakarta.className} relative bg-gradient-custom bg-fixed bg-cover`}
      >
        <FloatingButton />
        <Navbar />
        {children}
        <HorizontalLine />
        <Footer />
      </body>
    </html>
  );
}

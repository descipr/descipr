import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank you",
  description: "Descipr | Thank you",
};

export default function ThankYouLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}

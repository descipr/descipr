
import { Metadata } from "next";
import WorkshopFloatingBar from "../_components/workshop/WorkshopFloatingBar";

export const metadata: Metadata = {
  title: "Workshop",
  description: "Descipr | Workshop",
};

export default function Workshop_pyt({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="relative">
      <WorkshopFloatingBar date="Dec 15" cost="₹0" />
      {children}
    </section>
  );
}

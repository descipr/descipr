import WorkshopFloatingBar from "@/components/ui/WorkshopFloatingBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workshop",
  description: "Descipr | Workshop",
};

export default function Workshop({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="relative">
      <WorkshopFloatingBar date="TBA" cost="₹0" />
      {children}
    </section>
  );
}

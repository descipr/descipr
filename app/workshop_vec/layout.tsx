import WorkshopFloatingBar from "@/components/ui/WorkshopFloatingBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workshop",
  description: "Descipr | Workshop",
};

export default function Workshop_vec({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="relative">
      <WorkshopFloatingBar date="Nov 17" cost="₹0" />
      {children}
    </section>
  );
}

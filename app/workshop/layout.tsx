
import { Metadata } from "next";
import WorkshopFloatingBar from "../_components/workshop/WorkshopFloatingBar";

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

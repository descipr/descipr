
import { Metadata } from "next";
import WorkshopFloatingBar from "../_components/workshop/WorkshopFloatingBar";

export const metadata: Metadata = {
  title: "Workshop",
  description: "Descipr | Workshop",
};

export default function Workshop_llm({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="relative">
      <WorkshopFloatingBar date="Oct 27" cost="₹0" />
      {children}
    </section>
  );
}

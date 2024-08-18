import TermsOfUse from "@/components/TermsofUse";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Descipr | Privacy Ploicy",
};

const page = () => {
  return <TermsOfUse />;
};

export default page;

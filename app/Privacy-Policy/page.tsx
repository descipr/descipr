import PrivacyPolicy from "@/components/PrivacyPolicy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Descipr | Privacy Ploicy",
};


const page = () => {
  return <PrivacyPolicy />;
};

export default page;

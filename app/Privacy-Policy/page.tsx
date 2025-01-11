
import { Metadata } from "next";
import PrivacyPolicy from "../_components/privacy-policy/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Provides information about the privacy policy of the company",
};


const page = () => {
  return <PrivacyPolicy />;
};

export default page;

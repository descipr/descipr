import Accomplishments from "@/app/_components/courses/Accomplishments";
import FaqSection from "@/app/_components/courses/FaqSection ";
import FloatingBar from "@/app/_components/courses/FloatingBar";
import HorizontalLine from "@/app/_components/HorizontalLine";
import { plus_jakarta } from "@/app/_fonts/fonts";

export default function CourseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section
      className={`${plus_jakarta.className} relative flex flex-col items-center justify-center overflow-hidden mx-auto sm:px-10 px-5 `}
    >
      
      <FloatingBar />
      <div className="max-w-7xl w-full flex flex-col space-y-8 items-center">
        {children}
        <HorizontalLine />
        <Accomplishments />
        <HorizontalLine />
        <FaqSection />
      </div>
    </section>
  );
}

"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; 
import Video from "./ui/Video";

interface VideoProps {
  VideoUrl?: string;
}

const LiveSessionSection = ({ VideoUrl }: VideoProps) => {
  const pathname = usePathname();
  const [isEnrollNowPage, setIsEnrollNowPage] = useState(false);

  useEffect(() => {
    if (pathname === "/workshop") {
      setIsEnrollNowPage(true);
    } else {
      setIsEnrollNowPage(false);
    }
  }, [pathname]);

  return (
    <section className="section-style mx-auto items-center">
      <div className="flex flex-col items-center space-y-4 mb-8">
        <h2 className="text-white text-center text-2xl md:text-3xl font-bold">
          Get a Glimpse of a Live Session
        </h2>
      </div>
      {isEnrollNowPage ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-7xl px-2">
          <Video VideoUrl="https://www.youtube.com/embed/yXmK7TAJ1Mc?si=dfbTOXvm8rfRi_XJ" />
          <Video VideoUrl="https://www.youtube.com/embed/md7C78glaGQ?si=3o-7rtKvM_sTg8gM" />
          <Video VideoUrl="https://www.youtube.com/embed/mctYPXz85CA?si=sM2oW7pLucnQgfIU" />
        </div>
      ) : (
        <div className="w-full max-w-3xl">
          <Video
            VideoUrl={
              VideoUrl ||
              "https://www.youtube.com/embed/yXmK7TAJ1Mc?si=dfbTOXvm8rfRi_XJ"
            }
          />
        </div>
      )}
    </section>
  );
};

export default LiveSessionSection;

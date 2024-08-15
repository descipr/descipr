
import Video from "./ui/Video";

interface VideoPropsProps {
  VideoUrl: string;
}

const LiveSessionSection = ({VideoUrl} : VideoPropsProps) => {
  return (
    <section className="section-style mx-auto items-center">
      <div className="flex flex-col items-center space-y-4 mb-8">
        <h2 className="text-white text-center text-2xl md:text-3xl font-bold">
          Get a Glimpse of a Live Session
        </h2>
      </div>
      <div className="w-full max-w-3xl">
        <Video VideoUrl = {VideoUrl} />
      </div>
    </section>
  );
};

export default LiveSessionSection;

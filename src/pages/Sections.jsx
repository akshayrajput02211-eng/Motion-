import TransformSection from "../components/sections/TransformSection";
import ProgressSection from "../components/sections/ProgressSection";
import CounterSection from "../components/sections/CounterSection"; 
import TimelineSection from "../components/sections/TimelineSection";
import StaggerSection from "../components/sections/StaggerSection";
import StringSection from "../components/sections/StringSection";
import MouseFollowSection from "../components/sections/MouseFollowSection";
import MagneticButtonSection from "../components/sections/MagneticButtonSection";
import CustomCursorSection from "../components/sections/CustomCursorSection";
import BlobCursorSection from "../components/sections/BlobCursorSection";
import CursorTrailSection from "../components/sections/CursorTrailSection";
import InfiniteMarqueeSection from "../components/sections/InfiniteMarqueeSection";
import HorizontalSection from "../components/sections/HorizontalSection";
import ParallaxSection from "../components/sections/ParallaxSection";
import ScrollTriggerSection from "../components/sections/ScrollTriggerSection";
import PremiumGlassCard from "../components/sections/PremiumGlassCard";




export default function Sections() {
  return (
    <section
      id="sections"
      className="bg-[#F5FAFF] py-32 space-y-32"
    >
      <TransformSection />
      <ProgressSection />
      <CounterSection />
      <TimelineSection />
      <StaggerSection />
      <StringSection />
      <MouseFollowSection />
      <MagneticButtonSection />
      <CustomCursorSection />
      <BlobCursorSection />
      <CursorTrailSection />
      <InfiniteMarqueeSection />
      <HorizontalSection />
      <ParallaxSection />
<ScrollTriggerSection />
      <PremiumGlassCard />


    </section>
  );
}
import TransformSection from "../components/sections/TransformSection";
import ProgressSection from "../components/sections/ProgressSection";
import CounterSection from "../components/sections/CounterSection"; 
import TimelineSection from "../components/sections/TimelineSection";
import StaggerSection from "../components/sections/StaggerSection";
import StringSection from "../components/sections/StringSection";
import MouseFollowSection from "../components/sections/MouseFollowSection";
import MagneticButtonSection from "../components/sections/MagneticButtonSection";

import BlobCursorSection from "../components/sections/BlobCursorSection";
import CursorTrailSection from "../components/sections/CursorTrailSection";
import InfiniteMarqueeSection from "../components/sections/InfiniteMarqueeSection";
import HorizontalSection from "../components/sections/HorizontalSection";
import ParallaxSection from "../components/sections/ParallaxSection";
import ScrollTriggerSection from "../components/sections/ScrollTriggerSection";
import PremiumGlassCard from "../components/sections/PremiumGlassCard";
import CardsStackSection from "../components/sections/CardsStackSection";
import TextSplitRevealSection from "../components/sections/TextSplitRevealSection";
import ThreeScene from "../components/sections/card3d";
import CreativeLoader from "../components/sections/CreativeLoader";
import ThreeDCardsSection from "../components/sections/3DCardsSection";
import BentoGridSection from "../components/sections/BentoGridSection";
import ExpandCardSection from "../components/sections/ExpandCardSection";
import AudioReactiveSection from "../components/sections/AudioReactiveSection";
import ArcCarouselSection from "../components/sections/ArcCarouselSection";
import QuantumFlowCarousel from "../components/sections/QuantumFlowCarousel";
import Horizontalcard from "../components/sections/Horizontalcard";
// import ParticalsSection from "../components/sections/ParticlesSection";
import HoverLightCardsSection from "../components/sections/HoverLightCardsSection";
import ImageRevealSection from "../components/sections/ImageRevealSection";







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
      
      
      <BlobCursorSection />
      <CursorTrailSection />
      <InfiniteMarqueeSection />
      <HorizontalSection />
      <ParallaxSection />
<ScrollTriggerSection />
      <PremiumGlassCard />
      <CardsStackSection/>
      <TextSplitRevealSection/>
      <ThreeScene />
      <CreativeLoader/>
      <ThreeDCardsSection/>
      <BentoGridSection />
      <ExpandCardSection />
      <AudioReactiveSection />
      <ArcCarouselSection />
      <QuantumFlowCarousel/>
      <Horizontalcard/>
         {/* <ParticalsSection /> */}
<HoverLightCardsSection />
<ImageRevealSection />






    </section>
  );
}
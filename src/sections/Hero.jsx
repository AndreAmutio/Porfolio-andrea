import HeroBackground from "../components/hero/HeroBackground";
import Overlay from "../components/hero/Overlay";
import Fog from "../components/hero/Fog";
import Particles from "../components/hero/Particles";
import HeroContent from "../components/hero/HeroContent";

function Hero() {
  return (
 <section className="relative h-screen overflow-hidden">
    <HeroBackground />
    <Overlay />
    <Fog />
    <Particles />
    <HeroContent />
  </section>
  );
}

export default Hero;
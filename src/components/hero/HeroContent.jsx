import HeroLine from "./HeroLine";

function HeroContent() {
  return (
    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
      <h1 style={{ fontFamily: "Cinzel" }}
        className="text-6xl md:text-8xl tracking-[0.35em] text-[#F5F1FF] drop-shadow-[0_0_18px_rgba(168,85,247,0.35)]">
        ANDREA AMUTIO
      </h1>
      <HeroLine />
      <p style={{ fontFamily: "Marcellus" }}
        className="mt-6 text-sm md:text-lg uppercase tracking-[0.32em] text-[#F1EAFE]">
        SOFTWARE & GAME DEVELOPER
      </p>
    </div>
  );
}

export default HeroContent;
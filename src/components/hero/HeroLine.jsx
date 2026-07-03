function HeroLine() {
  return (
    <div className="mt-6 flex w-full justify-center">
      <div className="relative h-px w-80 md:w-180 bg-gradient-to-r from-transparent via-violet-300 to-transparent shadow-[0_0_18px_rgba(168,85,247,0.55)]">
        <div
          className="absolute left-1/2 top-1/2
            h-[4px] w-[4px]
            -translate-x-1/2 -translate-y-1/2
            rotate-45
            bg-white
            shadow-[0_0_6px_rgba(255,255,255,1),0_0_16px_rgba(255,255,255,0.7),0_0_28px_rgba(168,85,247,0.8)]"/>
        </div>
    </div>
  );
}

export default HeroLine;
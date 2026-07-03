function ScrollIndicator() {
  return (
    <a
      href="#sobre-mi"
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
    >
      <svg
        className="h-10 w-12 animate-bounce text-[#BFA2FF]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </a>
  );
}

export default ScrollIndicator;
function NavItem({ text }) {
  return (
    <li>
      <a
        href={`#${text.toLowerCase()}`}
        className="group relative text-sm tracking-[0.2em] text-[#F5F1FF]/70 transition-all duration-300 hover:text-[#F5F1FF]"
      >
        {text}
        <span className="absolute -bottom-2 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-[#BFA2FF] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#BFA2FF]" />
      </a>
    </li>
  );
}

export default NavItem;
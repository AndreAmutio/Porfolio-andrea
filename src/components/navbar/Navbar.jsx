import NavItem from "./NavItem";
import { menuItems } from "./menu";

function Navbar() {
  return (
   <nav className="fixed left-0 top-0 z-50 w-full px-10 py-7">
    <div className="relative mx-auto flex items-center justify-between">
        <span
          style={{ fontFamily: "Cinzel" }}
          className="text-lg tracking-[0.35em] text-[#F5F1FF]"
        >
          A
        </span>

        <ul className="flex items-center gap-10">
          {menuItems.map((item) => (
            <NavItem key={item} text={item} />
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
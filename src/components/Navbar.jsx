import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Adani_logo from "../assets/Adani_logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const LINKS = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="border-b-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-8">
        <div className="pl-2">
          <a href="#">
            <img
              src={Adani_logo}
              width={150}
              height={15}
              alt="Adani-Real-Estate"
            />
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl pr-2 focus:outline-none"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>

        <div className="hidden md:flex space-x-8 md:space-x-4 pr-2">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="uppercase text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden absolute bg-neutral-50 w-full py-5 px-4 mt-2 border-b-4`}
      >
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="uppercase text-lg font-medium block py-2 tracking-wide"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

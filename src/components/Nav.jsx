import { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className=" padding-x py-8 absolute z-10 w-full">
      <nav className=" flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className=" flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className=" font-montserrat leading-normal text-lg text-slate-gray"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className=" hidden max-lg:block">
          <img
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
            onClick={() => {
              setToggleMenu(true);
            }}
          />
          {toggleMenu && (
            <div>
              <img
                src={hamburger}
                alt="hamburger"
                width={25}
                height={25}
                onClick={() => {
                  setToggleMenu(false);
                }}
                className=" absolute z-10 top-9"
              />
              <ul className=" absolute top-0 right-0 flex flex-col justify-center items-center gap-16 bg-white w-full h-screen">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className=" font-montserrat leading-normal text-lg text-slate-gray"
                      onClick={() => {
                        setToggleMenu(false);
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;

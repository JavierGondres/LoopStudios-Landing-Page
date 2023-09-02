import React, { useState, useEffect } from "react";
import logo from "../../../public/images/logo.svg";
import menu from "../../../public/images/icon-hamburger.svg";
import close from "../../../public/images/icon-close.svg";
function Header() {
    const [activeMenu, setActiveMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header>
        <nav className={`${activeMenu ? `visibility`: null}`}>
          <img className="logo" src={logo} alt="logo" />
          <div className="nav-links-container">
            <a className="nav-links" href="/">
              About
            </a>
            <a className="nav-links" href="/">
              Careers
            </a>
            <a className="nav-links" href="/">
              Events
            </a>
            <a className="nav-links" href="/">
              Products
            </a>
            <a className="nav-links" href="/">
              Support
            </a>
          </div>
        </nav>
        {windowWidth < 700 && (
          <>
            <img className="logo2" src={logo} alt="logo" />
            <img onClick={() => setActiveMenu(prev => !prev)} className="menu" src={activeMenu ? close: menu} alt="" />
          </>
        )}
        <div className="header-text-container">
          <h1 className="h-text">
            IMMESRIVE <br />
            EXPERIENCES <br />
            THAT DELIVER
          </h1>
        </div>
      </header>
    </>
  );
}

export default Header;

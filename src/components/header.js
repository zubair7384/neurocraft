import React from "react";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import LogoNight from "../../public/logo-night.svg";
import NightIcon from "../../public/night.svg";
import DayIcon from "../../public/day.svg";

const Header = ({ theme, toggleTheme, isMobile }) => {
  return (
    <div className="container">
      <div className="header flex align-items-center justify-content-between">
        <Image
          style={{ cursor: "pointer" }}
          onClick={toggleTheme}
          src={theme === "dark" ? NightIcon : DayIcon}
          width={38}
          height={38}
        />
        <Image
          src={theme === "dark" ? Logo : LogoNight}
          width={isMobile ? 222 : 357}
          height={isMobile ? 27 : 44}
        />
      </div>
    </div>
  );
};

export default Header;

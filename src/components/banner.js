import React from "react";
import LogoDarkLarge from "../../public/logo-night-large.svg";
import LogoLightLarge from "../../public/logo-day-large.svg";
import MobileLight from "../../public/mobile-light.svg";
import MobileDark from "../../public/mobile-dark.svg";
import Image from "next/image";

const Banner = ({ theme, isMobile }) => {
  return (
    <div className="container">
      <div className="banner">
        <h2 className={`banner-text text-${theme}`}>
          Premium, authentic, and meticulously curated art that connects with
          serious art collectors and tech enthusiasts.
        </h2>
        <Image
          className="banner-logo"
          src={
            isMobile
              ? theme === "dark"
                ? MobileDark
                : MobileLight
              : theme === "dark"
              ? LogoDarkLarge
              : LogoLightLarge
          }
          style={{ width: "100%" }}
          width={isMobile ? 306 : 1300}
          height={isMobile ? 306 : 190}
        />
        <div className="input-wrapper">
          <h3 className={`input-label text-${theme}`}>
            Register now to unlock exclusive content and gain early access at
            launch.
          </h3>
          <input
            type="text"
            class={`custom-input custom-input-${theme}`}
            placeholder="type email here"
          />

          <button className={`submit-button submit-button-${theme}`}>
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

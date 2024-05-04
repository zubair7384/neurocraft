import React from "react";
import LogoDarkLarge from "../../public/logo-night-large.svg";
import LogoLightLarge from "../../public/logo-day-large.svg";
import MobileLight from "../../public/mobile-light.svg";
import MobileDark from "../../public/mobile-dark.svg";
import Image from "next/image";

const Banner = ({ theme, isMobile }) => {
  const [email, setEmail] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // POST request to our API route
    const response = await fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    alert(data.message);
  };

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
          width={isMobile ? 206 : 1300}
          height={isMobile ? 206 : 190}
        />
        <div className="input-wrapper">
          <h3 className={`input-label text-${theme}`}>
            Register now to unlock exclusive content and gain early access at
            launch.
          </h3>
          <form onSubmit={handleSubmit}>
            <input
              class={`custom-input custom-input-${theme}`}
              placeholder="type email here"
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button className={`submit-button submit-button-${theme}`}>
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;

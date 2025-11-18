import React from "react";
import twitter from "../images/footer/twitter.webp";
import youtube from "../images/footer/youtube.jpeg";
import whatsapp from "../images/footer/whatsapp2.jpg";

import instagram from "../images/footer/instagram.webp";

const FooterHeader = () => {
  return (
    <div
      className="
        flex flex-wrap items-center justify-center
        gap-4 p-4
        sm:gap-6 sm:p-5
        md:gap-8 md:p-6
      "
    >
      <a href="https://twitter.com" target="_blank">
        <img
          className="
          h-12 w-12
          sm:h-14 sm:w-14
          md:h-16 md:w-16
          lg:h-20 lg:w-20
          rounded-full object-cover
        "
          src={twitter}
          alt="Twitter"
        />
      </a>
      <a href="https://www.youtube.com" target="_blank">
        <img
          className="
          h-12 w-12
          sm:h-14 sm:w-14
          md:h-16 md:w-16
          lg:h-20 lg:w-20
          rounded-full object-cover
        "
          src={youtube}
          alt="YouTube"
        />
      </a>
      <a href="https://web.whatsapp.com" target="_blank">
        <img
          className="
          h-12 w-12
          sm:h-14 sm:w-14
          md:h-16 md:w-16
          lg:h-20 lg:w-20
          rounded-full object-cover
        "
          src={whatsapp}
          alt="WhatsApp"
        />
      </a>
      <a href="https://www.instagram.com" target="_blank">
        <img
          className="
          h-12 w-12
          sm:h-14 sm:w-14
          md:h-16 md:w-16
          lg:h-20 lg:w-20
          rounded-full object-cover
        "
          src={instagram}
          alt="Instagram"
        />
      </a>
    </div>
  );
};

export default FooterHeader;

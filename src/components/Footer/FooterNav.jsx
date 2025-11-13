import React from "react";
import { Link } from "react-router-dom";

const FooterNav = () => {
  return (
    <nav className="w-full">
      <ul
        className="
          flex flex-wrap items-center justify-center gap-3 my-8
          sm:gap-4 sm:my-10
          md:justify-evenly md:gap-6 md:my-12
        "
      >
        <Link to={"/"}>
          <li
            className="
              px-4 py-2
              text-sm sm:text-base md:text-lg
              text-white font-semibold
              bg-[#000000] opacity-85
              rounded-xl cursor-pointer
              hover:bg-white hover:text-black
              transition-colors duration-200
            "
          >
            Home
          </li>
        </Link>
        <Link to={"/about-us"}>
          <li
            className="
              px-4 py-2
              text-sm sm:text-base md:text-lg
              text-white font-semibold
              bg-[#000000] opacity-85
              rounded-xl cursor-pointer
              hover:bg-white hover:text-black
              transition-colors duration-200
            "
          >
            More Information
          </li>
        </Link>
        <Link to={"/contact-us"}>
          <li
            className="
              px-4 py-2
              text-sm sm:text-base md:text-lg
              text-white font-semibold
              bg-[#000000] opacity-85
              rounded-xl cursor-pointer
              hover:bg-white hover:text-black
              transition-colors duration-200
            "
          >
            Talk To Us
          </li>
        </Link>
        <Link to={"/blogs"}>
          <li
            className="
              px-4 py-2
              text-sm sm:text-base md:text-lg
              text-white font-semibold
              bg-[#000000] opacity-85
              rounded-xl cursor-pointer
              hover:bg-white hover:text-black
              transition-colors duration-200
            "
          >
            New &amp; Blogs
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default FooterNav;

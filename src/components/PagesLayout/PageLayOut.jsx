import React from "react";
import { useLocation, useParams } from "react-router-dom";
import banner from "../images/banner3.png";

const PageLayOut = () => {
  const location = useLocation();
  const url = location.pathname;
  const { id } = useParams();
  // console.log(id);

  return (
    <div>
      {/* Heading */}
      <div className="my-2 md:my-12 sm:my-4 lg:my-28">
        <h1 className="text-[#D2D2D2] text-4xl sm:text-5xl md:text-[76px] font-extralight text-center">
          {url === "/products" ? "Products" : ""}
          {url === "/blogs" ? "Blogs" : ""}
          {url.startsWith("/blog/") && id ? `Blog ${id}` : ""}
          {url === "/about-us" ? "About Us" : ""}
          {url === "/contact-us" ? "Contact Us" : ""}
          {url === "/register" ? "Register Your Account" : ""}
          {url === "/login" ? "Login Your Account" : ""}
          {url === "/my-account" ? "My Account" : ""}
        </h1>
      </div>
      {/* PageLayOut Picture */}

      <img
        className="w-full object-fit-cover my-10 sm:my-10 md:my-10 lg:my-20 "
        src={banner}
        alt="Banner-Pic"
      />
    </div>
  );
};

export default PageLayOut;

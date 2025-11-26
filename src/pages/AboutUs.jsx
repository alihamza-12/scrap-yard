import React from "react";
import PageLayOut from "../components/PagesLayout/PageLayOut";
import contact_Us from "../assets/about.jpg";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <PageLayOut />
      {/* About Us */}
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex justify-center items-center mb-10">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-stretch gap-10">
          {/* Image */}
          {/* <div className="max-w-lg rounded-3xl overflow-hidden shadow-2xl h-full border-lime-500 "> */}
          <img
            src={contact_Us}
            alt="Contact Us"
            className="w-1/2 rounded-3xl shadow-2xl"
          />

          <div className="flex-1 w-full max-w-md h-full">
            {/* Heading */}
            <h1 className="text-4xl text-white font-bold mb-4">
              We Are Here To Increase Your Modern Life
            </h1>
            {/* ParaGrah */}
            <p className="text-lg text-white leading-relaxed mb-6">
              By providing a convenient platform to buy and sell scrap
              materials. Our platform allows you to sell scrap items quickly and
              easily, reaching a wide market with localized currencies and
              languages to cater to diverse users. Whether you're getting rid of
              old items or looking for scrap materials, Scrap Yard makes it easy
              & offers a seamless experience. We are committed to promoting
              sustainability by facilitating the recycling of materials. Join us
              in making a positive impact on the environment and enjoy the
              convenience of a hassle-free online marketplace for all your scrap
              trading needs.
            </p>
            <Link
              to="/blogs"
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200"
            >
              More About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

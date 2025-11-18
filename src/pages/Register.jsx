import React, { useState } from "react";
import PageLayOut from "../components/PagesLayout/PageLayOut";
import sellerIcon from "../components/images/footer/seller-icon.png";
import buyerIcon from "../components/images/footer/buyer-icon.png";
import useRegisterForm from "../../hooks/useRegisterForm";

const Register = () => {
  const {
    register,
    handleSubmit,
    errors,
    active,
    setHandleRole,
    onSubmit,
    error,
  } = useRegisterForm();
  return (
    <div>
      {/* PageLayOut */}
      <PageLayOut />
      {/* Form */}
      <div className="flex items-center justify-center bg-gradient-to-br from-[#191919] via-gray-800 to-[#D2D2D2] p-6 min-h-screen">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md p-8 bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl border border-orange-500/20"
        >
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
            Register Form
          </h2>
          {/* Full Name */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-[#D2D2D2] mb-2">
              Full Name
            </label>
            <input
              className="bg-gray-800 p-3 rounded-xl w-full border border-orange-500/30 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all duration-300 text-white placeholder-gray-400"
              type="text"
              placeholder="Enter your full name"
              {...register("fullName")}
            />
            {errors.fullName && (
              <p className="text-red-400 text-sm mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>
          {/* Email */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-[#D2D2D2] mb-2">
              Email
            </label>
            <input
              className="bg-gray-800 p-3 rounded-xl w-full border border-orange-500/30 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all duration-300 text-white placeholder-gray-400"
              type="email"
              placeholder="Enter your email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          {/* Address */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-[#D2D2D2] mb-2">
              Address
            </label>
            <input
              className="bg-gray-800 p-3 rounded-xl w-full border border-orange-500/30 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all duration-300 text-white placeholder-gray-400"
              type="text"
              placeholder="Enter your address"
              {...register("address")}
            />
            {errors.address && (
              <p className="text-red-400 text-sm mt-1">
                {errors.address.message}
              </p>
            )}
          </div>
          {/* PhoneNo. */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-[#D2D2D2] mb-2">
              Phone Number
            </label>
            <input
              className="bg-gray-800 p-3 rounded-xl w-full border border-orange-500/30 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all duration-300 text-white placeholder-gray-400"
              type="number"
              placeholder="Enter your phone number"
              {...register("phoneNo")}
            />
            {errors.phoneNo && (
              <p className="text-red-400 text-sm mt-1">
                {errors.phoneNo.message}
              </p>
            )}
          </div>
          {/* password */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-[#D2D2D2] mb-2">
              Password
            </label>
            <input
              className="bg-gray-800 p-3 rounded-xl w-full border border-orange-500/30 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all duration-300 text-white placeholder-gray-400"
              type="password"
              placeholder="Enter your password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-400 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          {/* Confirm Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-[#D2D2D2] mb-2">
              Confirm Password
            </label>
            <input
              className="bg-gray-800 p-3 rounded-xl w-full border border-orange-500/30 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all duration-300 text-white placeholder-gray-400"
              type="password"
              placeholder="Confirm your password"
              {...register("confirmPass")}
            />
            {errors.confirmPass && (
              <p className="text-red-400 text-sm mt-1">
                {errors.confirmPass.message}
              </p>
            )}
          </div>

          {/* Role */}
          <div className="flex items-center justify-around mb-6">
            {/* Seller */}
            <img
              onClick={() => setHandleRole("seller")}
              className={`w-1/3 p-2 rounded-xl cursor-pointer transition-all duration-300 ${
                active === "seller"
                  ? "bg-gradient-to-r from-orange-500 to-pink-500 shadow-lg scale-105"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
              src={sellerIcon}
              alt="Seller-Icon"
            />
            {/* Buyer */}
            <img
              onClick={() => setHandleRole("buyer")}
              className={`w-1/3 p-2 rounded-xl cursor-pointer transition-all duration-300 ${
                active === "buyer"
                  ? "bg-gradient-to-r from-orange-500 to-pink-500 shadow-lg scale-105"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
              src={buyerIcon}
              alt="Buyer-Icon"
            />
          </div>
          {/* Hidden Input for Set error */}
          {errors.role && (
            <p className="text-red-400 text-sm mt-1">{errors.role.message}</p>
          )}
          {error && (
            <p className="text-red-400 text-sm mt-1">
              {error.data?.error || error.data?.message || "Something Wrong"}
            </p>
          )}

          {/* Submit */}
          <button
            className="p-3 cursor-pointer bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl text-white w-full mt-8 hover:from-orange-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-lg font-semibold"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

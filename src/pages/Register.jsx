import React, { useState } from "react";
import PageLayOut from "../components/PagesLayout/PageLayOut";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import sellerIcon from "../components/images/footer/seller-icon.png";
import buyerIcon from "../components/images/footer/buyer-icon.png";

//Zod Schema
const schema = z
  .object({
    fullName: z.string().min(3, { message: "Atleast 3 Words" }),
    email: z.string().email({ message: "InValid Email Address" }),
    address: z.string({ message: "Address Required" }),
    phoneNo: z
      .string()
      .max(11, { message: "Enter Correct 11 Digits for Phone Number" }),
    password: z
      .string()
      .min(8, { message: "InValid Password Minimum 8 characters" }),
    confirmPass: z
      .string()
      .min(8, { message: "InValid Password Minimum 8 characters" }),
    role: z.enum(["buyer", "seller"], { message: "Please Choice the Role" }),
  })
  .refine((data) => data.password === data.confirmPass, {
    message: "Password donot Match",
    path: ["confirmPass"],
  });

const Register = () => {
  const [active, setActive] = useState("");

  //SetUp React Hook Form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const setHandleRole = (role) => {
    setActive(role);
    setValue("role", role);
  };
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      {/* PageLayOut */}
      <PageLayOut />
      {/* Form */}
      <div className="flex items-center justify-center bg-gradient-to-br from-orange-100 to-pink-100 dark:from-gray-900 dark:to-gray-800 p-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            Register Form
          </h2>
          {/* Full Name */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Full Name
            </label>
            <input
              className="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg w-full border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-orange-400 outline-none transition-all duration-200 dark:text-white"
              type="text"
              {...register("fullName")}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>
          {/* Email */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              className="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg w-full border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-orange-400 outline-none transition-all duration-200 dark:text-white"
              type="email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          {/* Address */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Address
            </label>
            <input
              className="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg w-full border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-orange-400 outline-none transition-all duration-200 dark:text-white"
              type="text"
              {...register("address")}
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">
                {errors.address.message}
              </p>
            )}
          </div>
          {/* PhoneNo. */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Phone Number
            </label>
            <input
              className="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg w-full border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-orange-400 outline-none transition-all duration-200 dark:text-white"
              type="number"
              {...register("phoneNo")}
            />
            {errors.phoneNo && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phoneNo.message}
              </p>
            )}
          </div>
          {/* password */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Password
            </label>
            <input
              className="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg w-full border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-orange-400 outline-none transition-all duration-200 dark:text-white"
              type="password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          {/* Confirm Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Confirm Password
            </label>
            <input
              className="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg w-full border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-orange-400 outline-none transition-all duration-200 dark:text-white"
              type="password"
              {...register("confirmPass")}
            />
            {errors.confirmPass && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPass.message}
              </p>
            )}
          </div>

          {/* Role */}
          <div className="flex items-center justify-around">
            {/* Seller */}
            <img
              onClick={() => setHandleRole("seller")}
              className={`w-1/3 cursor-pointer ${
                active === "seller" ? "bg-green-600" : "bg-white"
              }`}
              src={sellerIcon}
              alt="Seller-Icon"
            />
            {/* Buyer */}
            <img
              onClick={() => setHandleRole("buyer")}
              className={`w-1/3 cursor-pointer ${
                active === "buyer" ? "bg-green-600" : "bg-white"
              }`}
              src={buyerIcon}
              alt="Buyer-Icon"
            />
          </div>
          {/* Hidden Input for Set error */}
          {errors.role && (
            <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>
          )}

          {/* Submit */}
          <button
            className="p-3 cursor-pointer bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-700 dark:to-pink-700 rounded-lg text-white w-full mt-8 hover:from-purple-700 hover:to-pink-700 dark:hover:from-purple-800 dark:hover:to-pink-800 transition-all duration-200 hover:scale-105 shadow-md"
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

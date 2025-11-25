import React from "react";
import PageLayOut from "../components/PagesLayout/PageLayOut";
import useLoginForm from "../hooks/useLoginForm";

const Login = () => {
  //Custom Hook For user Login
  const { register, handleSubmit, errors, onSubmit, error } = useLoginForm();

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
            Login Form
          </h2>

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

export default Login;

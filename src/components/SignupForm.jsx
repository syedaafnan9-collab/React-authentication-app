import React from "react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  console.log(formData);
  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-8 p-6">
        <div className="login-form bg-dark-100  flex flex-col  items-center rounded-md shadow-md border-1 border-solid border-white  w-[90%] max-w-md p-8 m-4 hover: transition-colors  duration-300">
          <h2 className="text-2xl font-bold mb-4 text-white">Signup</h2>
          <form className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-2">
              <label htmlFor="username" className="font-medium text-white">
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder=" Enter your username"
                required
                className="border border-white text-white p-2 placeholder:text-gray-500"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-medium text-white">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder=" Enter your email"
                required
                className="border border-white text-white p-2 placeholder:text-gray-500"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="font-medium text-white">
                Phone Number:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder=" Enter your phone number"
                required
                className="border border-white text-white p-2 placeholder:text-gray-500"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col gap-2"></div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="font-medium text-white">
                Password:
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder=" Enter your password"
                  required
                  className="border border-white text-white w-full p-2 pr-10 placeholder:text-gray-500"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      password: e.target.value,
                    })
                  }
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                >
                  👁
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="font-medium bg-blue-500 text-white py-2 px-4 rounded-md bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupForm;

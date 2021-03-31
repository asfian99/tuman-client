import React from "react";

function Login() {
  return (
    <div className="flex flex-row items-center justify-around min-h-screen mx-16">
      <div className="flex justify-center w-1/2">
        <p className="text-5xl">image</p>
      </div>
      <div className="flex flex-col items-center w-1/2">
        <h1 className="mb-2 text-2xl font-bold text-primaryD">Tuman</h1>
        <p className="mb-12 text-lg font-semibold text-gray-600">
          Login to your Tuman account
        </p>
        <div className="flex flex-col w-1/2 space-y-4">
          <div className="flex flex-col items-start space-y-2">
            <p className="font-medium text-gray-600">Email</p>
            <input
              className="w-full py-2 bg-gray-100 border-gray-200 rounded-lg"
              type="text"
              name="email"
              id="email"
              placeholder="email"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <p className="font-medium text-gray-600">Password</p>
            <input
              className="w-full py-2 bg-gray-100 border-gray-200 rounded-lg"
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 text-lg font-semibold text-white rounded-lg bg-primary"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;

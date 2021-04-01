import React from "react";
import { useMutation } from "react-query";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

interface LoginProps {
  email?: string;
  identifier?: string;
  password: string;
}

function Login() {
  // Fungsi untuk mutation
  const mutation = useMutation((loginData: LoginProps) =>
    axios.post(`${process.env.API_URL}/auth/local`, loginData)
  );

  // Handle Login
  const loginHandler = async ({ email, password }: LoginProps) => {
    const data = { identifier: email, password };
    // Jalankan Mutation
    mutation.mutate(data, {
      onSuccess: (res) => console.log(res.data),
      onError: (err) => console.log(err),
    });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: ({ email, password }) => {
      // Jalankan fungsi handle login
      loginHandler({ email, password });
    },
  });

  return (
    <main className="flex flex-row items-center justify-around min-h-screen mx-16">
      <div className="flex justify-center w-1/2">
        <p className="text-5xl">image</p>
      </div>
      <div className="flex flex-col items-center w-1/2">
        <h1 className="mb-2 text-2xl font-bold text-primaryD">Tuman</h1>
        <p className="mb-12 text-lg font-semibold text-gray-600">
          Login to your Tuman account
        </p>

        <form
          className="flex flex-col w-1/2 space-y-4"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex flex-col items-start space-y-2">
            <p className="font-medium text-gray-600">Email</p>
            <input
              className="w-full py-2 bg-gray-100 border-gray-200 rounded-lg"
              type="text"
              name="email"
              id="email"
              placeholder="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 text-lg font-semibold text-white rounded-lg bg-primary hover:bg-primaryD"
          >
            Log In
          </button>
        </form>
      </div>
    </main>
  );
}

export default Login;

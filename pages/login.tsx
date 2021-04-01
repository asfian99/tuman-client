import React from "react";
import { useMutation } from "react-query";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";

interface LoginProps {
  email?: string;
  identifier?: string;
  password: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

function Login() {
  // Fungsi untuk mutation
  const mutation = useMutation((loginData: LoginProps) =>
    axios.post(`${API_URL}/auth/local`, loginData)
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
    validationSchema: Yup.object({
      email: Yup.string().email().required("Wajib diisi"),
      password: Yup.string()
        .min(6, "Minimal 6 karakter")
        .max(25, "Maksimal 25 karekter")
        .required("Wajib diisi"),
    }),
    onSubmit: ({ email, password }) => {
      // Jalankan fungsi handle login
      loginHandler({ email, password });
    },
  });

  return (
    <main className="flex flex-col items-center justify-around h-screen mx-8 md:mx-12 lg:mx-16 lg:flex-row font-inter">
      <div className="flex justify-center items-center w-full sm:w-2/3 lg:w-1/2 h-[30vh] lg:h-auto">
        <p className="text-5xl">image</p>
      </div>
      <div className="flex flex-col items-center mt-8 w-full sm:w-2/3 lg:w-1/2 h-[70vh] lg:h-auto">
        <h1 className="mb-2 text-2xl font-bold text-primary600">Tuman</h1>
        <p className="mb-12 text-lg font-semibold text-gray-600">
          Login to your Tuman account
        </p>

        <form
          className="flex flex-col w-full px-4 space-y-4 md:px-0 lg:w-3/5"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex flex-col items-start space-y-2">
            <p className="font-medium text-gray-600">Email</p>
            <input
              className="w-full py-2 bg-gray-100 border-gray-200 rounded-lg focus:ring-primary focus:border-transparent focus:ring-2"
              type="text"
              name="email"
              id="email"
              placeholder="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <p className="text-sm font-semibold text-red-400">
              {formik.errors.email}
            </p>
          </div>
          <div className="flex flex-col items-start space-y-2">
            <p className="font-medium text-gray-600">Password</p>
            <input
              className="w-full py-2 bg-gray-100 border-gray-200 rounded-lg focus:ring-primary focus:border-transparent focus:ring-2"
              type="password"
              name="password"
              id="password"
              placeholder="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <p className="text-sm font-semibold text-red-400">
              {formik.errors.password}
            </p>
          </div>
          <button
            type="submit"
            className={clsx(
              "w-full py-3 text-lg font-semibold text-white rounded-lg focus:outline-none focus:ring-primary300 focus:ring-4 ",
              mutation.isLoading
                ? "bg-primary400"
                : "bg-primary hover:bg-primary600"
            )}
          >
            {mutation.isLoading ? "Loading..." : "Log In"}
          </button>
        </form>
      </div>
    </main>
  );
}

export default Login;

import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

function Signin() {
  const navigate = useNavigate();
  const signinValidation = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Enter valid email"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <div className="bg-[#F7F8F9] h-full w-full flex flex-col px-[20px] py-[40px] border border-black/10">
      <div>
        <h1 className="text-[28px] leading-[36px] text-left font-medium mb-[14px]">
          Signin to your PopX account
        </h1>
        <p className="text-[18px] leading-[26px] opacity-[0.6] mb-[24px]">
          Lorem ipsum dolor sit, amet <br />
          consectetur adipisicing elit.
        </p>
      </div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={signinValidation}
        onSubmit={(values) => {
          console.log(values);
          navigate("/user");
        }}
      >
        {({ isValid, dirty }) => (
          <Form>
            <div className="relative w-full mb-[23px]">
              <Field
                type="text"
                name="email"
                placeholder="Enter email address"
                className="block px-2.5 pt-3 pb-2.5 w-full text-sm text-gray-900 
               bg-transparent rounded-lg border border-gray-300 appearance-none 
               focus:outline-none focus:ring-0 focus:border-blue-600"
              />

              <label
                htmlFor="email"
                className="absolute text-sm text-[#6C25FF]
               -translate-y-1/2 top-0 left-2 bg-[#F7F8F9] px-1"
              >
                Email Address
              </label>
              <div className="text-red-400 text-sm ps-[10px]">
                <ErrorMessage name="email" />
              </div>
            </div>
            <div className="relative w-full mb-[14px]">
              <Field
                type="password"
                name="password"
                placeholder="Enter password"
                className="block px-2.5 pt-3 pb-2.5 w-full text-sm text-gray-900 
               bg-transparent rounded-lg border border-gray-300 appearance-none 
               focus:outline-none focus:ring-0 focus:border-blue-600"
              />

              <label
                htmlFor="password"
                className="absolute text-sm text-[#6C25FF]
               -translate-y-1/2 top-0 left-2 bg-[#F7F8F9] px-1"
              >
                Password
              </label>
              <div className="text-red-400 text-sm ps-[10px]">
                <ErrorMessage name="password" />
              </div>
            </div>
            <div>
              <button
                type="submit"
                disabled={!(isValid && dirty)}
                // className="bg-[#CBCBCB] w-full h-[46px] rounded-[6px] text-white font-medium"
                className={`w-full rounded-[6px] h-[46px] text-white font-medium ${
                  isValid && dirty
                    ? "bg-[#6C25FF]"
                    : "bg-[#CBCBCB] cursor-not-allowed"
                }`}
              >
                Login
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Signin;

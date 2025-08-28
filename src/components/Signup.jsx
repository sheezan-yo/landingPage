import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

function Signup() {
  const signupValidation = Yup.object().shape({
    fullname: Yup.string().required("Name is required"),
    phone: Yup.string().required("Phone number is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Enter valid email"),
    password: Yup.string().required("Password is required"),
  });
  const navigate = useNavigate();

  return (
    <div className="bg-[#F7F8F9] h-full w-full flex flex-col px-[20px] py-[40px] border border-black/10">
      <div className="mb-[30px]">
        <h1 className="text-[28px] leading-[36px] text-left font-medium mb-[14px]">
          Create your <br />
          PopX account
        </h1>
      </div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={signupValidation}
        onSubmit={(values) => {
          console.log(values);
          navigate("/user");
        }}
      >
        {({ isValid, dirty }) => (
          <Form className="h-screen flex flex-col">
            <div className="relative w-full mb-[29px]">
              <Field
                type="text"
                name="fullname"
                placeholder=""
                className="block px-2.5 pt-3 pb-2.5 w-full text-sm text-gray-900 
                   bg-transparent rounded-lg border border-gray-300 appearance-none 
                   focus:outline-none focus:ring-0 focus:border-blue-600"
              />

              <label
                htmlFor="fullname"
                className="absolute text-sm text-[#6C25FF]
                   -translate-y-1/2 top-0 left-2 bg-[#F7F8F9] px-1"
              >
                Full Name
                <span className="text-red-500 text-xs relative -top-1"> *</span>
              </label>
              <div className="text-sm text-red-400">
                <ErrorMessage name="fullname" />
              </div>
            </div>
            <div className="relative w-full mb-[29px]">
              <Field
                type="text"
                name="phone"
                placeholder=""
                className="block px-2.5 pt-3 pb-2.5 w-full text-sm text-gray-900 
                   bg-transparent rounded-lg border border-gray-300 appearance-none 
                   focus:outline-none focus:ring-0 focus:border-blue-600"
              />

              <label
                htmlFor="phone"
                className="absolute text-sm text-[#6C25FF]
                   -translate-y-1/2 top-0 left-2 bg-[#F7F8F9] px-1"
              >
                Phone Number
                <span className="text-red-500 text-xs relative -top-1"> *</span>
              </label>
              <div className="text-sm text-red-400">
                <ErrorMessage name="phone" />
              </div>
            </div>
            <div className="relative w-full mb-[29px]">
              <Field
                type="email"
                name="email"
                placeholder=""
                className="block px-2.5 pt-3 pb-2.5 w-full text-sm text-gray-900 
                   bg-transparent rounded-lg border border-gray-300 appearance-none 
                   focus:outline-none focus:ring-0 focus:border-blue-600"
              />

              <label
                htmlFor="email"
                className="absolute text-sm text-[#6C25FF]
                   -translate-y-1/2 top-0 left-2 bg-[#F7F8F9] px-1"
              >
                Email address
                <span className="text-red-500 text-xs relative -top-1"> *</span>
              </label>
              <div className="text-sm text-red-400">
                <ErrorMessage name="email" />
              </div>
            </div>
            <div className="relative w-full mb-[29px]">
              <Field
                type="password"
                name="password"
                placeholder=""
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
                <span className="text-red-500 text-xs relative -top-1"> *</span>
              </label>
              <div className="text-sm text-red-400">
                <ErrorMessage name="password" />
              </div>
            </div>
            <div className="relative w-full mb-[29px]">
              <Field
                type="text"
                name="company"
                placeholder=""
                className="block px-2.5 pt-3 pb-2.5 w-full text-sm text-gray-900 
                   bg-transparent rounded-lg border border-gray-300 appearance-none 
                   focus:outline-none focus:ring-0 focus:border-blue-600"
              />

              <label
                htmlFor="company"
                className="absolute text-sm text-[#6C25FF]
                   -translate-y-1/2 top-0 left-2 bg-[#F7F8F9] px-1"
              >
                Company name
              </label>
            </div>
            <div>
              <p className="mb-[10px]">
                Are you an Agency?{" "}
                <span className="text-red-500 text-xs relative -top-1"> *</span>
              </p>
              <div className="flex items-center">
                <div class="flex items-center me-[23px]">
                  <Field
                    checked
                    id="default-radio-1"
                    type="radio"
                    value="yes"
                    name="isAgency"
                    class="w-4 h-4 text-[#6C25FF] bg-gray-100"
                  />
                  <label
                    for="default-radio-1"
                    class="ms-2 text-sm font-medium text-gray-900"
                  >
                    Yes
                  </label>
                </div>
                <div class="flex items-center">
                  <Field
                    id="default-radio-2"
                    type="radio"
                    value="no"
                    name="isAgency"
                    class="w-4 h-4 text-[#6C25FF] bg-gray-100"
                  />
                  <label
                    for="default-radio-2"
                    class="ms-2 text-sm font-medium text-gray-900"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-auto">
              <button
                type="submit"
                disabled={!(isValid && dirty)}
                // className="bg-[#6C25FF] w-full h-[46px] rounded-[6px] text-white font-medium"
                className={`w-full h-[46px] rounded-[6px] text-white font-medium ${
                  isValid && dirty
                    ? "bg-[#6C25FF]"
                    : "bg-[#CBCBCB] cursor-not-allowed"
                }`}
              >
                Create Account
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Signup;

import React from "react";
import Title from "../UI/Title";
import Input from "../form/Input";
import { Formik, useFormik } from "formik";
import { newPasswordSchema } from "@/Schema/newPassword";
import axios from "axios";

const Password = ({ user }) => {
  const onSubmit = async (values) => {
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/users/${user._id}`,
        values
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    onSubmit: onSubmit,
    validationSchema: newPasswordSchema,
  });

  const inputs = [
    {
      id: 1,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: formik.values.passsword,
      errorMessage: formik.errors.password,
      touched: formik.touched.password,
    },

    {
      id: 2,
      name: "confirmPassword",
      type: "password",
      placeholder: "Your Confirm Password",
      value: formik.values.confirmPassword,
      errorMessage: formik.errors.confirmPassword,
      touched: formik.touched.confirmPassword,
    },
  ];

  return (
    <form className="lg:p-8 flex-1 lg:mt-0 mt-5" onSubmit={formik.handleSubmit}>
      <Title classname="text-[40px]">Password</Title>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 w-full mt-4">
        {inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
        ))}
      </div>
      <button className="btn-primary mt-8" type="submit">
        Update
      </button>
    </form>
  );
};

export default Password;

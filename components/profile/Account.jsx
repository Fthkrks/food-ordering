import React from "react";
import Title from "../UI/Title";
import Input from "../form/Input";
import { useFormik } from "formik";
import { profileSchema } from "@/Schema/profile";
import axios from "axios";



const Account = ({ user}) => { 


  const onSubmit = async (values ) => {
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
    enableReinitialize: true,
    initialValues: {
      name: user?.name || "",
      phonenumber: user?.phonenumber || "",
      email: user?.email || "",
      address: user?.address || "",
      job: user?.job || "",
      bio: user?.bio || "",
    },
    onSubmit: onSubmit,
    validationSchema: profileSchema,
  });


 
  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Your Name",
      errorMessage: formik.errors.name,
      value: formik.values.name,
      touched: formik.touched.name,
    },
    {
      id: 2,
      name: "phonenumber",
      type: "number",
      placeholder: "Your Phone Number",
      value: formik.values.phonenumber,
      errorMessage: formik.errors.phonenumber,
      touched: formik.touched.phonenumber,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: formik.values.email,
      errorMessage: formik.errors.email,
      touched: formik.touched.email,
    },
    {
      id: 4,
      name: "address",
      type: "text",
      placeholder: "Your Address",
      value: formik.values.address,
      errorMessage: formik.errors.address,
      touched: formik.touched.address,
    },
    {
      id: 5,
      name: "job",
      type: "text",
      placeholder: "Your Job",
      value: formik.values.job,
      errorMessage: formik.errors.job,
      touched: formik.touched.job,
    },
    {
      id: 6,
      name: "bio",
      type: "text",
      placeholder: "Your Bio",
      value: formik.values.bio,
      errorMessage: formik.errors.bio,
      touched: formik.touched.bio,
    },
  ];


  return (
    <form className="lg:p-8 flex-1 lg:mt-0 mt-5" onSubmit={formik.handleSubmit} >
      <Title classname="text-[40px]">Account Settings</Title>
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

export default Account;

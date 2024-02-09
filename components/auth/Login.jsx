import { useFormik } from "formik";
import Title from "../UI/Title";
import Input from "../form/Input";
import { loginSchema } from "@/Schema/login";
import Link from "next/link";
import { signIn } from "next-auth/react";

import { useRouter } from "next/router";
import axios from "axios";

const Login = ({ user }) => {

  
  const { push } = useRouter();


  const onSubmit = async (values, actions) => {

    let options = {
      redirect: false,
      email: values.email,
      password: values.password,
    };
    try {
      const res = await signIn("credentials", options);
      actions.resetForm();
      push("/profile/" + user._id);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() =>{
  //   if(session){
  //     push("/profile")
  //   }

  // }, [session, push ])

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
    validationSchema: loginSchema,
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Your Email Adress",
      value: formik.values.email,
      errorMessage: formik.errors.email,
      touched: formik.touched.email,
    },

    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: formik.values.password,
      errorMessage: formik.errors.password,
      touched: formik.touched.password,
    },
  ];

  return (
    <form className="flex flex-col items-center container my-20 mx-auto md:w-1/2 w-full">
      <Title classname="text-[40px] mb-5">login</Title>
      <div className="flex flex-col gap-y-2 w-full">
        {inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        ))}
      </div>
      <div className="flex flex-col w-full gap-y-3 mt-6">
        <button
          className="btn-primary"
          type="submit"
          onClick={formik.handleSubmit}
        >
          Login
        </button>
        <button
          className=" btn-primary !bg-secondary"
          type="button"
          onClick={() => signIn("github")}
        >
          <i className="fa-brands fa-github"></i> GITHUB
        </button>
        <Link href="/auth/index2">
          <span className="text-sm underline cursor-pointer text-gray-600">
            Do you no have a account?{" "}
          </span>
        </Link>
      </div>
    </form>
  );
};

export default Login;

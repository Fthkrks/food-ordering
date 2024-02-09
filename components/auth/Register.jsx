import { useFormik } from "formik";
import Title from "../UI/Title"
import Input from "../form/Input"
import { registerSchema } from "@/Schema/register";
import Link from "next/link";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";

const Register = () => {

    const {push} = useRouter();
    const onSubmit = async(values, actions) =>{
      try {

        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/register`, values);
        if(res.status === 200){
          toast.success("User created successfully")
          push("/auth")

        }


      } catch (error){
        console.log(error);
        toast.error("User already exists")
        
      }

    }
    
    const formik = useFormik({
        initialValues:{
          name:"",
          email: "",
          password: "",
          confirmPassword: ""

    
    
        },
        onSubmit,
        validationSchema: registerSchema
      });
    


    const inputs = [
        {
            id:1,
            name: "name",
            type: "text",
            placeholder: "Your Name",
            value: formik.values.name,
            errorMessage: formik.errors.name,
            touched: formik.touched.name
      
          },

        {
            id:2,
            name: "email",
            type: "email",
            placeholder: "Your Email Adress",
            value:formik.values.email,
            errorMessage: formik.errors.email,
            touched: formik.touched.email
            
          },
    
        {
          id:3,
          name: "password",
          type: "password",
          placeholder: "Your Password",
          value: formik.values.password,
          errorMessage: formik.errors.password,
          touched: formik.touched.password
          
        },  
        {
          id:4,
          name: "confirmPassword",
          type: "password",
          placeholder: "Your Confirm Password",
          value:formik.values.confirmPassword,
          errorMessage: formik.errors.confirmPassword,
          touched: formik.touched.confirmPassword
          
        },
      ]
      

  return (
    <form className="flex flex-col items-center container my-20 mx-auto md:w-1/2 w-full" onSubmit={formik.handleSubmit}>
        <Title classname="text-[40px] mb-5">Register</Title>
        <div className="flex flex-col gap-y-2 w-full">
            {inputs.map((input) =>(
                <Input key={input.id} {...input} onChange = {formik.handleChange} onBlur ={formik.handleBlur} />
            ))}

        </div>
        <div className="flex flex-col w-full gap-y-3 mt-6">
        <button className="btn-primary" type="submit">Register</button>
        <Link href="/auth">
            <span className="text-sm underline cursor-pointer text-gray-600">Do you have a account? </span>
        </Link>
        </div>
    </form>
  )
}

export default Register
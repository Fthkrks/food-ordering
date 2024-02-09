import { useFormik } from "formik";
import { adminSchema } from "@/Schema/admin";
import Link from "next/link";
import Title from "@/components/UI/Title";
import Input from "@/components/form/Input";
import axios from "axios";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";

const Login = () => {
    const {push} = useRouter();
    
    const onSubmit = async (values, actions) =>{
      try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/admin`, values);
        if (res.status === 200){
          console.log(res.data);
          actions.resetForm(); 
          toast.success("Admin Login Success!");
          push("/admin/profile");
        }
      } catch (error) {
        console.log(error);
        
      }
    }

    const formik = useFormik({
        initialValues:{
          name: "",
          password: ""
},
        onSubmit,
        validationSchema: adminSchema
      });
    


    const inputs = [
        {
            id:1,
            name: "name",
            type: "text",
            placeholder: "Your Username",
            value:formik.values.name,
            errorMessage: formik.errors.name,
            touched: formik.touched.name
            
          },
    
        {
          id:2,
          name: "password",
          type: "password",
          placeholder: "Your Password",
          value: formik.values.password,
          errorMessage: formik.errors.password,
          touched: formik.touched.password
          
        },  
      ]
      

  return (
    <form className="flex flex-col items-center container my-20 mx-auto md:w-1/2 w-full">
        <Title classname="text-[40px] mb-5">Admin login</Title>
        <div className="flex flex-col gap-y-2 w-full">
            {inputs.map((input) =>(
                <Input key={input.id} {...input} onChange = {formik.handleChange} onBlur ={formik.handleBlur} />
            ))}

        </div>
        <div className="flex flex-col w-full gap-y-3 mt-6">
        <button className="btn-primary" type="submit" onClick={formik.handleSubmit}>Login</button>
        <Link href="/">
            <span className="text-sm underline cursor-pointer text-gray-600">Home Page</span>
        </Link>
        </div>
    </form>
  )
}


export const getServerSideProps = (ctx) =>{
  const myCookie = ctx.req.cookies || "";

  if(myCookie.token === process.env.ADMIN_TOKEN){
    return{
      redirect:{
        destination: "/admin/profile",
        permanent: false,
      }
    }
  }

  return{
    props: {},
    
  }
}

export default Login
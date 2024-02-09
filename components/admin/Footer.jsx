import { useFormik } from "formik";
import Title from "../UI/Title"
import Input from "../form/Input"
import { footerSchema } from "@/Schema/footer";
import { useState } from "react";


const Footer = () => {
  

    const [linkAddress, setLinkAddress] = useState("");
    const [iconName, setIconName] = useState("");
    const [icons, setIcons] = useState(["fa-brands fa-facebook", "fa-brands fa-instagram", "fa-brands fa-twitter"]);

    const formik = useFormik({
        initialValues:{
          location: "",
          email: "",
          phonenumber: "",
          desc: "",
          day: "",
          time: "",
    
    
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
        validationSchema: footerSchema
      });


    const inputs = [
        {
          id:1,
          name: "location",
          type: "text",
          placeholder: "Your Location",
          value: formik.values.location,
          errorMessage: formik.errors.location,
          touched: formik.touched.location
    
        },
    
        {
          id:2,
          name: "email",
          type: "email",
          placeholder: "Your Email",
          value:formik.values.email,
          errorMessage: formik.errors.email,
          touched: formik.touched.email
          
        },
        {
          id:3,
          name: "phonenumber",
          type: "number",
          placeholder: "Your Phone Number",
          value:formik.values.phonenumber,
          errorMessage: formik.errors.phonenumber,
          touched: formik.touched.phonenumber
          
        },
        {
            id:4,
            name: "desc",
            type: "text",
            placeholder: "Your Description",
            value: formik.values.desc,
            errorMessage: formik.errors.desc,
            touched: formik.touched.desc
            
          },

        {
          id:5,
          name: "day",
          type: "text",
          placeholder: "Update Day",
          value:formik.values.day,
          errorMessage: formik.errors.day,
          touched: formik.touched.day
    
        },

        {
            id:6,
            name: "time",
            type: "text",
            placeholder: "Update Time",
            value:formik.values.time,
            errorMessage: formik.errors.time,
            touched: formik.touched.time
      
          } 
      ]



  return (
    <form className='lg:p-8 flex-1 lg:mt-0 mt-5'>
    <Title classname="text-[40px]">Footer</Title>
    <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 w-full mt-4'>
        {inputs.map((input) =>(
            <Input key={input.id} {...input} onBlur = {formik.handleBlur} onChange = {formik.handleChange} />
        ))}
    </div>
    <div className="flex justify-between md:items-center md:flex-row flex-col gap-4">
        <div className="flex gap-x-4 mt-4 items-center">
            <Input placeholder="Link Address" value="https://"/>
            <Input placeholder="Icon Name" defaultValue="fa-brands fa-" onChange={(e) => setIconName(e.target.value)}/>
            <button className="btn-primary" type="button" onClick={() =>{
                 setIcons([...icons, iconName]);
                 setIconName("fa-brands fa")
            }} >Add</button>
        </div>
        <ul className="flex items-center gap-4">
            {icons.map((icon, index) =>(
                <li key={index} className="flex items-center">
                    <i className={`${icon} text-2xl`}></i>
                    <button className="text-red-600" type="button" onClick={() =>setIcons((prev) =>prev.filter((i) =>i !== icon ))}>
                        <i className=" fa fa-trash text-2xl ml-2"></i>
                    </button>
                </li>
            ))}
        </ul>
    </div>
    <button className='btn-primary mt-8'>Update</button>
</form>
  )
}

export default Footer
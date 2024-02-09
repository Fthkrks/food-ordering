
import { reservationSchema } from "@/Schema/reservation";
import Title from "./UI/Title"
import Input from "./form/Input"
import { Formik, useFormik } from 'formik';

const Reservation = () => {




  const formik = useFormik({
    initialValues:{
      fullname:"",
      phonenumber:"",
      email: "",
      persons: "",
      date: ""


    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
     validationSchema: reservationSchema
  });





  const inputs = [
    {
      id:1,
      name: "name",
      type: "text",
      placeholder: "Your Full Name",
      value: formik.values.name,
      errorMessage: formik.errors.name,
      touched: formik.touched.name

    },

    {
      id:2,
      name: "phonenumber",
      type: "number",
      placeholder: "Your Phone Number",
      value:formik.values.phonenumber,
      errorMessage: formik.errors.phonenumber,
      touched: formik.touched.phonenumber
      
    },
    {
      id:3,
      name: "email",
      type: "email",
      placeholder: "Your Email Adress",
      value:formik.values.email,
      errorMessage: formik.errors.email,
      touched: formik.touched.email
      
    },
    {
      id:4,
      name: "persons",
      type: "number",
      placeholder: "How Many Person",
      value:formik.values.persons,
      errorMessage: formik.errors.persons,
      touched: formik.touched.persons
      
    },
    {
      id:5,
      name: "date",
      type: "date",
      value:formik.values.date,
      errorMessage: formik.errors.date,
      touched: formik.touched.date

    } 
  ]

  return (
    <div className="container mx-auto py-12">
          <Title classname="text-[40px] mb-10 font-dancing">Book A Table</Title>
      <div className="flex justify-between items-center flex-wrap gap-x-10 gap-y-5">
      <form className="lg:flex-1 w-full" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-y-3 ">
              {inputs.map((input) =>(
                <Input key={input.id} {...input} onChange = {formik.handleChange} onBlur ={formik.handleBlur}

                />
              ))}
            </div>
            <button className="btn-primary mt-4" type="submit" >BOOK NOW</button>
        </form>
        <div className="lg:flex-1 w-full">
        <iframe className="flex h-[384px]  w-full " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24043.45791833592!2d29.01169363573748!3d41.125089223349065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caca7152beb381%3A0x163da0c8ff4d15bb!2sEmirgan%20Korusu!5e0!3m2!1str!2str!4v1705841768465!5m2!1str!2str"></iframe>
        </div>
      </div>


    </div>
  )
}

export default Reservation
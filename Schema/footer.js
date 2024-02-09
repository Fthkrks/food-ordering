import * as Yup from "yup"; 



export const footerSchema = Yup.object({
    location: Yup.string().required("Location is required"),
    phonenumber: Yup.string().required("Phone Number is required"),
    email: Yup.string().required("Email is required"),
    desc: Yup.string().required("Description is required"),
    day: Yup.string().required("Day is required"),
    time: Yup.string().required("Time is required")
})
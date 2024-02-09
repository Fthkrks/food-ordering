import * as Yup from "yup"; 



export const reservationSchema = Yup.object({
    fullname: Yup.string().required("Full Name is required"),
    phonenumber: Yup.string().required("Phone Number is required"),
    email: Yup.string().required("Email is required"),
    persons: Yup.string().required("Person is required"),
    date: Yup.string().required("date is required")
})
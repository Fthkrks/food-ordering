import * as Yup from "yup"; 



export const profileSchema = Yup.object({
    name: Yup.string().required("Full Name is required"),
    phonenumber: Yup.string().required("Phone Number is required"),
    email: Yup.string().required("Email is required"),
    address: Yup.string().required("Address is required"),
    job: Yup.string().required("Job is required"),
    bio: Yup.string().required("Bioe is required")
})
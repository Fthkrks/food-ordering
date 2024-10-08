import * as Yup from "yup";


export const registerSchema = Yup.object({
    name: Yup.string().required("Full Name is required"),
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 
    "Password must contain at least one uppercase, one lowercase, one number and one special character."
      ),
    confirmPassword: Yup.string().required("Confirm is required").oneOf([Yup.ref("password"), null], "Password must match."),
})
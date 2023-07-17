import * as Yup from 'yup'

export const signUpSchema = Yup.object({
    name: Yup.string().min(2).max(25).required('Please Enter your Name'),
    email: Yup.string().email().required('Please Enter your Email'),
    password: Yup.string().min(8).max(25).required('Please Enter your Password'),
    confirm_password: Yup.string().min(8).max(25).required('Please Enter your Password').oneOf([Yup.ref('password'),null],"Password must match"),
     


})
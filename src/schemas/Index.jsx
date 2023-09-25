import * as Yup from 'yup'

export const signUpSchema = Yup.object({
    email: Yup.string().email().required('Please Enter your Email'),
    password: Yup.string().min(8).max(25).required('Please Enter your Password')
})
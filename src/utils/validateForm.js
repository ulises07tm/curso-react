import { mixed, object, string } from "yup"

let userSchema = object({
    fullname: string().required("el campo nombre es necesario"),
    phone: mixed().required("el campo telefono es necesario"),
    email: string().email("el campo email, debe contener @")
})

const validateForm = async(dataForm) => {
    try{
        await userSchema.validate(dataForm)
        return { status: "success" }
    } catch (error) {
        return { status: "error", message: error.message }
    }
}

export default validateForm
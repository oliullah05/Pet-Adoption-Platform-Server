import { z } from "zod";

const loginUser = z.object({
    body:z.object({
        password:z.string({required_error:"Password is required"}),
        email:z.string({required_error:"Email is required"}),
    })
})

export const AuthValidations = {
    loginUser
}
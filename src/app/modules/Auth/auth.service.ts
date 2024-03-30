
import config from "../../config";
import { jwtHelpers } from "../../helpers/jwtHelpers";
import prisma from "../../shared/prisma";
import bcrypt from "bcrypt"
const loginUser = async (payload: { email: string, password: string }) => {
    const userData = await prisma.user.findUniqueOrThrow({
        where: {
            email: payload.email
        }
    })

    const isCorrectPassword: boolean = await bcrypt.compare(payload.password, userData.password);
    if (!isCorrectPassword) {
        throw new Error("Password incorrect")
    }

    const jwtPayload = { email: userData.email,id:userData.id }
    
    const accessToken = jwtHelpers.genarateToken(jwtPayload, config.jwt.jwt_access_secret as string, config.jwt.jwt_access_expaire_in as string)

    return {
        id:userData.id,
        name:userData.name,
        email:userData.email,
        token:accessToken,
    }

}










export const AuthServices = {
    loginUser
  
}
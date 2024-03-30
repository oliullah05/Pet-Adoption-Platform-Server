import prisma from "../../shared/prisma";



const getMe = async(email:string)=>{
const result = await prisma.user.findUniqueOrThrow({
    where:{
        email
    },
    select:{
        id:true,
        name:true,
        email:true,
        createdAt:true,
        updatedAt:true
    }
})

return result;
}






export const ProfileServices = {
    getMe
}
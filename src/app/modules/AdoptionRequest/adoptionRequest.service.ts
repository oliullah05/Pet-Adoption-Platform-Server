import { AdoptionRequest } from "@prisma/client";
import prisma from "../../shared/prisma";

const createAdoptionRequest = async (payload: AdoptionRequest, email: string) => {

    const userData = await prisma.user.findUniqueOrThrow({
        where: {
            email
        }
    });

await prisma.pet.findUniqueOrThrow({
    where:{
        id:payload.petId
    }
})

    payload.userId = userData.id;
    const result = await prisma.adoptionRequest.create({
        data: payload
    })

    return result;
}


export const AdoptionRequestServices = {
    createAdoptionRequest
}
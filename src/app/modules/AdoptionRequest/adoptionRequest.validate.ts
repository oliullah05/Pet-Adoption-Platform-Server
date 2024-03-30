import {z} from "zod"

const createAdoptionRequest = z.object({
    body:z.object({
        petId:z.string({required_error:"petId is required"}),
        petOwnershipExperience:z.string({required_error:"petOwnershipExperience is required"})

    })
})


export const AdoptionRequestValidations= {
    createAdoptionRequest
}
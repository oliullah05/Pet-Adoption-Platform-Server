import { z } from "zod";
const PetSizeEnum = z.enum(['small', 'medium', 'large']);
const createPet = z.object({
body:z.object({   
  name: z.string(),
  species: z.string(),
  breed: z.string(),
  age: z.number().int(),
  size: PetSizeEnum,
  location: z.string(),
  description: z.string(),
  temperament: z.string(),
  medicalHistory: z.string(),
  adoptionRequirements: z.string()
    })
})

export const PetValidations = {
    createPet
}
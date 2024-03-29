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
const updatePet = z.object({
body:z.object({   
  name: z.string().optional(),
  species: z.string().optional(),
  breed: z.string().optional(),
  age: z.number().int().optional(),
  size: PetSizeEnum.optional(),
  location: z.string().optional(),
  description: z.string().optional(),
  temperament: z.string().optional(),
  medicalHistory: z.string().optional(),
  adoptionRequirements: z.string().optional()
    })
})

export const PetValidations = {
    createPet,
    updatePet
}
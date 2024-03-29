import express from "express";
import { PetValidations } from "./pet.validation";
import { PetControllers } from "./pet.controller";
import validateRequest from "../../middlewars/validateRequest";
import auth from "../../middlewars/auth";





const router = express.Router();


router.post("/",auth(), validateRequest(PetValidations.createPet), PetControllers.createPet);




export const PetRoutes = router;
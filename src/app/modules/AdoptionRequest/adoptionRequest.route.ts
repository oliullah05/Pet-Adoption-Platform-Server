import express from "express"

import { AdoptionRequestControllers } from "./adoptionRequest.controller"
import auth from "../../middlewars/auth";
import validateRequest from "../../middlewars/validateRequest";
import { AdoptionRequestValidations } from "./adoptionRequest.validate";

const router = express.Router()

router.post("/",
auth(),
validateRequest(AdoptionRequestValidations.createAdoptionRequest),
AdoptionRequestControllers.createAdoptionRequest
)

export const AdoptionRequestRoutes = router;
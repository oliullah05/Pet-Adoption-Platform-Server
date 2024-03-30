import express from "express";
import validateRequest from "../../middlewars/validateRequest";
import { ProfileControllers } from "./profile.controller";
import auth from "../../middlewars/auth";


const router = express.Router();


router.get("/",auth(), ProfileControllers.getMe);




export const ProfileRoutes = router;
import express from "express"
import { UserRoutes } from "../modules/User/user.route";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { PetRoutes } from "../modules/Pet/pet.route";
import { AdoptionRequestRoutes } from "../modules/AdoptionRequest/adoptionRequest.route";
const router = express.Router();

const moduleRoutes = [
    {
        path:"/",
        route:UserRoutes
    },
    {
        path:"/login",
        route:AuthRoutes
    },
    {
        path:"/pets",
        route:PetRoutes
    },
    {
        path:"/adoption-request",
        route:AdoptionRequestRoutes
    }
  
]


moduleRoutes.forEach(route=>router.use(route.path,route.route))
export default router;


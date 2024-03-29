import express from "express"
import { UserRoutes } from "../modules/User/user.route";
import { AuthRoutes } from "../modules/Auth/auth.route";
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
    // {
    //     path:"/admin",
    //     route:adminRoutes
    // },
    // {
    //     path:"/auth",
    //     route:AuthRoutes
    // },
  
]


moduleRoutes.forEach(route=>router.use(route.path,route.route))
export default router;


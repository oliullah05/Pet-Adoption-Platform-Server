import express from "express"
import { UserRoutes } from "../modules/User/user.route";
const router = express.Router();

const moduleRoutes = [
    {
        path:"/user",
        route:UserRoutes
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


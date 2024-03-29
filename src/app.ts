import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
import router from "./app/routes";

const app: Application = express();

// middlewars
app.use(cors())






// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use("/api/v1", router)


app.get("/", (req: Request, res: Response) => {
    res.send({
        message: "Pet-Adoption server is running"
    })
})




export default app;
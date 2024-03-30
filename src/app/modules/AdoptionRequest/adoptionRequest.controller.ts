import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { AdoptionRequestServices } from "./adoptionRequest.service";

const createAdoptionRequest = catchAsync(async(req,res)=>{
const data = req.body;
const userEmail = req.user.email;
const result = await AdoptionRequestServices.createAdoptionRequest(data,userEmail)

sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message: "Adoption request submitted successfully",
    success: true,
    data: result
})


})













export const AdoptionRequestControllers = {
    createAdoptionRequest
}
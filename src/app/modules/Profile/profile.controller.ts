import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { ProfileServices } from "./profile.service";



const getMe = catchAsync(async (req, res) => {
    const email = req.user.email;
    const result = await ProfileServices.getMe(email);
    sendResponse(res, {
        success: true,
        message: "User profile retrieved successfully",
        statusCode: httpStatus.OK,
        data: result
    })

})




export const ProfileControllers = {
    getMe
}
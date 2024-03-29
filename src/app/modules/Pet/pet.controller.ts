import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { PetServices } from "./pet.service";


const createPet = catchAsync(async (req, res) => {

   const petData = req.body;
    const result = await PetServices.createPet(petData);
    sendResponse(res, {
        success: true,
        message: "Pet added successfully",
        statusCode: httpStatus.CREATED,
        data: result
    })

})


// const getAllUser = catchAsync(async (req, res) => {

//     const filters = pick(req.query, userFilterableFields);
//     const options = pick(req.query, ['page', "limit", "sortBy", "sortOrder"]);
//     const result = await UserServices.getAllUser(filters, options);
//     sendResponse(res, {
//         success: true,
//         message: "Users are retrieve successfully",
//         statusCode: httpStatus.OK,
//         meta: result.meta,
//         data: result.data
//     })

// })

export const PetControllers = {
    // getAllUser,
    createPet
}
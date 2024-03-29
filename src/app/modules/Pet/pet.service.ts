import { Pet } from "@prisma/client";
import prisma from "../../shared/prisma";





const createPet = async(payload:Pet)=>{
    const result = await prisma.pet.create({
        data:payload,
    })

    return result
}





// const getAllUser = async (params:any, options:IPaginationOptions) => {
 
//     const { searchTerm, ...filterData } = params;
 
//     const { limit, page, sortBy, sortOrder, skip } = paginationHelper.calculatePagination(options)
//     const andConditions: Prisma.UserWhereInput[] = [];


//     if (searchTerm) {
//         andConditions.push({
//             OR: userSearchableFields.map(field => ({
//                 [field]: {
//                     contains:searchTerm,
//                     mode: "insensitive"
//                 }
//             }))
//         })
//     }


//     if (Object.keys(filterData).length > 0) {
//         andConditions.push({
//             AND: Object.keys(filterData).map(key => ({
//                 [key]: {
//                     equals: (filterData as any)[key]
//                 }
//             }))
//         })
//     }



//     const whereConditions: Prisma.UserWhereInput = { AND: andConditions }
//     // console.dir(andConditions,{depth:"infinity"});
//     const result = await prisma.user.findMany({
//         where: whereConditions,
//         skip,
//         take: limit,
//         orderBy: sortBy && sortOrder ? {
//             [sortBy]: sortOrder
//         } : {
//             createdAt: "desc"
//         },
//         select:{
//            id:true,
//            email:true,
//            name:true,
//            createdAt:true,
//            updatedAt:true,
//         }
//     })

//     const total = await prisma.user.count({
//         where: whereConditions
//     })
//     return {
//         meta: {
//             page,
//             limit,
//             total
//         },
//         data: result
//     }
// }




export const PetServices = {
    // getAllPet,
    createPet
}
import { NextFunction, Request, Response } from "express"
import httpStatus from "http-status"
import { TErrorSources } from "../interface/error";
import { ZodError, any } from "zod";
import handleZodError from "../errors/handleZodError";
import config from "../config";
import ApiError from "../errors/ApiError";

const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    // res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    //     success: false,
    //     message: err.message || "Something Went Wrong!!",
    //     error:err
    // })

    let statusCode = 500;
    let message = err.message || 'Something went wrong!'
    let errorDetails: TErrorSources = [
        {
            field: '',
            message:""
        },
    ];

    if (err instanceof ZodError) {
        
        const simplifiedError = handleZodError(err);
        statusCode = simplifiedError?.statusCode;
        message = ''
        errorDetails = {
            issues: simplifiedError?.errorSources
        }


        errorDetails.issues.map((issu:any) => {
            // console.log({message :issu.message});
            message = message+issu.message+". "
        });

    }


    else if (err instanceof ApiError) {
        statusCode = err?.statusCode;
        message = err.message;
        errorDetails = [
            {
                field: '',
                message: err?.message,
            },
        ];
    } else if (err instanceof Error) {
        message = err.message;
        errorDetails = [
            {
                field: '',
                message: err?.message,
            },
        ];
    }

    //ultimate return
    return res.status(statusCode).json({
        success: false,
        message,
        errorDetails,
        // error:err,
        // stack: config.node_env === 'development' ? err?.stack : null,
    });
};


export default globalErrorHandler;
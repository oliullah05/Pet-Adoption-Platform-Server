import { NextFunction, Request, Response } from "express"
import httpStatus from "http-status"
import { TErrorSources } from "../interface/error";
import { ZodError } from "zod";
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
    let message = 'Something went wrong!';
    let errorDetails: TErrorSources  = [
      {
        path: '',
        message: 'Something went wrong',
      },
    ];

    if (err instanceof ZodError) {
        const simplifiedError = handleZodError(err);
        statusCode = simplifiedError?.statusCode;
        message = simplifiedError?.message;
        errorDetails = {
            issues:simplifiedError?.errorSources
        }
      }


      else if (err instanceof ApiError) {
        statusCode = err?.statusCode;
        message = err.message;
        errorDetails = [
          {
            path: '',
            message: err?.message,
          },
        ];
      } else if (err instanceof Error) {
        message = err.message;
        errorDetails = [
          {
            path: '',
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
export type TErrorSources = {
    field: string | number;
    message: string
  }[] | {issues:any};
  
  export type TGenericErrorResponse = {
    statusCode: number;
    message: string;
    errorSources: TErrorSources;
  };
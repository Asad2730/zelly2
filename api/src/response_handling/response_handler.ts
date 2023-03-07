import {  Response} from 'express';
import { RETURN_CODE } from "../constant";


export const ReS = (res: Response, data: object, code = RETURN_CODE.SUCCESS) => {
   console.log(res, { ...data, statusCode: code });
    let toSend = { success: true, requestId: res.req };
    if (typeof data === 'object') {
      toSend = Object.assign(toSend, data); // merge the objects
    }
    return {
      toSend,
      statusCode: code,
      data
    };
  };
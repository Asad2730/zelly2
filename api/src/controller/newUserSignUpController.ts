import { Request, Response } from 'express';
import { signUp } from '../services/new_User_Service';
import { ISignUp } from '../interfaces/userSignup';

export const newUserSignup = async (req: Request, res: Response) => {
  const { email, password, userType, personalInformation }: ISignUp = req.body;
  const newUserData = await signUp({ email, password, userType, personalInformation });
  return res.send(newUserData).json();
};



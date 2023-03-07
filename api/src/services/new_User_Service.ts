import bcrypt from 'bcrypt'
import { DocumentDefinition } from "mongoose";
import { ISignUp } from "../interfaces/userSignup";
import { newUserSignUpValidator } from "../validation/auth";
import * as userService from './user_Service';

export const signUp = async ({ email, password, userType, personalInformation }: DocumentDefinition<ISignUp>) => {
    const { errors, isValid } = newUserSignUpValidator({ email, password, userType });
    if (!isValid)
        return {
            statusCode: 400,
            message: errors.email || errors.password
        }

    /* Checking if User with email already exists */
    const isUserExists = await userService.userExist({ 'email': email });
    if (isUserExists) return {
        statusCode: 409,
        message: 'User already exists with this Email'
    }
    /* Hashing Password to save in Database */
    const encryptedPassword = await bcrypt.hash(password, 10);
    //  /* Creating new user and saving in Database */
    const data = {
        email,
        password: encryptedPassword,
        userType,
        personalInformation,
        timeAccountCreation: Date.now(),
        createdAt: new Date().toLocaleString(),
    };

    const user = await userService.create(data);
    const res = {
        email,
        userType,
        personalInformation,
        timeAccountCreation: Date.now(),
        createdAt: new Date().toLocaleString(),
    }

    const newUserData: object = {
        statusCode: 200,
        success: true,
        id: user._id,
        data: res
    };
    return newUserData;
};
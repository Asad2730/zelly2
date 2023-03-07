import { ISignUp } from '../interfaces/userSignup';
import Validator from 'validator';
import isEmpty from './is-empty';

/**
 * @param {string} email
 * @param {string} password
 * @returns {{isValid: boolean, errors: {} | {[key: string]: string}}}
 */

interface IError {
    email?: string,
    password?: string,
    userType?: string
}

export const newUserSignUpValidator = ({ email, password, userType }: ISignUp) => {
    const errors: IError = {};

    if (!Validator.isEmail(email)) errors.email = 'Email is Invalid';
    if (Validator.isEmpty(email)) errors.email = 'Email field is required';

    if (!Validator.isLength(password, { min: 8 }))
        errors.password = 'Password must contain minimum 8 characters';

    if (Validator.isEmpty(password)) errors.password = 'Password field is required';

    if (Validator.isEmpty(userType)) errors.userType = 'userType field is required';

    return {
        errors,
        isValid: isEmpty(errors),
    };
};
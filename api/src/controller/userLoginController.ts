import { Request, Response } from 'express';
import Jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import { userExists, logInUser } from '../services/user_Service';

export const Login = async (req: Request, res: Response) => {
    const { email, password, userType } = req.body;
    console.log('body',email)
    try {
        if (!email || !password || !userType) {
            res.status(400).send("All input is required");
        }
        const user = await userExists({ email: email.toLowerCase(), userType });
        if (user && (await bcrypt.compare(password, user?.password))) {
            const jwtSecret: string = process.env.JWT_SECRET!;
            const token = Jwt.sign(
                { user_id: user._id, email },
                jwtSecret,
                {
                    expiresIn: "2h",
                }
            );
            const data = {
                token,
                email,
                userType: user?.userType,
                personalInformation: user?.personalInformation,
                timeAccountCreation: Date.now(),
                createdAt: new Date().toLocaleString(),
            }
            console.log('data',data)
            res.status(200).json(data);
        }
        //res.status(400).send("Invalid Credentials");
    } catch (err) {
        console.log(err);
    }
};


export const Login2 = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        console.log('Body',req.body)
        const user = await logInUser({ email: email.toLowerCase() });
        if (user && (await bcrypt.compare(password, user?.password))) {
            const jwtSecret: string = process.env.JWT_SECRET!;
            const token = Jwt.sign(
                { user_id: user._id, email },
                jwtSecret,
                {
                    expiresIn: "2h",
                }
            );
            const data = {
                token,
                email,
                userType: user?.userType,
                personalInformation: user?.personalInformation,
                timeAccountCreation: Date.now(),
                createdAt: new Date().toLocaleString(),
            }

            console.log('token', data.token)
            res.status(200).json(data);
        }

    } catch (err) {
        console.log(err);
    }
}
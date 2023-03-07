import { Request, Response } from "express";
import { IMall } from "../interfaces/mall";
import { mall, addMall, updateMall, deleteMall } from "../services/mall_Service";

export const getMall = async (req: Request, res: Response) => {
    try {
        const mallData = await mall();
        return res.send({ statusCode: 200, data: mallData })
    }
    catch (err: any) {
        return res.send({ statusCode: 500, message: err?.message })
    }
}

export const createMall = async (req: Request, res: Response) => {
    const mallData = req.body;
    try {
        const mall = await addMall(mallData);
        return res.send({ statusCode: 200, data: mall })
    }
    catch (err: any) {
        return res.send({ statusCode: 500, message: err?.message })
    }
}

export const mallUpdate = async (req: Request, res: Response) => {
    const id: any = req.query.id;
    const data: IMall = req.body;
    if (!id || !data) {
        return res.send({ message: "ID is required in parameters", statusCode: 500 })
    }
    try {
        await updateMall(id, data);
        return res.send({ message: "data updated successfully", statusCode: 200 })
    }
    catch (err: any) {
        return res.send({ statusCode: 500, message: err?.message })
    }
}

export const delMall = async (req: Request, res: Response) => {
    const id: any = req.query.id;
    if (!id) {
        return res.send({ message: "ID is required in parameters", statusCode: 500 })
    }
    try {
        await deleteMall(id);
        return res.send({ message: "mall deleted successfully", statsCode: 200 })
    }
    catch (err: any) {
        return res.send({ statusCode: 500, message: err?.message })
    }
}
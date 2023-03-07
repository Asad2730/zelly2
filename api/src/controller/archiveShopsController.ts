import { Request, Response } from "express-async-router";
import { addShopToArchive, allArchivedShops, archiveToAvailable } from "../services/archiveShop_Service";

export const archiveShop = async (req: Request, res: Response) => {
    const id: any = req.query.id;
    if (!id) {
        return res.send({ message: "Id is required in parameters", statusCode: 500 })
    }
    try {
        await addShopToArchive(id);
        return res.send({ statusCode: 200, message: 'Shop successfully added to archive' })
    }
    catch (err: any) {
        return res.send({ statusCode: 500, message: err?.message })
    }

}

export const getAllArchivedShops = async (req: Request, res: Response) => {
    try {
        const shopData = await allArchivedShops();
        return res.send({ statusCode: 200, data: shopData })
    }
    catch (err: any) {
        return res.send({ statusCode: 500, message: err?.message })
    }
}

export const fromArchiveAvailable = async (req: Request, res: Response) => {
    const id = req.query.id;
    if (!id) {
        return res.send({ message: "Id is required in parameters", statusCode: 500 })
    }
    try {
        await archiveToAvailable(id);
        return res.send({ statusCode: 200, message: "Shop successfully added to available" })
    }
    catch (err: any) {
        return res.send({ statusCode: 500, message: err?.message })
    }
}
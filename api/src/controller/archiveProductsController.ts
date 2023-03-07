import { Request, Response } from "express-async-router";
import { addProductToArchive, allArchivedProducts, archiveToAvailable } from "../services/archiveProduct_Service";

export const archiveProduct = async (req: Request, res: Response) => {
    const id: any = req.body.id;
    if (!id) {
        return res.send({ message: "Id is required in parameters", statusCode: 500 })
    }
    try {
        await addProductToArchive(id);
        return res.send({ statusCode: 200, message: 'Product successfully added to archive' })
    }
    catch (err: any) {
        return res.send({ statusCode: 500, message: err?.message })
    }

}

export const getAllArchivedProducts = async (req: Request, res: Response) => {
    try {
        const ProductData = await allArchivedProducts();
        return res.send({ statusCode: 200, data: ProductData })
    }
    catch (err: any) {
        return res.send({ statusCode: 500, message: err?.message })
    }
}

export const fromArchiveAvailable = async (req: Request, res: Response) => {
    const id = req.body.id;
    if (!id) {
        return res.send({ message: "Id is required in parameters", statusCode: 500 })
    }
    try {
        await archiveToAvailable(id);
        return res.send({ statusCode: 200, message: "Product successfully added to available" })
    }
    catch (err: any) {
        return res.send({ statusCode: 500, message: err?.message })
    }
}
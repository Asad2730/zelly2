import { Request, Response } from "express";
import { addShop, update, deleteShop, shops, getSingleShop } from "../services/shop_Service";
import { IShops } from "../interfaces/shop";

export const getShops = async (req: Request, res: Response) => {
    try {
        const shopData = await shops();
        return res.send({ statusCode: 200, data: shopData })
    }
    catch (err: any) {
        return res.send({ statusCode: 500, message: err?.message })
    }
}

export const getShopByID = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    if (!id) return res.send({ message: "ID is required in parameters", statusCode: 500 })
    try {
        const shop = await getSingleShop(id);
        return res.send({ statusCode: 200, data: shop })
    }
    catch (err: any) {
        return res.send({ statusCode: 500, message: err?.message })
    }
}

export const createShop = async (req: Request, res: Response) => {
    const shopData = req.body;
    try {
        const shop = await addShop(shopData);
        return res.send({ statusCode: 200, data: shop })
    }
    catch (err: any) {
        return res.send({ statusCode: 500, message: err?.message })
    }
}

export const updateShop = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    const data: IShops = req.body;
    console.log('updateid',id)
    if (!id || !data) {
        return res.send({ message: "ID is required in parameters", statusCode: 500 })
    }
    try {
        await update(id, data);
        return res.send({ message: "data updated successfully", statusCode: 200 })
    }
    catch (err: any) {
        return res.send({ statusCode: 500, message: err?.message })
    }
}

export const delShop = async (req: Request, res: Response) => {
    const id: any = req.query.id;
    if (!id) {
        return res.send({ message: "ID is required in parameters", statusCode: 500 })
    }
    try {
        await deleteShop(id);
        return res.send({ message: "shop deleted successfully", statsCode: 200 })
    }
    catch (err: any) {
        return res.send({ statusCode: 500, message: err?.message })
    }
}
import { Request, Response } from "express";
import { product, deleteProduct, addProducts, update, getSingleProduct, getSingleProductId } from "../services/product_Service";
import { IProducts } from "../interfaces/products";
import { uploadImage } from "../s3";

export const getProducts = async (req: Request, res: Response) => {
    try {
        const productData = await product();
        return res.send({ statusCode: 200, data: productData })
    }
    catch (err: any) {
        return res.send({ statusCode: 500, message: err?.message })
    }
}

export const getProductByID = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    console.log('ID', id)
    if (!id) return res.send({ message: "ID is required in parameters", statusCode: 500 })
    try {
        const product = await getSingleProduct(id);
        console.log('data', product)
        return res.send({ statusCode: 200, data: product })
    }
    catch (err: any) {
        return res.send({ statusCode: 500, message: err?.message })
    }
}


export const getUserProducts = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    console.log('ID', id)
    if (!id) return res.send({ message: "ID is required in parameters", statusCode: 500 })
    try {
        const product = await getSingleProduct(id);
        console.log('data', product)
        return res.send({ statusCode: 200, data: product })
    }
    catch (err: any) {
        return res.send({ statusCode: 500, message: err?.message })
    }
}

export const getProductwithPk = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    console.log('ID', id)
    if (!id) return res.send({ message: "ID is required in parameters", statusCode: 500 })
    try {
        const product = await getSingleProductId(id);
        console.log('data', product)
        return res.send({ statusCode: 200, data: product })
    }
    catch (err: any) {
        return res.send({ statusCode: 500, message: err?.message })
    }
}


export const editProduct = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    console.log('ID', id)
    if (!id) return res.send({ message: "ID is required in parameters", statusCode: 500 })
    try {
        const product = await getSingleProduct(id);
        console.log('data', product)
        return res.send({ statusCode: 200, data: product })
    }
    catch (err: any) {
        return res.send({ statusCode: 500, message: err?.message })
    }
}

export const createProduct = async (req: Request, res: Response) => {
    // if (!req.files) return res.send({ statusCode: 500, message: 'no images found' });
    // const files: any = req?.files;
    // await uploadImage(files);
    // const imagePaths: Array<any> = [];
    // const basePath = `${req.protocol}://localhost:2000/uploads/`

    // if (files) {
    //     files.map((file: any) => {
    //         imagePaths.push(`${basePath}${file.originalname}`);
    //     }
    //     )
    // }
    // // const imageFileName = req?.files?.filename;       // http:localhost:3000/uploads/image-344433 

    const file = req.file;
    if (!file) {
        const error = new Error('Please upload a file');
        console.log(error)
    }


    const productData: IProducts = req.body;
    productData.images = file?.filename;

    try {
        const product = await addProducts(productData);
        return res.send({ statusCode: 200, data: product })
    }
    catch (err: any) {
        return res.send({ statusCode: 500, message: err?.message })
    }
}

export const updateProduct = async (req: Request, res: Response) => {
    const id: any = req.query.id;
    const data: IProducts = req.body;
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

export const delProduct = async (req: Request, res: Response) => {
    const id: any = req.query.id;
    if (!id) {
        return res.send({ message: "ID is required in parameters", statusCode: 500 })
    }
    try {
        await deleteProduct(id);
        return res.send({ message: "product deleted successfully", statsCode: 200 })
    }
    catch (err: any) {
        return res.send({ statusCode: 500, message: err?.message })
    }
}
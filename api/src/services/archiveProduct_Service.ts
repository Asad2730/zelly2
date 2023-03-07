import { Products } from '../models/products';

export const addProductToArchive = async (id: any) => {
    const updated = await Products.updateMany(
        { _id: { $in: id } },
        { $set: { available: false } },
        { multi: true }
    )
    return updated;
}

export const allArchivedProducts = async () => {
    const archivedProducts = await Products.find({ 'available': false });
    if (!archivedProducts) return 'No products found';
    return archivedProducts;
}

export const archiveToAvailable = async (id: any) => {
    const updated = await Products.updateMany(
        { _id: { $in: id } },
        { $set: { available: true } },
        { multi: true }
    )
    return updated;
}


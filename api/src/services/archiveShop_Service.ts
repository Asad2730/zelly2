import { Shop } from "../models/shop";

export const addShopToArchive = async (id: any) => {
    const updated = await Shop.findOneAndUpdate({ 'id': id },
        {
            $set: {
                'isArchive': true
            },
        });
    return updated;
}

export const allArchivedShops = async () => {
    const archivedShops = await Shop.find({ 'isArchive': true });
    if (!archivedShops) return 'No shops found';
    return archivedShops;
}

export const archiveToAvailable = async (id: any) => {
    const updated = await Shop.findOneAndUpdate({ 'id': id },
        {
            $set: {
                'isArchive': false
            },
        });
    return updated;
}
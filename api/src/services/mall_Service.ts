import { Mall } from "../models/mall";
import { IMall } from "../interfaces/mall";

export const mall = async () => {
    const mall = await Mall.find();
    return mall;
}

export const addMall = async (mallData: IMall) => {
    const mall = new Mall(mallData);
    await mall.save();
    return mall;
}

export const updateMall = async (id: any, data: IMall) => {
    const updated = await Mall.findOneAndUpdate({ 'id': id },
        {
            $set: {
                'availableShops': data.availableShops,
                'floors': data.floors,
                'registeredShops': data.registeredShops,
                'totalShops': data.totalShops
            },
        });
    return updated;
}

export const deleteMall = async (id: any) => {
    const del = await Mall.findByIdAndDelete({ '_id': id });
    return del;
}



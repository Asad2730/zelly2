import { Cart } from '../models/cart';
import { ICart } from '../interfaces/cart';
import {ITemp} from '../interfaces/temp';
import {Temp} from '../models/tempCart';

export const getCartItems = async () => {
    const cart = await Cart.find();
    return cart;
}

export const getCartbyId = async(cartId: any) =>{
    const items = await Cart.findById(cartId);
    if(!items) return 'No Cart Items present';
    return items;
}

export const addCart = async (cartData: ICart) => {
    const cart = new Cart(cartData);
    await cart.save();
    return cart;
}

export const update = async (id: any, data: ICart) => {
    const updated = await Cart.findOneAndUpdate({ 'id': id },
        {
            $set: {
                'Address': data.Address,
                'city': data.city,
                'dateOrdered': data.dateOrdered,
                'orderItems': data.orderItems,
                'phone': data.phone,
                'shopId': data.shopId,
                'status': data.status,
                'totalItems': data.totalItems,
                'totalPrice': data.totalPrice,
                'user': data.user,
                'zip': data.zip,
            }
        });
    return updated;
}

export const deleteCart = async (id: any) => {
    const del = await Cart.findByIdAndDelete({ '_id': id });
    return del;
}


export const addTemp = async (productData: ITemp) => {
    const product = new Temp(productData);
    await product.save();
    return product;
}

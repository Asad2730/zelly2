import { IOrder } from "./order";
import { ISignUp } from "./userSignup";
import { IShops } from "./shop";

export interface ICart {
    orderItems: IOrder,
    orderId?: string,
    Address: string,
    city: string,
    zip: number,
    phone: number,
    status: string,
    user: ISignUp,
    totalItems: number,
    totalPrice: number,
    shopId: IShops,
    dateOrdered: Date
}
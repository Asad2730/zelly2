import { Order } from "../models/order";
import { IOrder } from "../interfaces/order";

export const getOrder = () => {
    const orders = Order.find();
    if (!orders) return ('no orders Available');
    return orders
}

export const createOrder = async (orderObject: IOrder) => {
    const order = new Order(orderObject);
    await order.save();
    return order;
}

export const updateOrder = async (id: any, orderObject: IOrder) => {
    const order = await Order.findOneAndUpdate({ 'id': id },
        {
            $set: {
                'product': orderObject.product,
                'quantity': orderObject.quantity
            },
        });
    return order;
}

export const delOrder = async (id: any) => {               
    const order = await Order.findByIdAndDelete({ '_id': id });
    return order;
}

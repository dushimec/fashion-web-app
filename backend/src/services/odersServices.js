
import Order from "../models/orders";
import OrderItems from "../models/orderItem";


const findOrders = async () => {
    try {
        return await Order.find({});
    } catch (error) {
        throw error;
    }
};

const postOrders = async (orderData) => {
    try {
        const orderItemsIds = await Promise.all(orderData.orderItems.map(async orderitem => {
            let newOrderItem = new OrderItems({
                quantity: orderitem.quantity,
                product: orderitem.product
            });
            newOrderItem = await newOrderItem.save();
            return newOrderItem._id;
        }));

        const orderIds = await orderItemsIds;

        let order = new Order({
            orderItems: orderIds,
            shippingAddress1: orderData.shippingAddress1,
            shippingAddress2: orderData.shippingAddress2,
            city: orderData.city,
            zip: orderData.zip,
            country: orderData.country,
            phone: orderData.phone,
            status: orderData.status,
            totalPrice: orderData.totalPrice,
            user: orderData.user
        });

        return await order.save();
    } catch (error) {
        throw error;
    }
};


export { findOrders, postOrders };

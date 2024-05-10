import OrderItems from '../models/orderItem';

const createOrderItem = async (orderItemData) => {
    try {
        const newOrderItem = new OrderItems(orderItemData);
        return await newOrderItem.save();
    } catch (error) {
        throw error;
    }
};

const getAllOrderItems = async () => {
    try {
        return await OrderItems.find();
    } catch (error) {
        throw error;
    }
};

export { createOrderItem, getAllOrderItems };

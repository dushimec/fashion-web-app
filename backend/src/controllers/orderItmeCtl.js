import { createOrderItem, getAllOrderItems } from "../services/orderItemService";

const createOrderItemController = async (req, res) => {
    try {
        const newOrderItem = await createOrderItem(req.body);
        res.status(201).json(newOrderItem);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getAllOrderItemsController = async (req, res) => {
    try {
        const orderItems = await getAllOrderItems();
        res.json(orderItems);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export { createOrderItemController, getAllOrderItemsController };

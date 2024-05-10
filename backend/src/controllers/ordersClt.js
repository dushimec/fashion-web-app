import { findOrders, postOrders } from "../services/odersServices";


const findOrdersController = async (req, res) => {
    try {
        const orderList = await findOrders();
        res.json(orderList);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const postOrdersController = async (req, res) => {
    try {
        const newOrder = await postOrders(req.body);
        res.status(200).json(newOrder);
    } catch (error) {
        res.status(404).json({ success: false });
    }
};


export { findOrdersController, postOrdersController };

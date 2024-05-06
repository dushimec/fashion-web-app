import OrderItems from "../models/orderItem";
import Orders from "../models/orders";

const findOrders = async (req, res) => {
    try {
        const orderList = await Orders.find({});
        if (!orderList) {
            return res.status(500).json({ success: false });
        }
        res.send(orderList);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const postOrders = async (req, res) => {
    try {
        const orderItemsIds = await Promise.all(req.body.orderItems.map(async orderitem => {
            let newOrderItem = new OrderItems({
                quantity: orderitem.quantity,
                product: orderitem.product
            });
            newOrderItem = await newOrderItem.save();
            return newOrderItem._id;
        }));

        const orderIds = await orderItemsIds;

        let order = new Orders({
            orderItems: orderIds,
            shippingAddress1: req.body.shippingAddress1,
            shippingAddress2: req.body.shippingAddress2,
            city: req.body.city,
            zip: req.body.zip,
            country: req.body.country,
            phone: req.body.phone,
            status: req.body.status,
            totalPrice: req.body.totalPrice,
            user: req.body.user
        });

        await order.save();
        res.status(200).json(order);
    } catch (error) {
        res.status(404).json({ success: false });
    }
};

export { findOrders, postOrders };

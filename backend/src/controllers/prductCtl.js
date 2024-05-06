import Category from "../models/category";
import Product from "../models/product";
import mongoose from 'mongoose';

const insert = async (req, res) => {
    try {
        const category = await Category.findById(req.body.category);
        if (!category) return res.status(404).send("Invalid Category");

        const product = new Product({
            name: req.body.name,
            description: req.body.description,
            richDescription: req.body.richDescription,
            image: req.body.image,
            brand: req.body.brand,
            price: req.body.price,
            category: req.body.category,
            countIstock: req.body.countIstock,
            rating: req.body.rating,
            numReview: req.body.numReview,
            isFeatured: req.body.isFeatured,
        });
        await product.save();

        if (!product)
            return res.status(500).send("Product cannot be created");
        return res.send(product);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const findUser = async (req, res) => {
    try {
        let filter = {};
        if (req.query.categories) {
            filter = { category: req.query.categories.split(',') };
        }
        const productList = await Product.find(filter).populate("category");
        if (!productList || productList.length === 0) {
            res.status(404).json({
                message: "No products found",
                success: false
            });
        } else {
            res.json(productList);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const findUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const getProductById = await Product.findById(id).populate("category");
        if (!getProductById) {
            res.status(404).json({
                message: "No product found with this ID",
                success: false
            });
        } else {
            res.json(getProductById);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateProduct = async (req, res) => {
    try {
        if (!mongoose.isValidObjectId(req.params.id)) {
            res.status(404).send("Invalid Product Id");
        }
        const category = await Category.findById(req.body.category);
        if (!category) return res.status(404).send("Invalid Category");

        const product = await Product.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            description: req.body.description,
            richDescription: req.body.richDescription,
            image: req.body.image,
            brand: req.body.brand,
            price: req.body.price,
            category: req.body.category,
            countIstock: req.body.countIstock,
            rating: req.body.rating,
            numReview: req.body.numReview,
            isFeatured: req.body.isFeatured,
        },
        { new: true });

        if (!product) {
            res.status(404).json({ success: false, message: "Product not updated" });
        } else {
            res.status(200).json(product);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndRemove(req.params.id);
        if (product) {
            res.status(200).json({ success: true, message: "Product deleted" });
        } else {
            res.status(404).json({ success: false, message: "Product not found" });
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const countProduct = async (req, res) => {
    try {
        const productCount = await Product.countDocuments();
        res.send(`The number of products in stock is: ${productCount}`);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

const productFeatured = async (req, res) => {
    try {
        const count = req.params.count ? req.params.count : 0;
        const products = await Product.find({ isFeatured: true }).limit(count);
        if (!products || products.length === 0) {
            res.status(404).json({ success: false });
        } else {
            res.send(products);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export { insert, findUser, findUserById, deleteProduct, updateProduct, countProduct, productFeatured };

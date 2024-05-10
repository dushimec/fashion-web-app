// Import Product model
import Product from "../models/product";


const insert = async (productData) => {
    try {
        const product = new Product(productData);
        return await product.save();
    } catch (error) {
        throw error;
    }
};

const findUser = async (categories) => {
    try {
        let filter = {};
        if (categories) {
            filter = { category: categories.split(',') };
        }
        return await Product.find(filter).populate("category");
    } catch (error) {
        throw error;
    }
};

const findUserById = async (productId) => {
    try {
        return await Product.findById(productId).populate("category");
    } catch (error) {
        throw error;
    }
};

const countProduct = async () => {
    try {
        return await Product.countDocuments();
    } catch (error) {
        throw error;
    }
};

const productFeatured = async (count) => {
    try {
        return await Product.find({ isFeatured: true }).limit(parseInt(count));
    } catch (error) {
        throw error;
    }
};

const deleteProduct = async (productId) => {
    try {
        return await Product.findByIdAndRemove(productId);
    } catch (error) {
        throw error;
    }
};

const updateProduct = async (productId, productData) => {
    try {
        return await Product.findByIdAndUpdate(productId, productData, { new: true });
    } catch (error) {
        throw error;
    }
};


export {
    insert,
    findUser,
    findUserById,
    countProduct,
    productFeatured,
    deleteProduct,
    updateProduct
};

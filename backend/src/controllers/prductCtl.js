import { countProduct, deleteProduct, findProduct, findProductById, insert, productFeatured, updateProduct } from "../services/productService";

const insertProduct = async (req, res) => {
    try {
        const product = await insert(req.body);
        res.send(product);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const findProductController = async (req, res) => {
    try {
        const productList = await findProduct(req.query.categories);
        res.json(productList);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const findProductByIdController = async (req, res) => {
    try {
        const product = await findProductById(req.params.id);
        if (!product) {
            res.status(404).json({
                message: "No product found with this ID",
                success: false
            });
        } else {
            res.json(product);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const countProductController = async (req, res) => {
    try {
        const productCount = await countProduct();
        res.send(`The number of products in stock is: ${productCount}`);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

const productFeaturedController = async (req, res) => {
    try {
        const count = req.params.count ? req.params.count : 0;
        const products = await productFeatured(count);
        if (!products || products.length === 0) {
            res.status(404).json({ success: false });
        } else {
            res.send(products);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deleteProductController = async (req, res) => {
    try {
        const product = await deleteProduct(req.params.id);
        if (product) {
            res.status(200).json({ success: true, message: "Product deleted" });
        } else {
            res.status(404).json({ success: false, message: "Product not found" });
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateProductController = async (req, res) => {
    try {
        const product = await updateProduct(req.params.id, req.body);
        if (!product) {
            res.status(404).json({ success: false, message: "Product not updated" });
        } else {
            res.status(200).json(product);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export {
    insertProduct,
    findProductController,
    findProductByIdController,
    countProductController,
    productFeaturedController,
    deleteProductController,
    updateProductController
};
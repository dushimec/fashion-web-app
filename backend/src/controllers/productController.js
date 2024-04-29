

import ProductService from '../services/productService';
import Response from '../helper/Response';

class ProductController {
  static async createProduct(req, res) {
    try {
      const productData = req.body;
      const product = await ProductService.createProduct(productData);
      Response.successMessage(res, 'Product created successfully', product, 201);
    } catch (error) {
      Response.errorMessage(res, 'Error creating product', error);
    }
  }

  static async getAllProducts(req, res) {
    try {
      const products = await ProductService.getAllProducts();
      Response.successMessage(res, 'Products fetched successfully', products);
    } catch (error) {
      Response.errorMessage(res, 'Error fetching products', error);
    }
  }

  static async getProductById(req, res) {
    try {
      const productId = req.params.id;
      const product = await ProductService.getProductById(productId);
      Response.successMessage(res, 'Product fetched successfully', product);
    } catch (error) {
      Response.errorMessage(res, 'Error fetching product', error);
    }
  }

  static async updateProduct(req, res) {
    try {
      const productId = req.params.id;
      const newData = req.body;
      const updatedProduct = await ProductService.updateProduct(productId, newData);
      Response.successMessage(res, 'Product updated successfully', updatedProduct);
    } catch (error) {
      Response.errorMessage(res, 'Error updating product', error);
    }
  }

  static async deleteProduct(req, res) {
    try {
      const productId = req.params.id;
      const deletedProduct = await ProductService.deleteProduct(productId);
      Response.successMessage(res, 'Product deleted successfully', deletedProduct);
    } catch (error) {
      Response.errorMessage(res, 'Error deleting product', error);
    }
  }

  static async getProductCount(req, res) {
    try {
      const count = await ProductService.getProductCount();
      Response.successMessage(res, 'Product count fetched successfully', { count });
    } catch (error) {
      Response.errorMessage(res, 'Error fetching product count', error);
    }
  }
}

export default ProductController;

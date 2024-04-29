// ProductService.js

import ProductModel from '../models/productModel';
import Response from '../helper/Response';

class ProductService {
  static async createProduct(productData) {
    try {
      const product = await ProductModel.create(productData);
      return product;
    } catch (error) {
      throw new Error('Error creating product');
    }
  }

  static async getAllProducts() {
    try {
      const products = await ProductModel.find();
      return products;
    } catch (error) {
      throw new Error('Error fetching products');
    }
  }

  static async getProductById(productId) {
    try {
      const product = await ProductModel.findById(productId);
      if (!product) {
        throw new Error('Product not found');
      }
      return product;
    } catch (error) {
      throw new Error('Error fetching product by ID');
    }
  }

  static async updateProduct(productId, newData) {
    try {
      const product = await ProductModel.findByIdAndUpdate(productId, newData, { new: true });
      if (!product) {
        throw new Error('Product not found');
      }
      return product;
    } catch (error) {
      throw new Error('Error updating product');
    }
  }

  static async deleteProduct(productId) {
    try {
      const product = await ProductModel.findByIdAndDelete(productId);
      if (!product) {
        throw new Error('Product not found');
      }
      return product;
    } catch (error) {
      throw new Error('Error deleting product');
    }
  }

  static async getProductCount() {
    try {
      const count = await ProductModel.countDocuments();
      return count;
    } catch (error) {
      throw new Error('Error fetching product count');
    }
  }

  // Add more product-related methods as needed
}

export default ProductService;

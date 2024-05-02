import ProductModel from '../models/productModel';

import path from 'path';
import fs from 'fs';

class ProductService {
  static async createProduct(productData, imageFile) {
    try {
      const { title, desc, categories, size, color, price } = productData;

      let imagePath = '';
      if (imageFile) {
        const uploadDir = path.join(__dirname, '..', 'public', 'images');
        const imageExtension = imageFile.name.split('.').pop();
        const fileName = `${Date.now()}.${imageExtension}`;
        const uploadPath = path.join(uploadDir, fileName);

        if (!fs.existsSync(uploadDir)) {
          fs.mkdirSync(uploadDir, { recursive: true });
        }

        await imageFile.mv(uploadPath);
        imagePath = `/images/${fileName}`;
      }

      const product = await ProductModel.create({
        title,
        desc,
        imagePath,
        categories,
        size,
        color,
        price,
      });

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
}

export default ProductService;

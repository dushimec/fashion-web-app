
import Category from "../models/category";


const addCategory = async (categoryData) => {
    try {
        const category = new Category(categoryData);
        return await category.save();
    } catch (error) {
        throw error;
    }
};

const getCategoryList = async () => {
    try {
        return await Category.find();
    } catch (error) {
        throw error;
    }
};

const deleteCategory = async (categoryId) => {
    try {
        return await Category.findByIdAndRemove(categoryId);
    } catch (error) {
        throw error;
    }
};

const findCategoryById = async (categoryId) => {
    try {
        return await Category.findById(categoryId);
    } catch (error) {
        throw error;
    }
};

const updateCategory = async (categoryId, categoryData) => {
    try {
        return await Category.findByIdAndUpdate(categoryId, categoryData, { new: true });
    } catch (error) {
        throw error;
    }
};


export { addCategory, getCategoryList, deleteCategory, findCategoryById, updateCategory };

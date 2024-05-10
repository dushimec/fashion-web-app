import { addCategory, deleteCategory, findCategoryById, getCategoryList, updateCategory } from "../services/categoryServices";



const addCategoryController = async (req, res) => {
    try {
        const category = await addCategory(req.body);
        res.send(category);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getCategoryListController = async (req, res) => {
    try {
        const categoryList = await getCategoryList();
        res.json(categoryList);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deleteCategoryController = async (req, res) => {
    try {
        const deletedCategory = await deleteCategory(req.params.id);
        if (deletedCategory) {
            res.status(200).json({ success: true, message: "Category deleted" });
        } else {
            res.status(404).json({ success: false, message: "Category not found" });
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const findCategoryByIdController = async (req, res) => {
    try {
        const category = await findCategoryById(req.params.id);
        if (!category) {
            res.status(404).json({ success: false, message: "Category not found" });
        } else {
            res.status(200).json(category);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateCategoryController = async (req, res) => {
    try {
        const updatedCategory = await updateCategory(req.params.id, req.body);
        if (!updatedCategory) {
            res.status(404).json({ success: false, message: "Category not updated" });
        } else {
            res.status(200).json(updatedCategory);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};


export { addCategoryController, getCategoryListController, deleteCategoryController, findCategoryByIdController, updateCategoryController };

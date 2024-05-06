import Category from "../models/category";

const AddCategory = async (req, res) => {
    try { 
        let category = new Category(req.body);
        category = await category.save();

        if (!category) {
            return res.status(404).send("The category was not created");
        }
        res.send(category);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const GetCategory = async (req, res) => {
    try {
        const categoryList = await Category.find();

        if (!categoryList || categoryList.length === 0) {
            return res.status(404).json({
                message: 'There are no categories found',
                success: false
            });
        }
        res.json(categoryList);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const DeleteCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndRemove(req.params.id);
        if (category) {
            res.status(200).json({ success: true, message: "Category deleted" });
        } else {
            res.status(404).json({ success: false, message: "Category not found" });
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const findCategory = async (req, res) => {
    try {
        const findCategory = await Category.findById(req.params.id);
        if (!findCategory) {
            res.status(404).json({ success: false, message: "Category not found" });
        } else {
            res.status(200).json(findCategory);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateCategory = async (req, res) => {
    try {
        const updateCategory = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updateCategory) {
            res.status(404).json({ success: false, message: "Category not updated" });
        } else {
            res.status(200).json(updateCategory);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export { AddCategory, GetCategory, DeleteCategory, findCategory, updateCategory };

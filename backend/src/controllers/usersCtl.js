import { createUser, deleteUser, getUserById, getUsers, loginUser, updateUser } from "../services/userService";

const getUsersController = async (req, res) => {
    try {
        const users = await getUsers();
        res.send(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getUserByIdController = async (req, res) => {
    try {
        const user = await getUserById(req.params.id);
        if (!user) {
            res.status(404).json({ success: false, message: "No user found" });
        } else {
            res.send(user);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateUserController = async (req, res) => {
    try {
        const updatedUser = await updateUser(req.params.id, req.body);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(404).json({ success: false });
    }
};

const createUserController = async (req, res) => {
    try {
        const user = await createUser(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ success: false });
    }
};

const deleteUserController = async (req, res) => {
    try {
        const user = await deleteUser(req.params.id);
        if (user) {
            res.status(200).json({ success: true, message: "User deleted" });
        } else {
            res.status(404).json({ success: false, message: "User not found" });
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const loginUserController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await loginUser(email, password);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
};


export { getUsersController, getUserByIdController, updateUserController, createUserController, deleteUserController, loginUserController };

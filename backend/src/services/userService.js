
import User from "../models/users";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const getUsers = async () => {
    try {
        return await User.find().select("-passwordHash");
    } catch (error) {
        throw error;
    }
};

const getUserById = async (userId) => {
    try {
        return await User.findById(userId).select("-passwordHash");
    } catch (error) {
        throw error;
    }
};

const updateUser = async (userId, userData) => {
    try {
        return await User.findByIdAndUpdate(userId, userData, { new: true });
    } catch (error) {
        throw error;
    }
};

const createUser = async (userData) => {
    try {
        const user = new User({
            name: userData.name,
            email: userData.email,
            passwordHash: bcrypt.hashSync(userData.password, 10),
            phone: userData.phone,
            isAdmin: userData.isAdmin,
            street: userData.street,
            apartment: userData.apartment,
            category: userData.category,
            zip: userData.zip,
            city: userData.city,
            country: userData.country,
        });
        return await user.save();
    } catch (error) {
        throw error;
    }
};

const deleteUser = async (userId) => {
    try {
        return await User.findByIdAndRemove(userId);
    } catch (error) {
        throw error;
    }
};

const loginUser = async (email, password) => {
    try {
        const user = await User.findOne({ email: email });
        const secret = process.env.my_secret;
        if (!user) {
            return "User not found";
        }
        if (user && bcrypt.compareSync(password, user.passwordHash)) {
            const token = jwt.sign(
                {
                    userId: user.id,
                    isAdmin: user.isAdmin
                },
                secret,
                { expiresIn: '1d' }
            );
            return { user: user.email, token: token };
        } else {
            return "Password incorrect!!";
        }
    } catch (error) {
        throw error;
    }
};


export { getUsers, getUserById, updateUser, createUser, deleteUser, loginUser };

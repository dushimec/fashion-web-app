import Users from "../models/users";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const getUser = async (req, res) => {
    try {
        const user = await Users.find().select("-passwordHash");
        if (!user || user.length === 0) {
            res.status(404).json({ success: false, message: "No users found" });
        } else {
            res.send(user);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getSingle = async (req, res) => {
    try {
        const userId = await Users.findById(req.params.id).select("-passwordHash");
        if (!userId) {
            res.status(404).json({ success: false, message: "No user found" });
        } else {
            res.send(userId);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateUser = async (req, res) => {
    try {
        let userUpdate = await Users.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            email: req.body.email,
            passwordHash: bcrypt.hashSync(req.body.password, 10),
            phone: req.body.phone,
            isAdmin: req.body.isAdmin,
            street: req.body.street,
            apartment: req.body.apartment,
            category: req.body.category,
            zip: req.body.zip,
            city: req.body.city,
            country: req.body.country,
        }, { new: true });
        res.status(200).json(userUpdate);
    } catch (error) {
        res.status(404).json({ success: false });
    }
};

const postUser = async (req, res) => {
    try {
        let user = new Users({
            name: req.body.name,
            email: req.body.email,
            passwordHash: bcrypt.hashSync(req.body.password, 10),
            phone: req.body.phone,
            isAdmin: req.body.isAdmin,
            street: req.body.street,
            apartment: req.body.apartment,
            category: req.body.category,
            zip: req.body.zip,
            city: req.body.city,
            country: req.body.country,
        });
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ success: false });
    }
};

const deleteUser = async (req, res) => {
    try {
        const user = await Users.findByIdAndRemove(req.params.id);
        if (user) {
            res.status(200).json({ success: true, message: "User deleted" });
        } else {
            res.status(404).json({ success: false, message: "User not found" });
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const login = async (req, res) => {
    try {
        const user = await Users.findOne({ email: req.body.email });
        const secret = process.env.my_secret;
        if (!user) {
            return res.status(400).send("User not found");
        }
        if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
            const token = jwt.sign(
                {
                    userId: user.id,
                    isAdmin: user.isAdmin
                },
                secret,
                { expiresIn: '1d' }
            );
            res.status(200).send({ user: user.email, token: token });
        } else {
            res.status(400).json({ message: "Password incorrect!!" });
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export { getUser, postUser, deleteUser, getSingle, updateUser, login };

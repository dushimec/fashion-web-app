import UserModel from '../models/userModel';
import bcrypt from 'bcrypt';

class AuthService {
    static async userSignup(req) {
        const { firstName, lastName, email, phone, password } = req.body;
        const hashedPassword = bcrypt.hashSync(password, 10);

        const newUserObject = {
            firstName,
            lastName,
            email,
            phone,
            password: hashedPassword
        };

        const newUser = await UserModel.create(newUserObject);
        return newUser;
    }

    static async userLogin(email, password) {
        const user = await UserModel.findOne({ email });

        if (!user) return null;

        const isPasswordValid = await bcrypt.compare(password, user.password);
        
        if (!isPasswordValid) return null;

        return user;
    }
}

export default AuthService;
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export default class TokenAuthenticator {
    static tokenGenerator(data) {
        const token = jwt.sign(data, process.env.JWT_KEY);
        return token;
    }

    static decodedToken(token) {
        const payload = jwt.verify(token, process.env.JWT_KEY);
        return payload;
    }

    signToken(data) {
        const token = jwt.sign(data, process.env.JWT_KEY);
        return token;
    }
}

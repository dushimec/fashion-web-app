import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

class TokenAuthenticator {
    static tokenGenerator(data) {
        const token = jwt.sign(data, process.env.JWT_KEY);
        return token;
    }

    static decodedToken(token) {
        const payload = jwt.verify(token, process.env.JWT_KEY);
        return payload;
    }

    static setTokenInHeaders(res, token) {
        res.header('Authorization', `Bearer ${token}`);
    }

    static verifyToken(token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_KEY);
            return decoded;
        } catch (error) {
            throw new Error('Invalid token');
        }
    }
}

export default TokenAuthenticator;

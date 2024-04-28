// authMiddleware.js
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Response from "../helper/Response";

dotenv.config();

const authenticate = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return Response.errorMessage(res, "Authorization token not provided", 401);
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.user = decoded; // Attach user data to the request object for later use
        next();
    } catch (error) {
        return Response.errorMessage(res, "Invalid token", 401);
    }
};

export default authenticate;

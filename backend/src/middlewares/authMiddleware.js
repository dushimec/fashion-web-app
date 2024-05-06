import TokenAuthenticator from '../helper/TokentAuthenticator';
import Response from '../helper/Response';

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return Response.errorMessage(res, 'Unauthorized', 401);
    }

    try {
        const decoded = TokenAuthenticator.verifyToken(token);
        req.user = decoded;
        next();
    } catch (error) {
        return Response.errorMessage(res, 'Invalid token', 401);
    }
};

const isAdmin = (req, res, next) => {
    if (!req.user || !req.user.isAdmin) {
        return Response.errorMessage(res, 'Unauthorized', 401);
    }
    next();
};

export { authenticateToken, isAdmin };

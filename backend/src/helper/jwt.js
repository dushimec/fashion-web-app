import { expressjwt } from "express-jwt";

const authJwt = () => {
  const secret = process.env.JWT_KEY;

  return expressjwt({
    secret,
    algorithms: ['HS256'],
    isRevoked: isRevoked
  }).unless({
    path: [
      { url: /\/product(.*)/, methods: ['GET', 'OPTIONS'] },
      { url: /\/category(.*)/, methods: ['GET', 'OPTIONS'] },
      '/users/login',
      '/users/register',
    ]
  });
};

const isRevoked = (req, res, next) => {
  if (req.user.isAdmin) {
    next();
  } else {
    res.status(500).json({ error: "Access denied" });
  }
};

export default authJwt;

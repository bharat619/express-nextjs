import { verifyToken } from "./auth";

const JWTMiddleware = (req, res, next) => {
  const token = req.body.token;
  verifyToken(token)
    .then(decodedToken => {
      console.log(decodedToken);
    })
    .catch(err => {
      console.log(err);
    });
};

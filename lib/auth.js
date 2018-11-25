import jwt from "jsonwebtoken";

const verifyToken = token => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.AUTH_SECRET, (err, decodedToken) => {
      if (err || !decodedToken) {
        return reject(err);
      }
      resolve(decodedToken);
    });
  });
};

const createToken = details => {
  console.log(process.env.AUTH_SECRET);
  const token = jwt.sign(details, "its my secret", {
    expiresIn: "2 days",
    algorithm: "HS256"
  });
  console.log(token);
  return token;
};

export { verifyToken, createToken };

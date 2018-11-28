import { User } from "../models";
import cookie from "js-cookie";
import jwt from "jsonwebtoken";

const currentUser = (req, res, next) => {
  console.log(req.query.page);

  if (req.query.page == "/login" || req.query.page == undefined) {
    next();
  }
  const token = cookie.get("token");
  const decodedValue = jwt.decode(token);
  console.log(req.query);
  const currentUser = User.findOne({
    where: {
      email: decodedValue.email,
      password: decodedValue.password
    }
  });
  req.currentUser = currentUser;
  next();
};

export default currentUser;

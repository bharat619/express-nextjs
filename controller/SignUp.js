import { createToken } from "../lib/auth";
const performSignUp = (email, password, password2) => {
  return createToken({ email, password });
};

export { performSignUp };

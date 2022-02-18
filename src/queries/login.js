import User from "../classes/user/index.js";

const login = async (username, password) => {
  try {
    const Login = await User.login(username.trim(), password);
    return Login;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

export default login;

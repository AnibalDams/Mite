import User from "../classes/user/index.js";

const newUser = async (username, password) => {
  const user = new User(username, password);
  const _newUser = await user.newUser();
  return _newUser;
};

export default newUser;

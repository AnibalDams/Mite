import User from '../classes/user/index.js';

const newUser = async (username, password, admin) => {
  const user = new User(username, password);
  const _newUser = await user.newUser(admin);
  return _newUser;
};

export default newUser;

import User from '../classes/user/index.js';


const findUser = async (username)=> {
  try {
    const find = await User.findUser(username);
    return find;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};


export default findUser;

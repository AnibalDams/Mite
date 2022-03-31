import User from '../classes/user/index.js';


const newUser = async (username, password)=>{
  try {
    const user = new User(username, password);
    const _new = user.signUp();
    return _new;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};


export default newUser;

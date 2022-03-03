import signUp from './methods/signUp.js';
import _login from './staticMethods/login.js';
import _findUser from './staticMethods/findUser.js';

class User {
  #username;
  #password;

  constructor(name, password) {
    this.#username = name;
    this.#password = password;
  }

  async newUser(admin) {
    try {
      const New = await signUp(this.#username, this.#password, admin);
      return New;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }
  static async login(username, password) {
    try {
      const __login = await _login(username, password);
      return __login;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }
  static async findUser(username) {
    try {
      const find = await _findUser(username);
      return find;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }
}

export default User;

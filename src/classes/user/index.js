import signUp from './methods/signUp.js';
import _login from './staticMethods/login.js';

class User {
  #username;
  #password;

  constructor(name, password) {
    this.#username = name;
    this.#password = password;
  }

  async newUser(admin) {
    const New = await signUp(this.#username, this.#password, admin);

    return New;
  }
  static async login(username, password) {
    const __login = await _login(username, password);
    return __login;
  }
}

export default User;

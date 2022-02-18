import signUp from "./methods/signUp.js";
import Login from "./staticMethods/login.js";

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
    const _login = await Login(username, password);
    return _login;
  }
}

export default User;

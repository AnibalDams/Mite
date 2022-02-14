import signUp from "./methods/signUp.js";

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
}

export default User;

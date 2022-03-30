import _login from './methods/login.js';
import _signUp from './methods/signUp.js';


/**
 * usuario
 * @typedef {object} usuario
 * @property {string} _id id del usuario (generado por la db)
 * @property {string} id id del usuario (generado automaticamente)
 * @property {string} username Nombre de usuario
 * @property {string} password Contraseña del usuario
 *
 */


/**
 * Clase que contiene todo lo relacionado a los usuarios
 * @example
 * const usuario = new User(username,password);
 * await usuario.signUp();
 */
class User {
  #username;
  #password;
  constructor(username, password) {
    this.#username = username;
    this.#password = password;
  }


  /**
   * Mira {@link _signUp} Para mas información
   */
  async signUp() {
    try {
      const register = await _signUp(this.#username, this.#password);
      return register;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }
  async login(){
    try{
      const Login = await _login(this.#username,this.#password)
      return Login
    }catch(e){
      console.error(e)
      throw new Error(e)
    }
  }
}


export default User;

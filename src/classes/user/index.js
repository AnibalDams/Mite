import _editUserProfile from './staticMethods/editUserProfile.js'
import _findAllProfiles from './staticMethods/findAllProfiles.js';
import _login from './methods/login.js';
import _newProfile from './staticMethods/newProfile.js';
import _selectUserProfile from './staticMethods/selectUserProfile.js';
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

  static async editUserProfile(profileId,profileName,profileAvatar) {
    try{
      const edit = await _editUserProfile(profileId,profileName,profileAvatar)
      return edit
    }catch(e){
      console.error(e)
      throw new Error(e)
    }
  }
  
  static async findAllProfiles(user) {
    try {
      const find = await _findAllProfiles(user);
      return find;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }
  /**
   * Mira {@link _signUp} Para mas información
   */
  async login() {
    try {
      const Login = await _login(this.#username, this.#password);
      return Login;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }
  static async newProfile(name, avatar, user) {
    try {
      const _new = await _newProfile(name, avatar, user);
      return _new;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }
  static async selectUserProfile(id) {
    try {
      const select = await _selectUserProfile(id);
      return select;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }
  async signUp() {
    try {
      const register = await _signUp(this.#username, this.#password);
      return register;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }
}


export default User;

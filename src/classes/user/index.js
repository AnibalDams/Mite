import signUp from './methods/signUp.js'

class User {
    #username
    #password

    constructor(name,password){
        this.#username = name;
        this.#password = password
    }

    async newUser(){
        const New = await signUp(this.#username,this.#password)
        return New
    }
}

export default User
import bcrypt from 'bcrypt';


class Encrypter {
  #data;
  #compareData;
  constructor(data, compareData='') {
    this.#data = data;
    this.#compareData = compareData;
  }
  async encrypt() {
    const saltRounds = 10;
    	const salt = await bcrypt.genSalt(saltRounds);
    	const _encrypt = await bcrypt.hash(this.#data, salt);
    return _encrypt;
  }

  async compare() {
    const _compare = await bcrypt.compare(this.#data, this.#compareData );
    return _compare;
  }
}


export default Encrypter;

import user from "../../../schemas/user.schema.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'


const login = async (username, password) => {
	const User = await user.findOne({username})
	if (!User) {
		return "el usuario ingresado no existe"
		
	}else{
		const passwordMatch = await bcrypt.compare(password,User.password);
		if (passwordMatch) {
				const token = jwt.sign({User},process.env.JWTKEY)
				return token
		} else {
			return "contraseña incorrecta"
			
		}
	}
}


export default login
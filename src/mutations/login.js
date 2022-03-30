import User from '../classes/user/index.js'


const login = async (username,password)=>{
	try{
		const user = new User(username,password)
		const Login = user.login()
		return Login
	}catch(e){
		console.error(e)
		throw new Error(e)
	}
}


export default login
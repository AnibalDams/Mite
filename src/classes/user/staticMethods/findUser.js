import User from '../../../schemas/user.schema.js';

const findUser = async (username) => {

		try{
			const find = await User.findOne({username})
			if(find){
				return find
			}else{
				return {message:"Este usuario no existe."}
			}

		}catch(e){
			console.error(e)
			throw new Error(e)
		}
}


export default findUser
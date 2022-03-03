import Genre from '../../../schemas/genres.schema.js'


const findGenres = async ()=> {
	try{
		const find = await Genre.find()
		return find

	}catch(e){
		console.error(e)
		throw new Error(e)
	}
}


export default findGenres
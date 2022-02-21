import anime from "../../../schemas/anime.schema.js";
  

const find = async (page,limit)=> {
	const skipIndex = (page - 1) * limit
	try{
		const animes= await anime.find().sort({releaseDate:-1}).limit(limit).skip(skipIndex)

		return animes


	}catch(e){ 
		console.error(e)
		throw new Error(e)
	}

}


export default find
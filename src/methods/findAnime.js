import QueryAnime from '../classes/queryAnime.js'


const findAnime = async ({animeID} ) => {
	try{
		const anime = new QueryAnime("",animeID)
		const find = await anime.find()
		return find
	}catch(e){
		console.error(e)
		throw new Error(e)
	}
}


export default findAnime
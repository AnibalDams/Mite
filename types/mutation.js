export default `

	type Mutation {
		    deleteAnime(animeId:String!) : String


		    newAnime( 
		      name:String!, 
		      synopsis:String!, 
		      color:String!, 
		      image:String!, 
		      cover:String!, 
		      releaseDate:String!, 
		      study:String!, 
		      onGoing:Boolean!, 
		      genres:[String]!, 
		      type:String!, 
		      Private:Boolean!
		      secretKey:String
		      ) : anime
		      
		    newEpisode(
		      anime:Int!, 
		      episodeNumber:Int!,
		      thumbnail:String!, 
		      episodeName:String, 
		      servers:[episodeServerInput]
		      secretKey:String
		      ):episode
		      changeAnimeId(id):String
		      
		  }

`
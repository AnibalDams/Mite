export default `
		type Query {
			animeAndGenreRandom:animeAndGenre

			animeRandom:anime
		    
		    findAll(page:Int!, limit:Int!):[anime]
		    
		    findAllProfiles(user:String!):[userProfile]
		    
		    findAnime(animeID:String!) : anime
		    
		    findAnimeByGenre(genre:String!):[anime]

		    findAnimeInList(animeId:String!,userProfile:String!):animeList
		    
		    findAnimesInList(userProfile:String!):[animeList]

		    findEpisode(animeID:String!, episode:Int!):episode
		    
		    findEpisodes(animeID:String!):[episode]
		    
		    findGenres:[genres]
		    
		    latestAnimesAdded:[anime]
		    
		    latestEpisodesAdded:[episode]
		    
		    mostPopularAnime: [anime]
		    
		    search(anime:String!): [anime]
		    
		    selectUserProfile(id:String!):userProfile
		    
		    totalPagination(animesPerPage:Int!):Int
		    
		  }
`;

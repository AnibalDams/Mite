export default `
		type Query {
			animeRandom:anime
			animeAndGenreRandom:animeAndGenre
		    findAll(page:Int!, limit:Int!):[anime]
		    findAnime(animeID:String!) : anime
		    findAnimeByGenre(genre:String!):[anime]
		    findEpisode(animeID:String!, episode:Int!):episode
		    findEpisodes(animeID:String!):[episode]
		    findGenres:[genres]
		    latestAnimesAdded:[anime]
		    latestEpisodesAdded:[episode]
		    mostPopularAnime: [anime]
		    search(anime:String!): [anime]
		    totalPagination(animesPerPage:Int!):Int
		    
		  }
`;

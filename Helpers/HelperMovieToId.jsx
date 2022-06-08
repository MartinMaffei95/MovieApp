const genres = [
	{
		"id":28,
		"name":"Action"
	},
	{
		"id":12,
		"name":"Adventure"
	},
	{
		"id":16,
		"name":"Animation"
	},
	{
		"id":35,
		"name":"Comedy"
	},
	{
		"id":80,
		"name":"Crime"
	},
	{
		"id":99,
		"name":"Documentary"
	},
	{
		"id":18,
		"name":"Drama"
	},
	{
		"id":10751,
		"name":"Family"
	},
	{
		"id":14,
		"name":"Fantasy"
	},
	{
		"id":36,
		"name":"History"
	},
	{
		"id":27,
		"name":"Horror"
	},
	{
		"id":10402,
		"name":"Music"
	},
	{
		"id":9648,
		"name":"Mystery"
	},
	{
		"id":10749,
		"name":"Romance"
	},
	{
		"id":878,
		"name":"Science Fiction"
	},
	{
		"id":10770,
		"name":"TV Movie"
	},
	{
		"id":53,
		"name":"Thriller"
	},
	{
		"id":10752,
		"name":"War"
	},
	{
		"id":37,
		"name":"Western"
}]
export const HelperMovieToId = (movieGenre)=>{
    // const [movieID,setMovieID] = useState()


       for (let i = 0; i < genres.length; i++) {
           const ele = genres[i];
          if(movieGenre === ele.name){
			//   console.log(ele.id)
            return(ele.id)
          }
       }
    // return[movieID]
}

export const HelperIdToMovie = (movieId)=>{
    // const [movieID,setMovieID] = useState()


       for (let i = 0; i < genres.length; i++) {
           const ele = genres[i];
          if(movieId === ele.id){
			//   console.log(ele.id)
            return(ele.name)
          }
       }
    // return[movieID]
}
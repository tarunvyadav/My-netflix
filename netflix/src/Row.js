import React, { useEffect,useState } from 'react'
import axios from './axios';
import "./Row.css"
import Youtube from "react-youtube";
import movieTrailer from 'movie-trailer';

function Row({title,fetchUrl, isLargeRow = false}) {
  const [movies,setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("")
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(()=>{
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();

  },  [fetchUrl]);

     const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    const handleClick = (movie)=> {
      if(trailerUrl){
        setTrailerUrl('');
      }else{
        movieTrailer(movie?.name || "")
        .then((url)=>{
          const urlParam= new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParam.get('v'))
        })
        .catch((error) =>console.log(error))
      }

    }
 
  return (
    <div className='row'>
    <h2>
      {title}
    </h2> 
    <div className='row__posters'> {movies.map((movie)=>(
      ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (<img className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
      key={movie.id}
      onClick={()=>handleClick(movie)}
      src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
    )))}
    
    

    </div>
    {trailerUrl &&  <Youtube videoId= {trailerUrl} opts={opts}/>}


    </div>
  )
}

export default Row;
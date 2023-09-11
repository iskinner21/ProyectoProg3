import React from 'react'
import "./home.css" 
import Movie from "../../components/Movie/Movie"


let urlpopularMovies = "https://api.themoviedb.org/3/movie/popular?api_key=5ebefc19996563757d8045ae273d5a4b&language=en-US&page=1"
let urlTopRatedMovies = "https://api.themoviedb.org/3/movie/top_rated?api_key=5ebefc19996563757d8045ae273d5a4b";



function Home(){
    return(
        //Faltaria el componente de buscador//
        <Movie/>
    )
}

export default Home

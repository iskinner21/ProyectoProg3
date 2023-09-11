import React from 'react'
import ViewAllTop from '../../components/ViewAllTop/ViewAllTop';
import './verTodasTop.css'

let urlTopRatedMovies = "https://api.themoviedb.org/3/movie/top_rated?api_key=5ebefc19996563757d8045ae273d5a4b";


function VerTodasTop(){
    return(
        //Faltaria el componente de buscador//
        <ViewAllTop/>
    )
}


export default VerTodasTop
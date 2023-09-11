import React from 'react'
import ViewAllPop from '../../components/ViewAllPop/ViewAllPop';
import './verTodasPop.css'

let urlpopularMovies = "https://api.themoviedb.org/3/movie/popular?api_key=5ebefc19996563757d8045ae273d5a4b&language=en-US&page=1"


function VerTodasPop(){
    return(
        //Faltaria el componente de buscador//
        <ViewAllPop/>
    )
}


export default VerTodasPop
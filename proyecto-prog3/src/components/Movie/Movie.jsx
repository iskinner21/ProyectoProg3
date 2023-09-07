
import React, { Component } from "react"
import CardPopular from "../CardPopular/CardPopular"
import CardTopRated from '../CardTopRated/CardTopRated'
import { Link } from 'react-router-dom';
import './movie.css'

let urlPopularMovies = "https://api.themoviedb.org/3/movie/popular?api_key=5ebefc19996563757d8045ae273d5a4b&language=en-US&page=1";
let urlTopRatedMovies = "https://api.themoviedb.org/3/movie/top_rated?api_key=5ebefc19996563757d8045ae273d5a4b";

class Movie extends Component {

    constructor() {
        super()
        this.state = {
            popularArray: [],
            topArray: []
        }
    }

    componentDidMount() {
        //Primer fetch, aca buscamos de populares

        fetch(urlPopularMovies)
            .then(res => res.json())
            .then(data => {
                this.setState({
                popularArray: data.results.slice(0,4)
                })
            }
        )
            .catch()


        fetch(urlTopRatedMovies)
            .then(res => res.json())
            .then(data => this.setState({
                topArray: data.results.slice(0,4)
            }))
            .catch()

    }

    render() {
        return (
            <>
            <h1>Most Popular Movies</h1>
            <section className='contenedorPadre'>
                    {
                        this.state.popularArray.map((unaPelicula, idx) => <CardPopular key={unaPelicula.name + idx} dataPop={unaPelicula} />)
                    }
            </section>
            <br></br>
            <div className='padreBoton'>
                    <Link to='/VerTodasPop' className='boton'> <button><p>View All Popular Movies</p></button></Link>
            </div>
            <br></br>
            <h1>Top Rated Movies</h1>
            <section className='contenedorPadre'>
                    {
                        this.state.topArray.map((unaPelicula, idx) => <CardTopRated key={unaPelicula.name + idx} dataTop={unaPelicula} />)
                    }
            </section>
            <br></br>
            <div className='padreBoton'>
                <Link to='/VerTodasTop' className='boton'> <button><p>View All Top Rated Movies</p></button></Link>
            </div>
            </>






        )
    }

}

export default Movie 
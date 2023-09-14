
import React, { Component } from "react"
import CardPopular from "../CardPopular/CardPopular"
import CardTopRated from '../CardTopRated/CardTopRated'
import { Link } from 'react-router-dom';
import './movie.css'
import Buscador from "../Buscador/Buscador";

let urlPopularMovies = "https://api.themoviedb.org/3/movie/popular?api_key=5ebefc19996563757d8045ae273d5a4b&language=en-US&page=1";
let urlTopRatedMovies = "https://api.themoviedb.org/3/movie/top_rated?api_key=5ebefc19996563757d8045ae273d5a4b&language=en-US&page=1";

class Movie extends Component {

    constructor() {
        super()
        this.state = {
            popularArray: [],
            topArray: [],
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


        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=5ebefc19996563757d8045ae273d5a4b`)
        .then(res => res.json())
        .then(data => this.setState({
            todo: data.results
        }))
        .catch()

    }

    render() {
        return (
            <>
            <Buscador filtrado= {(filtro)=> this.filtrado(filtro)}/>
            <h1>Most Popular Movies</h1>
            <section className='contenedorPadre'>

                {
                   this.state.popularArray.length === 0 ?
                    <div>
                        <img src="/img/GifCargando.gif" alt="gif cargando"/>
                        <p>Cargando</p>
                    </div>
                 :
                 this.state.popularArray.map((unaPelicula, idx) => <CardPopular key={unaPelicula.name + idx} dataPop={unaPelicula} />)

                }
                    
            </section>
            <br></br>
            <div className='padreBoton'>
                    <Link to='/VerTodasPop' > <button className='boton'><p>View All </p></button></Link>
            </div>
            <br></br>
            <h1>Top Rated Movies</h1>
            <section className='contenedorPadre'>
                    {
                        this.state.topArray.length === 0 ?
                        <div>
                            <img src="/img/GifCargando.gif" alt="gif cargando"/>
                            <p>Cargando</p>
                        </div>
                     :
                        this.state.topArray.map((unaPelicula, idx) => <CardTopRated key={unaPelicula.name + idx} dataTop={unaPelicula} />)
                    }
            </section>
            <br></br>
            <div className='padreBoton'>
                <Link to='/VerTodasTop'> <button className='boton'><p>View All </p></button></Link>
            </div>
            </>
        )
    }

}

export default Movie 
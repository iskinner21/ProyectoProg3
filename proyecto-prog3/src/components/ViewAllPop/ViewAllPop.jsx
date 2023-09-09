import React, { Component } from "react"
import CardPopular from "../CardPopular/CardPopular"
import { Link } from 'react-router-dom';

let urlPopularMovies = "https://api.themoviedb.org/3/movie/popular?api_key=5ebefc19996563757d8045ae273d5a4b&language=en-US&page=1";


class ViewAllPop extends Component {

    constructor() {
        super()
        this.state = {
            popularArray: [],
        }
    }

    componentDidMount() {
        //Primer fetch, aca buscamos de populares

        fetch(urlPopularMovies)
            .then(res => res.json())
            .then(data => {
                this.setState({
                popularArray: data.results
                })
            }
        )
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
            <div className='padreBoton'>
                <Link to='/' className='boton'> <button><p>Home Page</p></button></Link>
            </div>
            </>
        )
    }

}

export default ViewAllPop
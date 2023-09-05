
import React, { Component } from "react"
import CardPopular from "../CardPopular/CardPopular"
import CardTopRated from '../CardTopRated/CardTopRated'

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
                popularArray: data.results.slice(0,5)
                })
            }
        )
            .catch()


        fetch(urlTopRatedMovies)
            .then(res => res.json())
            .then(data => this.setState({
                topArray: data.results.slice(0,5)
            }))
            .catch()

    }

    render() {
        return (
            <><h1>Most Popular Movies</h1>
                <section>
                    {
                        this.state.popularArray.map((unaPelicula, idx) => <CardPopular key={unaPelicula.name + idx} dataPop={unaPelicula} />)
                    }
                </section>
                <h1>Top Rated Movies</h1>
                <section>
                    {
                        this.state.topArray.map((unaPelicula, idx) => <CardTopRated key={unaPelicula.name + idx} dataTop={unaPelicula} />)
                    }

                </section></>







        )
    }

}

export default Movie 
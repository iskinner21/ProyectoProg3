import React, { Component } from "react"
import CardTopRated from '../CardTopRated/CardTopRated'
import { Link } from 'react-router-dom';



let urlTopRatedMovies = "https://api.themoviedb.org/3/movie/top_rated?api_key=5ebefc19996563757d8045ae273d5a4b";

class ViewAllTop extends Component {

    constructor() {
        super()
        this.state = {
            topArray: []
        }
    }

    componentDidMount() {
        //Primer fetch, aca buscamos de top



        fetch(urlTopRatedMovies)
            .then(res => res.json())
            .then(data => this.setState({
                topArray: data.results
            }))
            .catch()

    }

    render() {
        return (
            <>
            <h1>Top Rated Movies</h1>
            <section className='contenedorPadre'>
                    {
                        this.state.topArray.map((unaPelicula, idx) => <CardTopRated key={unaPelicula.name + idx} dataTop={unaPelicula} />)
                    }
            </section>
            <div className='padreBoton'>
                <Link to='/' className='boton'> <button><p>Home Page</p></button></Link>
            </div>
            </>
        )
    }

}

export default ViewAllTop
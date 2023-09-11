import React, { Component } from "react";
import "./detalle.css";



class Detalle extends Component{
    constructor(props){
        super(props)
        this.state = {
            id: props.match.params.id,
            pelicula: {},
            esFavorito: false,
            descripcion: "Ver Mas",
        }
    }
 

    componentDidMount(){

        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=5ebefc19996563757d8045ae273d5a4b`
        )
            .then(res => res.json())
            .then(data => {
                this.setState({
                    pelicula: data
                })
            }
        )
            .catch()
    }

    render(){
        console.log(this.state)
        return(
            <div className="padre">
            <article>
                <h3>{this.state.pelicula.title}</h3>
                <br></br>
                <img src={`https://image.tmdb.org/t/p/w342/${this.state.pelicula.poster_path}`} alt='img'/>
                <p>Rating: {this.state.pelicula.vote_average}</p>
                <p>Fecha de estreno: {this.state.pelicula.release_date}</p>
                <p>Duracion: {this.state.pelicula.runtime} minutos</p>
                <p>Sinopsis: {this.state.pelicula.overview}</p>
            </article>
        </div> 
        )
    }
}


export default Detalle
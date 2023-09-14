import React, { Component, Link } from "react";
import './resultados.css'
import CardPopular from "../../components/CardPopular/CardPopular";

class Resultados extends Component{

    constructor(props){
        super(props)
        this.state ={
            peliculas:''
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/search?api_key=5ebefc19996563757d8045ae273d5a4b`)
            .then( resp => resp.json())
            .then( data => this.setState({
                peliculas: data.results,
            }))

        console.log(this.state.peliculas)

        .catch(error => console.log(error))
        
    }

    render(){
        return(
            <div>
                {this.state.peliculas !== null ?
            <>{this.state.peliculas.map((unaPelicula, idx) => <CardPopular key={unaPelicula.name + idx} dataPop={unaPelicula} />)}</>
                :
                <h2>No se encontro lo que buscabas</h2>
            }
            </div>
        )
    }
}

export default Resultados



   
    
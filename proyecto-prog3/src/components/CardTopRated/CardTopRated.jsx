import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./cardTopRated.css";

class CardTopRated extends Component {
    constructor(props){
        super(props)
        this.state = {
            esFavorito : false,
            descripcion: "Ver Mas",
            clase: "ocultar",
        }
    }

    cambiarTexto() {
        if (this.state.descripcion === "Ver Mas") {
            this.setState({
                descripcion: "Ver menos",
                clase: 'mostrar'
            })
        } else {
            this.setState({
                descripcion: 'Ver Mas',
                clase: 'ocultar'
            })
        }
    }

render() {
    return(
        <><article>
                <h2>{this.props.dataTop.title}</h2>
                <img src={`https://image.tmdb.org/t/p/w342/${this.props.dataTop.poster_path}`}/>
                <Link to = {`/movies/detalle/id/${this.props.dataTop.id}`}><button>Ir a detalle</button></Link>
                <a className="descripcion" onClick={() => this.cambiarTexto()}>{this.state.descripcion}</a>
            </article></>
            
        
            
    )
}}

export default CardTopRated
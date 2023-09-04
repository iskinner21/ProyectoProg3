import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./CardPopular.css";


class CardPopular extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }


render() {
    return(
        <ReactFragment>
            <article>
                <h2>{this.props.dataPop.title}</h2>
                <img src={`https://image.tmdb.org/t/p/w342/${this.props.dataPop.poster_path}`}/>
                <Link to = {`/movies/detalle/id/${this.props.dataPop.id}`}></Link>
            </article>
        </ReactFragment>
            
    )
}}

export default CardPopular
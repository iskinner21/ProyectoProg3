import React, { Component } from "react";
import "./favoritos.css";
import CardPopular from "../../components/CardPopular/CardPopular";

class Favoritos extends Component{
    constructor(props){
        super(props)
        this.state = {
            esFavorito: false,
            dataFav: []
        }
    }

    componentDidMount(){
        let favs = localStorage.getItem('favoritos');
        let favo = []
        if (favs !== null){
            let favoritos = JSON.parse(favs);
            
            favoritos.forEach(fav => {
                return(
                    fetch(`https://api.themoviedb.org/3/movie/${fav}?api_key=5ebefc19996563757d8045ae273d5a4b`)

                    .then(res => res.json())
                    .then(data => {
                        favo.push(data)
                        this.setState({dataFav : favo})
                    
                }
            )
                .catch()
                )

                
            })
                
        
        }


    }

    render(){
        console.log(this.state.dataFav)
        return(
            <>
            <h1>Favoritos</h1>
            {this.state.dataFav !== null ?
            <>{this.state.dataFav.map((unaPelicula, idx) => <CardPopular key={unaPelicula.name + idx} dataPop={unaPelicula} />)}</>

                :
                <h4>No hay favoritos</h4>
            }
            
            </>
        )
    }
}


export default Favoritos
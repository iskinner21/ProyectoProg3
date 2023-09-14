import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./detalle.css";



class Detalle extends Component{
    constructor(props){
        super(props)
        this.state = {
            id: props.match.params.id,
            pelicula: {},
            generos: [],
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
                    pelicula: data,
                    generos: data.genres
                })
            }
        )
            .catch()
    }

    agregarFav(id){
        let storage = localStorage.getItem('favoritos')
        
        if(storage === null){
          let idEnArray = [id]
          let arrayAString = JSON.stringify(idEnArray)
          localStorage.setItem('favoritos', arrayAString)
        }
        
        else {
          let deStringAArray = JSON.parse(storage)
          deStringAArray.push(id)
          let arrayAString = JSON.stringify(deStringAArray)
          localStorage.setItem('favoritos', arrayAString)
        }
        this.setState({
            esFavorito: true
        })
    }

    sacarFav(id){
       let storage = localStorage.getItem('favoritos')
       let storageAArray = JSON.parse(storage)
       let filtro = storageAArray.filter((elm)=> elm !== id)
       let filtroAString = JSON.stringify(filtro)
       localStorage.setItem('favoritos', filtroAString)


       this.setState({
        esFavorito:false
       })

    }

    render(){
        console.log(this.state)
        return(
            <div className="padre">
            <article>
            {
                        this.state.pelicula.length === 0 ?
                        <div>
                            <img src="/img/GifCargando.gif" alt="gif cargando"/>
                            <p>Cargando</p>
                        </div>
                     :
                     
                     <React.Fragment>
                        <h3>{this.state.pelicula.title}</h3>
                        <br></br>
                        <img src={`https://image.tmdb.org/t/p/w342/${this.state.pelicula.poster_path}`} alt='img'/>
                        <p>Rating: {this.state.pelicula.vote_average}</p>
                        <p>Fecha de estreno: {this.state.pelicula.release_date}</p>
                        <p>Duracion: {this.state.pelicula.runtime} minutos</p>
                        <p>Sinopsis: {this.state.pelicula.overview}</p>
                        <ul>Generos: {this.state.generos.map((genero, idx) => <li key={genero.name + idx}>{genero.name}</li>)}</ul>
                     </React.Fragment>
                    }
                

                {
                    this.state.esFavorito 
                    ?
                    <button className="borrar" onClick={()=> this.sacarFav(this.state.id)}><p>Eliminar de Favoritos</p></button>
                    :
                    <button className="add" onClick={()=> this.agregarFav(this.state.id)}><p>Agregar a favoritos</p></button>

                }
            </article>
            <br></br>

            <Link to='/'> <button className="boton"><p>Volver a Home</p></button></Link>
        </div> 
        )
    }
}

//  <ul>Generos: {this.state.genres.map((genero, idx) => <li key={genero.name + idx}>{genero.name}</li>)}</ul>



export default Detalle
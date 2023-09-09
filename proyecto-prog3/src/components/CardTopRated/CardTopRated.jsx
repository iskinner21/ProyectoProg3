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

    componentDidMount(){
        let storage = localStorage.getItem('favoritos')
        let storageAArray = JSON.parse(storage)

        if(storageAArray !== null){
            let estaEnElArray = storageAArray.includes(this.props.datosPelicula.id)
            if(estaEnElArray){
                this.setState({
                    esFavorito:true
                })
            }
        }
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
        <>
        <div className="padre">
            <article>
                <h3>{this.props.dataTop.title}</h3>
                <br></br>
                <img src={`https://image.tmdb.org/t/p/w342/${this.props.dataTop.poster_path}`} alt='img'/>
                <br></br>
                <br></br>
                <Link to = {`/movies/detalle/id/${this.props.dataTop.id}`}><button className="botonDetalle"><p>Ir a detalle</p></button></Link>
                <br></br>
                <br></br>
                <a className="descripcion" onClick={() => this.cambiarTexto()}>{this.state.descripcion}</a>
                <p className={this.state.clase}>{this.props.dataTop.overview}</p>
                <br></br>
                <br></br>
                {
                    this.state.esFavorito ?

                    <button onClick={()=> this.sacarFav(this.props.datosPelicula.id)}><p>Eliminar de Favoritos</p></button>

                    :

                    <button onClick={()=> this.agregarFav(this.props.datosPelicula.id)}><p>Agregar a favoritos</p></button>

                }
            </article>
        </div>
            </>
        
            
        
            
    )
}}

export default CardTopRated
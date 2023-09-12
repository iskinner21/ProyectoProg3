import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./CardPopular.css";


class CardPopular extends Component {
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
        console.log(this.props.dataPop)
        if(storageAArray !== null){
            let estaEnElArray = storageAArray.includes(this.props.dataPop.id)
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
//COMO CAMBIAR LOS BR
render() {
    return(
        <>
        <div className="padre">
            <article>
                <h3>{this.props.dataPop.title}</h3>
                <br></br>
                <img src={`https://image.tmdb.org/t/p/w342/${this.props.dataPop.poster_path}`} alt='img'/>
                <br></br>
                <br></br>
                <Link className="detalleHome" to = {`/movies/detalle/id/${this.props.dataPop.id}`}><button><p>Ir a detalle</p></button></Link>
                <br></br>
                <br></br>
                <button className="descripcion" onClick={() => this.cambiarTexto()}>{this.state.descripcion}</button>
                <p className={this.state.clase}>{this.props.dataPop.overview}</p>
                <br></br>
                <br></br>
                {
                    this.state.esFavorito 
                    ?
                    <button onClick={()=> this.sacarFav(this.props.dataPop.id)}><p>Eliminar de Favoritos</p></button>
                    :
                    <button onClick={()=> this.agregarFav(this.props.dataPop.id)}><p>Agregar a favoritos</p></button>

                }
            </article>
        </div> 
        </>
            
        
            
    )
}}

export default CardPopular
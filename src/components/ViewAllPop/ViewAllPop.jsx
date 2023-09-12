import React, { Component } from "react"
import FormPop from "../Form/FormPop"
import CardPopular from "../CardPopular/CardPopular"
import './ViewAllPop.css'

let urlPopularMovies = "https://api.themoviedb.org/3/movie/popular?api_key=5ebefc19996563757d8045ae273d5a4b&language=en-US&page=1";


class ViewAllPop extends Component {

    constructor(props) {
        super(props)
        this.state = {
            popularArray: [],
            popularArrayFiltrado: [],
            paginaSiguiente: ""
        }
    }

    componentDidMount() {
        //Primer fetch, aca buscamos de populares

        fetch(urlPopularMovies)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                popularArray: data.results,
                popularArrayFiltrado: data.results,
                paginaSiguiente: data.page
                })
            }
        )
            .catch()

    }

cargar(){
    let urlPopCargar = `https://api.themoviedb.org/3/movie/popular?api_key=5ebefc19996563757d8045ae273d5a4b&language=en-US&page=${this.state.paginaSiguiente+1}`;

fetch(urlPopCargar)
            .then(res => res.json())
            .then(data => {
                this.setState({
                popularArray: this.state.popularArray.concat(data.results),
                popularArrayFiltrado: this.state.popularArray.concat(data.results),
                paginaSiguiente: data.page + 1
                })
            }
        )
            .catch()

}

filtradorPop(filtro){
    let peliculasFiltradas = this.state.popularArray.filter(pelicula =>pelicula.title.toLowerCase().includes(filtro.toLowerCase()))
    this.setState({
        popularArrayFiltrado: peliculasFiltradas,
    })
}



render() {
        return (
            <React.Fragment>
                
                <div className="filtrador">
                <FormPop filtradorPop= {(filtro)=> this.filtradorPop(filtro)} />
                </div>
                <div>
                    <h1>All Popular Movies</h1>
                </div>

           
           <section>
               {
                   this.state.popularArrayFiltrado.length===0 ?
                   <div>
                       <img src="/img/GifCargando.gif" alt="gif cargando"/>
                       <p>Cargando</p>
                   </div>
                   :
                    this.state.popularArrayFiltrado.map((unaPelicula , idx) => <CardPopular key={unaPelicula.name + idx} dataPop={unaPelicula}/>) 

               }
           </section>
           <div className="boton">
               <button onClick={()=>this.cargar()}><h2>Cargar Mas</h2></button>
            </div>
           
                
           
           </React.Fragment>
        )
    }

}

export default ViewAllPop
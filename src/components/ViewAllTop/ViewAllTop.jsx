import React, { Component } from "react"
import CardTopRated from '../CardTopRated/CardTopRated'
import FormTop from "../Form/FormTop"
import "./ViewAllTop.css"




let urlTopMovies = "https://api.themoviedb.org/3/movie/top_rated?api_key=5ebefc19996563757d8045ae273d5a4b&language=en-US&page=1";

class ViewAllTop extends Component {

    constructor(props) {
        super(props)
        this.state = {
            topArray: [],
            topArrayFiltrado: [],
            paginaSiguiente: ""
        }
    }

    componentDidMount() {
        //Primer fetch, aca buscamos de populares

        fetch(urlTopMovies)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                topArray: data.results,
                topArrayFiltrado: data.results,
                paginaSiguiente: data.page
                })
            }
        )
            .catch()

    }

cargar(){
    let urlTopCargar = `https://api.themoviedb.org/3/movie/top_rated?api_key=5ebefc19996563757d8045ae273d5a4b&language=en-US&page=${this.state.paginaSiguiente+1}`;

fetch(urlTopCargar)
            .then(res => res.json())
            .then(data => {
                this.setState({
                topArray: this.state.topArray.concat(data.results),
                topArrayFiltrado: this.state.topArray.concat(data.results),
                paginaSiguiente: data.page + 1
                })
            }
        )
            .catch()

}

filtradorTop(filtro){
    let peliculasFiltradas = this.state.topArray.filter(pelicula =>pelicula.title.toLowerCase().includes(filtro.toLowerCase()))
    this.setState({
        topArrayFiltrado: peliculasFiltradas,
    })
}



render() {
        return (
            <React.Fragment>
                <div className="filtrador">
                <FormTop filtradorTop= {(filtro)=> this.filtradorTop(filtro)} />
                </div>
                <div>
                    <h1>All Top Rated Movies</h1>
                </div>

           
           <section>
               {
                   this.state.topArrayFiltrado.length===0 ?
                   <div>
                       <img src="/img/GifCargando.gif" alt="gif cargando"/>
                       <p>Cargando</p>
                   </div>
                   :
                    this.state.topArrayFiltrado.map((unaPelicula , idx) => <CardTopRated key={unaPelicula.name + idx} dataTop={unaPelicula}/>) 

               }
           </section>
           <div className="boton">
               <button onClick={()=>this.cargar()}><h2>Cargar Mas</h2></button>
            </div>
           
           </React.Fragment>
        )
    }

}

export default ViewAllTop
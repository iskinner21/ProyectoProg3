import React, { Component, Link } from "react";
import './buscador.css'

class Buscador extends Component{

    constructor(props){
        super(props)
        this.state ={
            input:''
        }
    }
    // prevenir reload del estado al submitear el formulario
    preventDefault(event){
        event.preventDefault();
        }

    ///guardar datos del input en el estado

    filter(e){
        this.setState({
          input: e.target.value,  
        },()=>this.props.filtrado(this.state.input) & console.log(this.state.input))
    }

    render() {
        return (
            <React.Fragment>
                <div className="form">
                <form onSubmit={(e) => this.preventDefault(e)}>
                    <input  onChange={(e) => this.filter(e)} value={this.state.input} type='text' placeholder='¿Que estas buscando?'/>
                    {
                        this.state.input ?
                            <Link to={`/resultados/${this.state.input}`}>
                                <input type='submit' />
                            </Link>
                            :
                            <input type='submit' />
                    }
                </form>
                </div>
                
            </React.Fragment>
        )

    }

}

export default Buscador
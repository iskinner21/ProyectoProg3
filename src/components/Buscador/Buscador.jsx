import React, { Component, Link } from "react";

class Buscador extends Component{

    constructor(props){
        super(props)
        this.state ={
            input:''
        }
    }
    // prevenir reload del estado al submitear el formulario
    controlarEnvio(event){
        event.preventDefault();
        return true
    }

    ///guardar datos del input en el estado
    filter(filtro) {
        this.setState({
            input: filtro.target.value
        }, () => this.props.filtrado(this.state.input))

        console.log(this.state.input)
    };

    render() {
        return (
            <React.Fragment>
                <form action='' onSubmit={(e) => this.preventDefault(e)}>
                    <input type='text' placeholder='¿Que estas buscando?' onChange={(e) => this.filter(e)} value={this.state.input} />
                    {
                        this.state.input ?
                            <Link to={`/resultados/${this.state.input}`}>
                                <input type='submit' value='submit' />
                            </Link>
                            :
                            <input type='submit' value='submit' />
                    }
                </form>
            </React.Fragment>
        )

    }

}

export default Buscador
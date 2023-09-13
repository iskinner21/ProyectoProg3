import React, { Component } from "react";

class FormPop extends Component{
    constructor(props){
        super(props);
        this.state={
            value:''
        }
    }

    preventDefault(e){
        e.preventDefault();
        
    }

    
    getDataPop(e){
        this.setState({
          value: e.target.value,  
        },()=>this.props.filtradorPop(this.state.value))
    }


    render(){
        return(
            <form onSubmit={(e)=>this.preventDefault(e)}>
                <input onChange={(e)=>this.getDataPop(e)} type='text' placeholder='¿Que estas buscando?' name="usuario" value={this.state.value} />
        
            </form>)


        }
}

export default FormPop;
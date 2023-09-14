import React, { Component } from "react";

class FormTop extends Component{
    constructor(props){
        super(props);
        this.state={
            value:''
        }
    }

    preventDefault(e){
        e.preventDefault();
        
    }

    getDataTop(e){
        this.setState({
          value: e.target.value,  
        },()=>this.props.filtradorTop(this.state.value))
    }


    render(){
        return(
            <form onSubmit={(e)=>this.preventDefault(e)}>
                <input onChange={(e)=>this.getDataTop(e)} type='text' placeholder='¿Que estas buscando?' name="usuario" value={this.state.value} />
            </form>)


        }
}

export default FormTop;
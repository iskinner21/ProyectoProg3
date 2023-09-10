import React, { Component } from "react";

class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            value:''
        }
    }

    preventDefault(e){
        e.preventDefault();
        
    }

    
    getData(e){
        this.setState({
          value: e.target.value,  
        },()=>this.props.filtradorPop(this.state.value))
    }


    render(){
        return(
            <form onSubmit={(e)=>this.preventDefault(e)}>
                <input onChange={(e)=>this.getData(e)} type="text" name="usuario" value={this.state.value} />
        
            </form>)

        }
}

export default Form;
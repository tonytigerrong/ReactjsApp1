import React, { Component } from 'react';

class Wellcome extends Component{
    i:number = 0;
    constructor(){
        super();
        this.state = {message: "Wellcom state1"};
    }
    changeState(){
        this.setState({
            message: "Wellcom State2"+this.i++
        });
    }
    render(){
        return ( <div>
            <h1>Wellcome Tag: {this.props.name}, {this.state.message}</h1>
            <button onClick={()=> this.changeState()}>change state</button>
            </div>);
    }
}

export default Wellcome;
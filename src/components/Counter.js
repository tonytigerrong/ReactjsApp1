import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }
    increment(addition?=10){
        this.setState(
            preState=>({
                count: preState.count + addition
            }),
            ()=>{
                console.log("Call back value", this.state.count);
            }
        );
    }
    decrement(){
        this.setState(
            preState=>({
                count: preState.count - 1
            }),
            ()=>{
                console.log("Call back value", this.state.count);
            }
        );
    }
    render() {
        return (
            <div>
               Counter: {this.state.count}
               <button onClick={()=>this.increment()}>increment</button>
               
               <button onClick={()=>this.decrement()}>decrement</button>
            </div>
        )
    }
}

export default Counter

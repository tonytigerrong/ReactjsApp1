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
    testThis1(){
        console.log(this);
    }
    testThis2(){
        console.log(this);
        this.setState(
            preState=>({
                count: preState.count - 1
            }),
            ()=>{
                console.log("Call back value", this.state.count);
            }
        );
    }
    testThis3 = ()=>{
        this.setState(
            preState => (
                {
                    count: preState.count + 2
                }
            )
        );
    }
    render() {
        return (
            <div>
               Counter: {this.state.count}
               <button onClick={()=>this.increment()}>increment</button>
               {/* arrow function will bind this keyword to function automatically */}
               <button onClick={()=>this.decrement()}>decrement</button>
               <button onClick={this.testThis1}>TestThisKeyword1</button>
               {/* have to use bind(this) to bind this keyword to the event hanlder function */}
               <button onClick={this.testThis2.bind(this)}>TestThisKeyword2</button>
               {/* define the event handler function by arrow function can bind this automatically */}
               <button onClick={this.testThis3}>TestThis3</button>
            </div>
        )
    }
}

export default Counter

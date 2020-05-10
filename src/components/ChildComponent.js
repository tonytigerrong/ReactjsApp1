import React, { Component } from 'react'

export default class ChildComponent extends Component {
   constructor(props){
       super(props);
   }
   
    render() {
        return (
            <div>
                <button onClick={this.props.parentFn}>Child Button invoke parent's function via props.function</button>
                <button onClick={()=>this.props.parentFn('msgFromChild')}>Child Button send message to parent's function via props.function</button>
            </div>
        )
    } 
}

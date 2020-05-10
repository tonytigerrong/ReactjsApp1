import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class ParentComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            parentMsg: "Msg from parent component"
        }
    }
    parentFunction = (msgFromChild?)=>{
        // console.log(name);
        alert(`Hello parentName: "${this.state.parentMsg}"`);
        if( typeof msgFromChild == typeof "abc")
        alert(`Hello childName: "${msgFromChild}"`);
    }
    render() {
        return (
            <div>
                <ChildComponent parentFn={this.parentFunction}/>
            </div>
        )
    }
}

import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'

export default class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "tony",
             i: 0
        }
    }
    componentDidMount(){
        setInterval(()=>{
            let i = this.state.name + String(this.state.i++);
            this.setState({
                name:   i
            })
        },2000);
    }
    render() {
        console.log("Parent Comp ************");
        return (
            <div>Parent Component
                <RegComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class RegComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        console.log("Reg Comp Render");
        return (
            <div>
                Reg coomponent {this.props.name}
            </div>
        )
    }
}

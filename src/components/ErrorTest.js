import React, { Component } from 'react'

export default class ErrorTest extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        if(this.props.heroName === "T"){
            throw new Error("heroName == T");
        }
        return (
            <div>
                {this.props.heroName}
            </div>
        )
    }
}

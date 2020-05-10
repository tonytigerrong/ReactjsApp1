import React, { Component } from 'react'
import './myStyle.css'
export default class StyleSheet extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render(props) {
        let className = this.props.primary ? 'primary':'';
        return (
            <div>
                <h1 className={`${className} font-xl`}>Style sheets</h1>
            </div>
        )
    }
}

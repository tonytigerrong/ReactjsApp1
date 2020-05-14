import React, { Component } from 'react'
import ComponentE from './ComponentE'

class ComponentC extends Component {
    render() {
        return (
            <div>
                C->E->F derived relationship<br/>
                ComponentC: props.name = {this.props.name}
               <ComponentE /> 
            </div>
        )
    }
}
export default ComponentC 
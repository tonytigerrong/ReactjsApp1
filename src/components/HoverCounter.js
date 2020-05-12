import React, { Component } from 'react'
import UpdatedComponent from './withCounter'
class HoverCounter extends Component {
   
    render( ) {
        const { count,name,incrementCount } = this.props ;
        return (
            <div>
                <div onMouseOver={incrementCount}>{name} - Hover {count} this will increment</div>
            </div>
        )
    }
}
export default UpdatedComponent(HoverCounter,5)

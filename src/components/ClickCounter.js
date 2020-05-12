import React, { Component } from 'react'
import UpdatedComponent from './withCounter';
class ClickCounter extends Component {
    
    render( ) {
        const { count,incrementCount,name  } = this.props
        return (
            <div>
                <button onClick={incrementCount}>{name} - click {count} times</button>
            </div>
        )
    }
}
export default UpdatedComponent(ClickCounter,2)

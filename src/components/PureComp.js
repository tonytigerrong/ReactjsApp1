import React, { PureComponent } from 'react'

export default class PureComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        console.log("Pure Comp ************");
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

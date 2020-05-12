import React, { PureComponent } from 'react'

export default class PureComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        console.log("Pure Comp Render");
        console.log("For (pure class component), perform shallow props&state comparision. won't re-render if no change");
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

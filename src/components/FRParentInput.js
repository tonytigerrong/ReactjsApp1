import React, { Component } from 'react'
import FRInput from './FRInput'
export default class FRParentInput extends Component {
    constructor(props) {
        super(props)
        this.frInputRef = React.createRef();
        this.state = {
             
        }
    }
    clickHandler = () => {
        console.log("FRInput",this.frInputRef.current.value);
        this.frInputRef.current.focus()
    }
    render() {
        return (
            <div>
                <FRInput ref={this.frInputRef}/>
                <button onClick={this.clickHandler}>FRInput focus</button>
            </div>
        )
    }
}

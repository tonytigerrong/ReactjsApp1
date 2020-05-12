import React, { Component } from 'react'
import Input from './Input'
export default class FocusInput extends Component {
    constructor(props) {
        super(props)
        this.compopnentRef = React.createRef()
        // this.clickHandler = this.clickHandler.bind(this);
        this.state = {
             
        }
    }
    clickHandler= () => {
        console.log("this.compopnentRef.current",this.compopnentRef.current);
        this.compopnentRef.current.focusInput();
    }
    render() {
        return (
            <div>
                <Input ref={this.compopnentRef}/>
                <button onClick={this.clickHandler}>focus input</button>
            </div>
        )
    }
}

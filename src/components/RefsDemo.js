import React, { Component } from 'react'

export default class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
        this.inputRef2 = null;
        this.setInputRef2 = (element)=>{
            this.inputRef2 = element 
        }
        this.state = {
             
        }
    }
    clickHandler = () =>{
        alert(this.inputRef.current.value);
    }
    componentDidMount(){
        console.log(this.inputRef);
        // this.inputRef.current.focus();
        this.inputRef2.focus();
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} value="inputRef"/>
                <input type="text" ref={this.setInputRef2} value="inputRef2"/>
                <button onClick={this.clickHandler}>show input text</button>
            </div>
        )
    }
}

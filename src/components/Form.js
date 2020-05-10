import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: '',
            comments: '',
            options: ''
        }
    }
    handleUsername = (event) => {
        this.setState(
            {
                username: event.target.value
            }
        );
    }
    handlerComments = (event)=>{
        this.setState(
            {
                comments: event.target.value
            }
        );
    }
    handlerOptions = (event)=>{
        this.setState(
            {
                options: event.target.value
            }
        );
    }
    handlerSubmit = (event)=>{
        let payload = `${this.state.username} - ${this.state.comments} - ${this.state.options}`;
        alert(payload);
       console.log(payload);
       event.preventDefault();
    }
    render() {
        const {username,comments,options} = this.state;
        return (
            <div>
                <form onSubmit={this.handlerSubmit}>
                    <label>UserName:</label>
                    <input type="text" value={username} onChange={this.handleUsername} />
                    <label>Comments</label>
                    <textarea value={comments} onChange={this.handlerComments}>

                    </textarea>
                    <label>Options</label>
                    <select value={options} onChange={this.handlerOptions}>
                        <option value="react">react</option>
                        <option value="angular">angualr</option>
                        <option value="vue">vue</option>
                    </select>
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}

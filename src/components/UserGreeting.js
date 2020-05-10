import React, { Component } from 'react'

export default class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLogin: true
        }
    }
    
    render() {
        // let message;
        return this.state.isLogin ? (<div>Hello Tony</div>) : (<div>Hello Guest</div>);
        // return (
        //     <div>
        //         ${this.message}
        //     </div>
        // )
    }
}

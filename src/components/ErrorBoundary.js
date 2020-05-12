import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError: false
        }
    }
    
    static getDerivedStateFromError(error){
        console.log("error:::::::",error);
        return { hasError: true};
    }
    render() {
     console.log("this.state.hasError******",this.state.hasError);
            if(this.state.hasError){
                return <h1> heroName can not T</h1>
            }
            return this.props.children;
        
    }
}

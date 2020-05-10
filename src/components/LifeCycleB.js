import React, { Component } from 'react'

export default class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        console.log("Life Cycle B constructor");
    }

    static getDerivedStateFromProps(props,state){
        console.log("Life Cycle B getDerivedStateFromProps");
        return null;
    }
    

    render() {
        console.log("Life Cycle B render");
        return (
            <div>
                Life cycle  B
            </div>
        )
    }
    componentDidMount(){
        console.log("Life Cycle B componentDidMount");
    }
}

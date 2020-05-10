import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

export default class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        console.log("Life Cycle A constructor");
    }

    static getDerivedStateFromProps(props,state){
        console.log("Life Cycle A getDerivedStateFromProps");
        return null;
    }
    

    render() {
        console.log("Life Cycle A render");
        return (
            <div>
                <div>Life cycle  A</div>
                <LifeCycleB />
            </div>
        )
    }
    componentDidMount(){
        console.log("Life Cycle A componentDidMount");
    }
}

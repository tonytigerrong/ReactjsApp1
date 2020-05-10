import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

export default class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        console.log("Life Cycle A constructor");
    }
// call every time the component re-render
    static getDerivedStateFromProps(props,state){
        console.log("Life Cycle A getDerivedStateFromProps");
        return null;
    }
    

    render() {
        console.log("Life Cycle A render");
        return (
            <div>
                Life cycle  A
                <LifeCycleB />
            </div>
        )
    }
    componentDidMount(){
        console.log("Life Cycle A componentDidMount");
    }
// every update will be called
    shouldComponentUpdate(){
        console.log("Life Cycle A shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Life Cycle A getSnapshotBeforeUpdate");
        return null;
    }

    componentDidCatch(){
        console.log("Life Cycle A componentDidCatch");
    }
}

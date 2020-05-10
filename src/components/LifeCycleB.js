import React, { Component } from 'react'

export default class LifeCycleB extends Component {
    changeState =()=>{
        this.setState(
            {
                name: "tony"
            }
        );
    }
    constructor(props) {
        super(props)
    
        this.state = {
            name: "tony1"
        }
        console.log("Life Cycle B constructor");
    }
// call every time the component re-render
    static getDerivedStateFromProps(props,state){
        console.log("Life Cycle B getDerivedStateFromProps");
        return null;
    }
    

    render() {
        console.log("Life Cycle B render");
        return (
            <div>
                Life cycle  B
                <button onClick={this.changeState}>changeState</button>
            </div>
        )
    }
    componentDidMount(){
        console.log("Life Cycle B componentDidMount");
    }
// every update will be called
    shouldComponentUpdate(){
        console.log("Life Cycle B shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Life Cycle B getSnapshotBeforeUpdate");
        return null;
    }

    componentDidCatch(error,info){
        console.log("Life Cycle B componentDidCatch");
    }
    getDerivedStateFromError(error){

    }
    componentWillUnmount(){
        return null;
    }
}

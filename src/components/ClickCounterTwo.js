import React, { Component } from 'react'

export default class ClickCounterTwo extends Component {

    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count: 0
    //     }
    // }
    // incrementCount = () =>{
    //     this.setState(prevState => {
    //         return { count: prevState.count + 1}
    //     })
    // }

    render() {
        const { count,incrementCount } = this.props;
        console.log("count",count);
        console.log("incrementCount",incrementCount);
        return (
                // <button>click two count time</button>
                <button onClick={incrementCount}>click two {count} times</button>
            
        )
    }
}

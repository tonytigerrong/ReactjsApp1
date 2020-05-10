import React, { Component } from 'react'

export default class Person extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        console.log(this.props);
        const person = this.props.person;
        const key = this.props.key;
        return (
            <div>
                <h2>{person.id} - I'm {person.name}, I'm {person.age} years old, I work as {person.job}</h2>
                {/* <h2> test</h2> */}

            </div>
        )
    }
}

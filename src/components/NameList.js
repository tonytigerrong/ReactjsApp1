import React, { Component } from 'react'
import Person from './Person';

export default class NameList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        const persons = [
            {
                name: "tony",
                age: 99,
                job: "dev"
            },
            {
                name: "David",
                age: 79,
                job: "tester"
            },
            {
                name: "Phoiple",
                age: 88,
                job: "PO"
            }
    
        ];
        const nameList = persons.map( person => <Person person={person}/>)
        // const nameList = persons.map( person => <Person />)
        return (

            <div>
                {nameList}
            </div>
        )
    }
}

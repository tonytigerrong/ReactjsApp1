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
                id: 1,
                name: "tony",
                age: 99,
                job: "dev"
            },
            {
                id:2,
                name: "David",
                age: 79,
                job: "tester"
            },
            {
                id:3,
                name: "Phoiple",
                age: 88,
                job: "PO"
            }
    
        ];
        const names = ["tony","david","lily","phiples"];
        const nameList = persons.map( 
            (person) =>  
                <Person person={person}/>
              
            );
        const nameL = names.map( (name,index) => <h2 key={index}>{index} - {name}</h2>);
        return (

            <div>
                {nameList}
                {nameL}
            </div>
        )
    }
}

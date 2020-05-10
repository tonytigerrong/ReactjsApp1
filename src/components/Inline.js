import React, { Component } from 'react';
import style from './myStyle.module.css';
export default class Inline extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        const heading = {
            fontSize: '72px',
            color: 'blue'
        };
        return (
            <div>
                <h2 style={heading}>inline styling</h2>
                <h2 className={style.error}>error</h2>
                <h2 className={style.success}>success</h2>
            </div>
        )
    }
}

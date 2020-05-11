import React, { Component } from 'react'
import Table from './Table'

export default class FragmentDemo extends Component {
    render() {
        
        return (
            // <div>
            <React.Fragment>
                <h1>Fragment Demo</h1>
                <p>This describe Fragment Demo component</p>
                <Table />
            </React.Fragment>
            // </div>
        )
    }
}

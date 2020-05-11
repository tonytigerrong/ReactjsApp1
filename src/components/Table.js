import React, { Component } from 'react'
import Column from './Column'

export default class Table extends Component {
    render() {
        return (
            <div>
                <table>
                    <thead>Table Head</thead>
                    <tr>
                        <Column />
                    </tr>
                </table>
            </div>
        )
    }
}

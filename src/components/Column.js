import React, { Component } from 'react'

export default class Column extends Component {
    render() {
        const items = [
            {
                id: 1,
                name: "tony"
            },
            {
                id: 2,
                name: "lily"
            },
            {
                id: 3,
                name: "david"
            }
        ];
        return (
            <React.Fragment>
                {
                    items.map(
                        item => (
                            <React.Fragment>
                                <td>
                                    <h1>{item.name}</h1>
                                </td>
                            </React.Fragment>
                        )
                    )
                }
                
            </React.Fragment>
        )
    }
}

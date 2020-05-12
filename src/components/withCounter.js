import React, { Component } from 'react'

const UpdatedComponent = OriginalComponent => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }
        incrementCount = () => {
            console.log('increment')
            this.setState( preState =>{
                return { count: preState.count + 1}
            })
        }
        render () {
            return <OriginalComponent name='Tony.Tiger.Rong'
                        count={this.state.count}
                        incrementCount={this.incrementCount}
                        />
        }
    }
    return NewComponent
}
export default UpdatedComponent

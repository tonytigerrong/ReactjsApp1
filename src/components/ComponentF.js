import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class ComponentF extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    // userName = props named 'value' of UserProvider component
                    (userName)=>{
                        return <div>In ComponentF: Hello {userName}</div>
                    }
                }
            </UserConsumer>
        )
    }
}
export default ComponentF
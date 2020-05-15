import React, { Component } from 'react'
import axios from 'axios'
export default class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: []
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
             .then(
                 response => {
                    //  console.log("axios response data:",response.data)
                     this.setState({
                         posts: response.data
                     })
                 }
             )
             .catch(error => {
                 console.log(error);
                 this.setState({
                     errorMsg: "No Data"
                 })
             })
    }
    render() {
        const { posts, errorMsg  } = this.state;
        
        return <div> post list 
            {
                posts.length ?
                    posts.filter( post => post.id < 5)
                         .map(post => <li key='{post.userId}'>{post.title}</li>)
                    : null
            }
            {errorMsg ? <div> {errorMsg} </div> : null}
            </div>
    }
}

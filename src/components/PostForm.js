import React, { Component } from 'react'
import axios from 'axios';
export default class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             "userId":"",
             "title":"",
             "body":""
        }
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios({
            method: 'post',
            url: 'https://jsonplaceholder.typicode.com/posts',
            data: {
                "userId":"id1",
                "title":"ti1",
                "body":"bo1"
            }
        }).then(resp => {
            console.log("post result: ",resp.data);
        });
        // axios.post('https://jsonplaceholder.typicode.com/posts')
        //      .then(resp => {
        //          console.log(resp);
        //          const {data, status} = resp;
        //          console.log(<h1>post result: {data.id} - {status}</h1>)
        //      })
        //      .catch( error => {
        //          console.log(error);
        //      })
    }
    render() {
        const { userId, title, body } = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <label for="UserId">UserId:</label>
                    <input type="text"
                           name="userId"
                           value={userId}
                           onChange={this.changeHandler}/>
                    <label for="title">Title:</label>
                    <input type="text"
                           name="title"
                           value={title}
                           onChange={this.changeHandler}/>
                    <label for="body">Body:</label>
                    <input type="text"
                           name="body"
                           value={body}
                           onChange={this.changeHandler}/>
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}

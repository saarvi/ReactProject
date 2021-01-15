import React from 'react';
import ReactDOM from 'react-dom';

class Posts extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            test: 'Test',
            posts: []
        };
    }

    //updateState(someValue) {
    //    this.setState({ test: someValue });
    //}

    //componentDidUpdate() {
    //    document.title = `You clicked ${this.state.value} times`;
    //}

    render() {
        return (
            <p>Post List</p>
        );
    }
}

export default Posts;

import React from 'react';
import Axios from 'axios';
import Header from './Header';
import List from './Post/List';
import Edit from './Post/Edit';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            showModal: false,
        };

        this.getPosts = this.getPosts.bind(this);
        this.addPost = this.addPost.bind(this);
        this.toggleShowModal = this.toggleShowModal.bind(this);
    }

    // Returns all posts.
    getPosts() {
        Axios.get(`/api/post`)
        .then(response => {
            // Sets received data.
            this.setState({posts: response.data});
        })
        .catch(error => {
            console.log(error.response);
        });
    }

    // Adds a new post using an API request.
    addPost(title, content) {
        Axios
        .post(`/api/post`, {
            title: title,
            content: content,
        })
        .then(response => {
            this.getPosts();
        }).catch(error => {
            console.log(error.response);
        });
    }

    // Shows or hides modal window.
    toggleShowModal() {
        this.setState({showModal: !this.state.showModal});
    }

    componentDidMount() {
        this.getPosts();
    }

    render() {
        return (
            <div>
                <Header postButton={true} handleShowModal={this.toggleShowModal} />
                <div className='body'>
                    <section className='section page-headline'>
                        <h1>Discover Blog</h1>
                        <h3>Get the new information you like, share you opinion with others and stay with us.</h3>
                    </section>
                    <section className='section'>
                        <div className='container'>
                            <List posts={this.state.posts} />
                        </div>
                    </section>
                </div>
                <Edit show={this.state.showModal} handleEditPost={this.addPost} handleClose={this.toggleShowModal} />
            </div>
        )
    }
}

export default Home;

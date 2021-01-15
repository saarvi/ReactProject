import React from 'react';
import Axios from 'axios';
import Header from '../Header';
import Image from './Image';
import Edit from './Edit';
import List from '../Comment/List';
import Add from '../Comment/Add';

class Details extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            post: '',
            image: '',
            comments: [],
            showModal: false,
            hideComments: false,
        };

        this.getPost = this.getPost.bind(this);
        this.editPost = this.editPost.bind(this);
        this.removePost = this.removePost.bind(this);
        this.setImage = this.setImage.bind(this);
        this.toggleShowModal = this.toggleShowModal.bind(this);

        this.getComments = this.getComments.bind(this);
        this.addComment = this.addComment.bind(this);
        this.toggleHideComments = this.toggleHideComments.bind(this);
    }

    // Returns post that match the required id.
    getPost() {
        Axios.get(`/api/post/${this.state.id}`)
        .then(response => {
            // Sets received data.
            this.setState({post: response.data});
        })
        .catch(error => {
            console.log(error.response);
        });
    }

    // Puts new post data.
    editPost(title, content) {
        Axios
        .put(`/api/post/${this.state.id}`, {
            title: title,
            content: content,
        })
        .then(response => {
            this.getPost();
        }).catch(error => {
            console.log(error.response);
        });
    }

    // Deletes the post.
    removePost() {
        Axios
        .delete(`/api/post/${this.state.id}`)
        .then(response => {
            // Redirects to home page.
            this.props.history.push('/');
        }).catch(error => {
            console.log(error.response);
        });
    }

    // Sets the promo image.
    setImage(image) {
        if (!this.state.image) {
            this.setState({image: image});
        }
    }

    // Shows or hides modal window.
    toggleShowModal() {
        this.setState({showModal: !this.state.showModal});
    }

    // Returns all comments that match the post id.
    getComments() {
        Axios.get(`/api/comment/${this.state.id}`)
        .then(response => {
            // Sets received data.
            this.setState({comments: response.data});
        })
        .catch(error => {
            console.log(error.response);
        });
    }

    // Adds a comment using an API request.
    addComment(comment) {
        Axios
        .post('/api/comment', {
            post_id: this.state.id,
            comment: comment,
        })
        .then(response => {
            this.getComments();
        }).catch(error => {
            console.log(error.response);
        });
    }

    // Shows or hides comments.
    toggleHideComments() {
        this.setState({hideComments: !this.state.hideComments});
    }

    componentDidMount() {
        this.getPost();
        this.getComments();
    }

    render() {
        return (
            <div className='details'>
                <Header handleShowModal={this.toggleShowModal} />
                <div className='body'>
                    <section className='section page-headline'>
                        <h1>{this.state.post.title}</h1>
                        <h3>{this.state.post.title}</h3>
                    </section>
                    <section className='section'>
                        <div className='container'>
                            <Image image={this.state.image} imagehandleSetImage={this.setImage} />
                            <div className='post-content'>{this.state.post.content}</div>
                            <div className='post-control'>
                                <button className='button bordered' onClick={this.removePost}>Remove Post</button>
                                <button className='button bordered' onClick={this.toggleHideComments}>{this.state.hideComments ? 'Show' : 'Hide'} Comments</button>
                            </div>
                            <div className='post-comments'>
                                <List hide={this.state.hideComments} comments={this.state.comments} />
                                <Add handleAddComment={this.addComment} />
                            </div>
                        </div>
                    </section>
                </div>
                <Edit show={this.state.showModal} post={this.state.post} handleEditPost={this.editPost} handleClose={this.toggleShowModal} />
            </div>
        );
    }
}

export default Details;

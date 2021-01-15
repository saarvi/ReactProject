import React from 'react';
import Axios from 'axios';
import SearchBar from './SearchBar.js';
import Edit from './Post/Edit';

class Header extends React.Component
{
    constructor(props) {
        super(props);

        this.addPost = this.addPost.bind(this);
    }

    // Puts new post data.
    addPost(title, content) {
        Axios
        .post(`/api/post`, {
            title: title,
            content: content,
        })
        .then(response => {
            // Redirects to home page.
            this.props.history.push('/');
        }).catch(error => {
            console.log(error.response);
        });
    }

    render() {
        return (
            <div className='header'>
                <div className='container'>
                    <div className='header-inner'>
                        <a className='header-brand' href='/' />
                        <div className='header-buttons'>
                            <SearchBar />
                            <button className='button' onClick={this.props.handleShowModal}>{this.props.postButton ? 'New' : 'Edit'} Post</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;

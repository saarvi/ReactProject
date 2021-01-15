import React from 'react';
import Axios from 'axios';
import SearchBar from './SearchBar.js';

class Header extends React.Component
{
    constructor(props) {
        super(props);
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

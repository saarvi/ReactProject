import React from 'react';

class SearchBar extends React.Component
{
    render() {
        return (
            <form className='search-bar form-inline'>
                <i className='far fa-search' />
                <input className='form-input' type='text' placeholder='Search' />
            </form>
        );
    }
}

export default SearchBar

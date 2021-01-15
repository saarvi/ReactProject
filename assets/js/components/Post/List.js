import React from 'react';
import Item from './Item';

class List extends React.Component
{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='post-list'>
                {this.props.posts.map(post => {
                    return <Item key={post.id} post={post} />
                })}
            </div>
        );
    }
}

export default List;

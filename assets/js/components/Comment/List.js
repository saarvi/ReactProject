import React from 'react';
import Item from './Item';

class List extends React.Component
{
    constructor(props) {
        super(props);
    }

    render() {
        // Returns null if comments are hidden.
        if (this.props.hide) {
           return null;
        }

        return (
            <div className='comment-list'>
                {this.props.comments.map(comment => {
                    return <Item key={comment.id} comment={comment.comment} />
                })}
            </div>
        );
    }
}

export default List;

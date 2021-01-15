import React from 'react';

class Item extends React.Component
{
    render() {
        return (
            <div className='comment-item'>
                <div className='comment-item-avatar'>A</div>
                <div className='comment-item-content'>
                    <div className='comment-item-person'>Anonymous</div>
                    <div className='comment-item-message'>{this.props.comment}</div>
                </div>
            </div>
        );
    }
}

export default Item;

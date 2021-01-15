import React from 'react';
import Image from './Image';

class Item extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {image: '',};

        this.setImage = this.setImage.bind(this);
    }

    // Sets the promo image.
    setImage(image) {
        if (!this.state.image) {
            this.setState({image: image});
        }
    }

    render() {
        return (
            <div className='post-item'>
                <a className='post-inner' href={`/post/${this.props.post.id}`}>
                    <Image image={this.state.image} imagehandleSetImage={this.setImage} />
                    <h2 className='post-title'>{this.props.post.title}</h2>
                    <div className='post-content'>{this.props.post.content}</div>
                </a>
            </div>
        );
    }
}

export default Item;

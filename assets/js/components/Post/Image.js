import React from 'react';

// List of available images in /public/images
const images = [
    'pexels-iván-rivero-1633970.jpg',
    'pexels-scott-webb-532571.jpg',
    'pexels-medhat-ayad-383568.jpg',
    'pexels-shonejai-1227497.jpg',
    'pexels-w-w-889839.jpg',
];

class Image extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {index: ''}
    }

    componentDidMount() {
        if (!this.props.image) {
            // Gets random index from array
            const index = Math.floor(Math.random() * images.length);

            this.setState({index: index});

            this.props.imagehandleSetImage(images[index]);
        }
    }

    render() {
        const style = {backgroundImage: `url(/images/${images[this.state.index]})`}

        return (
            <div className='post-image' style={style}></div>
        );
    }
}

export default Image;

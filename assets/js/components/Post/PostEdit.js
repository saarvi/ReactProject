import React, { Component } from 'react';
import axios from 'axios';

class PostEdit extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            title: '',
            content: '',
        }

        this.ref = React.createRef();
        this.titleChange = this.titleChange.bind(this);
        this.contentChange = this.contentChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    titleChange(e) {
        this.setState({ title: e.target.value });
    }

    contentChange(e) {
        this.setState({ content: e.target.value });
    }

    submitForm(e) {
        e.preventDefault();

        axios
        .post('/api/post', {
            title: this.state.title,
            content: this.state.content,
        })
        .then(response => {
            this.props.handleClose();

            //console.log(response); // Uncomment to show api response.
        })
        .catch(error => {
            console.log(error.response);
        });
    }


    //componentDidMount() {
        //const element = this.myRef.current

        //if (this.props.show && !this.state.isLoaded) {
        //    this.setState({ isLoaded: true })
        //}

        //this.state.isLoaded = true;
    //}

    componentDidUpdate() {
        const element = this.ref.current;

        if (element && !this.state.isLoaded) {
            element.classList.add('visible');

            this.setState({ isLoaded: true });
        }
        else if (!element && this.state.isLoaded) {
            this.setState({ isLoaded: false });
        }

    }

    render() {
        if (!this.props.show) {
           return null;
        }

        return (
            <div id='postEdit' className='modal' ref={this.ref}>
                <form className='modal-inner' onSubmit={this.submitForm}>
                    <div className='modal-head'>
                        <input className='form-input' type='text' placeholder='Name your post' autoComplete='off' required onChange={this.titleChange} />
                        <a className='modal-close' onClick={this.props.handleClose}>
                            <i className='fal fa-times'></i>
                        </a>
                    </div>
                    <div className='modal-content'>
                        <textarea className='form-textarea' type='textarea' placeholder='Write a great post' rows={5} cols={5} required onChange={this.contentChange} />
                    </div>
                    <div className='modal-control'>
                        <div className='modal-control-extra'>
                            <i className='fal fa-paperclip'></i>
                            <i className='fal fa-smile'></i>
                            <i className='fal fa-ellipsis-h'></i>
                        </div>
                        <button className='button' type='submit' title='Post'>Post</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default PostEdit;

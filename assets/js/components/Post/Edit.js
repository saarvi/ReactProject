import React from 'react';

class Edit extends React.Component
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

    // Sets any Title changes.
    titleChange(event) {
        this.setState({title: event.target.value});
    }

    // Sets any Content changes.
    contentChange(event) {
        this.setState({content: event.target.value});
    }

    // Form submit event.
    submitForm(event) {
        event.preventDefault();

        // Closes the modal window.
        this.props.handleClose();
        // Sends a new data for an update request.
        this.props.handleEditPost(this.state.title, this.state.content);
    }

    componentDidUpdate() {
        const element = this.ref.current;

        // Sets existing data if modal is visible.
        if (element && !this.state.isLoaded) {
            if (this.props.post) {
                this.setState({
                    title: this.props.post.title,
                    content: this.props.post.content,
                });
            }

            this.setState({isLoaded: true});
        }
        else if (!element && this.state.isLoaded) {
            this.setState({isLoaded: false});
        }
    }

    render() {
        // Returns null if modal is hidden.
        if (!this.props.show) {
           return null;
        }

        return (
            <div className='modal visible' ref={this.ref}>
                <form className='modal-inner' onSubmit={this.submitForm}>
                    <div className='modal-head'>
                        <input className='form-input' type='text' value={this.state.title} placeholder='Name your post' autoComplete='off' onChange={this.titleChange} required />
                        <a className='modal-close' onClick={this.props.handleClose}>
                            <i className='fal fa-times'></i>
                        </a>
                    </div>
                    <div className='modal-content'>
                        <textarea className='form-textarea' type='textarea' value={this.state.content} placeholder='Write a great post' rows={15} onChange={this.contentChange} required />
                    </div>
                    <div className='modal-control'>
                        <div className='modal-control-extra'>
                            <i className='fal fa-paperclip' />
                            <i className='fal fa-smile' />
                            <i className='fal fa-ellipsis-h' />
                        </div>
                        <button className='button primary' type='submit'>Post</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Edit;

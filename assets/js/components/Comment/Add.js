import React from 'react';

class Add extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {message: ''}

        this.messageChange = this.messageChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    // Sets any input changes.
    messageChange(event) {
        this.setState({message: event.target.value});
    }

    // Form submit event.
    formSubmit(event) {
        event.preventDefault();
        // Resets the form input.
        event.target.reset();

        // Sends a message for adding request.
        this.props.handleAddComment(this.state.message);
    }

    render() {
        return (
            <form onSubmit={this.formSubmit}>
                <div className='form-inline'>
                    <input className='form-input' type='text' placeholder='Write a comment' autoComplete='off' onChange={this.messageChange} required />
                    <button className='button primary' type='submit'>Share Comment</button>
                </div>
            </form>
        );
    }
}

export default Add;

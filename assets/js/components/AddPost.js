import React from 'react';

class AddPost extends React.Component
{
    constructor(props) {
  super(props);
  this.handleTitleChange = this.handleTitleChange.bind(this);
  this.handleSubjecChange = this.handleSubjectChange.bind(this);
  this.state = {
    title:'',
    subject:''
  };
}

    handleTitleChange(e){
    this.setState({title:e.target.value})
}
handleSubjectChange(e){
    this.setState({body:e.target.value})
}

    render() {
        return (
            <form role="form">
                <input type="text" onChange={this.handleTitleChange} className="form-control" id="title" name="title" placeholder="Title" required />
                <textarea className="form-control" onChange={this.handleSubjectChange} type="textarea" id="subject" placeholder="Subject" maxlength="140" rows="7"></textarea>
                <button type="button" id="submit" name="submit" className="btn btn-primary pull-right">Add Post</button>
            </form>
        );
    }
}

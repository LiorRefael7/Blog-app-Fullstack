import React from 'react';

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleTextChange(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newPost = {
      title: this.state.title,
      text: this.state.text,
      date: new Date().toLocaleString(),
    };
    this.props.addPost(newPost);
    this.setState({ title: '', text: '' });
  }

  render() {
    return (
      <div className="newpost">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
          </div>
          <div>
            <label htmlFor="text">Text:</label>
            <textarea
              id="text"
              value={this.state.text}
              onChange={this.handleTextChange}
              style={{width:'100%',height:'200px',resize:'vertical'}}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default NewPost;

import React from 'react';
import axios from 'axios';
class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleTextChange(event) {
    this.setState({ text: event.target.value });
  }

  addPost = (e) => {
    const url = "http://127.0.0.1:5000/newpost"
    const data = {
      title: this.state.title,
      text: this.state.text
    }
    axios.post(url, data)
    .then((res) => {
      this.setState({
        data: [],
        resp: "Success, great new city added!"
      });
    })
      .catch((err) => {
        this.setState({
          data: null,
          resp: "Error: something went wrong, try another city."
        });
      });
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
          <button onClick={this.addPost}>Add Post</button>
        </form>
      </div>
    );
  }
}

export default NewPost;

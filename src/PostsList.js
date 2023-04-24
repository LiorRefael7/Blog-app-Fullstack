import React from 'react';
import Post from './Post';

class PostsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          title: "Post Title 1",
          text: "Post text goes here",
          date: "Published on April 1, 2023"
        },
        {
          title: "Post Title 2",
          text: "Post text goes here",
          date: "Published on March 30, 2023"
        },
        {
          title: "Post Title 3",
          text: "Post text goes here",
          date: "Published on March 27, 2023"
        }
      ],
      showForm: false
    };
    this.handleNewPost = this.handleNewPost.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleCancel() {
    this.setState({ showForm: false });
  }

  handleNewPost() {
    this.setState({ showForm: true });
  }

  render() {
    return (
      <div className="posts">
        {this.state.showForm ? (
          <div>
            <input type="text" placeholder="Title" />
            <textarea placeholder="Text" />
            <button onClick={this.handleCancel}>Cancel</button>
            <button>Save</button>
          </div>
        ) : (
          <div>
            <button onClick={this.handleNewPost}>New Post</button>
          </div>
        )}
        {this.state.posts.map((post, index) => (
          <Post key={index} title={post.title} text={post.text} date={post.date} />
        ))}
      </div>
    );
  }
}

export default PostsList;
import React from "react";

class Post extends React.Component {
    render() {
      return (
        <div className="post">
          <h2>{this.props.title}</h2>
          <p>{this.props.text}</p>
          <p className="post-date">{this.props.date}</p>
        </div>
      );
    }
  }
  
export default Post;
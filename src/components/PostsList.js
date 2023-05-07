import React from "react";
import Post from "./Post";

class PostsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: "1",
          title: "Post Title 1",
          text: "Post text goes here",
          date: "Published on April 1, 2023",
        },
        {
          id: "2",
          title: "Post Title 2",
          text: "Post text goes here",
          date: "Published on March 30, 2023",
        },
        {
          id: "3",
          title: "Post Title 3",
          text: "Post text goes here",
          date: "Published on March 27, 2023",
        },
      ],
    };
  }

  render() {
    return (
      <div className="posts">
        {this.state.posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            text={post.text}
            date={post.date}
            id={[post.id]}
          />
        ))}
      </div>
    );
  }
}

export default PostsList;

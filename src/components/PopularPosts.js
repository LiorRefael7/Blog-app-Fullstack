import React from "react";

class PopularPosts extends React.Component {
    render() {
      return (
        <div id="popular-post">
          <h1>Popular Post</h1>
          <p>{this.props.popularText}</p>
          <ul>
            <li>
              <a href="#">Blog Post #4</a>
            </li>
            <li>
              <a href="#">Blog Post #5</a>
            </li>
            <li>
              <a href="#">Blog Post #6</a>
            </li>
          </ul>
        </div>
      );
    }
  }
  
export default PopularPosts;
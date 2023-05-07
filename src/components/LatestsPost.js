import React from "react";

class LatestsPosts extends React.Component {
    render() {
      return (
        <div id="latest-post">
          <h1>Latest Post</h1>
          <p>{this.props.latestText}</p>
          <ul>
            <li>
              <a href="#">Blog Post #1</a>
            </li>
            <li>
              <a href="#">Blog Post #2</a>
            </li>
            <li>
              <a href="#">Blog Post #3</a>
            </li>
          </ul>
        </div>
      );
    }
  }

    export default LatestsPosts
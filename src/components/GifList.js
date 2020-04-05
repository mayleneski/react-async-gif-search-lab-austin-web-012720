import React, { Component } from "react";

class GifList extends Component {
  displayDiv = (gif) => {
      const imgURL = gif.images.original.url
      const title = gif.title
    return (
      <li>
        <img src={imgURL} alt={title} />
      </li>
    );
  };

  render() {
    return <ul>{this.props.gifs.map((gif) => this.displayDiv({...gif}))}</ul>;
  }
}

export default GifList;

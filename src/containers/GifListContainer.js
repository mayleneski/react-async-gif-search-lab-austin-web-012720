import React, { Component } from "react";
import GifSearch from "../components/GifSearch";
import GifList from "../components/GifList";

class GifListContainer extends Component {
  state = {
      data: []
  } 

  fetchGifs= searchTerm => {
      fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => response.json())
      //.then(results => console.log(results.data.slice(0, 3)))
      .then(results => this.setState({ data: results.data.slice(0, 3) })  )
  }

    render() {
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs}/>
        <GifList gifs={this.state.data}/>
      </div>
    );
  }
}

export default GifListContainer;

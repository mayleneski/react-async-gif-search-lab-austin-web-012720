import React, { Component } from "react";

class GifSearch extends Component {
  state = {
    value: "",
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleClick = event => {
    event.preventDefault();
    this.props.fetchGifs(this.state.value);
  };

  render() {
    return (
      <div>
        <form>
          <div>
            <label>Enter a Search term: </label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input type="submit" onClick={this.handleClick} />
          </div>
        </form>
      </div>
    );
  }
}

export default GifSearch;

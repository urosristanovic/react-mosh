import React, { Component } from 'react';
import withTooltip from './withTooltip';

class Movie extends Component {
  render() {
    return (
      <div>
        <h1>
          Movie
          {this.props.showTooltip && <div>Some tooltip</div>}
        </h1>
      </div>
    );
  }
}

export default withTooltip(Movie);

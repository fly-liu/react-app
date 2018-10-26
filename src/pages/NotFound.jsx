import React, { Component } from 'react';

class NotFound extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    let pageContainer = {
        fontSize: '25px',
        textAlign: 'center',
        color: 'rgb(192, 204, 218)',
        lineHeight: 2,
    }

    return (
      <p style={pageContainer}>{'404 page not found'}</p>
    )
  }
}

export default NotFound;
import React, {Component} from 'react';

class Film extends Component {
  render(){
    return (
      <div className="film">
      <h4><a href = {this.props.url}>{this.props.children}</a></h4>
      </div>
    )
  }
}

export default Film;

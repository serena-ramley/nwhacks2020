import React, {Component} from 'react';
import './App.css';


class Issue extends Component {
  constructor(props) {
    super(props) 
    this.state = { 
       issue: props.issue
    }
  }

  render() {
    var colors = ['#E17979', '#338C98', '#D8AB38', '#6DAD5C', '#E28F2D'];
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    var style = {
      'position': 'relative',
      'list-style': 'none',
      'display': 'inline-block',
      'padding': '.25rem .75rem',
      'margin': '2px',
      'border-radius': '3px',
      'background-color': random_color,
      'color': 'white'
    };

    var p_style = {
      'font-size': '10px'
    }
    return (
      <div style={style}>
          <p style={p_style}>{this.state.issue}</p>
      </div>
  )
  }
}

export default Issue;
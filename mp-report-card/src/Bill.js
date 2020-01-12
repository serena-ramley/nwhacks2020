import React, {Component} from 'react';
import './App.css';
import Issue from './Issue.js'


class Bill extends Component {
  constructor(props) {
    super(props) 
    this.state = { 
      name: props.name,
      summary: props.summary,
      issues: props.issues
    }
  }

  render() {
    var p_style = {
      color: 'black',
      fontSize: 20,
      'text-align': 'left'
    }
    return (
      <div>
          <p style={p_style}><b>{this.props.name}</b></p>
          <p style={p_style}>{this.props.summary}</p>
          <div>
            {this.state.issues.map(issue => (
              < Issue issue={issue} />
            ))}
          </div>
      </div>
  )
  }
  }

export default Bill;

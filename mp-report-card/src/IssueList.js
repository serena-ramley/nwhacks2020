import React, {Component} from 'react';
import './App.css';
import Issue from './Issue.js'


class ReportCard extends Component {

    render() {
      var colors = ['#ff0000', '#00ff00', '#0000ff'];
      var random_color = colors[Math.floor(Math.random() * colors.length)];
      var style = {
        'position': 'relative',
        'list-style': 'none',
        'display': 'inline-block',
        'padding': '.25rem .75rem',
        'margin': '2px',
        'border-radius': '3px',
        'background-color': 'grey',
        'color': 'white',
        'height': '20px'
      };
      return (
        <div>
            {issues.map(issue => (
              < Issue issue={issue} />
            ))}
        </div>
    )
    }
  }

export default ReportCard;


const issues = ["Education", "Employment", "Transportation", "Energy", "Environment", "Health Care"];

import React, {Component} from 'react';
import './App.css';


class Bill extends Component {

    render() {
      var style = {
        color: 'white',
        fontSize: 200
      };
      return (
        <div style={style}>
            <h>Bill Name</h>
            <p>Summary of bill...</p>
            <p>Vote info</p>
        </div>
    )
    }
  }

export default Bill;

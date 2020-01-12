import React, {Component} from 'react';
import './App.css';
import ReportCard from './ReportCard';
import IssueList from './IssueList';

class App extends Component {
  constructor() {
    super()
    this.state = {
        data: [],
        searchField: '',
    }
  }

  onSearchChange = (event) => {
    this.setState( {searchField: event.target.value})
  }

  render () {
      return (
      <div className="App">
        <header className="App-header">
          <h3> Choose the issues that matter most to you!</h3>
          <IssueList />
          <button>Continue</button>
        </header>
      </div>
      )
  }
}

export default App;

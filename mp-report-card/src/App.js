import React, {Component} from 'react';
import ReportCard from './ReportCard';
import MP from './getMP';
import IssueList from './IssueList';
import './App.css';
//require('es6-promise').polyfill();

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
          <ReportCard />
          <MP/>
        </header>
      </div>
      )
  }
}

export default App;

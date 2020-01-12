import React, {Component} from 'react';
import './App.css';
import ReportCard from './ReportCard';

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
          <h1> Website Title</h1>
          <ReportCard />
        </header>
      </div>
      )
  }
}

export default App;

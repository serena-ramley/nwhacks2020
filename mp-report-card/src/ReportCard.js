import React, { Component } from 'react'
import './ReportCard.css';

class ReportCard extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         votes: [
            { id: 1, bill: 'Should plastic straws be banned?', voted: 'YES'},
            { id: 2, bill: 'Should we increase expenditure on de-icing roads', voted: 'NO'},
            { id: 3, bill: 'Should residents be allowed to build & rent secondary homes on their property?', voted: "DIDN'T VOTE"},
         ]
      }
   }

    renderTableData() {
        return this.state.votes.map((vote, index) => {
        const { id, bill, voted } = vote //destructuring
        return (
            <tr key={id}>
                <td>{id}</td>
                <td>{bill}</td>
                <td>{voted}</td>
            </tr>
        )
        })
    }

    renderTableHeader() {
        let header = Object.keys(this.state.votes[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }
  
     render() {
        return (
           <div>
              <h1 id='title'>React Dynamic Table</h1>
              <table id='votes'>
                 <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                 </tbody>
              </table>
           </div>
        )
     }
}

export default ReportCard
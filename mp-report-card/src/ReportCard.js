import React, { Component } from 'react'
import './ReportCard.css';
import {Rectangle} from 'react-shapes';

class ReportCard extends Component {
   constructor(props) {
      super(props) 
      this.state = { 
         votes: [
            { id: 1, bill: 'Should plastic straws be banned?', voted: 'VOTED YES'},
            { id: 2, bill: 'Should we increase expenditure on de-icing roads', voted: 'VOTED NO'},
            { id: 3, bill: 'Should residents be allowed to build & rent secondary homes on their property?', voted: "DIDN'T VOTE"},
         ],
         representative: "Justin Trudeau",
         attendance: 0.5
      }
   }

    renderTableData() {
        return this.state.votes.map((vote, index) => {
        const { id, bill, voted } = vote
        return (
            <tr key={id}>
                <td>{bill}</td>
                <td>{voted}</td>
            </tr>
        )
        })
    }

    /*
    renderTableHeader() {
        let header = Object.keys(this.state.votes[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }
     */
  
     render() {
        return (
          <div>
          <h1 id='title'>{this.state.representative}</h1>
           <div id="report">
              <h3 id='subtitle'>Attendance</h3>
              <hr />
              <progress id="file" max="100" value={`${this.state.attendance*100}`}> {this.state.attendance} </progress>
               <p>{Math.floor(this.state.attendance * 100)} %</p>
               <h3 id='subtitle'>Votes</h3>
               <hr />
               <div id="scrollable">
              <table id='votes'>
                 <tbody>
                    <tr></tr>
                    {this.renderTableData()}
                 </tbody>
              </table>
              </div>
           </div>
           </div>
        )
     }
}

export default ReportCard
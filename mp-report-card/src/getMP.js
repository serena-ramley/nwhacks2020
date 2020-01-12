import React, {Component} from 'react';
import fetchJsonp from 'fetch-jsonp';

class MP extends Component {

    constructor(props){
        super(props);

        this.state = {
            data: '',
            mp_name: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({data: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        alert('Postal code submitted: ' + this.state.data);
        fetchJsonp(`https://represent.opennorth.ca/postcodes/${this.state.data}`)
        .then(results => {return results.json()})
        .then(json => {return json.representatives_centroid.filter(info => {return info.elected_office === "MP"})})
        .then(result => {
            this.setState({mp_name: result[0].name})
            console.log(this.state.mp_name)
        })
        .catch(error => console.log(error))
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <label>
                Postal Code: 
                <input type="text" onChange={this.handleChange}/>
            </label>
            <input type="submit" value="Submit!"/>
        </form>   
    );
    }
  }

export default MP;
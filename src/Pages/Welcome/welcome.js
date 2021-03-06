import React from 'react';
import MyNavbar from '../../Components/Navbar/navbar.js';
import Paper from '@material-ui/core/Paper';
import Button from 'react-bootstrap/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import logo from '../../covidex-logo.png';
import { Link } from 'react-router-dom'

const Welcome = () => {
    return(
        <div>
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                {/* <Form className="App-form">
                    <Form.Control className="text-center" size="lg" type="text" placeholder="Type your location here" />
                </Form> */}
                
                <FreeSolo />
                
                <Link to="/risk-report" style={{ color: '#000' }}>
                <Button className="Submit-button" variant="dark" size="lg">
                  
                    See my risk
                  
                </Button>
                </Link>
            </div>
        </div>)
}

function FreeSolo() {
    return (
      <div className="App-form">
        <Autocomplete 
          className="text-center"
          id="city-search"
          options={locations.map((option) => option.name)}
          renderInput={(params) => (
            <TextField {...params} label="Search for your city" margin="normal" variant="filled" />
          )}
        />
      </div>
    )
  }

  const locations = [
    {
      "name" : "New York, New York",
      "latitude": 40.7,
      "longitude" : -73.9
    },
    {
      "name": "Los Angeles, California",
      "latitude": 34.1,
      "longitude" : -118.2
    },
    {
      "name" : "Boston, Massachusetts",
      "latitude": 42.3,
      "longitude" : -71.1
    },
    {
      "name" : "Chicago, Illinois",
      "latitude": 41.9,
      "longitude" : -87.6
    },
    {
      "name" : "Houston, Texas",
      "latitude": 29.7,
      "longitude" : -95.4
    },
    {
      "name" : "Phoenix, Arizona",
      "latitude": 33.6,
      "longitude" : -112.1
    },
    {
      "name" : "Philadelphia, Pennsylvania",
      "latitude": 40,
      "longitude" : -75.1
    },
    {
      "name" : "San Antonio, Texas",
      "latitude": 29.5,
      "longitude" : -98.5
    },
    {
      "name" : "San Diego, California",
      "latitude": 32.9,
      "longitude" : -117.1
    },
    {
      "name" : "Columbus, Ohio",
      "latitude": 40,
      "longitude" : -83
    },
    {
      "name" : "Seattle, Washington",
      "latitude": 47.6,
      "longitude" : -112.4
    },
  ];

export default Welcome;
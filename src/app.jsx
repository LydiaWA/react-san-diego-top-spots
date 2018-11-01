import React, { Component } from 'react';
import axios from 'axios';
import TopSpot from './topspot';

class App extends Component {
  constructor (props){
    super(props);

    this.state = {
      topspots: []
    };
  }
  componentWillMount() {
    axios
    .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
    .then(response => response.data)
    .then(topspots => this.setState({ topspots }));
  }

  
  render() {
    return (
      <div className='App'>
        <div className = "jumbotron"> 
          <div className = "container text-center">
           <h1>San Diego Top Spots</h1>
            <p>A list of the top 30 places to see in San Diego, California</p>
            <hr className = "my-4"></hr>
            </div>
        </div>
      
            
      {this.state.topspots.map(topspot => (
        <TopSpot
            key = {topspot.id}
            name = {topspot.name}
            description = {topspot.description}
            location = {topspot.location} />
        ))
        
      }
      </div>
    );
  }
}

export default App;

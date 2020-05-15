import React, { Component } from 'react';
import './App.css';
import PieChart from './Components/PieChart'

class App extends Component {
   render () {
     return (
       <div>
         <h1>Virus Tracker</h1>
         <PieChart />

       </div>
     )
   }
}

export default App;

import React, { Component } from 'react';
import ChartData from './ChartData';
import axios from 'axios';
// import { Pie } from 'react-chartjs-2';  

class PieChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countries: []
        }
    }

    componentDidMount () {
        axios.get('https://coronavirus-19-api.herokuapp.com/countries')
        .then( res => {
            const info = res.data
            this.setState({ countries: info})
            console.log(info);
        })
        .catch(error => console.log(error) );
    }

    render () {
        return (
            <div>
               
                <ChartData countries={this.state.countries} />

            </div>
        )
    }
}

export default PieChart;
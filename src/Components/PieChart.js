import React, { Component } from 'react';
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
            const data = res.data
            this.setState({ countries: data})
            console.log(data);
        })
        .catch(error => console.log(error) );
    }

    render () {
        return (
            <div>

            </div>
        )
    }
}

export default PieChart;
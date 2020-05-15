import React from 'react';
import Data from './Data';

const ChartData = ({ countries }) => {
  console.log('countries in API', countries)

    return (
      
      <div>
        {
          countries.map((info, i) => 
              <Data 
                key={i}
                country={info.country}
                cases={info.cases}
                recovered={info.recovered}
                deaths={info.deaths}
                />
            
          )
        }
      </div>
    );
  }
export default ChartData;
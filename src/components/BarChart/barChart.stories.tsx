import React from 'react'
import BarChanrt from "./barChart";


export default {
    title: "hotelierpro/reports/Occupancy Ratio"
}

export const OccupancyRatioExample = () => {


const data = [{
    name: 'Page A',   
    amt: 23400,
  },
  {
    name: 'Page B',
    percentage: 3000,
  
    amt: 2210,
  },
  {
    name: 'Page C',
    percentage: 2000,
 
    amt: 2290,
  },
  {
    name: 'Page D',
    percentage: 2780,
   
    amt: 2000,
  },
  {
    name: 'Page E',
    percentage: 1890,
   
    amt: 2181,
  },
  {
    name: 'Page F',
    percentage: 2390,

    amt: 2500,
  },
  {
    name: 'Page G',
    percentage: 3490,
   
    
  },
  {
      name: 'Page G',
      percentage: 3490,
     
      
  },
  {
      name: 'Page G',
      percentage: 6000,
     
      
  },
  {
      name: 'Page G',
      percentage: 3490,
     
      
  },
  {
      name: 'Page G',
      percentage: 3490,
     
      
  },
  {
      name: 'Page G',
      percentage: 3490,
     
      
  },
  {
      name: 'Page G',
      percentage: 3490,
     
      
    },
];

    return <BarChanrt data={data} />
}
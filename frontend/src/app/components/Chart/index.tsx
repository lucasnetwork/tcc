"use client"

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { useMemo } from 'react';
  import { Bar } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];
  

  const options = {   
    maintainAspectRatio: false,
   plugins: {
     legend: {
      display: false,
    },
     title: {
       display: false,
       text: 'Chart.js Bar Chart',
     },
   }}
const Chart = ({logs}:{
  logs:{
    isodate:Date
  }[]
}) =>{

   const data = useMemo(()=>{
    const logsArrayBydate = [0,0,0,0,0,0,0,0,0,0,0,0]
   logs.forEach((log)=>{

      const date = new Date(log.isodate)
      const month = date.getMonth()
      logsArrayBydate[month] = logsArrayBydate[month] + 1
    },{})
    return{
      labels,
      datasets:[{
        data:logsArrayBydate,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }]
    }
   },[logs])
  console.log(data)
   return  <Bar style={{height:"300px"}} options={options}  data={data} />
};
export default Chart

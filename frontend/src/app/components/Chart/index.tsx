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
  import { Bar } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [1,2],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
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
const Chart = () => <Bar style={{height:"300px"}} options={options}  data={data} />;
export default Chart

// "use client"


// import { Pie } from 'react-chartjs-2'
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// ChartJS.register(ArcElement, Tooltip, Legend);



// const PieChart1 = () => {
//   const data = {
//     labels: ["orange", "mango", "banana", "grape"],
//     datasets: [
//       {
//         data: [12, 29, 32, 40],
//         backgroundColor: [
//           'rgba(156, 107, 16, 0.9)',
//           'rgba(231, 12, 23, 0.945)',
//           'rgb(189, 192, 16, 0.9)',
//           'rgba(0, 128, 0, 0.961)',
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <Pie data={data} />
//   )
// }

// export default PieChart1


"use client"

import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart1 = () => {
  const data = {
    labels: ["orange", "mango", "banana", "grape"],
    datasets: [
      {
        data: [12, 29, 32, 40],
        backgroundColor: [
          'rgba(156, 107, 16, 0.9)',
          'rgba(231, 12, 23, 0.945)',
          'rgb(189, 192, 16, 0.9)',
          'rgba(0, 128, 0, 0.961)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: 'rgba(9, 106, 233, 0.9)', // Set the color of the legend labels
        },
      },
    },
  };

  return (
    <Pie data={data} options={options} />
  )
}

export default PieChart1;

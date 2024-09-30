


import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Legend);

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const dataPoints = [65, 59, 80, 81, 50,  20, 54]; // Example data

const borderColors = "blue"

const data = {
  labels: months,
  
  datasets: [
    {
      label: 'Monthly Data',
      data: dataPoints,
      borderColor: borderColors,
      borderWidth: 2,
      pointRadius: 3, // Size of the point
      
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: {
      left: 20,   // Increase or decrease as needed
      right: 20,  // Increase or decrease as needed
      top: 20,    // Increase or decrease as needed
      bottom: 20  // Increase or decrease as needed
    }
  },

  scales: {
    x: {
      beginAtZero: true,
      ticks: {
        color: 'rgba(9, 106, 233, 0.9)', // Change the text color of the x-axis labels
        font: {
          size: 12, // Reduce the font size of the x-axis labels
          // lineHeight: 4
                  },
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        color: 'rgba(9, 106, 233, 0.9)', // Change the text color of the y-axis labels
        font: {
          size: 12, // Reduce the font size of the y-axis labels
          // lineHeight:2
        },
      },
    },
  },
};

const MyLineChart = () => {
  return (
    <div className=' chart-container p-4 '>
      
      <Line data={data} options={options} />
    </div>
  );
};

export default MyLineChart;






// components/LineChart.js
// import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// // Register necessary components for Chart.js
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);



// type dt = {
//   labels: string[];
//   datasets: {
//       label: string;
//       data: number[];
//       fill: boolean;
//       borderColor: string;
//       tension: number;
//   }[]; 
// }




// const SalesLineChart = () => {

//     const data = {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [
//           {
//             label: 'Monthly Sales',
//             data: [65, 59, 80, 81, 50,  20],
//             fill: false,
//             borderColor: 'rgba(75,192,192,1)',
//             tension: 0.1,
           
             
//           }
//         ]
//       };
      
//       const options = {
//         responsive: true,
//         plugins: {
//           legend: {
//             position: 'top',
//           },
//           tooltip: {
//             callbacks: {
//               label: (tooltipItem:dt) => `Sales: ${tooltipItem.datasets}`,
//             },
//           },
//         },
//         scales: {
//           x: {
//             title: {
//               display: true,
//               text: 'Months',
//             },
            
//           },
          

//           y: {
//             title: {
//               display: true,
//               text: 'Sales'
             
//             }
//           }
//         }
//       };
      
      
    
//   return (
//     <div>
//       <Line data={data}
//       //  options={options}
//        />
//     </div>
//   );
// };

// export default SalesLineChart

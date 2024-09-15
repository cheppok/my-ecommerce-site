


import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { TooltipItem } from 'chart.js';

// Register necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const OrderLineChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Monthly Order',
        data: [65, 59, 80, 81, 56, 45, 78],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      }
    ]
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
        color: 'white', // Change the text color of the x-axis labels
        font: {
          size: 12, // Reduce the font size of the x-axis labels
          // lineHeight: 4
                  },
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        color: 'white', // Change the text color of the y-axis labels
        font: {
          size: 12, // Reduce the font size of the y-axis labels
          // lineHeight:2
        },
      },
    },
  },
};
  return (
    <div className='chart-container'>
      <Line data={data} options={options} />
    </div>
  );
};

export default OrderLineChart;






// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// import  from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, ToolTipItem, Legend } from 'chart.js';

// // Register necessary components for Chart.js
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// const OrderLineChart = () => {
//   const data = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [
//       {
//         label: 'Monthly Order',
//         data: [65, 59, 80, 81, 56, 45, 78],
//         fill: false,
//         borderColor: 'rgba(75,192,192,1)',
//         tension: 0.1,
//       }
//     ]
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       tooltip: {
//         callbacks: {
//           label: (tooltipItem: TooltipItem<'line'>)  => {
//             const datasetLabel = tooltipItem.dataset.label || '';
//             const value = tooltipItem.raw; // Directly get the value for the tooltip
//             return `${datasetLabel}: ${value}`;
//           },
//         },
//       },
//     },
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: 'Months',
//         },
//         grid: {
//           borderColor: '#FF5733', // Color of the grid lines on the x-axis
//         },
//         ticks: {
//           color: '#FF5733', // Color of the tick labels on the x-axis
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: 'Order',
//         },
//         grid: {
//           borderColor: '#33CFFF', // Color of the grid lines on the y-axis
//         },
//         ticks: {
//           color: '#33CFFF', // Color of the tick labels on the y-axis
//         },
//       },
//     }
//   };

//   return (
//     <div className='chart-container'>
//       <reactChartjs2.LinetChartjs2.Line data={data} options={options} />
//     </div>
//   );
// };

// export default OrderLineChart;


// ................................................................................

// // components/LineChart.js
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
// const OrderLineChart = () => {

//     const data = {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [
//           {
//             label: 'Monthly Order',
//             data: [65, 59, 80, 81, 56, 45,78],
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
//               label: (tooltipItem:dt) => `Order: ${tooltipItem.datasets}`,
//             },
//           },
//         },
//         scales: {
//           x: {
//             title: {
//               display: true,
//               text: 'Months'
             
//             }
//           },
//           y: {
//             title: {
//               display: true,
//               text: 'Order'
//             }
//           }
//         }
//       };
      
      
    
//   return (
//     <div>
//       <Line data={data}/>
//     </div>
//   );
// };

// export default OrderLineChart








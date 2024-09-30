


// // "use client"


// // import SalesLineChart from './SalesLinechart';
// // import OrderLineChart from './orderLineChart';

// // import React from 'react'
// // import { useState } from 'react';



// //     const tabs = [
// //         {
// //           title: 'Sales',
// //           type: 'sales'
        
// //         },{
// //           title: 'Orders',
// //           type: 'orders'
        
// //         }
        
// //           ];



// // export default function Testing() {
  

    
// //     const changeBorder =()=> {
   
  
  
// //         const [chartToDisplay, setchartToDisplay] = useState(tabs[0].type)
      
       
// //         return (
// //           <div className='bg-slate-700 py-8 rounded-lg' >Weekly Sales
      
// //                       <div className="text-sm font-medium text-center border-b-2 border-gray-400 dark:text-gray-400 dark:border-gray-700">
// //                           <ul className="flex flex-wrap -mb-px">
// //                             {tabs.map((tab,i)=>{
// //                               return(<li className="me-2">
// //                                 <button onClick={()=>{setchartToDisplay(tab.type)}}  className={chartToDisplay===tab.type?"inline-block p-4 border-b-2 border-green-400 rounded-t-lg active hover:text-slate-400 dark:hover:text-gray-300" : "inline-block p-4 hover:text-slate-400 border-b-2 rounded-t-lg border-transparent dark:text-blue-500 dark:border-blue-500"}>{tab.title} </button>
// //                             </li>
      
// //                               )
// //                             })}     
// //                           </ul>
// //                       </div>
                  
// //           </div>
// //         )
      
// //       }
    
    
// //     const changeChart = () => {
    
// //       const [activeTab, setActiveTab] = useState('sales');
// //       const renderContent = () => {
// //         switch (activeTab) {
// //           case 'sales':
// //             return <SalesLineChart/>;
// //           case 'orders':
// //             return <OrderLineChart />;
// //           default:
// //             return null;
// //         }
// //       };
    
// //       return (
// //         <div className='bg-slate-700 py-8 rounded-lg' >Weekly Sales
// //           <div className="tabs border-b-2 border-gray-400">
// //             {tabs.map((tab) => (
// //               <button
// //                 key={tab.type}
// //                 onClick={() => setActiveTab(tab.type)}
// //                 className={activeTab === tab.type ? 'active' : '' }  >
// //                 {tab.title}
// //               </button>
// //             ))}
// //           </div>
// //           <div className="content">
// //           {renderContent()}
// //           </div>
    
         
// //         </div>
// //       );
// //     };
    
    
    
// //     const handleBoth = ()=>{
    
// //         changeChart()
// //         changeBorder()
// //     }
    
// //     return(
// //         <button onClick={handleBoth}>
    
// //         </button>
// //     )

// // }


// "use client";

// import React, { useState } from 'react';
// import SalesLineChart from './SalesLinechart';
// import OrderLineChart from './orderLineChart';

// const tabs = [
//   {
//     title: 'Sales',
//     type: 'sales'
//   },
//   {
//     title: 'Orders',
//     type: 'orders'
//   }
// ];

// export default function Testing() {
//   const [activeTab, setActiveTab] = useState('sales');

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'sales':
//         return <SalesLineChart />;
//       case 'orders':
//         return <OrderLineChart />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className='bg-slate-700 py-8 rounded-lg'>
//       <div className="text-sm font-medium text-center border-b-2 border-gray-400 dark:text-gray-400 dark:border-gray-700">
//         <ul className="flex flex-wrap -mb-px">
//           {tabs.map((tab) => (
//             <li key={tab.type} className="me-2">
//               <button
//                 onClick={() => setActiveTab(tab.type)}
//                 className={activeTab === tab.type ? "inline-block p-4 border-b-2 border-green-400 rounded-t-lg active hover:text-slate-400 dark:hover:text-gray-300" : "inline-block p-4 hover:text-slate-400 border-b-2 rounded-t-lg border-transparent dark:text-blue-500 dark:border-blue-500"}
//               >
//                 {tab.title}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="content">
//         {renderContent()}
//       </div>
//     </div>
//   );
// }

import React from 'react'


import styles from "../../globe.module.css"


const smallCard =[

    {
        title: "Total Order",
        number: 123,
        url: "/image/shopping-cart.png",
      
    },

    {
        title: "Order Pending",
        number: 123,
        url: "/image/refresh-cw.png",
       
    },

    {
        title: "Order Processing",
        number: 123,
         url: "/image/truck.png",
          color: "green"
    },

    {
        title: "Order Delivered",
        number: 123,
         url: "/image/check.png",
          color: "green"
    },
]


    


const Smallcard: React.FC = () => {

  const backgrondColor =(title: string)=>{
    switch (title) {
      case "Total Order":
        return styles.totalOrders 
        break;
      case "Order Pending":
        return styles.orderPending 
        break;
      case "Order Processing":
        return styles.orderProcessing 
        break;
      case "Order Delivered":
        return styles.orderDelivered 
        break;
    
      default:
        break;
    }
  };
  return (
    
    <div className='flex justify-between w-full gap-2 pt-8 pb-8 pl-6 pr-6'>
      {smallCard.map((stat, index) => (
       <div key={index} className='bg-slate-300 dark:bg-slate-700 h-32 w-72 flex items-center justify-center mt-6 gap-6 rounded-2xl shadow-md'>
         <div className={`${backgrondColor(stat.title)} h-10 w-10 rounded-full flex items-center justify-center `}>
         <img src={stat.url} className="h-6 w-6"></img> 
         </div>
          
          <div>
             <h2 className='text-slate-900 dark:text-slate-300'>{stat.title}</h2>
             <h2 className='text-2xl font-bold text-slate-900 dark:text-slate-300'>{stat.number}</h2>
           </div>
        </div>
      ))}
    </div>
  );
};

export default Smallcard;
import React from 'react'
import {Layers} from 'lucide-react';
import styles from "../../globe.module.css"

const salestat =[
{period: "Today Orders",
  sales: 2000,
  icon: " url",
  cash: 102,
  card : 111,
  credit: 120,

},
{period: "Yesterday Orders",
  sales: 3000,
  icon: " url",
  cash: 102,
  card : "111",
  credit: 120
},
{period: "This Month",
  sales: 50000,
  icon: " url",

},
{period: "Last Month",
  sales: 2500,
  icon: " url",
  
},
{period: "All-Time sales",
  sales: 8000,
  icon: " url",

  
},

]

type stat = {
  period: string
  sales: number
  icon: string
  cash: number
  card : number
  credit: number
}

export default function LargeCard() {

  
  const getBackgroundColor = (period: string): string => {
    switch (period) {
      case "Today Orders":
        return styles.todayOrders;
      case "Yesterday Orders":
        return styles.yesterdayOrders;
      case "This Month":
        return styles.thisMonth;
      case "Last Month":
        return styles.lastMonth;
      case "All-Time sales":
        return styles.allTimeSales;
      default:
        return styles.todayOrder; // Default background color if no match
    }
  };

  return (
    <div className='flex w-full justify-between p-6'>
      {salestat.map((stat, index) => (
        <div key={index} className= {`${getBackgroundColor(stat.period)} rounded-lg text-white w-52 h-48 flex flex-col items-center p-6 gap-2 shadow-xl`}>
           <Layers/>
            <h4> {stat.period}</h4>
            <h2>{`N ${stat.sales}`}</h2>
           <div className='flex'>
                  {stat.cash !== undefined && stat.cash !== null && (
                  <h4 className='text-sm'>{`cash: ${stat.cash}`} </h4>
                  )}

                {stat.card !== undefined && stat.card !== null && (
                  <h4 className='text-sm'>{`card: ${stat.card}`} </h4>
                )}

                {stat.credit !== undefined && stat.credit !== null && (
                  <p className='text-sm'>Credit: ${stat.credit}</p>
                )}      
            </div>

        </div>
      ))}
      
    </div>
  );
};


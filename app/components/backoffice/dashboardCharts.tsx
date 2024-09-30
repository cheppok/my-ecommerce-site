import React from 'react'

import BestSellingProduct from './bestSelling Product';
import MonthlySalesChart from './monthlySalesChart';
import CustomeTable from './customeTable';



export default function DashboardCharts() {
  return (<>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-4'>
       <MonthlySalesChart/>
        
        <BestSellingProduct/>
        
    </div>
     <CustomeTable/>
     </>
  )
  
}

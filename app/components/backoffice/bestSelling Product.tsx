import React from 'react'
import PieChart1 from './piechart1';
// import { ThemeProvider } from '../../../providers/themeContext';



export default function BestSellingProduct() {
  return (
    // <ThemeProvider>
    <div className='p-8 bg-slate-200 dark:bg-slate-700 rounded-lg flex flex-col items-center' >
        <h2 className='text-xl font-bold text-slate-900 dark:text-slate-300'>Best Selling Product</h2>
           <PieChart1/>
        
     </div>
    
  )
}

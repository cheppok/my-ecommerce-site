import React from 'react'
import Heading from '../../components/backoffice/heading';
import LargeCard from '../../components/backoffice/largeCard';
import Smallcard from '../../components/backoffice/smallcard';
import DashboardCharts from '../../components/backoffice/dashboardCharts';




export default function Dashboard
() {
  return (
  
    <div className=' dark:bg-slate-800 bg-slate-50 pt-4'>
            <Heading  title='Dashboard Overview' />
            <LargeCard/>
            <Smallcard/>
            <DashboardCharts/>
            {/* <RecentOrdersTable/> */} 
    </div>
   
  )
}

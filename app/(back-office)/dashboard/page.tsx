import React from 'react'
import Heading from '../../components/backoffice/heading';
import LargeCard from '../../components/backoffice/largeCard';
import Smallcard from '../../components/backoffice/smallcard';
import DashboardCharts from '../../components/backoffice/dashboardCharts';



export default function Dashboard
() {
  return (
    <div>
        <Heading title='Dashboard Overview'/>
        <LargeCard/>
        <Smallcard/>
        <DashboardCharts/>
        {/* <RecentOrdersTable/> */}
       

        
    </div>
  )
}

import React, { ReactNode } from 'react'
import Sidebar from '../components/backoffice/sidebar';
import Navebar from '../components/backoffice/navbar';

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div className='flex'>
      <Sidebar/>
      {/* <Navebar/> */}
      <div className='w-full'>
      <Navebar/>
        <main className='p-8 bg-slate-900 min-h-screen text-slate-50 mt-16 ml-60'> 
         {children}
        </main>
       
      </div>
    </div>
  )
};

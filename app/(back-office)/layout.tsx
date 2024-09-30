import React, { ReactNode } from 'react'
import Sidebar from '../components/backoffice/sidebar';
import Navbar from '../components/backoffice/navbar';
import {ThemeProvider} from "@/app/components/backoffice/darkmode/themeProvider"
import TestingPage from '../components/backoffice/darkmode/testingPage';


export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  // return (
  //   <html lang="en" className='dark'>
    
  
  //   <div className='flex bg-slate-200 dark:bg-slate-800'>
  //     <Sidebar/>
    
  //         <div className='w-full'>
  //         <Navbar />
  //           <main className='p-8 bg-slate-200 dark:bg-slate-900 min-h-screen text-slate-50 mt-16 ml-60'> 
  //           {children}
  //           </main>
  //          </div>

  //   </div>
  
  //   </html>
  
  // )
  return (<>
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
       <ThemeProvider
         attribute="class"
         defaultTheme="system"
         enableSystem
         disableTransitionOnChange
       >
       <div className='flex bg-slate-200 dark:bg-slate-800'>
       <Sidebar/>
    
           <div className='w-full lg:ml-64 mt-28'>
           <Navbar />
             <main className='bg-slate-200 dark:bg-slate-900 min-h-screen text-slate-50  '> 
             {children}
             </main>
            </div>
          

     </div>
       </ThemeProvider>
     </body>
   </html>
 </>
);
};

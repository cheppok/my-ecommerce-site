import Link from 'next/link'
import React from 'react'
import Dashboard from '../../(back-office)/dashboard/page';
import Customers from '../../(back-office)/dashboard/customers/page';
import Markets from '../../(back-office)/dashboard/markets/page';
import Farmers from '../../(back-office)/dashboard/farners/page';
import Staff from '../../(back-office)/dashboard/staff/page';
import { LayoutGrid, Users, Bookmark, Factory, Truck, User, UserCircle, Settings, ArrowUpRightSquareIcon, Warehouse, ChevronRight, Boxes, ScanSearch, MonitorPlay, LayoutList, SendToBack, LogOut } from 'lucide-react';
import Products from '../../(back-office)/dashboard/(catalogue)/products/page';
import Categorie from '../../(back-office)/dashboard/(catalogue)/categories/page';
import Attributes from '../../(back-office)/dashboard/(catalogue)/attributes/page';
import Coupon from '../../(back-office)/dashboard/(catalogue)/coupons/page';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"


export default function Sidebar() {

  return (

    <div className=' bg-slate-300 dark:bg-slate-800 space-y-14  w-64 h-screen dark:text-slate-50 text-black fixed  left-0 m-2 overflow-y-scroll'>
        <Link href="#"> logo</Link>
        <div className='flex flex-col h-full space-y-3 '>
             <Link href="#"  className='flex space-x-3 border-l-4   border-green-500 p-3 pl-6 '>
                <LayoutGrid/>
                <span>  Dashboard</span>
              </Link>
             <Link href="#"  className='flex space-x-2 p-3 pl-6 border-l-4 selection: border-green-500'>
                <Bookmark/>
                <Collapsible>
                  <CollapsibleTrigger>
                  <div className='flex space-x-4'>
                    <span> Catalog</span>
                    <ChevronRight/>
                  </div>                
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="flex flex-col bg-slate-400 dark:bg-slate-900 p-4 rounded-lg text-xs">

                      <button className='flex flex-row space-x-4 p-1'>
                        <Boxes size={15}/>
                        <span> Products</span>
                       
                      </button >

                      <button className='flex flex-row space-x-4 p-1'>
                        <LayoutList size={15 } />
                        <span>Categories</span>
                       
                      </button>

                      <button className='flex flex-row space-x-4 p-1'>
                        <SendToBack size={15 } />
                      <span> Attributes</span>
                      </button>

                      <button className='flex flex-row space-x-4 p-1'>
                        <ScanSearch size={15 } />
                         <span>Coupon</span>
                      </button>

                      <button className='flex flex-row space-x-4 p-1'>
                        <MonitorPlay size={15 } />
                       <span> store slider</span>
                      </button>
                    </div>                 
                  </CollapsibleContent>
                </Collapsible>

              </Link>
             <Link href="#"  className='flex space-x-2 p-3 pl-6 border-l-4 border-green-500'>
                <Users/>
                <span> Customers</span>
              </Link>
             <Link href="#"  className='flex space-x-2 p-3 pl-6 border-l-4 border-green-500'>
                <Warehouse/>
                <span> Markets</span>
              </Link>
             <Link href="#"  className='flex space-x-2 p-3 pl-6 border-l-4 border-green-500'>
                <UserCircle/>
                <span> Farmers</span>
              </Link>
             <Link href="#"  className='flex space-x-2 p-3 pl-6 border-l-4 border-green-500'>
                <Truck/>
                <span>  Orders</span>
              </Link>
             <Link href="#"  className='flex space-x-2 p-3 pl-6 border-l-4 border-green-500'>
                <User/>
                <span>  Staff</span>
              </Link>
             <Link href="#"  className='flex space-x-2 p-3 pl-6 border-l-4 border-green-500'>
                <Settings/>
                <span>  setttings</span>
              </Link>
             <Link href="#"  className='flex space-x-2 p-3 pl-6 border-l-4 border-green-500'>
                <ArrowUpRightSquareIcon/>
                <span>  online stores</span>
              </Link>
           
        </div>

        <div className='bg-green-600 rounded-xl absolute bottom-8 pt-2 pb-2 pl-4 pr-4 ml-6' >
        <Link href="#" className='flex space-x-2'>
                <LogOut/>
                <span> 
                  Logout</span>
              </Link>

        </div>
        
    </div>
 
  )
}

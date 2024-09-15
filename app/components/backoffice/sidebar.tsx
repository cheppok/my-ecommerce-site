import Link from 'next/link'
import React from 'react'
import Dashboard from '../../(back-office)/dashboard/page';
import Customers from '../../(back-office)/dashboard/customers/page';
import Markets from '../../(back-office)/dashboard/markets/page';
import Farmers from '../../(back-office)/dashboard/farners/page';
import Staff from '../../(back-office)/dashboard/staff/page';

export default function Sidebar() {
  return (
    <div className=' bg-slate-800 space-y-14  w-60 h-screen text-slate-50 p-8 fixed  left-0 '>
        <Link href="#"> logo</Link>
        <div className='flex flex-col h-full space-y-3 '>
             <Link href="#" className='bg-slate-800'> Dashboard</Link>
             <Link href="#" className='bg-slate-800'> Catalog</Link>
             <Link href="#" className='bg-slate-800'> Customers</Link>
             <Link href="#" className='bg-slate-800'> Markets</Link>
             <Link href="#" className='bg-slate-800'> Farmers</Link>
             <Link href="#" className='bg-slate-800'> Orders</Link>
             <Link href="#" className='bg-slate-800'> Staff</Link>
             <Link href="#" className='bg-slate-800'> setttings</Link>
             <Link href="#" className='bg-slate-800'> online stores</Link>
        </div>
    </div>
  )
}

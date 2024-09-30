import React from 'react'
import { Menu, Sun, Bell, User, LogOut, Settings, X } from 'lucide-react';
import Image from 'next/image';
import { ModeToggle } from './darkmode/themeSwitcher';





import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"




const menu = () => {
  return <Menu />;
};

const bell = () => {
  return <Bell color="green" size={48} />;
};
const user = () => {
  return <User color="red" size={48} />;
};
const sun = () => {
  return <Sun color="red" size={48} />;
};



export default function Navbar() {

  return (


        <div className=' navbar flex items-center justify-between h-20 bg-slate-300 dark:bg-slate-900 dark:text-stone-50 text-slate-900 p-4 fixed top-0 z-20'>
          <button> <Menu/> </button>
            <div className="flex p-4 space-x-4" >
           
                <button>
                  <ModeToggle/>
                </button>


                <button>
                 
                       <DropdownMenu>
                        <DropdownMenuTrigger>
                        <Bell className="dark:text-green-400 text-black dark:fill-green-400 fill-black  " />
                        </DropdownMenuTrigger>

                        <DropdownMenuContent>
                          <DropdownMenuSeparator />    
                          <DropdownMenuItem>
                        <div>
                          <div className="flex  items-center space-x-2  right-10 p-2">
                           <Image src="/image/profile.jpg" height={100} width={200} alt='profile image' className='h-8 w-8 rounded-full'/>
                           <div className='flex flex-col'> 
                              <p>yellow seewt corn stock out plea..</p>
                              <div className='flex flex-row items-center space-x-2'>
                                <p className='bg-red-700 text-white  rounded-full text-sm'>stock out</p>
                                <p>date sent</p>
                              </div>
                           </div>
                           <div>
                            <X/>
                           </div>
                          </div>
                          <div className="flex  items-center space-x-2  right-10 p-2">
                           <Image src="/image/profile.jpg" height={100} width={200} alt='profile image' className='h-8 w-8 rounded-full'/>
                           <div className='flex flex-col'> 
                              <p>yellow seewt corn stock out plea..</p>
                              <div className='flex flex-row items-center space-x-2'>
                                <p className='bg-red-700 text-white  rounded-full text-sm'>stock out</p>
                                <p>date sent</p>
                              </div>
                           </div>
                           <div>
                            <X/>
                           </div>
                          </div>
                          <div className="flex  items-center space-x-2  right-10 p-2">
                           <Image src="/image/profile.jpg" height={100} width={200} alt='profile image' className='h-8 w-8 rounded-full'/>
                           <div className='flex flex-col'> 
                              <p>yellow seewt corn stock out plea..</p>
                              <div className='flex flex-row items-center space-x-2'>
                                <p className='bg-red-700 text-white  rounded-full text-sm'>stock out</p>
                                <p>date sent</p>
                              </div>
                           </div>
                           <div>
                            <X/>
                           </div>
                          </div>
                          <div className="flex  items-center space-x-2  right-10 p-2">
                           <Image src="/image/profile.jpg" height={100} width={200} alt='profile image' className='h-8 w-8 rounded-full'/>
                           <div className='flex flex-col'> 
                              <p>yellow seewt corn stock out plea..</p>
                              <div className='flex flex-row items-center space-x-2'>
                                <p className='bg-red-700 text-white  rounded-full text-sm'>stock out</p>
                                <p>date sent</p>
                              </div>
                           </div>
                           <div>
                            <X/>
                           </div>
                          </div>
                          <div className="flex  items-center space-x-2  right-10 p-2">
                           <Image src="/image/profile.jpg" height={100} width={200} alt='profile image' className='h-8 w-8 rounded-full'/>
                           <div className='flex flex-col'> 
                              <p>yellow seewt corn stock out plea..</p>
                              <div className='flex flex-row items-center space-x-2'>
                                <p className='bg-red-700 text-white  rounded-full text-sm'>stock out</p>
                                <p>date sent</p>
                              </div>
                           </div>
                           <div>
                            <X/>
                           </div>
                          </div>
                        </div>
                          <DropdownMenuSeparator />
                    
                        
                                          
                                {/* <div className="flow-root -m-5">
                                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700 border-b-2 border-b-white">
                                        <li className="py-3 sm:py-4">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                    <Image className="w-8 h-8 rounded-full" src="/image/profile.jpg" alt="Neil image" width={100} height={200}/>
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                        yellow sweet corn out plea...
                                                    </p>
                                                    <div className="text-sm text-gray-500 truncate dark:text-gray-400 flex justify-between">
                                                      <p  className='bg-red-500 w-fit h-fit rounded-full text-white'>stock out</p> 
                                                    <span>sent time</span>
                                                    </div>
                                                  
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                    x
                                                </div>
                                            </div>
                                        </li>
                                      
                                        <li className="py-3 sm:py-4">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                    <Image className="w-8 h-8 rounded-full" src="/image/profile.jpg" alt="Neil image" width={100} height={200}/>
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                        yellow sweet corn out plea...
                                                    </p>
                                                    <div className="text-sm text-gray-500 truncate dark:text-gray-400 flex justify-between">
                                                      <p  className='bg-red-500 w-fit h-fit rounded-full text-white'>stock out</p> 
                                                    <span>sent time</span>
                                                    </div>
                                                  
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                    x
                                                </div>
                                            </div>
                                        </li>
                                      
                                        <li className="py-3 sm:py-4">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                    <Image className="w-8 h-8 rounded-full" src="/image/profile.jpg" alt="Neil image" width={100} height={200}/>
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                        yellow sweet corn out plea...
                                                    </p>
                                                    <div className="text-sm text-gray-500 truncate dark:text-gray-400 flex justify-between">
                                                      <p  className='bg-red-500 w-fit h-fit rounded-full text-white'>stock out</p> 
                                                    <span>sent time</span>
                                                    </div>
                                                  
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                    x
                                                </div>
                                            </div>
                                        </li>
                                      
                                        <li className="py-3 sm:py-4">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                    <Image className="w-8 h-8 rounded-full" src="/image/profile.jpg" alt="Neil image" width={100} height={200}/>
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                        yellow sweet corn out plea...
                                                    </p>
                                                    <div className="text-sm text-gray-500 truncate dark:text-gray-400 flex justify-between">
                                                      <p  className='bg-red-500 w-fit h-fit rounded-full text-white'>stock out</p> 
                                                    <span>sent time</span>
                                                    </div>
                                                  
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                    x
                                                </div>
                                            </div>
                                        </li>
                                      
                                        <li className="py-3 sm:py-4">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                    <Image className="w-8 h-8 rounded-full" src="/image/profile.jpg" alt="Neil image" width={100} height={200}/>
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                        yellow sweet corn out plea...
                                                    </p>
                                                    <div className="text-sm text-gray-500 truncate dark:text-gray-400 flex justify-between">
                                                      <p  className='bg-red-500 w-fit h-fit rounded-full text-white'>stock out</p> 
                                                    <span>sent time</span>
                                                    </div>
                                                  
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                    x
                                                </div>
                                            </div>
                                        </li>
                                      
                                    </ul>
                                </div>
                           */}
                           
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>

                 </button>
            
                <button>
                 
                       <DropdownMenu>
                        <DropdownMenuTrigger>
                        <Image src="/image/profile.jpg" alt='profile image' height={200} width={200} className='rounded-full h-8 w-7'/>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent>
                          <DropdownMenuLabel>
                          My Account
                          
                          </DropdownMenuLabel>

                          <DropdownMenuSeparator />
                          
                          <DropdownMenuItem>
                          <User className="mr-2 h-4 w-4" />
                             Dashboard
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                          <Settings className="mr-2 h-4 w-4" />
                             Edit Profile
                          </DropdownMenuItem>

                          <DropdownMenuItem>
                          <LogOut className="mr-2 h-4 w-4" />
                            Logout 
                           </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>

                 </button>
            


              </div>
        </div>

         
  )
}





'use client'




import React, { useState } from 'react';
import tableData from '../../../_tableData/tableData.json';




export default function CustomeTable() {
  const data = tableData;

  const PAGE_SIZE = 10;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const totalPages = Math.ceil(data.length / PAGE_SIZE);
  
  const currentlyDisplayedData = data.slice(startIndex, endIndex);

  // Pagination logic
  const paginationRange = 2; // Number of page buttons to show before and after the current page

  const getPaginationButtons = () => {
    const range = [];
    
    // Always show the first page and the last page
    if (totalPages <= 5) {
      // Less than or equal to 5 pages, show all
      for (let i = 1; i <= totalPages; i++) {
        range.push(i);
      }
    } else {
      // More than 5 pages, show selective range
      if (currentPage - paginationRange > 1) {
        range.push(1);
      }
      
      // if (currentPage - paginationRange > 2) {
      //   range.push('...');
      // }
      
      for (let i = Math.max(1, currentPage - paginationRange); i <= Math.min(totalPages, currentPage + paginationRange); i++) {
        range.push(i);
      }
      
      // if (currentPage + paginationRange < totalPages - 1) {
      //   range.push('...');
      // }
      
      if (currentPage + paginationRange < totalPages) {
        range.push(totalPages);
      }
    }
    
    return range;
  };

  const paginationButtons = getPaginationButtons();

  return (
    <div>
      <h2>Recent Orders</h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                </div>
              </th>
              <th scope="col" className="px-6 py-3">ID</th>
              <th scope="col" className="px-6 py-3">Last Name</th>
              <th scope="col" className="px-6 py-3">First Name</th>
              <th scope="col" className="px-6 py-3">Email</th>
              <th scope="col" className="px-6 py-3">Gender</th>
              <th scope="col" className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentlyDisplayedData.map((item, i) => (
              <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  </div>
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.id}</th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.last_name}</th>
                <td className="px-6 py-4">{item.first_name}</td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">{item.gender}</td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span className="font-semibold text-gray-300 dark:text-white">({startIndex + 1}-{Math.min(endIndex, data.length)})</span> of <span className="font-semibold text-gray-300 dark:text-white">{data.length}</span></span>
          <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <button onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous
            </button>

            {paginationButtons.map((page, index) => (
              <li key={index}>
                {page === currentPage ? (
                  <span className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">...</span>
                ) : (
                  <button onClick={() => setCurrentPage(page)} className={`flex items-center justify-center px-3 h-8 leading-tight ${currentPage === page ? 'text-blue-600 border-blue-300 bg-blue-50 dark:bg-gray-700 dark:border-gray-700 dark:text-white' : 'text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}`}>{page}</button>
                )}
              </li>
            ))}

            <button onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next
            </button>
          </ul>
        </nav>
      </div>
    </div>
  );
}





// perfectly woring but the paginations are all showing 

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 
// "use client"

// import React from 'react'
// import tableData from "../../../_tableData/tableData.json"
// import { useState } from 'react';





// export default function CustomeTable() {
//  const data = tableData



// const totalItems = data.length

// const PAGE_SIZE = 10
// const[currentPage, setCurrentPage] = useState(1);
// const startIndex = (currentPage-1)*10;
// const endIndex = (startIndex + PAGE_SIZE );
// const totalPages = Math.ceil(data.length/PAGE_SIZE)

// const itemEndIndex = Math.min(endIndex, data.length)
// const currentlyDisplayedData =  data.slice(startIndex, endIndex); 







    
//   return (
//     <div>
//              <h2>Recent Orders</h2>




//      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//     <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//         <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//             <tr>
//                 <th scope="col" className="p-4">
//                     <div className="flex items-center">
//                         <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
//                         {/* <label for="checkbox-all-search" className="sr-only">checkbox</label> */}
//                     </div>
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   id
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                    Last Name
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//               First Name
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     email
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                 gender
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     Action
//                 </th>
//             </tr>
//         </thead>
//         <tbody>
         
//             {
//                 currentlyDisplayedData.map((items, i)=>{
//                     return(
//                         <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//                         <td className="w-4 p-4">
//                             <div className="flex items-center">
//                                 <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
//                                 {/* <label for="checkbox-table-search-1" className="sr-only">checkbox</label> */}
//                             </div>
//                         </td>
                        
//                         <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                         {items.id}
//                         </th>
//                         <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                         {items.last_name}
//                         </th>
//                         <td className="px-6 py-4">
//                         {items.first_name}
//                         </td>
//                         <td className="px-6 py-4">
//                         {items.email}
//                         </td>
//                         <td className="px-6 py-4">
//                         {items.gender}
//                         </td>
//                         <td className="px-6 py-4">
//                             <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
//                         </td>
    
    
    
//                     </tr>
//                     )
//                 })
//             }
              
                
             
           
               
            
//         </tbody>
//     </table>
//     <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
//         <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span className="font-semibold text-gray-300 dark:text-white">({startIndex +1}-{itemEndIndex})</span> of <span className="font-semibold text-gray-300 dark:text-white">{totalItems}</span></span>
//         <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
//             <button onClick={()=>setCurrentPage(currentPage-1)}
//             disabled={currentPage==1}
//                  className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous
//             </button>

//             {
//                 Array.from({length: totalPages}, (_, index) => {
//                     return(             
//                     <li key={index}>
//                     <button onClick={() => setCurrentPage(index + 1)} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{index + 1}</button>
//                     </li>
//                     )
//                 })
//             }
           
//             <button onClick={()=>setCurrentPage(currentPage+1)}
//             disabled = {currentPage==totalPages}
//              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next
//             </button>
//         </ul>
//     </nav>
// </div>


//     </div>
   
        
// )
// }



// before implementing pagenation 

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>. 
// "use client"

// import React from 'react'
// import tableData from "../../../_tableData/tableData.json"
// import { useState } from 'react';





// export default function CustomeTable() {
//  const data = tableData




    
//   return (
//     <div>
//              <h2>Recent Orders</h2>




//      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//     <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//         <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//             <tr>
//                 <th scope="col" className="p-4">
//                     <div className="flex items-center">
//                         <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
//                         {/* <label for="checkbox-all-search" className="sr-only">checkbox</label> */}
//                     </div>
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                    Last Name
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//               First Name
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     email
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                 gender
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     Action
//                 </th>
//             </tr>
//         </thead>
//         <tbody>
         
//             {
//                  data.slice(0,10).map((items, i)=>{
//                     return(
//                         <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//                         <td className="w-4 p-4">
//                             <div className="flex items-center">
//                                 <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
//                                 {/* <label for="checkbox-table-search-1" className="sr-only">checkbox</label> */}
//                             </div>
//                         </td>
                        
//                         <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                         {items.last_name}
//                         </th>
//                         <td className="px-6 py-4">
//                         {items.first_name}
//                         </td>
//                         <td className="px-6 py-4">
//                         {items.email}
//                         </td>
//                         <td className="px-6 py-4">
//                         {items.gender}
//                         </td>
//                         <td className="px-6 py-4">
//                             <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
//                         </td>
    
    
    
//                     </tr>
//                     )
//                 })
//             }
              
                
             
           
               
            
//         </tbody>
//     </table>
//     <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
//         <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span className="font-semibold text-gray-300 dark:text-white">1-10</span> of <span className="font-semibold text-gray-300 dark:text-white">1000</span></span>
//         <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
//             <li>
//                 <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
//             </li>
//             <li>
//                 <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
//             </li>
//             <li>
//                 <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
//             </li>
//             <li>
//                 <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
//             </li>
//             <li>
//                 <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
//             </li>
//             <li>
//                 <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
//             </li>
//             <li>
//         <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
//             </li>
//         </ul>
//     </nav>
// </div>


//     </div>
   
        
// )
// }

import React from 'react'

export default function Heading(params:{title:string}) {
  return (
    <h2 className=' ml-8 font-semibold text-2xl text-red-900 dark:text-slate-50'>{params.title}</h2>
  )
}

import React from 'react'

export default function Heading(params:{title:string}) {
  return (
    <h2 className=' font-semibold text-2xl text-slate-50'>{params.title}</h2>
  )
}

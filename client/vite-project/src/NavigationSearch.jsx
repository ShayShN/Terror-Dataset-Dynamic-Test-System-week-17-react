import React from 'react'



export default function SearchInput(props) {

  return (
    <div className='bg-emerald-100 mt-1 p-1.5 space-x-2'>
      <input className='border rounded-2xl p-0.5' type="text" placeholder='🔍 Search' onChange={props.input1} />
      <input className='border rounded-2xl p-0.5' type="number" placeholder='Search by Year' onChange={props.input2} />
      <input className='border rounded-2xl p-0.5' type="number" placeholder='Search by Year' onChange={props.input3} />
  
      <btn className='bg-blue-300 cursor-pointer rounded-2xl border p-0.5' onClick={props.btn1}>Filter</btn>
    </div>

  )
}

"use client"
import React, { useState } from 'react'

const page = () => {
  const [value, setvalue] = useState(10)
  const [name, setname] = useState('')
  const changeHandler = (e) => {
    setname(e.target.value)
    console.log(e.target.value);
  }
  return (
    <div className='m-[2%] text-red-600'>
      <h1>{value}</h1>
      <form >
        <input onChange={changeHandler} placeholder='Name' value={name} />
      </form>
      <button className='bg-zinc-400  px-5 py-2 rounded' onClick={() => setvalue(20)}>Click</button>
    </div>

  )
}

export default page
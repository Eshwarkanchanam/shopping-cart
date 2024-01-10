import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='h-[100vh] w-full flex justify-center items-center flex-col'>
        <p className='font-semibold'>OOPS!PAGE NOT FOUND</p>
        <h1 className='font-bold text-9xl'>404</h1>
        <p className='font-semibold'>WE ARE SORRY BUT PAGE YOU HAVE REQUESTED WAS NOT FOUND</p>
        <Link to={"/"} className='text-blue-900 underline'>back to home</Link>
    </div>
  )
}

export default ErrorPage
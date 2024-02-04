import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid}=useParams()
  return (
    <div className='bg-gray-700 text-white text-3xl flex justify-center'>User: {userid}</div>
  )
}

export default User
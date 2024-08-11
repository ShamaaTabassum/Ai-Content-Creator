import { Search } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between p-5 shadow-sm border-b-2 bg-white'>
      <div className='flex gap-2 items-center p-2 border rounded-md max-w-md'>
        <Search className='cursor-pointer'/>
        <input type='text' placeholder='Search...' className='outline-none'/>
      </div>
      <hr className='my-6 border'/>
      <div>
        <h2 className='cursor-pointer bg-primary p-1 rounded-full text-xs text-white px-2'>🔥Join Membership just for $9.99/Month</h2>
      </div>
    </div>
  )
}

export default Header
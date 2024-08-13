import { Search } from 'lucide-react'
import React from 'react'

const SearchSection = ({setUserSearchInput}:any) => {
  return (
    <div className='p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 flex flex-col justify-center items-center text-white'>
      <h1 className='text-3xl font-bold '>Browse All Templates</h1>
      <p>What would you like to create today?</p>
      <div className='w-full flex justify-center items-center '>
        <div className='flex gap-2  items-center p-2 border rounded-md bg-white my-5 md:w-[50%] w-full '>
<Search className='text-primary cursor-pointer '/>
<input type='text' placeholder='Search' className='w-full bg-transparent outline-none text-gray-600 ' onChange={(event)=>setUserSearchInput(event.target.value)}/>
        </div>
      </div>
    </div>
  )
}

export default SearchSection
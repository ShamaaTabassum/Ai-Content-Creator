'use client'
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const SideNav = () => {

  let path=usePathname();

const MenuList=[
  {
    name:'Home',
    path:'/dashboard',
    icon:Home,
  },
  {
    name:'History',
    path:'/dashboard/history',
    icon:FileClock,
  },
  {
    name:'Billing',
    path:'/dashboard/billing',
    icon:WalletCards,
  },
  {
    name:'Setting',
    path:'/dashboard/setting',
    icon:Settings,
  },
]

  return (
    <div className='h-screen p-5 shadow-sm border bg-white'>
      <div className='flex justify-start items-start cursor-pointer'> 
        <Image src='/logo.svg' alt='logo' width={250} height={80}/>
      </div>
      <hr className='my-6 border'/>
      <div className='mt-5'>
      {MenuList.map((menu,index)=>(
<div className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer ${path==menu.path && 'bg-primary text-white rounded-lg cursor-pointer'}`} key={index}>
  <menu.icon className='w-6 h-6'/>
  <h2 className='text-lg'>{menu.name}</h2>
</div>
      ))}
      </div>
    </div>
  )
}

export default SideNav
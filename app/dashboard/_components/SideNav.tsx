'use client'
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import UsageTrack from './UsageTrack'


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
    path:'/dashboard/settings',
    icon:Settings,
  },
]

  return (
    <div className='h-screen p-5 shadow-sm border bg-white relative'>
      <Link href={'/dashboard'}>
      <div className='flex justify-start items-start cursor-pointer'> 
        <Image src='/logo.svg' alt='logo' width={250} height={80} priority={true}/>
      </div>
      </Link>
      <hr className='my-6 border'/>
      <div className='mt-5'>
      {MenuList.map((menu,index)=>(
        <Link key={index} href={menu.path}>
<div className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer ${path==menu.path && 'bg-primary text-white rounded-lg cursor-pointer'}`} >
  <menu.icon className='w-6 h-6'/>
  <h2 className='text-lg'>{menu.name}</h2>
</div>
        </Link>
      ))}
      <div className='absolute bottom-10 left-0 w-full'>
      <UsageTrack/>
      </div>
      </div>
    </div>
  )
}

export default SideNav
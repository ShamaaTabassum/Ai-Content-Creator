'use client'
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs'
import React, { useContext, useEffect, useState } from 'react'
import { HISTORY } from '../history/page';
import { eq } from 'drizzle-orm';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';

const UsageTrack = () => {

    const {user} = useUser();
    const {totalUsage,setTotalUsage}=useContext(TotalUsageContext);
    const [maxWords,setMaxWords]=useState(10000)

    
    useEffect(()=>{
        user&&GetData();
    },[user])
    
    const GetData=async()=>{
        const email = user?.primaryEmailAddress?.emailAddress;
        if (!email) return null;
        const result:any = await db.select().from(AIOutput).where(eq(AIOutput.createdBy, email));

         GetTotalUsage(result)

    }
  
  const GetTotalUsage=(result:HISTORY[])=>{
let total:number=0;
result.forEach(element=>{
    total+=Number(element?.aiResponse.length);
    setTotalUsage(total);
})
  }


  return (
    <div className='m-5'>
        <div className='bg-primary text-white p-3 rounded-lg'>
            <h2 className='font-medium'>Credits</h2>
            <div className='h-2 bg-[#9981f9] w-full rounded-full mt-3'>
                <div className='h-2 bg-white rounded-full'
                style={{
                    width:totalUsage/maxWords>1?"100%":(totalUsage/maxWords)*100+"%"
                }}
                ></div>
            </div>
            <h2 className='text-sm my-2'>{totalUsage}/{maxWords} credit used</h2>
        </div>
        <Button variant={'secondary'} className='w-full my-3 text-primary'>Upgrade</Button>
    </div>
  )
}

export default UsageTrack
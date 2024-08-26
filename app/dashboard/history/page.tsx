'use client'
import React, { useEffect, useState } from 'react'
import { TEMPLATE } from '../_components/TemplateListSection'
import Image from 'next/image'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import Templates from '@/app/(data)/Templates'
import { Check } from 'lucide-react'


const History = () => {
    const [historyData,setHistoryData]=useState<any[]>([]);
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const getDataFromDb = async () => {
        try {
          const data = await db.select().from(AIOutput);
          setHistoryData(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

useEffect(()=>{
    getDataFromDb();
},[])

useEffect(() => {
    if (copiedIndex !== null) {
      const timer = setTimeout(() => {
        setCopiedIndex(null); 
      }, 2000);

      return () => clearTimeout(timer);
    }
}, [copiedIndex]);



  return (
    <div className='bg-white m-5 p-5 rounded-md h-full'>
        <h2 className='font-bold text-3xl'>History</h2>
        <p className='text-gray-400 font-medium'>Search your previously generated AL content</p>
        <div className='bg-slate-100 grid grid-cols-6 p-2 font-bold my-5'>
<h2>TEMPLATE</h2>
<h2 className='col-span-2'>AI RESP</h2>
<h2>DATE</h2>
<h2>WORDS</h2>
<h2>COPY</h2>
        </div>
        
            {
historyData.map((item:any,i:number)=>{
    const templateName=Templates.find((item)=>item.slug===historyData[i]?.templateSlug);

    const iconSrc:any=templateName?.icon;
    const handleCopy=() => {
        navigator.clipboard.writeText(item?.aiResponse).then(() => {
            setCopiedIndex(i);
          }).catch((error) => {
            console.error('Failed to copy: ', error);
          });
      }
  return(
 <div className='grid grid-cols-6  px-2 border-b-2 border-b-gray-100 w-full font-medium gap-5' key={i}>
<div className='flex justify-start items-center  py-5 gap-2' >
  <Image src={iconSrc} alt='icon' width={20} height={20}/>
  <p className='font-medium'>{templateName?.name}</p>
</div>
<div className='flex justify-start items-center w-full py-5 col-span-2'>
<p className='line-clamp-3'>{item?.aiResponse}</p>
</div>
<div className='flex justify-start items-center w-full py-5'>
<p>{item?.createdAt}</p>
</div>
<div className='flex justify-start items-center w-full py-5'>
<p>{item?.aiResponse.length}</p>
</div>
<div className='flex justify-start items-center w-full py-5'>
    <p onClick={handleCopy} className='text-primary font-bold cursor-pointer'>{copiedIndex === i ? <Check className='font-bold'/> : 'Copy'}</p>
</div>
      </div>)
})
            }
    </div>
  )
}

export default History
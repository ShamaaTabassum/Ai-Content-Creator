'use client'
import { Check } from 'lucide-react';
import React, { useEffect, useState } from 'react'

interface COPYDATAPROPS{
    aiResponse:string;
    index:number;
}

const CopyData = ({aiResponse,index}:COPYDATAPROPS) => {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null); 

    useEffect(() => {
        if (copiedIndex !== null) {
          const timer = setTimeout(() => {
            setCopiedIndex(null); 
          }, 2000);
    
          return () => clearTimeout(timer);
        }
    }, [copiedIndex]);

    const handleCopy=() => {
        navigator.clipboard.writeText(aiResponse).then(() => {
            setCopiedIndex(index);
          }).catch((error) => {
            console.error('Failed to copy: ', error);
          });
      }

  return (
    <div className='flex justify-start items-center w-full py-5'>
  <p onClick={handleCopy} className='text-primary font-bold cursor-pointer'>{copiedIndex === index ? <Check className='font-bold'/> : 'Copy'}</p>
</div>
  )
}

export default CopyData
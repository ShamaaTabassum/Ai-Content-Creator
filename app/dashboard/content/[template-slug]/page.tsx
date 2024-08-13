'use client'
import React from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface PROPS{
    params:{
        'template-slug':string
    }
}

const CreateNewContent = (props:PROPS) => {

        const selectedTemplate:TEMPLATE | undefined =Templates?.find((item)=>item.slug==props.params['template-slug'])

        const GenerateAiContent=(FormData:any)=>{

        }

  return (
    <div className='flex flex-col w-full'>
      <Link href={'/dashboard'} className='w-[120px] pl-5 pt-5'>
      <Button className='w-full'>Back</Button>
      </Link>
    <div className='grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 p-5 gap-5'>
        {/* FormSection */}
        <FormSection selectedTemplate={selectedTemplate} userFormInput={(data:any)=>GenerateAiContent(data)}/>
        {/* OutputSection */}
        <div className='lg:col-span-2'>
<OutputSection />
        </div>
    </div>
    </div>
  )
}

export default CreateNewContent
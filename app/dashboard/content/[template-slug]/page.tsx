'use client'
import React, { useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { chatSession } from '@/utils/AiModal'
import { AIOutput } from '@/utils/schema'
import { db } from '@/utils/db'
import { useUser } from '@clerk/nextjs'
import moment from 'moment';

interface PROPS {
  params: {
    'template-slug': string
  }
}

const CreateNewContent = (props: PROPS) => {

  const [loading, setLoading] = useState(false);
  const [aiOutput,setAiOutput]=useState<String>('')

  const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug == props.params['template-slug'])
  const {user}:any=useUser();

  const GenerateAiContent = async (formData: any) => {
    setLoading(true);
    const SelectedPrompt = selectedTemplate?.aiPrompt;
    const FinalAiPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;
    const result = await chatSession.sendMessage(FinalAiPrompt);
    setAiOutput(result?.response.text());
    await SaveInDb(JSON.stringify(formData),selectedTemplate?.slug,result?.response.text())
    setLoading(false);
  }

  const SaveInDb=async(formData:any,slug:any,aiResp:string)=>{
    const result=await db.insert(AIOutput).values({
      formData:formData,
      templateSlug:slug,
      aiResponse:aiResp,
      createdBy:user?.primaryEmailAddress?.emailAddress,
      createdAt:moment().format('DD/MM/YYYY')
    });
    console.log(result);
  }

  return (
    <div className='flex flex-col w-full'>
      <Link href={'/dashboard'} className='w-[120px] pl-5 pt-5'>
        <Button className='w-full'>Back</Button>
      </Link>
      <div className='grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 p-5 gap-5'>
        {/* FormSection */}
        <FormSection selectedTemplate={selectedTemplate} userFormInput={(data: any) => GenerateAiContent(data)} loading={loading} />
        {/* OutputSection */}
        <div className='lg:col-span-2'>
          <OutputSection aiOutput={aiOutput}/>
        </div>
      </div>
    </div>
  )
}

export default CreateNewContent
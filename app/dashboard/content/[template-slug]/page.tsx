'use client'
import React, { useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { chatSession } from '@/utils/AiModal'

interface PROPS {
  params: {
    'template-slug': string
  }
}

const CreateNewContent = (props: PROPS) => {

  const [loading, setLoading] = useState(false);
  const [aiOutput,setAiOutput]=useState<String>('')

  const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug == props.params['template-slug'])

  const GenerateAiContent = async (FormData: any) => {
    setLoading(true);
    const SelectedPrompt = selectedTemplate?.aiPrompt;
    const FinalAiPrompt = JSON.stringify(FormData) + ", " + SelectedPrompt;
    const result = await chatSession.sendMessage(FinalAiPrompt);
    setAiOutput(result?.response.text());
    setLoading(false);
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
'use client'
import Templates from '@/app/(data)/Templates'
import React, { useEffect, useState } from 'react'
import TemplateCard from './TemplateCard'

export interface TEMPLATE{
  name:string,
  desc:string,
  icon:string,
  category:string,
  slug:string,
  aiPrompt:string,
  form:FORM[],
}

export interface FORM{
  label:string,
  field:string,
  name:string,
  required?:boolean,
}

const TemplateListSection = ({userSearchInput}:any) => {

  const [searchTemplates,setSearchTemplates]=useState<any>(Templates);

  useEffect(()=>{
if(userSearchInput){
  let filteredSearchInput=Templates.filter(item=>item.name.toLocaleLowerCase().includes(userSearchInput.toLocaleLowerCase()
))
setSearchTemplates(filteredSearchInput)
}else{
  setSearchTemplates(Templates)
}
  },[userSearchInput])
  
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10 '>
      {searchTemplates.map((item:TEMPLATE,index:number)=>(
        <div key={index}>

          <TemplateCard {...item}/>
        </div>
      ))}
    </div>
  )
}

export default TemplateListSection
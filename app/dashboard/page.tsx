'use client'
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'

const page = () => {
  const [userSearchInput,setUserSearchInput]=useState<String>()
  return (
    <div>
      {/* Search Section */}
      <SearchSection setUserSearchInput={setUserSearchInput}/>
      {/* Template List Section */}
      <TemplateListSection userSearchInput={userSearchInput}/>
    </div>
  )
}

export default page
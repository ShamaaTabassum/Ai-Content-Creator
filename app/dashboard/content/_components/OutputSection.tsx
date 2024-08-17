import React, { useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

const OutputSection = () => {
  const editorRef:any=useRef();
  return (
    <div className='bg-white shadow-lg border rounded-lg'> 
    <div className='flex justify-between items-center p-5'>
      <h2 className='font-medium text-lg'>Your Result:</h2>
      <Button><Copy className='w-4 h-4'/>Copy</Button>
    </div>
      <Editor
      ref={editorRef}
    initialValue="Your result will appeat here"
    height="600px"
    initialEditType="markdown"
    useCommandShortcut={true}
    onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}  /></div>
  )
}

export default OutputSection
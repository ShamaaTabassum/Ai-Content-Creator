import React, { useEffect, useRef, useState } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';

interface OUTPUTSECTIONPROPS {
  aiOutput:string;
}

const OutputSection = ({ aiOutput }: OUTPUTSECTIONPROPS) => {

  const [copied, setCopied] = useState(false);
  const editorRef: any = useRef();

  const handleCopy=() => {
    navigator.clipboard.writeText(aiOutput).then(() => {
        setCopied(true);
      }).catch((error) => {
        console.error('Failed to copy: ', error);
      });
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [copied]);
  

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  }, [aiOutput])



  return (
    <div className='bg-white shadow-lg border rounded-lg'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-lg'>Your Result:</h2>
        <Button className='flex gap-2' onClick={handleCopy}>{copied?<Check className='w-4 h-4'/>:<Copy className='w-4 h-4' />}Copy</Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your result will appeat here"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
        onChange={() => console.log(editorRef.current.getInstance().getMarkdown())} /></div>
  )
}

export default OutputSection
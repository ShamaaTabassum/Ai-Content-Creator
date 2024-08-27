import { currentUser } from "@clerk/nextjs/server";
import { desc, eq } from "drizzle-orm";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import Image from "next/image";
import Templates from "@/app/(data)/Templates";
import CopyData from "./_components/CopyData";

export interface HISTORY {
  id: Number,
  formData: string,
  aiResponse: string,
  templateSlug: string,
  createdBy: string,
  createdAt: string,
}

async function History() {

  const user: any = await currentUser();
  const email = user?.primaryEmailAddress?.emailAddress;

  if (!email) return null;

{/* @ts-ignore */}
 const historyData:HISTORY[] = await db.select({
    aiResponse: AIOutput.aiResponse,
    templateSlug: AIOutput.templateSlug,
    createdAt: AIOutput.createdAt,
  }).from(AIOutput).where(eq(AIOutput.createdBy, email)).orderBy(desc(AIOutput.id))

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
        historyData.map((item: any, i: number) => {
          const template = Templates.find((item) => item.slug === historyData[i]?.templateSlug);

          if (!template) return null;
          return (
            <div className='grid grid-cols-6  px-2 border-b-2 border-b-gray-100 w-full font-medium gap-5' key={i}>
              <div className='flex justify-start items-center  py-5 gap-2' >
                <Image src={template?.icon} alt='icon' width={20} height={20} />
                <p className='font-medium'>{template?.name}</p>
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
              <CopyData aiResponse={item?.aiResponse} index={i} />
            </div>)
        })
      }
    </div>
  );
}

export default History;
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen flex-col text-3xl font-bold text-white bg-gradient-to-tl from-purple-500 via-purple-700 to-blue-600">
AI CONTENT CREATOR
<Link href={'/dashboard'}>
<Button className="bg-transparent border-white border rounded-md hover:bg-purple-600 ">Go to Dashboard</Button>
</Link>
    </div>
  );
}

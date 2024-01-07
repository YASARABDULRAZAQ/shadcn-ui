import Image from 'next/image'
import { Button } from '@/components/ui/button'
import{ChevronRightIcon } from "lucide-react"
import{EnvelopeOpenIcon} from "@radix-ui/react-icons"



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
     <div> Hello i am Yasar</div>
     <h2 className=" border-b pb-2 text-5xl font-semibold tracking-tight ">
      The People of the Kingdom
    </h2>
    <p className="leading-7 ">
    Im a student at PIAIC and a web developer. I work with TypeScript and Next.js for development. {"I've"} created a web using Shadcn UI.
    </p>
    <div className="flex gap-7">
    <Button> Primary</Button>
    <Button variant="secondary"> Secondery</Button>
    <Button variant="destructive"> Secondery</Button>
    <Button variant="outline" size="icon">
      <ChevronRightIcon className="h-4 w-4" />
    </Button>
    <Button >
      <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
    </Button>

    
</div>
  
    </main>
  

  )
}


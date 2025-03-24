import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge"
import Link from "next/link"


export default function HeroSection(){
    return (
        <section className="flex flex-col items-center justify-center py-16 sm:py-20 lg:pb-28 transition-all animate-in lg:px-12 ">
            
                <div className="relative  p-[1px] overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group cursor-pointer">
                <Badge variant="secondary" className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-transparent transition-colors duration-200">
                <Sparkles className="h-40 w-40 mr-2 text-rose-600 animate-pulse group-hover:text-white duration-200" />
                <p className="text-base text-rose-600 group-hover:text-white duration-200">Powered by AI</p>
                </Badge>
                </div>
                
                <h1 className="font-bold py-6 text-center">
                Transform PDFs into
                <span className="relative inline-block">
                    <span className="relative z-10 px-2">concise</span>
                    
                    <span className="absolute inset-0 bg-rose-200/50 -rotate-2 rounded-lg transform -skew-y-1">
                    </span> 
                    </span>
                    summaries
                </h1>
                <h2 className="text-lg sm:text-xl lg:text-2xl px-4 lg:px-0 lg:max-w-4xl text-gray-600">Get a beautiful summary reel of the document in seconds.</h2>
                <div>
                <Button variant={"link"} className="no-underline hover:cursor-pointer text-white rounded-full bg-linear-to-r from-slate-900 to-rose-500 hover:from-rose-500 hover:to-slate-900 font-bold shadow-lg transition-colors duration-700 sm:text-lg lg:text-xl mt-6 px-6 py-6">
                    <Link className="flex gap-2 items-center !no-underline" href={"#pricing"}>
                   
                    Try Summarize  <span><ArrowRight className="w-6 h-6 animate-pulse" /></span></Link>
                </Button>
                </div>
            
        </section>
    )
}
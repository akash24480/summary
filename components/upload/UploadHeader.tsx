
import { Sparkles, Upload } from "lucide-react";
import{ Badge } from "@/components/ui/badge";

export default function UploadHeader(){
    return (
        <div className="flex flex-col items-center justify-center gap-y-6 text-center">
            <div className="relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group cursor-pointer">
            <Badge variant="secondary" className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors duration-200">
                <Sparkles className="h-6 w-6 mr-2 text-rose-600 animate-pulse" size={20} />
            <span className="text-xl text-rose-600">AI-Powered Content Creations</span>
            </Badge>
            </div>
            <div className="capitalize text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-gray-900">
           
            Start Uploading{" "}
                <span className="relative inline-block">
                    <span className="relative z-10 px-2"> Your PDF's</span>
                    
                    <span className="absolute inset-0 bg-rose-200/50 -rotate-2 rounded-lg transform -skew-y-1">
                    </span> 
                    </span>{' '}
           <div className="mt-8 text-lg leading-8 text-gray-600 max-w-2xl text-center">
           <p>Upload your PDF and let our AI do the magic!</p>
           </div>
            </div>
        </div>
    )
}
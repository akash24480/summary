import Link from "next/link"
import { FileText } from 'lucide-react';

export default function Header(){
    const isLogged = false;
    return(
       <nav className="container flex items-center justify-between py-4 lg:px-8 px-2 mx-auto">
        <div className="flex lg:flex-1 group">
            
            <Link className="flex items-center gap-1 lg:gap-2 shrink-0" href="/"><FileText className="w-5 h-5 lg:w-8 lg:h-8 text-gray-900 group-hover:rotate-12 transfrom transition ease-in-out duration-300" />
            <span className="font-extrabold lg:text-xl text-gray-900">Summarize</span>
            </Link>
        </div>

        <div className="flex lg:justify-center gap-4 lg:gap-12">
            <Link href="/#pricing">Pricing</Link>
            <Link href="/dashboard">Your Summaries</Link>
        </div>

        <div className="flex lg:justify-end lg:flex-1">
            {isLogged ? (
                <div className="flex gap-2 items-center">
                <Link href="/upload">Upload a PDF</Link>
                </div>
            ) : (
                <div>
            <Link href="/sign-in">Sign In</Link>
            </div>
            ) }
            
        </div>
       </nav> 
    )
}
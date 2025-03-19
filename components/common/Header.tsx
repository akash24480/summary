
import { FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";
import NavLink from "@/components/common/nav-link";



export default function Header(){
    const isLogged = false;
    return(
        <nav className="w-full flex items-center justify-between py-4 lg:px-8 px-2 mx-auto">
            <div className="flex lg:flex-1 group">
                
                <NavLink className="flex items-center gap-1 lg:gap-2 shrink-0" href="/"><FileText className="w-5 h-5 lg:w-8 lg:h-8 text-gray-900 group-hover:rotate-12 transfrom transition ease-in-out duration-300" />
                <span className="font-extrabold lg:text-xl text-gray-900">Summarize</span>
                </NavLink>
            </div>

            <div className="flex lg:justify-center gap-4 lg:gap-12">
                <NavLink href="/#pricing">Pricing</NavLink>
                {isLogged && <NavLink href="/dashboard">Your Summaries</NavLink>}
            </div>

            <div className="flex lg:justify-end lg:flex-1">
                {isLogged ? (
                    <div className="flex gap-2 items-center">
                    <NavLink href="/upload">Upload a PDF</NavLink>
                    <div>Pro</div>
                    <Button>User</Button>
                    </div>
                ) : (
                    <div>
                <NavLink href="/sign-in">Sign In</NavLink>
                </div>
                ) }
                
            </div>
        </nav> 
    )
}
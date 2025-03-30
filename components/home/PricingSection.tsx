import Link from "next/link"
import { cn } from "@/lib/utils";
import { ArrowRight, CheckIcon } from "lucide-react";

type priceType = {
    name:string;
    price:number;
    description:string;
    items:string[];
    id:string;
    paymentLink:string;
}

const plans = [
    {
        id:'basic',
        name:'Basic',
        price:9,
        description:'Perfect for occasional use',
        items:['5 PDF summaries per month', 'Standard processing speed', 'Email support'],
        paymentLink:'https://buy.stripe.com/test_4gw3cK0vX8aB5fG6oE',
    },

    {
        id:'pro',
        name:'Pro',
        price:19,
        description:'For professional and teams',
        items:[
            'Unlimited PDF summaries',
            'Priority Processing',
            '24/7 priority support',
            'Markdown Export'
        ],
        paymentLink:'https://buy.stripe.com/test_4gw3cK0vX8aB5fG6oE',
    }
]


const PricingCard = ({name, price, description,items, id, paymentLink}:priceType) => {
    return (
        <div className="relative w-full max-w-lg hover:scale-105 hover:transition-all duration-300">
            <div className={cn("relative flex flex-col h-full gap-4 lg:gap-8 z-10 p-8 border-[1px] border-gray-500/20 rounded-2xl", id === 'pro' && 'border-rose-500 gap-5 border-2')}>
            <div className="flex justify-between items-center gap-4">
                <div>
                <p className="text-lg lg:text-xl font-bold capitalize">{name}</p>
                <p className="text-base-content/80 mt-2">{description}</p>
                </div>
            </div>

            <div className="flex gap-2 ">
                <p className="text-5xl tracking-tight font-extrabold">${price}</p>
                <div className="flex items-center">
                    <p className="text-xs font-semibold uppercase">usd</p>
                    <p className="text-xs">/month</p>
                </div>
            </div>
            <div className="spce-y-2.5 leading-relaxed text-base flex-1">
                {items.map((item, id) => (
                    <li className="flex items-center gap-2" key={id}>
                        <CheckIcon className="text-rose-500" size={18} />
                       <span> {item}</span>
                        </li>
                ))}
            </div>
            <div className="space-y-2 flex justify-center w-full">
                <Link className={cn("w-full rounded-full flex items-center justify-center gap-2 bg-linear-to-r from-rose-800 to-rose-500 hover:from-rose-500 hover:to-rose-800 text-white border-2 py-2", id === 'pro' ? 'border-rose-900' : 'border-rose-100 from-rose-400 to-rose-500')} href={paymentLink}>Buy Now <ArrowRight size={18} /></Link>
            </div>
            </div>
        </div>
    )
}



export default function PricingSection(){
    return (
        <section className="relative overflow-hidden" id="pricing">
         <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm-px-6 lg:px-8">
            <div className="flex justify-center items-center w-full pb-12">
                <h2 className="uppercase font-bold text-xl mb-8 text-rose-500">Pricing</h2>
            </div>
            <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
                {plans.map((plan, idx)=> (
                    <PricingCard key={plan.id} {...plan} />
                ))}
            </div>
         </div>
    </section>
    )
}


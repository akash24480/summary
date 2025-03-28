import Link from "next/link"

type priceType = {
    name:string;
    price:number;
    description:string;
    items:string[];
    id:string;
    paymentLink:string;
    priceId:string;
}

const plans = [
    {
        id:'basic',
        name:'Basic',
        price:9,
        description:'Perfect for occasional use',
        items:['5 PDF summaries per month', 'Standard processing speed', 'Email support']
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
        ]
    }
]


const PricingCard = ({name, price, description,items, id, paymentLink}:priceType) => {
    return (
        <div className="relative w-full max-w-lg">
            <div>
                <p>{name}</p>
                <p>{description}</p>
            </div>

            <div>
                <p>{price}</p>
            </div>
            <div>
                {items.map((item, id) => (
                    <li key={id}>{item}</li>
                ))}
            </div>
            <div><Link href={paymentLink}>Buy Now</Link></div>
        </div>
    )
}



export default function PricingSection(){
    return <section>
         <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm-px-6 lg:px-8">
            <div>
                <h2>Pricing</h2>
            </div>
            <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
                {plans.map((plan, idx)=> (
                    <PricingCard key={plan.id} {...plan} />
                ))}
            </div>
         </div>
    </section>
}


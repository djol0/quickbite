import { Star } from "lucide-react"
import type { MenuItem } from "@/types/dashboard"
import { COLORS } from "@/constants/colors"

interface MenuItemCardProps {
    item: MenuItem;
}

const NameAndPriceTag = ({ name, price } : { name: string, price: number }) => {
    return (
        <div 
            className="flex flex-row items-center rounded-full px-2 py-0.5"
            style={{ backgroundColor: "rgba(26,22,20,0.75)", color: COLORS.paper }}
        >
            <p className="qb-body truncate text-sm font-semibold inline mr-1"> {name} • </p>
            <p className="qb-mono text-sm font-semibold"> €{price} </p>
        </div>
    )
}

const RateTag = ({ rate }: { rate: number }) => {
    return (
        <div
            className="qb-mono flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px]"
            style={{ backgroundColor: "rgba(26,22,20,0.75)", color: COLORS.mustard }}
        >
            <Star size={10} fill={COLORS.mustard} strokeWidth={0} />
            {rate.toFixed(1)}
        </div>
    )
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
    return (
        <div className="group relative flex shrink-0 snap-start flex-col gap-2 overflow-hidden rounded-xl p-3 min-w-82.5 min-h-56">
            <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-120"
                style={{ backgroundImage: `url(${item.imageurl})` }}
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="relative z-10 flex flex-row justify-between">
                <NameAndPriceTag name={item.name} price={item.price} />
                <RateTag rate={item.rating} />
            </div>
        </div>
    )
}
import { Star } from "lucide-react"
import type { MenuItem } from "@/types/dashboard"
import ImagePlaceholder from "./ImagePlaceholder"
import { COLORS } from "@/constants/colors"

interface MenuItemCardProps {
    item: MenuItem;
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
    return (
        <div
            className="flex w-[168px] shrink-0 snap-start flex-col gap-2 rounded-xl border p-3 sm:w-[188px]"
            style={{ backgroundColor: "rgba(251,246,237,0.03)", borderColor: COLORS.border }}
        >
            <div className="relative">
                <ImagePlaceholder emoji={item.emoji} className="h-24 w-full" />
                <div
                className="qb-mono absolute left-2 top-2 flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px]"
                style={{ backgroundColor: "rgba(26,22,20,0.75)", color: COLORS.mustard }}
                >
                <Star size={10} fill={COLORS.mustard} strokeWidth={0} />
                {item.rating.toFixed(1)}
                </div>
            </div>

            <div className="flex flex-col gap-0.5">
                <p className="qb-body truncate text-sm font-semibold" style={{ color: COLORS.paper }}>
                    {item.name}
                </p>
                <p className="qb-body line-clamp-2 text-xs" style={{ color: COLORS.smoke }}>
                    {item.description}
                </p>
            </div>

            <p className="qb-mono text-sm font-semibold" style={{ color: COLORS.ember }}>
                €{item.price.toFixed(2)}
            </p>
        </div>
    )
}
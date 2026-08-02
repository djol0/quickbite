import { Star, MapPin, Clock } from "lucide-react"
import type { Restaurant } from "@/types/dashboard"
import RestaurantCarousel from "./RestaurantCarousel"
import { COLORS, formatTag } from "@/constants/colors"

interface RestaurantCardProps {
    restaurant: Restaurant
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
    return (
        <article className="pb-10">
            <div className="flex items-start gap-4 ">
                <div 
                    className="w-20.5 h-20.5 inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-120"
                    style={{ backgroundImage: `url(${restaurant.imageurl})` }}
                />
                <div className="min-w-0 flex-1">
                    <h3
                        className="qb-body truncate text-md font-semibold sm:text-md"
                        style={{ color: COLORS.paper }}
                    >
                        {restaurant.name}
                    </h3>

                    <div
                        className="qb-mono  flex flex-wrap items-center gap-x-2 gap-y-1 text-xs"
                        style={{ color: COLORS.smoke }}
                    >
                        <span className="flex items-center gap-1">
                            <MapPin size={12} />
                            {restaurant.distanceKm}km
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock size={12} />{restaurant.deliveryTime}
                        </span>
                        <div
                            className="qb-mono flex shrink-0 items-center gap-1 rounded-full border px-2 py-1 text-xs"
                            style={{ borderColor: COLORS.border, color: COLORS.mustard }}
                        >
                            <Star size={12} fill={COLORS.mustard} strokeWidth={0} />
                            {restaurant.rating.toFixed(1)}
                        </div>
                    </div>

                    <div className=" flex flex-wrap gap-2">
                        {restaurant.tags.map((tag) => (
                            <span
                                key={tag}
                                className="qb-body rounded-full border px-2.5 py-1 text-[11px]"
                                style={{
                                    borderColor: COLORS.border,
                                    color: COLORS.smoke,
                                    backgroundColor: "rgba(251,246,237,0.04)",
                                }}
                            >
                                {formatTag(tag)}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <RestaurantCarousel items={restaurant.menu} />
        </article>
    )
}
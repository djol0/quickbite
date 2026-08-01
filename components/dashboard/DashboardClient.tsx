"use client"

import { COLORS } from "@/constants/colors"
import { useMemo, useState } from "react"
import type { Category, Restaurant } from "@/types/dashboard"
import CategoryCarousel from "./CategoryCarousel"
import RestaurantCard from "./RestaurantCard"

interface DashboardClientProps {
    categories: Category[];
    restaurants: Restaurant[];
}

export default function DashboardClient({
  categories,
  restaurants,
}: DashboardClientProps) {
    const [selected, setSelected] = useState<string>("all");

    const filteredRestaurants = useMemo(() => {
        if (selected === "all") return restaurants;
        return restaurants.filter((restaurant) => restaurant.tags.includes(selected));
    }, [selected, restaurants]);

    return (
        <div className="flex flex-col gap-8 sm:gap-10">
            <section>
                <h1
                    className="qb-display mb-1 text-2xl sm:text-3xl"
                    style={{ color: COLORS.paper }}
                >
                    DISCOVER
                </h1>
                <p className="qb-body mb-5 text-sm" style={{ color: COLORS.smoke }}>
                    Find something good near you.
                </p>
                <CategoryCarousel
                    categories={categories}
                    selected={selected}
                    onSelect={setSelected}
                />
            </section>

            <section>
                <h2
                    className="qb-mono mb-4 text-xs uppercase tracking-widest"
                    style={{ color: COLORS.mustard }}
                >
                    {filteredRestaurants.length} restaurants nearby
                </h2>

                {filteredRestaurants.length === 0 ? 
                    (
                        <p className="qb-body text-sm" style={{ color: COLORS.smoke }}>
                            No restaurants match this category yet.
                        </p>
                    ) : (
                        <div className="flex flex-col gap-5 sm:gap-6">
                            {filteredRestaurants.map((restaurant) => (
                                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                            ))}
                        </div>
                    )
                }
            </section>
        </div>
    );
}
"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { MenuItem } from "@/types/dashboard"
import { COLORS } from "@/constants/colors"
import MenuItemCard from "./MenuItemCard"

interface RestaurantCarouselProps {
  items: MenuItem[];
}

export default function RestaurantCarousel({ items }: RestaurantCarouselProps) {
    const scrollRef = useRef<HTMLDivElement>(null)

    const scrollBy = (amount: number) => {
        scrollRef.current?.scrollBy({ left: amount, behavior: "smooth" });
    }

    const LeftArrow = () => {
        return (
            <button
                type="button"
                aria-label="Scroll menu left"
                onClick={() => scrollBy(-200)}
                className="flex h-9 w-9 items-center justify-center rounded-full border cursor-pointer mr-2 hover:bg-white/5"
                style={{ borderColor: COLORS.border, color: COLORS.paper }}
            >
                <ChevronLeft size={14} />
            </button>
        )
    }

    const RightArrow = () => {
        return (
            <button
                type="button"
                aria-label="Scroll menu right"
                onClick={() => scrollBy(200)}
                className="flex h-9 w-9 items-center justify-center rounded-full border cursor-pointer hover:bg-white/5"
                style={{ borderColor: COLORS.border, color: COLORS.paper }}
            >
                <ChevronRight size={14} />
            </button>
        )
    }

    return (
        <div className="mt-3">
            <div className="flex flex-row justify-between items-center">
                <p
                    className="qb-mono text-xs uppercase tracking-widest"
                    style={{ color: COLORS.mustard }}
                >
                    Popular items
                </p>
                <div className="flex flex-row">
                    <LeftArrow />
                    <RightArrow />
                </div>
            </div>
       
            <div className="relative mt-2">
                <div
                    ref={scrollRef}
                    className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-1 "
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {items.map((item) => (
                        <MenuItemCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}
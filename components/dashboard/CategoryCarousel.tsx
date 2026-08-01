"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { Category } from "@/types/dashboard"
import { COLORS } from "@/constants/colors"

interface CategoryCarouselProps {
    categories: Category[];
    selected: string;
    onSelect: (id: string) => void;
}

export default function CategoryCarousel({
    categories,
    selected,
    onSelect,
}: CategoryCarouselProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const scrollBy = (amount: number) => {
        scrollRef.current?.scrollBy({ left: amount, behavior: "smooth" })
    }

    const LeftButton = () => {
        return (
            <button
                type="button"
                aria-label="Scroll categories left"
                onClick={() => scrollBy(-240)}
                className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 items-center justify-center rounded-full border cursor-pointer"
                style={{ backgroundColor: COLORS.card, borderColor: COLORS.border, color: COLORS.paper }}
            >
                <ChevronLeft size={16} />
            </button>
        )
    }

    const RightButton = () => {
        return (
            <button
                type="button"
                aria-label="Scroll categories right"
                onClick={() => scrollBy(240)}
                className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 items-center justify-center rounded-full border cursor-pointer"
                style={{ backgroundColor: COLORS.card, borderColor: COLORS.border, color: COLORS.paper }}
            >
                <ChevronRight size={16} />
            </button>
        )
    }

    return (
        <div className="relative">
            <LeftButton />
            <div
                ref={scrollRef}
                className=" flex items-center gap-2.5 overflow-x-auto scroll-smooth px-1 py-1 sm:mx-10"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {categories.map((category) => {
                    const isActive = category.id === selected;
                    return (
                        <button
                            key={category.id}
                            type="button"
                            onClick={() => onSelect(category.id)}
                            aria-pressed={isActive}
                            className="qb-body flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors"
                            style={
                                isActive
                                ? { backgroundColor: COLORS.ember, borderColor: COLORS.ember, color: COLORS.paper }
                                : {
                                    backgroundColor: "rgba(251,246,237,0.04)",
                                    borderColor: COLORS.border,
                                    color: COLORS.smoke,
                                }
                            }
                        >
                            <span aria-hidden> {category.emoji} </span>
                            {category.label}
                        </button>
                    );
                })}
            </div>
            <RightButton />
        </div>
    )
}
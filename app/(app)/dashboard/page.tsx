import { categories } from "@/data/categories"
import { restaurants } from "@/data/restaurants"
import DashboardClient from "@/components/dashboard/DashboardClient"
import { COLORS } from "@/constants/colors"

export default function DashboardPage() {
    return (
        <main
            className="min-h-screen px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10"
            style={{ backgroundColor: COLORS.bg }}
        >
            <div className="mx-auto max-w-[1600px]">
                <DashboardClient categories={categories} restaurants={restaurants} />
            </div>
        </main>
    )
}
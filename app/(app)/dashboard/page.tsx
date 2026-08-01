import { categories } from "@/data/categories"
import { restaurants } from "@/data/restaurants"
import DashboardClient from "@/components/dashboard/DashboardClient"

export default function DashboardPage() {
    return (
        <main className="min-h-screen py-6 sm:py-8 lg:py-10">
            <div className="mx-auto">
                <DashboardClient categories={categories} restaurants={restaurants} />
            </div>
        </main>
    )
}
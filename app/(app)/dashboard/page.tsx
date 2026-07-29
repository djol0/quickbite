import { JSX } from "react"
import AuthBrandPanel from "@/components/auth/AuthBrandPanel"
import LoginForm from "@/components/auth/LoginForm"
import { COLORS } from "@/constants/colors"

export default function Dashboard(): JSX.Element {
    return (
        <div
            className="min-h-screen w-full flex flex-col md:flex-row qb-grate"
            style={{ backgroundColor: COLORS.bg }}
        >

        </div>
    );
}
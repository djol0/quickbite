import { JSX } from "react"
import AuthBrandPanel from "@/components/auth/AuthBrandPanel"
import LoginForm from "@/components/auth/LoginForm"
import { COLORS } from "@/constants/colors"
import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function LoginPage(): Promise<JSX.Element> {
    const session = await auth()
    if(session) {
        redirect('/dashboard')
    }

    return (
        <div
            className="min-h-screen w-full flex flex-col md:flex-row qb-grate"
            style={{ backgroundColor: COLORS.bg }}
        >
            <AuthBrandPanel />
            <LoginForm />
        </div>
    );
}
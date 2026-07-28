import { JSX } from "react"
import AuthBrandPanel from "@/components/auth/AuthBrandPanel"
import LoginForm from "@/components/auth/LoginForm"
import { COLORS } from "@/constants/colors"

export default function LoginPage(): JSX.Element {

    return (
        <div
            className="min-h-screen w-full flex flex-col md:flex-row qb-grate"
            style={{ backgroundColor: COLORS.bg }}
        >


      {/* <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500&display=swap');
        .qb-display { font-family: 'Archivo Black', sans-serif; }
        .qb-body { font-family: 'Inter', sans-serif; }
        .qb-mono { font-family: 'JetBrains Mono', monospace; }

      `}</style> */}



            <AuthBrandPanel />
            <LoginForm />
      
        </div>
    );
}
"use client"

import { MapPin, ChevronDown, User, LogOut } from "lucide-react"
import { COLORS } from "@/constants/colors"
import { signOut } from "next-auth/react"

const Logo = () => {
    return (
        <div className="flex items-center gap-2 shrink-0">
            <div
                className="h-9 w-9 rounded-full flex items-center justify-center border-2"
                style={{ borderColor: COLORS.ember }}
            >
                <span className="qb-display text-xs" style={{ color: COLORS.ember }}>
                    QB
                </span>
            </div>
            <span
                className="qb-display hidden sm:inline text-sm tracking-tight"
                style={{ color: COLORS.paper }}
            >
                QUICK BITE
            </span>
        </div>
    )
}

interface AddressSelectorProps {
  fullWidth?: boolean;
}

const AddressSelector = ({ fullWidth = false }: AddressSelectorProps) => {
    return (
        <button
            type="button"
            aria-haspopup="listbox"
            // className={`qb-body flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-colors hover:bg-white/5 ${fullWidth ? "w-full" : "w-56 sm:w-64"} cursor-pointer`}
            // style={{
            //     backgroundColor: "rgba(251,246,237,0.05)",
            //     borderColor: COLORS.border,
            //     color: COLORS.paper,
            // }}
            className={`qb-body flex items-center gap-4  px-3 text-sm cursor-pointer`}
            style={{
                // backgroundColor: "rgba(251,246,237,0.05)",
                // borderColor: COLORS.border,
                color: COLORS.paper,
            }}
        >
            <MapPin size={40} style={{ color: COLORS.mustard, backgroundColor: "rgba(251,246,237,0.05)" }} className="shrink-0 p-1.5 rounded-3xl" />
            <span className="truncate">Home</span>
            <ChevronDown
                size={16}
                className="ml-auto shrink-0"
                style={{ color: COLORS.smoke }}
            />
        </button>
    )
}

const UserButton = () => {
    return (
        <button
            type="button"
            aria-label="Profile"
            className="flex h-9 w-9 items-center justify-center rounded-full border transition-colors hover:bg-white/5 cursor-pointer"
            style={{ borderColor: COLORS.border, color: COLORS.paper }}
        >
            <User size={16} />
        </button>
    );
}

const logout = () => { 
    signOut({ redirectTo: '/login' }) 
}

function LogoutButton({ className = "" }: { className?: string }) {
    return (
        <button
            type="button"
            onClick={logout}
            className={`qb-body inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-medium transition-colors hover:bg-white/5 ${className} cursor-pointer`}
            style={{ borderColor: COLORS.border, color: COLORS.paper }}
        >
            <LogOut size={19} />
            Logout
        </button>
    );
}

export default function Header() {
    return (
        <header
            className="sticky top-0 z-40 border-b backdrop-blur"
            style={{ backgroundColor: COLORS.bg, borderColor: COLORS.border }}
        >
            <div className="py-3">
                <nav aria-label="Primary" className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 md:gap-8 min-w-0">
                        <Logo />

                            <AddressSelector />
               
                    </div>

                    <div className="flex items-center gap-2 md:gap-3">
                        <UserButton />
                        <LogoutButton className="hidden md:inline-flex" />
                    </div>
                </nav>
            </div>
        </header>
    )
}

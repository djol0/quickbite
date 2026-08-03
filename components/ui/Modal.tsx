"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"
import { COLORS } from "@/constants/colors"

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

/**
 * Generic modal shell — backdrop, portal to <body>, escape-to-close,
 * body scroll lock. Reused by AddressModal and any future modal
 * (payment method, edit profile, etc.) so they don't each rebuild this.
 *
 * NOTE: the `qb-modal-in` keyframe below is duplicated from the Login
 * page's `qb-rise` animation. Worth moving both into globals.css once,
 * same as the font classes.
 */
export default function Modal({ isOpen, onClose, children }: ModalProps) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    useEffect(() => {
        if (!isOpen) return

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose()
        }

        document.addEventListener("keydown", handleKeyDown)
        document.body.style.overflow = "hidden"

        return () => {
            document.removeEventListener("keydown", handleKeyDown)
            document.body.style.overflow = ""
        }
    }, [isOpen, onClose])

    if (!mounted || !isOpen) return null

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <style>{`
                @keyframes qb-modal-in {
                    from { opacity: 0; transform: translateY(10px) scale(0.98); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
            `}</style>

            {/* Backdrop */}
            <div
                className="absolute inset-0"
                style={{ backgroundColor: "rgba(0,0,0,0.65)" }}
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Panel */}
            <div
                role="dialog"
                aria-modal="true"
                className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl border p-6 shadow-2xl sm:p-7"
                style={{
                    backgroundColor: COLORS.card,
                    borderColor: COLORS.border,
                    animation: "qb-modal-in 0.2s ease-out",
                }}
            >
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close"
                    className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border transition-colors hover:bg-white/5 cursor-pointer"
                    style={{ borderColor: COLORS.border, color: COLORS.smoke }}
                >
                    <X size={16} />
                </button>

                {children}
            </div>
        </div>,
        document.body
    )
}
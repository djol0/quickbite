"use client"

import React, { useState, FormEvent, JSX } from "react"
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react"
import { COLORS } from "@/constants/colors"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation";

function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 48 48" width="18" height="18" {...props}>
            <path
                fill="#FFC107"
                d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"
            />
            <path
                fill="#FF3D00"
                d="M6.3 14.7l6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4c-7.5 0-14 4.2-17.7 10.7z"
            />
            <path
                fill="#4CAF50"
                d="M24 44c5.5 0 10.4-1.9 14.3-5.1l-6.6-5.6C29.6 35.1 26.9 36 24 36c-5.3 0-9.7-3.1-11.3-7.6l-6.5 5C9.9 39.6 16.4 44 24 44z"
            />
            <path
                fill="#1976D2"
                d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.2 5.7l6.6 5.6C41.5 36 44 30.4 44 24c0-1.3-.1-2.7-.4-3.5z"
            />
        </svg>
    );
  }

export default function LoginForm(): JSX.Element {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setLoading(true);
        
        const result = await signIn("credentials", {
            email,
            password,
            redirectTo: "/dashboard",
        })

        console.log(result)
        setLoading(false)
    };

    const handleGoogle = (): void => {
        signIn("google", {
            redirectTo: "/dashboard"
        })
    };

    return (
        <div className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="w-full max-w-sm lg:max-w-md qb-animate">
                <div
                    className="px-6 pt-2 pb-7 sm:px-8 sm:pt-3 sm:pb-8 md:px-8 md:pt-3 md:pb-8 lg:px-9 lg:pt-3 lg:pb-9 shadow-2xl border rounded-2xl"
                    style={{ backgroundColor: COLORS.card, color: COLORS.paper, borderColor: COLORS.border }}
                >
                    <div className="flex flex-col items-center text-center mb-7 md:hidden pt-5">

                        <div className="relative mb-3">
                            <div
                                className="absolute inset-0 rounded-full blur-md qb-glow"
                                style={{ backgroundColor: COLORS.ember, opacity: 0.5 }}
                            />
                            <div
                                className="relative h-14 w-14 rounded-full flex items-center justify-center border-2"
                                style={{ borderColor: COLORS.ember, backgroundColor: COLORS.card }}
                            >
                                <span className="qb-display text-lg" style={{ color: COLORS.ember }}>
                                    QB
                                </span>
                            </div>
                        </div>

                        <h1 className="qb-display text-2xl sm:text-3xl tracking-tight" style={{ color: COLORS.paper }}>
                            QUICK BITE
                        </h1>

                        <p
                            className="qb-body text-xs mt-1 tracking-widest uppercase"
                            style={{ color: COLORS.mustard, letterSpacing: "0.15em" }}
                        >
                            fast &middot; fresh &middot; no fuss
                        </p>
                    </div>

                    <div className="hidden md:block mb-7 mt-6">
                        <h1 className="qb-display text-2xl tracking-tight" style={{ color: COLORS.paper }}>
                            WELCOME BACK
                        </h1>
                        <p className="qb-body text-xs mt-1" style={{ color: COLORS.smoke }}>
                            Sign in to pick up where you left off.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 mt-12">
                        <div>
                            <label
                                htmlFor="email"
                                className="qb-body block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                                style={{ color: COLORS.smoke }}
                            >
                                Email
                            </label>

                            <div className="relative">
                                <Mail
                                    size={17}
                                    className="absolute left-3 top-1/2 -translate-y-1/2"
                                    style={{ color: COLORS.smoke }}
                                />
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    className="qb-body qb-input w-full pl-10 pr-3 py-2.5 rounded-lg text-sm border"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-1.5">
                                <label
                                    htmlFor="password"
                                    className="qb-body block text-xs font-semibold uppercase tracking-wide"
                                    style={{ color: COLORS.smoke }}
                                >
                                    Password
                                </label>

                                <a
                                    href="#"
                                    className="qb-body text-xs font-medium hover:underline"
                                    style={{ color: COLORS.ember }}
                                >
                                    Forgot?
                                </a>
                            </div>

                            <div className="relative">
                                <Lock
                                    size={17}
                                    className="absolute left-3 top-1/2 -translate-y-1/2"
                                    style={{ color: COLORS.smoke }}
                                />
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="qb-body qb-input w-full pl-10 pr-10 py-2.5 rounded-lg text-sm border"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((v) => !v)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2"
                                    style={{ color: COLORS.smoke }}
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="qb-body w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold text-white transition-transform active:scale-[0.98] disabled:opacity-70"
                            style={{ backgroundColor: COLORS.ember }}
                        >
                            {loading ? "Signing in…" : "Sign in"}
                            {!loading && <ArrowRight size={16} />}
                        </button>
                    </form>

                    <div className="flex items-center gap-3 my-6">
                        <div
                            className="flex-1 border-t border-dashed"
                            style={{ borderColor: COLORS.border }}
                        />

                        <span
                            className="qb-mono text-[10px] tracking-widest"
                            style={{ color: COLORS.smoke }}
                        >
                            OR
                        </span>

                        <div
                            className="flex-1 border-t border-dashed"
                            style={{ borderColor: COLORS.border }}
                        />
                    </div>

                    <button
                        type="button"
                        onClick={handleGoogle}
                        className="qb-body w-full flex items-center justify-center gap-2.5 py-2.5 rounded-lg text-sm font-semibold border transition-colors"
                        style={{
                            borderColor: COLORS.border,
                            color: COLORS.paper,
                            backgroundColor: "rgba(251,246,237,0.04)",
                        }}
                    >
                        <GoogleIcon />
                        Continue with Google
                    </button>

                    <p
                        className="qb-body text-center text-xs mt-6 mb-4"
                        style={{ color: COLORS.smoke }}
                    >
                        New to Quick Bite?{" "}
                        <a
                            href="#"
                            className="font-semibold hover:underline"
                            style={{ color: COLORS.ember }}
                        >
                            Create an account
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
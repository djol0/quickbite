import { COLORS } from "@/constants/colors"
import { FOOTER_COLUMNS } from "@/constants/footer-links"
import { FooterColumnProps } from "@/types/footer"
import Link from "next/link"

const FooterColumn = ({ column, className = "" }: FooterColumnProps) => {
    return (
        <div className={className}>
            <h3
                className="qb-mono text-xs tracking-widest uppercase mb-4 text-center"
                style={{ color: COLORS.mustard }}
            >
                {column.title}
            </h3>
            <ul className="space-y-2.5  text-center">
                {column.links.map((link) => (
                    <li key={link.label}>
                        <Link
                            href={link.href}
                            target="_blank"
                            className="qb-body text-sm opacity-70 hover:opacity-100 transition-opacity"
                            style={{ color: COLORS.paper }}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default function Footer() {
    return (
        <footer style={{ backgroundColor: COLORS.card }}>
            {/* Full footer — tablet and desktop */}
            <div className="hidden md:block border-t" style={{ borderColor: COLORS.border }}>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-16">
                    <nav
                        aria-label="Footer"
                        className="grid grid-cols-3 lg:grid-cols-4 gap-8"
                    >
                        {FOOTER_COLUMNS.map((column) => (
                            <FooterColumn
                                key={column.title}
                                column={column}
                                className={column.title === "Follow Us" ? "hidden lg:block" : ""}
                            />
                        ))}
                    </nav>

                    <div
                        className="mt-12 pt-6 border-t text-center"
                        style={{ borderColor: COLORS.border }}
                    >
                        <p className="qb-body text-xs" style={{ color: COLORS.smoke }}>
                            © 2026 QuickBite. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>

            {/* Minimal footer — mobile only */}
            <div
                className="md:hidden border-t px-4 py-6 text-center"
                style={{ borderColor: COLORS.border }}
            >
                <p className="qb-body text-xs" style={{ color: COLORS.smoke }}>
                    © 2026 QuickBite
                </p>
            </div>
        </footer>
    )
}
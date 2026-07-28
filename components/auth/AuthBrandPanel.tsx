import { JSX } from "react"
import { Flame, Clock, MapPin } from "lucide-react"
import { COLORS } from "@/constants/colors"

const FEATURES = [
    { icon: Flame, text: "Freshly Cooked Every Time" },
    { icon: Clock, text: "Fast Pickup & Delivery" },
    { icon: MapPin, text: "Real-Time Order Tracking" },
]

export default function AuthBrandPanel(): JSX.Element {

    return (
        <div className="hidden md:flex md:w-2/5 lg:w-1/2 xl:w-3/5 relative flex-col justify-between p-8 md:p-10 lg:p-12 xl:p-16 overflow-hidden">
            <div
                className="absolute -top-24 -left-24 h-96 w-96 rounded-full blur-3xl"
                style={{ backgroundColor: COLORS.ember, opacity: 0.12 }}
            />

            <div className="relative">

                <div className="flex items-center gap-3 mb-2">
                    <div
                        className="h-11 w-11 rounded-full flex items-center justify-center border-2"
                        style={{ borderColor: COLORS.ember }}
                    >
                        <span className="qb-display text-sm" style={{ color: COLORS.ember }}>
                            QB
                        </span>
                    </div>
                            
                    <span
                        className="qb-mono text-xs tracking-widest"
                        style={{ color: COLORS.smoke }}
                    >
                        QUICK BITE
                    </span>
                </div>
            </div>

            <div className="relative max-w-md">
                <h2
                    className="qb-display leading-[1.05] mb-6"
                    style={{ color: COLORS.paper, fontSize: "clamp(1.75rem, 4vw, 3.5rem)" }}
                >
                    YOUR ORDER,
                    <br />
                    FIRED FAST.
                </h2>

                <p className="qb-body text-sm xl:text-base mb-10" style={{ color: COLORS.smoke }}>
                    Sign in to reorder your usual, track what&apos;s cooking, and skip
                    the line at pickup.
                </p>

                <div className="space-y-4">
                    {FEATURES.map(({ icon: Icon, text }) => (
                        <div key={text} className="flex items-center gap-3">
                            <div
                                className="h-9 w-9 shrink-0 rounded-lg flex items-center justify-center"
                                style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                            >
                                <Icon size={16} style={{ color: COLORS.mustard }} />
                            </div>
                            <span className="qb-body text-sm" style={{ color: COLORS.paper }}>
                                {text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <p
                className="relative qb-mono text-[11px] tracking-widest"
                style={{ color: COLORS.smoke }}
            >
                Always Fresh • Always Fast
            </p>
        </div> 
    );
}
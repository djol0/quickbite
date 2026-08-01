import { COLORS } from "@/constants/colors"

interface ImagePlaceholderProps {
    emoji: string;
    className?: string;
    emojiClassName?: string;
}

export default function ImagePlaceholder({
    emoji,
    className = "",
    emojiClassName = "text-3xl",
}: ImagePlaceholderProps) {
    return (
        <div
            className={`relative flex items-center justify-center overflow-hidden rounded-xl border ${className}`}
            style={{ backgroundImage: "linear-gradient(135deg, rgba(255,75,46,0.18), rgba(245,185,66,0.12))", borderColor: COLORS.border }}
        >
            <span aria-hidden className={emojiClassName}>
                {emoji}
            </span>
        </div>
    )
}
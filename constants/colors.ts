export const COLORS = {
    bg: "#1A1614",
    card: "#221C18",
    border: "rgba(251,246,237,0.10)",
    paper: "#FBF6ED",
    ink: "#2B2420",
    smoke: "#8A7D71",
    ember: "#FF4B2E",
    mustard: "#F5B942",
};

export function formatTag(slug: string): string {
    return slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}
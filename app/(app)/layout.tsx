import Footer from "@/components/layout/Footer";

export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <main>
                {children}
                <Footer />
            </main>
        </div>
    );
}